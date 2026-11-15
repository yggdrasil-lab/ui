var Le = Object.defineProperty;
var _e = (r, t, s) => t in r ? Le(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var H = (r, t, s) => _e(r, typeof t != "symbol" ? t + "" : t, s);
import { jsxs as i, jsx as e, Fragment as we } from "react/jsx-runtime";
import Ne, { forwardRef as ke, createElement as J, useRef as _, useEffect as B, useState as M, useCallback as S } from "react";
import { createPortal as De } from "react-dom";
const j = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, V = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, Y = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, Q = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white"
}, ee = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow"
}, te = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, re = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, ae = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, se = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30"
}, W = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm"
}, G = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500"
}, Z = {
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
}, q = {
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
}, F = {
  amber: "amber",
  blue: "blue",
  emerald: "emerald",
  purple: "blue",
  slate: "secondary"
}, ht = ({
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
const je = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $e = (...r) => r.filter((t, s, a) => !!t && t.trim() !== "" && a.indexOf(t) === s).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pe = {
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
const Ie = ke(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: n,
    iconNode: o,
    ...d
  }, c) => J(
    "svg",
    {
      ref: c,
      ...Pe,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: a ? Number(s) * 24 / Number(t) : s,
      className: $e("lucide", l),
      ...d
    },
    [
      ...o.map(([m, u]) => J(m, u)),
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
const A = (r, t) => {
  const s = ke(
    ({ className: a, ...l }, n) => J(Ie, {
      ref: n,
      iconNode: t,
      className: $e(`lucide-${je(r)}`, a),
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
const ze = A("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = A("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = A("Delete", [
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
const Fe = A("FileText", [
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
const Ue = A("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = A("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = A("RefreshCw", [
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
const We = A("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = A("Sparkles", [
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
const ne = A("Timer", [
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
const Ee = A("TriangleAlert", [
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
const K = A("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ft = ({
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
  actions: g,
  className: b = ""
}) => {
  const p = s || Q[a] || Q.blue, y = c || ee[a] || ee.blue, h = j[a] || j.blue;
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
        o && o.length > 0 && /* @__PURE__ */ e("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: o.map((v) => {
          const w = d === v.id;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => m == null ? void 0 : m(v.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${w ? y : "text-slate-400 hover:text-slate-200"}`,
              children: [
                v.icon,
                /* @__PURE__ */ e("span", { children: v.label })
              ]
            },
            v.id
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          g,
          u && /* @__PURE__ */ e(
            "button",
            {
              onClick: u,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ e(
                Ve,
                {
                  className: `w-3.5 h-3.5 ${x ? `animate-spin ${h}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, gt = ({
  tabs: r,
  activeTab: t,
  onChangeTab: s,
  variant: a = "blue",
  activeTabClass: l,
  hideOnDesktop: n = !1,
  className: o = ""
}) => {
  const d = n ? "block lg:hidden" : "block", c = l || te[a] || te.blue;
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
}, Ze = ({
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
  }, x = n || Y[l] || Y.blue, g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", o ? "." : "", "0"];
  return /* @__PURE__ */ i("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${d}`, children: [
    g.map((b, p) => b ? /* @__PURE__ */ e(
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
        children: /* @__PURE__ */ e(Oe, { className: "w-5 h-5" })
      }
    )
  ] });
}, qe = ({
  label: r,
  value: t,
  unit: s,
  variant: a = "blue",
  valueColor: l,
  className: n = ""
}) => {
  const o = l || V[a] || V.blue;
  return /* @__PURE__ */ i("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ e("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: r }),
    /* @__PURE__ */ i("div", { className: `text-4xl font-black ${o} tracking-tight`, children: [
      t || "0",
      s && /* @__PURE__ */ e("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: s })
    ] })
  ] });
}, le = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover", Ke = "width=device-width, initial-scale=1.0, viewport-fit=cover";
function ie() {
  if (typeof document > "u" || typeof window > "u")
    return;
  const r = document.activeElement;
  typeof HTMLElement < "u" && r instanceof HTMLElement && r.blur();
  const t = document.querySelector('meta[name="viewport"]');
  t && ((t.getAttribute("content") ?? "") === le && t.setAttribute("content", Ke), t.setAttribute("content", le)), window.scrollTo({ left: 0, top: window.scrollY });
}
const Te = ({
  isOpen: r,
  onClose: t,
  title: s,
  subtitle: a,
  headerIcon: l,
  disableClose: n = !1,
  children: o,
  className: d = ""
}) => {
  const c = _(!1);
  if (B(() => (r ? (c.current = !0, document.body.style.overflow = "hidden") : (document.body.style.overflow = "", c.current && (c.current = !1, ie())), () => {
    document.body.style.overflow = "";
  }), [r]), B(() => () => {
    c.current && (c.current = !1, ie());
  }, []), B(() => {
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
                  children: /* @__PURE__ */ e(K, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: o })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? De(m, document.body) : m;
}, oe = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, de = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, Xe = ({
  variant: r = "info",
  title: t,
  children: s,
  icon: a,
  action: l,
  role: n = "alert",
  className: o = ""
}) => {
  const d = oe[r] || oe.info, c = de[r] || de.info;
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
}, Je = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, Ye = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, D = Ne.forwardRef(
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
  }, g) => /* @__PURE__ */ i(
    "button",
    {
      ref: g,
      type: u,
      disabled: c || n,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${Je[t]} ${Ye[s]} ${d ? "w-full" : ""} ${m}`,
      ...x,
      children: [
        n ? /* @__PURE__ */ e(Ce, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && l === "left" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ e("span", { children: n && o ? o : r }),
        !n && a && l === "right" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
D.displayName = "Button";
const vt = ({
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
  loadingText: g = "Saving...",
  submitDisabled: b = !1,
  allowDecimals: p = !0,
  maxDecimalPlaces: y = 2,
  variant: h = "blue",
  error: v,
  children: w
}) => {
  const T = F[h] || F.blue;
  return /* @__PURE__ */ e(
    Te,
    {
      isOpen: r,
      onClose: t,
      title: s,
      subtitle: a,
      disableClose: x,
      children: /* @__PURE__ */ i("div", { className: "space-y-4", children: [
        v && /* @__PURE__ */ e(Xe, { variant: "error", icon: "⚠️", children: v }),
        /* @__PURE__ */ e(
          qe,
          {
            label: l,
            value: o !== void 0 ? o : n || "0",
            unit: d,
            variant: h
          }
        ),
        w,
        /* @__PURE__ */ e(
          Ze,
          {
            value: n,
            onChange: c,
            allowDecimals: p,
            maxDecimalPlaces: y,
            variant: h
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            variant: T,
            size: "lg",
            fullWidth: !0,
            loading: x,
            loadingText: g,
            disabled: b,
            onClick: m,
            children: u
          }
        )
      ] })
    }
  );
}, yt = ({
  value: r,
  onChange: t,
  placeholder: s = "Search...",
  variant: a = "amber",
  rightSlot: l,
  className: n = "",
  "data-testid": o
}) => {
  const d = G[a] || G.amber;
  return /* @__PURE__ */ i("div", { className: `flex items-center gap-2 ${n}`, children: [
    /* @__PURE__ */ i("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ e(We, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
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
          children: /* @__PURE__ */ e(K, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
  ] });
}, wt = ({
  file: r,
  onFileChange: t,
  acceptedFormats: s = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: l = "Supports official PDF and CSV documents",
  variant: n = "amber",
  className: o = "",
  children: d
}) => {
  const [c, m] = M(!1), u = Ne.useId(), x = (h) => {
    h.preventDefault(), h.stopPropagation(), h.type === "dragenter" || h.type === "dragover" ? m(!0) : h.type === "dragleave" && m(!1);
  }, g = (h) => {
    h.preventDefault(), h.stopPropagation(), m(!1), h.dataTransfer.files && h.dataTransfer.files[0] && t(h.dataTransfer.files[0]);
  }, b = (h) => {
    h.target.files && h.target.files[0] && t(h.target.files[0]);
  }, p = ae[n] || ae.amber, y = j[n] || j.amber;
  return /* @__PURE__ */ i(
    "div",
    {
      onDragEnter: x,
      onDragOver: x,
      onDragLeave: x,
      onDrop: g,
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
          /* @__PURE__ */ e(Fe, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-slate-300 font-medium", children: r ? /* @__PURE__ */ i("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ e("span", { className: `${y} font-semibold truncate max-w-[240px]`, children: r.name }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: (h) => {
                  h.preventDefault(), h.stopPropagation(), t(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ e(K, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ i(we, { children: [
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
}, ce = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, Nt = ({
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
  const u = ce[d] || ce.amber, x = c === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", g = (b) => {
    if (n) {
      const p = s.includes(b) ? s.filter((y) => y !== b) : [...s, b];
      l && l(p), a && a(b);
    } else a && a(b);
  };
  return /* @__PURE__ */ e("div", { className: `flex ${o ? "w-full gap-2" : "flex-wrap gap-1.5"} ${m}`, children: r.map((b) => {
    const p = typeof b == "string" ? b : b.value, y = typeof b == "string" ? b : b.label, h = n ? s.includes(p) : t === p;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => g(p),
        className: `${x} ${o ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${h ? u : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: y
      },
      p
    );
  }) });
}, me = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function kt({
  label: r,
  options: t,
  value: s,
  onChange: a,
  className: l = ""
}) {
  return /* @__PURE__ */ i("div", { className: `space-y-2 ${l}`, children: [
    r && /* @__PURE__ */ e("label", { className: "block font-semibold text-sm text-slate-200", children: r }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((n) => {
      const o = s === n.value, d = n.accent || "blue", c = me[d] || me.blue;
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
const ue = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, $t = ({
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
  className: g = ""
}) => {
  const b = ue[x] || ue.amber;
  return /* @__PURE__ */ i("div", { className: `space-y-1 ${g}`, children: [
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
}, be = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function Ct({
  options: r,
  value: t,
  onChange: s,
  variant: a = "amber",
  size: l = "xs",
  fullWidth: n = !1,
  className: o = "",
  idPrefix: d = "segmented"
}) {
  const c = W[a] || W.amber, m = be[l] || be.xs;
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
const Et = ({
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
  submittingLabel: g = "Synthesizing...",
  errorFallbackMessage: b = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: p = "blue",
  onSynthesize: y
}) => {
  const [h, v] = M(""), [w, T] = M(!1), [C, E] = M(null), L = async () => {
    T(!0), E(null);
    try {
      await y(h.trim() || void 0), v(""), t();
    } catch {
      E(b);
    } finally {
      T(!1);
    }
  }, P = Z[p] || Z.blue, f = G[p] || G.blue, N = F[p] || F.blue;
  return /* @__PURE__ */ e(
    Te,
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
          d.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: d.map((R, O) => /* @__PURE__ */ i("li", { children: [
            /* @__PURE__ */ i("strong", { className: "text-slate-100", children: [
              R.label,
              ":"
            ] }),
            " ",
            R.description
          ] }, O)) })
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs font-semibold text-slate-200", children: c }),
          /* @__PURE__ */ e(
            "textarea",
            {
              rows: u,
              value: h,
              onChange: (R) => v(R.target.value),
              disabled: w,
              placeholder: m,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-base sm:text-xs placeholder-slate-500 focus:outline-none ${f} resize-y`
            }
          )
        ] }),
        C && /* @__PURE__ */ e("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: C }),
        /* @__PURE__ */ i("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ e(
            D,
            {
              variant: "secondary",
              size: "md",
              onClick: t,
              disabled: w,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              variant: N,
              size: "md",
              loading: w,
              loadingText: g,
              icon: /* @__PURE__ */ e("span", { children: "⚡" }),
              onClick: L,
              children: x
            }
          )
        ] })
      ] })
    }
  );
}, Tt = ({
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
  const [g, b] = M(!1), p = (w = "blue") => {
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
  }, y = a !== void 0 && l !== void 0, h = c || j[d] || j.blue, v = m || re[d] || re.blue;
  return /* @__PURE__ */ i("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${x}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${v} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: r }),
      o && /* @__PURE__ */ i("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${p(o.variant)}`, children: [
        o.icon || /* @__PURE__ */ e(Ge, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ e("span", { children: o.label })
      ] })
    ] }),
    /* @__PURE__ */ i(
      "div",
      {
        className: `text-center my-6 ${y ? "cursor-pointer select-none" : ""}`,
        onClick: () => y && b(!g),
        children: [
          /* @__PURE__ */ i("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            g ? a : t,
            /* @__PURE__ */ e("span", { className: `text-2xl font-semibold ${h} ml-2`, children: g ? l : s })
          ] }),
          n && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    u
  ] });
}, Qe = {
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
}, St = ({
  title: r,
  value: t,
  subtitle: s,
  icon: a,
  variant: l = "default",
  className: n = "",
  onClick: o
}) => {
  const d = Qe[l], c = !!o;
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
}, Mt = ({
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
  "data-testid": g
}) => {
  const b = se[u] || se.amber, p = n === "positive" ? "text-emerald-400" : n === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      "data-testid": g,
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
}, pe = {
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
}, Rt = ({
  label: r,
  variant: t = "idle",
  icon: s,
  isPulsing: a = !1,
  className: l = ""
}) => {
  const n = pe[t] || pe.idle;
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
}, At = ({
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
);
function et(r, t) {
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
const Lt = ({
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
  const { percent: u, remaining: x, barColor: g, percentTextColor: b } = et(
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
          className: `h-full transition-all duration-500 rounded-full ${g}`,
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
            /* @__PURE__ */ e(ze, { className: `w-3.5 h-3.5 mr-1 ${d.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ e("span", { children: d.label })
          ]
        }
      )
    ] })
  ] });
}, _t = ({
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
  const g = Math.min(100, Math.max(0, Math.round(o))), b = q[u] || q.blue;
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
            style: { width: `${g}%` }
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
function tt(r) {
  const t = r.map((a) => ({
    ...a,
    value: Math.max(0, Number(a.value) || 0)
  })), s = t.reduce((a, l) => a + l.value, 0);
  return s <= 0 ? [] : t.map((a) => ({
    ...a,
    widthPct: a.value / s * 100
  }));
}
const Dt = ({
  segments: r,
  showLegend: t = !0,
  heightClass: s = "h-2.5",
  className: a = ""
}) => {
  const l = tt(r);
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
}, xe = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, jt = ({
  items: r,
  columns: t = 3,
  className: s = ""
}) => {
  const a = xe[t] || xe[3];
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
}, he = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, Pt = ({
  title: r,
  description: t,
  icon: s,
  action: a,
  variant: l = "dashed",
  className: n = ""
}) => {
  const o = he[l] || he.dashed;
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
}, It = ({
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
        /* @__PURE__ */ e(Ce, { className: `w-6 h-6 animate-spin ${a}` }),
        r && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-slate-400", children: r })
      ]
    }
  );
}, fe = {
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
}, zt = ({
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
  const m = fe[d] || fe.danger;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${m.container} ${c}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ e(Ee, { className: `w-4 h-4 shrink-0 mt-0.5 ${m.icon}` }),
          /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("div", { className: `text-xs font-semibold ${m.title}`, children: r }),
            t && /* @__PURE__ */ e("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: t })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ e(
            D,
            {
              variant: "secondary",
              size: "xs",
              onClick: n,
              disabled: o,
              children: a
            }
          ),
          /* @__PURE__ */ e(
            D,
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
}, Bt = ({
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
}, Ot = ({
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
), Ft = ({
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
          a ? /* @__PURE__ */ e("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ e(Ee, { className: "w-5 h-5 text-rose-400 shrink-0" }),
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
}, Se = 90, rt = 250;
function z(r) {
  const t = Number.isFinite(r) ? Math.max(0, Math.floor(r)) : 0, s = Math.floor(t / 60), a = t % 60;
  return `${s}:${a.toString().padStart(2, "0")}`;
}
function ge(r, t = Se) {
  return !Number.isFinite(r) || r <= 0 ? t : Math.max(1, Math.round(r));
}
function X(r, t = Date.now()) {
  return Math.max(0, Math.ceil((r - t) / 1e3));
}
function at() {
  var r;
  try {
    typeof navigator < "u" && ((r = navigator.vibrate) == null || r.call(navigator, [200, 100, 200]));
  } catch {
  }
}
function st() {
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
function nt() {
  at(), st();
}
function Ut(r = Se) {
  const t = ge(r), [s, a] = M(t), [l, n] = M(0), [o, d] = M(0), [c, m] = M(!1), [u, x] = M(!1), [g, b] = M(!1), p = _(null), y = _(0), h = _(t), v = _(!1), w = _(!1), T = _(!1), C = _(!1), E = S((k) => {
    p.current = null, y.current = 0, v.current = !1, w.current = !1, T.current = !0, d(0), m(!1), x(!1), b(!0), k && !C.current && (C.current = !0, nt());
  }, []), L = S(() => {
    const k = p.current;
    if (k === null || !v.current)
      return;
    const $ = X(k);
    $ <= 0 ? E(!0) : d($);
  }, [E]);
  B(() => {
    if (!c || typeof window > "u" || typeof document > "u")
      return;
    L();
    const k = window.setInterval(L, rt), $ = () => {
      document.visibilityState === "visible" && L();
    };
    return document.addEventListener("visibilitychange", $), () => {
      window.clearInterval(k), document.removeEventListener("visibilitychange", $);
    };
  }, [c, L]);
  const P = S((k) => {
    const $ = k !== void 0 ? ge(k, h.current) : h.current;
    k !== void 0 && (h.current = $, a($)), p.current = Date.now() + $ * 1e3, y.current = $, v.current = !0, w.current = !1, T.current = !1, C.current = !1, n($), d($), m(!0), x(!1), b(!1);
  }, []), f = S(() => {
    if (!v.current || p.current === null)
      return;
    const k = X(p.current);
    if (k <= 0) {
      E(!0);
      return;
    }
    p.current = null, y.current = k, v.current = !1, w.current = !0, T.current = !1, d(k), m(!1), x(!0), b(!1);
  }, [E]), N = S(() => {
    if (!w.current || v.current)
      return;
    const k = y.current;
    if (k <= 0) {
      E(!0);
      return;
    }
    p.current = Date.now() + k * 1e3, v.current = !0, w.current = !1, T.current = !1, d(k), m(!0), x(!1), b(!1);
  }, [E]), R = S(
    (k) => {
      if (!(!Number.isFinite(k) || k === 0)) {
        if (v.current && p.current !== null) {
          const $ = p.current + k * 1e3, I = X($);
          if (I <= 0) {
            E(!0);
            return;
          }
          p.current = $, y.current = I, d(I), n((Ae) => Math.max(Ae, I));
          return;
        }
        if (w.current) {
          const $ = Math.max(0, y.current + Math.round(k));
          if ($ <= 0) {
            E(!0);
            return;
          }
          y.current = $, d($), n((I) => Math.max(I, $));
          return;
        }
        if (T.current && k > 0) {
          const $ = Math.max(1, Math.round(k));
          p.current = Date.now() + $ * 1e3, y.current = $, v.current = !0, w.current = !1, T.current = !1, C.current = !1, d($), n((I) => Math.max(I, $)), m(!0), x(!1), b(!1);
        }
      }
    },
    [E]
  ), O = S(() => {
    p.current = null, y.current = 0, v.current = !1, w.current = !1, T.current = !1, C.current = !1, d(0), n(0), m(!1), x(!1), b(!1);
  }, []);
  return {
    remainingSeconds: o,
    totalSeconds: l,
    isRunning: c,
    isPaused: u,
    isComplete: g,
    activePresetSeconds: s,
    startTimer: P,
    pauseTimer: f,
    resumeTimer: N,
    adjustTimer: R,
    dismissTimer: O
  };
}
const lt = [60, 90, 120, 180], Ht = ({
  remainingSeconds: r,
  totalSeconds: t,
  isRunning: s,
  isPaused: a,
  isComplete: l,
  presets: n = lt,
  onStart: o,
  onPause: d,
  onResume: c,
  onAdjust: m,
  onDismiss: u,
  variant: x = "blue",
  className: g = ""
}) => {
  const b = j[x] || j.blue, p = V[x] || V.blue, y = Z[x] || Z.blue, h = W[x] || W.blue, v = q[x] || q.blue, w = F[x] || F.blue;
  if (!s && !a && !l)
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "rest-timer-bar",
        className: `glass-panel bg-card/90 backdrop-blur-md border border-border rounded-2xl px-3.5 py-2.5 shadow-lg flex flex-wrap items-center justify-between gap-2 ${g}`,
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e("span", { className: `p-1.5 rounded-lg border shrink-0 ${y.container}`, children: /* @__PURE__ */ e(ne, { className: `w-4 h-4 ${b}` }) }),
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-slate-200 whitespace-nowrap", children: "Rest Timer" })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex items-center gap-1.5 flex-wrap", children: n.map((N) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => o(N),
              "aria-label": `Start ${z(N)} rest timer`,
              className: "px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95",
              children: z(N)
            },
            N
          )) })
        ]
      }
    );
  const C = t > 0 ? t : 0, E = Math.max(0, r), L = l ? 100 : C > 0 ? Math.min(100, Math.max(0, Math.round((C - E) / C * 100))) : 0, P = l ? "border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20" : a ? "border-amber-500/40 bg-slate-900/95" : "border-border bg-slate-900/95", f = l ? "bg-emerald-400" : a ? "bg-amber-400" : `bg-gradient-to-r ${v.bar}`;
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": "rest-timer-bar",
      role: "region",
      "aria-label": "Rest timer",
      className: `glass-panel backdrop-blur-md border rounded-2xl p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up ${P} ${g}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5 min-w-0", children: [
            l ? /* @__PURE__ */ e(Be, { className: "w-5 h-5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ e(
              ne,
              {
                className: `w-5 h-5 shrink-0 ${b} ${s ? "animate-pulse" : ""}`
              }
            ),
            /* @__PURE__ */ e("div", { className: "min-w-0", children: l ? /* @__PURE__ */ i(we, { children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-bold text-emerald-300 leading-snug", children: "Rest Complete - Ready for next set" }),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": "rest-timer-countdown",
                  className: "text-lg font-black tabular-nums text-emerald-400 leading-tight",
                  children: z(E)
                }
              )
            ] }) : /* @__PURE__ */ i("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  "data-testid": "rest-timer-countdown",
                  className: `text-2xl font-black tabular-nums tracking-tight leading-none ${a ? "text-amber-300" : p}`,
                  children: z(E)
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-slate-400 whitespace-nowrap", children: a ? "Paused" : C > 0 ? `of ${z(C)}` : "Rest" })
            ] }) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            !l && (s ? /* @__PURE__ */ e(
              D,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ e(Ue, { className: "w-3.5 h-3.5" }),
                onClick: d,
                "aria-label": "Pause rest timer",
                children: "Pause"
              }
            ) : /* @__PURE__ */ e(
              D,
              {
                variant: w,
                size: "xs",
                icon: /* @__PURE__ */ e(He, { className: "w-3.5 h-3.5" }),
                onClick: c,
                "aria-label": "Resume rest timer",
                children: "Resume"
              }
            )),
            /* @__PURE__ */ e(
              D,
              {
                variant: l ? "emerald" : "ghost",
                size: "xs",
                icon: /* @__PURE__ */ e(K, { className: "w-3.5 h-3.5" }),
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
            "aria-valuenow": L,
            "aria-label": "Rest progress",
            className: "h-2 w-full bg-background/90 rounded-full overflow-hidden border border-border/50",
            children: /* @__PURE__ */ e(
              "div",
              {
                className: `h-full rounded-full transition-all duration-300 ease-linear ${f}`,
                style: { width: `${L}%` }
              }
            )
          }
        ),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              D,
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
              D,
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
          /* @__PURE__ */ e("div", { className: "flex items-center gap-1 flex-wrap", children: n.map((N) => {
            const R = !l && t === N;
            return /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => o(N),
                "aria-label": `Restart ${z(N)} rest timer`,
                className: `px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${R ? h : "bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200"}`,
                children: z(N)
              },
              N
            );
          }) })
        ] })
      ]
    }
  );
}, it = 60 * 60 * 1e3;
function Vt(r = {}) {
  const {
    pollIntervalMs: t = it,
    externalNeedRefresh: s,
    onExternalNeedRefreshChange: a,
    updateServiceWorker: l,
    registration: n
  } = r, o = _(
    n ?? void 0
  ), d = _(!1), c = _(void 0), [m, u] = M(!1), [x, g] = M(!1), [b, p] = M(null), y = s ?? m, h = S(
    (f) => {
      u(f), a == null || a(f);
    },
    [a]
  );
  B(() => {
    n && (o.current = n, n.waiting && h(!0));
  }, [n, h]);
  const v = S((f) => {
    p(f), c.current !== void 0 && typeof window < "u" && window.clearTimeout(c.current), typeof window < "u" && (c.current = window.setTimeout(() => {
      p(null);
    }, 3500));
  }, []), w = S(async () => {
    if (o.current)
      return o.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const f = await navigator.serviceWorker.getRegistration();
      if (f)
        return o.current = f, f;
    }
  }, []), T = S(
    async (f) => {
      if (await f.update(), f.waiting)
        return h(!0), !0;
      if (f.installing) {
        const N = f.installing;
        if (await new Promise((R) => {
          const O = () => {
            (N.state === "installed" || N.state === "activated" || N.state === "redundant") && (N.removeEventListener("statechange", O), R());
          };
          N.addEventListener("statechange", O);
        }), f.waiting)
          return h(!0), !0;
      }
      return !1;
    },
    [h]
  ), C = S(async () => {
    try {
      const f = await w();
      if (!f) return;
      await T(f);
    } catch {
    }
  }, [w, T]), E = S(async () => {
    g(!0), p(null);
    try {
      const f = await w();
      if (!f) {
        v("Up to date");
        return;
      }
      const N = await T(f);
      v(N ? "Update ready" : "Up to date");
    } catch {
      v("Update check failed");
    } finally {
      g(!1);
    }
  }, [w, T, v]), L = S(async () => {
    d.current = !0;
    const f = await w();
    f != null && f.waiting && f.waiting.postMessage({ type: "SKIP_WAITING" }), l ? await l(!0) : typeof window < "u" && window.location.reload();
  }, [w, l]), P = S(() => {
    h(!1);
  }, [h]);
  return B(() => {
    if (typeof window > "u" || typeof document > "u") return;
    C();
    const f = () => {
      document.visibilityState === "visible" && C();
    };
    document.addEventListener("visibilitychange", f);
    const N = window.setInterval(() => {
      C();
    }, t);
    return () => {
      document.removeEventListener("visibilitychange", f), window.clearInterval(N), c.current !== void 0 && window.clearTimeout(c.current);
    };
  }, [C, t]), B(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let f = !1;
    const N = navigator.serviceWorker.controller !== null, R = () => {
      !d.current && !N || f || (f = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", R), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", R);
    };
  }, []), {
    needRefresh: y,
    checkingForUpdate: x,
    updateCheckMessage: b,
    checkForUpdates: E,
    applyUpdate: L,
    dismissUpdate: P
  };
}
const ot = "/api/client-errors", dt = 25, U = /* @__PURE__ */ new Set();
let Me = ot, ve = !1;
async function ye(r, t, s) {
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
    const x = (s == null ? void 0 : s.maxRecentErrors) ?? dt;
    if (U.size > x) {
      const p = U.values().next().value;
      p && U.delete(p);
    }
    const g = {
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
    }, b = (s == null ? void 0 : s.endpoint) || Me;
    typeof fetch < "u" && await fetch(b, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    }).catch(() => {
    });
  } catch {
  }
}
function Wt(r) {
  r != null && r.endpoint && (Me = r.endpoint), !(ve || typeof window > "u") && (ve = !0, window.addEventListener("error", (t) => {
    ye(
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
    ye(
      t.reason,
      {
        error_type: "UnhandledRejection"
      },
      r
    );
  }));
}
function Gt(r, t = {}) {
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
function Zt(r = /* @__PURE__ */ new Date()) {
  var n, o, d;
  const t = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(r), s = ((n = t.find((c) => c.type === "year")) == null ? void 0 : n.value) ?? "1970", a = ((o = t.find((c) => c.type === "month")) == null ? void 0 : o.value) ?? "01", l = ((d = t.find((c) => c.type === "day")) == null ? void 0 : d.value) ?? "01";
  return `${s}-${a}-${l}`;
}
function qt(r = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(r);
}
class Re extends Error {
  constructor(s = "Authentik session expired", a) {
    super(s);
    H(this, "status");
    H(this, "contentType");
    H(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function Kt(r) {
  return r instanceof Re || r instanceof Error && r.name === "SessionExpiredError";
}
function ct(r) {
  const t = r.status, s = (r.headers.get("content-type") || "").toLowerCase(), a = r.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || r.redirected || s.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function mt(r) {
  if (ct(r)) {
    const t = r.headers.get("content-type") || "";
    throw new Re(
      `Authentik session expired (status: ${r.status}, content-type: ${t})`,
      {
        status: r.status,
        contentType: t,
        url: r.url
      }
    );
  }
}
async function Xt(r, t) {
  const { checkSessionExpiry: s = !0, ...a } = t || {}, l = await fetch(r, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return s && mt(l), l;
}
export {
  Et as AiSynthesizerModal,
  Xe as AlertBanner,
  Lt as AllowanceProgressBar,
  ft as AppHeader,
  ht as AppShell,
  gt as BottomNav,
  D as Button,
  Nt as ChipSelector,
  Bt as CollapsibleSection,
  zt as ConfirmActionBox,
  lt as DEFAULT_REST_TIMER_PRESETS,
  Pt as EmptyState,
  wt as FileDropzone,
  At as GlassCard,
  _t as GoalProgressCard,
  It as LoadingState,
  Tt as MetricHero,
  Te as Modal,
  Dt as MultiSegmentBar,
  qe as NumberInputDisplay,
  vt as NumericKeypadModal,
  kt as OptionCardGroup,
  Ot as PwaUpdateBanner,
  $t as RangeSlider,
  Ht as RestTimerBar,
  it as SW_UPDATE_POLL_INTERVAL_MS,
  yt as SearchInput,
  Ct as SegmentedControl,
  Mt as SelectableCard,
  Ft as SessionExpiredBanner,
  Re as SessionExpiredError,
  St as StatCard,
  Rt as StatusBadge,
  jt as SummaryMetricGrid,
  Y as THEME_ACTION_TEXT,
  ee as THEME_ACTIVE_TAB,
  te as THEME_BOTTOM_NAV_ACTIVE,
  Q as THEME_BRAND_BADGE,
  F as THEME_BUTTON_VARIANT,
  Z as THEME_CALLOUT_BOX,
  ae as THEME_DROPZONE_ACTIVE,
  G as THEME_FOCUS_BORDER,
  re as THEME_GLOW_BG,
  q as THEME_GOAL_GRADIENT,
  se as THEME_RING_SELECTED,
  W as THEME_SEGMENT_ACTIVE,
  j as THEME_TEXT_COLORS,
  V as THEME_VALUE_COLORS,
  Ze as TactileKeypad,
  mt as assertSessionNotExpired,
  Xt as authFetch,
  Zt as formatAucklandDate,
  qt as formatAucklandTime,
  Gt as formatCurrency,
  z as formatRestTime,
  et as getAllowanceThresholdState,
  Wt as initGlobalErrorReporter,
  Kt as isSessionExpiredError,
  ct as isSessionExpiredResponse,
  tt as normalizeSegments,
  ye as reportClientError,
  ie as resetMobileViewportZoom,
  Vt as usePwaUpdate,
  Ut as useRestTimer
};
//# sourceMappingURL=index.js.map
