var ye = Object.defineProperty;
var we = (r, t, l) => t in r ? ye(r, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[t] = l;
var B = (r, t, l) => we(r, typeof t != "symbol" ? t + "" : t, l);
import { jsxs as o, jsx as e, Fragment as Ne } from "react/jsx-runtime";
import be, { forwardRef as ue, createElement as U, useEffect as L, useState as C, useRef as O, useCallback as T } from "react";
import { createPortal as ke } from "react-dom";
const M = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, F = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, G = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, W = {
  amber: "bg-amber-500 text-slate-950",
  blue: "bg-blue-600 text-white",
  emerald: "bg-emerald-500 text-slate-950",
  purple: "bg-purple-600 text-white",
  slate: "bg-slate-700 text-white"
}, V = {
  amber: "bg-amber-500 text-slate-950 shadow",
  blue: "bg-blue-600 text-white shadow",
  emerald: "bg-emerald-500 text-slate-950 shadow",
  purple: "bg-purple-600 text-white shadow",
  slate: "bg-slate-200 text-slate-950 shadow"
}, Z = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, q = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, K = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, X = {
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
}, P = {
  amber: "focus:border-amber-500",
  blue: "focus:border-blue-500",
  emerald: "focus:border-emerald-500",
  purple: "focus:border-purple-500",
  slate: "focus:border-slate-500"
}, Q = {
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
}, Xe = ({
  header: r,
  bottomNav: t,
  children: l,
  className: a = ""
}) => /* @__PURE__ */ o("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  r,
  /* @__PURE__ */ e("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: l }),
  t
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pe = (...r) => r.filter((t, l, a) => !!t && t.trim() !== "" && a.indexOf(t) === l).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ce = {
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
const Ee = ue(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: a,
    className: n = "",
    children: s,
    iconNode: d,
    ...i
  }, c) => U(
    "svg",
    {
      ref: c,
      ...Ce,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: a ? Number(l) * 24 / Number(t) : l,
      className: pe("lucide", n),
      ...i
    },
    [
      ...d.map(([m, b]) => U(m, b)),
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
const E = (r, t) => {
  const l = ue(
    ({ className: a, ...n }, s) => U(Ee, {
      ref: s,
      iconNode: t,
      className: pe(`lucide-${$e(r)}`, a),
      ...n
    })
  );
  return l.displayName = `${r}`, l;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = E("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = E("Delete", [
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
const Me = E("FileText", [
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
const xe = E("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = E("RefreshCw", [
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
const je = E("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = E("Sparkles", [
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
const he = E("TriangleAlert", [
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
const H = E("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Je = ({
  brandInitial: r,
  brandIcon: t,
  brandColor: l,
  variant: a = "blue",
  title: n,
  subtitle: s,
  tabs: d,
  activeTab: i,
  activeTabClass: c,
  onChangeTab: m,
  onRefresh: b,
  isRefreshing: h = !1,
  actions: g,
  className: u = ""
}) => {
  const x = l || W[a] || W.blue, y = c || V[a] || V.blue, p = M[a] || M.blue;
  return /* @__PURE__ */ e(
    "header",
    {
      className: `border-b border-border/60 bg-card/95 backdrop-blur-md sticky top-0 z-40 w-full pt-safe ${u}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ o("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-3", children: [
          (r || t) && /* @__PURE__ */ e("div", { className: `w-8 h-8 rounded-xl ${x} flex items-center justify-center font-black text-sm shadow-md`, children: t || r }),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: n }),
            s && /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: s })
          ] })
        ] }),
        d && d.length > 0 && /* @__PURE__ */ e("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: d.map((v) => {
          const w = i === v.id;
          return /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
          g,
          b && /* @__PURE__ */ e(
            "button",
            {
              onClick: b,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ e(
                Ae,
                {
                  className: `w-3.5 h-3.5 ${h ? `animate-spin ${p}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, Qe = ({
  tabs: r,
  activeTab: t,
  onChangeTab: l,
  variant: a = "blue",
  activeTabClass: n,
  hideOnDesktop: s = !1,
  className: d = ""
}) => {
  const i = s ? "block lg:hidden" : "block", c = n || Z[a] || Z.blue;
  return /* @__PURE__ */ e(
    "nav",
    {
      className: `${i} fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${d}`,
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
            const b = t === m.id;
            return /* @__PURE__ */ o(
              "button",
              {
                onClick: () => l(m.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${b ? c : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": m.ariaLabel || m.label,
                children: [
                  /* @__PURE__ */ o("div", { className: "relative flex items-center justify-center", children: [
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
}, Re = ({
  value: r,
  onChange: t,
  onClear: l,
  maxDecimalPlaces: a = 2,
  variant: n = "blue",
  actionColor: s,
  allowDecimals: d = !0,
  className: i = ""
}) => {
  const c = (u) => {
    if (u === ".") {
      if (!d || r.includes(".")) return;
      t(r === "" ? "0." : r + ".");
      return;
    }
    if (r.includes(".")) {
      const x = r.split(".");
      if (x[1] && x[1].length >= a) return;
    }
    t(r === "0" ? u : r + u);
  }, m = () => {
    r.length <= 1 ? t("") : t(r.slice(0, -1));
  }, b = () => {
    l ? l() : t("");
  }, h = s || G[n] || G.blue, g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", d ? "." : "", "0"];
  return /* @__PURE__ */ o("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${i}`, children: [
    g.map((u, x) => u ? /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => c(u),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: u
      },
      u
    ) : /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${h} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${x}`
    )),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: m,
        onDoubleClick: b,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${h} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ e(Te, { className: "w-5 h-5" })
      }
    )
  ] });
}, _e = ({
  label: r,
  value: t,
  unit: l,
  variant: a = "blue",
  valueColor: n,
  className: s = ""
}) => {
  const d = n || F[a] || F.blue;
  return /* @__PURE__ */ o("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${s}`, children: [
    /* @__PURE__ */ e("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: r }),
    /* @__PURE__ */ o("div", { className: `text-4xl font-black ${d} tracking-tight`, children: [
      t || "0",
      l && /* @__PURE__ */ e("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: l })
    ] })
  ] });
}, fe = ({
  isOpen: r,
  onClose: t,
  title: l,
  subtitle: a,
  headerIcon: n,
  disableClose: s = !1,
  children: d,
  className: i = ""
}) => {
  if (L(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [r]), L(() => {
    if (!r) return;
    const m = (b) => {
      b.key === "Escape" && !s && t();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [r, t, s]), !r) return null;
  const c = /* @__PURE__ */ e(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (m) => {
        m.target === m.currentTarget && !s && t();
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          className: `modal-card modal-content w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe ${i}`,
          children: [
            /* @__PURE__ */ o("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
              l ? /* @__PURE__ */ o("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                  n && /* @__PURE__ */ e("span", { className: "text-lg leading-none", children: n }),
                  /* @__PURE__ */ e("h2", { className: "text-base font-bold text-slate-100 m-0", children: l })
                ] }),
                a && /* @__PURE__ */ e("p", { className: "text-xs text-sky-400 m-0", children: a })
              ] }) : /* @__PURE__ */ e("div", {}),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: t,
                  disabled: s,
                  className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors disabled:opacity-50",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ e(H, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: d })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? ke(c, document.body) : c;
}, ee = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, te = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, De = ({
  variant: r = "info",
  title: t,
  children: l,
  icon: a,
  action: n,
  role: s = "alert",
  className: d = ""
}) => {
  const i = ee[r] || ee.info, c = te[r] || te.info;
  return /* @__PURE__ */ o(
    "div",
    {
      role: s,
      className: `rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${i} ${d}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: a }),
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            t && /* @__PURE__ */ e("div", { className: `font-semibold mb-0.5 ${c}`, children: t }),
            l && /* @__PURE__ */ e("div", { className: "opacity-95", children: l })
          ] })
        ] }),
        n && /* @__PURE__ */ e("div", { className: "shrink-0 self-center", children: n })
      ]
    }
  );
}, Be = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, Pe = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, A = be.forwardRef(
  ({
    children: r,
    variant: t = "secondary",
    size: l = "sm",
    icon: a,
    iconPosition: n = "left",
    loading: s = !1,
    loadingText: d,
    fullWidth: i = !1,
    disabled: c = !1,
    className: m = "",
    type: b = "button",
    ...h
  }, g) => /* @__PURE__ */ o(
    "button",
    {
      ref: g,
      type: b,
      disabled: c || s,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${Be[t]} ${Pe[l]} ${i ? "w-full" : ""} ${m}`,
      ...h,
      children: [
        s ? /* @__PURE__ */ e(xe, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && n === "left" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ e("span", { children: s && d ? d : r }),
        !s && a && n === "right" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
A.displayName = "Button";
const Ye = ({
  isOpen: r,
  onClose: t,
  title: l,
  subtitle: a,
  displayLabel: n,
  value: s,
  displayValue: d,
  unit: i,
  onChange: c,
  onSubmit: m,
  submitLabel: b = "Apply",
  loading: h = !1,
  loadingText: g = "Saving...",
  submitDisabled: u = !1,
  allowDecimals: x = !0,
  maxDecimalPlaces: y = 2,
  variant: p = "blue",
  error: v,
  children: w
}) => {
  const k = z[p] || z.blue;
  return /* @__PURE__ */ e(
    fe,
    {
      isOpen: r,
      onClose: t,
      title: l,
      subtitle: a,
      disableClose: h,
      children: /* @__PURE__ */ o("div", { className: "space-y-4", children: [
        v && /* @__PURE__ */ e(De, { variant: "error", icon: "⚠️", children: v }),
        /* @__PURE__ */ e(
          _e,
          {
            label: n,
            value: d !== void 0 ? d : s || "0",
            unit: i,
            variant: p
          }
        ),
        w,
        /* @__PURE__ */ e(
          Re,
          {
            value: s,
            onChange: c,
            allowDecimals: x,
            maxDecimalPlaces: y,
            variant: p
          }
        ),
        /* @__PURE__ */ e(
          A,
          {
            variant: k,
            size: "lg",
            fullWidth: !0,
            loading: h,
            loadingText: g,
            disabled: u,
            onClick: m,
            children: b
          }
        )
      ] })
    }
  );
}, et = ({
  value: r,
  onChange: t,
  placeholder: l = "Search...",
  variant: a = "amber",
  rightSlot: n,
  className: s = "",
  "data-testid": d
}) => {
  const i = P[a] || P.amber;
  return /* @__PURE__ */ o("div", { className: `flex items-center gap-2 ${s}`, children: [
    /* @__PURE__ */ o("div", { className: "relative flex-1 min-w-0", children: [
      /* @__PURE__ */ e(je, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: r,
          onChange: (c) => t(c.target.value),
          placeholder: l,
          "data-testid": d,
          className: `w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none ${i} transition-colors`
        }
      ),
      r.length > 0 && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => t(""),
          "aria-label": "Clear search",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors",
          children: /* @__PURE__ */ e(H, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    n && /* @__PURE__ */ e("div", { className: "shrink-0", children: n })
  ] });
}, tt = ({
  file: r,
  onFileChange: t,
  acceptedFormats: l = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: n = "Supports official PDF and CSV documents",
  variant: s = "amber",
  className: d = "",
  children: i
}) => {
  const [c, m] = C(!1), b = be.useId(), h = (p) => {
    p.preventDefault(), p.stopPropagation(), p.type === "dragenter" || p.type === "dragover" ? m(!0) : p.type === "dragleave" && m(!1);
  }, g = (p) => {
    p.preventDefault(), p.stopPropagation(), m(!1), p.dataTransfer.files && p.dataTransfer.files[0] && t(p.dataTransfer.files[0]);
  }, u = (p) => {
    p.target.files && p.target.files[0] && t(p.target.files[0]);
  }, x = K[s] || K.amber, y = M[s] || M.amber;
  return /* @__PURE__ */ o(
    "div",
    {
      onDragEnter: h,
      onDragOver: h,
      onDragLeave: h,
      onDrop: g,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${c ? x : "border-border hover:border-slate-600 bg-background/50"} ${d}`,
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "file",
            accept: l,
            id: b,
            onChange: u,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ o("label", { htmlFor: b, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ e(Me, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-slate-300 font-medium", children: r ? /* @__PURE__ */ o("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ e("span", { className: `${y} font-semibold truncate max-w-[240px]`, children: r.name }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: (p) => {
                  p.preventDefault(), p.stopPropagation(), t(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ e(H, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ o(Ne, { children: [
            /* @__PURE__ */ e("span", { children: a.split("browse")[0] }),
            /* @__PURE__ */ e("span", { className: `${y} underline`, children: "browse" }),
            /* @__PURE__ */ e("span", { children: a.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-500", children: n })
        ] }),
        i && /* @__PURE__ */ e("div", { className: "mt-4", children: i })
      ]
    }
  );
}, re = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, rt = ({
  options: r,
  selected: t,
  selectedValues: l = [],
  onChange: a,
  onChangeValues: n,
  multiSelect: s = !1,
  equalWidth: d = !1,
  variant: i = "amber",
  size: c = "sm",
  className: m = ""
}) => {
  const b = re[i] || re.amber, h = c === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", g = (u) => {
    if (s) {
      const x = l.includes(u) ? l.filter((y) => y !== u) : [...l, u];
      n && n(x), a && a(u);
    } else a && a(u);
  };
  return /* @__PURE__ */ e("div", { className: `flex ${d ? "w-full gap-2" : "flex-wrap gap-1.5"} ${m}`, children: r.map((u) => {
    const x = typeof u == "string" ? u : u.value, y = typeof u == "string" ? u : u.label, p = s ? l.includes(x) : t === x;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => g(x),
        className: `${h} ${d ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${p ? b : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: y
      },
      x
    );
  }) });
}, ae = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function at({
  label: r,
  options: t,
  value: l,
  onChange: a,
  className: n = ""
}) {
  return /* @__PURE__ */ o("div", { className: `space-y-2 ${n}`, children: [
    r && /* @__PURE__ */ e("label", { className: "block font-semibold text-sm text-slate-200", children: r }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s) => {
      const d = l === s.value, i = s.accent || "blue", c = ae[i] || ae.blue;
      return /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: () => a(s.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${d ? c : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            s.icon && /* @__PURE__ */ e("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: s.icon }),
            /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("div", { className: `font-semibold text-sm ${d ? "text-slate-100" : "text-slate-300"}`, children: s.label }),
              s.description && /* @__PURE__ */ e("div", { className: "text-xs text-slate-400 mt-0.5 leading-snug", children: s.description })
            ] })
          ]
        },
        s.value
      );
    }) })
  ] });
}
const se = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, st = ({
  label: r,
  valueDisplay: t,
  valueClassName: l = "text-slate-200",
  min: a,
  max: n,
  step: s = 1,
  value: d,
  onChange: i,
  minLabel: c,
  midLabel: m,
  maxLabel: b,
  variant: h = "amber",
  className: g = ""
}) => {
  const u = se[h] || se.amber;
  return /* @__PURE__ */ o("div", { className: `space-y-1 ${g}`, children: [
    /* @__PURE__ */ o("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ e("span", { className: "text-slate-400", children: r }),
      /* @__PURE__ */ e("span", { className: `font-semibold ${l}`, children: t })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: a,
        max: n,
        step: s,
        value: d,
        onChange: (x) => i(Number(x.target.value)),
        className: `w-full ${u} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (c || m || b) && /* @__PURE__ */ o("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ e("span", { children: c }),
      /* @__PURE__ */ e("span", { children: m }),
      /* @__PURE__ */ e("span", { children: b })
    ] })
  ] });
}, le = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function lt({
  options: r,
  value: t,
  onChange: l,
  variant: a = "amber",
  size: n = "xs",
  fullWidth: s = !1,
  className: d = "",
  idPrefix: i = "segmented"
}) {
  const c = J[a] || J.amber, m = le[n] || le.xs;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "tablist",
      className: `inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${s ? "w-full grid" : ""} ${d}`,
      style: s ? { gridTemplateColumns: `repeat(${r.length}, minmax(0, 1fr))` } : void 0,
      children: r.map((b) => {
        const h = t === b.id;
        return /* @__PURE__ */ o(
          "button",
          {
            role: "tab",
            "aria-selected": h,
            type: "button",
            "data-testid": `${i}-${b.id}`,
            onClick: () => l(b.id),
            className: `font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${m} ${h ? `${c} font-semibold` : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
            children: [
              b.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: b.icon }),
              /* @__PURE__ */ e("span", { children: b.label }),
              b.badge !== void 0 && /* @__PURE__ */ e("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: b.badge })
            ]
          },
          b.id
        );
      })
    }
  );
}
const nt = ({
  isOpen: r,
  onClose: t,
  title: l,
  subtitle: a = "Sports Physiology & Circadian Research Grounding",
  headerIcon: n = "🧠",
  citationTitle: s,
  citationIcon: d = "📚",
  pillars: i = [],
  inputLabel: c = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: m = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: b = 3,
  submitLabel: h = "Synthesize with AI",
  submittingLabel: g = "Synthesizing...",
  errorFallbackMessage: u = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: x = "blue",
  onSynthesize: y
}) => {
  const [p, v] = C(""), [w, k] = C(!1), [S, R] = C(null), I = async () => {
    k(!0), R(null);
    try {
      await y(p.trim() || void 0), v(""), t();
    } catch {
      R(u);
    } finally {
      k(!1);
    }
  }, _ = Q[x] || Q.blue, f = P[x] || P.blue, N = z[x] || z.blue;
  return /* @__PURE__ */ e(
    fe,
    {
      isOpen: r,
      onClose: t,
      title: l,
      subtitle: a,
      headerIcon: n,
      disableClose: w,
      children: /* @__PURE__ */ o("div", { className: "space-y-4", children: [
        (s || i.length > 0) && /* @__PURE__ */ o("div", { className: `rounded-xl border p-3 text-xs ${_.container}`, children: [
          s && /* @__PURE__ */ o("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${_.header}`, children: [
            /* @__PURE__ */ e("span", { children: d }),
            /* @__PURE__ */ e("span", { children: s })
          ] }),
          i.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: i.map(($, D) => /* @__PURE__ */ o("li", { children: [
            /* @__PURE__ */ o("strong", { className: "text-slate-100", children: [
              $.label,
              ":"
            ] }),
            " ",
            $.description
          ] }, D)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs font-semibold text-slate-200", children: c }),
          /* @__PURE__ */ e(
            "textarea",
            {
              rows: b,
              value: p,
              onChange: ($) => v($.target.value),
              disabled: w,
              placeholder: m,
              className: `w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-xs placeholder-slate-500 focus:outline-none ${f} resize-y`
            }
          )
        ] }),
        S && /* @__PURE__ */ e("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: S }),
        /* @__PURE__ */ o("div", { className: "flex gap-2.5 justify-end pt-1", children: [
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
              variant: N,
              size: "md",
              loading: w,
              loadingText: g,
              icon: /* @__PURE__ */ e("span", { children: "⚡" }),
              onClick: I,
              children: h
            }
          )
        ] })
      ] })
    }
  );
}, ot = ({
  title: r,
  primaryValue: t,
  primaryUnit: l,
  secondaryValue: a,
  secondaryUnit: n,
  toggleHint: s,
  badge: d,
  variant: i = "blue",
  unitColor: c,
  glowColor: m,
  children: b,
  className: h = ""
}) => {
  const [g, u] = C(!1), x = (w = "blue") => {
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
  }, y = a !== void 0 && n !== void 0, p = c || M[i] || M.blue, v = m || q[i] || q.blue;
  return /* @__PURE__ */ o("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${h}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${v} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: r }),
      d && /* @__PURE__ */ o("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${x(d.variant)}`, children: [
        d.icon || /* @__PURE__ */ e(Le, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ e("span", { children: d.label })
      ] })
    ] }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `text-center my-6 ${y ? "cursor-pointer select-none" : ""}`,
        onClick: () => y && u(!g),
        children: [
          /* @__PURE__ */ o("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            g ? a : t,
            /* @__PURE__ */ e("span", { className: `text-2xl font-semibold ${p} ml-2`, children: g ? n : l })
          ] }),
          s && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400 mt-1", children: s })
        ]
      }
    ),
    b
  ] });
}, ze = {
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
}, dt = ({
  title: r,
  value: t,
  subtitle: l,
  icon: a,
  variant: n = "default",
  className: s = "",
  onClick: d
}) => {
  const i = ze[n], c = !!d;
  return /* @__PURE__ */ o(
    "div",
    {
      onClick: d,
      className: `p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${i.container} ${c ? "cursor-pointer hover:border-border active:scale-[0.99]" : ""} ${s}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          a && /* @__PURE__ */ e("span", { className: `mr-1 shrink-0 ${i.icon}`, children: a }),
          /* @__PURE__ */ e("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: r })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-sm sm:text-base font-bold truncate ${i.value}`, children: t }),
        l && /* @__PURE__ */ e("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: l })
      ]
    }
  );
}, it = ({
  title: r,
  subtitle: t,
  value: l,
  valueSuffix: a,
  subvalue: n,
  subvalueTrend: s = "neutral",
  badge: d,
  icon: i,
  isSelected: c = !1,
  onClick: m,
  variant: b = "amber",
  className: h = "",
  "data-testid": g
}) => {
  const u = X[b] || X.amber, x = s === "positive" ? "text-emerald-400" : s === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      "data-testid": g,
      onClick: m,
      className: `text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${c ? u : "bg-background/60 border-border/60 hover:border-slate-700"} ${h}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ o("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            i && /* @__PURE__ */ e("span", { className: "shrink-0", children: i }),
            /* @__PURE__ */ e("span", { className: "truncate", children: r })
          ] }),
          d && /* @__PURE__ */ e("div", { className: "shrink-0", children: d })
        ] }),
        l !== void 0 && /* @__PURE__ */ o("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          l,
          a && /* @__PURE__ */ e("span", { className: "text-xs font-normal text-slate-400 ml-1", children: a })
        ] }),
        (t || n) && /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          t && /* @__PURE__ */ e("span", { className: "truncate", children: t }),
          n && /* @__PURE__ */ e("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${x}`, children: n })
        ] })
      ]
    }
  );
}, ne = {
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
}, ct = ({
  label: r,
  variant: t = "idle",
  icon: l,
  isPulsing: a = !1,
  className: n = ""
}) => {
  const s = ne[t] || ne.idle;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${s.bg} ${n}`,
      children: [
        l ? /* @__PURE__ */ e("span", { className: "mr-1.5 shrink-0 flex items-center", children: l }) : /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${s.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ e("span", { className: "truncate", children: r })
      ]
    }
  );
}, mt = ({
  children: r,
  className: t = "",
  onClick: l,
  hoverGlow: a = !1
}) => /* @__PURE__ */ e(
  "div",
  {
    onClick: l,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!l ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${t}`,
    children: r
  }
);
function Ie(r, t) {
  const l = t > 0 ? t : 1, a = Math.min(100, Math.max(0, Math.round(r / l * 100))), n = Math.max(0, t - r);
  return a > 90 ? {
    percent: a,
    remaining: n,
    barColor: "bg-rose-500",
    percentTextColor: "text-rose-400 font-semibold"
  } : a > 70 ? {
    percent: a,
    remaining: n,
    barColor: "bg-amber-400",
    percentTextColor: "text-amber-400 font-semibold"
  } : {
    percent: a,
    remaining: n,
    barColor: "bg-emerald-400",
    percentTextColor: "text-slate-400 font-medium"
  };
}
const bt = ({
  title: r,
  subtitle: t,
  icon: l,
  currentValue: a,
  targetValue: n,
  currencyPrefix: s = "$",
  currencySuffix: d = "NZD",
  deltaBadge: i,
  action: c,
  className: m = ""
}) => {
  const { percent: b, remaining: h, barColor: g, percentTextColor: u } = Ie(
    a,
    n
  );
  return /* @__PURE__ */ o("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${m}`, children: [
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
        l && /* @__PURE__ */ e("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: l }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-slate-200", children: r }),
          t && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400", children: t })
        ] })
      ] }),
      c && /* @__PURE__ */ e("div", { children: c })
    ] }),
    /* @__PURE__ */ o("div", { className: "space-y-1.5 my-3", children: [
      /* @__PURE__ */ o("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ o("span", { className: "text-slate-400", children: [
          "Spent ",
          /* @__PURE__ */ o("strong", { className: "text-slate-200", children: [
            s,
            Math.round(a).toLocaleString("en-NZ")
          ] }),
          " of ",
          s,
          Math.round(n).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ o("span", { className: u, children: [
          b,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ e(
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
          s,
          Math.round(h).toLocaleString("en-NZ"),
          " ",
          d
        ] })
      ] }),
      i && /* @__PURE__ */ o(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${i.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ e(Se, { className: `w-3.5 h-3.5 mr-1 ${i.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ e("span", { children: i.label })
          ]
        }
      )
    ] })
  ] });
}, ut = ({
  eyebrow: r,
  currentValueLabel: t,
  deltaLabel: l,
  deltaPositive: a = !0,
  milestoneLabel: n = "Next Milestone",
  milestoneValue: s,
  progressPercent: d,
  startLabel: i,
  centerLabel: c,
  targetLabel: m,
  variant: b = "blue",
  className: h = ""
}) => {
  const g = Math.min(100, Math.max(0, Math.round(d))), u = Y[b] || Y.blue;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `glass-panel bg-card/80 backdrop-blur-md border border-blue-500/25 rounded-2xl p-5 shadow-lg animate-slide-up ${h}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${u.eyebrow}`, children: r }),
            /* @__PURE__ */ o("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ e("span", { children: t }),
              l && /* @__PURE__ */ e(
                "span",
                {
                  className: `text-sm font-semibold ${a ? "text-emerald-400" : "text-rose-400"}`,
                  children: l
                }
              )
            ] })
          ] }),
          s && /* @__PURE__ */ o("div", { className: "text-right", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-slate-400", children: n }),
            /* @__PURE__ */ e("div", { className: "text-lg font-bold text-purple-400", children: s })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "h-2.5 w-full bg-background/80 rounded-full overflow-hidden my-3 border border-border/50", children: /* @__PURE__ */ e(
          "div",
          {
            className: `h-full bg-gradient-to-r ${u.bar} rounded-full transition-all duration-500`,
            style: { width: `${g}%` }
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ e("span", { children: i }),
          c && /* @__PURE__ */ e("span", { children: c }),
          /* @__PURE__ */ e("span", { children: m })
        ] })
      ]
    }
  );
};
function Oe(r) {
  const t = r.map((a) => ({
    ...a,
    value: Math.max(0, Number(a.value) || 0)
  })), l = t.reduce((a, n) => a + n.value, 0);
  return l <= 0 ? [] : t.map((a) => ({
    ...a,
    widthPct: a.value / l * 100
  }));
}
const pt = ({
  segments: r,
  showLegend: t = !0,
  heightClass: l = "h-2.5",
  className: a = ""
}) => {
  const n = Oe(r);
  return n.length === 0 ? null : /* @__PURE__ */ o("div", { className: `space-y-1.5 ${a}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `w-full ${l} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`,
        children: n.map((s) => {
          if (s.widthPct <= 0) return null;
          const d = s.valueLabel || `${Math.round(s.widthPct)}%`;
          return /* @__PURE__ */ e(
            "div",
            {
              style: { width: `${s.widthPct}%` },
              className: `h-full ${s.barColor} transition-all duration-500`,
              title: `${s.label}: ${d}`
            },
            s.id
          );
        })
      }
    ),
    t && /* @__PURE__ */ e("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300", children: n.map((s) => {
      const d = s.minVisiblePct ?? 0.5;
      if (s.widthPct < d) return null;
      const i = s.dotColor || s.barColor, c = s.textColor || "text-slate-200", m = s.valueLabel || `${Math.round(s.widthPct)}%`;
      return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1 font-medium", children: [
        /* @__PURE__ */ e("span", { className: `w-2 h-2 rounded-full shrink-0 ${i}` }),
        /* @__PURE__ */ e("span", { className: c, children: s.label }),
        /* @__PURE__ */ e("span", { className: "text-slate-400", children: m })
      ] }, s.id);
    }) })
  ] });
}, oe = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4"
}, xt = ({
  items: r,
  columns: t = 3,
  className: l = ""
}) => {
  const a = oe[t] || oe[3];
  return /* @__PURE__ */ e("div", { className: `grid ${a} gap-2 text-center ${l}`, children: r.map((n, s) => /* @__PURE__ */ o(
    "div",
    {
      className: "px-2.5 py-2 rounded-xl bg-background/60 border border-border/60",
      children: [
        /* @__PURE__ */ o("div", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 truncate", children: [
          n.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: n.icon }),
          /* @__PURE__ */ e("span", { className: "truncate", children: n.label })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: `text-sm font-bold mt-0.5 truncate ${n.valueClassName || "text-slate-100"}`,
            children: n.value
          }
        ),
        n.subvalue && /* @__PURE__ */ e("div", { className: "text-[10px] text-slate-400 mt-0.5 truncate", children: n.subvalue })
      ]
    },
    n.id || `${n.label}-${s}`
  )) });
}, de = {
  dashed: "border-2 border-dashed border-border/80 bg-background/40",
  glass: "glass-panel bg-card/60 backdrop-blur-md border border-border/80"
}, ht = ({
  title: r,
  description: t,
  icon: l,
  action: a,
  variant: n = "dashed",
  className: s = ""
}) => {
  const d = de[n] || de.dashed;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2 ${d} ${s}`,
      children: [
        l && /* @__PURE__ */ e("div", { className: "text-slate-400 mb-1 flex items-center justify-center", children: l }),
        /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-slate-200", children: r }),
        t && /* @__PURE__ */ e("div", { className: "text-xs text-slate-400 max-w-md leading-relaxed", children: t }),
        a && /* @__PURE__ */ e("div", { className: "pt-2", children: a })
      ]
    }
  );
}, ft = ({
  label: r = "Loading...",
  variant: t = "amber",
  className: l = ""
}) => {
  const a = M[t] || M.amber;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: `flex flex-col items-center justify-center py-8 px-4 text-center space-y-2 ${l}`,
      children: [
        /* @__PURE__ */ e(xe, { className: `w-6 h-6 animate-spin ${a}` }),
        r && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-slate-400", children: r })
      ]
    }
  );
}, ie = {
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
}, gt = ({
  title: r,
  description: t,
  confirmLabel: l = "Confirm",
  cancelLabel: a = "Cancel",
  onConfirm: n,
  onCancel: s,
  loading: d = !1,
  variant: i = "danger",
  className: c = ""
}) => {
  const m = ie[i] || ie.danger;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alertdialog",
      className: `p-3.5 rounded-xl border space-y-2.5 ${m.container} ${c}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ e(he, { className: `w-4 h-4 shrink-0 mt-0.5 ${m.icon}` }),
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("div", { className: `text-xs font-semibold ${m.title}`, children: r }),
            t && /* @__PURE__ */ e("div", { className: "text-[11px] text-slate-300 mt-0.5 leading-relaxed", children: t })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ e(
            A,
            {
              variant: "secondary",
              size: "xs",
              onClick: s,
              disabled: d,
              children: a
            }
          ),
          /* @__PURE__ */ e(
            A,
            {
              variant: m.confirmVariant,
              size: "xs",
              loading: d,
              onClick: n,
              children: l
            }
          )
        ] })
      ]
    }
  );
}, vt = ({
  title: r,
  icon: t,
  defaultOpen: l = !1,
  variant: a = "inline",
  expandLabel: n = "▼ Expand",
  collapseLabel: s = "▲ Hide",
  children: d,
  className: i = ""
}) => {
  const [c, m] = C(l);
  return a === "card" ? /* @__PURE__ */ o("div", { className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg ${i}`, children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: () => m((b) => !b),
        className: "w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer",
        children: [
          /* @__PURE__ */ o("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2", children: [
            t && /* @__PURE__ */ e("span", { children: t }),
            /* @__PURE__ */ e("span", { children: r })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-xs text-slate-400", children: c ? s : n })
        ]
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "mt-3 pt-3 border-t border-border/60", children: d })
  ] }) : /* @__PURE__ */ o("div", { className: `pt-2 border-t border-border/40 ${i}`, children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: () => m((b) => !b),
        className: "bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          t && /* @__PURE__ */ e("span", { children: t }),
          /* @__PURE__ */ e("span", { className: "underline", children: r }),
          /* @__PURE__ */ e("span", { className: "text-[10px]", children: c ? "▲" : "▼" })
        ]
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1", children: d })
  ] });
}, yt = ({
  message: r = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: l = "Later",
  onReload: a,
  onDismiss: n,
  className: s = ""
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${s}`,
    children: [
      /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: r }),
      /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", children: [
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
            onClick: n,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: l
          }
        )
      ] })
    ]
  }
), wt = ({
  message: r = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: l,
  icon: a,
  className: n = "",
  testId: s = "session-expired-banner"
}) => {
  const d = (i) => {
    i && i.stopPropagation(), l ? l() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": s,
      onClick: d,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${n}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ e("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ e(he, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: r })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: d,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: t
          }
        )
      ]
    }
  );
}, Ue = 60 * 60 * 1e3;
function Nt(r = {}) {
  const {
    pollIntervalMs: t = Ue,
    externalNeedRefresh: l,
    onExternalNeedRefreshChange: a,
    updateServiceWorker: n,
    registration: s
  } = r, d = O(
    s ?? void 0
  ), i = O(!1), c = O(void 0), [m, b] = C(!1), [h, g] = C(!1), [u, x] = C(null), y = l ?? m, p = T(
    (f) => {
      b(f), a == null || a(f);
    },
    [a]
  );
  L(() => {
    s && (d.current = s, s.waiting && p(!0));
  }, [s, p]);
  const v = T((f) => {
    x(f), c.current !== void 0 && typeof window < "u" && window.clearTimeout(c.current), typeof window < "u" && (c.current = window.setTimeout(() => {
      x(null);
    }, 3500));
  }, []), w = T(async () => {
    if (d.current)
      return d.current;
    if (typeof navigator < "u" && "serviceWorker" in navigator) {
      const f = await navigator.serviceWorker.getRegistration();
      if (f)
        return d.current = f, f;
    }
  }, []), k = T(
    async (f) => {
      if (await f.update(), f.waiting)
        return p(!0), !0;
      if (f.installing) {
        const N = f.installing;
        if (await new Promise(($) => {
          const D = () => {
            (N.state === "installed" || N.state === "activated" || N.state === "redundant") && (N.removeEventListener("statechange", D), $());
          };
          N.addEventListener("statechange", D);
        }), f.waiting)
          return p(!0), !0;
      }
      return !1;
    },
    [p]
  ), S = T(async () => {
    try {
      const f = await w();
      if (!f) return;
      await k(f);
    } catch {
    }
  }, [w, k]), R = T(async () => {
    g(!0), x(null);
    try {
      const f = await w();
      if (!f) {
        v("Up to date");
        return;
      }
      const N = await k(f);
      v(N ? "Update ready" : "Up to date");
    } catch {
      v("Update check failed");
    } finally {
      g(!1);
    }
  }, [w, k, v]), I = T(async () => {
    i.current = !0;
    const f = await w();
    f != null && f.waiting && f.waiting.postMessage({ type: "SKIP_WAITING" }), n ? await n(!0) : typeof window < "u" && window.location.reload();
  }, [w, n]), _ = T(() => {
    p(!1);
  }, [p]);
  return L(() => {
    if (typeof window > "u" || typeof document > "u") return;
    S();
    const f = () => {
      document.visibilityState === "visible" && S();
    };
    document.addEventListener("visibilitychange", f);
    const N = window.setInterval(() => {
      S();
    }, t);
    return () => {
      document.removeEventListener("visibilitychange", f), window.clearInterval(N), c.current !== void 0 && window.clearTimeout(c.current);
    };
  }, [S, t]), L(() => {
    if (typeof navigator > "u" || !("serviceWorker" in navigator)) return;
    let f = !1;
    const N = navigator.serviceWorker.controller !== null, $ = () => {
      !i.current && !N || f || (f = !0, window.location.reload());
    };
    return navigator.serviceWorker.addEventListener("controllerchange", $), () => {
      navigator.serviceWorker.removeEventListener("controllerchange", $);
    };
  }, []), {
    needRefresh: y,
    checkingForUpdate: h,
    updateCheckMessage: u,
    checkForUpdates: R,
    applyUpdate: I,
    dismissUpdate: _
  };
}
const He = "/api/client-errors", Fe = 25, j = /* @__PURE__ */ new Set();
let ge = He, ce = !1;
async function me(r, t, l) {
  try {
    let a = "Unknown error", n, s = "Error";
    if (r instanceof Error)
      a = r.message || r.name, n = r.stack, s = r.name || "Error";
    else if (typeof r == "string")
      a = r;
    else if (r && typeof r == "object") {
      const x = r;
      a = x.message || JSON.stringify(r), n = x.stack, s = x.name || "Object";
    }
    const d = (t == null ? void 0 : t.source) || void 0, i = typeof (t == null ? void 0 : t.lineno) == "number" ? t.lineno : void 0, c = typeof (t == null ? void 0 : t.colno) == "number" ? t.colno : void 0, m = (t == null ? void 0 : t.error_type) || s, b = `${a}:${d || ""}:${i || 0}:${m}`;
    if (j.has(b))
      return;
    j.add(b);
    const h = (l == null ? void 0 : l.maxRecentErrors) ?? Fe;
    if (j.size > h) {
      const x = j.values().next().value;
      x && j.delete(x);
    }
    const g = {
      message: a,
      error_type: m,
      source: d,
      lineno: i,
      colno: c,
      stack: n,
      url: typeof window < "u" ? window.location.href : void 0,
      user_agent: typeof navigator < "u" ? navigator.userAgent : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      extra: t || {}
    }, u = (l == null ? void 0 : l.endpoint) || ge;
    typeof fetch < "u" && await fetch(u, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    }).catch(() => {
    });
  } catch {
  }
}
function kt(r) {
  r != null && r.endpoint && (ge = r.endpoint), !(ce || typeof window > "u") && (ce = !0, window.addEventListener("error", (t) => {
    me(
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
    me(
      t.reason,
      {
        error_type: "UnhandledRejection"
      },
      r
    );
  }));
}
function $t(r, t = {}) {
  const {
    currency: l = "$",
    locale: a = "en-NZ",
    maximumFractionDigits: n = 0,
    minimumFractionDigits: s = 0,
    showPlusSign: d = !1
  } = t, i = Number.isFinite(r) ? r : 0, c = Math.abs(i).toLocaleString(a, {
    minimumFractionDigits: s,
    maximumFractionDigits: n
  });
  return i < 0 ? `-${l}${c}` : d && i > 0 ? `+${l}${c}` : `${l}${c}`;
}
function Ct(r = /* @__PURE__ */ new Date()) {
  var s, d, i;
  const t = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(r), l = ((s = t.find((c) => c.type === "year")) == null ? void 0 : s.value) ?? "1970", a = ((d = t.find((c) => c.type === "month")) == null ? void 0 : d.value) ?? "01", n = ((i = t.find((c) => c.type === "day")) == null ? void 0 : i.value) ?? "01";
  return `${l}-${a}-${n}`;
}
function Et(r = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(r);
}
class ve extends Error {
  constructor(l = "Authentik session expired", a) {
    super(l);
    B(this, "status");
    B(this, "contentType");
    B(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function St(r) {
  return r instanceof ve || r instanceof Error && r.name === "SessionExpiredError";
}
function Ge(r) {
  const t = r.status, l = (r.headers.get("content-type") || "").toLowerCase(), a = r.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || r.redirected || l.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function We(r) {
  if (Ge(r)) {
    const t = r.headers.get("content-type") || "";
    throw new ve(
      `Authentik session expired (status: ${r.status}, content-type: ${t})`,
      {
        status: r.status,
        contentType: t,
        url: r.url
      }
    );
  }
}
async function Tt(r, t) {
  const { checkSessionExpiry: l = !0, ...a } = t || {}, n = await fetch(r, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return l && We(n), n;
}
export {
  nt as AiSynthesizerModal,
  De as AlertBanner,
  bt as AllowanceProgressBar,
  Je as AppHeader,
  Xe as AppShell,
  Qe as BottomNav,
  A as Button,
  rt as ChipSelector,
  vt as CollapsibleSection,
  gt as ConfirmActionBox,
  ht as EmptyState,
  tt as FileDropzone,
  mt as GlassCard,
  ut as GoalProgressCard,
  ft as LoadingState,
  ot as MetricHero,
  fe as Modal,
  pt as MultiSegmentBar,
  _e as NumberInputDisplay,
  Ye as NumericKeypadModal,
  at as OptionCardGroup,
  yt as PwaUpdateBanner,
  st as RangeSlider,
  Ue as SW_UPDATE_POLL_INTERVAL_MS,
  et as SearchInput,
  lt as SegmentedControl,
  it as SelectableCard,
  wt as SessionExpiredBanner,
  ve as SessionExpiredError,
  dt as StatCard,
  ct as StatusBadge,
  xt as SummaryMetricGrid,
  G as THEME_ACTION_TEXT,
  V as THEME_ACTIVE_TAB,
  Z as THEME_BOTTOM_NAV_ACTIVE,
  W as THEME_BRAND_BADGE,
  z as THEME_BUTTON_VARIANT,
  Q as THEME_CALLOUT_BOX,
  K as THEME_DROPZONE_ACTIVE,
  P as THEME_FOCUS_BORDER,
  q as THEME_GLOW_BG,
  Y as THEME_GOAL_GRADIENT,
  X as THEME_RING_SELECTED,
  J as THEME_SEGMENT_ACTIVE,
  M as THEME_TEXT_COLORS,
  F as THEME_VALUE_COLORS,
  Re as TactileKeypad,
  We as assertSessionNotExpired,
  Tt as authFetch,
  Ct as formatAucklandDate,
  Et as formatAucklandTime,
  $t as formatCurrency,
  Ie as getAllowanceThresholdState,
  kt as initGlobalErrorReporter,
  St as isSessionExpiredError,
  Ge as isSessionExpiredResponse,
  Oe as normalizeSegments,
  me as reportClientError,
  Nt as usePwaUpdate
};
//# sourceMappingURL=index.js.map
