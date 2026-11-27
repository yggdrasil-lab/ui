var At = Object.defineProperty;
var $t = (e, t, n) => t in e ? At(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => $t(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as u, jsx as a, Fragment as de } from "react/jsx-runtime";
import ae, { forwardRef as ut, createElement as we, useState as R, useRef as _, useEffect as G, useCallback as B, useId as Lt, useMemo as Pt } from "react";
import { createPortal as Bt } from "react-dom";
const Sa = [
  "default",
  "midas",
  "kratos",
  "kairos",
  "odysseus"
], Ea = {
  default: {
    id: "default",
    label: "Yggdrasil Slate",
    subtitle: "Default Amber & Slate",
    swatchHex: "#f59e0b",
    secondaryHex: "#10b981"
  },
  midas: {
    id: "midas",
    label: "Midas",
    subtitle: "Obsidian & Burnished Gold",
    swatchHex: "#d4a038",
    secondaryHex: "#34d399"
  },
  kratos: {
    id: "kratos",
    label: "Kratos",
    subtitle: "Carbon Forge & Crimson",
    swatchHex: "#f43f5e",
    secondaryHex: "#fb923c"
  },
  kairos: {
    id: "kairos",
    label: "Kairos",
    subtitle: "Twilight Mist & Candle",
    swatchHex: "#c4b5fd",
    secondaryHex: "#e5c185"
  },
  odysseus: {
    id: "odysseus",
    label: "Odysseus",
    subtitle: "Aegean Deep & Compass Teal",
    swatchHex: "#38bdf8",
    secondaryHex: "#f59e0b"
  }
}, V = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300",
  brand: "text-accent"
}, ue = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100",
  brand: "text-accent"
}, me = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100",
  brand: "text-accent hover:opacity-80"
}, Ae = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white",
  brand: "bg-accent text-accent-fg"
}, $e = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow",
  brand: "bg-accent text-accent-fg shadow"
}, Le = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active",
  brand: "text-accent bg-accent/15 font-semibold active"
}, Pe = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5",
  brand: "bg-accent/10"
}, Be = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5",
  brand: "border-accent bg-accent/5"
}, _e = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30",
  brand: "bg-accent/10 border-accent/40 shadow-md ring-1 ring-accent/30"
}, be = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm",
  brand: "bg-accent/15 text-accent border-accent/40 shadow-sm"
}, O = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500",
  brand: "focus:border-accent"
}, pe = {
  amber: {
    container: "bg-amber-500/10 border-amber-500/25",
    header: "text-amber-300"
  },
  blue: {
    container: "bg-blue-500/10 border-blue-500/25",
    header: "text-blue-300"
  },
  emerald: {
    container: "bg-emerald-500/10 border-emerald-500/25",
    header: "text-emerald-300"
  },
  purple: {
    container: "bg-purple-500/10 border-purple-500/25",
    header: "text-purple-300"
  },
  slate: {
    container: "bg-slate-700/30 border-slate-600/50",
    header: "text-slate-200"
  },
  brand: {
    container: "bg-accent/10 border-accent/25",
    header: "text-accent"
  }
}, fe = {
  amber: {
    eyebrow: "text-amber-400",
    bar: "from-amber-500 to-emerald-400"
  },
  blue: {
    eyebrow: "text-sky-400",
    bar: "from-blue-500 to-emerald-400"
  },
  emerald: {
    eyebrow: "text-emerald-400",
    bar: "from-emerald-500 to-sky-400"
  },
  purple: {
    eyebrow: "text-purple-400",
    bar: "from-purple-500 to-emerald-400"
  },
  slate: {
    eyebrow: "text-slate-300",
    bar: "from-slate-400 to-emerald-400"
  },
  brand: {
    eyebrow: "text-accent",
    bar: "from-accent to-secondary"
  }
}, q = {
  amber: "amber",
  blue: "blue",
  emerald: "emerald",
  purple: "blue",
  slate: "secondary",
  brand: "brand"
}, Ta = ({
  header: e,
  bottomNav: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ u("div", { className: `min-h-screen bg-background text-foreground flex flex-col justify-between w-full selection:bg-accent selection:text-accent-fg ${r}`, children: [
  e,
  /* @__PURE__ */ a("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: n }),
  t
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mt = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var It = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = ut(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: l,
    ...i
  }, d) => we(
    "svg",
    {
      ref: d,
      ...It,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: mt("lucide", s),
      ...i
    },
    [
      ...l.map(([c, b]) => we(c, b)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = (e, t) => {
  const n = ut(
    ({ className: r, ...s }, o) => we(zt, {
      ref: o,
      iconNode: t,
      className: mt(`lucide-${_t(e)}`, r),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = A("ArrowRightLeft", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = A("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = A("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = A("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = A("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = A("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = A("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = A("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = A("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = A("Delete", [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = A("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = A("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = A("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = A("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = A("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = A("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = A("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = A("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = A("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = A("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = A("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = A("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = A("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = A("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = A("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = A("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = A("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Ee = "-", tr = (e) => {
  const t = nr(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Ee);
      return i[0] === "" && i.length !== 1 && i.shift(), yt(i, t) || rr(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const d = n[l] || [];
      return i && r[l] ? [...d, ...r[l]] : d;
    }
  };
}, yt = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), s = r ? yt(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const o = e.join(Ee);
  return (l = t.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : l.classGroupId;
}, Ie = /^\[(.+)\]$/, rr = (e) => {
  if (Ie.test(e)) {
    const t = Ie.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, nr = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return sr(Object.entries(e.classGroups), n).forEach(([o, l]) => {
    Ne(l, r, o, t);
  }), r;
}, Ne = (e, t, n, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? t : ze(t, s);
      o.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (ar(s)) {
        Ne(s(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([o, l]) => {
      Ne(l, ze(t, o), n, r);
    });
  });
}, ze = (e, t) => {
  let n = e;
  return t.split(Ee).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ar = (e) => e.isThemeGetter, sr = (e, t) => t ? e.map(([n, r]) => {
  const s = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, i]) => [t + l, i])) : o);
  return [n, s];
}) : e, or = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (o, l) => {
    n.set(o, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let l = n.get(o);
      if (l !== void 0)
        return l;
      if ((l = r.get(o)) !== void 0)
        return s(o, l), l;
    },
    set(o, l) {
      n.has(o) ? n.set(o, l) : s(o, l);
    }
  };
}, vt = "!", lr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, s = t[0], o = t.length, l = (i) => {
    const d = [];
    let c = 0, b = 0, p;
    for (let y = 0; y < i.length; y++) {
      let x = i[y];
      if (c === 0) {
        if (x === s && (r || i.slice(y, y + o) === t)) {
          d.push(i.slice(b, y)), b = y + o;
          continue;
        }
        if (x === "/") {
          p = y;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const h = d.length === 0 ? i : i.substring(b), f = h.startsWith(vt), m = f ? h.substring(1) : h, g = p && p > b ? p - b : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, ir = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, cr = (e) => ({
  cache: or(e.cacheSize),
  parseClassName: lr(e),
  ...tr(e)
}), dr = /\s+/, ur = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  } = t, o = [], l = e.trim().split(dr);
  let i = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], {
      modifiers: b,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = n(c);
    let m = !!f, g = r(m ? h.substring(0, f) : h);
    if (!g) {
      if (!m) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = r(h), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const y = ir(b).join(":"), x = p ? y + vt : y, N = x + g;
    if (o.includes(N))
      continue;
    o.push(N);
    const S = s(g, m);
    for (let E = 0; E < S.length; ++E) {
      const T = S[E];
      o.push(x + T);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function mr() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = wt(t)) && (r && (r += " "), r += n);
  return r;
}
const wt = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = wt(e[r])) && (n && (n += " "), n += t);
  return n;
};
function br(e, ...t) {
  let n, r, s, o = l;
  function l(d) {
    const c = t.reduce((b, p) => p(b), e());
    return n = cr(c), r = n.cache.get, s = n.cache.set, o = i, i(d);
  }
  function i(d) {
    const c = r(d);
    if (c)
      return c;
    const b = ur(d, n);
    return s(d, b), b;
  }
  return function() {
    return o(mr.apply(null, arguments));
  };
}
const $ = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Nt = /^\[(?:([a-z-]+):)?(.+)\]$/i, pr = /^\d+\/\d+$/, fr = /* @__PURE__ */ new Set(["px", "full", "screen"]), hr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, xr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (e) => X(e) || fr.has(e) || pr.test(e), K = (e) => J(e, "length", Rr), X = (e) => !!e && !Number.isNaN(Number(e)), ye = (e) => J(e, "number", X), ee = (e) => !!e && Number.isInteger(Number(e)), wr = (e) => e.endsWith("%") && X(e.slice(0, -1)), k = (e) => Nt.test(e), Z = (e) => hr.test(e), Nr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), kr = (e) => J(e, Nr, kt), Cr = (e) => J(e, "position", kt), Sr = /* @__PURE__ */ new Set(["image", "url"]), Er = (e) => J(e, Sr, Ar), Tr = (e) => J(e, "", Mr), te = () => !0, J = (e, t, n) => {
  const r = Nt.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Rr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gr.test(e) && !xr.test(e)
), kt = () => !1, Mr = (e) => yr.test(e), Ar = (e) => vr.test(e), $r = () => {
  const e = $("colors"), t = $("spacing"), n = $("blur"), r = $("brightness"), s = $("borderColor"), o = $("borderRadius"), l = $("borderSpacing"), i = $("borderWidth"), d = $("contrast"), c = $("grayscale"), b = $("hueRotate"), p = $("invert"), h = $("gap"), f = $("gradientColorStops"), m = $("gradientColorStopPositions"), g = $("inset"), y = $("margin"), x = $("opacity"), N = $("padding"), S = $("saturate"), E = $("scale"), T = $("sepia"), z = $("skew"), F = $("space"), H = $("translate"), C = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", k, t], w = () => [k, t], M = () => ["", W, K], D = () => ["auto", X, k], oe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], Re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Q = () => ["", "0", k], Me = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [X, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [te],
      spacing: [W, K],
      blur: ["none", "", Z, k],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Z, k],
      borderSpacing: w(),
      borderWidth: M(),
      contrast: U(),
      grayscale: Q(),
      hueRotate: U(),
      invert: Q(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wr, K],
      inset: j(),
      margin: j(),
      opacity: U(),
      padding: w(),
      saturate: U(),
      scale: U(),
      sepia: Q(),
      skew: U(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", k]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Z]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Me()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Me()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...oe(), k]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ee, k]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ee, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [te]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ee, k]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [te]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ee, k]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...xe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...xe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...xe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [F]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [k, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Z]
        }, Z]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [k, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Z, K]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ye]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [te]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", X, ye]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, k]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", W, K]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, k]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", k]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...oe(), Cr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", kr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Er]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: le()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...le()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, K]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, K]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Z, Tr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [te]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Re()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Z, k]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: U()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: U()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ee, k]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [H]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [H]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", k]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [W, K, ye]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, v = /* @__PURE__ */ br($r);
async function ne() {
  if (typeof window > "u" || !("caches" in window) || !window.caches || typeof window.caches.keys != "function" || typeof window.caches.delete != "function")
    return 0;
  try {
    const e = await window.caches.keys();
    return (await Promise.allSettled(
      e.map((n) => window.caches.delete(n))
    )).filter(
      (n) => n.status === "fulfilled" && n.value === !0
    ).length;
  } catch {
    return 0;
  }
}
async function Lr() {
  let e = 0;
  try {
    if (typeof navigator < "u" && "serviceWorker" in navigator && navigator.serviceWorker && typeof navigator.serviceWorker.getRegistrations == "function") {
      const t = await navigator.serviceWorker.getRegistrations();
      e = (await Promise.allSettled(
        t.map(
          (r) => typeof (r == null ? void 0 : r.unregister) == "function" ? r.unregister() : Promise.resolve(!1)
        )
      )).filter(
        (r) => r.status === "fulfilled" && r.value === !0
      ).length;
    }
  } catch {
    e = 0;
  }
  return await ne(), e;
}
async function Pr() {
  var e;
  await Lr(), await ne(), typeof window < "u" && typeof ((e = window.location) == null ? void 0 : e.reload) == "function" && window.location.reload();
}
const Br = ({
  brandInitial: e,
  brandIcon: t,
  brandBg: n,
  title: r,
  subtitle: s
}) => /* @__PURE__ */ u("div", { className: "flex items-center space-x-3", children: [
  (e || t) && /* @__PURE__ */ a("div", { className: `w-8 h-8 rounded-ui-control ${n} flex items-center justify-center font-black text-sm shadow-md`, children: t || e }),
  /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ a("h1", { className: "text-sm font-bold font-display text-foreground tracking-wide uppercase leading-tight", children: r }),
    s && /* @__PURE__ */ a("p", { className: "text-[10px] text-muted font-medium tracking-wider uppercase", children: s })
  ] })
] }), _r = ({
  tabs: e,
  activeTab: t,
  tabActiveStyle: n,
  onChangeTab: r
}) => /* @__PURE__ */ a("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-ui-control border border-border/80", children: e.map((s) => {
  const o = t === s.id;
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: () => r == null ? void 0 : r(s.id),
      className: `px-3.5 py-1.5 rounded-ui-control text-xs font-semibold flex items-center space-x-1.5 transition-all ${o ? n : "text-muted hover:text-foreground"}`,
      children: [
        s.icon,
        /* @__PURE__ */ a("span", { children: s.label })
      ]
    },
    s.id
  );
}) }), Ir = ({ onRefresh: e, isRefreshing: t, spinnerColor: n }) => /* @__PURE__ */ a(
  "button",
  {
    onClick: () => {
      ne(), e();
    },
    className: "p-2 rounded-ui-control bg-background/80 hover:bg-background border border-border text-muted hover:text-foreground active:scale-95 transition-all",
    title: "Refresh data",
    "aria-label": "Refresh data",
    "data-testid": "refresh-button",
    children: /* @__PURE__ */ a(Yt, { className: `w-3.5 h-3.5 ${t ? `animate-spin ${n}` : ""}` })
  }
), Ra = (e) => {
  const { variant: t = "blue", tabs: n, activeTab: r, activeTabClass: s, onChangeTab: o, onRefresh: l } = e, { isRefreshing: i = !1, actions: d, className: c = "" } = e, b = e.brandColor || Ae[t] || Ae.blue, p = s || $e[t] || $e.blue, h = V[t] || V.blue;
  return /* @__PURE__ */ a(
    "header",
    {
      className: v(
        "border-b border-border/60 bg-[var(--ui-header-bg)] backdrop-blur-md sticky top-0 z-40 w-full pt-safe",
        c
      ),
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ u("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ a(
          Br,
          {
            brandInitial: e.brandInitial,
            brandIcon: e.brandIcon,
            brandBg: b,
            title: e.title,
            subtitle: e.subtitle
          }
        ),
        n && n.length > 0 && /* @__PURE__ */ a(
          _r,
          {
            tabs: n,
            activeTab: r,
            tabActiveStyle: p,
            onChangeTab: o
          }
        ),
        /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", children: [
          d,
          l && /* @__PURE__ */ a(
            Ir,
            {
              onRefresh: l,
              isRefreshing: i,
              spinnerColor: h
            }
          )
        ] })
      ] })
    }
  );
}, Ma = ({
  tabs: e,
  activeTab: t,
  onChangeTab: n,
  variant: r = "blue",
  activeTabClass: s,
  hideOnDesktop: o = !1,
  className: l = ""
}) => {
  const i = o ? "block lg:hidden" : "block", d = s || Le[r] || Le.blue;
  return /* @__PURE__ */ a(
    "nav",
    {
      className: v(
        i,
        "fixed bottom-0 left-0 right-0 z-40 bg-[var(--ui-header-bg)] backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform",
        l
      ),
      style: {
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)",
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden"
      },
      "aria-label": "Main Mobile Navigation",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: "max-w-lg mx-auto grid gap-1 p-2",
          style: { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` },
          children: e.map((c) => {
            const b = t === c.id;
            return /* @__PURE__ */ u(
              "button",
              {
                onClick: () => n(c.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-ui-control flex flex-col items-center space-y-1 transition-all ${b ? d : "text-muted hover:text-foreground"}`,
                "aria-label": c.ariaLabel || c.label,
                children: [
                  /* @__PURE__ */ u("div", { className: "relative flex items-center justify-center", children: [
                    c.icon,
                    c.badgeDot && /* @__PURE__ */ a(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a("span", { className: "text-[10px] truncate max-w-full tracking-tight", children: c.label })
                ]
              },
              c.id
            );
          })
        }
      )
    }
  );
}, De = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, je = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, zr = ({
  variant: e = "info",
  title: t,
  children: n,
  icon: r,
  action: s,
  role: o = "alert",
  className: l = "",
  ...i
}) => {
  const d = De[e] || De.info, c = je[e] || je.info;
  return /* @__PURE__ */ u(
    "div",
    {
      role: o,
      className: v(
        "rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3",
        d,
        l
      ),
      ...i,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          r && /* @__PURE__ */ a("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: r }),
          /* @__PURE__ */ u("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            t && /* @__PURE__ */ a("div", { className: `font-semibold mb-0.5 ${c}`, children: t }),
            n && /* @__PURE__ */ a("div", { className: "opacity-95", children: n })
          ] })
        ] }),
        s && /* @__PURE__ */ a("div", { className: "shrink-0 self-center", children: s })
      ]
    }
  );
}, Dr = {
  primary: "bg-accent hover:opacity-90 active:opacity-95 text-accent-fg font-bold shadow-lg border border-transparent",
  brand: "bg-accent hover:opacity-90 active:opacity-95 text-accent-fg font-bold shadow-lg border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, jr = {
  xs: "px-2.5 py-1 text-xs rounded-ui-control gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-ui-control gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-ui-control gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-ui-control gap-2"
}, L = ae.forwardRef(
  ({
    children: e,
    variant: t = "secondary",
    size: n = "sm",
    icon: r,
    iconPosition: s = "left",
    loading: o = !1,
    loadingText: l,
    fullWidth: i = !1,
    disabled: d = !1,
    className: c = "",
    type: b = "button",
    ...p
  }, h) => {
    const f = d || o, m = o && l ? l : e, g = m != null && m !== !1 && m !== "";
    return /* @__PURE__ */ u(
      "button",
      {
        ref: h,
        type: b,
        disabled: f,
        className: v(
          "inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none",
          Dr[t],
          jr[n],
          i && "w-full",
          c
        ),
        ...p,
        children: [
          o ? /* @__PURE__ */ a(Ce, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : r && s === "left" ? /* @__PURE__ */ a("span", { className: "shrink-0", children: r }) : null,
          g && /* @__PURE__ */ a("span", { children: m }),
          !o && r && s === "right" ? /* @__PURE__ */ a("span", { className: "shrink-0", children: r }) : null
        ]
      }
    );
  }
);
L.displayName = "Button";
const Ve = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500",
  brand: "bg-accent text-accent-fg font-semibold border border-accent"
}, Aa = ({
  options: e,
  selected: t,
  selectedValues: n = [],
  onChange: r,
  onChangeValues: s,
  multiSelect: o = !1,
  equalWidth: l = !1,
  variant: i = "amber",
  size: d = "sm",
  className: c = "",
  ...b
}) => {
  const p = Ve[i] || Ve.amber, h = d === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", f = (m) => {
    if (o) {
      const g = n.includes(m) ? n.filter((y) => y !== m) : [...n, m];
      s && s(g), r && r(m);
    } else r && r(m);
  };
  return /* @__PURE__ */ a(
    "div",
    {
      className: v("flex", l ? "w-full gap-2" : "flex-wrap gap-1.5", c),
      ...b,
      children: e.map((m) => {
        const g = typeof m == "string" ? m : m.value, y = typeof m == "string" ? m : m.label, x = o ? n.includes(g) : t === g;
        return /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => f(g),
            className: `${h} ${l ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${x ? p : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
            children: y
          },
          g
        );
      })
    }
  );
}, Oe = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, $a = ({
  title: e,
  description: t,
  icon: n,
  action: r,
  variant: s = "dashed",
  className: o = "",
  ...l
}) => {
  const i = Oe[s] || Oe.dashed;
  return /* @__PURE__ */ u(
    "div",
    {
      className: v(
        "rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2",
        i,
        o
      ),
      ...l,
      children: [
        n && /* @__PURE__ */ a("div", { className: "text-slate-400 mb-1 flex items-center justify-center", children: n }),
        /* @__PURE__ */ a("div", { className: "text-sm font-semibold text-slate-200", children: e }),
        t && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 max-w-md leading-relaxed", children: t }),
        r && /* @__PURE__ */ a("div", { className: "pt-2", children: r })
      ]
    }
  );
}, Vr = ({
  file: e,
  title: t,
  description: n,
  highlightClass: r,
  onClearFile: s
}) => /* @__PURE__ */ u(de, { children: [
  /* @__PURE__ */ a(Gt, { className: "w-8 h-8 text-slate-400 mx-auto" }),
  /* @__PURE__ */ a("div", { className: "text-xs text-slate-300 font-medium", children: e ? /* @__PURE__ */ u("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
    /* @__PURE__ */ a("span", { className: `${r} font-semibold truncate max-w-[240px]`, children: e.name }),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), s();
        },
        className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
        children: /* @__PURE__ */ a(se, { className: "w-3.5 h-3.5" })
      }
    )
  ] }) : /* @__PURE__ */ u(de, { children: [
    /* @__PURE__ */ a("span", { children: t.split("browse")[0] }),
    /* @__PURE__ */ a("span", { className: `${r} underline`, children: "browse" }),
    /* @__PURE__ */ a("span", { children: t.split("browse")[1] || "" })
  ] }) }),
  /* @__PURE__ */ a("p", { className: "text-[10px] text-slate-500", children: n })
] }), La = ({
  file: e,
  onFileChange: t,
  acceptedFormats: n = ".pdf,.csv",
  title: r = "Drop your file here, or browse",
  description: s = "Supports official PDF and CSV documents",
  variant: o = "amber",
  className: l = "",
  children: i,
  ...d
}) => {
  const [c, b] = R(!1), p = ae.useId(), h = (x) => {
    x.preventDefault(), x.stopPropagation(), x.type === "dragenter" || x.type === "dragover" ? b(!0) : x.type === "dragleave" && b(!1);
  }, f = (x) => {
    x.preventDefault(), x.stopPropagation(), b(!1), x.dataTransfer.files && x.dataTransfer.files[0] && t(x.dataTransfer.files[0]);
  }, m = (x) => {
    x.target.files && x.target.files[0] && t(x.target.files[0]);
  }, g = Be[o] || Be.amber, y = V[o] || V.amber;
  return /* @__PURE__ */ u(
    "div",
    {
      ...d,
      onDragEnter: h,
      onDragOver: h,
      onDragLeave: h,
      onDrop: f,
      className: v(
        "border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all",
        c ? g : "border-border hover:border-slate-600 bg-background/50",
        l
      ),
      children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "file",
            accept: n,
            id: p,
            onChange: m,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ a("label", { htmlFor: p, className: "cursor-pointer space-y-2 block", children: /* @__PURE__ */ a(
          Vr,
          {
            file: e,
            title: r,
            description: s,
            highlightClass: y,
            onClearFile: () => t(null)
          }
        ) }),
        i && /* @__PURE__ */ a("div", { className: "mt-4", children: i })
      ]
    }
  );
}, Or = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 font-semibold",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 font-semibold",
  slate: "bg-slate-700/50 text-slate-100 border-slate-500 font-semibold",
  brand: "bg-accent/15 text-accent border-accent/40 font-semibold"
}, Fr = {
  amber: "bg-amber-500 text-slate-950 border-amber-400 font-bold",
  blue: "bg-blue-600 text-white border-blue-500 font-bold",
  emerald: "bg-emerald-500 text-slate-950 border-emerald-400 font-bold",
  purple: "bg-purple-600 text-white border-purple-500 font-bold",
  slate: "bg-slate-200 text-slate-950 border-slate-300 font-bold",
  brand: "bg-accent text-accent-fg border-accent font-bold"
}, Fe = {
  amber: "bg-amber-500/10 text-amber-200 border-amber-500/25 hover:border-amber-500/40",
  blue: "bg-blue-500/10 text-blue-200 border-blue-500/25 hover:border-blue-500/40",
  emerald: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25 hover:border-emerald-500/40",
  purple: "bg-purple-500/10 text-purple-200 border-purple-500/25 hover:border-purple-500/40",
  slate: "bg-slate-700/30 text-slate-200 border-slate-600/50 hover:border-slate-500",
  brand: "bg-accent/10 text-accent border-accent/25 hover:border-accent/40"
}, He = {
  xs: "min-h-[36px] px-2.5 py-1 text-[11px] rounded-lg gap-1.5",
  sm: "min-h-[44px] px-3 py-1.5 text-xs rounded-lg gap-1.5"
}, Hr = "bg-card/50 text-slate-300 border-border hover:text-slate-100 hover:border-slate-600";
function Gr(e, t, n, r) {
  if (e) {
    const s = r === "solid" ? Fr : Or;
    return s[n] || s.amber;
  }
  return t ? Fe[n] || Fe.amber : Hr;
}
const Pa = ({
  options: e,
  selectedId: t,
  onSelect: n,
  toggleDeselectId: r,
  variant: s = "amber",
  tone: o = "soft",
  size: l = "sm",
  scrollable: i = !1,
  prefix: d,
  className: c = "",
  ...b
}) => {
  const p = i ? "flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none" : "flex flex-wrap items-center gap-1.5", h = He[l] || He.sm, f = (m, g) => {
    if (g && r !== void 0) {
      n(r);
      return;
    }
    n(m);
  };
  return /* @__PURE__ */ u("div", { className: v(p, c), ...b, children: [
    !!d && /* @__PURE__ */ a("span", { className: "shrink-0", children: d }),
    e.map((m) => {
      const g = t === m.id, y = Gr(g, m.highlight, s, o);
      return /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          "aria-pressed": g,
          "data-testid": m.testId,
          onClick: () => f(m.id, g),
          className: v(
            "inline-flex items-center border transition-colors active:scale-95",
            i && "shrink-0",
            h,
            y
          ),
          children: [
            /* @__PURE__ */ a("span", { children: m.label }),
            m.count !== void 0 && /* @__PURE__ */ a("span", { className: "font-mono text-[10px] px-1.5 py-0.5 rounded bg-background/60 text-slate-300", children: m.count })
          ]
        },
        m.id
      );
    })
  ] });
}, Ba = ({
  label: e,
  htmlFor: t,
  hint: n,
  error: r,
  required: s = !1,
  rightSlot: o,
  children: l,
  className: i = "",
  ...d
}) => /* @__PURE__ */ u("div", { className: v("space-y-1.5", i), ...d, children: [
  /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ u(
      "label",
      {
        htmlFor: t,
        className: "block text-xs font-medium text-slate-300",
        children: [
          e,
          s && /* @__PURE__ */ a("span", { className: "ml-1 text-rose-400", "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    o && /* @__PURE__ */ a("div", { className: "shrink-0 text-xs text-slate-400", children: o })
  ] }),
  l,
  r ? /* @__PURE__ */ a("div", { className: "text-rose-400 text-xs", role: "alert", children: r }) : n ? /* @__PURE__ */ a("div", { className: "text-slate-400 text-xs", children: n }) : null
] }), Ur = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5"
}, Wr = {
  glass: "glass-panel bg-card/70 backdrop-blur-md border border-border/80",
  solid: "bg-card border border-border"
}, I = ({
  children: e,
  as: t = "div",
  className: n,
  onClick: r,
  padding: s = "lg",
  tone: o = "glass",
  hoverGlow: l = !1,
  ...i
}) => {
  const d = !!r;
  return /* @__PURE__ */ a(
    t,
    {
      onClick: r,
      className: v(
        "rounded-ui-card shadow-ui-card",
        Wr[o],
        Ur[s],
        l && "hover:border-border transition-all duration-200 hover:shadow-xl",
        d && "cursor-pointer active:scale-[0.99] transition-transform select-none",
        n
      ),
      ...i,
      children: e
    }
  );
}, _a = ({
  label: e = "Loading...",
  variant: t = "amber",
  className: n = "",
  ...r
}) => {
  const s = V[t] || V.amber;
  return /* @__PURE__ */ u(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: v(
        "flex flex-col items-center justify-center py-8 px-4 text-center space-y-2",
        n
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(Ce, { className: `w-6 h-6 animate-spin ${s}` }),
        e && /* @__PURE__ */ a("span", { className: "text-xs font-medium text-slate-400", children: e })
      ]
    }
  );
}, Ge = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover", qr = "width=device-width, initial-scale=1.0, viewport-fit=cover";
function Ue() {
  if (typeof document > "u" || typeof window > "u")
    return;
  const e = document.activeElement;
  typeof HTMLElement < "u" && e instanceof HTMLElement && e.blur();
  const t = document.querySelector('meta[name="viewport"]');
  t && ((t.getAttribute("content") ?? "") === Ge && t.setAttribute("content", qr), t.setAttribute("content", Ge)), window.scrollTo({ left: 0, top: window.scrollY });
}
function Kr(e, t, n) {
  const r = _(!1);
  G(() => (e ? (r.current = !0, document.body.style.overflow = "hidden") : (document.body.style.overflow = "", r.current && (r.current = !1, Ue())), () => {
    document.body.style.overflow = "";
  }), [e]), G(() => () => {
    r.current && (r.current = !1, Ue());
  }, []), G(() => {
    if (!e) return;
    const s = (o) => {
      o.key === "Escape" && !t && n();
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, n, t]);
}
const Zr = ({
  title: e,
  subtitle: t,
  headerIcon: n,
  disableClose: r,
  onClose: s
}) => /* @__PURE__ */ u("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
  e ? /* @__PURE__ */ u("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
      n && /* @__PURE__ */ a("span", { className: "text-lg leading-none", children: n }),
      /* @__PURE__ */ a("h2", { className: "text-base font-bold text-foreground m-0", children: e })
    ] }),
    t && /* @__PURE__ */ a("p", { className: "text-xs text-accent m-0", children: t })
  ] }) : /* @__PURE__ */ a("div", {}),
  /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: s,
      disabled: r,
      className: "p-1.5 rounded-ui-control bg-background hover:bg-card-muted text-muted hover:text-foreground transition-colors disabled:opacity-50",
      "aria-label": "Close dialog",
      children: /* @__PURE__ */ a(se, { className: "w-4 h-4" })
    }
  )
] }), Ct = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r,
  headerIcon: s,
  disableClose: o = !1,
  footer: l,
  children: i,
  className: d = "",
  ...c
}) => {
  if (Kr(e, o, t), !e) return null;
  const b = /* @__PURE__ */ a(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (p) => {
        p.target === p.currentTarget && !o && t();
      },
      children: /* @__PURE__ */ u(
        "div",
        {
          className: v(
            "modal-card modal-content w-full max-w-md bg-card border border-border rounded-t-ui-card sm:rounded-ui-card shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe",
            d
          ),
          ...c,
          children: [
            /* @__PURE__ */ a(
              Zr,
              {
                title: n,
                subtitle: r,
                headerIcon: s,
                disableClose: o,
                onClose: t
              }
            ),
            /* @__PURE__ */ a("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: i }),
            l && /* @__PURE__ */ a("div", { className: "px-5 py-3.5 border-t border-border/80 bg-card/95 shrink-0", children: l })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? Bt(b, document.body) : b;
};
function Yr(e) {
  const t = e.map((r) => ({
    ...r,
    value: Math.max(0, Number(r.value) || 0)
  })), n = t.reduce((r, s) => r + s.value, 0);
  return n <= 0 ? [] : t.map((r) => ({
    ...r,
    widthPct: r.value / n * 100
  }));
}
const Ia = ({
  segments: e,
  showLegend: t = !0,
  heightClass: n = "h-2.5",
  className: r = "",
  ...s
}) => {
  const o = Yr(e);
  return o.length === 0 ? null : /* @__PURE__ */ u("div", { className: v("space-y-1.5", r), ...s, children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: `w-full ${n} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`,
        children: o.map((l) => {
          if (l.widthPct <= 0) return null;
          const i = l.valueLabel || `${Math.round(l.widthPct)}%`;
          return /* @__PURE__ */ a(
            "div",
            {
              style: { width: `${l.widthPct}%` },
              className: `h-full ${l.barColor} transition-all duration-500`,
              title: `${l.label}: ${i}`
            },
            l.id
          );
        })
      }
    ),
    t && /* @__PURE__ */ a("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300", children: o.map((l) => {
      const i = l.minVisiblePct ?? 0.5;
      if (l.widthPct < i) return null;
      const d = l.dotColor || l.barColor, c = l.textColor || "text-slate-200", b = l.valueLabel || `${Math.round(l.widthPct)}%`;
      return /* @__PURE__ */ u("span", { className: "inline-flex items-center gap-1 font-medium", children: [
        /* @__PURE__ */ a("span", { className: `w-2 h-2 rounded-full shrink-0 ${d}` }),
        /* @__PURE__ */ a("span", { className: c, children: l.label }),
        /* @__PURE__ */ a("span", { className: "text-slate-400", children: b })
      ] }, l.id);
    }) })
  ] });
}, Xr = ({
  label: e,
  value: t,
  unit: n,
  variant: r = "blue",
  valueColor: s,
  className: o = "",
  ...l
}) => {
  const i = s || ue[r] || ue.blue;
  return /* @__PURE__ */ u(
    "div",
    {
      className: v(
        "p-4 bg-background/80 rounded-2xl border border-border/80 text-center",
        o
      ),
      ...l,
      children: [
        /* @__PURE__ */ a("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
        /* @__PURE__ */ u("div", { className: `text-4xl font-black ${i} tracking-tight`, children: [
          t || "0",
          n && /* @__PURE__ */ a("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: n })
        ] })
      ]
    }
  );
}, We = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function za({
  label: e,
  options: t,
  value: n,
  onChange: r,
  className: s = "",
  ...o
}) {
  return /* @__PURE__ */ u("div", { className: v("space-y-2", s), ...o, children: [
    e && /* @__PURE__ */ a("label", { className: "block font-semibold text-sm text-slate-200", children: e }),
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: t.map((l) => {
      const i = n === l.value, d = l.accent || "blue", c = We[d] || We.blue;
      return /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          onClick: () => r(l.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${i ? c : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            l.icon && /* @__PURE__ */ a("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: l.icon }),
            /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ a("div", { className: `font-semibold text-sm ${i ? "text-slate-100" : "text-slate-300"}`, children: l.label }),
              l.description && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 mt-0.5 leading-snug", children: l.description })
            ] })
          ]
        },
        l.value
      );
    }) })
  ] });
}
const qe = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  slate: "bg-slate-400",
  brand: "bg-gradient-to-r from-accent to-secondary"
}, Jr = {
  sm: "h-2",
  md: "h-2.5"
}, Qr = {
  default: "duration-500",
  linear: "duration-300 ease-linear"
}, ge = (e) => {
  const {
    value: t,
    max: n = 100,
    tone: r = "gradient",
    variant: s = "blue",
    size: o = "md",
    transition: l = "default",
    round: i = !0,
    label: d,
    trackClassName: c,
    fillClassName: b,
    className: p,
    ...h
  } = e, f = tn(t, n, i), m = en(r, s);
  return /* @__PURE__ */ a(
    "div",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(f),
      "aria-label": d || void 0,
      className: v(
        "w-full rounded-ui-pill bg-background border border-border/50 overflow-hidden",
        Jr[o],
        c,
        p
      ),
      ...h,
      children: /* @__PURE__ */ a(
        "div",
        {
          className: v("h-full rounded-ui-pill transition-all", Qr[l], m, b),
          style: { width: `${f}%` }
        }
      )
    }
  );
};
function en(e, t) {
  return e === "gradient" ? `bg-gradient-to-r ${(fe[t] ?? fe.blue).bar}` : qe[e] ?? qe.slate;
}
function tn(e, t = 100, n = !0) {
  if (!Number.isFinite(e) || !Number.isFinite(t) || t <= 0)
    return 0;
  const r = Math.min(100, Math.max(0, e / t * 100));
  return n ? Math.round(r) : r;
}
const Ke = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, Da = ({
  label: e,
  valueDisplay: t,
  valueClassName: n = "text-slate-200",
  min: r,
  max: s,
  step: o = 1,
  value: l,
  onChange: i,
  minLabel: d,
  midLabel: c,
  maxLabel: b,
  variant: p = "amber",
  className: h = "",
  ...f
}) => {
  const m = Ke[p] || Ke.amber;
  return /* @__PURE__ */ u("div", { className: v("space-y-1", h), ...f, children: [
    /* @__PURE__ */ u("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ a("span", { className: "text-slate-400", children: e }),
      /* @__PURE__ */ a("span", { className: `font-semibold ${n}`, children: t })
    ] }),
    /* @__PURE__ */ a(
      "input",
      {
        type: "range",
        min: r,
        max: s,
        step: o,
        value: l,
        onChange: (g) => i(Number(g.target.value)),
        className: `w-full ${m} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (d || c || b) && /* @__PURE__ */ u("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ a("span", { children: d }),
      /* @__PURE__ */ a("span", { children: c }),
      /* @__PURE__ */ a("span", { children: b })
    ] })
  ] });
}, ja = ({
  value: e,
  onChange: t,
  placeholder: n = "Search...",
  variant: r = "amber",
  rightSlot: s,
  className: o = "",
  "data-testid": l,
  ...i
}) => {
  const d = O[r] || O.amber;
  return /* @__PURE__ */ u("div", { className: v("flex items-center gap-2", o), ...i, children: [
    /* @__PURE__ */ u("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ a(ht, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: e,
          onChange: (c) => t(c.target.value),
          placeholder: n,
          "data-testid": l,
          className: `w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-base sm:text-xs text-slate-200 placeholder-slate-500 focus:outline-none ${d} transition-colors`
        }
      ),
      e.length > 0 && /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => t(""),
          "aria-label": "Clear search",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors",
          children: /* @__PURE__ */ a(se, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    s && /* @__PURE__ */ a("div", { className: "shrink-0", children: s })
  ] });
}, Ze = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  brand: "bg-accent/15 text-accent border-accent/25"
}, Va = ({
  title: e,
  subtitle: t,
  icon: n,
  variant: r = "amber",
  actions: s,
  titleAs: o = "h3",
  uppercaseTitle: l = !1,
  size: i = "sm",
  className: d = "",
  ...c
}) => {
  const b = Ze[r] || Ze.amber, p = o, h = i === "md" ? `text-base font-bold text-slate-100 ${l ? "tracking-wide uppercase" : ""}` : `text-sm font-semibold text-slate-200 ${l ? "tracking-wide uppercase" : ""}`, f = i === "md" ? "p-2.5 rounded-xl border" : "p-1.5 rounded-lg border";
  return /* @__PURE__ */ u(
    "div",
    {
      className: v("flex flex-wrap items-center justify-between gap-3", d),
      ...c,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center space-x-2.5 min-w-[200px] flex-1", children: [
          n && /* @__PURE__ */ a("div", { className: `${f} shrink-0 ${b}`, children: n }),
          /* @__PURE__ */ u("div", { className: "min-w-0", children: [
            /* @__PURE__ */ a(p, { className: h, children: e }),
            t && /* @__PURE__ */ a("p", { className: "text-xs text-slate-400", children: t })
          ] })
        ] }),
        s && /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-2 max-w-full", children: s })
      ]
    }
  );
}, Ye = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function rn({
  options: e,
  value: t,
  onChange: n,
  variant: r = "amber",
  size: s = "xs",
  fullWidth: o = !1,
  className: l = "",
  idPrefix: i = "segmented",
  style: d,
  ...c
}) {
  const b = be[r] || be.amber, p = Ye[s] || Ye.xs;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tablist",
      className: v(
        "inline-flex items-center bg-card/60 p-0.5 rounded-ui-control border border-border",
        o && "w-full grid",
        l
      ),
      style: o ? { ...d, gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` } : d,
      ...c,
      children: e.map((h) => {
        const f = t === h.id;
        return /* @__PURE__ */ u(
          "button",
          {
            role: "tab",
            "aria-selected": f,
            type: "button",
            "data-testid": `${i}-${h.id}`,
            onClick: () => n(h.id),
            className: `font-medium rounded-ui-control border transition-all duration-150 flex items-center justify-center gap-1.5 ${p} ${f ? `${b} font-semibold` : "border-transparent text-muted hover:text-foreground hover:bg-card-muted/60"}`,
            children: [
              h.icon && /* @__PURE__ */ a("span", { className: "shrink-0", children: h.icon }),
              /* @__PURE__ */ a("span", { children: h.label }),
              h.badge !== void 0 && /* @__PURE__ */ a("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: h.badge })
            ]
          },
          h.id
        );
      })
    }
  );
}
const nn = "min-h-[44px] w-full appearance-none bg-background border border-border rounded-xl pl-3 pr-9 py-2 text-base sm:text-xs text-slate-100 focus:outline-none transition-colors disabled:opacity-50", an = "border-rose-500/70 focus:border-rose-500";
function sn(e, t, n) {
  const r = t ? an : O[e] || O.amber;
  return v(nn, r, n);
}
const on = ae.forwardRef(
  ({
    options: e,
    placeholder: t,
    variant: n = "amber",
    error: r = !1,
    containerClassName: s = "",
    className: o = "",
    children: l,
    ...i
  }, d) => /* @__PURE__ */ u("div", { className: v("relative w-full", s), children: [
    /* @__PURE__ */ u(
      "select",
      {
        ref: d,
        "aria-invalid": r || void 0,
        className: sn(n, r, o),
        ...i,
        children: [
          t !== void 0 && /* @__PURE__ */ a("option", { value: "", disabled: i.required, children: t }),
          e == null ? void 0 : e.map((c) => /* @__PURE__ */ a("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)),
          l
        ]
      }
    ),
    /* @__PURE__ */ a(
      pt,
      {
        "aria-hidden": "true",
        className: "w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      }
    )
  ] })
);
on.displayName = "SelectInput";
const ln = ({
  title: e,
  subtitle: t,
  value: n,
  valueSuffix: r,
  subvalue: s,
  subvalueTrend: o = "neutral",
  badge: l,
  icon: i,
  isSelected: d = !1,
  disabled: c = !1,
  onClick: b,
  variant: p = "amber",
  className: h = "",
  type: f = "button",
  ...m
}) => {
  const g = _e[p] || _e.amber, y = o === "positive" ? "text-emerald-400" : o === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ u(
    "button",
    {
      type: f,
      disabled: c,
      onClick: b,
      className: v(
        "text-left p-3.5 rounded-xl border transition-all duration-150 w-full disabled:opacity-50 disabled:pointer-events-none",
        d ? g : "bg-background/60 border-border/60 hover:border-slate-700",
        h
      ),
      ...m,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ u("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            i && /* @__PURE__ */ a("span", { className: "shrink-0", children: i }),
            /* @__PURE__ */ a("span", { className: "truncate", children: e })
          ] }),
          l && /* @__PURE__ */ a("div", { className: "shrink-0", children: l })
        ] }),
        n !== void 0 && /* @__PURE__ */ u("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          n,
          r && /* @__PURE__ */ a("span", { className: "text-xs font-normal text-slate-400 ml-1", children: r })
        ] }),
        (t || s) && /* @__PURE__ */ u("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          t && /* @__PURE__ */ a("span", { className: "truncate", children: t }),
          s && /* @__PURE__ */ a("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${y}`, children: s })
        ] })
      ]
    }
  );
}, Xe = {
  sm: "px-2.5 py-1 text-xs",
  xs: "px-2 py-0.5 text-[10px]"
}, Je = {
  idle: {
    bg: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    dot: "bg-slate-400"
  },
  busy: {
    bg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    dot: "bg-amber-400 animate-pulse"
  },
  success: {
    bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-400"
  },
  error: {
    bg: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    dot: "bg-rose-400"
  },
  warning: {
    bg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    dot: "bg-amber-400"
  },
  info: {
    bg: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    dot: "bg-sky-400"
  },
  purple: {
    bg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    dot: "bg-purple-400"
  },
  orange: {
    bg: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    dot: "bg-orange-400"
  }
}, Te = ({
  label: e,
  variant: t = "idle",
  size: n = "sm",
  icon: r,
  showDot: s = !0,
  isPulsing: o = !1,
  className: l = "",
  ...i
}) => {
  const d = Je[t] || Je.idle, c = Xe[n] || Xe.sm;
  return /* @__PURE__ */ u(
    "div",
    {
      className: v(
        "status-badge inline-flex items-center rounded-full font-medium border backdrop-blur-sm",
        c,
        d.bg,
        l
      ),
      ...i,
      children: [
        r ? /* @__PURE__ */ a("span", { className: "mr-1.5 shrink-0 flex items-center", children: r }) : s ? /* @__PURE__ */ a(
          "span",
          {
            className: v(
              "w-1.5 h-1.5 rounded-full mr-1.5 shrink-0",
              d.dot,
              o && "animate-pulse"
            )
          }
        ) : null,
        /* @__PURE__ */ a("span", { className: "truncate", children: e })
      ]
    }
  );
};
function cn(e, t, n, r) {
  if (t === ".")
    return !n || e.includes(".") ? null : e === "" ? "0." : e + ".";
  if (e.includes(".")) {
    const s = e.split(".");
    if (s[1] && s[1].length >= r) return null;
  }
  return e === "0" ? t : e + t;
}
const dn = ({
  value: e,
  onChange: t,
  onClear: n,
  maxDecimalPlaces: r = 2,
  variant: s = "blue",
  actionColor: o,
  allowDecimals: l = !0,
  className: i = "",
  ...d
}) => {
  const c = (m) => {
    const g = cn(e, m, l, r);
    g !== null && t(g);
  }, b = () => {
    t(e.length <= 1 ? "" : e.slice(0, -1));
  }, p = () => {
    n ? n() : t("");
  }, h = o || me[s] || me.blue, f = ["1", "2", "3", "4", "5", "6", "7", "8", "9", l ? "." : "", "0"];
  return /* @__PURE__ */ u(
    "div",
    {
      className: v("grid grid-cols-3 gap-2 w-full max-w-sm mx-auto", i),
      ...d,
      children: [
        f.map(
          (m, g) => m ? /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => c(m),
              className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
              children: m
            },
            m
          ) : /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: p,
              className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${h} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
              title: "Clear all",
              children: "C"
            },
            `empty-${g}`
          )
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: b,
            onDoubleClick: p,
            className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${h} shadow-sm transition-all flex items-center justify-center select-none`,
            title: "Backspace (double tap to clear all)",
            "aria-label": "Backspace",
            children: /* @__PURE__ */ a(Ht, { className: "w-5 h-5" })
          }
        )
      ]
    }
  );
}, Qe = {
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    removeBtn: "text-amber-400/70 hover:text-amber-200"
  },
  slate: {
    pill: "bg-slate-800 text-slate-300 border border-slate-700/80",
    removeBtn: "opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-400"
  }
};
function un(e) {
  return e.trim().toLowerCase().replace(/^#+/, "").replace(/\s+/g, "-");
}
const mn = ({
  disabled: e,
  placeholder: t,
  addButtonLabel: n,
  addButtonTestId: r,
  inputTestId: s,
  onCommitTag: o
}) => {
  const [l, i] = R(!1), [d, c] = R(""), b = () => {
    const p = d;
    c(""), i(!1), o(p);
  };
  return l ? /* @__PURE__ */ a(
    "form",
    {
      onSubmit: (p) => {
        p.preventDefault(), b();
      },
      className: "inline-flex items-center gap-1",
      children: /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: d,
          onChange: (p) => c(p.target.value),
          onBlur: b,
          onKeyDown: (p) => {
            p.key === "Escape" && (p.preventDefault(), c(""), i(!1));
          },
          placeholder: t,
          autoFocus: !0,
          "data-testid": s,
          className: "w-28 sm:w-24 px-1.5 py-0.5 text-base sm:text-[10px] rounded bg-background border border-amber-500/50 text-slate-200 focus:outline-none"
        }
      )
    }
  ) : /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      onClick: () => {
        c(""), i(!0);
      },
      disabled: e,
      "data-testid": r,
      className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-border/70 text-[10px] transition-colors",
      children: [
        /* @__PURE__ */ a(Zt, { className: "w-2.5 h-2.5" }),
        /* @__PURE__ */ a("span", { children: n })
      ]
    }
  );
}, Oa = ({
  tags: e,
  onAddTag: t,
  onRemoveTag: n,
  disabled: r = !1,
  placeholder: s = "add tag...",
  variant: o = "amber",
  addButtonLabel: l = "tag",
  addButtonTestId: i,
  inputTestId: d,
  className: c = "",
  ...b
}) => {
  if (e.length === 0 && !t)
    return null;
  const p = Qe[o] || Qe.amber, h = (f) => {
    const m = un(f);
    m && !e.includes(m) && t && t(m);
  };
  return /* @__PURE__ */ u("div", { className: v("flex items-center flex-wrap gap-1", c), ...b, children: [
    e.map((f) => /* @__PURE__ */ u(
      "span",
      {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${p.pill}`,
        children: [
          /* @__PURE__ */ u("span", { children: [
            "#",
            f
          ] }),
          n && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => void n(f),
              disabled: r,
              "aria-label": `Remove tag ${f}`,
              title: `Remove tag #${f}`,
              className: `transition-colors ${p.removeBtn}`,
              children: /* @__PURE__ */ a(se, { className: "w-2.5 h-2.5" })
            }
          )
        ]
      },
      f
    )),
    t && /* @__PURE__ */ a(
      mn,
      {
        disabled: r,
        placeholder: s,
        addButtonLabel: l,
        addButtonTestId: i,
        inputTestId: d,
        onCommitTag: h
      }
    )
  ] });
}, bn = "min-h-[88px] w-full bg-background border border-border rounded-xl px-3 py-2.5 text-base sm:text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50", pn = "border-rose-500/70 focus:border-rose-500", St = ae.forwardRef(
  ({ variant: e = "amber", error: t = !1, rows: n = 3, className: r = "", ...s }, o) => {
    const l = t ? pn : O[e] || O.amber;
    return /* @__PURE__ */ a(
      "textarea",
      {
        ref: o,
        rows: n,
        "aria-invalid": t || void 0,
        className: v(bn, l, r),
        ...s
      }
    );
  }
);
St.displayName = "TextArea";
const fn = "min-h-[44px] w-full bg-background border border-border rounded-xl px-3 py-2 text-base sm:text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50", hn = "border-rose-500/70 focus:border-rose-500";
function gn(e, t, n, r, s) {
  const o = t ? hn : O[e] || O.amber;
  return v(
    fn,
    o,
    n ? "pl-9" : "",
    r ? "pr-10" : "",
    s
  );
}
const xn = ae.forwardRef(
  ({
    variant: e = "amber",
    leftIcon: t,
    rightSlot: n,
    error: r = !1,
    containerClassName: s = "",
    className: o = "",
    ...l
  }, i) => /* @__PURE__ */ u("div", { className: v("relative w-full", s), children: [
    t && /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-slate-400", children: t }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: i,
        "aria-invalid": r || void 0,
        className: gn(
          e,
          r,
          !!t,
          !!n,
          o
        ),
        ...l
      }
    ),
    n && /* @__PURE__ */ a("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center", children: n })
  ] })
);
xn.displayName = "TextInput";
const et = {
  amber: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  blue: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  emerald: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  purple: "bg-purple-500/15 text-purple-400 border border-purple-500/25",
  slate: "bg-slate-700/40 text-slate-300 border border-slate-600/40",
  brand: "bg-accent/15 text-accent border border-accent/25"
}, Fa = ({
  title: e,
  subtitle: t,
  icon: n,
  badge: r,
  variant: s = "amber",
  onClick: o,
  disabled: l = !1,
  className: i = "",
  "data-testid": d
}) => {
  const c = et[s] || et.amber, b = n ? /* @__PURE__ */ a("span", { className: v("inline-flex items-center justify-center w-7 h-7 rounded-lg shrink-0", c), children: n }) : void 0;
  return /* @__PURE__ */ a(
    ln,
    {
      title: e,
      subtitle: t,
      icon: b,
      badge: r,
      variant: s,
      disabled: l,
      onClick: l ? void 0 : o,
      "data-testid": d,
      className: v(
        "min-h-[44px]",
        l ? "cursor-not-allowed" : "cursor-pointer",
        i
      )
    }
  );
}, Ha = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r = "Sports Physiology & Circadian Research Grounding",
  headerIcon: s = "🧠",
  citationTitle: o,
  citationIcon: l = "📚",
  pillars: i = [],
  inputLabel: d = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: c = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: b = 3,
  submitLabel: p = "Synthesize with AI",
  submittingLabel: h = "Synthesizing...",
  errorFallbackMessage: f = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: m = "blue",
  onSynthesize: g
}) => {
  const [y, x] = R(""), [N, S] = R(!1), [E, T] = R(null), z = async () => {
    S(!0), T(null);
    try {
      await g(y.trim() || void 0), x(""), t();
    } catch {
      T(f);
    } finally {
      S(!1);
    }
  }, F = pe[m] || pe.blue, H = O[m] || O.blue, C = q[m] || q.blue;
  return /* @__PURE__ */ a(
    Ct,
    {
      isOpen: e,
      onClose: t,
      title: n,
      subtitle: r,
      headerIcon: s,
      disableClose: N,
      children: /* @__PURE__ */ u("div", { className: "space-y-4", children: [
        (o || i.length > 0) && /* @__PURE__ */ u("div", { className: `rounded-xl border p-3 text-xs ${F.container}`, children: [
          o && /* @__PURE__ */ u("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${F.header}`, children: [
            /* @__PURE__ */ a("span", { children: l }),
            /* @__PURE__ */ a("span", { children: o })
          ] }),
          i.length > 0 && /* @__PURE__ */ a("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: i.map((P, j) => /* @__PURE__ */ u("li", { children: [
            /* @__PURE__ */ u("strong", { className: "text-slate-100", children: [
              P.label,
              ":"
            ] }),
            " ",
            P.description
          ] }, j)) })
        ] }),
        /* @__PURE__ */ u("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ a("label", { className: "block text-xs font-semibold text-slate-200", children: d }),
          /* @__PURE__ */ a(
            "textarea",
            {
              rows: b,
              value: y,
              onChange: (P) => x(P.target.value),
              disabled: N,
              placeholder: c,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-base sm:text-xs placeholder-slate-500 focus:outline-none ${H} resize-y`
            }
          )
        ] }),
        E && /* @__PURE__ */ a("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: E }),
        /* @__PURE__ */ u("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "md",
              onClick: t,
              disabled: N,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: C,
              size: "md",
              loading: N,
              loadingText: h,
              icon: /* @__PURE__ */ a("span", { children: "⚡" }),
              onClick: z,
              children: p
            }
          )
        ] })
      ] })
    }
  );
}, Ga = (e) => {
  const { title: t, subtitle: n, icon: r, currentValue: s, targetValue: o, action: l, deltaBadge: i, className: d = "" } = e, { currencyPrefix: c = "$", currencySuffix: b = "NZD" } = e, { percent: p, remaining: h, percentTextColor: f } = Nn(s, o);
  return /* @__PURE__ */ u(I, { tone: "solid", padding: "lg", className: d, children: [
    /* @__PURE__ */ a(yn, { title: t, subtitle: n, icon: r, action: l }),
    /* @__PURE__ */ a(
      vn,
      {
        title: t,
        currentValue: s,
        targetValue: o,
        currencyPrefix: c,
        percent: p,
        percentTextColor: f
      }
    ),
    /* @__PURE__ */ a(
      wn,
      {
        remaining: h,
        currencyPrefix: c,
        currencySuffix: b,
        deltaBadge: i
      }
    )
  ] });
}, yn = ({ title: e, subtitle: t, icon: n, action: r }) => /* @__PURE__ */ u("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-3", children: [
  /* @__PURE__ */ u("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
    !!n && /* @__PURE__ */ a("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0", children: n }),
    /* @__PURE__ */ u("div", { className: "min-w-0", children: [
      /* @__PURE__ */ a("h3", { className: "text-sm font-semibold text-slate-200", children: e }),
      !!t && /* @__PURE__ */ a("p", { className: "text-xs text-slate-400", children: t })
    ] })
  ] }),
  !!r && /* @__PURE__ */ a("div", { className: "shrink-0", children: r })
] }), vn = (e) => /* @__PURE__ */ u("div", { className: "space-y-1.5 my-3", children: [
  /* @__PURE__ */ u("div", { className: "flex flex-wrap justify-between items-baseline gap-2 text-xs", children: [
    /* @__PURE__ */ u("span", { className: "text-slate-400", children: [
      "Spent",
      " ",
      /* @__PURE__ */ u("strong", { className: "text-slate-200", children: [
        e.currencyPrefix,
        Math.round(e.currentValue).toLocaleString("en-NZ")
      ] }),
      " ",
      "of ",
      e.currencyPrefix,
      Math.round(e.targetValue).toLocaleString("en-NZ")
    ] }),
    /* @__PURE__ */ u("span", { className: `${e.percentTextColor} shrink-0 tabular-nums`, children: [
      e.percent,
      "%"
    ] })
  ] }),
  /* @__PURE__ */ a(
    ge,
    {
      value: e.percent,
      tone: kn(e.percent),
      size: "md",
      label: `${e.title} progress`
    }
  )
] }), wn = (e) => {
  const { remaining: t, currencyPrefix: n, currencySuffix: r, deltaBadge: s } = e;
  return /* @__PURE__ */ u("div", { className: "flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pt-2 border-t border-border/50 text-xs", children: [
    /* @__PURE__ */ u("span", { className: "text-slate-400", children: [
      "Remaining allowance:",
      " ",
      /* @__PURE__ */ u("strong", { className: "text-slate-200", children: [
        n,
        Math.round(t).toLocaleString("en-NZ"),
        " ",
        r
      ] })
    ] }),
    s && /* @__PURE__ */ u(
      "div",
      {
        className: `flex items-center font-medium px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap ${s.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
        children: [
          /* @__PURE__ */ a(jt, { className: `w-3.5 h-3.5 mr-1 ${s.isPositive ? "" : "rotate-90"}` }),
          /* @__PURE__ */ a("span", { children: s.label })
        ]
      }
    )
  ] });
};
function Nn(e, t) {
  const n = t > 0 ? t : 1, r = Math.min(100, Math.max(0, Math.round(e / n * 100))), s = Math.max(0, t - e);
  return r > 90 ? { percent: r, remaining: s, barColor: "bg-rose-500", percentTextColor: "text-rose-400 font-semibold" } : r > 70 ? { percent: r, remaining: s, barColor: "bg-amber-400", percentTextColor: "text-amber-400 font-semibold" } : { percent: r, remaining: s, barColor: "bg-emerald-400", percentTextColor: "text-slate-400 font-medium" };
}
function kn(e) {
  return e > 90 ? "rose" : e > 70 ? "amber" : "emerald";
}
const Cn = {
  normal: "emerald",
  warning: "amber",
  danger: "rose"
}, tt = {
  normal: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500"
}, Ua = (e) => {
  const { category: t, icon: n, spendFormatted: r, transactionCount: s, transactionCountLabel: o } = e, { percentage: l = 0, isTransfer: i = !1, onRowClick: d, "data-testid": c } = e;
  return /* @__PURE__ */ u(
    "div",
    {
      "data-testid": c,
      onClick: d,
      title: `Click to inspect transactions in ${t}`,
      className: "p-3 bg-card/40 hover:bg-card/70 rounded-xl border border-border hover:border-slate-600 transition-all cursor-pointer space-y-1.5 group",
      children: [
        /* @__PURE__ */ a(
          En,
          {
            category: t,
            icon: n,
            spendFormatted: r,
            transactionCount: s,
            transactionCountLabel: o,
            percentage: l,
            isTransfer: i
          }
        ),
        /* @__PURE__ */ a(Sn, { ...e })
      ]
    }
  );
}, Sn = (e) => {
  const { isTransfer: t = !1, budgetSummaryLabel: n, transferNote: r } = e;
  return t ? /* @__PURE__ */ a(
    Tn,
    {
      transferNote: r ?? "Internal transfers between accounts - Excluded from spend"
    }
  ) : n ? /* @__PURE__ */ a(
    Rn,
    {
      category: e.category,
      budgetSummaryLabel: n,
      remainingOrOverFormatted: e.remainingOrOverFormatted,
      percentUsed: e.percentUsed,
      isOverBudget: !!e.isOverBudget,
      warningLevel: e.warningLevel ?? "normal",
      onEditTargetClick: e.onEditTargetClick
    }
  ) : /* @__PURE__ */ a(An, { onEditTargetClick: e.onEditTargetClick });
}, En = (e) => {
  const { category: t, icon: n, spendFormatted: r, transactionCount: s, transactionCountLabel: o, percentage: l, isTransfer: i } = e, d = o ?? `${s} ${s === 1 ? "txn" : "txns"}`;
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between text-xs gap-2", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center space-x-2 min-w-0", children: [
      !!n && /* @__PURE__ */ a("div", { className: "p-1 rounded bg-background border border-border shrink-0", children: n }),
      /* @__PURE__ */ a("span", { className: "font-medium text-slate-200 group-hover:text-amber-300 transition-colors truncate", children: t }),
      /* @__PURE__ */ u("span", { className: "text-[10px] text-slate-500 font-mono shrink-0", children: [
        d,
        !i && ` (${Math.round(l)}%)`
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "flex items-center space-x-2 shrink-0", children: [
      /* @__PURE__ */ a("span", { className: `font-semibold font-mono ${i ? "text-sky-300" : "text-slate-100"}`, children: r }),
      /* @__PURE__ */ a("div", { className: "p-1 rounded bg-card/80 text-slate-400 group-hover:text-slate-200 border border-transparent group-hover:border-border transition-colors", children: /* @__PURE__ */ a(ht, { className: "w-3 h-3" }) })
    ] })
  ] });
}, Tn = ({ transferNote: e }) => /* @__PURE__ */ u("div", { className: "flex justify-between items-center text-[10px] text-sky-400/90 pt-0.5", children: [
  /* @__PURE__ */ u("span", { className: "flex items-center space-x-1", children: [
    /* @__PURE__ */ a(Dt, { className: "w-2.5 h-2.5 shrink-0" }),
    /* @__PURE__ */ a("span", { children: e })
  ] }),
  /* @__PURE__ */ a("span", { className: "text-slate-400 hover:text-slate-200 shrink-0", children: "Inspect txns" })
] }), Rn = (e) => {
  const { category: t, budgetSummaryLabel: n, remainingOrOverFormatted: r, percentUsed: s } = e, { isOverBudget: o, warningLevel: l, onEditTargetClick: i } = e;
  return /* @__PURE__ */ u("div", { className: "space-y-1", children: [
    /* @__PURE__ */ a(
      ge,
      {
        value: s ?? 0,
        round: !1,
        size: "sm",
        tone: Cn[l] ?? "emerald",
        trackClassName: "border-border",
        fillClassName: tt[l] ?? tt.normal,
        label: `${t} budget usage`
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex justify-between items-center text-[10px] text-slate-400 font-mono", children: [
      /* @__PURE__ */ a("span", { children: n }),
      /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", children: [
        !!r && /* @__PURE__ */ a(Mn, { isOverBudget: o, label: r }),
        i && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: i,
            title: "Edit budget target",
            className: "text-slate-500 hover:text-amber-400 p-0.5",
            children: /* @__PURE__ */ a(gt, { className: "w-2.5 h-2.5" })
          }
        )
      ] })
    ] })
  ] });
}, Mn = ({
  isOverBudget: e,
  label: t
}) => e ? /* @__PURE__ */ u("span", { className: "text-rose-400 font-semibold flex items-center space-x-1", children: [
  /* @__PURE__ */ a(Se, { className: "w-3 h-3" }),
  /* @__PURE__ */ a("span", { children: t })
] }) : /* @__PURE__ */ a("span", { className: "text-emerald-400", children: t }), An = ({
  onEditTargetClick: e
}) => /* @__PURE__ */ u("div", { className: "flex justify-between items-center text-[10px] text-slate-500 pt-0.5", children: [
  /* @__PURE__ */ a("span", { children: "No target budget configured" }),
  e && /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      onClick: e,
      className: "text-amber-400/80 hover:text-amber-300 flex items-center space-x-0.5",
      children: [
        /* @__PURE__ */ a(gt, { className: "w-2.5 h-2.5" }),
        /* @__PURE__ */ a("span", { children: "Set target" })
      ]
    }
  )
] }), $n = ({
  title: e,
  icon: t,
  isOpen: n,
  onToggle: r,
  expandLabel: s,
  collapseLabel: o,
  headerActions: l,
  headerClassName: i = "",
  contentClassName: d = "",
  toggleTestId: c,
  children: b,
  className: p
}) => /* @__PURE__ */ u(I, { padding: "md", className: p, children: [
  /* @__PURE__ */ u("div", { className: v("flex items-center justify-between gap-2", i), children: [
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        "data-testid": c,
        "aria-expanded": n,
        onClick: r,
        className: "flex-1 min-w-0 min-h-[44px] sm:min-h-0 flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer gap-2",
        children: [
          /* @__PURE__ */ u("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2 min-w-0", children: [
            !!t && /* @__PURE__ */ a("span", { className: "shrink-0", children: t }),
            /* @__PURE__ */ a("span", { className: "truncate", children: e })
          ] }),
          /* @__PURE__ */ a("span", { className: "text-xs text-slate-400 shrink-0", children: n ? o : s })
        ]
      }
    ),
    !!l && /* @__PURE__ */ a("div", { className: "shrink-0 flex items-center gap-1.5", children: l })
  ] }),
  n && /* @__PURE__ */ a("div", { className: v("mt-3 pt-3 border-t border-border/60", d), children: b })
] }), Ln = ({
  title: e,
  icon: t,
  isOpen: n,
  onToggle: r,
  headerActions: s,
  headerClassName: o = "",
  contentClassName: l = "",
  toggleTestId: i,
  children: d,
  className: c
}) => /* @__PURE__ */ u("div", { className: v("pt-2 border-t border-border/40", c), children: [
  /* @__PURE__ */ u("div", { className: v("flex items-center justify-between gap-2", o), children: [
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        "data-testid": i,
        "aria-expanded": n,
        onClick: r,
        className: "bg-transparent border-none p-0 min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          !!t && /* @__PURE__ */ a("span", { className: "shrink-0", children: t }),
          /* @__PURE__ */ a("span", { className: "underline", children: e }),
          /* @__PURE__ */ a("span", { className: "text-[10px]", children: n ? "▲" : "▼" })
        ]
      }
    ),
    !!s && /* @__PURE__ */ a("div", { className: "shrink-0 flex items-center gap-1.5", children: s })
  ] }),
  n && /* @__PURE__ */ a(
    "div",
    {
      className: v(
        "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1",
        l
      ),
      children: d
    }
  )
] }), Wa = ({
  title: e,
  icon: t,
  defaultOpen: n = !1,
  open: r,
  onOpenChange: s,
  variant: o = "inline",
  expandLabel: l = "▼ Expand",
  collapseLabel: i = "▲ Hide",
  headerActions: d,
  headerClassName: c = "",
  contentClassName: b = "",
  toggleTestId: p,
  children: h,
  className: f = ""
}) => {
  const [m, g] = R(n), y = r !== void 0;
  return /* @__PURE__ */ a(
    o === "card" ? $n : Ln,
    {
      title: e,
      icon: t,
      isOpen: y ? r : m,
      onToggle: () => {
        if (y) {
          s == null || s(!r);
          return;
        }
        const E = !m;
        g(E), s == null || s(E);
      },
      expandLabel: l,
      collapseLabel: i,
      headerActions: d,
      headerClassName: c,
      contentClassName: b,
      toggleTestId: p,
      className: f,
      children: h
    }
  );
}, rt = {
  danger: {
    container: "bg-rose-500/10 border-rose-500/30",
    title: "text-rose-200",
    icon: "text-rose-400",
    confirmVariant: "rose"
  },
  warning: {
    container: "bg-amber-500/10 border-amber-500/30",
    title: "text-amber-200",
    icon: "text-amber-400",
    confirmVariant: "amber"
  }
}, qa = ({
  title: e,
  description: t,
  confirmLabel: n = "Confirm",
  cancelLabel: r = "Cancel",
  onConfirm: s,
  onCancel: o,
  loading: l = !1,
  variant: i = "danger",
  className: d = ""
}) => {
  const c = rt[i] || rt.danger;
  return /* @__PURE__ */ u(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${c.container} ${d}`,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ a(Se, { className: `w-4 h-4 shrink-0 mt-0.5 ${c.icon}` }),
          /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ a("div", { className: `text-xs font-semibold ${c.title}`, children: e }),
            t && /* @__PURE__ */ a("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: t })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "xs",
              onClick: o,
              disabled: l,
              children: r
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: c.confirmVariant,
              size: "xs",
              loading: l,
              onClick: s,
              children: n
            }
          )
        ] })
      ]
    }
  );
};
function Pn(e, t, n) {
  const r = e > 0 ? "up" : e < 0 ? "down" : "flat";
  return r === "flat" ? {
    variant: "idle",
    sign: "",
    icon: /* @__PURE__ */ a(Ut, { className: n })
  } : r === "up" ? {
    variant: t ? "success" : "error",
    sign: "+",
    icon: /* @__PURE__ */ a(er, { className: n })
  } : {
    variant: t ? "error" : "success",
    sign: "-",
    icon: /* @__PURE__ */ a(Qt, { className: n })
  };
}
const Ka = ({
  value: e,
  precision: t = 2,
  prefix: n = "",
  suffix: r = "",
  positiveIsGood: s = !0,
  showZero: o = !1,
  size: l = "xs",
  className: i = ""
}) => {
  if (e == null || !Number.isFinite(e) || !o && e === 0)
    return null;
  const c = Pn(e, s, l === "xs" ? "w-2.5 h-2.5" : "w-3 h-3"), b = Math.abs(e).toFixed(t), p = `${c.sign}${n}${b}${r}`;
  return /* @__PURE__ */ a(
    Te,
    {
      variant: c.variant,
      size: l,
      showDot: !1,
      icon: c.icon,
      label: p,
      className: v("font-mono font-semibold", i)
    }
  );
}, Za = (e) => {
  const { eyebrow: t, progressPercent: n, startLabel: r, centerLabel: s, targetLabel: o, variant: l = "blue", className: i = "" } = e;
  return /* @__PURE__ */ u(I, { className: v("bg-card/80 border-blue-500/25 animate-slide-up", i), children: [
    /* @__PURE__ */ a(Bn, { ...e, variant: l }),
    /* @__PURE__ */ a(
      ge,
      {
        value: n,
        tone: "gradient",
        variant: l,
        size: "md",
        trackClassName: "bg-background/80 my-3",
        label: `${t} progress`
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex justify-between text-xs text-slate-400", children: [
      /* @__PURE__ */ a("span", { children: r }),
      !!s && /* @__PURE__ */ a("span", { children: s }),
      /* @__PURE__ */ a("span", { children: o })
    ] })
  ] });
}, Bn = (e) => {
  const { eyebrow: t, currentValueLabel: n, deltaLabel: r, deltaPositive: s = !0 } = e, { milestoneLabel: o = "Next Milestone", milestoneValue: l, variant: i = "blue" } = e, d = fe[i] || fe.blue;
  return /* @__PURE__ */ u("div", { className: "flex justify-between items-center mb-2", children: [
    /* @__PURE__ */ u("div", { children: [
      /* @__PURE__ */ a("span", { className: `text-xs font-bold uppercase tracking-wider ${d.eyebrow}`, children: t }),
      /* @__PURE__ */ u("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
        /* @__PURE__ */ a("span", { children: n }),
        !!r && /* @__PURE__ */ a("span", { className: `text-sm font-semibold ${s ? "text-emerald-400" : "text-rose-400"}`, children: r })
      ] })
    ] }),
    !!l && /* @__PURE__ */ u("div", { className: "text-right", children: [
      /* @__PURE__ */ a("div", { className: "text-xs text-slate-400", children: o }),
      /* @__PURE__ */ a("div", { className: "text-lg font-bold text-purple-400", children: l })
    ] })
  ] });
}, _n = ({
  draft: e,
  onDraftChange: t,
  placeholder: n,
  rows: r,
  variant: s,
  saving: o,
  error: l,
  saveLabel: i,
  savingLabel: d,
  onCancel: c,
  onSubmit: b
}) => /* @__PURE__ */ u("div", { className: "space-y-2 pt-1", children: [
  /* @__PURE__ */ a(
    St,
    {
      value: e,
      onChange: (p) => t(p.target.value),
      placeholder: n,
      rows: r,
      variant: s,
      disabled: o,
      error: !!l,
      className: "min-h-[68px]"
    }
  ),
  !!l && /* @__PURE__ */ a("p", { role: "alert", className: "text-xs text-rose-400", children: l }),
  /* @__PURE__ */ u("div", { className: "flex justify-end gap-2", children: [
    /* @__PURE__ */ a(
      L,
      {
        variant: "outline",
        size: "sm",
        onClick: c,
        disabled: o,
        className: "min-h-[44px] sm:min-h-[32px]",
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        variant: q[s] || "amber",
        size: "sm",
        loading: o,
        loadingText: d,
        disabled: o,
        icon: /* @__PURE__ */ a(Xt, { className: "w-3.5 h-3.5" }),
        onClick: b,
        className: "min-h-[44px] sm:min-h-[32px]",
        children: i
      }
    )
  ] })
] }), In = ({
  value: e,
  emptyText: t
}) => e && e.trim().length > 0 ? /* @__PURE__ */ a("p", { className: "text-slate-300 text-xs whitespace-pre-wrap bg-background/40 p-2 rounded border border-border/40", children: e }) : /* @__PURE__ */ a("p", { className: "text-slate-500 text-xs italic", children: t }), Ya = ({
  value: e,
  onSave: t,
  title: n = "Notes",
  emptyText: r = "No notes added yet.",
  placeholder: s = "Add notes...",
  addLabel: o = "Add Note",
  editLabel: l = "Edit",
  saveLabel: i = "Save Note",
  savingLabel: d = "Saving...",
  variant: c = "amber",
  rows: b = 2,
  className: p = ""
}) => {
  const [h, f] = R(!1), [m, g] = R(e ?? ""), [y, x] = R(!1), [N, S] = R(null), E = me[c] || me.amber, T = !!(e && e.trim().length > 0), z = () => {
    g(e ?? ""), S(null), f(!0);
  }, F = async () => {
    x(!0), S(null);
    try {
      await t(m), f(!1);
    } catch (H) {
      S(H instanceof Error ? H.message : "Failed to save note");
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ u("div", { className: v("p-2.5 bg-card/40 rounded-lg border border-border/50 text-xs space-y-1.5", p), children: [
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ a("span", { className: "text-[10px] uppercase font-semibold text-slate-400 tracking-wider", children: n }),
      !h && /* @__PURE__ */ a(
        L,
        {
          variant: "ghost",
          size: "xs",
          icon: /* @__PURE__ */ a(qt, { className: "w-3 h-3" }),
          onClick: z,
          className: v("min-h-[44px] sm:min-h-[28px] px-2 text-[11px]", E),
          children: T ? l : o
        }
      )
    ] }),
    h ? /* @__PURE__ */ a(
      _n,
      {
        draft: m,
        onDraftChange: g,
        placeholder: s,
        rows: b,
        variant: c,
        saving: y,
        error: N,
        saveLabel: i,
        savingLabel: d,
        onCancel: () => {
          f(!1), S(null);
        },
        onSubmit: () => void F()
      }
    ) : /* @__PURE__ */ a(In, { value: e, emptyText: r })
  ] });
};
async function zn(e) {
  var n;
  if (!e)
    return !1;
  try {
    if (typeof navigator < "u" && ((n = navigator.clipboard) != null && n.writeText))
      return await navigator.clipboard.writeText(e), !0;
  } catch {
  }
  if (typeof document > "u")
    return !1;
  const t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", t.style.left = "-9999px", t.style.opacity = "0", document.body.appendChild(t);
  try {
    return t.focus(), t.select(), t.setSelectionRange(0, t.value.length), document.execCommand("copy");
  } catch {
    return !1;
  } finally {
    document.body.removeChild(t);
  }
}
function Et(e = 2e3) {
  const [t, n] = R(null), r = _(null);
  G(() => () => {
    r.current !== null && clearTimeout(r.current);
  }, []);
  const s = B(
    async (o, l = "default") => await zn(o) ? (n(l), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => {
      n(null), r.current = null;
    }, e), !0) : !1,
    [e]
  );
  return { copiedKey: t, copyText: s };
}
const nt = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2"
}, Dn = ({ item: e, itemKey: t, isCopied: n, onCopy: r }) => {
  const s = typeof e.copyValue == "string" && e.copyValue.length > 0, o = e.value === null || e.value === void 0 || e.value === "";
  return /* @__PURE__ */ u(
    I,
    {
      tone: "solid",
      padding: "none",
      className: "rounded-xl shadow-none bg-background/60 border-border/60 px-3 py-2.5 flex items-start justify-between gap-2.5 min-w-0",
      children: [
        /* @__PURE__ */ u("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a("dt", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-medium truncate", children: e.label }),
          /* @__PURE__ */ a(
            "dd",
            {
              className: `m-0 mt-1 text-sm sm:text-xs text-slate-100 min-w-0 ${e.mono ? "font-mono break-all" : "break-words"}`,
              children: o ? /* @__PURE__ */ a("span", { className: "text-slate-500", children: "-" }) : e.value
            }
          )
        ] }),
        s && /* @__PURE__ */ a(
          L,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => r(e.copyValue, t),
            "aria-label": n ? `Copied ${e.label}` : `Copy ${e.label}`,
            title: n ? "Copied" : `Copy ${e.label}`,
            "data-copied": n ? "true" : "false",
            icon: n ? /* @__PURE__ */ a(bt, { className: "w-4 h-4" }) : /* @__PURE__ */ a(ft, { className: "w-4 h-4" }),
            className: v(
              "min-w-[44px] min-h-[44px] p-0 shrink-0 shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
              n ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200" : "bg-card/80 border-border/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
            )
          }
        )
      ]
    }
  );
}, Xa = ({
  items: e,
  columns: t = 1,
  emptyMessage: n = "No metadata available",
  className: r = ""
}) => {
  const { copiedKey: s, copyText: o } = Et();
  if (e.length === 0)
    return /* @__PURE__ */ a(
      I,
      {
        tone: "solid",
        padding: "none",
        className: v(
          "border-2 border-dashed border-border/80 bg-background/40 shadow-none px-4 py-6 text-center text-xs text-slate-400",
          r
        ),
        children: n
      }
    );
  const l = nt[t] || nt[1];
  return /* @__PURE__ */ a("dl", { className: `grid ${l} gap-2.5 m-0 ${r}`, children: e.map((i, d) => {
    const c = i.id || `${i.label}-${d}`;
    return /* @__PURE__ */ a(
      Dn,
      {
        item: i,
        itemKey: c,
        isCopied: s === c,
        onCopy: (b, p) => void o(b, p)
      },
      c
    );
  }) });
}, Ja = ({
  loadedCount: e,
  totalCount: t,
  loading: n = !1,
  loadingText: r = "Loading more...",
  onLoadMore: s,
  loadMoreTestId: o,
  doneLabel: l = "Done",
  onDone: i,
  rightSlot: d,
  className: c = ""
}) => {
  const b = e < t, p = !!d || !!i;
  return /* @__PURE__ */ u("div", { className: v("space-y-2.5", c), children: [
    b && /* @__PURE__ */ a(
      L,
      {
        variant: "secondary",
        size: "sm",
        fullWidth: !0,
        loading: n,
        loadingText: r,
        onClick: s,
        "data-testid": o,
        className: "min-h-[44px]",
        children: `Load more (Showing ${e} of ${t})`
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2 pt-1", children: [
      /* @__PURE__ */ a("span", { className: "text-xs text-slate-400 tabular-nums", children: `Showing ${e} of ${t}` }),
      p && /* @__PURE__ */ u("div", { className: "flex items-center gap-2 shrink-0", children: [
        !!d && d,
        !!i && /* @__PURE__ */ a(
          L,
          {
            variant: "outline",
            size: "sm",
            onClick: i,
            className: "min-h-[44px] sm:min-h-[36px]",
            children: l
          }
        )
      ] })
    ] })
  ] });
}, jn = {
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  sky: "bg-sky-500/20 text-sky-300 border-sky-500/40",
  rose: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40"
}, Vn = {
  emerald: "success",
  sky: "info",
  rose: "error",
  amber: "warning",
  blue: "info"
}, Qa = ({
  title: e,
  primaryValue: t,
  primaryUnit: n,
  secondaryValue: r,
  secondaryUnit: s,
  toggleHint: o,
  badge: l,
  variant: i = "blue",
  unitColor: d,
  glowColor: c,
  children: b,
  className: p = ""
}) => {
  const [h, f] = R(!1), m = (l == null ? void 0 : l.variant) ?? "blue", g = r !== void 0 && s !== void 0, y = d || V[i] || V.blue, x = c || Pe[i] || Pe.blue;
  return /* @__PURE__ */ u(
    I,
    {
      tone: "solid",
      padding: "none",
      className: v("p-6 shadow-xl relative overflow-hidden", p),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${x} rounded-full blur-3xl pointer-events-none`
          }
        ),
        /* @__PURE__ */ u("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ a("span", { className: "text-xs font-semibold tracking-[var(--ui-eyebrow-tracking)] uppercase text-muted", children: e }),
          l && /* @__PURE__ */ a(
            Te,
            {
              label: l.label,
              variant: Vn[m],
              icon: l.icon || /* @__PURE__ */ a(Jt, { className: "w-3.5 h-3.5" }),
              className: jn[m]
            }
          )
        ] }),
        /* @__PURE__ */ u(
          "div",
          {
            className: `text-center my-6 ${g ? "cursor-pointer select-none" : ""}`,
            onClick: () => g && f(!h),
            children: [
              /* @__PURE__ */ u("div", { className: "text-5xl sm:text-6xl font-black font-display text-foreground tracking-[var(--ui-display-tracking)]", children: [
                h ? r : t,
                /* @__PURE__ */ a("span", { className: `text-2xl font-semibold ${y} ml-2`, children: h ? s : n })
              ] }),
              o && /* @__PURE__ */ a("p", { className: "text-xs text-muted mt-1", children: o })
            ]
          }
        ),
        b
      ]
    }
  );
}, es = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r,
  displayLabel: s,
  value: o,
  displayValue: l,
  unit: i,
  onChange: d,
  onSubmit: c,
  submitLabel: b = "Apply",
  loading: p = !1,
  loadingText: h = "Saving...",
  submitDisabled: f = !1,
  allowDecimals: m = !0,
  maxDecimalPlaces: g = 2,
  variant: y = "blue",
  error: x,
  children: N
}) => {
  const S = q[y] || q.blue;
  return /* @__PURE__ */ a(
    Ct,
    {
      isOpen: e,
      onClose: t,
      title: n,
      subtitle: r,
      disableClose: p,
      children: /* @__PURE__ */ u("div", { className: "space-y-4", children: [
        x && /* @__PURE__ */ a(zr, { variant: "error", icon: "⚠️", children: x }),
        /* @__PURE__ */ a(
          Xr,
          {
            label: s,
            value: l !== void 0 ? l : o || "0",
            unit: i,
            variant: y
          }
        ),
        N,
        /* @__PURE__ */ a(
          dn,
          {
            value: o,
            onChange: d,
            allowDecimals: m,
            maxDecimalPlaces: g,
            variant: y
          }
        ),
        /* @__PURE__ */ a(
          L,
          {
            variant: S,
            size: "lg",
            fullWidth: !0,
            loading: p,
            loadingText: h,
            disabled: f,
            onClick: c,
            children: b
          }
        )
      ] })
    }
  );
}, at = "min-h-[44px] min-w-[44px] px-3.5 bg-background/70 shadow-none disabled:opacity-45 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60";
function On(e, t, n, r, s) {
  const o = Number.isFinite(t) && t > 0 ? Math.floor(t) : 1, l = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0, i = Math.max(1, Math.ceil(l / o)), d = Number.isFinite(e) ? Math.floor(e) : 1, c = Math.min(Math.max(1, d), i), b = l === 0 ? 0 : (c - 1) * o + 1, p = l === 0 ? 0 : Math.min(c * o, l), h = s ? ` ${s}` : "", f = l === 0 ? `Showing 0 of 0${h}` : `Showing ${b}-${p} of ${l}${h}`;
  return {
    currentPage: c,
    totalPages: i,
    summaryText: f,
    isPrevDisabled: r || c <= 1,
    isNextDisabled: r || c >= i || l === 0
  };
}
const ts = ({
  page: e,
  pageSize: t,
  totalItems: n,
  onPageChange: r,
  loading: s = !1,
  itemLabel: o,
  className: l = ""
}) => {
  const { currentPage: i, totalPages: d, summaryText: c, isPrevDisabled: b, isNextDisabled: p } = On(e, t, n, s, o);
  return /* @__PURE__ */ u(
    I,
    {
      as: "nav",
      "aria-label": "Pagination",
      "aria-busy": s,
      padding: "none",
      className: v(
        "w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-3.5 py-2.5",
        l
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 text-center sm:text-left tabular-nums", children: c }),
        /* @__PURE__ */ u("div", { className: "flex items-center justify-between sm:justify-end gap-2", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => r(i - 1),
              disabled: b,
              "aria-label": "Previous page",
              icon: /* @__PURE__ */ a(Ot, { className: "w-4 h-4" }),
              iconPosition: "left",
              className: at,
              children: "Prev"
            }
          ),
          /* @__PURE__ */ u(
            "span",
            {
              "aria-live": "polite",
              className: "inline-flex items-center justify-center gap-1.5 px-2 text-xs font-medium text-slate-200 whitespace-nowrap tabular-nums",
              children: [
                s && /* @__PURE__ */ a(Ce, { className: "w-3.5 h-3.5 animate-spin text-amber-400 shrink-0" }),
                /* @__PURE__ */ u("span", { children: [
                  "Page ",
                  i,
                  " of ",
                  d
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => r(i + 1),
              disabled: p,
              "aria-label": "Next page",
              icon: /* @__PURE__ */ a(ke, { className: "w-4 h-4" }),
              iconPosition: "right",
              className: at,
              children: "Next"
            }
          )
        ] })
      ]
    }
  );
}, Fn = [
  "authorization",
  "x-api-key",
  "api_key",
  "apikey",
  "cookie",
  "set-cookie",
  "password",
  "secret",
  "webhook_secret",
  "access_token",
  "refresh_token",
  "private_key"
], Hn = /\u001b\[[0-9;?]*[ -/]*[@-~]/g, Gn = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, Un = /[\u202a-\u202e\u2066-\u2069]/g;
function ce(e) {
  return e.replace(Hn, "").replace(/\r\n?/g, `
`).replace(Gn, "").replace(Un, "");
}
function he(e, t, n) {
  if (e == null)
    return e;
  if (typeof e == "string")
    return ce(e);
  if (typeof e == "bigint")
    return e.toString();
  if (typeof e == "function")
    return "[Function]";
  if (typeof e != "object")
    return e;
  if (e instanceof Date)
    return Number.isNaN(e.getTime()) ? "Invalid Date" : e.toISOString();
  if (e instanceof Error)
    return {
      name: ce(e.name),
      message: ce(e.message)
    };
  if (n.has(e))
    return "[Circular]";
  n.add(e);
  try {
    if (Array.isArray(e))
      return e.map((s) => he(s, t, n));
    const r = {};
    for (const [s, o] of Object.entries(e))
      t.has(s.toLowerCase()) ? r[s] = "[REDACTED]" : r[s] = he(o, t, n);
    return r;
  } finally {
    n.delete(e);
  }
}
function Wn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function qn(e, t) {
  if (e == null)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const n = new Set(t.map((i) => i.toLowerCase()));
  let r = "", s = "TEXT";
  if (typeof e == "string") {
    const i = ce(e), d = i.trim();
    if (!d)
      return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
    if (d.startsWith("{") || d.startsWith("["))
      try {
        const c = JSON.parse(d);
        if (c !== null && typeof c == "object") {
          const b = he(c, n, /* @__PURE__ */ new WeakSet());
          r = JSON.stringify(b, null, 2), s = "JSON";
        } else
          r = i;
      } catch {
        r = i;
      }
    else
      r = i;
  } else {
    const i = he(e, n, /* @__PURE__ */ new WeakSet());
    r = JSON.stringify(i, null, 2) ?? "", s = "JSON";
  }
  if (!r)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const o = typeof TextEncoder < "u" ? new TextEncoder().encode(r).length : r.length, l = r.split(`
`).length;
  return {
    text: r,
    isEmpty: !1,
    bytes: o,
    lines: l,
    formatLabel: s
  };
}
const Kn = ({
  title: e,
  subtitle: t,
  panelId: n,
  isExpanded: r,
  onToggle: s,
  summaryBadge: o,
  isEmpty: l,
  isCopied: i,
  onCopy: d
}) => /* @__PURE__ */ u("div", { className: "flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 min-w-0", children: [
  /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      onClick: s,
      "aria-expanded": r,
      "aria-controls": n,
      className: "flex-1 min-w-[180px] min-h-[44px] flex items-center gap-2 text-left bg-transparent border-0 p-0 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
      children: [
        r ? /* @__PURE__ */ a(pt, { className: "w-4 h-4 text-slate-400 shrink-0" }) : /* @__PURE__ */ a(ke, { className: "w-4 h-4 text-slate-400 shrink-0" }),
        /* @__PURE__ */ u("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a("div", { className: "text-sm sm:text-xs font-semibold text-slate-100 truncate", children: e }),
          t && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 truncate mt-0.5", children: t })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ u("div", { className: "flex items-center gap-2 shrink-0 max-w-full", children: [
    /* @__PURE__ */ a(
      Te,
      {
        label: o,
        variant: "idle",
        showDot: !1,
        className: "text-[11px] font-mono whitespace-nowrap"
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        variant: "secondary",
        size: "sm",
        disabled: l,
        onClick: d,
        "aria-label": i ? `Copied ${e}` : `Copy ${e}`,
        "data-copied": i ? "true" : "false",
        icon: i ? /* @__PURE__ */ a(bt, { className: "w-4 h-4" }) : /* @__PURE__ */ a(ft, { className: "w-4 h-4" }),
        className: v(
          "min-h-[44px] min-w-[44px] px-2.5 font-medium shadow-none disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
          i ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200" : "bg-background/70 border-border/70 text-slate-300 hover:text-white hover:bg-slate-800"
        ),
        children: i ? "Copied" : "Copy"
      }
    )
  ] })
] }), Zn = ({
  panelId: e,
  formatted: t,
  emptyMessage: n,
  maxHeightClassName: r
}) => /* @__PURE__ */ a("div", { id: e, className: "border-t border-border/60 bg-background/80 p-3 min-w-0 max-w-full", children: t.isEmpty ? /* @__PURE__ */ a("div", { className: "px-2 py-3 text-xs text-slate-400 text-center", children: n }) : /* @__PURE__ */ a(
  "pre",
  {
    className: `overflow-x-auto overflow-y-auto ${r} w-full max-w-full m-0 p-3 rounded-xl bg-background border border-border/60 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre`,
    children: t.text
  }
) }), rs = ({
  payload: e,
  title: t,
  subtitle: n,
  defaultExpanded: r = !1,
  emptyMessage: s = "No payload recorded",
  redactKeys: o = Fn,
  maxHeightClassName: l = "max-h-96",
  className: i = ""
}) => {
  const [d, c] = R(r), { copiedKey: b, copyText: p } = Et(), h = Lt(), f = Pt(() => qn(e, o), [e, o]), m = b === "payload", g = `${f.lines} ${f.lines === 1 ? "line" : "lines"}`, y = `${f.formatLabel} | ${Wn(f.bytes)} | ${g}`;
  return /* @__PURE__ */ u(
    I,
    {
      padding: "none",
      className: v("w-full min-w-0 max-w-full overflow-hidden", i),
      children: [
        /* @__PURE__ */ a(
          Kn,
          {
            title: t,
            subtitle: n,
            panelId: h,
            isExpanded: d,
            onToggle: () => c((x) => !x),
            summaryBadge: y,
            isEmpty: f.isEmpty,
            isCopied: m,
            onCopy: () => void p(f.text, "payload")
          }
        ),
        d && /* @__PURE__ */ a(
          Zn,
          {
            panelId: h,
            formatted: f,
            emptyMessage: s,
            maxHeightClassName: l
          }
        )
      ]
    }
  );
};
function ns(e = 30) {
  const t = /* @__PURE__ */ new Date(), n = /* @__PURE__ */ new Date();
  n.setDate(t.getDate() - e);
  const r = (s) => `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")}`;
  return { startDate: r(n), endDate: r(t) };
}
function as({
  period: e,
  onPeriodChange: t,
  options: n,
  customValue: r = "custom",
  startDate: s,
  endDate: o,
  onStartDateChange: l,
  onEndDateChange: i,
  variant: d = "amber",
  idPrefix: c,
  className: b = ""
}) {
  const p = O[d] || O.amber, h = q[d] || q.amber, f = e === r;
  return /* @__PURE__ */ u("div", { className: `flex flex-col gap-2 ${b}`, children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ a(
        rn,
        {
          options: n,
          value: f ? "" : e,
          onChange: t,
          variant: d,
          size: "xs",
          idPrefix: c
        }
      ),
      /* @__PURE__ */ a(
        L,
        {
          variant: f ? h : "outline",
          size: "xs",
          icon: /* @__PURE__ */ a(Vt, { className: "w-3 h-3" }),
          onClick: () => t(r),
          "data-testid": c ? `${c}-custom-btn` : void 0,
          children: "Custom"
        }
      )
    ] }),
    f && /* @__PURE__ */ u("div", { className: "flex items-center gap-2 flex-wrap text-xs", children: [
      /* @__PURE__ */ u("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ a("span", { children: "From" }),
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: s,
            max: o || void 0,
            onChange: (m) => l(m.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${p}`
          }
        )
      ] }),
      /* @__PURE__ */ u("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ a("span", { children: "To" }),
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: o,
            min: s || void 0,
            onChange: (m) => i(m.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${p}`
          }
        )
      ] })
    ] })
  ] });
}
const Yn = "flex flex-wrap items-center justify-between gap-2 p-3 px-4 rounded-xl border-blue-500/40 bg-slate-900/90 shadow-xl animate-slide-up", ss = ({
  message: e = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: n = "Later",
  onReload: r,
  onDismiss: s,
  className: o = ""
}) => /* @__PURE__ */ u(
  I,
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    padding: "none",
    className: v(Yn, o),
    children: [
      /* @__PURE__ */ a("span", { className: "text-xs sm:text-sm font-medium text-slate-100 min-w-0 flex-1", children: e }),
      /* @__PURE__ */ u("div", { className: "flex items-center gap-2 shrink-0 ml-auto", children: [
        /* @__PURE__ */ a(L, { variant: "blue", size: "sm", onClick: r, className: "rounded-lg font-semibold shadow shrink-0", children: t }),
        /* @__PURE__ */ a(
          L,
          {
            variant: "secondary",
            size: "sm",
            onClick: s,
            className: "px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-medium border-slate-700/60 shadow-none shrink-0",
            children: n
          }
        )
      ] })
    ]
  }
), Tt = 90, Xn = 250;
function Y(e) {
  const t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0, n = Math.floor(t / 60), r = t % 60;
  return `${n}:${r.toString().padStart(2, "0")}`;
}
function st(e, t = Tt) {
  return !Number.isFinite(e) || e <= 0 ? t : Math.max(1, Math.round(e));
}
function ve(e, t = Date.now()) {
  return Math.max(0, Math.ceil((e - t) / 1e3));
}
function Jn() {
  var e;
  try {
    typeof navigator < "u" && ((e = navigator.vibrate) == null || e.call(navigator, [200, 100, 200]));
  } catch {
  }
}
function Qn() {
  try {
    if (typeof window > "u") return;
    const e = window.AudioContext || window.webkitAudioContext;
    if (!e) return;
    const t = new e(), n = t.currentTime, r = t.createOscillator(), s = t.createGain();
    r.type = "sine", r.frequency.setValueAtTime(880, n), s.gain.setValueAtTime(1e-3, n), s.gain.exponentialRampToValueAtTime(0.15, n + 0.02), s.gain.exponentialRampToValueAtTime(1e-4, n + 0.35), r.connect(s), s.connect(t.destination), r.onended = () => {
      t.close().catch(() => {
      });
    }, r.start(n), r.stop(n + 0.36);
  } catch {
  }
}
function ea() {
  Jn(), Qn();
}
function os(e = Tt) {
  const t = st(e), [n, r] = R(t), [s, o] = R(0), [l, i] = R(0), [d, c] = R(!1), [b, p] = R(!1), [h, f] = R(!1), m = _(null), g = _(0), y = _(t), x = _(!1), N = _(!1), S = _(!1), E = _(!1), T = B((w) => {
    m.current = null, g.current = 0, x.current = !1, N.current = !1, S.current = !0, i(0), c(!1), p(!1), f(!0), w && !E.current && (E.current = !0, ea());
  }, []), z = B(() => {
    const w = m.current;
    if (w === null || !x.current)
      return;
    const M = ve(w);
    M <= 0 ? T(!0) : i(M);
  }, [T]);
  G(() => {
    if (!d || typeof window > "u" || typeof document > "u")
      return;
    z();
    const w = window.setInterval(z, Xn), M = () => {
      document.visibilityState === "visible" && z();
    };
    return document.addEventListener("visibilitychange", M), () => {
      window.clearInterval(w), document.removeEventListener("visibilitychange", M);
    };
  }, [d, z]);
  const F = B((w) => {
    const M = w !== void 0 ? st(w, y.current) : y.current;
    w !== void 0 && (y.current = M, r(M)), m.current = Date.now() + M * 1e3, g.current = M, x.current = !0, N.current = !1, S.current = !1, E.current = !1, o(M), i(M), c(!0), p(!1), f(!1);
  }, []), H = B(() => {
    if (!x.current || m.current === null)
      return;
    const w = ve(m.current);
    if (w <= 0) {
      T(!0);
      return;
    }
    m.current = null, g.current = w, x.current = !1, N.current = !0, S.current = !1, i(w), c(!1), p(!0), f(!1);
  }, [T]), C = B(() => {
    if (!N.current || x.current)
      return;
    const w = g.current;
    if (w <= 0) {
      T(!0);
      return;
    }
    m.current = Date.now() + w * 1e3, x.current = !0, N.current = !1, S.current = !1, i(w), c(!0), p(!1), f(!1);
  }, [T]), P = B(
    (w) => {
      if (!(!Number.isFinite(w) || w === 0)) {
        if (x.current && m.current !== null) {
          const M = m.current + w * 1e3, D = ve(M);
          if (D <= 0) {
            T(!0);
            return;
          }
          m.current = M, g.current = D, i(D), o((oe) => Math.max(oe, D));
          return;
        }
        if (N.current) {
          const M = Math.max(0, g.current + Math.round(w));
          if (M <= 0) {
            T(!0);
            return;
          }
          g.current = M, i(M), o((D) => Math.max(D, M));
          return;
        }
        if (S.current && w > 0) {
          const M = Math.max(1, Math.round(w));
          m.current = Date.now() + M * 1e3, g.current = M, x.current = !0, N.current = !1, S.current = !1, E.current = !1, i(M), o((D) => Math.max(D, M)), c(!0), p(!1), f(!1);
        }
      }
    },
    [T]
  ), j = B(() => {
    m.current = null, g.current = 0, x.current = !1, N.current = !1, S.current = !1, E.current = !1, i(0), o(0), c(!1), p(!1), f(!1);
  }, []);
  return {
    remainingSeconds: l,
    totalSeconds: s,
    isRunning: d,
    isPaused: b,
    isComplete: h,
    activePresetSeconds: n,
    startTimer: F,
    pauseTimer: H,
    resumeTimer: C,
    adjustTimer: P,
    dismissTimer: j
  };
}
const ta = [60, 90, 120, 180], ls = (e) => {
  const { remainingSeconds: t, totalSeconds: n, isRunning: r, isPaused: s, isComplete: o } = e, { presets: l = ta, variant: i = "blue", className: d = "" } = e;
  if (!r && !s && !o)
    return /* @__PURE__ */ a(ra, { presets: l, variant: i, onStart: e.onStart, className: d });
  const c = n > 0 ? n : 0, b = Math.max(0, t), p = o ? "emerald" : s ? "amber" : "gradient", h = o ? 100 : c > 0 ? c - b : 0, f = o ? 100 : c > 0 ? c : 100;
  return /* @__PURE__ */ u(
    I,
    {
      "data-testid": "rest-timer-bar",
      role: "region",
      "aria-label": "Rest timer",
      padding: "none",
      className: v("p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up", la(o, s), d),
      children: [
        /* @__PURE__ */ a(na, { ...e, safeTotal: c, clampedRemaining: b, variant: i }),
        /* @__PURE__ */ a(ge, { value: h, max: f, tone: p, variant: i, size: "sm", transition: "linear", trackClassName: "bg-background/90", label: "Rest progress" }),
        /* @__PURE__ */ a(oa, { clampedRemaining: b, totalSeconds: n, isComplete: o, presets: l, variant: i, onStart: e.onStart, onAdjust: e.onAdjust })
      ]
    }
  );
}, ra = ({ presets: e, variant: t, onStart: n, className: r }) => {
  const s = V[t] || V.blue, o = pe[t] || pe.blue;
  return /* @__PURE__ */ u(
    I,
    {
      "data-testid": "rest-timer-bar",
      padding: "none",
      className: v("bg-card/90 border-border px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2", r),
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ a("span", { className: `p-1.5 rounded-lg border shrink-0 ${o.container}`, children: /* @__PURE__ */ a(xt, { className: `w-4 h-4 ${s}` }) }),
          /* @__PURE__ */ a("span", { className: "text-xs font-semibold text-slate-200 whitespace-nowrap", children: "Rest Timer" })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 flex-wrap", children: e.map((l) => /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => n(l),
            "aria-label": `Start ${Y(l)} rest timer`,
            className: "px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95",
            children: Y(l)
          },
          l
        )) })
      ]
    }
  );
}, na = (e) => /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2", children: [
  /* @__PURE__ */ a(
    aa,
    {
      safeTotal: e.safeTotal,
      clampedRemaining: e.clampedRemaining,
      isRunning: e.isRunning,
      isPaused: e.isPaused,
      isComplete: e.isComplete,
      variant: e.variant
    }
  ),
  /* @__PURE__ */ a(
    sa,
    {
      isRunning: e.isRunning,
      isComplete: e.isComplete,
      variant: e.variant,
      onPause: e.onPause,
      onResume: e.onResume,
      onDismiss: e.onDismiss
    }
  )
] }), aa = (e) => {
  const { safeTotal: t, clampedRemaining: n, isRunning: r, isPaused: s, isComplete: o, variant: l } = e, i = V[l] || V.blue, d = ue[l] || ue.blue, c = s ? "Paused" : t > 0 ? `of ${Y(t)}` : "Rest";
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-2.5 min-w-0", children: [
    o ? /* @__PURE__ */ a(Ft, { className: "w-5 h-5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ a(xt, { className: `w-5 h-5 shrink-0 ${i} ${r ? "animate-pulse" : ""}` }),
    /* @__PURE__ */ a("div", { className: "min-w-0", children: o ? /* @__PURE__ */ u(de, { children: [
      /* @__PURE__ */ a("div", { className: "text-xs font-bold text-emerald-300 leading-snug", children: "Rest Complete - Ready for next set" }),
      /* @__PURE__ */ a("div", { "data-testid": "rest-timer-countdown", className: "text-lg font-black tabular-nums text-emerald-400 leading-tight", children: Y(n) })
    ] }) : /* @__PURE__ */ u("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ a("span", { "data-testid": "rest-timer-countdown", className: `text-2xl font-black tabular-nums tracking-tight leading-none ${s ? "text-amber-300" : d}`, children: Y(n) }),
      /* @__PURE__ */ a("span", { className: "text-xs font-medium text-slate-400 whitespace-nowrap", children: c })
    ] }) })
  ] });
}, sa = (e) => {
  const { isRunning: t, isComplete: n, variant: r, onPause: s, onResume: o, onDismiss: l } = e, i = q[r] || q.blue;
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-1.5 shrink-0", children: [
    !n && /* @__PURE__ */ a(
      L,
      {
        variant: i,
        size: "xs",
        icon: t ? /* @__PURE__ */ a(Wt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ a(Kt, { className: "w-3.5 h-3.5" }),
        onClick: t ? s : o,
        "aria-label": t ? "Pause rest timer" : "Resume rest timer",
        children: t ? "Pause" : "Resume"
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        variant: n ? "emerald" : "ghost",
        size: "xs",
        icon: /* @__PURE__ */ a(se, { className: "w-3.5 h-3.5" }),
        onClick: l,
        "aria-label": n ? "Dismiss rest timer" : "Skip rest timer",
        children: n ? "Dismiss" : "Skip"
      }
    )
  ] });
}, oa = (e) => {
  const { clampedRemaining: t, totalSeconds: n, isComplete: r, presets: s, variant: o, onStart: l, onAdjust: i } = e, d = be[o] || be.blue;
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ a(L, { variant: "secondary", size: "xs", disabled: r || t <= 0, onClick: () => i(-15), "aria-label": "Subtract 15 seconds", className: "tabular-nums", children: "-15s" }),
      /* @__PURE__ */ a(L, { variant: "secondary", size: "xs", onClick: () => i(15), "aria-label": "Add 15 seconds", className: "tabular-nums", children: "+15s" })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-1 flex-wrap", children: s.map((c) => {
      const b = !r && n === c;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => l(c),
          "aria-label": `Restart ${Y(c)} rest timer`,
          className: `px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${b ? d : "bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200"}`,
          children: Y(c)
        },
        c
      );
    }) })
  ] });
};
function la(e, t) {
  return e ? "border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20" : t ? "border-amber-500/40 bg-slate-900/95" : "border-border bg-slate-900/95";
}
const is = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: n,
  icon: r,
  className: s = "",
  testId: o = "session-expired-banner"
}) => {
  const l = (i) => {
    i && i.stopPropagation(), n ? n() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ u(
    I,
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": o,
      onClick: l,
      padding: "none",
      className: v(
        "flex items-center justify-between p-3.5 px-4 rounded-xl border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-rose-950/20 transition-all animate-slide-up",
        s
      ),
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          r ? /* @__PURE__ */ a("span", { className: "shrink-0 flex items-center", children: r }) : /* @__PURE__ */ a(Se, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ a("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ a(
          L,
          {
            variant: "rose",
            size: "sm",
            onClick: l,
            className: "rounded-lg font-semibold shadow-md shrink-0",
            children: t
          }
        )
      ]
    }
  );
}, ia = {
  default: {
    container: "bg-background/60 border-border/60",
    value: "text-slate-200",
    icon: "text-slate-400"
  },
  card: {
    container: "bg-card border-border/80",
    value: "text-slate-200",
    icon: "text-slate-400"
  },
  amber: {
    container: "bg-amber-500/5 border-amber-500/20",
    value: "text-amber-300",
    icon: "text-amber-400"
  },
  emerald: {
    container: "bg-emerald-500/5 border-emerald-500/20",
    value: "text-emerald-400",
    icon: "text-emerald-400"
  },
  sky: {
    container: "bg-sky-500/5 border-sky-500/20",
    value: "text-sky-300",
    icon: "text-sky-400"
  }
}, cs = ({
  title: e,
  value: t,
  subtitle: n,
  icon: r,
  variant: s = "default",
  className: o = "",
  onClick: l
}) => {
  const i = ia[s], d = !!l;
  return /* @__PURE__ */ u(
    I,
    {
      tone: "solid",
      padding: "none",
      onClick: l,
      className: v(
        "p-2.5 sm:p-3 rounded-xl shadow-none transition-all duration-150",
        i.container,
        d && "hover:border-border",
        o
      ),
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          r && /* @__PURE__ */ a("span", { className: `mr-1 shrink-0 ${i.icon}`, children: r }),
          /* @__PURE__ */ a("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: e })
        ] }),
        /* @__PURE__ */ a("div", { className: `text-sm sm:text-base font-bold truncate ${i.value}`, children: t }),
        n && /* @__PURE__ */ a("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: n })
      ]
    }
  );
}, ot = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, lt = {
  amber: {
    hover: "hover:border-amber-500/50 focus-visible:ring-amber-500/60",
    active: "border-amber-500/60 bg-amber-500/10 ring-1 ring-amber-500/30"
  },
  blue: {
    hover: "hover:border-blue-500/50 focus-visible:ring-blue-500/60",
    active: "border-blue-500/60 bg-blue-500/10 ring-1 ring-blue-500/30"
  },
  emerald: {
    hover: "hover:border-emerald-500/50 focus-visible:ring-emerald-500/60",
    active: "border-emerald-500/60 bg-emerald-500/10 ring-1 ring-emerald-500/30"
  },
  purple: {
    hover: "hover:border-purple-500/50 focus-visible:ring-purple-500/60",
    active: "border-purple-500/60 bg-purple-500/10 ring-1 ring-purple-500/30"
  },
  slate: {
    hover: "hover:border-slate-400/50 focus-visible:ring-slate-400/60",
    active: "border-slate-500/70 bg-slate-700/40 ring-1 ring-slate-500/30"
  },
  brand: {
    hover: "hover:border-accent/50 focus-visible:ring-accent/60",
    active: "border-accent/60 bg-accent/10 ring-1 ring-accent/30"
  }
}, ca = "min-w-0 px-2.5 py-2 rounded-xl bg-background/60 border border-border/60", da = "w-full min-h-[44px] flex flex-col items-stretch justify-center text-center cursor-pointer transition-[border-color,background-color,box-shadow,transform] hover:bg-background/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 group", ds = ({
  items: e,
  columns: t = 3,
  variant: n = "amber",
  className: r = ""
}) => {
  const s = ot[t] || ot[3];
  return /* @__PURE__ */ a("div", { className: v("grid gap-2 text-center", s, r), children: e.map((o, l) => /* @__PURE__ */ a(
    ua,
    {
      item: o,
      gridVariant: n
    },
    o.id || `${o.label}-${l}`
  )) });
}, ua = ({
  item: e,
  gridVariant: t
}) => {
  const n = typeof e.onClick == "function", r = e.variant ?? t, s = lt[r] || lt.amber;
  return n ? /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: e.onClick,
      "aria-pressed": e.active !== void 0 ? e.active : void 0,
      "aria-label": e.ariaLabel,
      "data-testid": e.testId,
      className: v(
        ca,
        da,
        s.hover,
        e.active ? s.active : ""
      ),
      children: /* @__PURE__ */ a(it, { item: e, isInteractive: !0 })
    }
  ) : /* @__PURE__ */ a(
    I,
    {
      tone: "solid",
      padding: "none",
      "data-testid": e.testId,
      className: "min-w-0 px-2.5 py-2 rounded-xl shadow-none bg-background/60 border-border/60",
      children: /* @__PURE__ */ a(it, { item: e, isInteractive: !1 })
    }
  );
}, it = ({
  item: e,
  isInteractive: t
}) => /* @__PURE__ */ u(de, { children: [
  /* @__PURE__ */ u("span", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 min-w-0", children: [
    e.icon && /* @__PURE__ */ a("span", { className: "shrink-0", children: e.icon }),
    /* @__PURE__ */ a("span", { className: "truncate", children: e.label }),
    t && /* @__PURE__ */ a(
      ke,
      {
        "aria-hidden": "true",
        className: "w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0"
      }
    )
  ] }),
  /* @__PURE__ */ a(
    "span",
    {
      className: `block text-sm font-bold mt-0.5 truncate ${e.valueClassName || "text-slate-100"}`,
      children: e.value
    }
  ),
  e.subvalue && /* @__PURE__ */ a("span", { className: "block text-[10px] text-slate-400 mt-0.5 truncate", children: e.subvalue })
] });
function ma(e, t, n) {
  const r = () => {
    const o = Date.now();
    o - t.current < e || (t.current = o, n.current());
  }, s = () => {
    document.visibilityState === "visible" && r();
  };
  return document.addEventListener("visibilitychange", s), window.addEventListener("online", r), () => {
    document.removeEventListener("visibilitychange", s), window.removeEventListener("online", r);
  };
}
function us(e, t = {}) {
  const { enabled: n = !0, minIntervalMs: r = 1e3 } = t, s = _(e), o = _(0);
  s.current = e, G(() => {
    if (!(!n || typeof window > "u" || typeof document > "u"))
      return ma(
        r,
        o,
        s
      );
  }, [n, r]);
}
function ms(e, t = 250) {
  const [n, r] = R(e);
  return G(() => {
    if (t <= 0) {
      r(e);
      return;
    }
    const s = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), n;
}
function ba(e, t, n) {
  return n ? [...e, ...t] : t;
}
function pa(e) {
  return e instanceof Error ? e.message : "Failed to load items";
}
async function fa(e, t, n) {
  var o, l;
  const r = ++e.requestSeqRef.current, s = n > 0;
  s ? e.setLoadingMore(!0) : e.setLoading(!0), e.setError(null);
  try {
    const i = await e.optionsRef.current.fetcher(t, n);
    if (r !== e.requestSeqRef.current) return;
    const d = e.optionsRef.current.mergeItems ?? ba;
    e.setTotalCount(i.totalCount), e.setItems((c) => d(c, i.items, s)), (l = (o = e.optionsRef.current).onPageLoaded) == null || l.call(o, i, t, n);
  } catch (i) {
    if (r !== e.requestSeqRef.current) return;
    s || (e.setItems([]), e.setTotalCount(0));
    const d = e.optionsRef.current.formatError ?? pa;
    e.setError(d(i, t));
  } finally {
    r === e.requestSeqRef.current && (e.setLoading(!1), e.setLoadingMore(!1));
  }
}
function bs(e) {
  const [t, n] = R([]), [r, s] = R(0), [o, l] = R(!!e.initialLoading), [i, d] = R(!1), [c, b] = R(null), p = _(0), h = _(e);
  h.current = e;
  const f = _({ loading: o, loadingMore: i, itemsLength: t.length, totalCount: r });
  f.current = { loading: o, loadingMore: i, itemsLength: t.length, totalCount: r };
  const m = B(async (N, S = 0) => {
    await fa(
      { requestSeqRef: p, optionsRef: h, setItems: n, setTotalCount: s, setLoading: l, setLoadingMore: d, setError: b },
      N,
      S
    );
  }, []), g = B(async (N, S) => {
    const E = f.current, T = S ?? E.itemsLength;
    E.loading || E.loadingMore || T >= E.totalCount || await m(N, T);
  }, [m]), y = B(
    (N, S) => {
      n(
        (E) => E.map((T) => N(T) ? typeof S == "function" ? S(T) : { ...T, ...S } : T)
      );
    },
    []
  ), x = B(() => {
    p.current += 1, n([]), s(0), l(!1), d(!1), b(null);
  }, []);
  return { items: t, setItems: n, totalCount: r, loading: o, loadingMore: i, error: c, setError: b, fetchPage: m, loadMore: g, patchItem: y, reset: x };
}
const ha = 60 * 60 * 1e3;
function ps(e = {}) {
  const {
    pollIntervalMs: t = ha,
    externalNeedRefresh: n,
    onExternalNeedRefreshChange: r,
    updateServiceWorker: s,
    registration: o
  } = e, l = _(
    o ?? void 0
  ), i = _(!1), d = _(void 0), [c, b] = R(!1), [p, h] = R(!1), [f, m] = R(null), g = n ?? c, y = B(
    (C) => {
      b(C), r == null || r(C);
    },
    [r]
  );
  G(() => {
    o && (l.current = o, o.waiting && y(!0));
  }, [o, y]);
  const x = B((C) => {
    m(C), d.current !== void 0 && typeof window < "u" && window.clearTimeout(d.current), typeof window < "u" && (d.current = window.setTimeout(() => {
      m(null);
    }, 3500));
  }, []), N = B(async () => {
    if (l.current)
      return l.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const C = await navigator.serviceWorker.getRegistration();
      if (C)
        return l.current = C, C;
    }
  }, []), S = B(
    async (C) => {
      if (await C.update(), C.waiting)
        return y(!0), !0;
      if (C.installing) {
        const P = C.installing;
        if (await new Promise((j) => {
          const w = () => {
            (P.state === "installed" || P.state === "activated" || P.state === "redundant") && (P.removeEventListener("statechange", w), j());
          };
          P.addEventListener("statechange", w);
        }), C.waiting)
          return y(!0), !0;
      }
      return !1;
    },
    [y]
  ), E = B(async () => {
    try {
      const C = await N();
      if (!C) return;
      await S(C);
    } catch {
    }
  }, [N, S]), T = B(async () => {
    h(!0), m(null);
    try {
      const C = await N();
      if (!C) {
        x("Up to date");
        return;
      }
      const P = await S(C);
      x(P ? "Update ready" : "Up to date");
    } catch {
      x("Update check failed");
    } finally {
      h(!1);
    }
  }, [N, S, x]), z = B(async () => {
    i.current = !0, await ne();
    const C = await N();
    C != null && C.waiting && C.waiting.postMessage({ type: "SKIP_WAITING" }), s ? await s(!0) : typeof window < "u" && window.location.reload();
  }, [N, s]), F = B(() => {
    y(!1);
  }, [y]), H = B(async () => {
    await Pr();
  }, []);
  return G(() => {
    if (typeof window > "u" || typeof document > "u") return;
    ne(), E();
    const C = () => {
      document.visibilityState === "visible" && E();
    };
    document.addEventListener("visibilitychange", C);
    const P = window.setInterval(() => {
      E();
    }, t);
    return () => {
      document.removeEventListener("visibilitychange", C), window.clearInterval(P), d.current !== void 0 && window.clearTimeout(d.current);
    };
  }, [E, t]), G(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let C = !1;
    const P = navigator.serviceWorker.controller !== null, j = () => {
      !i.current && !P || C || (C = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", j), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", j);
    };
  }, []), {
    needRefresh: g,
    checkingForUpdate: p,
    updateCheckMessage: f,
    checkForUpdates: T,
    applyUpdate: z,
    dismissUpdate: F,
    hardReset: H
  };
}
const ga = "/api/client-errors", xa = 25, re = /* @__PURE__ */ new Set();
let Rt = ga, ct = !1;
async function dt(e, t, n) {
  try {
    let r = "Unknown error", s, o = "Error";
    if (e instanceof Error)
      r = e.message || e.name, s = e.stack, o = e.name || "Error";
    else if (typeof e == "string")
      r = e;
    else if (e && typeof e == "object") {
      const m = e;
      r = m.message || JSON.stringify(e), s = m.stack, o = m.name || "Object";
    }
    const l = (t == null ? void 0 : t.source) || void 0, i = typeof (t == null ? void 0 : t.lineno) == "number" ? t.lineno : void 0, d = typeof (t == null ? void 0 : t.colno) == "number" ? t.colno : void 0, c = (t == null ? void 0 : t.error_type) || o, b = `${r}:${l || ""}:${i || 0}:${c}`;
    if (re.has(b))
      return;
    re.add(b);
    const p = (n == null ? void 0 : n.maxRecentErrors) ?? xa;
    if (re.size > p) {
      const m = re.values().next().value;
      m && re.delete(m);
    }
    const h = {
      message: r,
      error_type: c,
      source: l,
      lineno: i,
      colno: d,
      stack: s,
      url: typeof window < "u" ? window.location.href : void 0,
      user_agent: typeof navigator < "u" ? navigator.userAgent : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      extra: t || {}
    }, f = (n == null ? void 0 : n.endpoint) || Rt;
    typeof fetch < "u" && await fetch(f, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(h)
    }).catch(() => {
    });
  } catch {
  }
}
function fs(e) {
  e != null && e.endpoint && (Rt = e.endpoint), !(ct || typeof window > "u") && (ct = !0, window.addEventListener("error", (t) => {
    dt(
      t.error || t.message,
      {
        source: t.filename,
        lineno: t.lineno,
        colno: t.colno,
        error_type: "WindowError"
      },
      e
    );
  }), window.addEventListener("unhandledrejection", (t) => {
    dt(
      t.reason,
      {
        error_type: "UnhandledRejection"
      },
      e
    );
  }));
}
function hs(e, t = {}) {
  const {
    currency: n = "$",
    locale: r = "en-NZ",
    maximumFractionDigits: s = 0,
    minimumFractionDigits: o = 0,
    showPlusSign: l = !1
  } = t, i = Number.isFinite(e) ? e : 0, d = Math.max(o, s), c = Math.abs(i).toLocaleString(r, {
    minimumFractionDigits: o,
    maximumFractionDigits: d
  });
  return i < 0 ? `-${n}${c}` : l && i > 0 ? `+${n}${c}` : `${n}${c}`;
}
function gs(e = /* @__PURE__ */ new Date()) {
  var o, l, i;
  const t = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(e), n = ((o = t.find((d) => d.type === "year")) == null ? void 0 : o.value) ?? "1970", r = ((l = t.find((d) => d.type === "month")) == null ? void 0 : l.value) ?? "01", s = ((i = t.find((d) => d.type === "day")) == null ? void 0 : i.value) ?? "01";
  return `${n}-${r}-${s}`;
}
function xs(e = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(e);
}
class Mt extends Error {
  constructor(n = "Authentik session expired", r) {
    super(n);
    ie(this, "status");
    ie(this, "contentType");
    ie(this, "url");
    this.name = "SessionExpiredError", this.status = r == null ? void 0 : r.status, this.contentType = r == null ? void 0 : r.contentType, this.url = r == null ? void 0 : r.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function ys(e) {
  return e instanceof Mt || e instanceof Error && e.name === "SessionExpiredError";
}
function ya(e) {
  const t = e.status, n = (e.headers.get("content-type") || "").toLowerCase(), r = e.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || e.redirected || n.includes("text/html") || r.includes("/outpost.goauthentik.io/") || r.includes("/flows/executor/"));
}
function va(e) {
  if (ya(e)) {
    const t = e.headers.get("content-type") || "";
    throw new Mt(
      `Authentik session expired (status: ${e.status}, content-type: ${t})`,
      {
        status: e.status,
        contentType: t,
        url: e.url
      }
    );
  }
}
async function vs(e, t) {
  const { checkSessionExpiry: n = !0, ...r } = t || {}, s = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...r
  });
  return n && va(s), s;
}
export {
  Sa as APP_THEMES,
  Ea as APP_THEME_META,
  Fa as ActionTile,
  Ha as AiSynthesizerModal,
  zr as AlertBanner,
  Ga as AllowanceProgressBar,
  Ra as AppHeader,
  Ta as AppShell,
  Ma as BottomNav,
  Ua as BudgetProgressRow,
  L as Button,
  Aa as ChipSelector,
  Wa as CollapsibleSection,
  qa as ConfirmActionBox,
  ta as DEFAULT_REST_TIMER_PRESETS,
  Ka as DeltaBadge,
  $a as EmptyState,
  La as FileDropzone,
  Pa as FilterChipBar,
  Ba as FormField,
  I as GlassCard,
  Za as GoalProgressCard,
  Ya as InlineNotesEditor,
  Xa as KeyValueList,
  Ja as LoadMoreFooter,
  _a as LoadingState,
  Qa as MetricHero,
  Ct as Modal,
  Ia as MultiSegmentBar,
  Xr as NumberInputDisplay,
  es as NumericKeypadModal,
  za as OptionCardGroup,
  ts as PaginationBar,
  rs as PayloadViewer,
  as as PeriodFilterBar,
  ge as ProgressBar,
  ss as PwaUpdateBanner,
  Da as RangeSlider,
  ls as RestTimerBar,
  ha as SW_UPDATE_POLL_INTERVAL_MS,
  ja as SearchInput,
  Va as SectionHeader,
  rn as SegmentedControl,
  on as SelectInput,
  ln as SelectableCard,
  is as SessionExpiredBanner,
  Mt as SessionExpiredError,
  cs as StatCard,
  Te as StatusBadge,
  ds as SummaryMetricGrid,
  me as THEME_ACTION_TEXT,
  $e as THEME_ACTIVE_TAB,
  Le as THEME_BOTTOM_NAV_ACTIVE,
  Ae as THEME_BRAND_BADGE,
  q as THEME_BUTTON_VARIANT,
  pe as THEME_CALLOUT_BOX,
  Be as THEME_DROPZONE_ACTIVE,
  O as THEME_FOCUS_BORDER,
  Pe as THEME_GLOW_BG,
  fe as THEME_GOAL_GRADIENT,
  _e as THEME_RING_SELECTED,
  be as THEME_SEGMENT_ACTIVE,
  V as THEME_TEXT_COLORS,
  ue as THEME_VALUE_COLORS,
  dn as TactileKeypad,
  Oa as TagPillList,
  St as TextArea,
  xn as TextInput,
  va as assertSessionNotExpired,
  vs as authFetch,
  tn as clampProgressPercent,
  ne as clearBrowserCaches,
  zn as copyToClipboard,
  gs as formatAucklandDate,
  xs as formatAucklandTime,
  hs as formatCurrency,
  Y as formatRestTime,
  Nn as getAllowanceThresholdState,
  ns as getDefaultCustomRange,
  fs as initGlobalErrorReporter,
  ys as isSessionExpiredError,
  ya as isSessionExpiredResponse,
  Yr as normalizeSegments,
  un as normalizeTagToken,
  dt as reportClientError,
  Pr as resetClientCacheAndReload,
  Ue as resetMobileViewportZoom,
  Lr as unregisterServiceWorkers,
  us as useAppResumeRefresh,
  Et as useCopyFeedback,
  ms as useDebouncedValue,
  bs as useOffsetPagination,
  ps as usePwaUpdate,
  os as useRestTimer
};
//# sourceMappingURL=index.js.map
