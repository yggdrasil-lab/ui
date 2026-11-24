var Ge = Object.defineProperty;
var qe = (e, r, s) => r in e ? Ge(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[r] = s;
var G = (e, r, s) => qe(e, typeof r != "symbol" ? r + "" : r, s);
import { jsxs as o, jsx as t, Fragment as U } from "react/jsx-runtime";
import Pe, { forwardRef as je, createElement as te, useState as T, useRef as A, useEffect as B, useCallback as R, useId as Ze, useMemo as Je } from "react";
import { createPortal as Xe } from "react-dom";
const _ = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, Z = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, ne = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, le = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white"
}, oe = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow"
}, ie = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, de = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, ce = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, me = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30"
}, J = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm"
}, V = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500"
}, X = {
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
  }
}, Y = {
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
  }
}, z = {
  amber: "amber",
  blue: "blue",
  emerald: "emerald",
  purple: "blue",
  slate: "secondary"
}, Jt = ({
  header: e,
  bottomNav: r,
  children: s,
  className: a = ""
}) => /* @__PURE__ */ o("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  e,
  /* @__PURE__ */ t("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: s }),
  r
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ie = (...e) => e.filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qe = {
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
const et = je(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: n,
    iconNode: c,
    ...i
  }, d) => te(
    "svg",
    {
      ref: d,
      ...Qe,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: a ? Number(s) * 24 / Number(r) : s,
      className: Ie("lucide", l),
      ...i
    },
    [
      ...c.map(([m, b]) => te(m, b)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = (e, r) => {
  const s = je(
    ({ className: a, ...l }, n) => te(et, {
      ref: n,
      iconNode: r,
      className: Ie(`lucide-${Ye(e)}`, a),
      ...l
    })
  );
  return s.displayName = `${e}`, s;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = $("ArrowRightLeft", [
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
const rt = $("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = $("Calendar", [
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
const Be = $("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = $("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = $("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = $("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = $("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = $("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = $("Delete", [
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
const it = $("FileText", [
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
const ae = $("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = $("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = $("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = $("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = $("RefreshCw", [
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
const Oe = $("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = $("Sparkles", [
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
const ue = $("Target", [
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
const be = $("Timer", [
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
const se = $("TriangleAlert", [
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
const K = $("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
async function W() {
  if (typeof window > "u" || !("caches" in window) || !window.caches || typeof window.caches.keys != "function" || typeof window.caches.delete != "function")
    return 0;
  try {
    const e = await window.caches.keys();
    return (await Promise.allSettled(
      e.map((s) => window.caches.delete(s))
    )).filter(
      (s) => s.status === "fulfilled" && s.value === !0
    ).length;
  } catch {
    return 0;
  }
}
async function pt() {
  let e = 0;
  try {
    if (typeof navigator < "u" && "serviceWorker" in navigator && navigator.serviceWorker && typeof navigator.serviceWorker.getRegistrations == "function") {
      const r = await navigator.serviceWorker.getRegistrations();
      e = (await Promise.allSettled(
        r.map(
          (a) => typeof (a == null ? void 0 : a.unregister) == "function" ? a.unregister() : Promise.resolve(!1)
        )
      )).filter(
        (a) => a.status === "fulfilled" && a.value === !0
      ).length;
    }
  } catch {
    e = 0;
  }
  return await W(), e;
}
async function xt() {
  var e;
  await pt(), await W(), typeof window < "u" && typeof ((e = window.location) == null ? void 0 : e.reload) == "function" && window.location.reload();
}
const Xt = ({
  brandInitial: e,
  brandIcon: r,
  brandColor: s,
  variant: a = "blue",
  title: l,
  subtitle: n,
  tabs: c,
  activeTab: i,
  activeTabClass: d,
  onChangeTab: m,
  onRefresh: b,
  isRefreshing: u = !1,
  actions: g,
  className: p = ""
}) => {
  const x = s || le[a] || le.blue, v = d || oe[a] || oe.blue, f = _[a] || _.blue;
  return /* @__PURE__ */ t(
    "header",
    {
      className: `border-b border-border/60 bg-card/95 backdrop-blur-md sticky top-0 z-40 w-full pt-safe ${p}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ o("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-3", children: [
          (e || r) && /* @__PURE__ */ t("div", { className: `w-8 h-8 rounded-xl ${x} flex items-center justify-center font-black text-sm shadow-md`, children: r || e }),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: l }),
            n && /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: n })
          ] })
        ] }),
        c && c.length > 0 && /* @__PURE__ */ t("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: c.map((h) => {
          const w = i === h.id;
          return /* @__PURE__ */ o(
            "button",
            {
              onClick: () => m == null ? void 0 : m(h.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${w ? v : "text-slate-400 hover:text-slate-200"}`,
              children: [
                h.icon,
                /* @__PURE__ */ t("span", { children: h.label })
              ]
            },
            h.id
          );
        }) }),
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
          g,
          b && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                W(), b();
              },
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ t(
                ut,
                {
                  className: `w-3.5 h-3.5 ${u ? `animate-spin ${f}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, Yt = ({
  tabs: e,
  activeTab: r,
  onChangeTab: s,
  variant: a = "blue",
  activeTabClass: l,
  hideOnDesktop: n = !1,
  className: c = ""
}) => {
  const i = n ? "block lg:hidden" : "block", d = l || ie[a] || ie.blue;
  return /* @__PURE__ */ t(
    "nav",
    {
      className: `${i} fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${c}`,
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
      children: /* @__PURE__ */ t(
        "div",
        {
          className: "max-w-lg mx-auto grid gap-1 p-2",
          style: { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` },
          children: e.map((m) => {
            const b = r === m.id;
            return /* @__PURE__ */ o(
              "button",
              {
                onClick: () => s(m.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${b ? d : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": m.ariaLabel || m.label,
                children: [
                  /* @__PURE__ */ o("div", { className: "relative flex items-center justify-center", children: [
                    m.icon,
                    m.badgeDot && /* @__PURE__ */ t(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t("span", { className: "text-[10px] truncate max-w-full tracking-tight", children: m.label })
                ]
              },
              m.id
            );
          })
        }
      )
    }
  );
}, pe = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, xe = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, ht = ({
  variant: e = "info",
  title: r,
  children: s,
  icon: a,
  action: l,
  role: n = "alert",
  className: c = ""
}) => {
  const i = pe[e] || pe.info, d = xe[e] || xe.info;
  return /* @__PURE__ */ o(
    "div",
    {
      role: n,
      className: `rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${i} ${c}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          a && /* @__PURE__ */ t("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: a }),
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            r && /* @__PURE__ */ t("div", { className: `font-semibold mb-0.5 ${d}`, children: r }),
            s && /* @__PURE__ */ t("div", { className: "opacity-95", children: s })
          ] })
        ] }),
        l && /* @__PURE__ */ t("div", { className: "shrink-0 self-center", children: l })
      ]
    }
  );
}, ft = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, gt = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, L = Pe.forwardRef(
  ({
    children: e,
    variant: r = "secondary",
    size: s = "sm",
    icon: a,
    iconPosition: l = "left",
    loading: n = !1,
    loadingText: c,
    fullWidth: i = !1,
    disabled: d = !1,
    className: m = "",
    type: b = "button",
    ...u
  }, g) => /* @__PURE__ */ o(
    "button",
    {
      ref: g,
      type: b,
      disabled: d || n,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${ft[r]} ${gt[s]} ${i ? "w-full" : ""} ${m}`,
      ...u,
      children: [
        n ? /* @__PURE__ */ t(ae, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && l === "left" ? /* @__PURE__ */ t("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ t("span", { children: n && c ? c : e }),
        !n && a && l === "right" ? /* @__PURE__ */ t("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
L.displayName = "Button";
const he = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, Qt = ({
  options: e,
  selected: r,
  selectedValues: s = [],
  onChange: a,
  onChangeValues: l,
  multiSelect: n = !1,
  equalWidth: c = !1,
  variant: i = "amber",
  size: d = "sm",
  className: m = ""
}) => {
  const b = he[i] || he.amber, u = d === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", g = (p) => {
    if (n) {
      const x = s.includes(p) ? s.filter((v) => v !== p) : [...s, p];
      l && l(x), a && a(p);
    } else a && a(p);
  };
  return /* @__PURE__ */ t("div", { className: `flex ${c ? "w-full gap-2" : "flex-wrap gap-1.5"} ${m}`, children: e.map((p) => {
    const x = typeof p == "string" ? p : p.value, v = typeof p == "string" ? p : p.label, f = n ? s.includes(x) : r === x;
    return /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => g(x),
        className: `${u} ${c ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${f ? b : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: v
      },
      x
    );
  }) });
}, fe = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, er = ({
  title: e,
  description: r,
  icon: s,
  action: a,
  variant: l = "dashed",
  className: n = ""
}) => {
  const c = fe[l] || fe.dashed;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2 ${c} ${n}`,
      children: [
        s && /* @__PURE__ */ t("div", { className: "text-slate-400 mb-1 flex items-center justify-center", children: s }),
        /* @__PURE__ */ t("div", { className: "text-sm font-semibold text-slate-200", children: e }),
        r && /* @__PURE__ */ t("div", { className: "text-xs text-slate-400 max-w-md leading-relaxed", children: r }),
        a && /* @__PURE__ */ t("div", { className: "pt-2", children: a })
      ]
    }
  );
}, tr = ({
  file: e,
  onFileChange: r,
  acceptedFormats: s = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: l = "Supports official PDF and CSV documents",
  variant: n = "amber",
  className: c = "",
  children: i
}) => {
  const [d, m] = T(!1), b = Pe.useId(), u = (f) => {
    f.preventDefault(), f.stopPropagation(), f.type === "dragenter" || f.type === "dragover" ? m(!0) : f.type === "dragleave" && m(!1);
  }, g = (f) => {
    f.preventDefault(), f.stopPropagation(), m(!1), f.dataTransfer.files && f.dataTransfer.files[0] && r(f.dataTransfer.files[0]);
  }, p = (f) => {
    f.target.files && f.target.files[0] && r(f.target.files[0]);
  }, x = ce[n] || ce.amber, v = _[n] || _.amber;
  return /* @__PURE__ */ o(
    "div",
    {
      onDragEnter: u,
      onDragOver: u,
      onDragLeave: u,
      onDrop: g,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${d ? x : "border-border hover:border-slate-600 bg-background/50"} ${c}`,
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "file",
            accept: s,
            id: b,
            onChange: p,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ o("label", { htmlFor: b, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ t(it, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ t("div", { className: "text-xs text-slate-300 font-medium", children: e ? /* @__PURE__ */ o("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ t("span", { className: `${v} font-semibold truncate max-w-[240px]`, children: e.name }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: (f) => {
                  f.preventDefault(), f.stopPropagation(), r(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ t(K, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ t("span", { children: a.split("browse")[0] }),
            /* @__PURE__ */ t("span", { className: `${v} underline`, children: "browse" }),
            /* @__PURE__ */ t("span", { children: a.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-500", children: l })
        ] }),
        i && /* @__PURE__ */ t("div", { className: "mt-4", children: i })
      ]
    }
  );
}, rr = ({
  children: e,
  className: r = "",
  onClick: s,
  hoverGlow: a = !1
}) => /* @__PURE__ */ t(
  "div",
  {
    onClick: s,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!s ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${r}`,
    children: e
  }
), ar = ({
  label: e = "Loading...",
  variant: r = "amber",
  className: s = ""
}) => {
  const a = _[r] || _.amber;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: `flex flex-col items-center justify-center py-8 px-4 text-center space-y-2 ${s}`,
      children: [
        /* @__PURE__ */ t(ae, { className: `w-6 h-6 animate-spin ${a}` }),
        e && /* @__PURE__ */ t("span", { className: "text-xs font-medium text-slate-400", children: e })
      ]
    }
  );
}, ge = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover", yt = "width=device-width, initial-scale=1.0, viewport-fit=cover";
function ye() {
  if (typeof document > "u" || typeof window > "u")
    return;
  const e = document.activeElement;
  typeof HTMLElement < "u" && e instanceof HTMLElement && e.blur();
  const r = document.querySelector('meta[name="viewport"]');
  r && ((r.getAttribute("content") ?? "") === ge && r.setAttribute("content", yt), r.setAttribute("content", ge)), window.scrollTo({ left: 0, top: window.scrollY });
}
const Fe = ({
  isOpen: e,
  onClose: r,
  title: s,
  subtitle: a,
  headerIcon: l,
  disableClose: n = !1,
  children: c,
  className: i = ""
}) => {
  const d = A(!1);
  if (B(() => (e ? (d.current = !0, document.body.style.overflow = "hidden") : (document.body.style.overflow = "", d.current && (d.current = !1, ye())), () => {
    document.body.style.overflow = "";
  }), [e]), B(() => () => {
    d.current && (d.current = !1, ye());
  }, []), B(() => {
    if (!e) return;
    const b = (u) => {
      u.key === "Escape" && !n && r();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [e, r, n]), !e) return null;
  const m = /* @__PURE__ */ t(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (b) => {
        b.target === b.currentTarget && !n && r();
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          className: `modal-card modal-content w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe ${i}`,
          children: [
            /* @__PURE__ */ o("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
              s ? /* @__PURE__ */ o("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                  l && /* @__PURE__ */ t("span", { className: "text-lg leading-none", children: l }),
                  /* @__PURE__ */ t("h2", { className: "text-base font-bold text-slate-100 m-0", children: s })
                ] }),
                a && /* @__PURE__ */ t("p", { className: "text-xs text-sky-400 m-0", children: a })
              ] }) : /* @__PURE__ */ t("div", {}),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: r,
                  disabled: n,
                  className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors disabled:opacity-50",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ t(K, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: c })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? Xe(m, document.body) : m;
};
function vt(e) {
  const r = e.map((a) => ({
    ...a,
    value: Math.max(0, Number(a.value) || 0)
  })), s = r.reduce((a, l) => a + l.value, 0);
  return s <= 0 ? [] : r.map((a) => ({
    ...a,
    widthPct: a.value / s * 100
  }));
}
const sr = ({
  segments: e,
  showLegend: r = !0,
  heightClass: s = "h-2.5",
  className: a = ""
}) => {
  const l = vt(e);
  return l.length === 0 ? null : /* @__PURE__ */ o("div", { className: `space-y-1.5 ${a}`, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `w-full ${s} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`,
        children: l.map((n) => {
          if (n.widthPct <= 0) return null;
          const c = n.valueLabel || `${Math.round(n.widthPct)}%`;
          return /* @__PURE__ */ t(
            "div",
            {
              style: { width: `${n.widthPct}%` },
              className: `h-full ${n.barColor} transition-all duration-500`,
              title: `${n.label}: ${c}`
            },
            n.id
          );
        })
      }
    ),
    r && /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300", children: l.map((n) => {
      const c = n.minVisiblePct ?? 0.5;
      if (n.widthPct < c) return null;
      const i = n.dotColor || n.barColor, d = n.textColor || "text-slate-200", m = n.valueLabel || `${Math.round(n.widthPct)}%`;
      return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1 font-medium", children: [
        /* @__PURE__ */ t("span", { className: `w-2 h-2 rounded-full shrink-0 ${i}` }),
        /* @__PURE__ */ t("span", { className: d, children: n.label }),
        /* @__PURE__ */ t("span", { className: "text-slate-400", children: m })
      ] }, n.id);
    }) })
  ] });
}, wt = ({
  label: e,
  value: r,
  unit: s,
  variant: a = "blue",
  valueColor: l,
  className: n = ""
}) => {
  const c = l || Z[a] || Z.blue;
  return /* @__PURE__ */ o("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ t("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ o("div", { className: `text-4xl font-black ${c} tracking-tight`, children: [
      r || "0",
      s && /* @__PURE__ */ t("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: s })
    ] })
  ] });
}, ve = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function nr({
  label: e,
  options: r,
  value: s,
  onChange: a,
  className: l = ""
}) {
  return /* @__PURE__ */ o("div", { className: `space-y-2 ${l}`, children: [
    e && /* @__PURE__ */ t("label", { className: "block font-semibold text-sm text-slate-200", children: e }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: r.map((n) => {
      const c = s === n.value, i = n.accent || "blue", d = ve[i] || ve.blue;
      return /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: () => a(n.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${c ? d : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            n.icon && /* @__PURE__ */ t("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: n.icon }),
            /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ t("div", { className: `font-semibold text-sm ${c ? "text-slate-100" : "text-slate-300"}`, children: n.label }),
              n.description && /* @__PURE__ */ t("div", { className: "text-xs text-slate-400 mt-0.5 leading-snug", children: n.description })
            ] })
          ]
        },
        n.value
      );
    }) })
  ] });
}
const we = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, lr = ({
  label: e,
  valueDisplay: r,
  valueClassName: s = "text-slate-200",
  min: a,
  max: l,
  step: n = 1,
  value: c,
  onChange: i,
  minLabel: d,
  midLabel: m,
  maxLabel: b,
  variant: u = "amber",
  className: g = ""
}) => {
  const p = we[u] || we.amber;
  return /* @__PURE__ */ o("div", { className: `space-y-1 ${g}`, children: [
    /* @__PURE__ */ o("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ t("span", { className: "text-slate-400", children: e }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${s}`, children: r })
    ] }),
    /* @__PURE__ */ t(
      "input",
      {
        type: "range",
        min: a,
        max: l,
        step: n,
        value: c,
        onChange: (x) => i(Number(x.target.value)),
        className: `w-full ${p} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (d || m || b) && /* @__PURE__ */ o("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ t("span", { children: d }),
      /* @__PURE__ */ t("span", { children: m }),
      /* @__PURE__ */ t("span", { children: b })
    ] })
  ] });
}, or = ({
  value: e,
  onChange: r,
  placeholder: s = "Search...",
  variant: a = "amber",
  rightSlot: l,
  className: n = "",
  "data-testid": c
}) => {
  const i = V[a] || V.amber;
  return /* @__PURE__ */ o("div", { className: `flex items-center gap-2 ${n}`, children: [
    /* @__PURE__ */ o("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ t(Oe, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ t(
        "input",
        {
          type: "text",
          value: e,
          onChange: (d) => r(d.target.value),
          placeholder: s,
          "data-testid": c,
          className: `w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-base sm:text-xs text-slate-200 placeholder-slate-500 focus:outline-none ${i} transition-colors`
        }
      ),
      e.length > 0 && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: () => r(""),
          "aria-label": "Clear search",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors",
          children: /* @__PURE__ */ t(K, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    l && /* @__PURE__ */ t("div", { className: "shrink-0", children: l })
  ] });
}, Ne = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20"
}, ir = ({
  title: e,
  subtitle: r,
  icon: s,
  variant: a = "amber",
  actions: l,
  titleAs: n = "h3",
  uppercaseTitle: c = !1,
  size: i = "sm",
  className: d = ""
}) => {
  const m = Ne[a] || Ne.amber, b = n, u = i === "md" ? `text-base font-bold text-slate-100 ${c ? "tracking-wide uppercase" : ""}` : `text-sm font-semibold text-slate-200 ${c ? "tracking-wide uppercase" : ""}`, g = i === "md" ? "p-2.5 rounded-xl border" : "p-1.5 rounded-lg border";
  return /* @__PURE__ */ o("div", { className: `flex flex-wrap items-center justify-between gap-3 ${d}`, children: [
    /* @__PURE__ */ o("div", { className: "flex items-center space-x-2.5 min-w-[200px] flex-1", children: [
      s && /* @__PURE__ */ t("div", { className: `${g} shrink-0 ${m}`, children: s }),
      /* @__PURE__ */ o("div", { className: "min-w-0", children: [
        /* @__PURE__ */ t(b, { className: u, children: e }),
        r && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400", children: r })
      ] })
    ] }),
    l && /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-2 max-w-full", children: l })
  ] });
}, ke = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function Nt({
  options: e,
  value: r,
  onChange: s,
  variant: a = "amber",
  size: l = "xs",
  fullWidth: n = !1,
  className: c = "",
  idPrefix: i = "segmented"
}) {
  const d = J[a] || J.amber, m = ke[l] || ke.xs;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "tablist",
      className: `inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${n ? "w-full grid" : ""} ${c}`,
      style: n ? { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` } : void 0,
      children: e.map((b) => {
        const u = r === b.id;
        return /* @__PURE__ */ o(
          "button",
          {
            role: "tab",
            "aria-selected": u,
            type: "button",
            "data-testid": `${i}-${b.id}`,
            onClick: () => s(b.id),
            className: `font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${m} ${u ? `${d} font-semibold` : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
            children: [
              b.icon && /* @__PURE__ */ t("span", { className: "shrink-0", children: b.icon }),
              /* @__PURE__ */ t("span", { children: b.label }),
              b.badge !== void 0 && /* @__PURE__ */ t("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: b.badge })
            ]
          },
          b.id
        );
      })
    }
  );
}
const dr = ({
  title: e,
  subtitle: r,
  value: s,
  valueSuffix: a,
  subvalue: l,
  subvalueTrend: n = "neutral",
  badge: c,
  icon: i,
  isSelected: d = !1,
  onClick: m,
  variant: b = "amber",
  className: u = "",
  "data-testid": g
}) => {
  const p = me[b] || me.amber, x = n === "positive" ? "text-emerald-400" : n === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      "data-testid": g,
      onClick: m,
      className: `text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${d ? p : "bg-background/60 border-border/60 hover:border-slate-700"} ${u}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ o("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            i && /* @__PURE__ */ t("span", { className: "shrink-0", children: i }),
            /* @__PURE__ */ t("span", { className: "truncate", children: e })
          ] }),
          c && /* @__PURE__ */ t("div", { className: "shrink-0", children: c })
        ] }),
        s !== void 0 && /* @__PURE__ */ o("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          s,
          a && /* @__PURE__ */ t("span", { className: "text-xs font-normal text-slate-400 ml-1", children: a })
        ] }),
        (r || l) && /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          r && /* @__PURE__ */ t("span", { className: "truncate", children: r }),
          l && /* @__PURE__ */ t("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${x}`, children: l })
        ] })
      ]
    }
  );
}, $e = {
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
  }
}, cr = ({
  label: e,
  variant: r = "idle",
  icon: s,
  isPulsing: a = !1,
  className: l = ""
}) => {
  const n = $e[r] || $e.idle;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${n.bg} ${l}`,
      children: [
        s ? /* @__PURE__ */ t("span", { className: "mr-1.5 shrink-0 flex items-center", children: s }) : /* @__PURE__ */ t("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${n.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ t("span", { className: "truncate", children: e })
      ]
    }
  );
}, kt = ({
  value: e,
  onChange: r,
  onClear: s,
  maxDecimalPlaces: a = 2,
  variant: l = "blue",
  actionColor: n,
  allowDecimals: c = !0,
  className: i = ""
}) => {
  const d = (p) => {
    if (p === ".") {
      if (!c || e.includes(".")) return;
      r(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const x = e.split(".");
      if (x[1] && x[1].length >= a) return;
    }
    r(e === "0" ? p : e + p);
  }, m = () => {
    e.length <= 1 ? r("") : r(e.slice(0, -1));
  }, b = () => {
    s ? s() : r("");
  }, u = n || ne[l] || ne.blue, g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", c ? "." : "", "0"];
  return /* @__PURE__ */ o("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${i}`, children: [
    g.map((p, x) => p ? /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => d(p),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: p
      },
      p
    ) : /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${u} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${x}`
    )),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: m,
        onDoubleClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${u} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ t(ot, { className: "w-5 h-5" })
      }
    )
  ] });
}, Ce = {
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    removeBtn: "text-amber-400/70 hover:text-amber-200"
  },
  slate: {
    pill: "bg-slate-800 text-slate-300 border border-slate-700/80",
    removeBtn: "opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-400"
  }
};
function $t(e) {
  return e.trim().toLowerCase().replace(/^#+/, "").replace(/\s+/g, "-");
}
const mr = ({
  tags: e,
  onAddTag: r,
  onRemoveTag: s,
  disabled: a = !1,
  placeholder: l = "add tag...",
  variant: n = "amber",
  addButtonLabel: c = "tag",
  addButtonTestId: i,
  inputTestId: d,
  className: m = ""
}) => {
  const [b, u] = T(!1), [g, p] = T("");
  if (e.length === 0 && !r)
    return null;
  const x = Ce[n] || Ce.amber, v = () => {
    const h = $t(g);
    p(""), u(!1), h && !e.includes(h) && r && r(h);
  }, f = () => {
    p(""), u(!1);
  };
  return /* @__PURE__ */ o("div", { className: `flex items-center flex-wrap gap-1 ${m}`, children: [
    e.map((h) => /* @__PURE__ */ o(
      "span",
      {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${x.pill}`,
        children: [
          /* @__PURE__ */ o("span", { children: [
            "#",
            h
          ] }),
          s && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => void s(h),
              disabled: a,
              "aria-label": `Remove tag ${h}`,
              title: `Remove tag #${h}`,
              className: `transition-colors ${x.removeBtn}`,
              children: /* @__PURE__ */ t(K, { className: "w-2.5 h-2.5" })
            }
          )
        ]
      },
      h
    )),
    r && !b && /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: () => {
          p(""), u(!0);
        },
        disabled: a,
        "data-testid": i,
        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-border/70 text-[10px] transition-colors",
        children: [
          /* @__PURE__ */ t(mt, { className: "w-2.5 h-2.5" }),
          /* @__PURE__ */ t("span", { children: c })
        ]
      }
    ),
    r && b && /* @__PURE__ */ t(
      "form",
      {
        onSubmit: (h) => {
          h.preventDefault(), v();
        },
        className: "inline-flex items-center gap-1",
        children: /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            value: g,
            onChange: (h) => p(h.target.value),
            onBlur: v,
            onKeyDown: (h) => {
              h.key === "Escape" && (h.preventDefault(), f());
            },
            placeholder: l,
            autoFocus: !0,
            "data-testid": d,
            className: "w-28 sm:w-24 px-1.5 py-0.5 text-base sm:text-[10px] rounded bg-background border border-amber-500/50 text-slate-200 focus:outline-none"
          }
        )
      }
    )
  ] });
}, ur = ({
  isOpen: e,
  onClose: r,
  title: s,
  subtitle: a = "Sports Physiology & Circadian Research Grounding",
  headerIcon: l = "🧠",
  citationTitle: n,
  citationIcon: c = "📚",
  pillars: i = [],
  inputLabel: d = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: m = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: b = 3,
  submitLabel: u = "Synthesize with AI",
  submittingLabel: g = "Synthesizing...",
  errorFallbackMessage: p = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: x = "blue",
  onSynthesize: v
}) => {
  const [f, h] = T(""), [w, M] = T(!1), [C, S] = T(null), D = async () => {
    M(!0), S(null);
    try {
      await v(f.trim() || void 0), h(""), r();
    } catch {
      S(p);
    } finally {
      M(!1);
    }
  }, P = X[x] || X.blue, O = V[x] || V.blue, y = z[x] || z.blue;
  return /* @__PURE__ */ t(
    Fe,
    {
      isOpen: e,
      onClose: r,
      title: s,
      subtitle: a,
      headerIcon: l,
      disableClose: w,
      children: /* @__PURE__ */ o("div", { className: "space-y-4", children: [
        (n || i.length > 0) && /* @__PURE__ */ o("div", { className: `rounded-xl border p-3 text-xs ${P.container}`, children: [
          n && /* @__PURE__ */ o("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${P.header}`, children: [
            /* @__PURE__ */ t("span", { children: c }),
            /* @__PURE__ */ t("span", { children: n })
          ] }),
          i.length > 0 && /* @__PURE__ */ t("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: i.map((E, j) => /* @__PURE__ */ o("li", { children: [
            /* @__PURE__ */ o("strong", { className: "text-slate-100", children: [
              E.label,
              ":"
            ] }),
            " ",
            E.description
          ] }, j)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ t("label", { className: "block text-xs font-semibold text-slate-200", children: d }),
          /* @__PURE__ */ t(
            "textarea",
            {
              rows: b,
              value: f,
              onChange: (E) => h(E.target.value),
              disabled: w,
              placeholder: m,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-base sm:text-xs placeholder-slate-500 focus:outline-none ${O} resize-y`
            }
          )
        ] }),
        C && /* @__PURE__ */ t("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: C }),
        /* @__PURE__ */ o("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ t(
            L,
            {
              variant: "secondary",
              size: "md",
              onClick: r,
              disabled: w,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ t(
            L,
            {
              variant: y,
              size: "md",
              loading: w,
              loadingText: g,
              icon: /* @__PURE__ */ t("span", { children: "⚡" }),
              onClick: D,
              children: u
            }
          )
        ] })
      ] })
    }
  );
};
function Ct(e, r) {
  const s = r > 0 ? r : 1, a = Math.min(100, Math.max(0, Math.round(e / s * 100))), l = Math.max(0, r - e);
  return a > 90 ? {
    percent: a,
    remaining: l,
    barColor: "bg-rose-500",
    percentTextColor: "text-rose-400 font-semibold"
  } : a > 70 ? {
    percent: a,
    remaining: l,
    barColor: "bg-amber-400",
    percentTextColor: "text-amber-400 font-semibold"
  } : {
    percent: a,
    remaining: l,
    barColor: "bg-emerald-400",
    percentTextColor: "text-slate-400 font-medium"
  };
}
const br = ({
  title: e,
  subtitle: r,
  icon: s,
  currentValue: a,
  targetValue: l,
  currencyPrefix: n = "$",
  currencySuffix: c = "NZD",
  deltaBadge: i,
  action: d,
  className: m = ""
}) => {
  const { percent: b, remaining: u, barColor: g, percentTextColor: p } = Ct(
    a,
    l
  );
  return /* @__PURE__ */ o("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${m}`, children: [
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
        s && /* @__PURE__ */ t("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: s }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("h3", { className: "text-sm font-semibold text-slate-200", children: e }),
          r && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400", children: r })
        ] })
      ] }),
      d && /* @__PURE__ */ t("div", { children: d })
    ] }),
    /* @__PURE__ */ o("div", { className: "space-y-1.5 my-3", children: [
      /* @__PURE__ */ o("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ o("span", { className: "text-slate-400", children: [
          "Spent ",
          /* @__PURE__ */ o("strong", { className: "text-slate-200", children: [
            n,
            Math.round(a).toLocaleString("en-NZ")
          ] }),
          " of ",
          n,
          Math.round(l).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ o("span", { className: p, children: [
          b,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ t(
        "div",
        {
          className: `h-full transition-all duration-500 rounded-full ${g}`,
          style: { width: `${b}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between pt-2 border-t border-border/50 text-xs", children: [
      /* @__PURE__ */ o("span", { className: "text-slate-400", children: [
        "Remaining allowance: ",
        /* @__PURE__ */ o("strong", { className: "text-slate-200", children: [
          n,
          Math.round(u).toLocaleString("en-NZ"),
          " ",
          c
        ] })
      ] }),
      i && /* @__PURE__ */ o(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${i.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ t(rt, { className: `w-3.5 h-3.5 mr-1 ${i.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ t("span", { children: i.label })
          ]
        }
      )
    ] })
  ] });
}, Ee = {
  normal: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500"
}, pr = ({
  category: e,
  icon: r,
  spendFormatted: s,
  transactionCount: a,
  transactionCountLabel: l,
  percentage: n = 0,
  budgetSummaryLabel: c,
  remainingOrOverFormatted: i,
  percentUsed: d,
  isOverBudget: m = !1,
  warningLevel: b = "normal",
  isTransfer: u = !1,
  transferNote: g = "Internal transfers between accounts - Excluded from spend",
  onRowClick: p,
  onEditTargetClick: x,
  "data-testid": v
}) => {
  const f = !u && !!c, h = Math.min(Math.max(d ?? 0, 0), 100), w = Ee[b] || Ee.normal;
  return /* @__PURE__ */ o(
    "div",
    {
      "data-testid": v,
      onClick: p,
      title: `Click to inspect transactions in ${e}`,
      className: "p-3 bg-card/40 hover:bg-card/70 rounded-xl border border-border hover:border-slate-600 transition-all cursor-pointer space-y-1.5 group",
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs gap-2", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center space-x-2 min-w-0", children: [
            r && /* @__PURE__ */ t("div", { className: "p-1 rounded bg-background border border-border shrink-0", children: r }),
            /* @__PURE__ */ t("span", { className: "font-medium text-slate-200 group-hover:text-amber-300 transition-colors truncate", children: e }),
            /* @__PURE__ */ o("span", { className: "text-[10px] text-slate-500 font-mono shrink-0", children: [
              l ?? `${a} ${a === 1 ? "txn" : "txns"}`,
              !u && ` (${Math.round(n)}%)`
            ] })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center space-x-2 shrink-0", children: [
            /* @__PURE__ */ t("span", { className: `font-semibold font-mono ${u ? "text-sky-300" : "text-slate-100"}`, children: s }),
            /* @__PURE__ */ t("div", { className: "p-1 rounded bg-card/80 text-slate-400 group-hover:text-slate-200 border border-transparent group-hover:border-border transition-colors", children: /* @__PURE__ */ t(Oe, { className: "w-3 h-3" }) })
          ] })
        ] }),
        u ? /* @__PURE__ */ o("div", { className: "flex justify-between items-center text-[10px] text-sky-400/90 pt-0.5", children: [
          /* @__PURE__ */ o("span", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ t(tt, { className: "w-2.5 h-2.5 shrink-0" }),
            /* @__PURE__ */ t("span", { children: g })
          ] }),
          /* @__PURE__ */ t("span", { className: "text-slate-400 hover:text-slate-200 shrink-0", children: "Inspect txns" })
        ] }) : f ? /* @__PURE__ */ o("div", { className: "space-y-1", children: [
          /* @__PURE__ */ t("div", { className: "w-full bg-background rounded-full h-2 overflow-hidden border border-border", children: /* @__PURE__ */ t(
            "div",
            {
              className: `h-full rounded-full transition-all duration-500 ${w}`,
              style: { width: `${h}%` }
            }
          ) }),
          /* @__PURE__ */ o("div", { className: "flex justify-between items-center text-[10px] text-slate-400 font-mono", children: [
            /* @__PURE__ */ t("span", { children: c }),
            /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
              i && (m ? /* @__PURE__ */ o("span", { className: "text-rose-400 font-semibold flex items-center space-x-1", children: [
                /* @__PURE__ */ t(se, { className: "w-3 h-3" }),
                /* @__PURE__ */ t("span", { children: i })
              ] }) : /* @__PURE__ */ t("span", { className: "text-emerald-400", children: i })),
              x && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: x,
                  title: "Edit budget target",
                  className: "text-slate-500 hover:text-amber-400 p-0.5",
                  children: /* @__PURE__ */ t(ue, { className: "w-2.5 h-2.5" })
                }
              )
            ] })
          ] })
        ] }) : /* @__PURE__ */ o("div", { className: "flex justify-between items-center text-[10px] text-slate-500 pt-0.5", children: [
          /* @__PURE__ */ t("span", { children: "No target budget configured" }),
          x && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: x,
              className: "text-amber-400/80 hover:text-amber-300 flex items-center space-x-0.5",
              children: [
                /* @__PURE__ */ t(ue, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ t("span", { children: "Set target" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, xr = ({
  title: e,
  icon: r,
  defaultOpen: s = !1,
  variant: a = "inline",
  expandLabel: l = "▼ Expand",
  collapseLabel: n = "▲ Hide",
  children: c,
  className: i = ""
}) => {
  const [d, m] = T(s);
  return a === "card" ? /* @__PURE__ */ o("div", { className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg ${i}`, children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: () => m((b) => !b),
        className: "w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer",
        children: [
          /* @__PURE__ */ o("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2", children: [
            r && /* @__PURE__ */ t("span", { children: r }),
            /* @__PURE__ */ t("span", { children: e })
          ] }),
          /* @__PURE__ */ t("span", { className: "text-xs text-slate-400", children: d ? n : l })
        ]
      }
    ),
    d && /* @__PURE__ */ t("div", { className: "mt-3 pt-3 border-t border-border/60", children: c })
  ] }) : /* @__PURE__ */ o("div", { className: `pt-2 border-t border-border/40 ${i}`, children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: () => m((b) => !b),
        className: "bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          r && /* @__PURE__ */ t("span", { children: r }),
          /* @__PURE__ */ t("span", { className: "underline", children: e }),
          /* @__PURE__ */ t("span", { className: "text-[10px]", children: d ? "▲" : "▼" })
        ]
      }
    ),
    d && /* @__PURE__ */ t("div", { className: "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1", children: c })
  ] });
}, Se = {
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
}, hr = ({
  title: e,
  description: r,
  confirmLabel: s = "Confirm",
  cancelLabel: a = "Cancel",
  onConfirm: l,
  onCancel: n,
  loading: c = !1,
  variant: i = "danger",
  className: d = ""
}) => {
  const m = Se[i] || Se.danger;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${m.container} ${d}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ t(se, { className: `w-4 h-4 shrink-0 mt-0.5 ${m.icon}` }),
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t("div", { className: `text-xs font-semibold ${m.title}`, children: e }),
            r && /* @__PURE__ */ t("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: r })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ t(
            L,
            {
              variant: "secondary",
              size: "xs",
              onClick: n,
              disabled: c,
              children: a
            }
          ),
          /* @__PURE__ */ t(
            L,
            {
              variant: m.confirmVariant,
              size: "xs",
              loading: c,
              onClick: l,
              children: s
            }
          )
        ] })
      ]
    }
  );
}, fr = ({
  eyebrow: e,
  currentValueLabel: r,
  deltaLabel: s,
  deltaPositive: a = !0,
  milestoneLabel: l = "Next Milestone",
  milestoneValue: n,
  progressPercent: c,
  startLabel: i,
  centerLabel: d,
  targetLabel: m,
  variant: b = "blue",
  className: u = ""
}) => {
  const g = Math.min(100, Math.max(0, Math.round(c))), p = Y[b] || Y.blue;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `glass-panel bg-card/80 backdrop-blur-md border border-blue-500/25 rounded-2xl p-5 shadow-lg animate-slide-up ${u}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t("span", { className: `text-xs font-bold uppercase tracking-wider ${p.eyebrow}`, children: e }),
            /* @__PURE__ */ o("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ t("span", { children: r }),
              s && /* @__PURE__ */ t(
                "span",
                {
                  className: `text-sm font-semibold ${a ? "text-emerald-400" : "text-rose-400"}`,
                  children: s
                }
              )
            ] })
          ] }),
          n && /* @__PURE__ */ o("div", { className: "text-right", children: [
            /* @__PURE__ */ t("div", { className: "text-xs text-slate-400", children: l }),
            /* @__PURE__ */ t("div", { className: "text-lg font-bold text-purple-400", children: n })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "h-2.5 w-full bg-background/80 rounded-full overflow-hidden my-3 border border-border/50", children: /* @__PURE__ */ t(
          "div",
          {
            className: `h-full bg-gradient-to-r ${p.bar} rounded-full transition-all duration-500`,
            style: { width: `${g}%` }
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ t("span", { children: i }),
          d && /* @__PURE__ */ t("span", { children: d }),
          /* @__PURE__ */ t("span", { children: m })
        ] })
      ]
    }
  );
};
async function Et(e) {
  var s;
  if (!e)
    return !1;
  try {
    if (typeof navigator < "u" && ((s = navigator.clipboard) != null && s.writeText))
      return await navigator.clipboard.writeText(e), !0;
  } catch {
  }
  if (typeof document > "u")
    return !1;
  const r = document.createElement("textarea");
  r.value = e, r.setAttribute("readonly", ""), r.style.position = "fixed", r.style.top = "-9999px", r.style.left = "-9999px", r.style.opacity = "0", document.body.appendChild(r);
  try {
    return r.focus(), r.select(), r.setSelectionRange(0, r.value.length), document.execCommand("copy");
  } catch {
    return !1;
  } finally {
    document.body.removeChild(r);
  }
}
function Ve(e = 2e3) {
  const [r, s] = T(null), a = A(null);
  B(() => () => {
    a.current !== null && clearTimeout(a.current);
  }, []);
  const l = R(
    async (n, c = "default") => await Et(n) ? (s(c), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
      s(null), a.current = null;
    }, e), !0) : !1,
    [e]
  );
  return { copiedKey: r, copyText: l };
}
const Te = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2"
}, gr = ({
  items: e,
  columns: r = 1,
  emptyMessage: s = "No metadata available",
  className: a = ""
}) => {
  const { copiedKey: l, copyText: n } = Ve();
  if (e.length === 0)
    return /* @__PURE__ */ t(
      "div",
      {
        className: `rounded-2xl border-2 border-dashed border-border/80 bg-background/40 px-4 py-6 text-center text-xs text-slate-400 ${a}`,
        children: s
      }
    );
  const c = Te[r] || Te[1];
  return /* @__PURE__ */ t("dl", { className: `grid ${c} gap-2.5 m-0 ${a}`, children: e.map((i, d) => {
    const m = i.id || `${i.label}-${d}`, b = typeof i.copyValue == "string" && i.copyValue.length > 0, u = l === m, g = i.value === null || i.value === void 0 || i.value === "";
    return /* @__PURE__ */ o(
      "div",
      {
        className: "rounded-xl bg-background/60 border border-border/60 px-3 py-2.5 flex items-start justify-between gap-2.5 min-w-0",
        children: [
          /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ t("dt", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-medium truncate", children: i.label }),
            /* @__PURE__ */ t(
              "dd",
              {
                className: `m-0 mt-1 text-sm sm:text-xs text-slate-100 min-w-0 ${i.mono ? "font-mono break-all" : "break-words"}`,
                children: g ? /* @__PURE__ */ t("span", { className: "text-slate-500", children: "-" }) : i.value
              }
            )
          ] }),
          b && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => void n(i.copyValue, m),
              "aria-label": u ? `Copied ${i.label}` : `Copy ${i.label}`,
              title: u ? "Copied" : `Copy ${i.label}`,
              "data-copied": u ? "true" : "false",
              className: `min-w-[44px] min-h-[44px] shrink-0 inline-flex items-center justify-center rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${u ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-card/80 border-border/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800"}`,
              children: u ? /* @__PURE__ */ t(Be, { className: "w-4 h-4" }) : /* @__PURE__ */ t(ze, { className: "w-4 h-4" })
            }
          )
        ]
      },
      m
    );
  }) });
}, yr = ({
  title: e,
  primaryValue: r,
  primaryUnit: s,
  secondaryValue: a,
  secondaryUnit: l,
  toggleHint: n,
  badge: c,
  variant: i = "blue",
  unitColor: d,
  glowColor: m,
  children: b,
  className: u = ""
}) => {
  const [g, p] = T(!1), x = (w = "blue") => {
    switch (w) {
      case "emerald":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "sky":
        return "bg-sky-500/20 text-sky-300 border-sky-500/40";
      case "rose":
        return "bg-rose-500/20 text-rose-300 border-rose-500/40";
      case "amber":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
    }
  }, v = a !== void 0 && l !== void 0, f = d || _[i] || _.blue, h = m || de[i] || de.blue;
  return /* @__PURE__ */ o("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${u}`, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${h} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ t("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      c && /* @__PURE__ */ o("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${x(c.variant)}`, children: [
        c.icon || /* @__PURE__ */ t(bt, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ t("span", { children: c.label })
      ] })
    ] }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `text-center my-6 ${v ? "cursor-pointer select-none" : ""}`,
        onClick: () => v && p(!g),
        children: [
          /* @__PURE__ */ o("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            g ? a : r,
            /* @__PURE__ */ t("span", { className: `text-2xl font-semibold ${f} ml-2`, children: g ? l : s })
          ] }),
          n && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    b
  ] });
}, vr = ({
  isOpen: e,
  onClose: r,
  title: s,
  subtitle: a,
  displayLabel: l,
  value: n,
  displayValue: c,
  unit: i,
  onChange: d,
  onSubmit: m,
  submitLabel: b = "Apply",
  loading: u = !1,
  loadingText: g = "Saving...",
  submitDisabled: p = !1,
  allowDecimals: x = !0,
  maxDecimalPlaces: v = 2,
  variant: f = "blue",
  error: h,
  children: w
}) => {
  const M = z[f] || z.blue;
  return /* @__PURE__ */ t(
    Fe,
    {
      isOpen: e,
      onClose: r,
      title: s,
      subtitle: a,
      disableClose: u,
      children: /* @__PURE__ */ o("div", { className: "space-y-4", children: [
        h && /* @__PURE__ */ t(ht, { variant: "error", icon: "⚠️", children: h }),
        /* @__PURE__ */ t(
          wt,
          {
            label: l,
            value: c !== void 0 ? c : n || "0",
            unit: i,
            variant: f
          }
        ),
        w,
        /* @__PURE__ */ t(
          kt,
          {
            value: n,
            onChange: d,
            allowDecimals: x,
            maxDecimalPlaces: v,
            variant: f
          }
        ),
        /* @__PURE__ */ t(
          L,
          {
            variant: M,
            size: "lg",
            fullWidth: !0,
            loading: u,
            loadingText: g,
            disabled: p,
            onClick: m,
            children: b
          }
        )
      ] })
    }
  );
}, wr = ({
  page: e,
  pageSize: r,
  totalItems: s,
  onPageChange: a,
  loading: l = !1,
  itemLabel: n,
  className: c = ""
}) => {
  const i = Number.isFinite(r) && r > 0 ? Math.floor(r) : 1, d = Number.isFinite(s) && s > 0 ? Math.floor(s) : 0, m = Math.max(1, Math.ceil(d / i)), b = Number.isFinite(e) ? Math.floor(e) : 1, u = Math.min(Math.max(1, b), m), g = d === 0 ? 0 : (u - 1) * i + 1, p = d === 0 ? 0 : Math.min(u * i, d), x = n ? ` ${n}` : "", v = d === 0 ? `Showing 0 of 0${x}` : `Showing ${g}-${p} of ${d}${x}`, f = l || u <= 1, h = l || u >= m || d === 0, w = "min-h-[44px] min-w-[44px] px-3.5 rounded-xl border border-border bg-background/70 hover:bg-slate-800 active:scale-[0.98] text-xs font-semibold text-slate-200 hover:text-white inline-flex items-center justify-center gap-1.5 transition-all duration-150 disabled:opacity-45 disabled:pointer-events-none disabled:active:scale-100 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60";
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": "Pagination",
      "aria-busy": l,
      className: `w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 rounded-2xl bg-card/70 backdrop-blur-md border border-border/80 px-3.5 py-2.5 shadow-lg ${c}`,
      children: [
        /* @__PURE__ */ t("div", { className: "text-xs text-slate-400 text-center sm:text-left tabular-nums", children: v }),
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between sm:justify-end gap-2", children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => a(u - 1),
              disabled: f,
              "aria-label": "Previous page",
              className: w,
              children: [
                /* @__PURE__ */ t(nt, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ t("span", { children: "Prev" })
              ]
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "aria-live": "polite",
              className: "inline-flex items-center justify-center gap-1.5 px-2 text-xs font-medium text-slate-200 whitespace-nowrap tabular-nums",
              children: [
                l && /* @__PURE__ */ t(ae, { className: "w-3.5 h-3.5 animate-spin text-amber-400 shrink-0" }),
                /* @__PURE__ */ o("span", { children: [
                  "Page ",
                  u,
                  " of ",
                  m
                ] })
              ]
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => a(u + 1),
              disabled: h,
              "aria-label": "Next page",
              className: w,
              children: [
                /* @__PURE__ */ t("span", { children: "Next" }),
                /* @__PURE__ */ t(re, { className: "w-4 h-4 shrink-0" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, St = [
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
], Tt = /\u001b\[[0-9;?]*[ -/]*[@-~]/g, Mt = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, Rt = /[\u202a-\u202e\u2066-\u2069]/g;
function q(e) {
  return e.replace(Tt, "").replace(/\r\n?/g, `
`).replace(Mt, "").replace(Rt, "");
}
function Q(e, r, s) {
  if (e == null)
    return e;
  if (typeof e == "string")
    return q(e);
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
      name: q(e.name),
      message: q(e.message)
    };
  if (s.has(e))
    return "[Circular]";
  s.add(e);
  try {
    if (Array.isArray(e))
      return e.map((l) => Q(l, r, s));
    const a = {};
    for (const [l, n] of Object.entries(e))
      r.has(l.toLowerCase()) ? a[l] = "[REDACTED]" : a[l] = Q(n, r, s);
    return a;
  } finally {
    s.delete(e);
  }
}
function At(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Lt(e, r) {
  if (e == null)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const s = new Set(r.map((i) => i.toLowerCase()));
  let a = "", l = "TEXT";
  if (typeof e == "string") {
    const i = q(e), d = i.trim();
    if (!d)
      return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
    if (d.startsWith("{") || d.startsWith("["))
      try {
        const m = JSON.parse(d);
        if (m !== null && typeof m == "object") {
          const b = Q(m, s, /* @__PURE__ */ new WeakSet());
          a = JSON.stringify(b, null, 2), l = "JSON";
        } else
          a = i;
      } catch {
        a = i;
      }
    else
      a = i;
  } else {
    const i = Q(e, s, /* @__PURE__ */ new WeakSet());
    a = JSON.stringify(i, null, 2) ?? "", l = "JSON";
  }
  if (!a)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const n = typeof TextEncoder < "u" ? new TextEncoder().encode(a).length : a.length, c = a.split(`
`).length;
  return {
    text: a,
    isEmpty: !1,
    bytes: n,
    lines: c,
    formatLabel: l
  };
}
const Nr = ({
  payload: e,
  title: r,
  subtitle: s,
  defaultExpanded: a = !1,
  emptyMessage: l = "No payload recorded",
  redactKeys: n = St,
  maxHeightClassName: c = "max-h-96",
  className: i = ""
}) => {
  const [d, m] = T(a), { copiedKey: b, copyText: u } = Ve(), g = Ze(), p = Je(() => Lt(e, n), [e, n]), x = b === "payload", v = `${p.lines} ${p.lines === 1 ? "line" : "lines"}`, f = `${p.formatLabel} | ${At(p.bytes)} | ${v}`;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `w-full min-w-0 max-w-full overflow-hidden rounded-2xl bg-card/70 backdrop-blur-md border border-border/80 shadow-lg ${i}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 min-w-0", children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => m((h) => !h),
              "aria-expanded": d,
              "aria-controls": g,
              className: "flex-1 min-w-[180px] min-h-[44px] flex items-center gap-2 text-left bg-transparent border-0 p-0 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
              children: [
                d ? /* @__PURE__ */ t(st, { className: "w-4 h-4 text-slate-400 shrink-0" }) : /* @__PURE__ */ t(re, { className: "w-4 h-4 text-slate-400 shrink-0" }),
                /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("div", { className: "text-sm sm:text-xs font-semibold text-slate-100 truncate", children: r }),
                  s && /* @__PURE__ */ t("div", { className: "text-xs text-slate-400 truncate mt-0.5", children: s })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2 shrink-0 max-w-full", children: [
            /* @__PURE__ */ t("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 whitespace-nowrap", children: f }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                disabled: p.isEmpty,
                onClick: () => void u(p.text, "payload"),
                "aria-label": x ? `Copied ${r}` : `Copy ${r}`,
                "data-copied": x ? "true" : "false",
                className: `min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-2.5 rounded-xl border text-xs font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${x ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-background/70 border-border/70 text-slate-300 hover:text-white hover:bg-slate-800"}`,
                children: x ? /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ t(Be, { className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ t("span", { children: "Copied" })
                ] }) : /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ t(ze, { className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ t("span", { children: "Copy" })
                ] })
              }
            )
          ] })
        ] }),
        d && /* @__PURE__ */ t("div", { id: g, className: "border-t border-border/60 bg-background/80 p-3 min-w-0 max-w-full", children: p.isEmpty ? /* @__PURE__ */ t("div", { className: "px-2 py-3 text-xs text-slate-400 text-center", children: l }) : /* @__PURE__ */ t(
          "pre",
          {
            className: `overflow-x-auto overflow-y-auto ${c} w-full max-w-full m-0 p-3 rounded-xl bg-background border border-border/60 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre`,
            children: p.text
          }
        ) })
      ]
    }
  );
};
function kr(e = 30) {
  const r = /* @__PURE__ */ new Date(), s = /* @__PURE__ */ new Date();
  s.setDate(r.getDate() - e);
  const a = (l) => `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
  return { startDate: a(s), endDate: a(r) };
}
function $r({
  period: e,
  onPeriodChange: r,
  options: s,
  customValue: a = "custom",
  startDate: l,
  endDate: n,
  onStartDateChange: c,
  onEndDateChange: i,
  variant: d = "amber",
  idPrefix: m,
  className: b = ""
}) {
  const u = V[d] || V.amber, g = z[d] || z.amber, p = e === a;
  return /* @__PURE__ */ o("div", { className: `flex flex-col gap-2 ${b}`, children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ t(
        Nt,
        {
          options: s,
          value: p ? "" : e,
          onChange: r,
          variant: d,
          size: "xs",
          idPrefix: m
        }
      ),
      /* @__PURE__ */ t(
        L,
        {
          variant: p ? g : "outline",
          size: "xs",
          icon: /* @__PURE__ */ t(at, { className: "w-3 h-3" }),
          onClick: () => r(a),
          "data-testid": m ? `${m}-custom-btn` : void 0,
          children: "Custom"
        }
      )
    ] }),
    p && /* @__PURE__ */ o("div", { className: "flex items-center gap-2 flex-wrap text-xs", children: [
      /* @__PURE__ */ o("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ t("span", { children: "From" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "date",
            value: l,
            max: n || void 0,
            onChange: (x) => c(x.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${u}`
          }
        )
      ] }),
      /* @__PURE__ */ o("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ t("span", { children: "To" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "date",
            value: n,
            min: l || void 0,
            onChange: (x) => i(x.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${u}`
          }
        )
      ] })
    ] })
  ] });
}
const Cr = ({
  message: e = "New version available",
  reloadLabel: r = "Reload to update",
  laterLabel: s = "Later",
  onReload: a,
  onDismiss: l,
  className: n = ""
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${n}`,
    children: [
      /* @__PURE__ */ t("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: a,
            className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all",
            children: r
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: l,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: s
          }
        )
      ] })
    ]
  }
), He = 90, Dt = 250;
function F(e) {
  const r = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0, s = Math.floor(r / 60), a = r % 60;
  return `${s}:${a.toString().padStart(2, "0")}`;
}
function Me(e, r = He) {
  return !Number.isFinite(e) || e <= 0 ? r : Math.max(1, Math.round(e));
}
function ee(e, r = Date.now()) {
  return Math.max(0, Math.ceil((e - r) / 1e3));
}
function _t() {
  var e;
  try {
    typeof navigator < "u" && ((e = navigator.vibrate) == null || e.call(navigator, [200, 100, 200]));
  } catch {
  }
}
function Pt() {
  try {
    if (typeof window > "u") return;
    const e = window.AudioContext || window.webkitAudioContext;
    if (!e) return;
    const r = new e(), s = r.currentTime, a = r.createOscillator(), l = r.createGain();
    a.type = "sine", a.frequency.setValueAtTime(880, s), l.gain.setValueAtTime(1e-3, s), l.gain.exponentialRampToValueAtTime(0.15, s + 0.02), l.gain.exponentialRampToValueAtTime(1e-4, s + 0.35), a.connect(l), l.connect(r.destination), a.onended = () => {
      r.close().catch(() => {
      });
    }, a.start(s), a.stop(s + 0.36);
  } catch {
  }
}
function jt() {
  _t(), Pt();
}
function Er(e = He) {
  const r = Me(e), [s, a] = T(r), [l, n] = T(0), [c, i] = T(0), [d, m] = T(!1), [b, u] = T(!1), [g, p] = T(!1), x = A(null), v = A(0), f = A(r), h = A(!1), w = A(!1), M = A(!1), C = A(!1), S = R((N) => {
    x.current = null, v.current = 0, h.current = !1, w.current = !1, M.current = !0, i(0), m(!1), u(!1), p(!0), N && !C.current && (C.current = !0, jt());
  }, []), D = R(() => {
    const N = x.current;
    if (N === null || !h.current)
      return;
    const k = ee(N);
    k <= 0 ? S(!0) : i(k);
  }, [S]);
  B(() => {
    if (!d || typeof window > "u" || typeof document > "u")
      return;
    D();
    const N = window.setInterval(D, Dt), k = () => {
      document.visibilityState === "visible" && D();
    };
    return document.addEventListener("visibilitychange", k), () => {
      window.clearInterval(N), document.removeEventListener("visibilitychange", k);
    };
  }, [d, D]);
  const P = R((N) => {
    const k = N !== void 0 ? Me(N, f.current) : f.current;
    N !== void 0 && (f.current = k, a(k)), x.current = Date.now() + k * 1e3, v.current = k, h.current = !0, w.current = !1, M.current = !1, C.current = !1, n(k), i(k), m(!0), u(!1), p(!1);
  }, []), O = R(() => {
    if (!h.current || x.current === null)
      return;
    const N = ee(x.current);
    if (N <= 0) {
      S(!0);
      return;
    }
    x.current = null, v.current = N, h.current = !1, w.current = !0, M.current = !1, i(N), m(!1), u(!0), p(!1);
  }, [S]), y = R(() => {
    if (!w.current || h.current)
      return;
    const N = v.current;
    if (N <= 0) {
      S(!0);
      return;
    }
    x.current = Date.now() + N * 1e3, h.current = !0, w.current = !1, M.current = !1, i(N), m(!0), u(!1), p(!1);
  }, [S]), E = R(
    (N) => {
      if (!(!Number.isFinite(N) || N === 0)) {
        if (h.current && x.current !== null) {
          const k = x.current + N * 1e3, I = ee(k);
          if (I <= 0) {
            S(!0);
            return;
          }
          x.current = k, v.current = I, i(I), n((Ke) => Math.max(Ke, I));
          return;
        }
        if (w.current) {
          const k = Math.max(0, v.current + Math.round(N));
          if (k <= 0) {
            S(!0);
            return;
          }
          v.current = k, i(k), n((I) => Math.max(I, k));
          return;
        }
        if (M.current && N > 0) {
          const k = Math.max(1, Math.round(N));
          x.current = Date.now() + k * 1e3, v.current = k, h.current = !0, w.current = !1, M.current = !1, C.current = !1, i(k), n((I) => Math.max(I, k)), m(!0), u(!1), p(!1);
        }
      }
    },
    [S]
  ), j = R(() => {
    x.current = null, v.current = 0, h.current = !1, w.current = !1, M.current = !1, C.current = !1, i(0), n(0), m(!1), u(!1), p(!1);
  }, []);
  return {
    remainingSeconds: c,
    totalSeconds: l,
    isRunning: d,
    isPaused: b,
    isComplete: g,
    activePresetSeconds: s,
    startTimer: P,
    pauseTimer: O,
    resumeTimer: y,
    adjustTimer: E,
    dismissTimer: j
  };
}
const It = [60, 90, 120, 180], Sr = ({
  remainingSeconds: e,
  totalSeconds: r,
  isRunning: s,
  isPaused: a,
  isComplete: l,
  presets: n = It,
  onStart: c,
  onPause: i,
  onResume: d,
  onAdjust: m,
  onDismiss: b,
  variant: u = "blue",
  className: g = ""
}) => {
  const p = _[u] || _.blue, x = Z[u] || Z.blue, v = X[u] || X.blue, f = J[u] || J.blue, h = Y[u] || Y.blue, w = z[u] || z.blue;
  if (!s && !a && !l)
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "rest-timer-bar",
        className: `glass-panel bg-card/90 backdrop-blur-md border border-border rounded-2xl px-3.5 py-2.5 shadow-lg flex flex-wrap items-center justify-between gap-2 ${g}`,
        children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ t("span", { className: `p-1.5 rounded-lg border shrink-0 ${v.container}`, children: /* @__PURE__ */ t(be, { className: `w-4 h-4 ${p}` }) }),
            /* @__PURE__ */ t("span", { className: "text-xs font-semibold text-slate-200 whitespace-nowrap", children: "Rest Timer" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-wrap", children: n.map((y) => /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => c(y),
              "aria-label": `Start ${F(y)} rest timer`,
              className: "px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95",
              children: F(y)
            },
            y
          )) })
        ]
      }
    );
  const C = r > 0 ? r : 0, S = Math.max(0, e), D = l ? 100 : C > 0 ? Math.min(100, Math.max(0, Math.round((C - S) / C * 100))) : 0, P = l ? "border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20" : a ? "border-amber-500/40 bg-slate-900/95" : "border-border bg-slate-900/95", O = l ? "bg-emerald-400" : a ? "bg-amber-400" : `bg-gradient-to-r ${h.bar}`;
  return /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "rest-timer-bar",
      role: "region",
      "aria-label": "Rest timer",
      className: `glass-panel backdrop-blur-md border rounded-2xl p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up ${P} ${g}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5 min-w-0", children: [
            l ? /* @__PURE__ */ t(lt, { className: "w-5 h-5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ t(
              be,
              {
                className: `w-5 h-5 shrink-0 ${p} ${s ? "animate-pulse" : ""}`
              }
            ),
            /* @__PURE__ */ t("div", { className: "min-w-0", children: l ? /* @__PURE__ */ o(U, { children: [
              /* @__PURE__ */ t("div", { className: "text-xs font-bold text-emerald-300 leading-snug", children: "Rest Complete - Ready for next set" }),
              /* @__PURE__ */ t(
                "div",
                {
                  "data-testid": "rest-timer-countdown",
                  className: "text-lg font-black tabular-nums text-emerald-400 leading-tight",
                  children: F(S)
                }
              )
            ] }) : /* @__PURE__ */ o("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ t(
                "span",
                {
                  "data-testid": "rest-timer-countdown",
                  className: `text-2xl font-black tabular-nums tracking-tight leading-none ${a ? "text-amber-300" : x}`,
                  children: F(S)
                }
              ),
              /* @__PURE__ */ t("span", { className: "text-xs font-medium text-slate-400 whitespace-nowrap", children: a ? "Paused" : C > 0 ? `of ${F(C)}` : "Rest" })
            ] }) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            !l && (s ? /* @__PURE__ */ t(
              L,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ t(dt, { className: "w-3.5 h-3.5" }),
                onClick: i,
                "aria-label": "Pause rest timer",
                children: "Pause"
              }
            ) : /* @__PURE__ */ t(
              L,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ t(ct, { className: "w-3.5 h-3.5" }),
                onClick: d,
                "aria-label": "Resume rest timer",
                children: "Resume"
              }
            )),
            /* @__PURE__ */ t(
              L,
              {
                variant: l ? "emerald" : "ghost",
                size: "xs",
                icon: /* @__PURE__ */ t(K, { className: "w-3.5 h-3.5" }),
                onClick: b,
                "aria-label": l ? "Dismiss rest timer" : "Skip rest timer",
                children: l ? "Dismiss" : "Skip"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": D,
            "aria-label": "Rest progress",
            className: "h-2 w-full bg-background/90 rounded-full overflow-hidden border border-border/50",
            children: /* @__PURE__ */ t(
              "div",
              {
                className: `h-full rounded-full transition-all duration-300 ease-linear ${O}`,
                style: { width: `${D}%` }
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ t(
              L,
              {
                variant: "secondary",
                size: "xs",
                disabled: l || S <= 0,
                onClick: () => m(-15),
                "aria-label": "Subtract 15 seconds",
                className: "tabular-nums",
                children: "-15s"
              }
            ),
            /* @__PURE__ */ t(
              L,
              {
                variant: "secondary",
                size: "xs",
                onClick: () => m(15),
                "aria-label": "Add 15 seconds",
                className: "tabular-nums",
                children: "+15s"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1 flex-wrap", children: n.map((y) => {
            const E = !l && r === y;
            return /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: () => c(y),
                "aria-label": `Restart ${F(y)} rest timer`,
                className: `px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${E ? f : "bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200"}`,
                children: F(y)
              },
              y
            );
          }) })
        ] })
      ]
    }
  );
}, Tr = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: r = "Log in",
  onReauth: s,
  icon: a,
  className: l = "",
  testId: n = "session-expired-banner"
}) => {
  const c = (i) => {
    i && i.stopPropagation(), s ? s() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": n,
      onClick: c,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${l}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ t("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ t(se, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ t("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: c,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: r
          }
        )
      ]
    }
  );
}, Bt = {
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
}, Mr = ({
  title: e,
  value: r,
  subtitle: s,
  icon: a,
  variant: l = "default",
  className: n = "",
  onClick: c
}) => {
  const i = Bt[l], d = !!c;
  return /* @__PURE__ */ o(
    "div",
    {
      onClick: c,
      className: `p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${i.container} ${d ? "cursor-pointer hover:border-border active:scale-[0.99]" : ""} ${n}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          a && /* @__PURE__ */ t("span", { className: `mr-1 shrink-0 ${i.icon}`, children: a }),
          /* @__PURE__ */ t("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: e })
        ] }),
        /* @__PURE__ */ t("div", { className: `text-sm sm:text-base font-bold truncate ${i.value}`, children: r }),
        s && /* @__PURE__ */ t("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: s })
      ]
    }
  );
}, Re = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, Ae = "min-w-0 px-2.5 py-2 rounded-xl bg-background/60 border border-border/60", zt = "w-full min-h-[44px] flex flex-col items-stretch justify-center text-center cursor-pointer transition-[border-color,background-color,box-shadow,transform] hover:border-amber-500/50 hover:bg-background/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 group", Rr = ({
  items: e,
  columns: r = 3,
  className: s = ""
}) => {
  const a = Re[r] || Re[3];
  return /* @__PURE__ */ t("div", { className: `grid ${a} gap-2 text-center ${s}`, children: e.map((l, n) => /* @__PURE__ */ t(
    Ot,
    {
      item: l
    },
    l.id || `${l.label}-${n}`
  )) });
}, Ot = ({ item: e }) => typeof e.onClick == "function" ? /* @__PURE__ */ t(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    "aria-label": e.ariaLabel,
    "data-testid": e.testId,
    className: `${Ae} ${zt}`,
    children: /* @__PURE__ */ t(Le, { item: e, isInteractive: !0 })
  }
) : /* @__PURE__ */ t("div", { "data-testid": e.testId, className: Ae, children: /* @__PURE__ */ t(Le, { item: e, isInteractive: !1 }) }), Le = ({
  item: e,
  isInteractive: r
}) => /* @__PURE__ */ o(U, { children: [
  /* @__PURE__ */ o("span", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 min-w-0", children: [
    e.icon && /* @__PURE__ */ t("span", { className: "shrink-0", children: e.icon }),
    /* @__PURE__ */ t("span", { className: "truncate", children: e.label }),
    r && /* @__PURE__ */ t(
      re,
      {
        "aria-hidden": "true",
        className: "w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0"
      }
    )
  ] }),
  /* @__PURE__ */ t(
    "span",
    {
      className: `block text-sm font-bold mt-0.5 truncate ${e.valueClassName || "text-slate-100"}`,
      children: e.value
    }
  ),
  e.subvalue && /* @__PURE__ */ t("span", { className: "block text-[10px] text-slate-400 mt-0.5 truncate", children: e.subvalue })
] }), Ft = 60 * 60 * 1e3;
function Ar(e = {}) {
  const {
    pollIntervalMs: r = Ft,
    externalNeedRefresh: s,
    onExternalNeedRefreshChange: a,
    updateServiceWorker: l,
    registration: n
  } = e, c = A(
    n ?? void 0
  ), i = A(!1), d = A(void 0), [m, b] = T(!1), [u, g] = T(!1), [p, x] = T(null), v = s ?? m, f = R(
    (y) => {
      b(y), a == null || a(y);
    },
    [a]
  );
  B(() => {
    n && (c.current = n, n.waiting && f(!0));
  }, [n, f]);
  const h = R((y) => {
    x(y), d.current !== void 0 && typeof window < "u" && window.clearTimeout(d.current), typeof window < "u" && (d.current = window.setTimeout(() => {
      x(null);
    }, 3500));
  }, []), w = R(async () => {
    if (c.current)
      return c.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const y = await navigator.serviceWorker.getRegistration();
      if (y)
        return c.current = y, y;
    }
  }, []), M = R(
    async (y) => {
      if (await y.update(), y.waiting)
        return f(!0), !0;
      if (y.installing) {
        const E = y.installing;
        if (await new Promise((j) => {
          const N = () => {
            (E.state === "installed" || E.state === "activated" || E.state === "redundant") && (E.removeEventListener("statechange", N), j());
          };
          E.addEventListener("statechange", N);
        }), y.waiting)
          return f(!0), !0;
      }
      return !1;
    },
    [f]
  ), C = R(async () => {
    try {
      const y = await w();
      if (!y) return;
      await M(y);
    } catch {
    }
  }, [w, M]), S = R(async () => {
    g(!0), x(null);
    try {
      const y = await w();
      if (!y) {
        h("Up to date");
        return;
      }
      const E = await M(y);
      h(E ? "Update ready" : "Up to date");
    } catch {
      h("Update check failed");
    } finally {
      g(!1);
    }
  }, [w, M, h]), D = R(async () => {
    i.current = !0, await W();
    const y = await w();
    y != null && y.waiting && y.waiting.postMessage({ type: "SKIP_WAITING" }), l ? await l(!0) : typeof window < "u" && window.location.reload();
  }, [w, l]), P = R(() => {
    f(!1);
  }, [f]), O = R(async () => {
    await xt();
  }, []);
  return B(() => {
    if (typeof window > "u" || typeof document > "u") return;
    W(), C();
    const y = () => {
      document.visibilityState === "visible" && C();
    };
    document.addEventListener("visibilitychange", y);
    const E = window.setInterval(() => {
      C();
    }, r);
    return () => {
      document.removeEventListener("visibilitychange", y), window.clearInterval(E), d.current !== void 0 && window.clearTimeout(d.current);
    };
  }, [C, r]), B(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let y = !1;
    const E = navigator.serviceWorker.controller !== null, j = () => {
      !i.current && !E || y || (y = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", j), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", j);
    };
  }, []), {
    needRefresh: v,
    checkingForUpdate: u,
    updateCheckMessage: p,
    checkForUpdates: S,
    applyUpdate: D,
    dismissUpdate: P,
    hardReset: O
  };
}
const Vt = "/api/client-errors", Ht = 25, H = /* @__PURE__ */ new Set();
let Ue = Vt, De = !1;
async function _e(e, r, s) {
  try {
    let a = "Unknown error", l, n = "Error";
    if (e instanceof Error)
      a = e.message || e.name, l = e.stack, n = e.name || "Error";
    else if (typeof e == "string")
      a = e;
    else if (e && typeof e == "object") {
      const x = e;
      a = x.message || JSON.stringify(e), l = x.stack, n = x.name || "Object";
    }
    const c = (r == null ? void 0 : r.source) || void 0, i = typeof (r == null ? void 0 : r.lineno) == "number" ? r.lineno : void 0, d = typeof (r == null ? void 0 : r.colno) == "number" ? r.colno : void 0, m = (r == null ? void 0 : r.error_type) || n, b = `${a}:${c || ""}:${i || 0}:${m}`;
    if (H.has(b))
      return;
    H.add(b);
    const u = (s == null ? void 0 : s.maxRecentErrors) ?? Ht;
    if (H.size > u) {
      const x = H.values().next().value;
      x && H.delete(x);
    }
    const g = {
      message: a,
      error_type: m,
      source: c,
      lineno: i,
      colno: d,
      stack: l,
      url: typeof window < "u" ? window.location.href : void 0,
      user_agent: typeof navigator < "u" ? navigator.userAgent : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      extra: r || {}
    }, p = (s == null ? void 0 : s.endpoint) || Ue;
    typeof fetch < "u" && await fetch(p, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    }).catch(() => {
    });
  } catch {
  }
}
function Lr(e) {
  e != null && e.endpoint && (Ue = e.endpoint), !(De || typeof window > "u") && (De = !0, window.addEventListener("error", (r) => {
    _e(
      r.error || r.message,
      {
        source: r.filename,
        lineno: r.lineno,
        colno: r.colno,
        error_type: "WindowError"
      },
      e
    );
  }), window.addEventListener("unhandledrejection", (r) => {
    _e(
      r.reason,
      {
        error_type: "UnhandledRejection"
      },
      e
    );
  }));
}
function Dr(e, r = {}) {
  const {
    currency: s = "$",
    locale: a = "en-NZ",
    maximumFractionDigits: l = 0,
    minimumFractionDigits: n = 0,
    showPlusSign: c = !1
  } = r, i = Number.isFinite(e) ? e : 0, d = Math.abs(i).toLocaleString(a, {
    minimumFractionDigits: n,
    maximumFractionDigits: l
  });
  return i < 0 ? `-${s}${d}` : c && i > 0 ? `+${s}${d}` : `${s}${d}`;
}
function _r(e = /* @__PURE__ */ new Date()) {
  var n, c, i;
  const r = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(e), s = ((n = r.find((d) => d.type === "year")) == null ? void 0 : n.value) ?? "1970", a = ((c = r.find((d) => d.type === "month")) == null ? void 0 : c.value) ?? "01", l = ((i = r.find((d) => d.type === "day")) == null ? void 0 : i.value) ?? "01";
  return `${s}-${a}-${l}`;
}
function Pr(e = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(e);
}
class We extends Error {
  constructor(s = "Authentik session expired", a) {
    super(s);
    G(this, "status");
    G(this, "contentType");
    G(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function jr(e) {
  return e instanceof We || e instanceof Error && e.name === "SessionExpiredError";
}
function Ut(e) {
  const r = e.status, s = (e.headers.get("content-type") || "").toLowerCase(), a = e.url || "";
  return !!(r === 401 || r === 403 || r >= 300 && r < 400 || e.redirected || s.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function Wt(e) {
  if (Ut(e)) {
    const r = e.headers.get("content-type") || "";
    throw new We(
      `Authentik session expired (status: ${e.status}, content-type: ${r})`,
      {
        status: e.status,
        contentType: r,
        url: e.url
      }
    );
  }
}
async function Ir(e, r) {
  const { checkSessionExpiry: s = !0, ...a } = r || {}, l = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return s && Wt(l), l;
}
export {
  ur as AiSynthesizerModal,
  ht as AlertBanner,
  br as AllowanceProgressBar,
  Xt as AppHeader,
  Jt as AppShell,
  Yt as BottomNav,
  pr as BudgetProgressRow,
  L as Button,
  Qt as ChipSelector,
  xr as CollapsibleSection,
  hr as ConfirmActionBox,
  It as DEFAULT_REST_TIMER_PRESETS,
  er as EmptyState,
  tr as FileDropzone,
  rr as GlassCard,
  fr as GoalProgressCard,
  gr as KeyValueList,
  ar as LoadingState,
  yr as MetricHero,
  Fe as Modal,
  sr as MultiSegmentBar,
  wt as NumberInputDisplay,
  vr as NumericKeypadModal,
  nr as OptionCardGroup,
  wr as PaginationBar,
  Nr as PayloadViewer,
  $r as PeriodFilterBar,
  Cr as PwaUpdateBanner,
  lr as RangeSlider,
  Sr as RestTimerBar,
  Ft as SW_UPDATE_POLL_INTERVAL_MS,
  or as SearchInput,
  ir as SectionHeader,
  Nt as SegmentedControl,
  dr as SelectableCard,
  Tr as SessionExpiredBanner,
  We as SessionExpiredError,
  Mr as StatCard,
  cr as StatusBadge,
  Rr as SummaryMetricGrid,
  ne as THEME_ACTION_TEXT,
  oe as THEME_ACTIVE_TAB,
  ie as THEME_BOTTOM_NAV_ACTIVE,
  le as THEME_BRAND_BADGE,
  z as THEME_BUTTON_VARIANT,
  X as THEME_CALLOUT_BOX,
  ce as THEME_DROPZONE_ACTIVE,
  V as THEME_FOCUS_BORDER,
  de as THEME_GLOW_BG,
  Y as THEME_GOAL_GRADIENT,
  me as THEME_RING_SELECTED,
  J as THEME_SEGMENT_ACTIVE,
  _ as THEME_TEXT_COLORS,
  Z as THEME_VALUE_COLORS,
  kt as TactileKeypad,
  mr as TagPillList,
  Wt as assertSessionNotExpired,
  Ir as authFetch,
  W as clearBrowserCaches,
  Et as copyToClipboard,
  _r as formatAucklandDate,
  Pr as formatAucklandTime,
  Dr as formatCurrency,
  F as formatRestTime,
  Ct as getAllowanceThresholdState,
  kr as getDefaultCustomRange,
  Lr as initGlobalErrorReporter,
  jr as isSessionExpiredError,
  Ut as isSessionExpiredResponse,
  vt as normalizeSegments,
  $t as normalizeTagToken,
  _e as reportClientError,
  xt as resetClientCacheAndReload,
  ye as resetMobileViewportZoom,
  pt as unregisterServiceWorkers,
  Ve as useCopyFeedback,
  Ar as usePwaUpdate,
  Er as useRestTimer
};
//# sourceMappingURL=index.js.map
