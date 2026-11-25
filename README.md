# Yggdrasil UI (`@yggdrasil-lab/ui`)

Shared React + TypeScript design system and hosted Storybook 8 workbench for Yggdrasil homelab PWAs:
- **Kratos** (Health / strength training and circadian fasting)
- **Midas** (Wealth / financial freedom runway and budgets)
- **Iris** (`iris-web` / inbound email audit dashboard)

## Layered Architecture (ADR 0001)

Components follow a strict three-tier composition hierarchy with automated one-way import-boundary enforcement (`npm run check:layers`):

- `src/primitives/` (20 components): Foundational visual building blocks with no pattern or shell dependencies.
- `src/patterns/` (17 components): Reusable domain-agnostic compositions built from primitives.
- `src/shells/` (3 components): Page and navigation chrome built on primitives and patterns.
- Peer runtime folders: `theme/`, `hooks/`, `utils/`, `auth/`, `styles/`.

All tiers re-export from the flat root barrel (`@yggdrasil-lab/ui`), paired with precompiled `@yggdrasil-lab/ui/style.css` and colocated Storybook stories organized under `Foundations / Primitives / Patterns / Shells`.

## Services

| Service | Internal Port | Purpose |
| :--- | :--- | :--- |
| `ui-storybook` | `8080` (`aether-net`, behind Traefik + Authentik forward-auth) | Static Nginx (`nginx:1.27-alpine`) serving the Storybook 8 component workbench |

## Development & Build

```bash
# Run local Storybook
npm run dev

# Enforce one-way primitives -> patterns -> shells imports
npm run check:layers

# Layer check + typecheck + Vite library build into committed dist/
npm run build:lib

# Layer check + static Storybook build
npm run build:storybook

# Full verification + library + Storybook build
npm run build
```

## Deployment & Canonical Documentation

- **Deployment:** Automated via `.github/workflows/deploy.yml` on push to `main`, deploying Docker Swarm stack `ui` at `https://storybook.${DOMAIN_NAME}`.
- **Vault Stack Reference:** `second-brain/Areas/90-Infrastructure/UI/UI Stack.md` (component catalog, env vars, Playwright visual gates, and pitfalls).
- **Architecture Decision Record:** `second-brain/Areas/90-Infrastructure/UI/ADR/0001-layered-ui-composition-architecture.md`.
