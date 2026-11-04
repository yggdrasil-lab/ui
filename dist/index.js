import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { forwardRef as f, createElement as p, useEffect as k, useState as y } from "react";
const S = ({
  header: e,
  bottomNav: r,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ o("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${s}`, children: [
  e,
  /* @__PURE__ */ t("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: a }),
  r
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), g = (...e) => e.filter((r, a, s) => !!r && r.trim() !== "" && s.indexOf(r) === a).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var N = {
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
const $ = f(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: s,
    className: l = "",
    children: n,
    iconNode: i,
    ...m
  }, b) => p(
    "svg",
    {
      ref: b,
      ...N,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: s ? Number(a) * 24 / Number(r) : a,
      className: g("lucide", l),
      ...m
    },
    [
      ...i.map(([d, c]) => p(d, c)),
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
const x = (e, r) => {
  const a = f(
    ({ className: s, ...l }, n) => p($, {
      ref: n,
      iconNode: r,
      className: g(`lucide-${w(e)}`, s),
      ...l
    })
  );
  return a.displayName = `${e}`, a;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = x("Delete", [
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
const M = x("RefreshCw", [
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
const A = x("Sparkles", [
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
const L = x("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), z = ({
  brandInitial: e,
  brandColor: r = "bg-amber-500 text-slate-950",
  title: a,
  subtitle: s,
  tabs: l,
  activeTab: n,
  onChangeTab: i,
  onRefresh: m,
  isRefreshing: b = !1,
  actions: d
}) => /* @__PURE__ */ t("header", { className: "border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full", children: /* @__PURE__ */ o("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center space-x-3", children: [
    /* @__PURE__ */ t("div", { className: `w-8 h-8 rounded-xl ${r} flex items-center justify-center font-black text-sm shadow-md`, children: e }),
    /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ t("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: a }),
      s && /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: s })
    ] })
  ] }),
  l && l.length > 0 && /* @__PURE__ */ t("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: l.map((c) => {
    const h = n === c.id;
    return /* @__PURE__ */ o(
      "button",
      {
        onClick: () => i == null ? void 0 : i(c.id),
        className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${h ? "bg-amber-500 text-slate-950 shadow" : "text-slate-400 hover:text-slate-200"}`,
        children: [
          c.icon,
          /* @__PURE__ */ t("span", { children: c.label })
        ]
      },
      c.id
    );
  }) }),
  /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
    d,
    m && /* @__PURE__ */ t(
      "button",
      {
        onClick: m,
        className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
        title: "Refresh data",
        "aria-label": "Refresh data",
        "data-testid": "refresh-button",
        children: /* @__PURE__ */ t(
          M,
          {
            className: `w-3.5 h-3.5 ${b ? "animate-spin text-amber-400" : ""}`
          }
        )
      }
    )
  ] })
] }) }), D = ({
  tabs: e,
  activeTab: r,
  onChangeTab: a,
  className: s = ""
}) => /* @__PURE__ */ t(
  "nav",
  {
    className: `block lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${s}`,
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
        children: e.map((l) => {
          const n = r === l.id;
          return /* @__PURE__ */ o(
            "button",
            {
              onClick: () => a(l.id),
              className: `bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${n ? "text-amber-400 bg-amber-500/10 font-semibold active" : "text-slate-400 hover:text-slate-200"}`,
              "aria-label": l.ariaLabel || l.label,
              children: [
                /* @__PURE__ */ o("div", { className: "relative flex items-center justify-center", children: [
                  l.icon,
                  l.badgeDot && /* @__PURE__ */ t("span", { className: "absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" })
                ] }),
                /* @__PURE__ */ t("span", { className: "text-[10px] truncate max-w-full", children: l.label })
              ]
            },
            l.id
          );
        })
      }
    )
  }
), R = ({
  value: e,
  onChange: r,
  onClear: a,
  maxDecimalPlaces: s = 2,
  className: l = ""
}) => {
  const n = (d) => {
    if (d === ".") {
      if (e.includes(".")) return;
      r(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const c = e.split(".");
      if (c[1] && c[1].length >= s) return;
    }
    r(e === "0" ? d : e + d);
  }, i = () => {
    e.length <= 1 ? r("") : r(e.slice(0, -1));
  }, m = () => {
    a ? a() : r("");
  }, b = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
  return /* @__PURE__ */ o("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${l}`, children: [
    b.map((d) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => n(d),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: d
      },
      d
    )),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: i,
        onDoubleClick: m,
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-amber-400 hover:text-amber-300 shadow-sm transition-all flex items-center justify-center select-none",
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ t(j, { className: "w-5 h-5" })
      }
    )
  ] });
}, H = ({
  isOpen: e,
  onClose: r,
  title: a,
  children: s,
  className: l = ""
}) => (k(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [e]), e ? /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ o(
  "div",
  {
    className: `w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up ${l}`,
    children: [
      /* @__PURE__ */ o("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/80", children: [
        a ? /* @__PURE__ */ t("h2", { className: "text-base font-bold text-slate-100", children: a }) : /* @__PURE__ */ t("div", {}),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: r,
            className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ t(L, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: s })
    ]
  }
) }) : null), W = ({
  title: e,
  primaryValue: r,
  primaryUnit: a,
  secondaryValue: s,
  secondaryUnit: l,
  toggleHint: n,
  badge: i,
  glowColor: m = "bg-amber-500/5",
  children: b
}) => {
  const [d, c] = y(!1), h = (v = "amber") => {
    switch (v) {
      case "emerald":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "sky":
        return "bg-sky-500/20 text-sky-300 border-sky-500/40";
      case "rose":
        return "bg-rose-500/20 text-rose-300 border-rose-500/40";
      default:
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
    }
  }, u = s !== void 0 && l !== void 0;
  return /* @__PURE__ */ o("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${m} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ t("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      i && /* @__PURE__ */ o("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${h(i.variant)}`, children: [
        i.icon || /* @__PURE__ */ t(A, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ t("span", { children: i.label })
      ] })
    ] }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `text-center my-6 ${u ? "cursor-pointer select-none" : ""}`,
        onClick: () => u && c(!d),
        children: [
          /* @__PURE__ */ o("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            d ? s : r,
            /* @__PURE__ */ t("span", { className: "text-2xl font-semibold text-amber-400 ml-2", children: d ? l : a })
          ] }),
          n && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    b
  ] });
};
export {
  z as AppHeader,
  S as AppShell,
  D as BottomNav,
  W as MetricHero,
  H as Modal,
  R as TactileKeypad
};
//# sourceMappingURL=index.js.map
