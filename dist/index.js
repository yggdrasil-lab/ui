var z = Object.defineProperty;
var R = (e, t, r) => t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var y = (e, t, r) => R(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as o, jsx as s } from "react/jsx-runtime";
import { forwardRef as E, createElement as N, useEffect as V, useState as D } from "react";
const U = ({
  header: e,
  bottomNav: t,
  children: r,
  className: a = ""
}) => /* @__PURE__ */ o("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  e,
  /* @__PURE__ */ s("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: r }),
  t
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), L = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var q = {
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
const H = E(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: n,
    iconNode: i,
    ...c
  }, x) => N(
    "svg",
    {
      ref: x,
      ...q,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: L("lucide", l),
      ...c
    },
    [
      ...i.map(([d, m]) => N(d, m)),
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
const g = (e, t) => {
  const r = E(
    ({ className: a, ...l }, n) => N(H, {
      ref: n,
      iconNode: t,
      className: L(`lucide-${W(e)}`, a),
      ...l
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = g("Delete", [
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
const F = g("RefreshCw", [
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
const I = g("Sparkles", [
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
const K = g("TriangleAlert", [
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
const X = g("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), $ = {
  amber: {
    brand: "bg-amber-500 text-slate-950",
    activeTab: "bg-amber-500 text-slate-950 shadow",
    spinner: "text-amber-400"
  },
  blue: {
    brand: "bg-blue-600 text-white",
    activeTab: "bg-blue-600 text-white shadow",
    spinner: "text-blue-400"
  },
  emerald: {
    brand: "bg-emerald-500 text-slate-950",
    activeTab: "bg-emerald-500 text-slate-950 shadow",
    spinner: "text-emerald-400"
  },
  purple: {
    brand: "bg-purple-600 text-white",
    activeTab: "bg-purple-600 text-white shadow",
    spinner: "text-purple-400"
  },
  slate: {
    brand: "bg-slate-700 text-white",
    activeTab: "bg-slate-200 text-slate-950 shadow",
    spinner: "text-slate-300"
  }
}, Y = ({
  brandInitial: e,
  brandIcon: t,
  brandColor: r,
  variant: a = "blue",
  title: l,
  subtitle: n,
  tabs: i,
  activeTab: c,
  activeTabClass: x,
  onChangeTab: d,
  onRefresh: m,
  isRefreshing: f = !1,
  actions: p,
  className: b = ""
}) => {
  const u = $[a] || $.blue, v = r || u.brand, w = x || u.activeTab;
  return /* @__PURE__ */ s(
    "header",
    {
      className: `border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full pt-safe ${b}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ o("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-3", children: [
          (e || t) && /* @__PURE__ */ s("div", { className: `w-8 h-8 rounded-xl ${v} flex items-center justify-center font-black text-sm shadow-md`, children: t || e }),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ s("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: l }),
            n && /* @__PURE__ */ s("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: n })
          ] })
        ] }),
        i && i.length > 0 && /* @__PURE__ */ s("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: i.map((h) => {
          const k = c === h.id;
          return /* @__PURE__ */ o(
            "button",
            {
              onClick: () => d == null ? void 0 : d(h.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${k ? w : "text-slate-400 hover:text-slate-200"}`,
              children: [
                h.icon,
                /* @__PURE__ */ s("span", { children: h.label })
              ]
            },
            h.id
          );
        }) }),
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
          p,
          m && /* @__PURE__ */ s(
            "button",
            {
              onClick: m,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ s(
                F,
                {
                  className: `w-3.5 h-3.5 ${f ? `animate-spin ${u.spinner}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, C = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, _ = ({
  tabs: e,
  activeTab: t,
  onChangeTab: r,
  variant: a = "blue",
  activeTabClass: l,
  hideOnDesktop: n = !1,
  className: i = ""
}) => {
  const c = n ? "block lg:hidden" : "block", x = l || C[a] || C.blue;
  return /* @__PURE__ */ s(
    "nav",
    {
      className: `${c} fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${i}`,
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
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "max-w-lg mx-auto grid gap-1 p-2",
          style: { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` },
          children: e.map((d) => {
            const m = t === d.id;
            return /* @__PURE__ */ o(
              "button",
              {
                onClick: () => r(d.id),
                className: `bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${m ? x : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": d.ariaLabel || d.label,
                children: [
                  /* @__PURE__ */ o("div", { className: "relative flex items-center justify-center", children: [
                    d.icon,
                    d.badgeDot && /* @__PURE__ */ s(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s("span", { className: "text-[10px] truncate max-w-full", children: d.label })
                ]
              },
              d.id
            );
          })
        }
      )
    }
  );
}, S = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, ee = ({
  value: e,
  onChange: t,
  onClear: r,
  maxDecimalPlaces: a = 2,
  variant: l = "blue",
  actionColor: n,
  allowDecimals: i = !0,
  className: c = ""
}) => {
  const x = (b) => {
    if (b === ".") {
      if (!i || e.includes(".")) return;
      t(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const u = e.split(".");
      if (u[1] && u[1].length >= a) return;
    }
    t(e === "0" ? b : e + b);
  }, d = () => {
    e.length <= 1 ? t("") : t(e.slice(0, -1));
  }, m = () => {
    r ? r() : t("");
  }, f = n || S[l] || S.blue, p = ["1", "2", "3", "4", "5", "6", "7", "8", "9", i ? "." : "", "0"];
  return /* @__PURE__ */ o("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${c}`, children: [
    p.map((b, u) => b ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: () => x(b),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: b
      },
      b
    ) : /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${f} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${u}`
    )),
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: d,
        onDoubleClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${f} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ s(P, { className: "w-5 h-5" })
      }
    )
  ] });
}, j = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, te = ({
  label: e,
  value: t,
  unit: r,
  variant: a = "blue",
  valueColor: l,
  className: n = ""
}) => {
  const i = l || j[a] || j.blue;
  return /* @__PURE__ */ o("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ s("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ o("div", { className: `text-4xl font-black ${i} tracking-tight`, children: [
      t || "0",
      r && /* @__PURE__ */ s("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: r })
    ] })
  ] });
}, re = ({
  isOpen: e,
  onClose: t,
  title: r,
  children: a,
  className: l = ""
}) => (V(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [e]), e ? /* @__PURE__ */ s("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ o(
  "div",
  {
    className: `w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up ${l}`,
    style: {
      paddingBottom: "env(safe-area-inset-bottom, 0px)"
    },
    children: [
      /* @__PURE__ */ o("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/80", children: [
        r ? /* @__PURE__ */ s("h2", { className: "text-base font-bold text-slate-100", children: r }) : /* @__PURE__ */ s("div", {}),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: t,
            className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ s(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: a })
    ]
  }
) }) : null), A = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, M = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, ae = ({
  title: e,
  primaryValue: t,
  primaryUnit: r,
  secondaryValue: a,
  secondaryUnit: l,
  toggleHint: n,
  badge: i,
  variant: c = "blue",
  unitColor: x,
  glowColor: d,
  children: m,
  className: f = ""
}) => {
  const [p, b] = D(!1), u = (k = "blue") => {
    switch (k) {
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
  }, v = a !== void 0 && l !== void 0, w = x || A[c] || A.blue, h = d || M[c] || M.blue;
  return /* @__PURE__ */ o("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${f}`, children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${h} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ s("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      i && /* @__PURE__ */ o("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${u(i.variant)}`, children: [
        i.icon || /* @__PURE__ */ s(I, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ s("span", { children: i.label })
      ] })
    ] }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `text-center my-6 ${v ? "cursor-pointer select-none" : ""}`,
        onClick: () => v && b(!p),
        children: [
          /* @__PURE__ */ o("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            p ? a : t,
            /* @__PURE__ */ s("span", { className: `text-2xl font-semibold ${w} ml-2`, children: p ? l : r })
          ] }),
          n && /* @__PURE__ */ s("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    m
  ] });
}, B = {
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
}, se = ({
  label: e,
  variant: t = "idle",
  icon: r,
  isPulsing: a = !1,
  className: l = ""
}) => {
  const n = B[t] || B.idle;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${n.bg} ${l}`,
      children: [
        r ? /* @__PURE__ */ s("span", { className: "mr-1.5 shrink-0 flex items-center", children: r }) : /* @__PURE__ */ s("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${n.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ s("span", { className: "truncate", children: e })
      ]
    }
  );
}, le = ({
  children: e,
  className: t = "",
  onClick: r,
  hoverGlow: a = !1
}) => /* @__PURE__ */ s(
  "div",
  {
    onClick: r,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!r ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${t}`,
    children: e
  }
), ne = ({
  message: e = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: r = "Later",
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
      /* @__PURE__ */ s("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: a,
            className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all",
            children: t
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: l,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: r
          }
        )
      ] })
    ]
  }
), oe = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: r,
  icon: a,
  className: l = "",
  testId: n = "session-expired-banner"
}) => {
  const i = (c) => {
    c && c.stopPropagation(), r ? r() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": n,
      onClick: i,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${l}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ s("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ s(K, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ s("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: i,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: t
          }
        )
      ]
    }
  );
};
class T extends Error {
  constructor(r = "Authentik session expired", a) {
    super(r);
    y(this, "status");
    y(this, "contentType");
    y(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function ie(e) {
  return e instanceof T || e instanceof Error && e.name === "SessionExpiredError";
}
function G(e) {
  const t = e.status, r = (e.headers.get("content-type") || "").toLowerCase(), a = e.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || e.redirected || r.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function O(e) {
  if (G(e)) {
    const t = e.headers.get("content-type") || "";
    throw new T(
      `Authentik session expired (status: ${e.status}, content-type: ${t})`,
      {
        status: e.status,
        contentType: t,
        url: e.url
      }
    );
  }
}
async function de(e, t) {
  const { checkSessionExpiry: r = !0, ...a } = t || {}, l = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return r && O(l), l;
}
export {
  Y as AppHeader,
  U as AppShell,
  _ as BottomNav,
  le as GlassCard,
  ae as MetricHero,
  re as Modal,
  te as NumberInputDisplay,
  ne as PwaUpdateBanner,
  oe as SessionExpiredBanner,
  T as SessionExpiredError,
  se as StatusBadge,
  ee as TactileKeypad,
  O as assertSessionNotExpired,
  de as authFetch,
  ie as isSessionExpiredError,
  G as isSessionExpiredResponse
};
//# sourceMappingURL=index.js.map
