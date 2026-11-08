var se = Object.defineProperty;
var le = (t, r, s) => r in t ? se(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s;
var $ = (t, r, s) => le(t, typeof r != "symbol" ? r + "" : r, s);
import { jsxs as l, jsx as e, Fragment as ne } from "react/jsx-runtime";
import X, { forwardRef as J, createElement as S, useState as w, useEffect as z } from "react";
import { createPortal as de } from "react-dom";
const je = ({
  header: t,
  bottomNav: r,
  children: s,
  className: a = ""
}) => /* @__PURE__ */ l("div", { className: `min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${a}`, children: [
  t,
  /* @__PURE__ */ e("main", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1", children: s }),
  r
] });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Q = (...t) => t.filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ie = {
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
const ce = J(
  ({
    color: t = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: d = "",
    children: n,
    iconNode: o,
    ...c
  }, m) => S(
    "svg",
    {
      ref: m,
      ...ie,
      width: r,
      height: r,
      stroke: t,
      strokeWidth: a ? Number(s) * 24 / Number(r) : s,
      className: Q("lucide", d),
      ...c
    },
    [
      ...o.map(([b, i]) => S(b, i)),
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
const N = (t, r) => {
  const s = J(
    ({ className: a, ...d }, n) => S(ce, {
      ref: n,
      iconNode: r,
      className: Q(`lucide-${oe(t)}`, a),
      ...d
    })
  );
  return s.displayName = `${t}`, s;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = N("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = N("Delete", [
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
const xe = N("FileText", [
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
const ue = N("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = N("RefreshCw", [
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
const he = N("Sparkles", [
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
const ge = N("TriangleAlert", [
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
const Y = N("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), D = {
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
}, Ae = ({
  brandInitial: t,
  brandIcon: r,
  brandColor: s,
  variant: a = "blue",
  title: d,
  subtitle: n,
  tabs: o,
  activeTab: c,
  activeTabClass: m,
  onChangeTab: b,
  onRefresh: i,
  isRefreshing: u = !1,
  actions: g,
  className: x = ""
}) => {
  const p = D[a] || D.blue, f = s || p.brand, h = m || p.activeTab;
  return /* @__PURE__ */ e(
    "header",
    {
      className: `border-b border-border/60 bg-card/95 backdrop-blur-md sticky top-0 z-40 w-full pt-safe ${x}`,
      style: {
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      },
      children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-3", children: [
          (t || r) && /* @__PURE__ */ e("div", { className: `w-8 h-8 rounded-xl ${f} flex items-center justify-center font-black text-sm shadow-md`, children: r || t }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight", children: d }),
            n && /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-400 font-medium tracking-wider uppercase", children: n })
          ] })
        ] }),
        o && o.length > 0 && /* @__PURE__ */ e("nav", { className: "hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80", children: o.map((v) => {
          const y = c === v.id;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => b == null ? void 0 : b(v.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${y ? h : "text-slate-400 hover:text-slate-200"}`,
              children: [
                v.icon,
                /* @__PURE__ */ e("span", { children: v.label })
              ]
            },
            v.id
          );
        }) }),
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          g,
          i && /* @__PURE__ */ e(
            "button",
            {
              onClick: i,
              className: "p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all",
              title: "Refresh data",
              "aria-label": "Refresh data",
              "data-testid": "refresh-button",
              children: /* @__PURE__ */ e(
                pe,
                {
                  className: `w-3.5 h-3.5 ${u ? `animate-spin ${p.spinner}` : ""}`
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}, E = {
  amber: "text-amber-400 bg-amber-500/10 font-semibold active",
  blue: "text-blue-400 bg-blue-500/10 font-semibold active",
  emerald: "text-emerald-400 bg-emerald-500/10 font-semibold active",
  purple: "text-purple-400 bg-purple-500/10 font-semibold active",
  slate: "text-slate-100 bg-slate-700/50 font-semibold active"
}, Be = ({
  tabs: t,
  activeTab: r,
  onChangeTab: s,
  variant: a = "blue",
  activeTabClass: d,
  hideOnDesktop: n = !1,
  className: o = ""
}) => {
  const c = n ? "block lg:hidden" : "block", m = d || E[a] || E.blue;
  return /* @__PURE__ */ e(
    "nav",
    {
      className: `${c} fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${o}`,
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
          style: { gridTemplateColumns: `repeat(${t.length}, minmax(0, 1fr))` },
          children: t.map((b) => {
            const i = r === b.id;
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => s(b.id),
                className: `bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${i ? m : "text-slate-400 hover:text-slate-200"}`,
                "aria-label": b.ariaLabel || b.label,
                children: [
                  /* @__PURE__ */ l("div", { className: "relative flex items-center justify-center", children: [
                    b.icon,
                    b.badgeDot && /* @__PURE__ */ e(
                      "span",
                      {
                        className: "active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                        title: "Workout in progress"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] truncate max-w-full tracking-tight", children: b.label })
                ]
              },
              b.id
            );
          })
        }
      )
    }
  );
}, L = {
  amber: "text-amber-400 hover:text-amber-300",
  blue: "text-blue-400 hover:text-blue-300",
  emerald: "text-emerald-400 hover:text-emerald-300",
  purple: "text-purple-400 hover:text-purple-300",
  slate: "text-slate-300 hover:text-slate-100"
}, ze = ({
  value: t,
  onChange: r,
  onClear: s,
  maxDecimalPlaces: a = 2,
  variant: d = "blue",
  actionColor: n,
  allowDecimals: o = !0,
  className: c = ""
}) => {
  const m = (x) => {
    if (x === ".") {
      if (!o || t.includes(".")) return;
      r(t === "" ? "0." : t + ".");
      return;
    }
    if (t.includes(".")) {
      const p = t.split(".");
      if (p[1] && p[1].length >= a) return;
    }
    r(t === "0" ? x : t + x);
  }, b = () => {
    t.length <= 1 ? r("") : r(t.slice(0, -1));
  }, i = () => {
    s ? s() : r("");
  }, u = n || L[d] || L.blue, g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", o ? "." : "", "0"];
  return /* @__PURE__ */ l("div", { className: `grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${c}`, children: [
    g.map((x, p) => x ? /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => m(x),
        className: "h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none",
        children: x
      },
      x
    ) : /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: i,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${u} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`,
        title: "Clear all",
        children: "C"
      },
      `empty-${p}`
    )),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: b,
        onDoubleClick: i,
        className: `h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${u} shadow-sm transition-all flex items-center justify-center select-none`,
        title: "Backspace (double tap to clear all)",
        "aria-label": "Backspace",
        children: /* @__PURE__ */ e(me, { className: "w-5 h-5" })
      }
    )
  ] });
}, T = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-100"
}, De = ({
  label: t,
  value: r,
  unit: s,
  variant: a = "blue",
  valueColor: d,
  className: n = ""
}) => {
  const o = d || T[a] || T.blue;
  return /* @__PURE__ */ l("div", { className: `p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${n}`, children: [
    /* @__PURE__ */ e("span", { className: "text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1", children: t }),
    /* @__PURE__ */ l("div", { className: `text-4xl font-black ${o} tracking-tight`, children: [
      r || "0",
      s && /* @__PURE__ */ e("span", { className: "text-sm font-normal text-slate-400 ml-1.5 uppercase", children: s })
    ] })
  ] });
}, R = {
  amber: "border-amber-500 bg-amber-500/5",
  blue: "border-blue-500 bg-blue-500/5",
  emerald: "border-emerald-500 bg-emerald-500/5",
  purple: "border-purple-500 bg-purple-500/5",
  slate: "border-slate-500 bg-slate-500/5"
}, P = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, Ee = ({
  file: t,
  onFileChange: r,
  acceptedFormats: s = ".pdf,.csv",
  title: a = "Drop your file here, or browse",
  description: d = "Supports official PDF and CSV documents",
  variant: n = "amber",
  className: o = "",
  children: c
}) => {
  const [m, b] = w(!1), i = X.useId(), u = (h) => {
    h.preventDefault(), h.stopPropagation(), h.type === "dragenter" || h.type === "dragover" ? b(!0) : h.type === "dragleave" && b(!1);
  }, g = (h) => {
    h.preventDefault(), h.stopPropagation(), b(!1), h.dataTransfer.files && h.dataTransfer.files[0] && r(h.dataTransfer.files[0]);
  }, x = (h) => {
    h.target.files && h.target.files[0] && r(h.target.files[0]);
  }, p = R[n] || R.amber, f = P[n] || P.amber;
  return /* @__PURE__ */ l(
    "div",
    {
      onDragEnter: u,
      onDragOver: u,
      onDragLeave: u,
      onDrop: g,
      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${m ? p : "border-border hover:border-slate-600 bg-background/50"} ${o}`,
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "file",
            accept: s,
            id: i,
            onChange: x,
            className: "hidden"
          }
        ),
        /* @__PURE__ */ l("label", { htmlFor: i, className: "cursor-pointer space-y-2 block", children: [
          /* @__PURE__ */ e(xe, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-slate-300 font-medium", children: t ? /* @__PURE__ */ l("div", { className: "inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border", children: [
            /* @__PURE__ */ e("span", { className: `${f} font-semibold truncate max-w-[240px]`, children: t.name }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: (h) => {
                  h.preventDefault(), h.stopPropagation(), r(null);
                },
                className: "text-slate-400 hover:text-slate-200 p-0.5 rounded",
                children: /* @__PURE__ */ e(Y, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ l(ne, { children: [
            /* @__PURE__ */ e("span", { children: a.split("browse")[0] }),
            /* @__PURE__ */ e("span", { className: `${f} underline`, children: "browse" }),
            /* @__PURE__ */ e("span", { children: a.split("browse")[1] || "" })
          ] }) }),
          /* @__PURE__ */ e("p", { className: "text-[10px] text-slate-500", children: d })
        ] }),
        c && /* @__PURE__ */ e("div", { className: "mt-4", children: c })
      ]
    }
  );
}, H = {
  amber: "bg-amber-500 text-slate-950 font-semibold border border-amber-400",
  blue: "bg-blue-500/25 text-blue-300 font-semibold border border-blue-500",
  emerald: "bg-emerald-500 text-slate-950 font-semibold border border-emerald-400",
  purple: "bg-purple-500/25 text-purple-300 font-semibold border border-purple-500",
  slate: "bg-slate-200 text-slate-950 font-semibold border border-slate-300",
  rose: "bg-rose-500/20 text-rose-400 font-semibold border border-rose-500"
}, Le = ({
  options: t,
  selected: r,
  selectedValues: s = [],
  onChange: a,
  onChangeValues: d,
  multiSelect: n = !1,
  equalWidth: o = !1,
  variant: c = "amber",
  size: m = "sm",
  className: b = ""
}) => {
  const i = H[c] || H.amber, u = m === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", g = (x) => {
    if (n) {
      const p = s.includes(x) ? s.filter((f) => f !== x) : [...s, x];
      d && d(p), a && a(x);
    } else a && a(x);
  };
  return /* @__PURE__ */ e("div", { className: `flex ${o ? "w-full gap-2" : "flex-wrap gap-1.5"} ${b}`, children: t.map((x) => {
    const p = typeof x == "string" ? x : x.value, f = typeof x == "string" ? x : x.label, h = n ? s.includes(p) : r === p;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => g(p),
        className: `${u} ${o ? "flex-1 text-center" : ""} rounded-lg font-medium transition-all duration-150 active:scale-95 ${h ? i : "bg-background text-slate-400 hover:text-slate-200 border border-border"}`,
        children: f
      },
      p
    );
  }) });
}, F = {
  emerald: "bg-emerald-500/15 border-emerald-500 text-emerald-300",
  amber: "bg-amber-500/15 border-amber-500 text-amber-300",
  orange: "bg-orange-500/15 border-orange-500 text-orange-300",
  rose: "bg-rose-500/15 border-rose-500 text-rose-300",
  blue: "bg-blue-500/15 border-blue-500 text-slate-100",
  purple: "bg-purple-500/15 border-purple-500 text-purple-300"
};
function Te({
  label: t,
  options: r,
  value: s,
  onChange: a,
  className: d = ""
}) {
  return /* @__PURE__ */ l("div", { className: `space-y-2 ${d}`, children: [
    t && /* @__PURE__ */ e("label", { className: "block font-semibold text-sm text-slate-200", children: t }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: r.map((n) => {
      const o = s === n.value, c = n.accent || "blue", m = F[c] || F.blue;
      return /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => a(n.value),
          className: `flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${o ? m : "bg-background/60 hover:bg-slate-800/50 border-border text-slate-300"}`,
          children: [
            n.icon && /* @__PURE__ */ e("span", { className: "text-xl leading-none shrink-0 mt-0.5", children: n.icon }),
            /* @__PURE__ */ l("div", { className: "flex-1 min-w-0", children: [
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
const I = {
  amber: "accent-amber-500",
  sky: "accent-sky-400",
  blue: "accent-blue-500",
  emerald: "accent-emerald-400",
  purple: "accent-purple-400"
}, Re = ({
  label: t,
  valueDisplay: r,
  valueClassName: s = "text-slate-200",
  min: a,
  max: d,
  step: n = 1,
  value: o,
  onChange: c,
  minLabel: m,
  midLabel: b,
  maxLabel: i,
  variant: u = "amber",
  className: g = ""
}) => {
  const x = I[u] || I.amber;
  return /* @__PURE__ */ l("div", { className: `space-y-1 ${g}`, children: [
    /* @__PURE__ */ l("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ e("span", { className: "text-slate-400", children: t }),
      /* @__PURE__ */ e("span", { className: `font-semibold ${s}`, children: r })
    ] }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "range",
        min: a,
        max: d,
        step: n,
        value: o,
        onChange: (p) => c(Number(p.target.value)),
        className: `w-full ${x} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`
      }
    ),
    (m || b || i) && /* @__PURE__ */ l("div", { className: "flex justify-between text-[10px] text-slate-500", children: [
      /* @__PURE__ */ e("span", { children: m }),
      /* @__PURE__ */ e("span", { children: b }),
      /* @__PURE__ */ e("span", { children: i })
    ] })
  ] });
}, Z = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm",
  slate: "bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm"
}, G = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm"
};
function Pe({
  options: t,
  value: r,
  onChange: s,
  variant: a = "amber",
  size: d = "xs",
  fullWidth: n = !1,
  className: o = "",
  idPrefix: c = "segmented"
}) {
  const m = Z[a] || Z.amber, b = G[d] || G.xs;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "tablist",
      className: `inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${n ? "w-full grid" : ""} ${o}`,
      style: n ? { gridTemplateColumns: `repeat(${t.length}, minmax(0, 1fr))` } : void 0,
      children: t.map((i) => {
        const u = r === i.id;
        return /* @__PURE__ */ l(
          "button",
          {
            role: "tab",
            "aria-selected": u,
            type: "button",
            "data-testid": `${c}-${i.id}`,
            onClick: () => s(i.id),
            className: `font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${b} ${u ? `${m} font-semibold` : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
            children: [
              i.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: i.icon }),
              /* @__PURE__ */ e("span", { children: i.label }),
              i.badge !== void 0 && /* @__PURE__ */ e("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono", children: i.badge })
            ]
          },
          i.id
        );
      })
    }
  );
}
const fe = {
  primary: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  amber: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 border border-transparent",
  emerald: "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent",
  rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent",
  secondary: "bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm",
  outline: "bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold",
  ghost: "bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium",
  danger: "bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm"
}, ve = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2",
  lg: "px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2"
}, M = X.forwardRef(
  ({
    children: t,
    variant: r = "secondary",
    size: s = "sm",
    icon: a,
    iconPosition: d = "left",
    loading: n = !1,
    loadingText: o,
    fullWidth: c = !1,
    disabled: m = !1,
    className: b = "",
    type: i = "button",
    ...u
  }, g) => /* @__PURE__ */ l(
    "button",
    {
      ref: g,
      type: i,
      disabled: m || n,
      className: `inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${fe[r]} ${ve[s]} ${c ? "w-full" : ""} ${b}`,
      ...u,
      children: [
        n ? /* @__PURE__ */ e(ue, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : a && d === "left" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null,
        /* @__PURE__ */ e("span", { children: n && o ? o : t }),
        !n && a && d === "right" ? /* @__PURE__ */ e("span", { className: "shrink-0", children: a }) : null
      ]
    }
  )
);
M.displayName = "Button";
const ye = ({
  isOpen: t,
  onClose: r,
  title: s,
  subtitle: a,
  headerIcon: d,
  disableClose: n = !1,
  children: o,
  className: c = ""
}) => {
  if (z(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [t]), z(() => {
    if (!t) return;
    const b = (i) => {
      i.key === "Escape" && !n && r();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [t, r, n]), !t) return null;
  const m = /* @__PURE__ */ e(
    "div",
    {
      className: "modal-backdrop modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
      onClick: (b) => {
        b.target === b.currentTarget && !n && r();
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          className: `modal-card modal-content w-full max-w-md bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] transition-all transform animate-slide-up pb-safe ${c}`,
          children: [
            /* @__PURE__ */ l("div", { className: "flex items-start justify-between px-5 py-4 border-b border-border/80", children: [
              s ? /* @__PURE__ */ l("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                  d && /* @__PURE__ */ e("span", { className: "text-lg leading-none", children: d }),
                  /* @__PURE__ */ e("h2", { className: "text-base font-bold text-slate-100 m-0", children: s })
                ] }),
                a && /* @__PURE__ */ e("p", { className: "text-xs text-sky-400 m-0", children: a })
              ] }) : /* @__PURE__ */ e("div", {}),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: r,
                  disabled: n,
                  className: "p-1.5 rounded-xl bg-background hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors disabled:opacity-50",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ e(Y, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "p-5 overflow-y-auto space-y-4 flex-1", children: o })
          ]
        }
      )
    }
  );
  return typeof document < "u" ? de(m, document.body) : m;
}, He = ({
  isOpen: t,
  onClose: r,
  title: s,
  subtitle: a = "Sports Physiology & Circadian Research Grounding",
  headerIcon: d = "🧠",
  citationTitle: n,
  citationIcon: o = "📚",
  pillars: c = [],
  inputLabel: m = "Constraints, Body State, or Schedule Shifts (Optional)",
  inputPlaceholder: b = "e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM",
  inputRows: i = 3,
  submitLabel: u = "Synthesize with AI",
  submittingLabel: g = "Synthesizing...",
  errorFallbackMessage: x = "Synthesis failed. Please verify Muninn connection or try again.",
  variant: p = "blue",
  onSynthesize: f
}) => {
  const [h, v] = w(""), [y, j] = w(!1), [A, B] = w(null), ee = async () => {
    j(!0), B(null);
    try {
      await f(h.trim() || void 0), v(""), r();
    } catch {
      B(x);
    } finally {
      j(!1);
    }
  }, C = p === "amber", te = C ? "bg-amber-500/10 border-amber-500/25" : "bg-blue-500/10 border-blue-500/25", re = C ? "text-amber-300" : "text-blue-300";
  return /* @__PURE__ */ e(
    ye,
    {
      isOpen: t,
      onClose: r,
      title: s,
      subtitle: a,
      headerIcon: d,
      disableClose: y,
      children: /* @__PURE__ */ l("div", { className: "space-y-4", children: [
        (n || c.length > 0) && /* @__PURE__ */ l("div", { className: `rounded-xl border p-3 text-xs ${te}`, children: [
          n && /* @__PURE__ */ l("div", { className: `font-semibold mb-1.5 flex items-center gap-1.5 ${re}`, children: [
            /* @__PURE__ */ e("span", { children: o }),
            /* @__PURE__ */ e("span", { children: n })
          ] }),
          c.length > 0 && /* @__PURE__ */ e("ul", { className: "m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc", children: c.map((k, ae) => /* @__PURE__ */ l("li", { children: [
            /* @__PURE__ */ l("strong", { className: "text-slate-100", children: [
              k.label,
              ":"
            ] }),
            " ",
            k.description
          ] }, ae)) })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs font-semibold text-slate-200", children: m }),
          /* @__PURE__ */ e(
            "textarea",
            {
              rows: i,
              value: h,
              onChange: (k) => v(k.target.value),
              disabled: y,
              placeholder: b,
              className: "w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-y"
            }
          )
        ] }),
        A && /* @__PURE__ */ e("div", { className: "text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2", children: A }),
        /* @__PURE__ */ l("div", { className: "flex gap-2.5 justify-end pt-1", children: [
          /* @__PURE__ */ e(
            M,
            {
              variant: "secondary",
              size: "md",
              onClick: r,
              disabled: y,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e(
            M,
            {
              variant: C ? "amber" : "blue",
              size: "md",
              loading: y,
              loadingText: g,
              icon: /* @__PURE__ */ e("span", { children: "⚡" }),
              onClick: ee,
              children: u
            }
          )
        ] })
      ] })
    }
  );
}, q = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  slate: "text-slate-300"
}, O = {
  amber: "bg-amber-500/5",
  blue: "bg-blue-500/5",
  emerald: "bg-emerald-500/5",
  purple: "bg-purple-500/5",
  slate: "bg-slate-500/5"
}, Fe = ({
  title: t,
  primaryValue: r,
  primaryUnit: s,
  secondaryValue: a,
  secondaryUnit: d,
  toggleHint: n,
  badge: o,
  variant: c = "blue",
  unitColor: m,
  glowColor: b,
  children: i,
  className: u = ""
}) => {
  const [g, x] = w(!1), p = (y = "blue") => {
    switch (y) {
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
  }, f = a !== void 0 && d !== void 0, h = m || q[c] || q.blue, v = b || O[c] || O.blue;
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${u}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${v} rounded-full blur-3xl pointer-events-none`
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-semibold tracking-wider uppercase text-slate-400", children: t }),
      o && /* @__PURE__ */ l("div", { className: `flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${p(o.variant)}`, children: [
        o.icon || /* @__PURE__ */ e(he, { className: "w-3.5 h-3.5 mr-1" }),
        /* @__PURE__ */ e("span", { children: o.label })
      ] })
    ] }),
    /* @__PURE__ */ l(
      "div",
      {
        className: `text-center my-6 ${f ? "cursor-pointer select-none" : ""}`,
        onClick: () => f && x(!g),
        children: [
          /* @__PURE__ */ l("div", { className: "text-5xl sm:text-6xl font-black text-slate-50 tracking-tight", children: [
            g ? a : r,
            /* @__PURE__ */ e("span", { className: `text-2xl font-semibold ${h} ml-2`, children: g ? d : s })
          ] }),
          n && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400 mt-1", children: n })
        ]
      }
    ),
    i
  ] });
}, Ne = {
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
}, Ie = ({
  title: t,
  value: r,
  subtitle: s,
  icon: a,
  variant: d = "default",
  className: n = "",
  onClick: o
}) => {
  const c = Ne[d], m = !!o;
  return /* @__PURE__ */ l(
    "div",
    {
      onClick: o,
      className: `p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${c.container} ${m ? "cursor-pointer hover:border-border active:scale-[0.99]" : ""} ${n}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate", children: [
          a && /* @__PURE__ */ e("span", { className: `mr-1 shrink-0 ${c.icon}`, children: a }),
          /* @__PURE__ */ e("span", { className: "truncate uppercase font-medium tracking-tight sm:tracking-normal text-[10px] sm:text-xs text-slate-400", children: t })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-sm sm:text-base font-bold truncate ${c.value}`, children: r }),
        s && /* @__PURE__ */ e("div", { className: "text-[10px] sm:text-xs text-slate-400 truncate mt-0.5", children: s })
      ]
    }
  );
}, V = {
  amber: "bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30",
  blue: "bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30",
  emerald: "bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30",
  purple: "bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30",
  slate: "bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30"
}, Ze = ({
  title: t,
  subtitle: r,
  value: s,
  valueSuffix: a,
  subvalue: d,
  subvalueTrend: n = "neutral",
  badge: o,
  icon: c,
  isSelected: m = !1,
  onClick: b,
  variant: i = "amber",
  className: u = "",
  "data-testid": g
}) => {
  const x = V[i] || V.amber, p = n === "positive" ? "text-emerald-400" : n === "negative" ? "text-rose-400" : "text-slate-400";
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-testid": g,
      onClick: b,
      className: `text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${m ? x : "bg-background/60 border-border/60 hover:border-slate-700"} ${u}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ l("span", { className: "text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5", children: [
            c && /* @__PURE__ */ e("span", { className: "shrink-0", children: c }),
            /* @__PURE__ */ e("span", { className: "truncate", children: t })
          ] }),
          o && /* @__PURE__ */ e("div", { className: "shrink-0", children: o })
        ] }),
        s !== void 0 && /* @__PURE__ */ l("div", { className: "text-lg font-bold text-slate-100 font-mono", children: [
          s,
          a && /* @__PURE__ */ e("span", { className: "text-xs font-normal text-slate-400 ml-1", children: a })
        ] }),
        (r || d) && /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mt-1", children: [
          r && /* @__PURE__ */ e("span", { className: "truncate", children: r }),
          d && /* @__PURE__ */ e("span", { className: `font-mono font-medium shrink-0 ml-1.5 ${p}`, children: d })
        ] })
      ]
    }
  );
}, K = {
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
}, Ge = ({
  label: t,
  variant: r = "idle",
  icon: s,
  isPulsing: a = !1,
  className: d = ""
}) => {
  const n = K[r] || K.idle;
  return /* @__PURE__ */ l(
    "div",
    {
      className: `status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${n.bg} ${d}`,
      children: [
        s ? /* @__PURE__ */ e("span", { className: "mr-1.5 shrink-0 flex items-center", children: s }) : /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${n.dot} ${a ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ e("span", { className: "truncate", children: t })
      ]
    }
  );
}, qe = ({
  children: t,
  className: r = "",
  onClick: s,
  hoverGlow: a = !1
}) => /* @__PURE__ */ e(
  "div",
  {
    onClick: s,
    className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${a ? "hover:border-border transition-all duration-200 hover:shadow-xl" : ""} ${!!s ? "cursor-pointer active:scale-[0.99] transition-transform select-none" : ""} ${r}`,
    children: t
  }
), Oe = ({
  title: t,
  subtitle: r,
  icon: s,
  currentValue: a,
  targetValue: d,
  currencyPrefix: n = "$",
  currencySuffix: o = "NZD",
  deltaBadge: c,
  action: m,
  className: b = ""
}) => {
  const i = Math.min(100, Math.round(a / (d || 1) * 100)), u = Math.max(0, d - a), g = () => i > 90 ? "bg-rose-500" : i > 70 ? "bg-amber-400" : "bg-emerald-400", x = () => i > 90 ? "text-rose-400 font-semibold" : i > 70 ? "text-amber-400 font-semibold" : "text-slate-400 font-medium";
  return /* @__PURE__ */ l("div", { className: `bg-card border border-border rounded-2xl p-5 shadow-lg ${b}`, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
        s && /* @__PURE__ */ e("div", { className: "p-1.5 rounded-lg bg-amber-500/10 text-amber-400", children: s }),
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-slate-200", children: t }),
          r && /* @__PURE__ */ e("p", { className: "text-xs text-slate-400", children: r })
        ] })
      ] }),
      m && /* @__PURE__ */ e("div", { children: m })
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
          Math.round(d).toLocaleString("en-NZ")
        ] }),
        /* @__PURE__ */ l("span", { className: x(), children: [
          i,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ e(
        "div",
        {
          className: `h-full transition-all duration-500 rounded-full ${g()}`,
          style: { width: `${i}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between pt-2 border-t border-border/50 text-xs", children: [
      /* @__PURE__ */ l("span", { className: "text-slate-400", children: [
        "Remaining allowance: ",
        /* @__PURE__ */ l("strong", { className: "text-slate-200", children: [
          n,
          Math.round(u).toLocaleString("en-NZ"),
          " ",
          o
        ] })
      ] }),
      c && /* @__PURE__ */ l(
        "div",
        {
          className: `flex items-center font-medium px-2 py-0.5 rounded-md ${c.isPositive ? "text-emerald-300 bg-emerald-500/10" : "text-rose-300 bg-rose-500/10"}`,
          children: [
            /* @__PURE__ */ e(be, { className: `w-3.5 h-3.5 mr-1 ${c.isPositive ? "" : "rotate-90"}` }),
            /* @__PURE__ */ e("span", { children: c.label })
          ]
        }
      )
    ] })
  ] });
}, Ve = ({
  eyebrow: t,
  currentValueLabel: r,
  deltaLabel: s,
  deltaPositive: a = !0,
  milestoneLabel: d = "Next Milestone",
  milestoneValue: n,
  progressPercent: o,
  startLabel: c,
  centerLabel: m,
  targetLabel: b,
  variant: i = "blue",
  className: u = ""
}) => {
  const g = Math.min(100, Math.max(0, Math.round(o))), x = i === "amber" ? "text-amber-400" : i === "emerald" ? "text-emerald-400" : i === "purple" ? "text-purple-400" : "text-sky-400", p = i === "amber" ? "from-amber-500 to-emerald-400" : "from-blue-500 to-emerald-400";
  return /* @__PURE__ */ l(
    "div",
    {
      className: `glass-panel bg-card/80 backdrop-blur-md border border-blue-500/25 rounded-2xl p-5 shadow-lg animate-slide-up ${u}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${x}`, children: t }),
            /* @__PURE__ */ l("div", { className: "text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ e("span", { children: r }),
              s && /* @__PURE__ */ e(
                "span",
                {
                  className: `text-sm font-semibold ${a ? "text-emerald-400" : "text-rose-400"}`,
                  children: s
                }
              )
            ] })
          ] }),
          n && /* @__PURE__ */ l("div", { className: "text-right", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-slate-400", children: d }),
            /* @__PURE__ */ e("div", { className: "text-lg font-bold text-purple-400", children: n })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "h-2.5 w-full bg-background/80 rounded-full overflow-hidden my-3 border border-border/50", children: /* @__PURE__ */ e(
          "div",
          {
            className: `h-full bg-gradient-to-r ${p} rounded-full transition-all duration-500`,
            style: { width: `${g}%` }
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ e("span", { children: c }),
          m && /* @__PURE__ */ e("span", { children: m }),
          /* @__PURE__ */ e("span", { children: b })
        ] })
      ]
    }
  );
}, U = {
  info: "bg-blue-500/12 border-blue-500/30 text-blue-200",
  success: "bg-emerald-500/12 border-emerald-500/30 text-emerald-200",
  warning: "bg-amber-500/12 border-amber-500/30 text-amber-200",
  error: "bg-rose-500/12 border-rose-500/30 text-rose-200"
}, W = {
  info: "text-slate-100",
  success: "text-emerald-300",
  warning: "text-amber-300",
  error: "text-rose-300"
}, Ke = ({
  variant: t = "info",
  title: r,
  children: s,
  icon: a,
  action: d,
  role: n = "alert",
  className: o = ""
}) => {
  const c = U[t] || U.info, m = W[t] || W.info;
  return /* @__PURE__ */ l(
    "div",
    {
      role: n,
      className: `rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${c} ${o}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm leading-snug shrink-0 mt-0.5", children: a }),
          /* @__PURE__ */ l("div", { className: "flex-1 min-w-0 leading-relaxed", children: [
            r && /* @__PURE__ */ e("div", { className: `font-semibold mb-0.5 ${m}`, children: r }),
            s && /* @__PURE__ */ e("div", { className: "opacity-95", children: s })
          ] })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "shrink-0 self-center", children: d })
      ]
    }
  );
}, Ue = ({
  title: t,
  icon: r,
  defaultOpen: s = !1,
  variant: a = "inline",
  expandLabel: d = "▼ Expand",
  collapseLabel: n = "▲ Hide",
  children: o,
  className: c = ""
}) => {
  const [m, b] = w(s);
  return a === "card" ? /* @__PURE__ */ l("div", { className: `glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg ${c}`, children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        onClick: () => b((i) => !i),
        className: "w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer",
        children: [
          /* @__PURE__ */ l("span", { className: "font-semibold text-sm text-slate-100 flex items-center gap-2", children: [
            r && /* @__PURE__ */ e("span", { children: r }),
            /* @__PURE__ */ e("span", { children: t })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-xs text-slate-400", children: m ? n : d })
        ]
      }
    ),
    m && /* @__PURE__ */ e("div", { className: "mt-3 pt-3 border-t border-border/60", children: o })
  ] }) : /* @__PURE__ */ l("div", { className: `pt-2 border-t border-border/40 ${c}`, children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        onClick: () => b((i) => !i),
        className: "bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer",
        children: [
          r && /* @__PURE__ */ e("span", { children: r }),
          /* @__PURE__ */ e("span", { className: "underline", children: t }),
          /* @__PURE__ */ e("span", { className: "text-[10px]", children: m ? "▲" : "▼" })
        ]
      }
    ),
    m && /* @__PURE__ */ e("div", { className: "mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1", children: o })
  ] });
}, We = ({
  message: t = "New version available",
  reloadLabel: r = "Reload to update",
  laterLabel: s = "Later",
  onReload: a,
  onDismiss: d,
  className: n = ""
}) => /* @__PURE__ */ l(
  "div",
  {
    role: "status",
    "data-testid": "pwa-update-banner",
    className: `glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${n}`,
    children: [
      /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100", children: t }),
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: a,
            className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all",
            children: r
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: d,
            className: "px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all",
            children: s
          }
        )
      ] })
    ]
  }
), Xe = ({
  message: t = "Authentik session expired - tap to re-authenticate",
  actionLabel: r = "Log in",
  onReauth: s,
  icon: a,
  className: d = "",
  testId: n = "session-expired-banner"
}) => {
  const o = (c) => {
    c && c.stopPropagation(), s ? s() : typeof window < "u" && window.location.reload();
  };
  return /* @__PURE__ */ l(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      "data-testid": n,
      onClick: o,
      className: `glass-panel flex items-center justify-between p-3.5 px-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-lg shadow-rose-950/20 backdrop-blur-md transition-all cursor-pointer select-none animate-slide-up ${d}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2.5 min-w-0 pr-2", children: [
          a ? /* @__PURE__ */ e("span", { className: "shrink-0 flex items-center", children: a }) : /* @__PURE__ */ e(ge, { className: "w-5 h-5 text-rose-400 shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal", children: t })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-md transition-all shrink-0",
            children: r
          }
        )
      ]
    }
  );
};
class _ extends Error {
  constructor(s = "Authentik session expired", a) {
    super(s);
    $(this, "status");
    $(this, "contentType");
    $(this, "url");
    this.name = "SessionExpiredError", this.status = a == null ? void 0 : a.status, this.contentType = a == null ? void 0 : a.contentType, this.url = a == null ? void 0 : a.url, Object.setPrototypeOf(this, new.target.prototype);
  }
}
function Je(t) {
  return t instanceof _ || t instanceof Error && t.name === "SessionExpiredError";
}
function we(t) {
  const r = t.status, s = (t.headers.get("content-type") || "").toLowerCase(), a = t.url || "";
  return !!(r === 401 || r === 403 || r >= 300 && r < 400 || t.redirected || s.includes("text/html") || a.includes("/outpost.goauthentik.io/") || a.includes("/flows/executor/"));
}
function ke(t) {
  if (we(t)) {
    const r = t.headers.get("content-type") || "";
    throw new _(
      `Authentik session expired (status: ${t.status}, content-type: ${r})`,
      {
        status: t.status,
        contentType: r,
        url: t.url
      }
    );
  }
}
async function Qe(t, r) {
  const { checkSessionExpiry: s = !0, ...a } = r || {}, d = await fetch(t, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: "no-store",
    ...a
  });
  return s && ke(d), d;
}
export {
  He as AiSynthesizerModal,
  Ke as AlertBanner,
  Oe as AllowanceProgressBar,
  Ae as AppHeader,
  je as AppShell,
  Be as BottomNav,
  M as Button,
  Le as ChipSelector,
  Ue as CollapsibleSection,
  Ee as FileDropzone,
  qe as GlassCard,
  Ve as GoalProgressCard,
  Fe as MetricHero,
  ye as Modal,
  De as NumberInputDisplay,
  Te as OptionCardGroup,
  We as PwaUpdateBanner,
  Re as RangeSlider,
  Pe as SegmentedControl,
  Ze as SelectableCard,
  Xe as SessionExpiredBanner,
  _ as SessionExpiredError,
  Ie as StatCard,
  Ge as StatusBadge,
  ze as TactileKeypad,
  ke as assertSessionNotExpired,
  Qe as authFetch,
  Je as isSessionExpiredError,
  we as isSessionExpiredResponse
};
//# sourceMappingURL=index.js.map
