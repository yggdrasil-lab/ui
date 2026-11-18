var Ie = Object.defineProperty;
var ze = (r, t, s) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var G = (r, t, s) => ze(r, typeof t != "symbol" ? t + "" : t, s);
import { jsxs as i, jsx as e, Fragment as Se } from "react/jsx-runtime";
import Me, { forwardRef as Te, createElement as Y, useRef as L, useEffect as F, useState as M, useCallback as R } from "react";
import { createPortal as Oe } from "react-dom";
const j = {
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
}, ee = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, te = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white"
}, re = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow"
}, ae = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, se = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, ne = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, le = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30"
}, K = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm"
}, H = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500"
}, q = {
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
}, X = {
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
}, I = {
  amber: "amber",
  blue: "blue",
  emerald: "emerald",
  purple: "blue",
  slate: "secondary"
}, Mt = ({
  header: r,
  bottomNav: t,
  children: s,
  className: a = ""
}) => /* @__PURE__ */ i("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  r,
  /* @__PURE__ */ e("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: s }),
  t
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Re = (...r) => r.filter((t, s, a) => !!t && t.trim() !== "" && a.indexOf(t) === s).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var He = {
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
const Ue = Te(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: n,
    iconNode: o,
    ...d
  }, c) => Y(
    "svg",
    {
      ref: c,
      ...He,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: a ? Number(s) * 24 / Number(t) : s,
      className: Re("lucide", l),
      ...d
    },
    [
      ...o.map(([m, u]) => Y(m, u)),
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
const T = (r, t) => {
  const s = Te(
    ({ className: a, ...l }, n) => Y(Ue, {
      ref: n,
      iconNode: t,
      className: Re(`lucide-${Fe(r)}`, a),
      ...l
    })
  );
  return s.displayName = `${r}`, s;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = T("ArrowRightLeft", [
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
const We = T("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = T("Calendar", [
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
const Ze = T("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = T("Delete", [
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
const qe = T("FileText", [
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
const Ae = T("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = T("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = T("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = T("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = T("RefreshCw", [
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
const De = T("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = T("Sparkles", [
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
const ie = T("Target", [
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
const oe = T("Timer", [
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
const Q = T("TriangleAlert", [
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
const W = T("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
async function V() {
  if (typeof window > "u" || !("caches" in window) || !window.caches || typeof window.caches.keys != "function" || typeof window.caches.delete != "function")
    return 0;
  try {
    const r = await window.caches.keys();
    return (await Promise.allSettled(
      r.map((s) => window.caches.delete(s))
    )).filter(
      (s) => s.status === "fulfilled" && s.value === !0
    ).length;
  } catch {
    return 0;
  }
}
async function tt() {
  let r = 0;
  try {
    if (typeof navigator < "u" && "serviceWorker" in navigator && navigator.serviceWorker && typeof navigator.serviceWorker.getRegistrations == "function") {
      const t = await navigator.serviceWorker.getRegistrations();
      r = (await Promise.allSettled(
        t.map(
          (a) => typeof (a == null ? void 0 : a.unregister) == "function" ? a.unregister() : Promise.resolve(!1)
        )
      )).filter(
        (a) => a.status === "fulfilled" && a.value === !0
      ).length;
    }
  } catch {
    r = 0;
  }
  return await V(), r;
}
async function rt() {
  var r;
  await tt(), await V(), typeof window < "u" && typeof ((r = window.location) == null ? void 0 : r.reload) == "function" && window.location.reload();
}
const Tt = ({
  brandInitial: r,
  brandIcon: t,
  brandColor: s,
  variant: a = "blue",
  title: l,
  subtitle: n,
  tabs: o,
  activeTab: d,
  activeTabClass: c,
  onChangeTab: m,
  onRefresh: u,
  isRefreshing: x = !1,
  actions: v,
  className: b = ""
}) => {
  const p = s || te[a] || te.blue, y = c || re[a] || re.blue, f = j[a] || j.blue;
  return /* @__PURE__ */ e(
    "header",
    {
      className: `border-b border-border/60 bg-card/95 backdrop-blur-md sticky top-0 z-40 w-full pt-safe ${b}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ i("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-3", children: [
          (r || t) && /* @__PURE__ */ e("div", { className: `w-8 h-8 rounded-xl ${p} flex items-center justify-center font-black text-sm shadow-md`, children: t || r }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: l }),
            n && /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: n })
          ] })
        ] }),
        o && o.length > 0 && /* @__PURE__ */ e("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: o.map((h) => {
          const w = d === h.id;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => m == null ? void 0 : m(h.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${w ? y : "text-slate-400 hover:text-slate-200"}`,
              children: [
                h.icon,
                /* @__PURE__ */ e("span", { children: h.label })
              ]
            },
            h.id
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          v,
          u && /* @__PURE__ */ e(
            "button",
            {
              onClick: () => {
                V(), u();
              },
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ e(
                Qe,
                {
                  className: `w-3.5 h-3.5 ${x ? `animate-spin ${f}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, Rt = ({
  tabs: r,
  activeTab: t,
  onChangeTab: s,
  variant: a = "blue",
  activeTabClass: l,
  hideOnDesktop: n = !1,
  className: o = ""
}) => {
  const d = n ? "block lg:hidden" : "block", c = l || ae[a] || ae.blue;
  return /* @__PURE__ */ e(
    "nav",
    {
      className: `${d} fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${o}`,
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
      children: /* @__PURE__ */ e(
        "div",
        {
          className: "max-w-lg mx-auto grid gap-1 p-2",
          style: { gridTemplateColumns: `repeat(${r.length}, minmax(0, 1fr))` },
          children: r.map((m) => {
            const u = t === m.id;
            return /* @__PURE__ */ i(
              "button",
              {
                onClick: () => s(m.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${u ? c : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": m.ariaLabel || m.label,
                children: [
                  /* @__PURE__ */ i("div", { className: "relative flex items-center justify-center", children: [
                    m.icon,
                    m.badgeDot && /* @__PURE__ */ e(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] truncate max-w-full tracking-tight", children: m.label })
                ]
              },
              m.id
            );
          })
        }
      )
    }
  );
}, at = ({
  value: r,
  onChange: t,
  onClear: s,
  maxDecimalPlaces: a = 2,
  variant: l = "blue",
  actionColor: n,
  allowDecimals: o = !0,
  className: d = ""
}) => {
  const c = (b) => {
    if (b === ".") {
      if (!o || r.includes(".")) return;
      t(r === "" ? "0." : r + ".");
      return;
    }
    if (r.includes(".")) {
      const p = r.split(".");
      if (p[1] && p[1].length >= a) return;
    }
    t(r === "0" ? b : r + b);
  }, m = () => {
    r.length <= 1 ? t("") : t(r.slice(0, -1));
  }, u = () => {
    s ? s() : t("");
  }, x = n || ee[l] || ee.blue, v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", o ? "." : "", "0"];
  return /* @__PURE__ */ i("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${d}`, children: [
    v.map((b, p) => b ? /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => c(b),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: b
      },
      b
    ) : /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: u,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${x} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${p}`
    )),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: m,
        onDoubleClick: u,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${x} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ e(Ke, { className: "w-5 h-5" })
      }
    )
  ] });
}, st = ({
  label: r,
  value: t,
  unit: s,
  variant: a = "blue",
  valueColor: l,
  className: n = ""
}) => {
  const o = l || Z[a] || Z.blue;
  return /* @__PURE__ */ i("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ e("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: r }),
    /* @__PURE__ */ i("div", { className: `text-4xl font-black ${o} tracking-tight`, children: [
      t || "0",
      s && /* @__PURE__ */ e("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: s })
    ] })
  ] });
}, de = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover", nt = "width=device-width, initial-scale=1.0, viewport-fit=cover";
function ce() {
  if (typeof document > "u" || typeof window > "u")
    return;
  const r = document.activeElement;
  typeof HTMLElement < "u" && r instanceof HTMLElement && r.blur();
  const t = document.querySelector('meta[name="viewport"]');
  t && ((t.getAttribute("content") ?? "") === de && t.setAttribute("content", nt), t.setAttribute("content", de)), window.scrollTo({ left: 0, top: window.scrollY });
}
const Le = ({
  isOpen: r,
  onClose: t,
  title: s,
  subtitle: a,
  headerIcon: l,
  disableClose: n = !1,
  children: o,
  className: d = ""
}) => {
  const c = L(!1);
  if (F(() => (r ? (c.current = !0, document.body.style.overflow = "hidden") : (document.body.style.overflow = "", c.current && (c.current = !1, ce())), () => {
    document.body.style.overflow = "";
  }), [r]), F(() => () => {
    c.current && (c.current = !1, ce());
  }, []), F(() => {
    if (!r) return;
    const u = (x) => {
      x.key === "Escape" && !n && t();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [r, t, n]), !r) return null;
  const m = /* @__PURE__ */ e(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (u) => {
        u.target === u.currentTarget && !n && t();
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          className: `modal-card modal-content w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe ${d}`,
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
              s ? /* @__PURE__ */ i("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  l && /* @__PURE__ */ e("span", { className: "text-lg leading-none", children: l }),
                  /* @__PURE__ */ e("h2", { className: "text-base font-bold text-slate-100 m-0", children: s })
                ] }),
                a && /* @__PURE__ */ e("p", { className: "text-xs text-sky-400 m-0", children: a })
              ] }) : /* @__PURE__ */ e("div", {}),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: t,
                  disabled: n,
                  className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors disabled:opacity-50",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ e(W, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: o })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? Oe(m, document.body) : m;
}, me = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, ue = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, lt = ({
  variant: r = "info",
  title: t,
  children: s,
  icon: a,
  action: l,
  role: n = "alert",
  className: o = ""
}) => {
  const d = me[r] || me.info, c = ue[r] || ue.info;
  return /* @__PURE__ */ i(
    "div",
    {
      role: n,
      className: `rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${d} ${o}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: a }),
          /* @__PURE__ */ i("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            t && /* @__PURE__ */ e("div", { className: `font-semibold mb-0.5 ${c}`, children: t }),
            s && /* @__PURE__ */ e("div", { className: "opacity-95", children: s })
          ] })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "shrink-0 self-center", children: l })
      ]
    }
  );
}, it = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, ot = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, A = Me.forwardRef(
  ({
    children: r,
    variant: t = "secondary",
    size: s = "sm",
    icon: a,
    iconPosition: l = "left",
    loading: n = !1,
    loadingText: o,
    fullWidth: d = !1,
    disabled: c = !1,
    className: m = "",
    type: u = "button",
    ...x
  }, v) => /* @__PURE__ */ i(
    "button",
    {
      ref: v,
      type: u,
      disabled: c || n,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${it[t]} ${ot[s]} ${d ? "w-full" : ""} ${m}`,
      ...x,
      children: [
        n ? /* @__PURE__ */ e(Ae, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && l === "left" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ e("span", { children: n && o ? o : r }),
        !n && a && l === "right" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
A.displayName = "Button";
const At = ({
  isOpen: r,
  onClose: t,
  title: s,
  subtitle: a,
  displayLabel: l,
  value: n,
  displayValue: o,
  unit: d,
  onChange: c,
  onSubmit: m,
  submitLabel: u = "Apply",
  loading: x = !1,
  loadingText: v = "Saving...",
  submitDisabled: b = !1,
  allowDecimals: p = !0,
  maxDecimalPlaces: y = 2,
  variant: f = "blue",
  error: h,
  children: w
}) => {
  const S = I[f] || I.blue;
  return /* @__PURE__ */ e(
    Le,
    {
      isOpen: r,
      onClose: t,
      title: s,
      subtitle: a,
      disableClose: x,
      children: /* @__PURE__ */ i("div", { className: "space-y-4", children: [
        h && /* @__PURE__ */ e(lt, { variant: "error", icon: "⚠️", children: h }),
        /* @__PURE__ */ e(
          st,
          {
            label: l,
            value: o !== void 0 ? o : n || "0",
            unit: d,
            variant: f
          }
        ),
        w,
        /* @__PURE__ */ e(
          at,
          {
            value: n,
            onChange: c,
            allowDecimals: p,
            maxDecimalPlaces: y,
            variant: f
          }
        ),
        /* @__PURE__ */ e(
          A,
          {
            variant: S,
            size: "lg",
            fullWidth: !0,
            loading: x,
            loadingText: v,
            disabled: b,
            onClick: m,
            children: u
          }
        )
      ] })
    }
  );
}, Dt = ({
  value: r,
  onChange: t,
  placeholder: s = "Search...",
  variant: a = "amber",
  rightSlot: l,
  className: n = "",
  "data-testid": o
}) => {
  const d = H[a] || H.amber;
  return /* @__PURE__ */ i("div", { className: `flex items-center gap-2 ${n}`, children: [
    /* @__PURE__ */ i("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ e(De, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: r,
          onChange: (c) => t(c.target.value),
          placeholder: s,
          "data-testid": o,
          className: `w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-base sm:text-xs text-slate-200 placeholder-slate-500 focus:outline-none ${d} transition-colors`
        }
      ),
      r.length > 0 && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => t(""),
          "aria-label": "Clear search",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors",
          children: /* @__PURE__ */ e(W, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
  ] });
}, Lt = ({
  file: r,
  onFileChange: t,
  acceptedFormats: s = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: l = "Supports official PDF and CSV documents",
  variant: n = "amber",
  className: o = "",
  children: d
}) => {
  const [c, m] = M(!1), u = Me.useId(), x = (f) => {
    f.preventDefault(), f.stopPropagation(), f.type === "dragenter" || f.type === "dragover" ? m(!0) : f.type === "dragleave" && m(!1);
  }, v = (f) => {
    f.preventDefault(), f.stopPropagation(), m(!1), f.dataTransfer.files && f.dataTransfer.files[0] && t(f.dataTransfer.files[0]);
  }, b = (f) => {
    f.target.files && f.target.files[0] && t(f.target.files[0]);
  }, p = ne[n] || ne.amber, y = j[n] || j.amber;
  return /* @__PURE__ */ i(
    "div",
    {
      onDragEnter: x,
      onDragOver: x,
      onDragLeave: x,
      onDrop: v,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${c ? p : "border-border hover:border-slate-600 bg-background/50"} ${o}`,
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "file",
            accept: s,
            id: u,
            onChange: b,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ i("label", { htmlFor: u, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ e(qe, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-slate-300 font-medium", children: r ? /* @__PURE__ */ i("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ e("span", { className: `${y} font-semibold truncate max-w-[240px]`, children: r.name }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: (f) => {
                  f.preventDefault(), f.stopPropagation(), t(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ e(W, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ i(Se, { children: [
            /* @__PURE__ */ e("span", { children: a.split("browse")[0] }),
            /* @__PURE__ */ e("span", { className: `${y} underline`, children: "browse" }),
            /* @__PURE__ */ e("span", { children: a.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-500", children: l })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "mt-4", children: d })
      ]
    }
  );
}, be = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, jt = ({
  options: r,
  selected: t,
  selectedValues: s = [],
  onChange: a,
  onChangeValues: l,
  multiSelect: n = !1,
  equalWidth: o = !1,
  variant: d = "amber",
  size: c = "sm",
  className: m = ""
}) => {
  const u = be[d] || be.amber, x = c === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", v = (b) => {
    if (n) {
      const p = s.includes(b) ? s.filter((y) => y !== b) : [...s, b];
      l && l(p), a && a(b);
    } else a && a(b);
  };
  return /* @__PURE__ */ e("div", { className: `flex ${o ? "w-full gap-2" : "flex-wrap gap-1.5"} ${m}`, children: r.map((b) => {
    const p = typeof b == "string" ? b : b.value, y = typeof b == "string" ? b : b.label, f = n ? s.includes(p) : t === p;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => v(p),
        className: `${x} ${o ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${f ? u : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: y
      },
      p
    );
  }) });
}, pe = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function Pt({
  label: r,
  options: t,
  value: s,
  onChange: a,
  className: l = ""
}) {
  return /* @__PURE__ */ i("div", { className: `space-y-2 ${l}`, children: [
    r && /* @__PURE__ */ e("label", { className: "block font-semibold text-sm text-slate-200", children: r }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((n) => {
      const o = s === n.value, d = n.accent || "blue", c = pe[d] || pe.blue;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => a(n.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${o ? c : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            n.icon && /* @__PURE__ */ e("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: n.icon }),
            /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("div", { className: `font-semibold text-sm ${o ? "text-slate-100" : "text-slate-300"}`, children: n.label }),
              n.description && /* @__PURE__ */ e("div", { className: "text-xs text-slate-400 mt-0.5 leading-snug", children: n.description })
            ] })
          ]
        },
        n.value
      );
    }) })
  ] });
}
const xe = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, _t = ({
  label: r,
  valueDisplay: t,
  valueClassName: s = "text-slate-200",
  min: a,
  max: l,
  step: n = 1,
  value: o,
  onChange: d,
  minLabel: c,
  midLabel: m,
  maxLabel: u,
  variant: x = "amber",
  className: v = ""
}) => {
  const b = xe[x] || xe.amber;
  return /* @__PURE__ */ i("div", { className: `space-y-1 ${v}`, children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ e("span", { className: "text-slate-400", children: r }),
      /* @__PURE__ */ e("span", { className: `font-semibold ${s}`, children: t })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: a,
        max: l,
        step: n,
        value: o,
        onChange: (p) => d(Number(p.target.value)),
        className: `w-full ${b} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (c || m || u) && /* @__PURE__ */ i("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ e("span", { children: c }),
      /* @__PURE__ */ e("span", { children: m }),
      /* @__PURE__ */ e("span", { children: u })
    ] })
  ] });
}, he = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function dt({
  options: r,
  value: t,
  onChange: s,
  variant: a = "amber",
  size: l = "xs",
  fullWidth: n = !1,
  className: o = "",
  idPrefix: d = "segmented"
}) {
  const c = K[a] || K.amber, m = he[l] || he.xs;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "tablist",
      className: `inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${n ? "w-full grid" : ""} ${o}`,
      style: n ? { gridTemplateColumns: `repeat(${r.length}, minmax(0, 1fr))` } : void 0,
      children: r.map((u) => {
        const x = t === u.id;
        return /* @__PURE__ */ i(
          "button",
          {
            role: "tab",
            "aria-selected": x,
            type: "button",
            "data-testid": `${d}-${u.id}`,
            onClick: () => s(u.id),
            className: `font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${m} ${x ? `${c} font-semibold` : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
            children: [
              u.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: u.icon }),
              /* @__PURE__ */ e("span", { children: u.label }),
              u.badge !== void 0 && /* @__PURE__ */ e("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: u.badge })
            ]
          },
          u.id
        );
      })
    }
  );
}
function Bt(r = 30) {
  const t = /* @__PURE__ */ new Date(), s = /* @__PURE__ */ new Date();
  s.setDate(t.getDate() - r);
  const a = (l) => `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
  return { startDate: a(s), endDate: a(t) };
}
function It({
  period: r,
  onPeriodChange: t,
  options: s,
  customValue: a = "custom",
  startDate: l,
  endDate: n,
  onStartDateChange: o,
  onEndDateChange: d,
  variant: c = "amber",
  idPrefix: m,
  className: u = ""
}) {
  const x = H[c] || H.amber, v = I[c] || I.amber, b = r === a;
  return /* @__PURE__ */ i("div", { className: `flex flex-col gap-2 ${u}`, children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ e(
        dt,
        {
          options: s,
          value: b ? "" : r,
          onChange: t,
          variant: c,
          size: "xs",
          idPrefix: m
        }
      ),
      /* @__PURE__ */ e(
        A,
        {
          variant: b ? v : "outline",
          size: "xs",
          icon: /* @__PURE__ */ e(Ge, { className: "w-3 h-3" }),
          onClick: () => t(a),
          "data-testid": m ? `${m}-custom-btn` : void 0,
          children: "Custom"
        }
      )
    ] }),
    b && /* @__PURE__ */ i("div", { className: "flex items-center gap-2 flex-wrap text-xs", children: [
      /* @__PURE__ */ i("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ e("span", { children: "From" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "date",
            value: l,
            max: n || void 0,
            onChange: (p) => o(p.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${x}`
          }
        )
      ] }),
      /* @__PURE__ */ i("label", { className: "flex items-center gap-1.5 text-slate-400", children: [
        /* @__PURE__ */ e("span", { children: "To" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "date",
            value: n,
            min: l || void 0,
            onChange: (p) => d(p.target.value),
            className: `bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${x}`
          }
        )
      ] })
    ] })
  ] });
}
const fe = {
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    removeBtn: "text-amber-400/70 hover:text-amber-200"
  },
  slate: {
    pill: "bg-slate-800 text-slate-300 border border-slate-700/80",
    removeBtn: "opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-400"
  }
};
function ct(r) {
  return r.trim().toLowerCase().replace(/^#+/, "").replace(/\s+/g, "-");
}
const zt = ({
  tags: r,
  onAddTag: t,
  onRemoveTag: s,
  disabled: a = !1,
  placeholder: l = "add tag...",
  variant: n = "amber",
  addButtonLabel: o = "tag",
  addButtonTestId: d,
  inputTestId: c,
  className: m = ""
}) => {
  const [u, x] = M(!1), [v, b] = M("");
  if (r.length === 0 && !t)
    return null;
  const p = fe[n] || fe.amber, y = () => {
    const h = ct(v);
    b(""), x(!1), h && !r.includes(h) && t && t(h);
  }, f = () => {
    b(""), x(!1);
  };
  return /* @__PURE__ */ i("div", { className: `flex items-center flex-wrap gap-1 ${m}`, children: [
    r.map((h) => /* @__PURE__ */ i(
      "span",
      {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${p.pill}`,
        children: [
          /* @__PURE__ */ i("span", { children: [
            "#",
            h
          ] }),
          s && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void s(h),
              disabled: a,
              "aria-label": `Remove tag ${h}`,
              title: `Remove tag #${h}`,
              className: `transition-colors ${p.removeBtn}`,
              children: /* @__PURE__ */ e(W, { className: "w-2.5 h-2.5" })
            }
          )
        ]
      },
      h
    )),
    t && !u && /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => {
          b(""), x(!0);
        },
        disabled: a,
        "data-testid": d,
        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-border/70 text-[10px] transition-colors",
        children: [
          /* @__PURE__ */ e(Ye, { className: "w-2.5 h-2.5" }),
          /* @__PURE__ */ e("span", { children: o })
        ]
      }
    ),
    t && u && /* @__PURE__ */ e(
      "form",
      {
        onSubmit: (h) => {
          h.preventDefault(), y();
        },
        className: "inline-flex items-center gap-1",
        children: /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            value: v,
            onChange: (h) => b(h.target.value),
            onBlur: y,
            onKeyDown: (h) => {
              h.key === "Escape" && (h.preventDefault(), f());
            },
            placeholder: l,
            autoFocus: !0,
            "data-testid": c,
            className: "w-28 sm:w-24 px-1.5 py-0.5 text-base sm:text-[10px] rounded bg-background border border-amber-500/50 text-slate-200 focus:outline-none"
          }
        )
      }
    )
  ] });
}, Ot = ({
  isOpen: r,
  onClose: t,
  title: s,
  subtitle: a = "Sports Physiology & Circadian Research Grounding",
  headerIcon: l = "🧠",
  citationTitle: n,
  citationIcon: o = "📚",
  pillars: d = [],
  inputLabel: c = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: m = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: u = 3,
  submitLabel: x = "Synthesize with AI",
  submittingLabel: v = "Synthesizing...",
  errorFallbackMessage: b = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: p = "blue",
  onSynthesize: y
}) => {
  const [f, h] = M(""), [w, S] = M(!1), [$, E] = M(null), D = async () => {
    S(!0), E(null);
    try {
      await y(f.trim() || void 0), h(""), t();
    } catch {
      E(b);
    } finally {
      S(!1);
    }
  }, P = q[p] || q.blue, z = H[p] || H.blue, g = I[p] || I.blue;
  return /* @__PURE__ */ e(
    Le,
    {
      isOpen: r,
      onClose: t,
      title: s,
      subtitle: a,
      headerIcon: l,
      disableClose: w,
      children: /* @__PURE__ */ i("div", { className: "space-y-4", children: [
        (n || d.length > 0) && /* @__PURE__ */ i("div", { className: `rounded-xl border p-3 text-xs ${P.container}`, children: [
          n && /* @__PURE__ */ i("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${P.header}`, children: [
            /* @__PURE__ */ e("span", { children: o }),
            /* @__PURE__ */ e("span", { children: n })
          ] }),
          d.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: d.map((C, _) => /* @__PURE__ */ i("li", { children: [
            /* @__PURE__ */ i("strong", { className: "text-slate-100", children: [
              C.label,
              ":"
            ] }),
            " ",
            C.description
          ] }, _)) })
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs font-semibold text-slate-200", children: c }),
          /* @__PURE__ */ e(
            "textarea",
            {
              rows: u,
              value: f,
              onChange: (C) => h(C.target.value),
              disabled: w,
              placeholder: m,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-base sm:text-xs placeholder-slate-500 focus:outline-none ${z} resize-y`
            }
          )
        ] }),
        $ && /* @__PURE__ */ e("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: $ }),
        /* @__PURE__ */ i("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ e(
            A,
            {
              variant: "secondary",
              size: "md",
              onClick: t,
              disabled: w,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e(
            A,
            {
              variant: g,
              size: "md",
              loading: w,
              loadingText: v,
              icon: /* @__PURE__ */ e("span", { children: "⚡" }),
              onClick: D,
              children: x
            }
          )
        ] })
      ] })
    }
  );
}, Ft = ({
  title: r,
  primaryValue: t,
  primaryUnit: s,
  secondaryValue: a,
  secondaryUnit: l,
  toggleHint: n,
  badge: o,
  variant: d = "blue",
  unitColor: c,
  glowColor: m,
  children: u,
  className: x = ""
}) => {
  const [v, b] = M(!1), p = (w = "blue") => {
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
  }, y = a !== void 0 && l !== void 0, f = c || j[d] || j.blue, h = m || se[d] || se.blue;
  return /* @__PURE__ */ i("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${x}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${h} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: r }),
      o && /* @__PURE__ */ i("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${p(o.variant)}`, children: [
        o.icon || /* @__PURE__ */ e(et, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ e("span", { children: o.label })
      ] })
    ] }),
    /* @__PURE__ */ i(
      "div",
      {
        className: `text-center my-6 ${y ? "cursor-pointer select-none" : ""}`,
        onClick: () => y && b(!v),
        children: [
          /* @__PURE__ */ i("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            v ? a : t,
            /* @__PURE__ */ e("span", { className: `text-2xl font-semibold ${f} ml-2`, children: v ? l : s })
          ] }),
          n && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    u
  ] });
}, mt = {
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
}, Ht = ({
  title: r,
  value: t,
  subtitle: s,
  icon: a,
  variant: l = "default",
  className: n = "",
  onClick: o
}) => {
  const d = mt[l], c = !!o;
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: o,
      className: `p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${d.container} ${c ? "cursor-pointer hover:border-border active:scale-[0.99]" : ""} ${n}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          a && /* @__PURE__ */ e("span", { className: `mr-1 shrink-0 ${d.icon}`, children: a }),
          /* @__PURE__ */ e("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: r })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-sm sm:text-base font-bold truncate ${d.value}`, children: t }),
        s && /* @__PURE__ */ e("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: s })
      ]
    }
  );
}, Ut = ({
  title: r,
  subtitle: t,
  value: s,
  valueSuffix: a,
  subvalue: l,
  subvalueTrend: n = "neutral",
  badge: o,
  icon: d,
  isSelected: c = !1,
  onClick: m,
  variant: u = "amber",
  className: x = "",
  "data-testid": v
}) => {
  const b = le[u] || le.amber, p = n === "positive" ? "text-emerald-400" : n === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      "data-testid": v,
      onClick: m,
      className: `text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${c ? b : "bg-background/60 border-border/60 hover:border-slate-700"} ${x}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ i("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            d && /* @__PURE__ */ e("span", { className: "shrink-0", children: d }),
            /* @__PURE__ */ e("span", { className: "truncate", children: r })
          ] }),
          o && /* @__PURE__ */ e("div", { className: "shrink-0", children: o })
        ] }),
        s !== void 0 && /* @__PURE__ */ i("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          s,
          a && /* @__PURE__ */ e("span", { className: "text-xs font-normal text-slate-400 ml-1", children: a })
        ] }),
        (t || l) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          t && /* @__PURE__ */ e("span", { className: "truncate", children: t }),
          l && /* @__PURE__ */ e("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${p}`, children: l })
        ] })
      ]
    }
  );
}, ge = {
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
}, Vt = ({
  label: r,
  variant: t = "idle",
  icon: s,
  isPulsing: a = !1,
  className: l = ""
}) => {
  const n = ge[t] || ge.idle;
  return /* @__PURE__ */ i(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${n.bg} ${l}`,
      children: [
        s ? /* @__PURE__ */ e("span", { className: "mr-1.5 shrink-0 flex items-center", children: s }) : /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${n.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ e("span", { className: "truncate", children: r })
      ]
    }
  );
}, Wt = ({
  children: r,
  className: t = "",
  onClick: s,
  hoverGlow: a = !1
}) => /* @__PURE__ */ e(
  "div",
  {
    onClick: s,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!s ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${t}`,
    children: r
  }
), ve = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20"
}, Gt = ({
  title: r,
  subtitle: t,
  icon: s,
  variant: a = "amber",
  actions: l,
  titleAs: n = "h3",
  uppercaseTitle: o = !1,
  size: d = "sm",
  className: c = ""
}) => {
  const m = ve[a] || ve.amber, u = n, x = d === "md" ? `text-base font-bold text-slate-100 ${o ? "tracking-wide uppercase" : ""}` : `text-sm font-semibold text-slate-200 ${o ? "tracking-wide uppercase" : ""}`, v = d === "md" ? "p-2.5 rounded-xl border" : "p-1.5 rounded-lg border";
  return /* @__PURE__ */ i("div", { className: `flex flex-wrap items-center justify-between gap-3 ${c}`, children: [
    /* @__PURE__ */ i("div", { className: "flex items-center space-x-2.5 min-w-[200px] flex-1", children: [
      s && /* @__PURE__ */ e("div", { className: `${v} shrink-0 ${m}`, children: s }),
      /* @__PURE__ */ i("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e(u, { className: x, children: r }),
        t && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400", children: t })
      ] })
    ] }),
    l && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2 max-w-full", children: l })
  ] });
}, ye = {
  normal: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500"
}, Zt = ({
  category: r,
  icon: t,
  spendFormatted: s,
  transactionCount: a,
  percentage: l = 0,
  budgetSummaryLabel: n,
  remainingOrOverFormatted: o,
  percentUsed: d,
  isOverBudget: c = !1,
  warningLevel: m = "normal",
  isTransfer: u = !1,
  transferNote: x = "Internal transfers between accounts - Excluded from spend",
  onRowClick: v,
  onEditTargetClick: b,
  "data-testid": p
}) => {
  const y = !u && !!n, f = Math.min(Math.max(d ?? 0, 0), 100), h = ye[m] || ye.normal;
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": p,
      onClick: v,
      title: `Click to inspect transactions in ${r}`,
      className: "p-3 bg-card/40 hover:bg-card/70 rounded-xl border border-border hover:border-slate-600 transition-all cursor-pointer space-y-1.5 group",
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs gap-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center space-x-2 min-w-0", children: [
            t && /* @__PURE__ */ e("div", { className: "p-1 rounded bg-background border border-border shrink-0", children: t }),
            /* @__PURE__ */ e("span", { className: "font-medium text-slate-200 group-hover:text-amber-300 transition-colors truncate", children: r }),
            /* @__PURE__ */ i("span", { className: "text-[10px] text-slate-500 font-mono shrink-0", children: [
              a,
              " ",
              a === 1 ? "txn" : "txns",
              !u && ` (${Math.round(l)}%)`
            ] })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center space-x-2 shrink-0", children: [
            /* @__PURE__ */ e("span", { className: `font-semibold font-mono ${u ? "text-sky-300" : "text-slate-100"}`, children: s }),
            /* @__PURE__ */ e("div", { className: "p-1 rounded bg-card/80 text-slate-400 group-hover:text-slate-200 border border-transparent group-hover:border-border transition-colors", children: /* @__PURE__ */ e(De, { className: "w-3 h-3" }) })
          ] })
        ] }),
        u ? /* @__PURE__ */ i("div", { className: "flex justify-between items-center text-[10px] text-sky-400/90 pt-0.5", children: [
          /* @__PURE__ */ i("span", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ e(Ve, { className: "w-2.5 h-2.5 shrink-0" }),
            /* @__PURE__ */ e("span", { children: x })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-slate-400 hover:text-slate-200 shrink-0", children: "Inspect txns" })
        ] }) : y ? /* @__PURE__ */ i("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e("div", { className: "w-full bg-background rounded-full h-2 overflow-hidden border border-border", children: /* @__PURE__ */ e(
            "div",
            {
              className: `h-full rounded-full transition-all duration-500 ${h}`,
              style: { width: `${f}%` }
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "flex justify-between items-center text-[10px] text-slate-400 font-mono", children: [
            /* @__PURE__ */ e("span", { children: n }),
            /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
              o && (c ? /* @__PURE__ */ i("span", { className: "text-rose-400 font-semibold flex items-center space-x-1", children: [
                /* @__PURE__ */ e(Q, { className: "w-3 h-3" }),
                /* @__PURE__ */ e("span", { children: o })
              ] }) : /* @__PURE__ */ e("span", { className: "text-emerald-400", children: o })),
              b && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  title: "Edit budget target",
                  className: "text-slate-500 hover:text-amber-400 p-0.5",
                  children: /* @__PURE__ */ e(ie, { className: "w-2.5 h-2.5" })
                }
              )
            ] })
          ] })
        ] }) : /* @__PURE__ */ i("div", { className: "flex justify-between items-center text-[10px] text-slate-500 pt-0.5", children: [
          /* @__PURE__ */ e("span", { children: "No target budget configured" }),
          b && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: b,
              className: "text-amber-400/80 hover:text-amber-300 flex items-center space-x-0.5",
              children: [
                /* @__PURE__ */ e(ie, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ e("span", { children: "Set target" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
function ut(r, t) {
  const s = t > 0 ? t : 1, a = Math.min(100, Math.max(0, Math.round(r / s * 100))), l = Math.max(0, t - r);
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
const Kt = ({
  title: r,
  subtitle: t,
  icon: s,
  currentValue: a,
  targetValue: l,
  currencyPrefix: n = "$",
  currencySuffix: o = "NZD",
  deltaBadge: d,
  action: c,
  className: m = ""
}) => {
  const { percent: u, remaining: x, barColor: v, percentTextColor: b } = ut(
    a,
    l
  );
  return /* @__PURE__ */ i("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${m}`, children: [
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        s && /* @__PURE__ */ e("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: s }),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-slate-200", children: r }),
          t && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400", children: t })
        ] })
      ] }),
      c && /* @__PURE__ */ e("div", { children: c })
    ] }),
    /* @__PURE__ */ i("div", { className: "space-y-1.5 my-3", children: [
      /* @__PURE__ */ i("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ i("span", { className: "text-slate-400", children: [
          "Spent ",
          /* @__PURE__ */ i("strong", { className: "text-slate-200", children: [
            n,
            Math.round(a).toLocaleString("en-NZ")
          ] }),
          " of ",
          n,
          Math.round(l).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ i("span", { className: b, children: [
          u,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ e(
        "div",
        {
          className: `h-full transition-all duration-500 rounded-full ${v}`,
          style: { width: `${u}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between pt-2 border-t border-border/50 text-xs", children: [
      /* @__PURE__ */ i("span", { className: "text-slate-400", children: [
        "Remaining allowance: ",
        /* @__PURE__ */ i("strong", { className: "text-slate-200", children: [
          n,
          Math.round(x).toLocaleString("en-NZ"),
          " ",
          o
        ] })
      ] }),
      d && /* @__PURE__ */ i(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${d.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ e(We, { className: `w-3.5 h-3.5 mr-1 ${d.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ e("span", { children: d.label })
          ]
        }
      )
    ] })
  ] });
}, qt = ({
  eyebrow: r,
  currentValueLabel: t,
  deltaLabel: s,
  deltaPositive: a = !0,
  milestoneLabel: l = "Next Milestone",
  milestoneValue: n,
  progressPercent: o,
  startLabel: d,
  centerLabel: c,
  targetLabel: m,
  variant: u = "blue",
  className: x = ""
}) => {
  const v = Math.min(100, Math.max(0, Math.round(o))), b = X[u] || X.blue;
  return /* @__PURE__ */ i(
    "div",
    {
      className: `glass-panel bg-card/80 backdrop-blur-md border border-blue-500/25 rounded-2xl p-5 shadow-lg animate-slide-up ${x}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${b.eyebrow}`, children: r }),
            /* @__PURE__ */ i("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ e("span", { children: t }),
              s && /* @__PURE__ */ e(
                "span",
                {
                  className: `text-sm font-semibold ${a ? "text-emerald-400" : "text-rose-400"}`,
                  children: s
                }
              )
            ] })
          ] }),
          n && /* @__PURE__ */ i("div", { className: "text-right", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-slate-400", children: l }),
            /* @__PURE__ */ e("div", { className: "text-lg font-bold text-purple-400", children: n })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "h-2.5 w-full bg-background/80 rounded-full overflow-hidden my-3 border border-border/50", children: /* @__PURE__ */ e(
          "div",
          {
            className: `h-full bg-gradient-to-r ${b.bar} rounded-full transition-all duration-500`,
            style: { width: `${v}%` }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ e("span", { children: d }),
          c && /* @__PURE__ */ e("span", { children: c }),
          /* @__PURE__ */ e("span", { children: m })
        ] })
      ]
    }
  );
};
function bt(r) {
  const t = r.map((a) => ({
    ...a,
    value: Math.max(0, Number(a.value) || 0)
  })), s = t.reduce((a, l) => a + l.value, 0);
  return s <= 0 ? [] : t.map((a) => ({
    ...a,
    widthPct: a.value / s * 100
  }));
}
const Xt = ({
  segments: r,
  showLegend: t = !0,
  heightClass: s = "h-2.5",
  className: a = ""
}) => {
  const l = bt(r);
  return l.length === 0 ? null : /* @__PURE__ */ i("div", { className: `space-y-1.5 ${a}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `w-full ${s} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`,
        children: l.map((n) => {
          if (n.widthPct <= 0) return null;
          const o = n.valueLabel || `${Math.round(n.widthPct)}%`;
          return /* @__PURE__ */ e(
            "div",
            {
              style: { width: `${n.widthPct}%` },
              className: `h-full ${n.barColor} transition-all duration-500`,
              title: `${n.label}: ${o}`
            },
            n.id
          );
        })
      }
    ),
    t && /* @__PURE__ */ e("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300", children: l.map((n) => {
      const o = n.minVisiblePct ?? 0.5;
      if (n.widthPct < o) return null;
      const d = n.dotColor || n.barColor, c = n.textColor || "text-slate-200", m = n.valueLabel || `${Math.round(n.widthPct)}%`;
      return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 font-medium", children: [
        /* @__PURE__ */ e("span", { className: `w-2 h-2 rounded-full shrink-0 ${d}` }),
        /* @__PURE__ */ e("span", { className: c, children: n.label }),
        /* @__PURE__ */ e("span", { className: "text-slate-400", children: m })
      ] }, n.id);
    }) })
  ] });
}, we = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, Jt = ({
  items: r,
  columns: t = 3,
  className: s = ""
}) => {
  const a = we[t] || we[3];
  return /* @__PURE__ */ e("div", { className: `grid ${a} gap-2 text-center ${s}`, children: r.map((l, n) => /* @__PURE__ */ i(
    "div",
    {
      className: "px-2.5 py-2 rounded-xl bg-background/60 border border-border/60",
      children: [
        /* @__PURE__ */ i("div", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 truncate", children: [
          l.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: l.icon }),
          /* @__PURE__ */ e("span", { className: "truncate", children: l.label })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: `text-sm font-bold mt-0.5 truncate ${l.valueClassName || "text-slate-100"}`,
            children: l.value
          }
        ),
        l.subvalue && /* @__PURE__ */ e("div", { className: "text-[10px] text-slate-400 mt-0.5 truncate", children: l.subvalue })
      ]
    },
    l.id || `${l.label}-${n}`
  )) });
}, Ne = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, Yt = ({
  title: r,
  description: t,
  icon: s,
  action: a,
  variant: l = "dashed",
  className: n = ""
}) => {
  const o = Ne[l] || Ne.dashed;
  return /* @__PURE__ */ i(
    "div",
    {
      className: `rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2 ${o} ${n}`,
      children: [
        s && /* @__PURE__ */ e("div", { className: "text-slate-400 mb-1 flex items-center justify-center", children: s }),
        /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-slate-200", children: r }),
        t && /* @__PURE__ */ e("div", { className: "text-xs text-slate-400 max-w-md leading-relaxed", children: t }),
        a && /* @__PURE__ */ e("div", { className: "pt-2", children: a })
      ]
    }
  );
}, Qt = ({
  label: r = "Loading...",
  variant: t = "amber",
  className: s = ""
}) => {
  const a = j[t] || j.amber;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: `flex flex-col items-center justify-center py-8 px-4 text-center space-y-2 ${s}`,
      children: [
        /* @__PURE__ */ e(Ae, { className: `w-6 h-6 animate-spin ${a}` }),
        r && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-slate-400", children: r })
      ]
    }
  );
}, ke = {
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
}, er = ({
  title: r,
  description: t,
  confirmLabel: s = "Confirm",
  cancelLabel: a = "Cancel",
  onConfirm: l,
  onCancel: n,
  loading: o = !1,
  variant: d = "danger",
  className: c = ""
}) => {
  const m = ke[d] || ke.danger;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${m.container} ${c}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ e(Q, { className: `w-4 h-4 shrink-0 mt-0.5 ${m.icon}` }),
          /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("div", { className: `text-xs font-semibold ${m.title}`, children: r }),
            t && /* @__PURE__ */ e("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: t })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ e(
            A,
            {
              variant: "secondary",
              size: "xs",
              onClick: n,
              disabled: o,
              children: a
            }
          ),
          /* @__PURE__ */ e(
            A,
            {
              variant: m.confirmVariant,
              size: "xs",
              loading: o,
              onClick: l,
              children: s
            }
          )
        ] })
      ]
    }
  );
}, tr = ({
  title: r,
  icon: t,
  defaultOpen: s = !1,
  variant: a = "inline",
  expandLabel: l = "▼ Expand",
  collapseLabel: n = "▲ Hide",
  children: o,
  className: d = ""
}) => {
  const [c, m] = M(s);
  return a === "card" ? /* @__PURE__ */ i("div", { className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg ${d}`, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => m((u) => !u),
        className: "w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer",
        children: [
          /* @__PURE__ */ i("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2", children: [
            t && /* @__PURE__ */ e("span", { children: t }),
            /* @__PURE__ */ e("span", { children: r })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-xs text-slate-400", children: c ? n : l })
        ]
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "mt-3 pt-3 border-t border-border/60", children: o })
  ] }) : /* @__PURE__ */ i("div", { className: `pt-2 border-t border-border/40 ${d}`, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => m((u) => !u),
        className: "bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          t && /* @__PURE__ */ e("span", { children: t }),
          /* @__PURE__ */ e("span", { className: "underline", children: r }),
          /* @__PURE__ */ e("span", { className: "text-[10px]", children: c ? "▲" : "▼" })
        ]
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1", children: o })
  ] });
}, rr = ({
  message: r = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: s = "Later",
  onReload: a,
  onDismiss: l,
  className: n = ""
}) => /* @__PURE__ */ i(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${n}`,
    children: [
      /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: r }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: a,
            className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all",
            children: t
          }
        ),
        /* @__PURE__ */ e(
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
), ar = ({
  message: r = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: s,
  icon: a,
  className: l = "",
  testId: n = "session-expired-banner"
}) => {
  const o = (d) => {
    d && d.stopPropagation(), s ? s() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": n,
      onClick: o,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${l}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ e("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ e(Q, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: r })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: t
          }
        )
      ]
    }
  );
}, je = 90, pt = 250;
function O(r) {
  const t = Number.isFinite(r) ? Math.max(0, Math.floor(r)) : 0, s = Math.floor(t / 60), a = t % 60;
  return `${s}:${a.toString().padStart(2, "0")}`;
}
function $e(r, t = je) {
  return !Number.isFinite(r) || r <= 0 ? t : Math.max(1, Math.round(r));
}
function J(r, t = Date.now()) {
  return Math.max(0, Math.ceil((r - t) / 1e3));
}
function xt() {
  var r;
  try {
    typeof navigator < "u" && ((r = navigator.vibrate) == null || r.call(navigator, [200, 100, 200]));
  } catch {
  }
}
function ht() {
  try {
    if (typeof window > "u") return;
    const r = window.AudioContext || window.webkitAudioContext;
    if (!r) return;
    const t = new r(), s = t.currentTime, a = t.createOscillator(), l = t.createGain();
    a.type = "sine", a.frequency.setValueAtTime(880, s), l.gain.setValueAtTime(1e-3, s), l.gain.exponentialRampToValueAtTime(0.15, s + 0.02), l.gain.exponentialRampToValueAtTime(1e-4, s + 0.35), a.connect(l), l.connect(t.destination), a.onended = () => {
      t.close().catch(() => {
      });
    }, a.start(s), a.stop(s + 0.36);
  } catch {
  }
}
function ft() {
  xt(), ht();
}
function sr(r = je) {
  const t = $e(r), [s, a] = M(t), [l, n] = M(0), [o, d] = M(0), [c, m] = M(!1), [u, x] = M(!1), [v, b] = M(!1), p = L(null), y = L(0), f = L(t), h = L(!1), w = L(!1), S = L(!1), $ = L(!1), E = R((N) => {
    p.current = null, y.current = 0, h.current = !1, w.current = !1, S.current = !0, d(0), m(!1), x(!1), b(!0), N && !$.current && ($.current = !0, ft());
  }, []), D = R(() => {
    const N = p.current;
    if (N === null || !h.current)
      return;
    const k = J(N);
    k <= 0 ? E(!0) : d(k);
  }, [E]);
  F(() => {
    if (!c || typeof window > "u" || typeof document > "u")
      return;
    D();
    const N = window.setInterval(D, pt), k = () => {
      document.visibilityState === "visible" && D();
    };
    return document.addEventListener("visibilitychange", k), () => {
      window.clearInterval(N), document.removeEventListener("visibilitychange", k);
    };
  }, [c, D]);
  const P = R((N) => {
    const k = N !== void 0 ? $e(N, f.current) : f.current;
    N !== void 0 && (f.current = k, a(k)), p.current = Date.now() + k * 1e3, y.current = k, h.current = !0, w.current = !1, S.current = !1, $.current = !1, n(k), d(k), m(!0), x(!1), b(!1);
  }, []), z = R(() => {
    if (!h.current || p.current === null)
      return;
    const N = J(p.current);
    if (N <= 0) {
      E(!0);
      return;
    }
    p.current = null, y.current = N, h.current = !1, w.current = !0, S.current = !1, d(N), m(!1), x(!0), b(!1);
  }, [E]), g = R(() => {
    if (!w.current || h.current)
      return;
    const N = y.current;
    if (N <= 0) {
      E(!0);
      return;
    }
    p.current = Date.now() + N * 1e3, h.current = !0, w.current = !1, S.current = !1, d(N), m(!0), x(!1), b(!1);
  }, [E]), C = R(
    (N) => {
      if (!(!Number.isFinite(N) || N === 0)) {
        if (h.current && p.current !== null) {
          const k = p.current + N * 1e3, B = J(k);
          if (B <= 0) {
            E(!0);
            return;
          }
          p.current = k, y.current = B, d(B), n((Be) => Math.max(Be, B));
          return;
        }
        if (w.current) {
          const k = Math.max(0, y.current + Math.round(N));
          if (k <= 0) {
            E(!0);
            return;
          }
          y.current = k, d(k), n((B) => Math.max(B, k));
          return;
        }
        if (S.current && N > 0) {
          const k = Math.max(1, Math.round(N));
          p.current = Date.now() + k * 1e3, y.current = k, h.current = !0, w.current = !1, S.current = !1, $.current = !1, d(k), n((B) => Math.max(B, k)), m(!0), x(!1), b(!1);
        }
      }
    },
    [E]
  ), _ = R(() => {
    p.current = null, y.current = 0, h.current = !1, w.current = !1, S.current = !1, $.current = !1, d(0), n(0), m(!1), x(!1), b(!1);
  }, []);
  return {
    remainingSeconds: o,
    totalSeconds: l,
    isRunning: c,
    isPaused: u,
    isComplete: v,
    activePresetSeconds: s,
    startTimer: P,
    pauseTimer: z,
    resumeTimer: g,
    adjustTimer: C,
    dismissTimer: _
  };
}
const gt = [60, 90, 120, 180], nr = ({
  remainingSeconds: r,
  totalSeconds: t,
  isRunning: s,
  isPaused: a,
  isComplete: l,
  presets: n = gt,
  onStart: o,
  onPause: d,
  onResume: c,
  onAdjust: m,
  onDismiss: u,
  variant: x = "blue",
  className: v = ""
}) => {
  const b = j[x] || j.blue, p = Z[x] || Z.blue, y = q[x] || q.blue, f = K[x] || K.blue, h = X[x] || X.blue, w = I[x] || I.blue;
  if (!s && !a && !l)
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "rest-timer-bar",
        className: `glass-panel bg-card/90 backdrop-blur-md border border-border rounded-2xl px-3.5 py-2.5 shadow-lg flex flex-wrap items-center justify-between gap-2 ${v}`,
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e("span", { className: `p-1.5 rounded-lg border shrink-0 ${y.container}`, children: /* @__PURE__ */ e(oe, { className: `w-4 h-4 ${b}` }) }),
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-slate-200 whitespace-nowrap", children: "Rest Timer" })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex items-center gap-1.5 flex-wrap", children: n.map((g) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o(g),
              "aria-label": `Start ${O(g)} rest timer`,
              className: "px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95",
              children: O(g)
            },
            g
          )) })
        ]
      }
    );
  const $ = t > 0 ? t : 0, E = Math.max(0, r), D = l ? 100 : $ > 0 ? Math.min(100, Math.max(0, Math.round(($ - E) / $ * 100))) : 0, P = l ? "border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20" : a ? "border-amber-500/40 bg-slate-900/95" : "border-border bg-slate-900/95", z = l ? "bg-emerald-400" : a ? "bg-amber-400" : `bg-gradient-to-r ${h.bar}`;
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": "rest-timer-bar",
      role: "region",
      "aria-label": "Rest timer",
      className: `glass-panel backdrop-blur-md border rounded-2xl p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up ${P} ${v}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5 min-w-0", children: [
            l ? /* @__PURE__ */ e(Ze, { className: "w-5 h-5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ e(
              oe,
              {
                className: `w-5 h-5 shrink-0 ${b} ${s ? "animate-pulse" : ""}`
              }
            ),
            /* @__PURE__ */ e("div", { className: "min-w-0", children: l ? /* @__PURE__ */ i(Se, { children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-bold text-emerald-300 leading-snug", children: "Rest Complete - Ready for next set" }),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": "rest-timer-countdown",
                  className: "text-lg font-black tabular-nums text-emerald-400 leading-tight",
                  children: O(E)
                }
              )
            ] }) : /* @__PURE__ */ i("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  "data-testid": "rest-timer-countdown",
                  className: `text-2xl font-black tabular-nums tracking-tight leading-none ${a ? "text-amber-300" : p}`,
                  children: O(E)
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-slate-400 whitespace-nowrap", children: a ? "Paused" : $ > 0 ? `of ${O($)}` : "Rest" })
            ] }) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            !l && (s ? /* @__PURE__ */ e(
              A,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ e(Xe, { className: "w-3.5 h-3.5" }),
                onClick: d,
                "aria-label": "Pause rest timer",
                children: "Pause"
              }
            ) : /* @__PURE__ */ e(
              A,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ e(Je, { className: "w-3.5 h-3.5" }),
                onClick: c,
                "aria-label": "Resume rest timer",
                children: "Resume"
              }
            )),
            /* @__PURE__ */ e(
              A,
              {
                variant: l ? "emerald" : "ghost",
                size: "xs",
                icon: /* @__PURE__ */ e(W, { className: "w-3.5 h-3.5" }),
                onClick: u,
                "aria-label": l ? "Dismiss rest timer" : "Skip rest timer",
                children: l ? "Dismiss" : "Skip"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": D,
            "aria-label": "Rest progress",
            className: "h-2 w-full bg-background/90 rounded-full overflow-hidden border border-border/50",
            children: /* @__PURE__ */ e(
              "div",
              {
                className: `h-full rounded-full transition-all duration-300 ease-linear ${z}`,
                style: { width: `${D}%` }
              }
            )
          }
        ),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              A,
              {
                variant: "secondary",
                size: "xs",
                disabled: l || E <= 0,
                onClick: () => m(-15),
                "aria-label": "Subtract 15 seconds",
                className: "tabular-nums",
                children: "-15s"
              }
            ),
            /* @__PURE__ */ e(
              A,
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
          /* @__PURE__ */ e("div", { className: "flex items-center gap-1 flex-wrap", children: n.map((g) => {
            const C = !l && t === g;
            return /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => o(g),
                "aria-label": `Restart ${O(g)} rest timer`,
                className: `px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${C ? f : "bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200"}`,
                children: O(g)
              },
              g
            );
          }) })
        ] })
      ]
    }
  );
}, vt = 60 * 60 * 1e3;
function lr(r = {}) {
  const {
    pollIntervalMs: t = vt,
    externalNeedRefresh: s,
    onExternalNeedRefreshChange: a,
    updateServiceWorker: l,
    registration: n
  } = r, o = L(
    n ?? void 0
  ), d = L(!1), c = L(void 0), [m, u] = M(!1), [x, v] = M(!1), [b, p] = M(null), y = s ?? m, f = R(
    (g) => {
      u(g), a == null || a(g);
    },
    [a]
  );
  F(() => {
    n && (o.current = n, n.waiting && f(!0));
  }, [n, f]);
  const h = R((g) => {
    p(g), c.current !== void 0 && typeof window < "u" && window.clearTimeout(c.current), typeof window < "u" && (c.current = window.setTimeout(() => {
      p(null);
    }, 3500));
  }, []), w = R(async () => {
    if (o.current)
      return o.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const g = await navigator.serviceWorker.getRegistration();
      if (g)
        return o.current = g, g;
    }
  }, []), S = R(
    async (g) => {
      if (await g.update(), g.waiting)
        return f(!0), !0;
      if (g.installing) {
        const C = g.installing;
        if (await new Promise((_) => {
          const N = () => {
            (C.state === "installed" || C.state === "activated" || C.state === "redundant") && (C.removeEventListener("statechange", N), _());
          };
          C.addEventListener("statechange", N);
        }), g.waiting)
          return f(!0), !0;
      }
      return !1;
    },
    [f]
  ), $ = R(async () => {
    try {
      const g = await w();
      if (!g) return;
      await S(g);
    } catch {
    }
  }, [w, S]), E = R(async () => {
    v(!0), p(null);
    try {
      const g = await w();
      if (!g) {
        h("Up to date");
        return;
      }
      const C = await S(g);
      h(C ? "Update ready" : "Up to date");
    } catch {
      h("Update check failed");
    } finally {
      v(!1);
    }
  }, [w, S, h]), D = R(async () => {
    d.current = !0, await V();
    const g = await w();
    g != null && g.waiting && g.waiting.postMessage({ type: "SKIP_WAITING" }), l ? await l(!0) : typeof window < "u" && window.location.reload();
  }, [w, l]), P = R(() => {
    f(!1);
  }, [f]), z = R(async () => {
    await rt();
  }, []);
  return F(() => {
    if (typeof window > "u" || typeof document > "u") return;
    V(), $();
    const g = () => {
      document.visibilityState === "visible" && $();
    };
    document.addEventListener("visibilitychange", g);
    const C = window.setInterval(() => {
      $();
    }, t);
    return () => {
      document.removeEventListener("visibilitychange", g), window.clearInterval(C), c.current !== void 0 && window.clearTimeout(c.current);
    };
  }, [$, t]), F(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let g = !1;
    const C = navigator.serviceWorker.controller !== null, _ = () => {
      !d.current && !C || g || (g = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", _), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", _);
    };
  }, []), {
    needRefresh: y,
    checkingForUpdate: x,
    updateCheckMessage: b,
    checkForUpdates: E,
    applyUpdate: D,
    dismissUpdate: P,
    hardReset: z
  };
}
const yt = "/api/client-errors", wt = 25, U = /* @__PURE__ */ new Set();
let Pe = yt, Ce = !1;
async function Ee(r, t, s) {
  try {
    let a = "Unknown error", l, n = "Error";
    if (r instanceof Error)
      a = r.message || r.name, l = r.stack, n = r.name || "Error";
    else if (typeof r == "string")
      a = r;
    else if (r && typeof r == "object") {
      const p = r;
      a = p.message || JSON.stringify(r), l = p.stack, n = p.name || "Object";
    }
    const o = (t == null ? void 0 : t.source) || void 0, d = typeof (t == null ? void 0 : t.lineno) == "number" ? t.lineno : void 0, c = typeof (t == null ? void 0 : t.colno) == "number" ? t.colno : void 0, m = (t == null ? void 0 : t.error_type) || n, u = `${a}:${o || ""}:${d || 0}:${m}`;
    if (U.has(u))
      return;
    U.add(u);
    const x = (s == null ? void 0 : s.maxRecentErrors) ?? wt;
    if (U.size > x) {
      const p = U.values().next().value;
      p && U.delete(p);
    }
    const v = {
      message: a,
      error_type: m,
      source: o,
      lineno: d,
      colno: c,
      stack: l,
      url: typeof window < "u" ? window.location.href : void 0,
      user_agent: typeof navigator < "u" ? navigator.userAgent : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      extra: t || {}
    }, b = (s == null ? void 0 : s.endpoint) || Pe;
    typeof fetch < "u" && await fetch(b, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(v)
    }).catch(() => {
    });
  } catch {
  }
}
function ir(r) {
  r != null && r.endpoint && (Pe = r.endpoint), !(Ce || typeof window > "u") && (Ce = !0, window.addEventListener("error", (t) => {
    Ee(
      t.error || t.message,
      {
        source: t.filename,
        lineno: t.lineno,
        colno: t.colno,
        error_type: "WindowError"
      },
      r
    );
  }), window.addEventListener("unhandledrejection", (t) => {
    Ee(
      t.reason,
      {
        error_type: "UnhandledRejection"
      },
      r
    );
  }));
}
function or(r, t = {}) {
  const {
    currency: s = "$",
    locale: a = "en-NZ",
    maximumFractionDigits: l = 0,
    minimumFractionDigits: n = 0,
    showPlusSign: o = !1
  } = t, d = Number.isFinite(r) ? r : 0, c = Math.abs(d).toLocaleString(a, {
    minimumFractionDigits: n,
    maximumFractionDigits: l
  });
  return d < 0 ? `-${s}${c}` : o && d > 0 ? `+${s}${c}` : `${s}${c}`;
}
function dr(r = /* @__PURE__ */ new Date()) {
  var n, o, d;
  const t = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(r), s = ((n = t.find((c) => c.type === "year")) == null ? void 0 : n.value) ?? "1970", a = ((o = t.find((c) => c.type === "month")) == null ? void 0 : o.value) ?? "01", l = ((d = t.find((c) => c.type === "day")) == null ? void 0 : d.value) ?? "01";
  return `${s}-${a}-${l}`;
}
function cr(r = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(r);
}
class _e extends Error {
  constructor(s = "Authentik session expired", a) {
    super(s);
    G(this, "status");
    G(this, "contentType");
    G(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function mr(r) {
  return r instanceof _e || r instanceof Error && r.name === "SessionExpiredError";
}
function Nt(r) {
  const t = r.status, s = (r.headers.get("content-type") || "").toLowerCase(), a = r.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || r.redirected || s.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function kt(r) {
  if (Nt(r)) {
    const t = r.headers.get("content-type") || "";
    throw new _e(
      `Authentik session expired (status: ${r.status}, content-type: ${t})`,
      {
        status: r.status,
        contentType: t,
        url: r.url
      }
    );
  }
}
async function ur(r, t) {
  const { checkSessionExpiry: s = !0, ...a } = t || {}, l = await fetch(r, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return s && kt(l), l;
}
export {
  Ot as AiSynthesizerModal,
  lt as AlertBanner,
  Kt as AllowanceProgressBar,
  Tt as AppHeader,
  Mt as AppShell,
  Rt as BottomNav,
  Zt as BudgetProgressRow,
  A as Button,
  jt as ChipSelector,
  tr as CollapsibleSection,
  er as ConfirmActionBox,
  gt as DEFAULT_REST_TIMER_PRESETS,
  Yt as EmptyState,
  Lt as FileDropzone,
  Wt as GlassCard,
  qt as GoalProgressCard,
  Qt as LoadingState,
  Ft as MetricHero,
  Le as Modal,
  Xt as MultiSegmentBar,
  st as NumberInputDisplay,
  At as NumericKeypadModal,
  Pt as OptionCardGroup,
  It as PeriodFilterBar,
  rr as PwaUpdateBanner,
  _t as RangeSlider,
  nr as RestTimerBar,
  vt as SW_UPDATE_POLL_INTERVAL_MS,
  Dt as SearchInput,
  Gt as SectionHeader,
  dt as SegmentedControl,
  Ut as SelectableCard,
  ar as SessionExpiredBanner,
  _e as SessionExpiredError,
  Ht as StatCard,
  Vt as StatusBadge,
  Jt as SummaryMetricGrid,
  ee as THEME_ACTION_TEXT,
  re as THEME_ACTIVE_TAB,
  ae as THEME_BOTTOM_NAV_ACTIVE,
  te as THEME_BRAND_BADGE,
  I as THEME_BUTTON_VARIANT,
  q as THEME_CALLOUT_BOX,
  ne as THEME_DROPZONE_ACTIVE,
  H as THEME_FOCUS_BORDER,
  se as THEME_GLOW_BG,
  X as THEME_GOAL_GRADIENT,
  le as THEME_RING_SELECTED,
  K as THEME_SEGMENT_ACTIVE,
  j as THEME_TEXT_COLORS,
  Z as THEME_VALUE_COLORS,
  at as TactileKeypad,
  zt as TagPillList,
  kt as assertSessionNotExpired,
  ur as authFetch,
  V as clearBrowserCaches,
  dr as formatAucklandDate,
  cr as formatAucklandTime,
  or as formatCurrency,
  O as formatRestTime,
  ut as getAllowanceThresholdState,
  Bt as getDefaultCustomRange,
  ir as initGlobalErrorReporter,
  mr as isSessionExpiredError,
  Nt as isSessionExpiredResponse,
  bt as normalizeSegments,
  ct as normalizeTagToken,
  Ee as reportClientError,
  rt as resetClientCacheAndReload,
  ce as resetMobileViewportZoom,
  tt as unregisterServiceWorkers,
  lr as usePwaUpdate,
  sr as useRestTimer
};
//# sourceMappingURL=index.js.map
