import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TIERS = ['primitives', 'patterns', 'shells'];
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx']);
const RESOLVE_CANDIDATES = ['', '.ts', '.tsx', '.css', '/index.ts', '/index.tsx'];

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function isStoryFile(fileName) {
  return fileName.endsWith('.stories.ts') || fileName.endsWith('.stories.tsx');
}

function collectTierFiles(tierDir) {
  if (!fs.existsSync(tierDir)) {
    return [];
  }
  const files = [];
  for (const entry of fs.readdirSync(tierDir, { withFileTypes: true })) {
    const fullPath = path.join(tierDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectTierFiles(fullPath));
      continue;
    }
    if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name)) && !isStoryFile(entry.name)) {
      files.push(fullPath);
    }
  }
  return files.sort();
}

function advanceStringLiteral(source, start, quote) {
  let i = start + 1;
  while (i < source.length) {
    if (source[i] === '\\') {
      i += 2;
      continue;
    }
    if (source[i] === quote) {
      return i + 1;
    }
    i += 1;
  }
  return i;
}

function stripComments(source) {
  let out = '';
  let i = 0;
  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];
    if (ch === "'" || ch === '"' || ch === '`') {
      const end = advanceStringLiteral(source, i, ch);
      out += source.slice(i, end);
      i = end;
    } else if (ch === '/' && next === '/') {
      const nl = source.indexOf('\n', i + 2);
      i = nl === -1 ? source.length : nl;
    } else if (ch === '/' && next === '*') {
      const close = source.indexOf('*/', i + 2);
      i = close === -1 ? source.length : close + 2;
    } else {
      out += ch;
      i += 1;
    }
  }
  return out;
}

function extractRelativeSpecifiers(code) {
  const specifiers = [];
  const patterns = [
    /(?:^|[\s;{}()])(?:import|export)\s+(?:[^'"`]*?\s+from\s+)?(['"])(\.[^'"]+)\1/gm,
    /\bimport\s*\(\s*(['"])(\.[^'"]+)\1\s*\)/gm,
  ];
  for (const regex of patterns) {
    let match;
    while ((match = regex.exec(code)) !== null) {
      specifiers.push(match[2]);
    }
  }
  return specifiers;
}

function resolveRelativeTarget(fromAbs, specifier, srcRoot) {
  const baseAbs = path.resolve(path.dirname(fromAbs), specifier);
  for (const suffix of RESOLVE_CANDIDATES) {
    const candidate = baseAbs + suffix;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return toPosix(path.relative(srcRoot, candidate));
    }
  }
  return null;
}

function classifyTarget(relFromSrc) {
  if (relFromSrc === 'index.ts' || relFromSrc === 'index.tsx') {
    return 'barrel';
  }
  const topDir = relFromSrc.split('/')[0];
  if (TIERS.includes(topDir)) {
    return topDir;
  }
  return 'peer';
}

function validateFileImports(fileAbs, tier, srcRoot, intraEdges, violations) {
  const fileRel = toPosix(path.relative(srcRoot, fileAbs));
  const code = stripComments(fs.readFileSync(fileAbs, 'utf8'));
  for (const spec of extractRelativeSpecifiers(code)) {
    const targetRel = resolveRelativeTarget(fileAbs, spec, srcRoot);
    if (!targetRel) {
      violations.push(`[layer-violation] ${fileRel}: unresolvable relative import '${spec}'`);
      continue;
    }
    const targetClass = classifyTarget(targetRel);
    if (targetClass === 'barrel') {
      violations.push(`[layer-violation] ${fileRel}: tier modules must not import root barrel '${targetRel}'`);
    } else if (tier === 'primitives' && TIERS.includes(targetClass)) {
      violations.push(`[layer-violation] ${fileRel}: primitives cannot import ${targetClass} ('${targetRel}')`);
    } else if (tier === 'patterns' && targetClass === 'shells') {
      violations.push(`[layer-violation] ${fileRel}: patterns cannot import shells ('${targetRel}')`);
    } else if (targetClass === tier) {
      const neighbors = intraEdges.get(fileRel) ?? [];
      neighbors.push(targetRel);
      intraEdges.set(fileRel, neighbors);
    }
  }
}

function detectTierCycles(adjMap, tierName) {
  const state = new Map();
  const stack = [];
  const cycles = [];

  function dfs(node) {
    state.set(node, 1);
    stack.push(node);
    for (const next of adjMap.get(node) ?? []) {
      const nextState = state.get(next) ?? 0;
      if (nextState === 1) {
        const startIdx = stack.indexOf(next);
        cycles.push(`[layer-cycle] Cycle in ${tierName}: ${[...stack.slice(startIdx), next].join(' -> ')}`);
      } else if (nextState === 0) {
        dfs(next);
      }
    }
    stack.pop();
    state.set(node, 2);
  }

  for (const node of adjMap.keys()) {
    if ((state.get(node) ?? 0) === 0) {
      dfs(node);
    }
  }
  return cycles;
}

function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const srcRoot = path.resolve(scriptDir, '..', 'src');
  const violations = [];
  const counts = {};

  for (const tier of TIERS) {
    const files = collectTierFiles(path.join(srcRoot, tier));
    counts[tier] = files.length;
    const intraEdges = new Map();
    for (const fileAbs of files) {
      validateFileImports(fileAbs, tier, srcRoot, intraEdges, violations);
    }
    violations.push(...detectTierCycles(intraEdges, tier));
  }

  if (violations.length > 0) {
    for (const msg of violations) {
      console.error(msg);
    }
    process.exit(1);
  }
  const total = counts.primitives + counts.patterns + counts.shells;
  console.log(
    `[check:layers] OK: ${total} tier files checked (${counts.primitives} primitives, ${counts.patterns} patterns, ${counts.shells} shells), 0 violations.`
  );
}

main();
