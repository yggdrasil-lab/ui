var kt = Object.defineProperty;
var Ct = (e, t, n) => t in e ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var le = (e, t, n) => Ct(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as d, jsx as a, Fragment as ve } from "react/jsx-runtime";
import at, { forwardRef as st, createElement as ge, useState as A, useRef as j, useEffect as K, useCallback as z, useId as St, useMemo as Et } from "react";
import { createPortal as Tt } from "react-dom";
const D = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, ce = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, Te = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, $e = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white"
}, Re = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow"
}, Me = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, Ae = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, Pe = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, Le = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30"
}, de = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm"
}, Y = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500"
}, ue = {
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
}, me = {
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
}, q = {
  amber: "amber",
  blue: "blue",
  emerald: "emerald",
  purple: "blue",
  slate: "secondary"
}, _n = ({
  header: e,
  bottomNav: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ d("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${r}`, children: [
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
const $t = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ot = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rt = {
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
const Mt = st(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...l
  }, c) => ge(
    "svg",
    {
      ref: c,
      ...Rt,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ot("lucide", o),
      ...l
    },
    [
      ...i.map(([u, m]) => ge(u, m)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = (e, t) => {
  const n = st(
    ({ className: r, ...o }, s) => ge(Mt, {
      ref: s,
      iconNode: t,
      className: ot(`lucide-${$t(e)}`, r),
      ...o
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
const At = R("ArrowRightLeft", [
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
const Pt = R("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = R("Calendar", [
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
const lt = R("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = R("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = R("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = R("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = R("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = R("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = R("Delete", [
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
const jt = R("FileText", [
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
const Ne = R("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = R("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = R("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = R("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = R("RefreshCw", [
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
const ct = R("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = R("Sparkles", [
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
const dt = R("Target", [
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
const ut = R("Timer", [
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
const ke = R("TriangleAlert", [
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
const ae = R("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
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
async function Ut() {
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
async function Wt() {
  var e;
  await Ut(), await ne(), typeof window < "u" && typeof ((e = window.location) == null ? void 0 : e.reload) == "function" && window.location.reload();
}
const Bn = ({
  brandInitial: e,
  brandIcon: t,
  brandColor: n,
  variant: r = "blue",
  title: o,
  subtitle: s,
  tabs: i,
  activeTab: l,
  activeTabClass: c,
  onChangeTab: u,
  onRefresh: m,
  isRefreshing: f = !1,
  actions: g,
  className: b = ""
}) => {
  const p = n || $e[r] || $e.blue, v = c || Re[r] || Re.blue, h = D[r] || D.blue;
  return /* @__PURE__ */ a(
    "header",
    {
      className: `border-b border-border/60 bg-card/95 backdrop-blur-md sticky top-0 z-40 w-full pt-safe ${b}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ d("div", { className: "flex items-center space-x-3", children: [
          (e || t) && /* @__PURE__ */ a("div", { className: `w-8 h-8 rounded-xl ${p} flex items-center justify-center font-black text-sm shadow-md`, children: t || e }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ a("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: o }),
            s && /* @__PURE__ */ a("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: s })
          ] })
        ] }),
        i && i.length > 0 && /* @__PURE__ */ a("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: i.map((x) => {
          const k = l === x.id;
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => u == null ? void 0 : u(x.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${k ? v : "text-slate-400 hover:text-slate-200"}`,
              children: [
                x.icon,
                /* @__PURE__ */ a("span", { children: x.label })
              ]
            },
            x.id
          );
        }) }),
        /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
          g,
          m && /* @__PURE__ */ a(
            "button",
            {
              onClick: () => {
                ne(), m();
              },
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ a(
                Ft,
                {
                  className: `w-3.5 h-3.5 ${f ? `animate-spin ${h}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, In = ({
  tabs: e,
  activeTab: t,
  onChangeTab: n,
  variant: r = "blue",
  activeTabClass: o,
  hideOnDesktop: s = !1,
  className: i = ""
}) => {
  const l = s ? "block lg:hidden" : "block", c = o || Me[r] || Me.blue;
  return /* @__PURE__ */ a(
    "nav",
    {
      className: `${l} fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${i}`,
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
          children: e.map((u) => {
            const m = t === u.id;
            return /* @__PURE__ */ d(
              "button",
              {
                onClick: () => n(u.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${m ? c : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": u.ariaLabel || u.label,
                children: [
                  /* @__PURE__ */ d("div", { className: "relative flex items-center justify-center", children: [
                    u.icon,
                    u.badgeDot && /* @__PURE__ */ a(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a("span", { className: "text-[10px] truncate max-w-full tracking-tight", children: u.label })
                ]
              },
              u.id
            );
          })
        }
      )
    }
  );
}, ze = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, _e = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, Ht = ({
  variant: e = "info",
  title: t,
  children: n,
  icon: r,
  action: o,
  role: s = "alert",
  className: i = ""
}) => {
  const l = ze[e] || ze.info, c = _e[e] || _e.info;
  return /* @__PURE__ */ d(
    "div",
    {
      role: s,
      className: `rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${l} ${i}`,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          r && /* @__PURE__ */ a("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: r }),
          /* @__PURE__ */ d("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            t && /* @__PURE__ */ a("div", { className: `font-semibold mb-0.5 ${c}`, children: t }),
            n && /* @__PURE__ */ a("div", { className: "opacity-95", children: n })
          ] })
        ] }),
        o && /* @__PURE__ */ a("div", { className: "shrink-0 self-center", children: o })
      ]
    }
  );
}, Ce = "-", Kt = (e) => {
  const t = Zt(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(Ce);
      return l[0] === "" && l.length !== 1 && l.shift(), mt(l, t) || qt(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const c = n[i] || [];
      return l && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, mt = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? mt(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ce);
  return (i = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, Be = /^\[(.+)\]$/, qt = (e) => {
  if (Be.test(e)) {
    const t = Be.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Zt = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yt(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    ye(i, r, s, t);
  }), r;
}, ye = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ie(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Jt(o)) {
        ye(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      ye(i, Ie(t, s), n, r);
    });
  });
}, Ie = (e, t) => {
  let n = e;
  return t.split(Ce).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Jt = (e) => e.isThemeGetter, Yt = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, l]) => [t + i, l])) : s);
  return [n, o];
}) : e, Xt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, bt = "!", Qt = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (l) => {
    const c = [];
    let u = 0, m = 0, f;
    for (let h = 0; h < l.length; h++) {
      let x = l[h];
      if (u === 0) {
        if (x === o && (r || l.slice(h, h + s) === t)) {
          c.push(l.slice(m, h)), m = h + s;
          continue;
        }
        if (x === "/") {
          f = h;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const g = c.length === 0 ? l : l.substring(m), b = g.startsWith(bt), p = b ? g.substring(1) : g, v = f && f > m ? f - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: b,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: i
  }) : i;
}, er = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, tr = (e) => ({
  cache: Xt(e.cacheSize),
  parseClassName: Qt(e),
  ...Kt(e)
}), rr = /\s+/, nr = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(rr);
  let l = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const u = i[c], {
      modifiers: m,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: b
    } = n(u);
    let p = !!b, v = r(p ? g.substring(0, b) : g);
    if (!v) {
      if (!p) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = r(g), !v) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      p = !1;
    }
    const h = er(m).join(":"), x = f ? h + bt : h, k = x + v;
    if (s.includes(k))
      continue;
    s.push(k);
    const E = o(v, p);
    for (let T = 0; T < E.length; ++T) {
      const M = E[T];
      s.push(x + M);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ar() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pt(t)) && (r && (r += " "), r += n);
  return r;
}
const pt = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pt(e[r])) && (n && (n += " "), n += t);
  return n;
};
function sr(e, ...t) {
  let n, r, o, s = i;
  function i(c) {
    const u = t.reduce((m, f) => f(m), e());
    return n = tr(u), r = n.cache.get, o = n.cache.set, s = l, l(c);
  }
  function l(c) {
    const u = r(c);
    if (u)
      return u;
    const m = nr(c, n);
    return o(c, m), m;
  }
  return function() {
    return s(ar.apply(null, arguments));
  };
}
const S = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ft = /^\[(?:([a-z-]+):)?(.+)\]$/i, or = /^\d+\/\d+$/, lr = /* @__PURE__ */ new Set(["px", "full", "screen"]), ir = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ur = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, G = (e) => J(e) || lr.has(e) || or.test(e), W = (e) => X(e, "length", vr), J = (e) => !!e && !Number.isNaN(Number(e)), he = (e) => X(e, "number", J), ee = (e) => !!e && Number.isInteger(Number(e)), br = (e) => e.endsWith("%") && J(e.slice(0, -1)), w = (e) => ft.test(e), H = (e) => ir.test(e), pr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fr = (e) => X(e, pr, ht), hr = (e) => X(e, "position", ht), xr = /* @__PURE__ */ new Set(["image", "url"]), gr = (e) => X(e, xr, Nr), yr = (e) => X(e, "", wr), te = () => !0, X = (e, t, n) => {
  const r = ft.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, vr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cr.test(e) && !dr.test(e)
), ht = () => !1, wr = (e) => ur.test(e), Nr = (e) => mr.test(e), kr = () => {
  const e = S("colors"), t = S("spacing"), n = S("blur"), r = S("brightness"), o = S("borderColor"), s = S("borderRadius"), i = S("borderSpacing"), l = S("borderWidth"), c = S("contrast"), u = S("grayscale"), m = S("hueRotate"), f = S("invert"), g = S("gap"), b = S("gradientColorStops"), p = S("gradientColorStopPositions"), v = S("inset"), h = S("margin"), x = S("opacity"), k = S("padding"), E = S("saturate"), T = S("scale"), M = S("sepia"), O = S("skew"), V = S("space"), U = S("translate"), N = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", w, t], y = () => [w, t], C = () => ["", G, W], B = () => ["auto", J, w], se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oe = () => ["solid", "dashed", "dotted", "double", "none"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], fe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Q = () => ["", "0", w], Ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [J, w];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [te],
      spacing: [G, W],
      blur: ["none", "", H, w],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", H, w],
      borderSpacing: y(),
      borderWidth: C(),
      contrast: F(),
      grayscale: Q(),
      hueRotate: F(),
      invert: Q(),
      gap: y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [br, W],
      inset: I(),
      margin: I(),
      opacity: F(),
      padding: y(),
      saturate: F(),
      scale: F(),
      sepia: Q(),
      skew: F(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", w]
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
        columns: [H]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ee()
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
        object: [...se(), w]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", ee, w]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: I()
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
        flex: ["1", "auto", "initial", "none", w]
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
        order: ["first", "last", "none", ee, w]
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
          span: ["full", ee, w]
        }, w]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
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
          span: [ee, w]
        }, w]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...fe()]
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
        content: ["normal", ...fe(), "baseline"]
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
        "place-content": [...fe(), "baseline"]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [V]
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
        "space-y": [V]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", w, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [w, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [w, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [H]
        }, H]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [w, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [w, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", H, W]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", he]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", J, he]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", G, w]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", w]
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
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", G, W]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", G, w]
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
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
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
        content: ["none", w]
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
        bg: [...se(), hr]
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
        bg: ["auto", "cover", "contain", fr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gr]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
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
        border: [...oe(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        divide: oe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...oe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [G, W]
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
        ring: C()
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
        "ring-offset": [G, W]
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
        shadow: ["", "inner", "none", H, yr]
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
        "mix-blend": [...Se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", H, w]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [M]
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
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [M]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", w]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ee, w]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
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
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
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
        "will-change": ["auto", "scroll", "contents", "transform", w]
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
        stroke: [G, W, he]
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
}, P = /* @__PURE__ */ sr(kr), Cr = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, Sr = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, L = at.forwardRef(
  ({
    children: e,
    variant: t = "secondary",
    size: n = "sm",
    icon: r,
    iconPosition: o = "left",
    loading: s = !1,
    loadingText: i,
    fullWidth: l = !1,
    disabled: c = !1,
    className: u = "",
    type: m = "button",
    ...f
  }, g) => {
    const b = c || s, p = s && i ? i : e, v = p != null && p !== !1 && p !== "";
    return /* @__PURE__ */ d(
      "button",
      {
        ref: g,
        type: m,
        disabled: b,
        className: P(
          "inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none",
          Cr[t],
          Sr[n],
          l && "w-full",
          u
        ),
        ...f,
        children: [
          s ? /* @__PURE__ */ a(Ne, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : r && o === "left" ? /* @__PURE__ */ a("span", { className: "shrink-0", children: r }) : null,
          v && /* @__PURE__ */ a("span", { children: p }),
          !s && r && o === "right" ? /* @__PURE__ */ a("span", { className: "shrink-0", children: r }) : null
        ]
      }
    );
  }
);
L.displayName = "Button";
const je = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, jn = ({
  options: e,
  selected: t,
  selectedValues: n = [],
  onChange: r,
  onChangeValues: o,
  multiSelect: s = !1,
  equalWidth: i = !1,
  variant: l = "amber",
  size: c = "sm",
  className: u = ""
}) => {
  const m = je[l] || je.amber, f = c === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", g = (b) => {
    if (s) {
      const p = n.includes(b) ? n.filter((v) => v !== b) : [...n, b];
      o && o(p), r && r(b);
    } else r && r(b);
  };
  return /* @__PURE__ */ a("div", { className: `flex ${i ? "w-full gap-2" : "flex-wrap gap-1.5"} ${u}`, children: e.map((b) => {
    const p = typeof b == "string" ? b : b.value, v = typeof b == "string" ? b : b.label, h = s ? n.includes(p) : t === p;
    return /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => g(p),
        className: `${f} ${i ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${h ? m : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: v
      },
      p
    );
  }) });
}, De = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, Dn = ({
  title: e,
  description: t,
  icon: n,
  action: r,
  variant: o = "dashed",
  className: s = ""
}) => {
  const i = De[o] || De.dashed;
  return /* @__PURE__ */ d(
    "div",
    {
      className: `rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2 ${i} ${s}`,
      children: [
        n && /* @__PURE__ */ a("div", { className: "text-slate-400 mb-1 flex items-center justify-center", children: n }),
        /* @__PURE__ */ a("div", { className: "text-sm font-semibold text-slate-200", children: e }),
        t && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 max-w-md leading-relaxed", children: t }),
        r && /* @__PURE__ */ a("div", { className: "pt-2", children: r })
      ]
    }
  );
}, On = ({
  file: e,
  onFileChange: t,
  acceptedFormats: n = ".pdf,.csv",
  title: r = "Drop your file here, or browse",
  description: o = "Supports official PDF and CSV documents",
  variant: s = "amber",
  className: i = "",
  children: l
}) => {
  const [c, u] = A(!1), m = at.useId(), f = (h) => {
    h.preventDefault(), h.stopPropagation(), h.type === "dragenter" || h.type === "dragover" ? u(!0) : h.type === "dragleave" && u(!1);
  }, g = (h) => {
    h.preventDefault(), h.stopPropagation(), u(!1), h.dataTransfer.files && h.dataTransfer.files[0] && t(h.dataTransfer.files[0]);
  }, b = (h) => {
    h.target.files && h.target.files[0] && t(h.target.files[0]);
  }, p = Pe[s] || Pe.amber, v = D[s] || D.amber;
  return /* @__PURE__ */ d(
    "div",
    {
      onDragEnter: f,
      onDragOver: f,
      onDragLeave: f,
      onDrop: g,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${c ? p : "border-border hover:border-slate-600 bg-background/50"} ${i}`,
      children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "file",
            accept: n,
            id: m,
            onChange: b,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ d("label", { htmlFor: m, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ a(jt, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ a("div", { className: "text-xs text-slate-300 font-medium", children: e ? /* @__PURE__ */ d("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ a("span", { className: `${v} font-semibold truncate max-w-[240px]`, children: e.name }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                onClick: (h) => {
                  h.preventDefault(), h.stopPropagation(), t(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ a(ae, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ d(ve, { children: [
            /* @__PURE__ */ a("span", { children: r.split("browse")[0] }),
            /* @__PURE__ */ a("span", { className: `${v} underline`, children: "browse" }),
            /* @__PURE__ */ a("span", { children: r.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ a("p", { className: "text-[10px] text-slate-500", children: o })
        ] }),
        l && /* @__PURE__ */ a("div", { className: "mt-4", children: l })
      ]
    }
  );
}, Er = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5"
}, Tr = {
  glass: "glass-panel bg-card/70 backdrop-blur-md border border-border/80",
  solid: "bg-card border border-border"
}, _ = ({
  children: e,
  as: t = "div",
  className: n,
  onClick: r,
  padding: o = "lg",
  tone: s = "glass",
  hoverGlow: i = !1,
  ...l
}) => {
  const c = !!r;
  return /* @__PURE__ */ a(
    t,
    {
      onClick: r,
      className: P(
        "rounded-2xl shadow-lg",
        Tr[s],
        Er[o],
        i && "hover:border-border transition-all duration-200 hover:shadow-xl",
        c && "cursor-pointer active:scale-[0.99] transition-transform select-none",
        n
      ),
      ...l,
      children: e
    }
  );
}, Vn = ({
  label: e = "Loading...",
  variant: t = "amber",
  className: n = ""
}) => {
  const r = D[t] || D.amber;
  return /* @__PURE__ */ d(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: `flex flex-col items-center justify-center py-8 px-4 text-center space-y-2 ${n}`,
      children: [
        /* @__PURE__ */ a(Ne, { className: `w-6 h-6 animate-spin ${r}` }),
        e && /* @__PURE__ */ a("span", { className: "text-xs font-medium text-slate-400", children: e })
      ]
    }
  );
}, Oe = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover", $r = "width=device-width, initial-scale=1.0, viewport-fit=cover";
function Ve() {
  if (typeof document > "u" || typeof window > "u")
    return;
  const e = document.activeElement;
  typeof HTMLElement < "u" && e instanceof HTMLElement && e.blur();
  const t = document.querySelector('meta[name="viewport"]');
  t && ((t.getAttribute("content") ?? "") === Oe && t.setAttribute("content", $r), t.setAttribute("content", Oe)), window.scrollTo({ left: 0, top: window.scrollY });
}
const xt = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r,
  headerIcon: o,
  disableClose: s = !1,
  children: i,
  className: l = ""
}) => {
  const c = j(!1);
  if (K(() => (e ? (c.current = !0, document.body.style.overflow = "hidden") : (document.body.style.overflow = "", c.current && (c.current = !1, Ve())), () => {
    document.body.style.overflow = "";
  }), [e]), K(() => () => {
    c.current && (c.current = !1, Ve());
  }, []), K(() => {
    if (!e) return;
    const m = (f) => {
      f.key === "Escape" && !s && t();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [e, t, s]), !e) return null;
  const u = /* @__PURE__ */ a(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (m) => {
        m.target === m.currentTarget && !s && t();
      },
      children: /* @__PURE__ */ d(
        "div",
        {
          className: `modal-card modal-content w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe ${l}`,
          children: [
            /* @__PURE__ */ d("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
              n ? /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                  o && /* @__PURE__ */ a("span", { className: "text-lg leading-none", children: o }),
                  /* @__PURE__ */ a("h2", { className: "text-base font-bold text-slate-100 m-0", children: n })
                ] }),
                r && /* @__PURE__ */ a("p", { className: "text-xs text-sky-400 m-0", children: r })
              ] }) : /* @__PURE__ */ a("div", {}),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  onClick: t,
                  disabled: s,
                  className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors disabled:opacity-50",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ a(ae, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: i })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? Tt(u, document.body) : u;
};
function Rr(e) {
  const t = e.map((r) => ({
    ...r,
    value: Math.max(0, Number(r.value) || 0)
  })), n = t.reduce((r, o) => r + o.value, 0);
  return n <= 0 ? [] : t.map((r) => ({
    ...r,
    widthPct: r.value / n * 100
  }));
}
const Fn = ({
  segments: e,
  showLegend: t = !0,
  heightClass: n = "h-2.5",
  className: r = ""
}) => {
  const o = Rr(e);
  return o.length === 0 ? null : /* @__PURE__ */ d("div", { className: `space-y-1.5 ${r}`, children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: `w-full ${n} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`,
        children: o.map((s) => {
          if (s.widthPct <= 0) return null;
          const i = s.valueLabel || `${Math.round(s.widthPct)}%`;
          return /* @__PURE__ */ a(
            "div",
            {
              style: { width: `${s.widthPct}%` },
              className: `h-full ${s.barColor} transition-all duration-500`,
              title: `${s.label}: ${i}`
            },
            s.id
          );
        })
      }
    ),
    t && /* @__PURE__ */ a("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300", children: o.map((s) => {
      const i = s.minVisiblePct ?? 0.5;
      if (s.widthPct < i) return null;
      const l = s.dotColor || s.barColor, c = s.textColor || "text-slate-200", u = s.valueLabel || `${Math.round(s.widthPct)}%`;
      return /* @__PURE__ */ d("span", { className: "inline-flex items-center gap-1 font-medium", children: [
        /* @__PURE__ */ a("span", { className: `w-2 h-2 rounded-full shrink-0 ${l}` }),
        /* @__PURE__ */ a("span", { className: c, children: s.label }),
        /* @__PURE__ */ a("span", { className: "text-slate-400", children: u })
      ] }, s.id);
    }) })
  ] });
}, Mr = ({
  label: e,
  value: t,
  unit: n,
  variant: r = "blue",
  valueColor: o,
  className: s = ""
}) => {
  const i = o || ce[r] || ce.blue;
  return /* @__PURE__ */ d("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${s}`, children: [
    /* @__PURE__ */ a("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ d("div", { className: `text-4xl font-black ${i} tracking-tight`, children: [
      t || "0",
      n && /* @__PURE__ */ a("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: n })
    ] })
  ] });
}, Fe = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function Gn({
  label: e,
  options: t,
  value: n,
  onChange: r,
  className: o = ""
}) {
  return /* @__PURE__ */ d("div", { className: `space-y-2 ${o}`, children: [
    e && /* @__PURE__ */ a("label", { className: "block font-semibold text-sm text-slate-200", children: e }),
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: t.map((s) => {
      const i = n === s.value, l = s.accent || "blue", c = Fe[l] || Fe.blue;
      return /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          onClick: () => r(s.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${i ? c : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            s.icon && /* @__PURE__ */ a("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: s.icon }),
            /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ a("div", { className: `font-semibold text-sm ${i ? "text-slate-100" : "text-slate-300"}`, children: s.label }),
              s.description && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 mt-0.5 leading-snug", children: s.description })
            ] })
          ]
        },
        s.value
      );
    }) })
  ] });
}
const Ge = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  slate: "bg-slate-400"
}, Ar = {
  sm: "h-2",
  md: "h-2.5"
}, Pr = {
  default: "duration-500",
  linear: "duration-300 ease-linear"
}, pe = (e) => {
  const { value: t, max: n = 100, tone: r = "gradient", variant: o = "blue", size: s = "md" } = e, { transition: i = "default", round: l = !0, label: c, trackClassName: u, fillClassName: m, className: f } = e, g = zr(t, n, l), b = Lr(r, o);
  return /* @__PURE__ */ a(
    "div",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(g),
      "aria-label": c || void 0,
      className: P(
        "w-full rounded-full bg-background border border-border/50 overflow-hidden",
        Ar[s],
        u,
        f
      ),
      children: /* @__PURE__ */ a(
        "div",
        {
          className: P("h-full rounded-full transition-all", Pr[i], b, m),
          style: { width: `${g}%` }
        }
      )
    }
  );
};
function Lr(e, t) {
  return e === "gradient" ? `bg-gradient-to-r ${(me[t] ?? me.blue).bar}` : Ge[e] ?? Ge.slate;
}
function zr(e, t = 100, n = !0) {
  if (!Number.isFinite(e) || !Number.isFinite(t) || t <= 0)
    return 0;
  const r = Math.min(100, Math.max(0, e / t * 100));
  return n ? Math.round(r) : r;
}
const Ue = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, Un = ({
  label: e,
  valueDisplay: t,
  valueClassName: n = "text-slate-200",
  min: r,
  max: o,
  step: s = 1,
  value: i,
  onChange: l,
  minLabel: c,
  midLabel: u,
  maxLabel: m,
  variant: f = "amber",
  className: g = ""
}) => {
  const b = Ue[f] || Ue.amber;
  return /* @__PURE__ */ d("div", { className: `space-y-1 ${g}`, children: [
    /* @__PURE__ */ d("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ a("span", { className: "text-slate-400", children: e }),
      /* @__PURE__ */ a("span", { className: `font-semibold ${n}`, children: t })
    ] }),
    /* @__PURE__ */ a(
      "input",
      {
        type: "range",
        min: r,
        max: o,
        step: s,
        value: i,
        onChange: (p) => l(Number(p.target.value)),
        className: `w-full ${b} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (c || u || m) && /* @__PURE__ */ d("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ a("span", { children: c }),
      /* @__PURE__ */ a("span", { children: u }),
      /* @__PURE__ */ a("span", { children: m })
    ] })
  ] });
}, Wn = ({
  value: e,
  onChange: t,
  placeholder: n = "Search...",
  variant: r = "amber",
  rightSlot: o,
  className: s = "",
  "data-testid": i
}) => {
  const l = Y[r] || Y.amber;
  return /* @__PURE__ */ d("div", { className: `flex items-center gap-2 ${s}`, children: [
    /* @__PURE__ */ d("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ a(ct, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: e,
          onChange: (c) => t(c.target.value),
          placeholder: n,
          "data-testid": i,
          className: `w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-base sm:text-xs text-slate-200 placeholder-slate-500 focus:outline-none ${l} transition-colors`
        }
      ),
      e.length > 0 && /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => t(""),
          "aria-label": "Clear search",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors",
          children: /* @__PURE__ */ a(ae, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    o && /* @__PURE__ */ a("div", { className: "shrink-0", children: o })
  ] });
}, We = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20"
}, Hn = ({
  title: e,
  subtitle: t,
  icon: n,
  variant: r = "amber",
  actions: o,
  titleAs: s = "h3",
  uppercaseTitle: i = !1,
  size: l = "sm",
  className: c = ""
}) => {
  const u = We[r] || We.amber, m = s, f = l === "md" ? `text-base font-bold text-slate-100 ${i ? "tracking-wide uppercase" : ""}` : `text-sm font-semibold text-slate-200 ${i ? "tracking-wide uppercase" : ""}`, g = l === "md" ? "p-2.5 rounded-xl border" : "p-1.5 rounded-lg border";
  return /* @__PURE__ */ d("div", { className: `flex flex-wrap items-center justify-between gap-3 ${c}`, children: [
    /* @__PURE__ */ d("div", { className: "flex items-center space-x-2.5 min-w-[200px] flex-1", children: [
      n && /* @__PURE__ */ a("div", { className: `${g} shrink-0 ${u}`, children: n }),
      /* @__PURE__ */ d("div", { className: "min-w-0", children: [
        /* @__PURE__ */ a(m, { className: f, children: e }),
        t && /* @__PURE__ */ a("p", { className: "text-xs text-slate-400", children: t })
      ] })
    ] }),
    o && /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-2 max-w-full", children: o })
  ] });
}, He = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function _r({
  options: e,
  value: t,
  onChange: n,
  variant: r = "amber",
  size: o = "xs",
  fullWidth: s = !1,
  className: i = "",
  idPrefix: l = "segmented"
}) {
  const c = de[r] || de.amber, u = He[o] || He.xs;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tablist",
      className: `inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${s ? "w-full grid" : ""} ${i}`,
      style: s ? { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` } : void 0,
      children: e.map((m) => {
        const f = t === m.id;
        return /* @__PURE__ */ d(
          "button",
          {
            role: "tab",
            "aria-selected": f,
            type: "button",
            "data-testid": `${l}-${m.id}`,
            onClick: () => n(m.id),
            className: `font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${u} ${f ? `${c} font-semibold` : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
            children: [
              m.icon && /* @__PURE__ */ a("span", { className: "shrink-0", children: m.icon }),
              /* @__PURE__ */ a("span", { children: m.label }),
              m.badge !== void 0 && /* @__PURE__ */ a("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: m.badge })
            ]
          },
          m.id
        );
      })
    }
  );
}
const Kn = ({
  title: e,
  subtitle: t,
  value: n,
  valueSuffix: r,
  subvalue: o,
  subvalueTrend: s = "neutral",
  badge: i,
  icon: l,
  isSelected: c = !1,
  onClick: u,
  variant: m = "amber",
  className: f = "",
  "data-testid": g
}) => {
  const b = Le[m] || Le.amber, p = s === "positive" ? "text-emerald-400" : s === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      "data-testid": g,
      onClick: u,
      className: `text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${c ? b : "bg-background/60 border-border/60 hover:border-slate-700"} ${f}`,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ d("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            l && /* @__PURE__ */ a("span", { className: "shrink-0", children: l }),
            /* @__PURE__ */ a("span", { className: "truncate", children: e })
          ] }),
          i && /* @__PURE__ */ a("div", { className: "shrink-0", children: i })
        ] }),
        n !== void 0 && /* @__PURE__ */ d("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          n,
          r && /* @__PURE__ */ a("span", { className: "text-xs font-normal text-slate-400 ml-1", children: r })
        ] }),
        (t || o) && /* @__PURE__ */ d("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          t && /* @__PURE__ */ a("span", { className: "truncate", children: t }),
          o && /* @__PURE__ */ a("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${p}`, children: o })
        ] })
      ]
    }
  );
}, Ke = {
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
}, gt = ({
  label: e,
  variant: t = "idle",
  icon: n,
  showDot: r = !0,
  isPulsing: o = !1,
  className: s = ""
}) => {
  const i = Ke[t] || Ke.idle;
  return /* @__PURE__ */ d(
    "div",
    {
      className: P(
        "status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
        i.bg,
        s
      ),
      children: [
        n ? /* @__PURE__ */ a("span", { className: "mr-1.5 shrink-0 flex items-center", children: n }) : r ? /* @__PURE__ */ a(
          "span",
          {
            className: P(
              "w-1.5 h-1.5 rounded-full mr-1.5 shrink-0",
              i.dot,
              o && "animate-pulse"
            )
          }
        ) : null,
        /* @__PURE__ */ a("span", { className: "truncate", children: e })
      ]
    }
  );
}, Br = ({
  value: e,
  onChange: t,
  onClear: n,
  maxDecimalPlaces: r = 2,
  variant: o = "blue",
  actionColor: s,
  allowDecimals: i = !0,
  className: l = ""
}) => {
  const c = (b) => {
    if (b === ".") {
      if (!i || e.includes(".")) return;
      t(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const p = e.split(".");
      if (p[1] && p[1].length >= r) return;
    }
    t(e === "0" ? b : e + b);
  }, u = () => {
    e.length <= 1 ? t("") : t(e.slice(0, -1));
  }, m = () => {
    n ? n() : t("");
  }, f = s || Te[o] || Te.blue, g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", i ? "." : "", "0"];
  return /* @__PURE__ */ d("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${l}`, children: [
    g.map((b, p) => b ? /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => c(b),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: b
      },
      b
    ) : /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${f} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${p}`
    )),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: u,
        onDoubleClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${f} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ a(It, { className: "w-5 h-5" })
      }
    )
  ] });
}, qe = {
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    removeBtn: "text-amber-400/70 hover:text-amber-200"
  },
  slate: {
    pill: "bg-slate-800 text-slate-300 border border-slate-700/80",
    removeBtn: "opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-400"
  }
};
function Ir(e) {
  return e.trim().toLowerCase().replace(/^#+/, "").replace(/\s+/g, "-");
}
const qn = ({
  tags: e,
  onAddTag: t,
  onRemoveTag: n,
  disabled: r = !1,
  placeholder: o = "add tag...",
  variant: s = "amber",
  addButtonLabel: i = "tag",
  addButtonTestId: l,
  inputTestId: c,
  className: u = ""
}) => {
  const [m, f] = A(!1), [g, b] = A("");
  if (e.length === 0 && !t)
    return null;
  const p = qe[s] || qe.amber, v = () => {
    const x = Ir(g);
    b(""), f(!1), x && !e.includes(x) && t && t(x);
  }, h = () => {
    b(""), f(!1);
  };
  return /* @__PURE__ */ d("div", { className: `flex items-center flex-wrap gap-1 ${u}`, children: [
    e.map((x) => /* @__PURE__ */ d(
      "span",
      {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${p.pill}`,
        children: [
          /* @__PURE__ */ d("span", { children: [
            "#",
            x
          ] }),
          n && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => void n(x),
              disabled: r,
              "aria-label": `Remove tag ${x}`,
              title: `Remove tag #${x}`,
              className: `transition-colors ${p.removeBtn}`,
              children: /* @__PURE__ */ a(ae, { className: "w-2.5 h-2.5" })
            }
          )
        ]
      },
      x
    )),
    t && !m && /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        onClick: () => {
          b(""), f(!0);
        },
        disabled: r,
        "data-testid": l,
        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-border/70 text-[10px] transition-colors",
        children: [
          /* @__PURE__ */ a(Vt, { className: "w-2.5 h-2.5" }),
          /* @__PURE__ */ a("span", { children: i })
        ]
      }
    ),
    t && m && /* @__PURE__ */ a(
      "form",
      {
        onSubmit: (x) => {
          x.preventDefault(), v();
        },
        className: "inline-flex items-center gap-1",
        children: /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            value: g,
            onChange: (x) => b(x.target.value),
            onBlur: v,
            onKeyDown: (x) => {
              x.key === "Escape" && (x.preventDefault(), h());
            },
            placeholder: o,
            autoFocus: !0,
            "data-testid": c,
            className: "w-28 sm:w-24 px-1.5 py-0.5 text-base sm:text-[10px] rounded bg-background border border-amber-500/50 text-slate-200 focus:outline-none"
          }
        )
      }
    )
  ] });
}, Zn = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r = "Sports Physiology & Circadian Research Grounding",
  headerIcon: o = "🧠",
  citationTitle: s,
  citationIcon: i = "📚",
  pillars: l = [],
  inputLabel: c = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: u = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: m = 3,
  submitLabel: f = "Synthesize with AI",
  submittingLabel: g = "Synthesizing...",
  errorFallbackMessage: b = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: p = "blue",
  onSynthesize: v
}) => {
  const [h, x] = A(""), [k, E] = A(!1), [T, M] = A(null), O = async () => {
    E(!0), M(null);
    try {
      await v(h.trim() || void 0), x(""), t();
    } catch {
      M(b);
    } finally {
      E(!1);
    }
  }, V = ue[p] || ue.blue, U = Y[p] || Y.blue, N = q[p] || q.blue;
  return /* @__PURE__ */ a(
    xt,
    {
      isOpen: e,
      onClose: t,
      title: n,
      subtitle: r,
      headerIcon: o,
      disableClose: k,
      children: /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        (s || l.length > 0) && /* @__PURE__ */ d("div", { className: `rounded-xl border p-3 text-xs ${V.container}`, children: [
          s && /* @__PURE__ */ d("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${V.header}`, children: [
            /* @__PURE__ */ a("span", { children: i }),
            /* @__PURE__ */ a("span", { children: s })
          ] }),
          l.length > 0 && /* @__PURE__ */ a("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: l.map(($, I) => /* @__PURE__ */ d("li", { children: [
            /* @__PURE__ */ d("strong", { className: "text-slate-100", children: [
              $.label,
              ":"
            ] }),
            " ",
            $.description
          ] }, I)) })
        ] }),
        /* @__PURE__ */ d("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ a("label", { className: "block text-xs font-semibold text-slate-200", children: c }),
          /* @__PURE__ */ a(
            "textarea",
            {
              rows: m,
              value: h,
              onChange: ($) => x($.target.value),
              disabled: k,
              placeholder: u,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-base sm:text-xs placeholder-slate-500 focus:outline-none ${U} resize-y`
            }
          )
        ] }),
        T && /* @__PURE__ */ a("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: T }),
        /* @__PURE__ */ d("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "md",
              onClick: t,
              disabled: k,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: N,
              size: "md",
              loading: k,
              loadingText: g,
              icon: /* @__PURE__ */ a("span", { children: "⚡" }),
              onClick: O,
              children: f
            }
          )
        ] })
      ] })
    }
  );
}, Jn = (e) => {
  const { title: t, subtitle: n, icon: r, currentValue: o, targetValue: s, action: i, deltaBadge: l, className: c = "" } = e, { currencyPrefix: u = "$", currencySuffix: m = "NZD" } = e, { percent: f, remaining: g, percentTextColor: b } = Vr(o, s);
  return /* @__PURE__ */ d(_, { tone: "solid", padding: "lg", className: c, children: [
    /* @__PURE__ */ a(jr, { title: t, subtitle: n, icon: r, action: i }),
    /* @__PURE__ */ a(
      Dr,
      {
        title: t,
        currentValue: o,
        targetValue: s,
        currencyPrefix: u,
        percent: f,
        percentTextColor: b
      }
    ),
    /* @__PURE__ */ a(
      Or,
      {
        remaining: g,
        currencyPrefix: u,
        currencySuffix: m,
        deltaBadge: l
      }
    )
  ] });
}, jr = ({ title: e, subtitle: t, icon: n, action: r }) => /* @__PURE__ */ d("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-3", children: [
  /* @__PURE__ */ d("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
    !!n && /* @__PURE__ */ a("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0", children: n }),
    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
      /* @__PURE__ */ a("h3", { className: "text-sm font-semibold text-slate-200", children: e }),
      !!t && /* @__PURE__ */ a("p", { className: "text-xs text-slate-400", children: t })
    ] })
  ] }),
  !!r && /* @__PURE__ */ a("div", { className: "shrink-0", children: r })
] }), Dr = (e) => /* @__PURE__ */ d("div", { className: "space-y-1.5 my-3", children: [
  /* @__PURE__ */ d("div", { className: "flex flex-wrap justify-between items-baseline gap-2 text-xs", children: [
    /* @__PURE__ */ d("span", { className: "text-slate-400", children: [
      "Spent",
      " ",
      /* @__PURE__ */ d("strong", { className: "text-slate-200", children: [
        e.currencyPrefix,
        Math.round(e.currentValue).toLocaleString("en-NZ")
      ] }),
      " ",
      "of ",
      e.currencyPrefix,
      Math.round(e.targetValue).toLocaleString("en-NZ")
    ] }),
    /* @__PURE__ */ d("span", { className: `${e.percentTextColor} shrink-0 tabular-nums`, children: [
      e.percent,
      "%"
    ] })
  ] }),
  /* @__PURE__ */ a(
    pe,
    {
      value: e.percent,
      tone: Fr(e.percent),
      size: "md",
      label: `${e.title} progress`
    }
  )
] }), Or = (e) => {
  const { remaining: t, currencyPrefix: n, currencySuffix: r, deltaBadge: o } = e;
  return /* @__PURE__ */ d("div", { className: "flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pt-2 border-t border-border/50 text-xs", children: [
    /* @__PURE__ */ d("span", { className: "text-slate-400", children: [
      "Remaining allowance:",
      " ",
      /* @__PURE__ */ d("strong", { className: "text-slate-200", children: [
        n,
        Math.round(t).toLocaleString("en-NZ"),
        " ",
        r
      ] })
    ] }),
    o && /* @__PURE__ */ d(
      "div",
      {
        className: `flex items-center font-medium px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap ${o.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
        children: [
          /* @__PURE__ */ a(Pt, { className: `w-3.5 h-3.5 mr-1 ${o.isPositive ? "" : "rotate-90"}` }),
          /* @__PURE__ */ a("span", { children: o.label })
        ]
      }
    )
  ] });
};
function Vr(e, t) {
  const n = t > 0 ? t : 1, r = Math.min(100, Math.max(0, Math.round(e / n * 100))), o = Math.max(0, t - e);
  return r > 90 ? { percent: r, remaining: o, barColor: "bg-rose-500", percentTextColor: "text-rose-400 font-semibold" } : r > 70 ? { percent: r, remaining: o, barColor: "bg-amber-400", percentTextColor: "text-amber-400 font-semibold" } : { percent: r, remaining: o, barColor: "bg-emerald-400", percentTextColor: "text-slate-400 font-medium" };
}
function Fr(e) {
  return e > 90 ? "rose" : e > 70 ? "amber" : "emerald";
}
const Gr = {
  normal: "emerald",
  warning: "amber",
  danger: "rose"
}, Ze = {
  normal: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500"
}, Yn = (e) => {
  const { category: t, icon: n, spendFormatted: r, transactionCount: o, transactionCountLabel: s } = e, { percentage: i = 0, isTransfer: l = !1, onRowClick: c, "data-testid": u } = e;
  return /* @__PURE__ */ d(
    "div",
    {
      "data-testid": u,
      onClick: c,
      title: `Click to inspect transactions in ${t}`,
      className: "p-3 bg-card/40 hover:bg-card/70 rounded-xl border border-border hover:border-slate-600 transition-all cursor-pointer space-y-1.5 group",
      children: [
        /* @__PURE__ */ a(
          Wr,
          {
            category: t,
            icon: n,
            spendFormatted: r,
            transactionCount: o,
            transactionCountLabel: s,
            percentage: i,
            isTransfer: l
          }
        ),
        /* @__PURE__ */ a(Ur, { ...e })
      ]
    }
  );
}, Ur = (e) => {
  const { isTransfer: t = !1, budgetSummaryLabel: n, transferNote: r } = e;
  return t ? /* @__PURE__ */ a(
    Hr,
    {
      transferNote: r ?? "Internal transfers between accounts - Excluded from spend"
    }
  ) : n ? /* @__PURE__ */ a(
    Kr,
    {
      category: e.category,
      budgetSummaryLabel: n,
      remainingOrOverFormatted: e.remainingOrOverFormatted,
      percentUsed: e.percentUsed,
      isOverBudget: !!e.isOverBudget,
      warningLevel: e.warningLevel ?? "normal",
      onEditTargetClick: e.onEditTargetClick
    }
  ) : /* @__PURE__ */ a(Zr, { onEditTargetClick: e.onEditTargetClick });
}, Wr = (e) => {
  const { category: t, icon: n, spendFormatted: r, transactionCount: o, transactionCountLabel: s, percentage: i, isTransfer: l } = e, c = s ?? `${o} ${o === 1 ? "txn" : "txns"}`;
  return /* @__PURE__ */ d("div", { className: "flex items-center justify-between text-xs gap-2", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center space-x-2 min-w-0", children: [
      !!n && /* @__PURE__ */ a("div", { className: "p-1 rounded bg-background border border-border shrink-0", children: n }),
      /* @__PURE__ */ a("span", { className: "font-medium text-slate-200 group-hover:text-amber-300 transition-colors truncate", children: t }),
      /* @__PURE__ */ d("span", { className: "text-[10px] text-slate-500 font-mono shrink-0", children: [
        c,
        !l && ` (${Math.round(i)}%)`
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "flex items-center space-x-2 shrink-0", children: [
      /* @__PURE__ */ a("span", { className: `font-semibold font-mono ${l ? "text-sky-300" : "text-slate-100"}`, children: r }),
      /* @__PURE__ */ a("div", { className: "p-1 rounded bg-card/80 text-slate-400 group-hover:text-slate-200 border border-transparent group-hover:border-border transition-colors", children: /* @__PURE__ */ a(ct, { className: "w-3 h-3" }) })
    ] })
  ] });
}, Hr = ({ transferNote: e }) => /* @__PURE__ */ d("div", { className: "flex justify-between items-center text-[10px] text-sky-400/90 pt-0.5", children: [
  /* @__PURE__ */ d("span", { className: "flex items-center space-x-1", children: [
    /* @__PURE__ */ a(At, { className: "w-2.5 h-2.5 shrink-0" }),
    /* @__PURE__ */ a("span", { children: e })
  ] }),
  /* @__PURE__ */ a("span", { className: "text-slate-400 hover:text-slate-200 shrink-0", children: "Inspect txns" })
] }), Kr = (e) => {
  const { category: t, budgetSummaryLabel: n, remainingOrOverFormatted: r, percentUsed: o } = e, { isOverBudget: s, warningLevel: i, onEditTargetClick: l } = e;
  return /* @__PURE__ */ d("div", { className: "space-y-1", children: [
    /* @__PURE__ */ a(
      pe,
      {
        value: o ?? 0,
        round: !1,
        size: "sm",
        tone: Gr[i] ?? "emerald",
        trackClassName: "border-border",
        fillClassName: Ze[i] ?? Ze.normal,
        label: `${t} budget usage`
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex justify-between items-center text-[10px] text-slate-400 font-mono", children: [
      /* @__PURE__ */ a("span", { children: n }),
      /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
        !!r && /* @__PURE__ */ a(qr, { isOverBudget: s, label: r }),
        l && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: l,
            title: "Edit budget target",
            className: "text-slate-500 hover:text-amber-400 p-0.5",
            children: /* @__PURE__ */ a(dt, { className: "w-2.5 h-2.5" })
          }
        )
      ] })
    ] })
  ] });
}, qr = ({
  isOverBudget: e,
  label: t
}) => e ? /* @__PURE__ */ d("span", { className: "text-rose-400 font-semibold flex items-center space-x-1", children: [
  /* @__PURE__ */ a(ke, { className: "w-3 h-3" }),
  /* @__PURE__ */ a("span", { children: t })
] }) : /* @__PURE__ */ a("span", { className: "text-emerald-400", children: t }), Zr = ({
  onEditTargetClick: e
}) => /* @__PURE__ */ d("div", { className: "flex justify-between items-center text-[10px] text-slate-500 pt-0.5", children: [
  /* @__PURE__ */ a("span", { children: "No target budget configured" }),
  e && /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      onClick: e,
      className: "text-amber-400/80 hover:text-amber-300 flex items-center space-x-0.5",
      children: [
        /* @__PURE__ */ a(dt, { className: "w-2.5 h-2.5" }),
        /* @__PURE__ */ a("span", { children: "Set target" })
      ]
    }
  )
] }), Xn = ({
  title: e,
  icon: t,
  defaultOpen: n = !1,
  variant: r = "inline",
  expandLabel: o = "▼ Expand",
  collapseLabel: s = "▲ Hide",
  children: i,
  className: l = ""
}) => {
  const [c, u] = A(n);
  return r === "card" ? /* @__PURE__ */ d(_, { padding: "md", className: l, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        onClick: () => u((m) => !m),
        className: "w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer",
        children: [
          /* @__PURE__ */ d("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2", children: [
            t && /* @__PURE__ */ a("span", { children: t }),
            /* @__PURE__ */ a("span", { children: e })
          ] }),
          /* @__PURE__ */ a("span", { className: "text-xs text-slate-400", children: c ? s : o })
        ]
      }
    ),
    c && /* @__PURE__ */ a("div", { className: "mt-3 pt-3 border-t border-border/60", children: i })
  ] }) : /* @__PURE__ */ d("div", { className: `pt-2 border-t border-border/40 ${l}`, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        onClick: () => u((m) => !m),
        className: "bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          t && /* @__PURE__ */ a("span", { children: t }),
          /* @__PURE__ */ a("span", { className: "underline", children: e }),
          /* @__PURE__ */ a("span", { className: "text-[10px]", children: c ? "▲" : "▼" })
        ]
      }
    ),
    c && /* @__PURE__ */ a("div", { className: "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1", children: i })
  ] });
}, Je = {
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
}, Qn = ({
  title: e,
  description: t,
  confirmLabel: n = "Confirm",
  cancelLabel: r = "Cancel",
  onConfirm: o,
  onCancel: s,
  loading: i = !1,
  variant: l = "danger",
  className: c = ""
}) => {
  const u = Je[l] || Je.danger;
  return /* @__PURE__ */ d(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${u.container} ${c}`,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ a(ke, { className: `w-4 h-4 shrink-0 mt-0.5 ${u.icon}` }),
          /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ a("div", { className: `text-xs font-semibold ${u.title}`, children: e }),
            t && /* @__PURE__ */ a("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: t })
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "xs",
              onClick: s,
              disabled: i,
              children: r
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: u.confirmVariant,
              size: "xs",
              loading: i,
              onClick: o,
              children: n
            }
          )
        ] })
      ]
    }
  );
}, ea = (e) => {
  const { eyebrow: t, progressPercent: n, startLabel: r, centerLabel: o, targetLabel: s, variant: i = "blue", className: l = "" } = e;
  return /* @__PURE__ */ d(_, { className: P("bg-card/80 border-blue-500/25 animate-slide-up", l), children: [
    /* @__PURE__ */ a(Jr, { ...e, variant: i }),
    /* @__PURE__ */ a(
      pe,
      {
        value: n,
        tone: "gradient",
        variant: i,
        size: "md",
        trackClassName: "bg-background/80 my-3",
        label: `${t} progress`
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex justify-between text-xs text-slate-400", children: [
      /* @__PURE__ */ a("span", { children: r }),
      !!o && /* @__PURE__ */ a("span", { children: o }),
      /* @__PURE__ */ a("span", { children: s })
    ] })
  ] });
}, Jr = (e) => {
  const { eyebrow: t, currentValueLabel: n, deltaLabel: r, deltaPositive: o = !0 } = e, { milestoneLabel: s = "Next Milestone", milestoneValue: i, variant: l = "blue" } = e, c = me[l] || me.blue;
  return /* @__PURE__ */ d("div", { className: "flex justify-between items-center mb-2", children: [
    /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ a("span", { className: `text-xs font-bold uppercase tracking-wider ${c.eyebrow}`, children: t }),
      /* @__PURE__ */ d("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
        /* @__PURE__ */ a("span", { children: n }),
        !!r && /* @__PURE__ */ a("span", { className: `text-sm font-semibold ${o ? "text-emerald-400" : "text-rose-400"}`, children: r })
      ] })
    ] }),
    !!i && /* @__PURE__ */ d("div", { className: "text-right", children: [
      /* @__PURE__ */ a("div", { className: "text-xs text-slate-400", children: s }),
      /* @__PURE__ */ a("div", { className: "text-lg font-bold text-purple-400", children: i })
    ] })
  ] });
};
async function Yr(e) {
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
function yt(e = 2e3) {
  const [t, n] = A(null), r = j(null);
  K(() => () => {
    r.current !== null && clearTimeout(r.current);
  }, []);
  const o = z(
    async (s, i = "default") => await Yr(s) ? (n(i), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => {
      n(null), r.current = null;
    }, e), !0) : !1,
    [e]
  );
  return { copiedKey: t, copyText: o };
}
const Ye = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2"
}, Xr = ({ item: e, itemKey: t, isCopied: n, onCopy: r }) => {
  const o = typeof e.copyValue == "string" && e.copyValue.length > 0, s = e.value === null || e.value === void 0 || e.value === "";
  return /* @__PURE__ */ d(
    _,
    {
      tone: "solid",
      padding: "none",
      className: "rounded-xl shadow-none bg-background/60 border-border/60 px-3 py-2.5 flex items-start justify-between gap-2.5 min-w-0",
      children: [
        /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a("dt", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-medium truncate", children: e.label }),
          /* @__PURE__ */ a(
            "dd",
            {
              className: `m-0 mt-1 text-sm sm:text-xs text-slate-100 min-w-0 ${e.mono ? "font-mono break-all" : "break-words"}`,
              children: s ? /* @__PURE__ */ a("span", { className: "text-slate-500", children: "-" }) : e.value
            }
          )
        ] }),
        o && /* @__PURE__ */ a(
          L,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => r(e.copyValue, t),
            "aria-label": n ? `Copied ${e.label}` : `Copy ${e.label}`,
            title: n ? "Copied" : `Copy ${e.label}`,
            "data-copied": n ? "true" : "false",
            icon: n ? /* @__PURE__ */ a(lt, { className: "w-4 h-4" }) : /* @__PURE__ */ a(it, { className: "w-4 h-4" }),
            className: P(
              "min-w-[44px] min-h-[44px] p-0 shrink-0 shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
              n ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200" : "bg-card/80 border-border/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
            )
          }
        )
      ]
    }
  );
}, ta = ({
  items: e,
  columns: t = 1,
  emptyMessage: n = "No metadata available",
  className: r = ""
}) => {
  const { copiedKey: o, copyText: s } = yt();
  if (e.length === 0)
    return /* @__PURE__ */ a(
      _,
      {
        tone: "solid",
        padding: "none",
        className: P(
          "border-2 border-dashed border-border/80 bg-background/40 shadow-none px-4 py-6 text-center text-xs text-slate-400",
          r
        ),
        children: n
      }
    );
  const i = Ye[t] || Ye[1];
  return /* @__PURE__ */ a("dl", { className: `grid ${i} gap-2.5 m-0 ${r}`, children: e.map((l, c) => {
    const u = l.id || `${l.label}-${c}`;
    return /* @__PURE__ */ a(
      Xr,
      {
        item: l,
        itemKey: u,
        isCopied: o === u,
        onCopy: (m, f) => void s(m, f)
      },
      u
    );
  }) });
}, Qr = {
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  sky: "bg-sky-500/20 text-sky-300 border-sky-500/40",
  rose: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40"
}, en = {
  emerald: "success",
  sky: "info",
  rose: "error",
  amber: "warning",
  blue: "info"
}, ra = ({
  title: e,
  primaryValue: t,
  primaryUnit: n,
  secondaryValue: r,
  secondaryUnit: o,
  toggleHint: s,
  badge: i,
  variant: l = "blue",
  unitColor: c,
  glowColor: u,
  children: m,
  className: f = ""
}) => {
  const [g, b] = A(!1), p = (i == null ? void 0 : i.variant) ?? "blue", v = r !== void 0 && o !== void 0, h = c || D[l] || D.blue, x = u || Ae[l] || Ae.blue;
  return /* @__PURE__ */ d(
    _,
    {
      tone: "solid",
      padding: "none",
      className: P("p-6 shadow-xl relative overflow-hidden", f),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${x} rounded-full blur-3xl pointer-events-none`
          }
        ),
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ a("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
          i && /* @__PURE__ */ a(
            gt,
            {
              label: i.label,
              variant: en[p],
              icon: i.icon || /* @__PURE__ */ a(Gt, { className: "w-3.5 h-3.5" }),
              className: Qr[p]
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "div",
          {
            className: `text-center my-6 ${v ? "cursor-pointer select-none" : ""}`,
            onClick: () => v && b(!g),
            children: [
              /* @__PURE__ */ d("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
                g ? r : t,
                /* @__PURE__ */ a("span", { className: `text-2xl font-semibold ${h} ml-2`, children: g ? o : n })
              ] }),
              s && /* @__PURE__ */ a("p", { className: "text-xs text-slate-400 mt-1", children: s })
            ]
          }
        ),
        m
      ]
    }
  );
}, na = ({
  isOpen: e,
  onClose: t,
  title: n,
  subtitle: r,
  displayLabel: o,
  value: s,
  displayValue: i,
  unit: l,
  onChange: c,
  onSubmit: u,
  submitLabel: m = "Apply",
  loading: f = !1,
  loadingText: g = "Saving...",
  submitDisabled: b = !1,
  allowDecimals: p = !0,
  maxDecimalPlaces: v = 2,
  variant: h = "blue",
  error: x,
  children: k
}) => {
  const E = q[h] || q.blue;
  return /* @__PURE__ */ a(
    xt,
    {
      isOpen: e,
      onClose: t,
      title: n,
      subtitle: r,
      disableClose: f,
      children: /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        x && /* @__PURE__ */ a(Ht, { variant: "error", icon: "⚠️", children: x }),
        /* @__PURE__ */ a(
          Mr,
          {
            label: o,
            value: i !== void 0 ? i : s || "0",
            unit: l,
            variant: h
          }
        ),
        k,
        /* @__PURE__ */ a(
          Br,
          {
            value: s,
            onChange: c,
            allowDecimals: p,
            maxDecimalPlaces: v,
            variant: h
          }
        ),
        /* @__PURE__ */ a(
          L,
          {
            variant: E,
            size: "lg",
            fullWidth: !0,
            loading: f,
            loadingText: g,
            disabled: b,
            onClick: u,
            children: m
          }
        )
      ] })
    }
  );
}, Xe = "min-h-[44px] min-w-[44px] px-3.5 bg-background/70 shadow-none disabled:opacity-45 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60";
function tn(e, t, n, r, o) {
  const s = Number.isFinite(t) && t > 0 ? Math.floor(t) : 1, i = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0, l = Math.max(1, Math.ceil(i / s)), c = Number.isFinite(e) ? Math.floor(e) : 1, u = Math.min(Math.max(1, c), l), m = i === 0 ? 0 : (u - 1) * s + 1, f = i === 0 ? 0 : Math.min(u * s, i), g = o ? ` ${o}` : "", b = i === 0 ? `Showing 0 of 0${g}` : `Showing ${m}-${f} of ${i}${g}`;
  return {
    currentPage: u,
    totalPages: l,
    summaryText: b,
    isPrevDisabled: r || u <= 1,
    isNextDisabled: r || u >= l || i === 0
  };
}
const aa = ({
  page: e,
  pageSize: t,
  totalItems: n,
  onPageChange: r,
  loading: o = !1,
  itemLabel: s,
  className: i = ""
}) => {
  const { currentPage: l, totalPages: c, summaryText: u, isPrevDisabled: m, isNextDisabled: f } = tn(e, t, n, o, s);
  return /* @__PURE__ */ d(
    _,
    {
      as: "nav",
      "aria-label": "Pagination",
      "aria-busy": o,
      padding: "none",
      className: P(
        "w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-3.5 py-2.5",
        i
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 text-center sm:text-left tabular-nums", children: u }),
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between sm:justify-end gap-2", children: [
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => r(l - 1),
              disabled: m,
              "aria-label": "Previous page",
              icon: /* @__PURE__ */ a(_t, { className: "w-4 h-4" }),
              iconPosition: "left",
              className: Xe,
              children: "Prev"
            }
          ),
          /* @__PURE__ */ d(
            "span",
            {
              "aria-live": "polite",
              className: "inline-flex items-center justify-center gap-1.5 px-2 text-xs font-medium text-slate-200 whitespace-nowrap tabular-nums",
              children: [
                o && /* @__PURE__ */ a(Ne, { className: "w-3.5 h-3.5 animate-spin text-amber-400 shrink-0" }),
                /* @__PURE__ */ d("span", { children: [
                  "Page ",
                  l,
                  " of ",
                  c
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a(
            L,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => r(l + 1),
              disabled: f,
              "aria-label": "Next page",
              icon: /* @__PURE__ */ a(we, { className: "w-4 h-4" }),
              iconPosition: "right",
              className: Xe,
              children: "Next"
            }
          )
        ] })
      ]
    }
  );
}, rn = [
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
], nn = /\u001b\[[0-9;?]*[ -/]*[@-~]/g, an = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, sn = /[\u202a-\u202e\u2066-\u2069]/g;
function ie(e) {
  return e.replace(nn, "").replace(/\r\n?/g, `
`).replace(an, "").replace(sn, "");
}
function be(e, t, n) {
  if (e == null)
    return e;
  if (typeof e == "string")
    return ie(e);
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
      name: ie(e.name),
      message: ie(e.message)
    };
  if (n.has(e))
    return "[Circular]";
  n.add(e);
  try {
    if (Array.isArray(e))
      return e.map((o) => be(o, t, n));
    const r = {};
    for (const [o, s] of Object.entries(e))
      t.has(o.toLowerCase()) ? r[o] = "[REDACTED]" : r[o] = be(s, t, n);
    return r;
  } finally {
    n.delete(e);
  }
}
function on(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function ln(e, t) {
  if (e == null)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const n = new Set(t.map((l) => l.toLowerCase()));
  let r = "", o = "TEXT";
  if (typeof e == "string") {
    const l = ie(e), c = l.trim();
    if (!c)
      return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
    if (c.startsWith("{") || c.startsWith("["))
      try {
        const u = JSON.parse(c);
        if (u !== null && typeof u == "object") {
          const m = be(u, n, /* @__PURE__ */ new WeakSet());
          r = JSON.stringify(m, null, 2), o = "JSON";
        } else
          r = l;
      } catch {
        r = l;
      }
    else
      r = l;
  } else {
    const l = be(e, n, /* @__PURE__ */ new WeakSet());
    r = JSON.stringify(l, null, 2) ?? "", o = "JSON";
  }
  if (!r)
    return { text: "", isEmpty: !0, bytes: 0, lines: 0, formatLabel: "EMPTY" };
  const s = typeof TextEncoder < "u" ? new TextEncoder().encode(r).length : r.length, i = r.split(`
`).length;
  return {
    text: r,
    isEmpty: !1,
    bytes: s,
    lines: i,
    formatLabel: o
  };
}
const cn = ({
  title: e,
  subtitle: t,
  panelId: n,
  isExpanded: r,
  onToggle: o,
  summaryBadge: s,
  isEmpty: i,
  isCopied: l,
  onCopy: c
}) => /* @__PURE__ */ d("div", { className: "flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 min-w-0", children: [
  /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      onClick: o,
      "aria-expanded": r,
      "aria-controls": n,
      className: "flex-1 min-w-[180px] min-h-[44px] flex items-center gap-2 text-left bg-transparent border-0 p-0 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
      children: [
        r ? /* @__PURE__ */ a(zt, { className: "w-4 h-4 text-slate-400 shrink-0" }) : /* @__PURE__ */ a(we, { className: "w-4 h-4 text-slate-400 shrink-0" }),
        /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a("div", { className: "text-sm sm:text-xs font-semibold text-slate-100 truncate", children: e }),
          t && /* @__PURE__ */ a("div", { className: "text-xs text-slate-400 truncate mt-0.5", children: t })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ d("div", { className: "flex items-center gap-2 shrink-0 max-w-full", children: [
    /* @__PURE__ */ a(
      gt,
      {
        label: s,
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
        disabled: i,
        onClick: c,
        "aria-label": l ? `Copied ${e}` : `Copy ${e}`,
        "data-copied": l ? "true" : "false",
        icon: l ? /* @__PURE__ */ a(lt, { className: "w-4 h-4" }) : /* @__PURE__ */ a(it, { className: "w-4 h-4" }),
        className: P(
          "min-h-[44px] min-w-[44px] px-2.5 font-medium shadow-none disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60",
          l ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200" : "bg-background/70 border-border/70 text-slate-300 hover:text-white hover:bg-slate-800"
        ),
        children: l ? "Copied" : "Copy"
      }
    )
  ] })
] }), dn = ({
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
) }), sa = ({
  payload: e,
  title: t,
  subtitle: n,
  defaultExpanded: r = !1,
  emptyMessage: o = "No payload recorded",
  redactKeys: s = rn,
  maxHeightClassName: i = "max-h-96",
  className: l = ""
}) => {
  const [c, u] = A(r), { copiedKey: m, copyText: f } = yt(), g = St(), b = Et(() => ln(e, s), [e, s]), p = m === "payload", v = `${b.lines} ${b.lines === 1 ? "line" : "lines"}`, h = `${b.formatLabel} | ${on(b.bytes)} | ${v}`;
  return /* @__PURE__ */ d(
    _,
    {
      padding: "none",
      className: P("w-full min-w-0 max-w-full overflow-hidden", l),
      children: [
        /* @__PURE__ */ a(
          cn,
          {
            title: t,
            subtitle: n,
            panelId: g,
            isExpanded: c,
            onToggle: () => u((x) => !x),
            summaryBadge: h,
            isEmpty: b.isEmpty,
            isCopied: p,
            onCopy: () => void f(b.text, "payload")
          }
        ),
        c && /* @__PURE__ */ a(
          dn,
          {
            panelId: g,
            formatted: b,
            emptyMessage: o,
            maxHeightClassName: i
          }
        )
      ]
    }
  );
};
function oa(e = 30) {
  const t = /* @__PURE__ */ new Date(), n = /* @__PURE__ */ new Date();
  n.setDate(t.getDate() - e);
  const r = (o) => `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")}`;
  return { startDate: r(n), endDate: r(t) };
}
function la({
  period: e,
  onPeriodChange: t,
  options: n,
  customValue: r = "custom",
  startDate: o,
  endDate: s,
  onStartDateChange: i,
  onEndDateChange: l,
  variant: c = "amber",
  idPrefix: u,
  className: m = ""
}) {
  const f = Y[c] || Y.amber, g = q[c] || q.amber, b = e === r;
  return /* @__PURE__ */ d("div", { className: `flex flex-col gap-2 ${m}`, children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ a(
        _r,
        {
          options: n,
          value: b ? "" : e,
          onChange: t,
          variant: c,
          size: "xs",
          idPrefix: u
        }
      ),
      /* @__PURE__ */ a(
        L,
        {
          variant: b ? g : "outline",
          size: "xs",
          icon: /* @__PURE__ */ a(Lt, { className: "w-3 h-3" }),
          onClick: () => t(r),
          "data-testid": u ? `${u}-custom-btn` : void 0,
          children: "Custom"
        }
      )
    ] }),
    b && /* @__PURE__ */ d("div", { className: "flex items-center gap-2 flex-wrap text-xs", children: [
      /* @__PURE__ */ d("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ a("span", { children: "From" }),
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: o,
            max: s || void 0,
            onChange: (p) => i(p.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${f}`
          }
        )
      ] }),
      /* @__PURE__ */ d("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ a("span", { children: "To" }),
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: s,
            min: o || void 0,
            onChange: (p) => l(p.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${f}`
          }
        )
      ] })
    ] })
  ] });
}
const ia = ({
  message: e = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: n = "Later",
  onReload: r,
  onDismiss: o,
  className: s = ""
}) => /* @__PURE__ */ d(
  _,
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    padding: "none",
    className: P(
      "flex items-center justify-between gap-2 p-3 px-4 rounded-xl border-blue-500/40 bg-slate-900/90 shadow-xl animate-slide-up",
      s
    ),
    children: [
      /* @__PURE__ */ a("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a(
          L,
          {
            variant: "blue",
            size: "sm",
            onClick: r,
            className: "rounded-lg font-semibold shadow shrink-0",
            children: t
          }
        ),
        /* @__PURE__ */ a(
          L,
          {
            variant: "secondary",
            size: "sm",
            onClick: o,
            className: "px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-medium border-slate-700/60 shadow-none shrink-0",
            children: n
          }
        )
      ] })
    ]
  }
), vt = 90, un = 250;
function Z(e) {
  const t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0, n = Math.floor(t / 60), r = t % 60;
  return `${n}:${r.toString().padStart(2, "0")}`;
}
function Qe(e, t = vt) {
  return !Number.isFinite(e) || e <= 0 ? t : Math.max(1, Math.round(e));
}
function xe(e, t = Date.now()) {
  return Math.max(0, Math.ceil((e - t) / 1e3));
}
function mn() {
  var e;
  try {
    typeof navigator < "u" && ((e = navigator.vibrate) == null || e.call(navigator, [200, 100, 200]));
  } catch {
  }
}
function bn() {
  try {
    if (typeof window > "u") return;
    const e = window.AudioContext || window.webkitAudioContext;
    if (!e) return;
    const t = new e(), n = t.currentTime, r = t.createOscillator(), o = t.createGain();
    r.type = "sine", r.frequency.setValueAtTime(880, n), o.gain.setValueAtTime(1e-3, n), o.gain.exponentialRampToValueAtTime(0.15, n + 0.02), o.gain.exponentialRampToValueAtTime(1e-4, n + 0.35), r.connect(o), o.connect(t.destination), r.onended = () => {
      t.close().catch(() => {
      });
    }, r.start(n), r.stop(n + 0.36);
  } catch {
  }
}
function pn() {
  mn(), bn();
}
function ca(e = vt) {
  const t = Qe(e), [n, r] = A(t), [o, s] = A(0), [i, l] = A(0), [c, u] = A(!1), [m, f] = A(!1), [g, b] = A(!1), p = j(null), v = j(0), h = j(t), x = j(!1), k = j(!1), E = j(!1), T = j(!1), M = z((y) => {
    p.current = null, v.current = 0, x.current = !1, k.current = !1, E.current = !0, l(0), u(!1), f(!1), b(!0), y && !T.current && (T.current = !0, pn());
  }, []), O = z(() => {
    const y = p.current;
    if (y === null || !x.current)
      return;
    const C = xe(y);
    C <= 0 ? M(!0) : l(C);
  }, [M]);
  K(() => {
    if (!c || typeof window > "u" || typeof document > "u")
      return;
    O();
    const y = window.setInterval(O, un), C = () => {
      document.visibilityState === "visible" && O();
    };
    return document.addEventListener("visibilitychange", C), () => {
      window.clearInterval(y), document.removeEventListener("visibilitychange", C);
    };
  }, [c, O]);
  const V = z((y) => {
    const C = y !== void 0 ? Qe(y, h.current) : h.current;
    y !== void 0 && (h.current = C, r(C)), p.current = Date.now() + C * 1e3, v.current = C, x.current = !0, k.current = !1, E.current = !1, T.current = !1, s(C), l(C), u(!0), f(!1), b(!1);
  }, []), U = z(() => {
    if (!x.current || p.current === null)
      return;
    const y = xe(p.current);
    if (y <= 0) {
      M(!0);
      return;
    }
    p.current = null, v.current = y, x.current = !1, k.current = !0, E.current = !1, l(y), u(!1), f(!0), b(!1);
  }, [M]), N = z(() => {
    if (!k.current || x.current)
      return;
    const y = v.current;
    if (y <= 0) {
      M(!0);
      return;
    }
    p.current = Date.now() + y * 1e3, x.current = !0, k.current = !1, E.current = !1, l(y), u(!0), f(!1), b(!1);
  }, [M]), $ = z(
    (y) => {
      if (!(!Number.isFinite(y) || y === 0)) {
        if (x.current && p.current !== null) {
          const C = p.current + y * 1e3, B = xe(C);
          if (B <= 0) {
            M(!0);
            return;
          }
          p.current = C, v.current = B, l(B), s((se) => Math.max(se, B));
          return;
        }
        if (k.current) {
          const C = Math.max(0, v.current + Math.round(y));
          if (C <= 0) {
            M(!0);
            return;
          }
          v.current = C, l(C), s((B) => Math.max(B, C));
          return;
        }
        if (E.current && y > 0) {
          const C = Math.max(1, Math.round(y));
          p.current = Date.now() + C * 1e3, v.current = C, x.current = !0, k.current = !1, E.current = !1, T.current = !1, l(C), s((B) => Math.max(B, C)), u(!0), f(!1), b(!1);
        }
      }
    },
    [M]
  ), I = z(() => {
    p.current = null, v.current = 0, x.current = !1, k.current = !1, E.current = !1, T.current = !1, l(0), s(0), u(!1), f(!1), b(!1);
  }, []);
  return {
    remainingSeconds: i,
    totalSeconds: o,
    isRunning: c,
    isPaused: m,
    isComplete: g,
    activePresetSeconds: n,
    startTimer: V,
    pauseTimer: U,
    resumeTimer: N,
    adjustTimer: $,
    dismissTimer: I
  };
}
const fn = [60, 90, 120, 180], da = (e) => {
  const { remainingSeconds: t, totalSeconds: n, isRunning: r, isPaused: o, isComplete: s } = e, { presets: i = fn, variant: l = "blue", className: c = "" } = e;
  if (!r && !o && !s)
    return /* @__PURE__ */ a(hn, { presets: i, variant: l, onStart: e.onStart, className: c });
  const u = n > 0 ? n : 0, m = Math.max(0, t), f = s ? "emerald" : o ? "amber" : "gradient", g = s ? 100 : u > 0 ? u - m : 0, b = s ? 100 : u > 0 ? u : 100;
  return /* @__PURE__ */ d(
    _,
    {
      "data-testid": "rest-timer-bar",
      role: "region",
      "aria-label": "Rest timer",
      padding: "none",
      className: P("p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up", wn(s, o), c),
      children: [
        /* @__PURE__ */ a(xn, { ...e, safeTotal: u, clampedRemaining: m, variant: l }),
        /* @__PURE__ */ a(pe, { value: g, max: b, tone: f, variant: l, size: "sm", transition: "linear", trackClassName: "bg-background/90", label: "Rest progress" }),
        /* @__PURE__ */ a(vn, { clampedRemaining: m, totalSeconds: n, isComplete: s, presets: i, variant: l, onStart: e.onStart, onAdjust: e.onAdjust })
      ]
    }
  );
}, hn = ({ presets: e, variant: t, onStart: n, className: r }) => {
  const o = D[t] || D.blue, s = ue[t] || ue.blue;
  return /* @__PURE__ */ d(
    _,
    {
      "data-testid": "rest-timer-bar",
      padding: "none",
      className: P("bg-card/90 border-border px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2", r),
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ a("span", { className: `p-1.5 rounded-lg border shrink-0 ${s.container}`, children: /* @__PURE__ */ a(ut, { className: `w-4 h-4 ${o}` }) }),
          /* @__PURE__ */ a("span", { className: "text-xs font-semibold text-slate-200 whitespace-nowrap", children: "Rest Timer" })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 flex-wrap", children: e.map((i) => /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => n(i),
            "aria-label": `Start ${Z(i)} rest timer`,
            className: "px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95",
            children: Z(i)
          },
          i
        )) })
      ]
    }
  );
}, xn = (e) => /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2", children: [
  /* @__PURE__ */ a(
    gn,
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
    yn,
    {
      isRunning: e.isRunning,
      isComplete: e.isComplete,
      variant: e.variant,
      onPause: e.onPause,
      onResume: e.onResume,
      onDismiss: e.onDismiss
    }
  )
] }), gn = (e) => {
  const { safeTotal: t, clampedRemaining: n, isRunning: r, isPaused: o, isComplete: s, variant: i } = e, l = D[i] || D.blue, c = ce[i] || ce.blue, u = o ? "Paused" : t > 0 ? `of ${Z(t)}` : "Rest";
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-2.5 min-w-0", children: [
    s ? /* @__PURE__ */ a(Bt, { className: "w-5 h-5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ a(ut, { className: `w-5 h-5 shrink-0 ${l} ${r ? "animate-pulse" : ""}` }),
    /* @__PURE__ */ a("div", { className: "min-w-0", children: s ? /* @__PURE__ */ d(ve, { children: [
      /* @__PURE__ */ a("div", { className: "text-xs font-bold text-emerald-300 leading-snug", children: "Rest Complete - Ready for next set" }),
      /* @__PURE__ */ a("div", { "data-testid": "rest-timer-countdown", className: "text-lg font-black tabular-nums text-emerald-400 leading-tight", children: Z(n) })
    ] }) : /* @__PURE__ */ d("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ a("span", { "data-testid": "rest-timer-countdown", className: `text-2xl font-black tabular-nums tracking-tight leading-none ${o ? "text-amber-300" : c}`, children: Z(n) }),
      /* @__PURE__ */ a("span", { className: "text-xs font-medium text-slate-400 whitespace-nowrap", children: u })
    ] }) })
  ] });
}, yn = (e) => {
  const { isRunning: t, isComplete: n, variant: r, onPause: o, onResume: s, onDismiss: i } = e, l = q[r] || q.blue;
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 shrink-0", children: [
    !n && /* @__PURE__ */ a(
      L,
      {
        variant: l,
        size: "xs",
        icon: t ? /* @__PURE__ */ a(Dt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ a(Ot, { className: "w-3.5 h-3.5" }),
        onClick: t ? o : s,
        "aria-label": t ? "Pause rest timer" : "Resume rest timer",
        children: t ? "Pause" : "Resume"
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        variant: n ? "emerald" : "ghost",
        size: "xs",
        icon: /* @__PURE__ */ a(ae, { className: "w-3.5 h-3.5" }),
        onClick: i,
        "aria-label": n ? "Dismiss rest timer" : "Skip rest timer",
        children: n ? "Dismiss" : "Skip"
      }
    )
  ] });
}, vn = (e) => {
  const { clampedRemaining: t, totalSeconds: n, isComplete: r, presets: o, variant: s, onStart: i, onAdjust: l } = e, c = de[s] || de.blue;
  return /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ a(L, { variant: "secondary", size: "xs", disabled: r || t <= 0, onClick: () => l(-15), "aria-label": "Subtract 15 seconds", className: "tabular-nums", children: "-15s" }),
      /* @__PURE__ */ a(L, { variant: "secondary", size: "xs", onClick: () => l(15), "aria-label": "Add 15 seconds", className: "tabular-nums", children: "+15s" })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-1 flex-wrap", children: o.map((u) => {
      const m = !r && n === u;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => i(u),
          "aria-label": `Restart ${Z(u)} rest timer`,
          className: `px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${m ? c : "bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200"}`,
          children: Z(u)
        },
        u
      );
    }) })
  ] });
};
function wn(e, t) {
  return e ? "border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20" : t ? "border-amber-500/40 bg-slate-900/95" : "border-border bg-slate-900/95";
}
const ua = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: n,
  icon: r,
  className: o = "",
  testId: s = "session-expired-banner"
}) => {
  const i = (l) => {
    l && l.stopPropagation(), n ? n() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ d(
    _,
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": s,
      onClick: i,
      padding: "none",
      className: P(
        "flex items-center justify-between p-3.5 px-4 rounded-xl border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-rose-950/20 transition-all animate-slide-up",
        o
      ),
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          r ? /* @__PURE__ */ a("span", { className: "shrink-0 flex items-center", children: r }) : /* @__PURE__ */ a(ke, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ a("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ a(
          L,
          {
            variant: "rose",
            size: "sm",
            onClick: i,
            className: "rounded-lg font-semibold shadow-md shrink-0",
            children: t
          }
        )
      ]
    }
  );
}, Nn = {
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
}, ma = ({
  title: e,
  value: t,
  subtitle: n,
  icon: r,
  variant: o = "default",
  className: s = "",
  onClick: i
}) => {
  const l = Nn[o], c = !!i;
  return /* @__PURE__ */ d(
    _,
    {
      tone: "solid",
      padding: "none",
      onClick: i,
      className: P(
        "p-2.5 sm:p-3 rounded-xl shadow-none transition-all duration-150",
        l.container,
        c && "hover:border-border",
        s
      ),
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          r && /* @__PURE__ */ a("span", { className: `mr-1 shrink-0 ${l.icon}`, children: r }),
          /* @__PURE__ */ a("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: e })
        ] }),
        /* @__PURE__ */ a("div", { className: `text-sm sm:text-base font-bold truncate ${l.value}`, children: t }),
        n && /* @__PURE__ */ a("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: n })
      ]
    }
  );
}, et = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, kn = "min-w-0 px-2.5 py-2 rounded-xl bg-background/60 border border-border/60", Cn = "w-full min-h-[44px] flex flex-col items-stretch justify-center text-center cursor-pointer transition-[border-color,background-color,box-shadow,transform] hover:border-amber-500/50 hover:bg-background/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 group", ba = ({
  items: e,
  columns: t = 3,
  className: n = ""
}) => {
  const r = et[t] || et[3];
  return /* @__PURE__ */ a("div", { className: `grid ${r} gap-2 text-center ${n}`, children: e.map((o, s) => /* @__PURE__ */ a(
    Sn,
    {
      item: o
    },
    o.id || `${o.label}-${s}`
  )) });
}, Sn = ({ item: e }) => typeof e.onClick == "function" ? /* @__PURE__ */ a(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    "aria-label": e.ariaLabel,
    "data-testid": e.testId,
    className: `${kn} ${Cn}`,
    children: /* @__PURE__ */ a(tt, { item: e, isInteractive: !0 })
  }
) : /* @__PURE__ */ a(
  _,
  {
    tone: "solid",
    padding: "none",
    "data-testid": e.testId,
    className: "min-w-0 px-2.5 py-2 rounded-xl shadow-none bg-background/60 border-border/60",
    children: /* @__PURE__ */ a(tt, { item: e, isInteractive: !1 })
  }
), tt = ({
  item: e,
  isInteractive: t
}) => /* @__PURE__ */ d(ve, { children: [
  /* @__PURE__ */ d("span", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 min-w-0", children: [
    e.icon && /* @__PURE__ */ a("span", { className: "shrink-0", children: e.icon }),
    /* @__PURE__ */ a("span", { className: "truncate", children: e.label }),
    t && /* @__PURE__ */ a(
      we,
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
] }), En = 60 * 60 * 1e3;
function pa(e = {}) {
  const {
    pollIntervalMs: t = En,
    externalNeedRefresh: n,
    onExternalNeedRefreshChange: r,
    updateServiceWorker: o,
    registration: s
  } = e, i = j(
    s ?? void 0
  ), l = j(!1), c = j(void 0), [u, m] = A(!1), [f, g] = A(!1), [b, p] = A(null), v = n ?? u, h = z(
    (N) => {
      m(N), r == null || r(N);
    },
    [r]
  );
  K(() => {
    s && (i.current = s, s.waiting && h(!0));
  }, [s, h]);
  const x = z((N) => {
    p(N), c.current !== void 0 && typeof window < "u" && window.clearTimeout(c.current), typeof window < "u" && (c.current = window.setTimeout(() => {
      p(null);
    }, 3500));
  }, []), k = z(async () => {
    if (i.current)
      return i.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const N = await navigator.serviceWorker.getRegistration();
      if (N)
        return i.current = N, N;
    }
  }, []), E = z(
    async (N) => {
      if (await N.update(), N.waiting)
        return h(!0), !0;
      if (N.installing) {
        const $ = N.installing;
        if (await new Promise((I) => {
          const y = () => {
            ($.state === "installed" || $.state === "activated" || $.state === "redundant") && ($.removeEventListener("statechange", y), I());
          };
          $.addEventListener("statechange", y);
        }), N.waiting)
          return h(!0), !0;
      }
      return !1;
    },
    [h]
  ), T = z(async () => {
    try {
      const N = await k();
      if (!N) return;
      await E(N);
    } catch {
    }
  }, [k, E]), M = z(async () => {
    g(!0), p(null);
    try {
      const N = await k();
      if (!N) {
        x("Up to date");
        return;
      }
      const $ = await E(N);
      x($ ? "Update ready" : "Up to date");
    } catch {
      x("Update check failed");
    } finally {
      g(!1);
    }
  }, [k, E, x]), O = z(async () => {
    l.current = !0, await ne();
    const N = await k();
    N != null && N.waiting && N.waiting.postMessage({ type: "SKIP_WAITING" }), o ? await o(!0) : typeof window < "u" && window.location.reload();
  }, [k, o]), V = z(() => {
    h(!1);
  }, [h]), U = z(async () => {
    await Wt();
  }, []);
  return K(() => {
    if (typeof window > "u" || typeof document > "u") return;
    ne(), T();
    const N = () => {
      document.visibilityState === "visible" && T();
    };
    document.addEventListener("visibilitychange", N);
    const $ = window.setInterval(() => {
      T();
    }, t);
    return () => {
      document.removeEventListener("visibilitychange", N), window.clearInterval($), c.current !== void 0 && window.clearTimeout(c.current);
    };
  }, [T, t]), K(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let N = !1;
    const $ = navigator.serviceWorker.controller !== null, I = () => {
      !l.current && !$ || N || (N = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", I), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", I);
    };
  }, []), {
    needRefresh: v,
    checkingForUpdate: f,
    updateCheckMessage: b,
    checkForUpdates: M,
    applyUpdate: O,
    dismissUpdate: V,
    hardReset: U
  };
}
const Tn = "/api/client-errors", $n = 25, re = /* @__PURE__ */ new Set();
let wt = Tn, rt = !1;
async function nt(e, t, n) {
  try {
    let r = "Unknown error", o, s = "Error";
    if (e instanceof Error)
      r = e.message || e.name, o = e.stack, s = e.name || "Error";
    else if (typeof e == "string")
      r = e;
    else if (e && typeof e == "object") {
      const p = e;
      r = p.message || JSON.stringify(e), o = p.stack, s = p.name || "Object";
    }
    const i = (t == null ? void 0 : t.source) || void 0, l = typeof (t == null ? void 0 : t.lineno) == "number" ? t.lineno : void 0, c = typeof (t == null ? void 0 : t.colno) == "number" ? t.colno : void 0, u = (t == null ? void 0 : t.error_type) || s, m = `${r}:${i || ""}:${l || 0}:${u}`;
    if (re.has(m))
      return;
    re.add(m);
    const f = (n == null ? void 0 : n.maxRecentErrors) ?? $n;
    if (re.size > f) {
      const p = re.values().next().value;
      p && re.delete(p);
    }
    const g = {
      message: r,
      error_type: u,
      source: i,
      lineno: l,
      colno: c,
      stack: o,
      url: typeof window < "u" ? window.location.href : void 0,
      user_agent: typeof navigator < "u" ? navigator.userAgent : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      extra: t || {}
    }, b = (n == null ? void 0 : n.endpoint) || wt;
    typeof fetch < "u" && await fetch(b, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    }).catch(() => {
    });
  } catch {
  }
}
function fa(e) {
  e != null && e.endpoint && (wt = e.endpoint), !(rt || typeof window > "u") && (rt = !0, window.addEventListener("error", (t) => {
    nt(
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
    nt(
      t.reason,
      {
        error_type: "UnhandledRejection"
      },
      e
    );
  }));
}
function ha(e, t = {}) {
  const {
    currency: n = "$",
    locale: r = "en-NZ",
    maximumFractionDigits: o = 0,
    minimumFractionDigits: s = 0,
    showPlusSign: i = !1
  } = t, l = Number.isFinite(e) ? e : 0, c = Math.abs(l).toLocaleString(r, {
    minimumFractionDigits: s,
    maximumFractionDigits: o
  });
  return l < 0 ? `-${n}${c}` : i && l > 0 ? `+${n}${c}` : `${n}${c}`;
}
function xa(e = /* @__PURE__ */ new Date()) {
  var s, i, l;
  const t = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(e), n = ((s = t.find((c) => c.type === "year")) == null ? void 0 : s.value) ?? "1970", r = ((i = t.find((c) => c.type === "month")) == null ? void 0 : i.value) ?? "01", o = ((l = t.find((c) => c.type === "day")) == null ? void 0 : l.value) ?? "01";
  return `${n}-${r}-${o}`;
}
function ga(e = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(e);
}
class Nt extends Error {
  constructor(n = "Authentik session expired", r) {
    super(n);
    le(this, "status");
    le(this, "contentType");
    le(this, "url");
    this.name = "SessionExpiredError", this.status = r == null ? void 0 : r.status, this.contentType = r == null ? void 0 : r.contentType, this.url = r == null ? void 0 : r.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function ya(e) {
  return e instanceof Nt || e instanceof Error && e.name === "SessionExpiredError";
}
function Rn(e) {
  const t = e.status, n = (e.headers.get("content-type") || "").toLowerCase(), r = e.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || e.redirected || n.includes("text/html") || r.includes("/outpost.goauthentik.io/") || r.includes("/flows/executor/"));
}
function Mn(e) {
  if (Rn(e)) {
    const t = e.headers.get("content-type") || "";
    throw new Nt(
      `Authentik session expired (status: ${e.status}, content-type: ${t})`,
      {
        status: e.status,
        contentType: t,
        url: e.url
      }
    );
  }
}
async function va(e, t) {
  const { checkSessionExpiry: n = !0, ...r } = t || {}, o = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...r
  });
  return n && Mn(o), o;
}
export {
  Zn as AiSynthesizerModal,
  Ht as AlertBanner,
  Jn as AllowanceProgressBar,
  Bn as AppHeader,
  _n as AppShell,
  In as BottomNav,
  Yn as BudgetProgressRow,
  L as Button,
  jn as ChipSelector,
  Xn as CollapsibleSection,
  Qn as ConfirmActionBox,
  fn as DEFAULT_REST_TIMER_PRESETS,
  Dn as EmptyState,
  On as FileDropzone,
  _ as GlassCard,
  ea as GoalProgressCard,
  ta as KeyValueList,
  Vn as LoadingState,
  ra as MetricHero,
  xt as Modal,
  Fn as MultiSegmentBar,
  Mr as NumberInputDisplay,
  na as NumericKeypadModal,
  Gn as OptionCardGroup,
  aa as PaginationBar,
  sa as PayloadViewer,
  la as PeriodFilterBar,
  pe as ProgressBar,
  ia as PwaUpdateBanner,
  Un as RangeSlider,
  da as RestTimerBar,
  En as SW_UPDATE_POLL_INTERVAL_MS,
  Wn as SearchInput,
  Hn as SectionHeader,
  _r as SegmentedControl,
  Kn as SelectableCard,
  ua as SessionExpiredBanner,
  Nt as SessionExpiredError,
  ma as StatCard,
  gt as StatusBadge,
  ba as SummaryMetricGrid,
  Te as THEME_ACTION_TEXT,
  Re as THEME_ACTIVE_TAB,
  Me as THEME_BOTTOM_NAV_ACTIVE,
  $e as THEME_BRAND_BADGE,
  q as THEME_BUTTON_VARIANT,
  ue as THEME_CALLOUT_BOX,
  Pe as THEME_DROPZONE_ACTIVE,
  Y as THEME_FOCUS_BORDER,
  Ae as THEME_GLOW_BG,
  me as THEME_GOAL_GRADIENT,
  Le as THEME_RING_SELECTED,
  de as THEME_SEGMENT_ACTIVE,
  D as THEME_TEXT_COLORS,
  ce as THEME_VALUE_COLORS,
  Br as TactileKeypad,
  qn as TagPillList,
  Mn as assertSessionNotExpired,
  va as authFetch,
  zr as clampProgressPercent,
  ne as clearBrowserCaches,
  Yr as copyToClipboard,
  xa as formatAucklandDate,
  ga as formatAucklandTime,
  ha as formatCurrency,
  Z as formatRestTime,
  Vr as getAllowanceThresholdState,
  oa as getDefaultCustomRange,
  fa as initGlobalErrorReporter,
  ya as isSessionExpiredError,
  Rn as isSessionExpiredResponse,
  Rr as normalizeSegments,
  Ir as normalizeTagToken,
  nt as reportClientError,
  Wt as resetClientCacheAndReload,
  Ve as resetMobileViewportZoom,
  Ut as unregisterServiceWorkers,
  yt as useCopyFeedback,
  pa as usePwaUpdate,
  ca as useRestTimer
};
//# sourceMappingURL=index.js.map
