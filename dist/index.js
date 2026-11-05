var H = Object.defineProperty;
var F = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var w = (e, t, a) => F(e, typeof t != "symbol" ? t + "" : t, a);
import { jsxs as l, jsx as r, Fragment as Z } from "react/jsx-runtime";
import q, { forwardRef as E, createElement as N, useState as z, useEffect as I } from "react";
const se = ({
  header: e,
  bottomNav: t,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ l("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${s}`, children: [
  e,
  /* @__PURE__ */ r("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: a }),
  t
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), R = (...e) => e.filter((t, a, s) => !!t && t.trim() !== "" && s.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K = {
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
const O = E(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: o,
    iconNode: d,
    ...c
  }, u) => N(
    "svg",
    {
      ref: u,
      ...K,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: s ? Number(a) * 24 / Number(t) : a,
      className: R("lucide", n),
      ...c
    },
    [
      ...d.map(([i, m]) => N(i, m)),
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
const y = (e, t) => {
  const a = E(
    ({ className: s, ...n }, o) => N(O, {
      ref: o,
      iconNode: t,
      className: R(`lucide-${W(e)}`, s),
      ...n
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
const U = y("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = y("Delete", [
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
const G = y("FileText", [
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
const J = y("RefreshCw", [
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
const Q = y("Sparkles", [
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
const Y = y("TriangleAlert", [
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
const P = y("X", [
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
}, le = ({
  brandInitial: e,
  brandIcon: t,
  brandColor: a,
  variant: s = "blue",
  title: n,
  subtitle: o,
  tabs: d,
  activeTab: c,
  activeTabClass: u,
  onChangeTab: i,
  onRefresh: m,
  isRefreshing: x = !1,
  actions: f,
  className: p = ""
}) => {
  const h = $[s] || $.blue, g = a || h.brand, b = u || h.activeTab;
  return /* @__PURE__ */ r(
    "header",
    {
      className: `border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full pt-safe ${p}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-3", children: [
          (e || t) && /* @__PURE__ */ r("div", { className: `w-8 h-8 rounded-xl ${g} flex items-center justify-center font-black text-sm shadow-md`, children: t || e }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ r("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: n }),
            o && /* @__PURE__ */ r("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: o })
          ] })
        ] }),
        d && d.length > 0 && /* @__PURE__ */ r("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: d.map((v) => {
          const k = c === v.id;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => i == null ? void 0 : i(v.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${k ? b : "text-slate-400 hover:text-slate-200"}`,
              children: [
                v.icon,
                /* @__PURE__ */ r("span", { children: v.label })
              ]
            },
            v.id
          );
        }) }),
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          f,
          m && /* @__PURE__ */ r(
            "button",
            {
              onClick: m,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ r(
                J,
                {
                  className: `w-3.5 h-3.5 ${x ? `animate-spin ${h.spinner}` : ""}`
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
}, ne = ({
  tabs: e,
  activeTab: t,
  onChangeTab: a,
  variant: s = "blue",
  activeTabClass: n,
  hideOnDesktop: o = !1,
  className: d = ""
}) => {
  const c = o ? "block lg:hidden" : "block", u = n || C[s] || C.blue;
  return /* @__PURE__ */ r(
    "nav",
    {
      className: `${c} fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${d}`,
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
      children: /* @__PURE__ */ r(
        "div",
        {
          className: "max-w-lg mx-auto grid gap-1 p-2",
          style: { gridTemplateColumns: `repeat(${e.length}, minmax(0, 1fr))` },
          children: e.map((i) => {
            const m = t === i.id;
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => a(i.id),
                className: `bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${m ? u : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": i.ariaLabel || i.label,
                children: [
                  /* @__PURE__ */ l("div", { className: "relative flex items-center justify-center", children: [
                    i.icon,
                    i.badgeDot && /* @__PURE__ */ r(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ r("span", { className: "text-[10px] truncate max-w-full", children: i.label })
                ]
              },
              i.id
            );
          })
        }
      )
    }
  );
}, M = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, oe = ({
  value: e,
  onChange: t,
  onClear: a,
  maxDecimalPlaces: s = 2,
  variant: n = "blue",
  actionColor: o,
  allowDecimals: d = !0,
  className: c = ""
}) => {
  const u = (p) => {
    if (p === ".") {
      if (!d || e.includes(".")) return;
      t(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const h = e.split(".");
      if (h[1] && h[1].length >= s) return;
    }
    t(e === "0" ? p : e + p);
  }, i = () => {
    e.length <= 1 ? t("") : t(e.slice(0, -1));
  }, m = () => {
    a ? a() : t("");
  }, x = o || M[n] || M.blue, f = ["1", "2", "3", "4", "5", "6", "7", "8", "9", d ? "." : "", "0"];
  return /* @__PURE__ */ l("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${c}`, children: [
    f.map((p, h) => p ? /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: () => u(p),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: p
      },
      p
    ) : /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${x} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${h}`
    )),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: i,
        onDoubleClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${x} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ r(X, { className: "w-5 h-5" })
      }
    )
  ] });
}, S = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, de = ({
  label: e,
  value: t,
  unit: a,
  variant: s = "blue",
  valueColor: n,
  className: o = ""
}) => {
  const d = n || S[s] || S.blue;
  return /* @__PURE__ */ l("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${o}`, children: [
    /* @__PURE__ */ r("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ l("div", { className: `text-4xl font-black ${d} tracking-tight`, children: [
      t || "0",
      a && /* @__PURE__ */ r("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: a })
    ] })
  ] });
}, A = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, j = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, ie = ({
  file: e,
  onFileChange: t,
  acceptedFormats: a = ".pdf,.csv",
  title: s = "Drop your file here, or browse",
  description: n = "Supports official PDF and CSV documents",
  variant: o = "amber",
  className: d = "",
  children: c
}) => {
  const [u, i] = z(!1), m = q.useId(), x = (b) => {
    b.preventDefault(), b.stopPropagation(), b.type === "dragenter" || b.type === "dragover" ? i(!0) : b.type === "dragleave" && i(!1);
  }, f = (b) => {
    b.preventDefault(), b.stopPropagation(), i(!1), b.dataTransfer.files && b.dataTransfer.files[0] && t(b.dataTransfer.files[0]);
  }, p = (b) => {
    b.target.files && b.target.files[0] && t(b.target.files[0]);
  }, h = A[o] || A.amber, g = j[o] || j.amber;
  return /* @__PURE__ */ l(
    "div",
    {
      onDragEnter: x,
      onDragOver: x,
      onDragLeave: x,
      onDrop: f,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${u ? h : "border-border hover:border-slate-600 bg-background/50"} ${d}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "file",
            accept: a,
            id: m,
            onChange: p,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ l("label", { htmlFor: m, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ r(G, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ r("div", { className: "text-xs text-slate-300 font-medium", children: e ? /* @__PURE__ */ l("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ r("span", { className: `${g} font-semibold truncate max-w-[240px]`, children: e.name }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: (b) => {
                  b.preventDefault(), b.stopPropagation(), t(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ r(P, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ l(Z, { children: [
            /* @__PURE__ */ r("span", { children: s.split("browse")[0] }),
            /* @__PURE__ */ r("span", { className: `${g} underline`, children: "browse" }),
            /* @__PURE__ */ r("span", { children: s.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ r("p", { className: "text-[10px] text-slate-500", children: n })
        ] }),
        c && /* @__PURE__ */ r("div", { className: "mt-4", children: c })
      ]
    }
  );
}, T = {
  amber: "bg-amber-500 text-slate-950 font-semibold",
  blue: "bg-blue-500 text-slate-950 font-semibold",
  emerald: "bg-emerald-500 text-slate-950 font-semibold",
  purple: "bg-purple-500 text-slate-950 font-semibold",
  slate: "bg-slate-200 text-slate-950 font-semibold"
}, ce = ({
  options: e,
  selected: t,
  onChange: a,
  variant: s = "amber",
  size: n = "sm",
  className: o = ""
}) => {
  const d = T[s] || T.amber, c = n === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  return /* @__PURE__ */ r("div", { className: `flex flex-wrap gap-1.5 ${o}`, children: e.map((u) => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: () => a(u),
      className: `${c} rounded-lg font-medium transition-all duration-150 active:scale-95 ${t === u ? d : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
      children: u
    },
    u
  )) });
}, be = ({
  isOpen: e,
  onClose: t,
  title: a,
  children: s,
  className: n = ""
}) => (I(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [e]), e ? /* @__PURE__ */ r("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ l(
  "div",
  {
    className: `w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up ${n}`,
    style: {
      paddingBottom: "env(safe-area-inset-bottom, 0px)"
    },
    children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/80", children: [
        a ? /* @__PURE__ */ r("h2", { className: "text-base font-bold text-slate-100", children: a }) : /* @__PURE__ */ r("div", {}),
        /* @__PURE__ */ r(
          "button",
          {
            onClick: t,
            className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ r(P, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: s })
    ]
  }
) }) : null), D = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, L = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, me = ({
  title: e,
  primaryValue: t,
  primaryUnit: a,
  secondaryValue: s,
  secondaryUnit: n,
  toggleHint: o,
  badge: d,
  variant: c = "blue",
  unitColor: u,
  glowColor: i,
  children: m,
  className: x = ""
}) => {
  const [f, p] = z(!1), h = (k = "blue") => {
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
  }, g = s !== void 0 && n !== void 0, b = u || D[c] || D.blue, v = i || L[c] || L.blue;
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${x}`, children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${v} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ r("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      d && /* @__PURE__ */ l("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${h(d.variant)}`, children: [
        d.icon || /* @__PURE__ */ r(Q, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ r("span", { children: d.label })
      ] })
    ] }),
    /* @__PURE__ */ l(
      "div",
      {
        className: `text-center my-6 ${g ? "cursor-pointer select-none" : ""}`,
        onClick: () => g && p(!f),
        children: [
          /* @__PURE__ */ l("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            f ? s : t,
            /* @__PURE__ */ r("span", { className: `text-2xl font-semibold ${b} ml-2`, children: f ? n : a })
          ] }),
          o && /* @__PURE__ */ r("p", { className: "text-xs text-slate-400 mt-1", children: o })
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
}, ue = ({
  label: e,
  variant: t = "idle",
  icon: a,
  isPulsing: s = !1,
  className: n = ""
}) => {
  const o = B[t] || B.idle;
  return /* @__PURE__ */ l(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${o.bg} ${n}`,
      children: [
        a ? /* @__PURE__ */ r("span", { className: "mr-1.5 shrink-0 flex items-center", children: a }) : /* @__PURE__ */ r("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${o.dot} ${s ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ r("span", { className: "truncate", children: e })
      ]
    }
  );
}, pe = ({
  children: e,
  className: t = "",
  onClick: a,
  hoverGlow: s = !1
}) => /* @__PURE__ */ r(
  "div",
  {
    onClick: a,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${s ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!a ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${t}`,
    children: e
  }
), xe = ({
  title: e,
  subtitle: t,
  icon: a,
  currentValue: s,
  targetValue: n,
  currencyPrefix: o = "$",
  currencySuffix: d = "NZD",
  deltaBadge: c,
  action: u,
  className: i = ""
}) => {
  const m = Math.min(100, Math.round(s / (n || 1) * 100)), x = Math.max(0, n - s), f = () => m > 90 ? "bg-rose-500" : m > 70 ? "bg-amber-400" : "bg-emerald-400", p = () => m > 90 ? "text-rose-400 font-semibold" : m > 70 ? "text-amber-400 font-semibold" : "text-slate-400 font-medium";
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${i}`, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
        a && /* @__PURE__ */ r("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: a }),
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ r("h3", { className: "text-sm font-semibold text-slate-200", children: e }),
          t && /* @__PURE__ */ r("p", { className: "text-xs text-slate-400", children: t })
        ] })
      ] }),
      u && /* @__PURE__ */ r("div", { children: u })
    ] }),
    /* @__PURE__ */ l("div", { className: "space-y-1.5 my-3", children: [
      /* @__PURE__ */ l("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ l("span", { className: "text-slate-400", children: [
          "Spent ",
          /* @__PURE__ */ l("strong", { className: "text-slate-200", children: [
            o,
            Math.round(s).toLocaleString("en-NZ")
          ] }),
          " of ",
          o,
          Math.round(n).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ l("span", { className: p(), children: [
          m,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ r(
        "div",
        {
          className: `h-full transition-all duration-500 rounded-full ${f()}`,
          style: { width: `${m}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between pt-2 border-t border-border/50 text-xs", children: [
      /* @__PURE__ */ l("span", { className: "text-slate-400", children: [
        "Remaining allowance: ",
        /* @__PURE__ */ l("strong", { className: "text-slate-200", children: [
          o,
          Math.round(x).toLocaleString("en-NZ"),
          " ",
          d
        ] })
      ] }),
      c && /* @__PURE__ */ l(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${c.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ r(U, { className: `w-3.5 h-3.5 mr-1 ${c.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ r("span", { children: c.label })
          ]
        }
      )
    ] })
  ] });
}, he = ({
  message: e = "New version available",
  reloadLabel: t = "Reload to update",
  laterLabel: a = "Later",
  onReload: s,
  onDismiss: n,
  className: o = ""
}) => /* @__PURE__ */ l(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${o}`,
    children: [
      /* @__PURE__ */ r("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: s,
            className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all",
            children: t
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: n,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: a
          }
        )
      ] })
    ]
  }
), fe = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: t = "Log in",
  onReauth: a,
  icon: s,
  className: n = "",
  testId: o = "session-expired-banner"
}) => {
  const d = (c) => {
    c && c.stopPropagation(), a ? a() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ l(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": o,
      onClick: d,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${n}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          s ? /* @__PURE__ */ r("span", { className: "shrink-0 flex items-center", children: s }) : /* @__PURE__ */ r(Y, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ r("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ r(
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
};
class V extends Error {
  constructor(a = "Authentik session expired", s) {
    super(a);
    w(this, "status");
    w(this, "contentType");
    w(this, "url");
    this.name = "SessionExpiredError", this.status = s == null ? void 0 : s.status, this.contentType = s == null ? void 0 : s.contentType, this.url = s == null ? void 0 : s.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function ge(e) {
  return e instanceof V || e instanceof Error && e.name === "SessionExpiredError";
}
function _(e) {
  const t = e.status, a = (e.headers.get("content-type") || "").toLowerCase(), s = e.url || "";
  return !!(t === 401 || t === 403 || t >= 300 && t < 400 || e.redirected || a.includes("text/html") || s.includes("/outpost.goauthentik.io/") || s.includes("/flows/executor/"));
}
function ee(e) {
  if (_(e)) {
    const t = e.headers.get("content-type") || "";
    throw new V(
      `Authentik session expired (status: ${e.status}, content-type: ${t})`,
      {
        status: e.status,
        contentType: t,
        url: e.url
      }
    );
  }
}
async function ve(e, t) {
  const { checkSessionExpiry: a = !0, ...s } = t || {}, n = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...s
  });
  return a && ee(n), n;
}
export {
  xe as AllowanceProgressBar,
  le as AppHeader,
  se as AppShell,
  ne as BottomNav,
  ce as ChipSelector,
  ie as FileDropzone,
  pe as GlassCard,
  me as MetricHero,
  be as Modal,
  de as NumberInputDisplay,
  he as PwaUpdateBanner,
  fe as SessionExpiredBanner,
  V as SessionExpiredError,
  ue as StatusBadge,
  oe as TactileKeypad,
  ee as assertSessionNotExpired,
  ve as authFetch,
  ge as isSessionExpiredError,
  _ as isSessionExpiredResponse
};
//# sourceMappingURL=index.js.map
