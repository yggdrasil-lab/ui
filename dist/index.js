import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { forwardRef as S, createElement as y, useEffect as V, useState as z } from "react";
const F = ({
  header: e,
  bottomNav: r,
  children: l,
  className: a = ""
}) => /* @__PURE__ */ n("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  e,
  /* @__PURE__ */ t("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: l }),
  r
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), L = (...e) => e.filter((r, l, a) => !!r && r.trim() !== "" && a.indexOf(r) === l).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var D = {
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
const R = S(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: a,
    className: o = "",
    children: s,
    iconNode: i,
    ...m
  }, x) => y(
    "svg",
    {
      ref: x,
      ...D,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: a ? Number(l) * 24 / Number(r) : l,
      className: L("lucide", o),
      ...m
    },
    [
      ...i.map(([d, b]) => y(d, b)),
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
const v = (e, r) => {
  const l = S(
    ({ className: a, ...o }, s) => y(R, {
      ref: s,
      iconNode: r,
      className: L(`lucide-${T(e)}`, a),
      ...o
    })
  );
  return l.displayName = `${e}`, l;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = v("Delete", [
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
const H = v("RefreshCw", [
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
const q = v("Sparkles", [
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
const E = v("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), N = {
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
}, G = ({
  brandInitial: e,
  brandIcon: r,
  brandColor: l,
  variant: a = "blue",
  title: o,
  subtitle: s,
  tabs: i,
  activeTab: m,
  activeTabClass: x,
  onChangeTab: d,
  onRefresh: b,
  isRefreshing: f = !1,
  actions: p,
  className: c = ""
}) => {
  const u = N[a] || N.blue, g = l || u.brand, k = x || u.activeTab;
  return /* @__PURE__ */ t("header", { className: `border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full ${c}`, children: /* @__PURE__ */ n("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center space-x-3", children: [
      (e || r) && /* @__PURE__ */ t("div", { className: `w-8 h-8 rounded-xl ${g} flex items-center justify-center font-black text-sm shadow-md`, children: r || e }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ t("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: o }),
        s && /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: s })
      ] })
    ] }),
    i && i.length > 0 && /* @__PURE__ */ t("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: i.map((h) => {
      const w = m === h.id;
      return /* @__PURE__ */ n(
        "button",
        {
          onClick: () => d == null ? void 0 : d(h.id),
          className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${w ? k : "text-slate-400 hover:text-slate-200"}`,
          children: [
            h.icon,
            /* @__PURE__ */ t("span", { children: h.label })
          ]
        },
        h.id
      );
    }) }),
    /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
      p,
      b && /* @__PURE__ */ t(
        "button",
        {
          onClick: b,
          className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
          title: "Refresh data",
          "aria-label": "Refresh data",
          "data-testid": "refresh-button",
          children: /* @__PURE__ */ t(
            H,
            {
              className: `w-3.5 h-3.5 ${f ? `animate-spin ${u.spinner}` : ""}`
            }
          )
        }
      )
    ] })
  ] }) });
}, $ = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, I = ({
  tabs: e,
  activeTab: r,
  onChangeTab: l,
  variant: a = "blue",
  activeTabClass: o,
  hideOnDesktop: s = !1,
  className: i = ""
}) => {
  const m = s ? "block lg:hidden" : "block", x = o || $[a] || $.blue;
  return /* @__PURE__ */ t(
    "nav",
    {
      className: `${m} fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${i}`,
      style: {
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
          children: e.map((d) => {
            const b = r === d.id;
            return /* @__PURE__ */ n(
              "button",
              {
                onClick: () => l(d.id),
                className: `bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${b ? x : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": d.ariaLabel || d.label,
                children: [
                  /* @__PURE__ */ n("div", { className: "relative flex items-center justify-center", children: [
                    d.icon,
                    d.badgeDot && /* @__PURE__ */ t(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t("span", { className: "text-[10px] truncate max-w-full", children: d.label })
                ]
              },
              d.id
            );
          })
        }
      )
    }
  );
}, C = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, P = ({
  value: e,
  onChange: r,
  onClear: l,
  maxDecimalPlaces: a = 2,
  variant: o = "blue",
  actionColor: s,
  allowDecimals: i = !0,
  className: m = ""
}) => {
  const x = (c) => {
    if (c === ".") {
      if (!i || e.includes(".")) return;
      r(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const u = e.split(".");
      if (u[1] && u[1].length >= a) return;
    }
    r(e === "0" ? c : e + c);
  }, d = () => {
    e.length <= 1 ? r("") : r(e.slice(0, -1));
  }, b = () => {
    l ? l() : r("");
  }, f = s || C[o] || C.blue, p = ["1", "2", "3", "4", "5", "6", "7", "8", "9", i ? "." : "", "0"];
  return /* @__PURE__ */ n("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${m}`, children: [
    p.map((c, u) => c ? /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => x(c),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: c
      },
      c
    ) : /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${f} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${u}`
    )),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: d,
        onDoubleClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${f} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ t(W, { className: "w-5 h-5" })
      }
    )
  ] });
}, j = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, Z = ({
  label: e,
  value: r,
  unit: l,
  variant: a = "blue",
  valueColor: o,
  className: s = ""
}) => {
  const i = o || j[a] || j.blue;
  return /* @__PURE__ */ n("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${s}`, children: [
    /* @__PURE__ */ t("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ n("div", { className: `text-4xl font-black ${i} tracking-tight`, children: [
      r || "0",
      l && /* @__PURE__ */ t("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: l })
    ] })
  ] });
}, J = ({
  isOpen: e,
  onClose: r,
  title: l,
  children: a,
  className: o = ""
}) => (V(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [e]), e ? /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ n(
  "div",
  {
    className: `w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up ${o}`,
    children: [
      /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/80", children: [
        l ? /* @__PURE__ */ t("h2", { className: "text-base font-bold text-slate-100", children: l }) : /* @__PURE__ */ t("div", {}),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: r,
            className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ t(E, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: a })
    ]
  }
) }) : null), M = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, A = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, Q = ({
  title: e,
  primaryValue: r,
  primaryUnit: l,
  secondaryValue: a,
  secondaryUnit: o,
  toggleHint: s,
  badge: i,
  variant: m = "blue",
  unitColor: x,
  glowColor: d,
  children: b,
  className: f = ""
}) => {
  const [p, c] = z(!1), u = (w = "blue") => {
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
  }, g = a !== void 0 && o !== void 0, k = x || M[m] || M.blue, h = d || A[m] || A.blue;
  return /* @__PURE__ */ n("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${f}`, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${h} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ n("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ t("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      i && /* @__PURE__ */ n("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${u(i.variant)}`, children: [
        i.icon || /* @__PURE__ */ t(q, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ t("span", { children: i.label })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "div",
      {
        className: `text-center my-6 ${g ? "cursor-pointer select-none" : ""}`,
        onClick: () => g && c(!p),
        children: [
          /* @__PURE__ */ n("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            p ? a : r,
            /* @__PURE__ */ t("span", { className: `text-2xl font-semibold ${k} ml-2`, children: p ? o : l })
          ] }),
          s && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400 mt-1", children: s })
        ]
      }
    ),
    b
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
}, U = ({
  label: e,
  variant: r = "idle",
  icon: l,
  isPulsing: a = !1,
  className: o = ""
}) => {
  const s = B[r] || B.idle;
  return /* @__PURE__ */ n(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${s.bg} ${o}`,
      children: [
        l ? /* @__PURE__ */ t("span", { className: "mr-1.5 shrink-0 flex items-center", children: l }) : /* @__PURE__ */ t("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${s.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ t("span", { className: "truncate", children: e })
      ]
    }
  );
}, Y = ({
  children: e,
  className: r = "",
  onClick: l,
  hoverGlow: a = !1
}) => /* @__PURE__ */ t(
  "div",
  {
    onClick: l,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!l ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${r}`,
    children: e
  }
), _ = ({
  message: e = "New version available",
  reloadLabel: r = "Reload to update",
  laterLabel: l = "Later",
  onReload: a,
  onDismiss: o,
  className: s = ""
}) => /* @__PURE__ */ n(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${s}`,
    children: [
      /* @__PURE__ */ t("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
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
            onClick: o,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: l
          }
        )
      ] })
    ]
  }
);
export {
  G as AppHeader,
  F as AppShell,
  I as BottomNav,
  Y as GlassCard,
  Q as MetricHero,
  J as Modal,
  Z as NumberInputDisplay,
  _ as PwaUpdateBanner,
  U as StatusBadge,
  P as TactileKeypad
};
//# sourceMappingURL=index.js.map
