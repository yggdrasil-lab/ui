var F = Object.defineProperty;
var Z = (e, r, s) => r in e ? F(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[r] = s;
var w = (e, r, s) => Z(e, typeof r != "symbol" ? r + "" : r, s);
import { jsxs as l, jsx as t, Fragment as q } from "react/jsx-runtime";
import E, { forwardRef as z, createElement as N, useState as R, useEffect as I } from "react";
const ie = ({
  header: e,
  bottomNav: r,
  children: s,
  className: a = ""
}) => /* @__PURE__ */ l("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
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
const W = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P = (...e) => e.filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s).join(" ").trim();
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
const O = z(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: o = "",
    children: n,
    iconNode: d,
    ...i
  }, b) => N(
    "svg",
    {
      ref: b,
      ...K,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: a ? Number(s) * 24 / Number(r) : s,
      className: P("lucide", o),
      ...i
    },
    [
      ...d.map(([c, m]) => N(c, m)),
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
const g = (e, r) => {
  const s = z(
    ({ className: a, ...o }, n) => N(O, {
      ref: n,
      iconNode: r,
      className: P(`lucide-${W(e)}`, a),
      ...o
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
const U = g("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = g("Delete", [
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
const G = g("FileText", [
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
const J = g("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = g("RefreshCw", [
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
const Y = g("Sparkles", [
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
const _ = g("TriangleAlert", [
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
const V = g("X", [
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
}, ce = ({
  brandInitial: e,
  brandIcon: r,
  brandColor: s,
  variant: a = "blue",
  title: o,
  subtitle: n,
  tabs: d,
  activeTab: i,
  activeTabClass: b,
  onChangeTab: c,
  onRefresh: m,
  isRefreshing: p = !1,
  actions: h,
  className: x = ""
}) => {
  const f = $[a] || $.blue, v = s || f.brand, u = b || f.activeTab;
  return /* @__PURE__ */ t(
    "header",
    {
      className: `border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full pt-safe ${x}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-3", children: [
          (e || r) && /* @__PURE__ */ t("div", { className: `w-8 h-8 rounded-xl ${v} flex items-center justify-center font-black text-sm shadow-md`, children: r || e }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ t("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: o }),
            n && /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: n })
          ] })
        ] }),
        d && d.length > 0 && /* @__PURE__ */ t("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: d.map((y) => {
          const k = i === y.id;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => c == null ? void 0 : c(y.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${k ? u : "text-slate-400 hover:text-slate-200"}`,
              children: [
                y.icon,
                /* @__PURE__ */ t("span", { children: y.label })
              ]
            },
            y.id
          );
        }) }),
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          h,
          m && /* @__PURE__ */ t(
            "button",
            {
              onClick: m,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ t(
                Q,
                {
                  className: `w-3.5 h-3.5 ${p ? `animate-spin ${f.spinner}` : ""}`
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
}, be = ({
  tabs: e,
  activeTab: r,
  onChangeTab: s,
  variant: a = "blue",
  activeTabClass: o,
  hideOnDesktop: n = !1,
  className: d = ""
}) => {
  const i = n ? "block lg:hidden" : "block", b = o || C[a] || C.blue;
  return /* @__PURE__ */ t(
    "nav",
    {
      className: `${i} fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${d}`,
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
          children: e.map((c) => {
            const m = r === c.id;
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => s(c.id),
                className: `bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${m ? b : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": c.ariaLabel || c.label,
                children: [
                  /* @__PURE__ */ l("div", { className: "relative flex items-center justify-center", children: [
                    c.icon,
                    c.badgeDot && /* @__PURE__ */ t(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t("span", { className: "text-[10px] truncate max-w-full", children: c.label })
                ]
              },
              c.id
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
}, me = ({
  value: e,
  onChange: r,
  onClear: s,
  maxDecimalPlaces: a = 2,
  variant: o = "blue",
  actionColor: n,
  allowDecimals: d = !0,
  className: i = ""
}) => {
  const b = (x) => {
    if (x === ".") {
      if (!d || e.includes(".")) return;
      r(e === "" ? "0." : e + ".");
      return;
    }
    if (e.includes(".")) {
      const f = e.split(".");
      if (f[1] && f[1].length >= a) return;
    }
    r(e === "0" ? x : e + x);
  }, c = () => {
    e.length <= 1 ? r("") : r(e.slice(0, -1));
  }, m = () => {
    s ? s() : r("");
  }, p = n || S[o] || S.blue, h = ["1", "2", "3", "4", "5", "6", "7", "8", "9", d ? "." : "", "0"];
  return /* @__PURE__ */ l("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${i}`, children: [
    h.map((x, f) => x ? /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => b(x),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: x
      },
      x
    ) : /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${p} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${f}`
    )),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: c,
        onDoubleClick: m,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${p} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ t(X, { className: "w-5 h-5" })
      }
    )
  ] });
}, M = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, ue = ({
  label: e,
  value: r,
  unit: s,
  variant: a = "blue",
  valueColor: o,
  className: n = ""
}) => {
  const d = o || M[a] || M.blue;
  return /* @__PURE__ */ l("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ t("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: e }),
    /* @__PURE__ */ l("div", { className: `text-4xl font-black ${d} tracking-tight`, children: [
      r || "0",
      s && /* @__PURE__ */ t("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: s })
    ] })
  ] });
}, j = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, A = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, xe = ({
  file: e,
  onFileChange: r,
  acceptedFormats: s = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: o = "Supports official PDF and CSV documents",
  variant: n = "amber",
  className: d = "",
  children: i
}) => {
  const [b, c] = R(!1), m = E.useId(), p = (u) => {
    u.preventDefault(), u.stopPropagation(), u.type === "dragenter" || u.type === "dragover" ? c(!0) : u.type === "dragleave" && c(!1);
  }, h = (u) => {
    u.preventDefault(), u.stopPropagation(), c(!1), u.dataTransfer.files && u.dataTransfer.files[0] && r(u.dataTransfer.files[0]);
  }, x = (u) => {
    u.target.files && u.target.files[0] && r(u.target.files[0]);
  }, f = j[n] || j.amber, v = A[n] || A.amber;
  return /* @__PURE__ */ l(
    "div",
    {
      onDragEnter: p,
      onDragOver: p,
      onDragLeave: p,
      onDrop: h,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${b ? f : "border-border hover:border-slate-600 bg-background/50"} ${d}`,
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "file",
            accept: s,
            id: m,
            onChange: x,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ l("label", { htmlFor: m, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ t(G, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ t("div", { className: "text-xs text-slate-300 font-medium", children: e ? /* @__PURE__ */ l("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ t("span", { className: `${v} font-semibold truncate max-w-[240px]`, children: e.name }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), r(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ t(V, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ l(q, { children: [
            /* @__PURE__ */ t("span", { children: a.split("browse")[0] }),
            /* @__PURE__ */ t("span", { className: `${v} underline`, children: "browse" }),
            /* @__PURE__ */ t("span", { children: a.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ t("p", { className: "text-[10px] text-slate-500", children: o })
        ] }),
        i && /* @__PURE__ */ t("div", { className: "mt-4", children: i })
      ]
    }
  );
}, B = {
  amber: "bg-amber-500 text-slate-950 font-semibold",
  blue: "bg-blue-500 text-slate-950 font-semibold",
  emerald: "bg-emerald-500 text-slate-950 font-semibold",
  purple: "bg-purple-500 text-slate-950 font-semibold",
  slate: "bg-slate-200 text-slate-950 font-semibold"
}, pe = ({
  options: e,
  selected: r,
  onChange: s,
  variant: a = "amber",
  size: o = "sm",
  className: n = ""
}) => {
  const d = B[a] || B.amber, i = o === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  return /* @__PURE__ */ t("div", { className: `flex flex-wrap gap-1.5 ${n}`, children: e.map((b) => /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => s(b),
      className: `${i} rounded-lg font-medium transition-all duration-150 active:scale-95 ${r === b ? d : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
      children: b
    },
    b
  )) });
}, ee = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, te = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, re = E.forwardRef(
  ({
    children: e,
    variant: r = "secondary",
    size: s = "sm",
    icon: a,
    iconPosition: o = "left",
    loading: n = !1,
    loadingText: d,
    fullWidth: i = !1,
    disabled: b = !1,
    className: c = "",
    type: m = "button",
    ...p
  }, h) => /* @__PURE__ */ l(
    "button",
    {
      ref: h,
      type: m,
      disabled: b || n,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${ee[r]} ${te[s]} ${i ? "w-full" : ""} ${c}`,
      ...p,
      children: [
        n ? /* @__PURE__ */ t(J, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && o === "left" ? /* @__PURE__ */ t("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ t("span", { children: n && d ? d : e }),
        !n && a && o === "right" ? /* @__PURE__ */ t("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
re.displayName = "Button";
const he = ({
  isOpen: e,
  onClose: r,
  title: s,
  children: a,
  className: o = ""
}) => (I(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [e]), e ? /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ l(
  "div",
  {
    className: `w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up ${o}`,
    style: {
      paddingBottom: "env(safe-area-inset-bottom, 0px)"
    },
    children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/80", children: [
        s ? /* @__PURE__ */ t("h2", { className: "text-base font-bold text-slate-100", children: s }) : /* @__PURE__ */ t("div", {}),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: r,
            className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ t(V, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: a })
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
}, fe = ({
  title: e,
  primaryValue: r,
  primaryUnit: s,
  secondaryValue: a,
  secondaryUnit: o,
  toggleHint: n,
  badge: d,
  variant: i = "blue",
  unitColor: b,
  glowColor: c,
  children: m,
  className: p = ""
}) => {
  const [h, x] = R(!1), f = (k = "blue") => {
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
  }, v = a !== void 0 && o !== void 0, u = b || D[i] || D.blue, y = c || L[i] || L.blue;
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${p}`, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${y} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ t("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: e }),
      d && /* @__PURE__ */ l("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${f(d.variant)}`, children: [
        d.icon || /* @__PURE__ */ t(Y, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ t("span", { children: d.label })
      ] })
    ] }),
    /* @__PURE__ */ l(
      "div",
      {
        className: `text-center my-6 ${v ? "cursor-pointer select-none" : ""}`,
        onClick: () => v && x(!h),
        children: [
          /* @__PURE__ */ l("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            h ? a : r,
            /* @__PURE__ */ t("span", { className: `text-2xl font-semibold ${u} ml-2`, children: h ? o : s })
          ] }),
          n && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    m
  ] });
}, ae = {
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
}, ge = ({
  title: e,
  value: r,
  subtitle: s,
  icon: a,
  variant: o = "default",
  className: n = "",
  onClick: d
}) => {
  const i = ae[o], b = !!d;
  return /* @__PURE__ */ l(
    "div",
    {
      onClick: d,
      className: `p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${i.container} ${b ? "cursor-pointer hover:border-border active:scale-[0.99]" : ""} ${n}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          a && /* @__PURE__ */ t("span", { className: `mr-1 shrink-0 ${i.icon}`, children: a }),
          /* @__PURE__ */ t("span", { className: "truncate uppercase font-medium tracking-wider text-[10px] text-slate-400", children: e })
        ] }),
        /* @__PURE__ */ t("div", { className: `text-sm sm:text-base font-bold truncate ${i.value}`, children: r }),
        s && /* @__PURE__ */ t("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: s })
      ]
    }
  );
}, T = {
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
}, ve = ({
  label: e,
  variant: r = "idle",
  icon: s,
  isPulsing: a = !1,
  className: o = ""
}) => {
  const n = T[r] || T.idle;
  return /* @__PURE__ */ l(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${n.bg} ${o}`,
      children: [
        s ? /* @__PURE__ */ t("span", { className: "mr-1.5 shrink-0 flex items-center", children: s }) : /* @__PURE__ */ t("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${n.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ t("span", { className: "truncate", children: e })
      ]
    }
  );
}, ye = ({
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
), we = ({
  title: e,
  subtitle: r,
  icon: s,
  currentValue: a,
  targetValue: o,
  currencyPrefix: n = "$",
  currencySuffix: d = "NZD",
  deltaBadge: i,
  action: b,
  className: c = ""
}) => {
  const m = Math.min(100, Math.round(a / (o || 1) * 100)), p = Math.max(0, o - a), h = () => m > 90 ? "bg-rose-500" : m > 70 ? "bg-amber-400" : "bg-emerald-400", x = () => m > 90 ? "text-rose-400 font-semibold" : m > 70 ? "text-amber-400 font-semibold" : "text-slate-400 font-medium";
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${c}`, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
        s && /* @__PURE__ */ t("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: s }),
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ t("h3", { className: "text-sm font-semibold text-slate-200", children: e }),
          r && /* @__PURE__ */ t("p", { className: "text-xs text-slate-400", children: r })
        ] })
      ] }),
      b && /* @__PURE__ */ t("div", { children: b })
    ] }),
    /* @__PURE__ */ l("div", { className: "space-y-1.5 my-3", children: [
      /* @__PURE__ */ l("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ l("span", { className: "text-slate-400", children: [
          "Spent ",
          /* @__PURE__ */ l("strong", { className: "text-slate-200", children: [
            n,
            Math.round(a).toLocaleString("en-NZ")
          ] }),
          " of ",
          n,
          Math.round(o).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ l("span", { className: x(), children: [
          m,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ t(
        "div",
        {
          className: `h-full transition-all duration-500 rounded-full ${h()}`,
          style: { width: `${m}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between pt-2 border-t border-border/50 text-xs", children: [
      /* @__PURE__ */ l("span", { className: "text-slate-400", children: [
        "Remaining allowance: ",
        /* @__PURE__ */ l("strong", { className: "text-slate-200", children: [
          n,
          Math.round(p).toLocaleString("en-NZ"),
          " ",
          d
        ] })
      ] }),
      i && /* @__PURE__ */ l(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${i.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ t(U, { className: `w-3.5 h-3.5 mr-1 ${i.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ t("span", { children: i.label })
          ]
        }
      )
    ] })
  ] });
}, ke = ({
  message: e = "New version available",
  reloadLabel: r = "Reload to update",
  laterLabel: s = "Later",
  onReload: a,
  onDismiss: o,
  className: n = ""
}) => /* @__PURE__ */ l(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${n}`,
    children: [
      /* @__PURE__ */ t("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: e }),
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
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
            children: s
          }
        )
      ] })
    ]
  }
), Ne = ({
  message: e = "Authentik session expired - tap to re-authenticate",
  actionLabel: r = "Log in",
  onReauth: s,
  icon: a,
  className: o = "",
  testId: n = "session-expired-banner"
}) => {
  const d = (i) => {
    i && i.stopPropagation(), s ? s() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ l(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": n,
      onClick: d,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${o}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ t("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ t(_, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ t("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: e })
        ] }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: d,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: r
          }
        )
      ]
    }
  );
};
class H extends Error {
  constructor(s = "Authentik session expired", a) {
    super(s);
    w(this, "status");
    w(this, "contentType");
    w(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function $e(e) {
  return e instanceof H || e instanceof Error && e.name === "SessionExpiredError";
}
function se(e) {
  const r = e.status, s = (e.headers.get("content-type") || "").toLowerCase(), a = e.url || "";
  return !!(r === 401 || r === 403 || r >= 300 && r < 400 || e.redirected || s.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function le(e) {
  if (se(e)) {
    const r = e.headers.get("content-type") || "";
    throw new H(
      `Authentik session expired (status: ${e.status}, content-type: ${r})`,
      {
        status: e.status,
        contentType: r,
        url: e.url
      }
    );
  }
}
async function Ce(e, r) {
  const { checkSessionExpiry: s = !0, ...a } = r || {}, o = await fetch(e, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return s && le(o), o;
}
export {
  we as AllowanceProgressBar,
  ce as AppHeader,
  ie as AppShell,
  be as BottomNav,
  re as Button,
  pe as ChipSelector,
  xe as FileDropzone,
  ye as GlassCard,
  fe as MetricHero,
  he as Modal,
  ue as NumberInputDisplay,
  ke as PwaUpdateBanner,
  Ne as SessionExpiredBanner,
  H as SessionExpiredError,
  ge as StatCard,
  ve as StatusBadge,
  me as TactileKeypad,
  le as assertSessionNotExpired,
  Ce as authFetch,
  $e as isSessionExpiredError,
  se as isSessionExpiredResponse
};
//# sourceMappingURL=index.js.map
