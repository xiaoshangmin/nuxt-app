import { createVNode, computed, h, toRef, capitalize } from 'vue';
import { g as vu, f as nu, aa as Nu, a9 as rd, m as Cu, C as yc, aD as cd, an as yd, ao as Cd, bf as np, A as cp, E as pd, ah as Vc, a7 as ad, T as ou, be as zu, J as mc, L as dd, M as up, N as tp, ax as bd, ay as hd } from './server.mjs';

const N = nu({ fluid: { type: Boolean, default: false }, ...ou(), ...ad(), ...Vc() }, "VContainer"), O = vu()({ name: "VContainer", props: N(), setup(t2, l2) {
  let { slots: s2 } = l2;
  const { rtlClasses: a2 } = Nu(), { dimensionStyles: n2 } = rd(t2);
  return Cu(() => createVNode(t2.tag, { class: ["v-container", { "v-container--fluid": t2.fluid }, a2.value, t2.class], style: [n2.value, t2.style] }, s2)), {};
} }), B = zu.reduce((e2, t2) => (e2[t2] = { type: [Boolean, String, Number], default: false }, e2), {}), L = zu.reduce((e2, t2) => (e2["offset" + capitalize(t2)] = { type: [String, Number], default: null }, e2), {}), E = zu.reduce((e2, t2) => (e2["order" + capitalize(t2)] = { type: [String, Number], default: null }, e2), {}), x = { col: Object.keys(B), offset: Object.keys(L), order: Object.keys(E) };
function G(e2, t2, l2) {
  let s2 = e2;
  if (null != l2 && false !== l2) {
    if (t2) {
      s2 += `-${t2.replace(e2, "")}`;
    }
    return "col" === e2 && (s2 = "v-" + s2), "col" !== e2 || "" !== l2 && true !== l2 ? (s2 += `-${l2}`, s2.toLowerCase()) : s2.toLowerCase();
  }
}
const R = ["auto", "start", "end", "center", "baseline", "stretch"], A = nu({ cols: { type: [Boolean, String, Number], default: false }, ...B, offset: { type: [String, Number], default: null }, ...L, order: { type: [String, Number], default: null }, ...E, alignSelf: { type: String, default: null, validator: (e2) => R.includes(e2) }, ...ou(), ...Vc() }, "VCol"), D = vu()({ name: "VCol", props: A(), setup(e2, s2) {
  let { slots: a2 } = s2;
  const n2 = computed(() => {
    const t2 = [];
    let l2;
    for (l2 in x) x[l2].forEach((s4) => {
      const a3 = e2[s4], n3 = G(l2, s4, a3);
      n3 && t2.push(n3);
    });
    const s3 = t2.some((e3) => e3.startsWith("v-col-"));
    return t2.push({ "v-col": !s3 || !e2.cols, [`v-col-${e2.cols}`]: e2.cols, [`offset-${e2.offset}`]: e2.offset, [`order-${e2.order}`]: e2.order, [`align-self-${e2.alignSelf}`]: e2.alignSelf }), t2;
  });
  return () => {
    var t2;
    return h(e2.tag, { class: [n2.value, e2.class], style: e2.style }, null == (t2 = a2.default) ? void 0 : t2.call(a2));
  };
} }), J = ["start", "end", "center"], M = ["space-between", "space-around", "space-evenly"];
function T(e2, t2) {
  return zu.reduce((l2, a2) => (l2[e2 + capitalize(a2)] = t2(), l2), {});
}
const W = [...J, "baseline", "stretch"], q = (e2) => W.includes(e2), z = T("align", () => ({ type: String, default: null, validator: q })), F = [...J, ...M], H = (e2) => F.includes(e2), I = T("justify", () => ({ type: String, default: null, validator: H })), K = [...J, ...M, "stretch"], P = (e2) => K.includes(e2), Q = T("alignContent", () => ({ type: String, default: null, validator: P })), U = { align: Object.keys(z), justify: Object.keys(I), alignContent: Object.keys(Q) }, X = { align: "align", justify: "justify", alignContent: "align-content" };
function Y(e2, t2, l2) {
  let s2 = X[e2];
  if (null != l2) {
    if (t2) {
      s2 += `-${t2.replace(e2, "")}`;
    }
    return s2 += `-${l2}`, s2.toLowerCase();
  }
}
const Z = nu({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: q }, ...z, justify: { type: String, default: null, validator: H }, ...I, alignContent: { type: String, default: null, validator: P }, ...Q, ...ou(), ...Vc() }, "VRow"), _ = vu()({ name: "VRow", props: Z(), setup(e2, s2) {
  let { slots: a2 } = s2;
  const n2 = computed(() => {
    const t2 = [];
    let l2;
    for (l2 in U) U[l2].forEach((s3) => {
      const a3 = e2[s3], n3 = Y(l2, s3, a3);
      n3 && t2.push(n3);
    });
    return t2.push({ "v-row--no-gutters": e2.noGutters, "v-row--dense": e2.dense, [`align-${e2.align}`]: e2.align, [`justify-${e2.justify}`]: e2.justify, [`align-content-${e2.alignContent}`]: e2.alignContent }), t2;
  });
  return () => {
    var t2;
    return h(e2.tag, { class: ["v-row", n2.value, e2.class], style: e2.style }, null == (t2 = a2.default) ? void 0 : t2.call(a2));
  };
} }), ee = nu({ color: String, ...hd(), ...ou(), ...ad(), ...bd(), ...tp(), ...up(), ...dd(), ...Vc(), ...mc() }, "VSheet"), te = vu()({ name: "VSheet", props: ee(), setup(t2, l2) {
  let { slots: s2 } = l2;
  const { themeClasses: n2 } = yc(t2), { backgroundColorClasses: o2, backgroundColorStyles: r2 } = cd(toRef(t2, "color")), { borderClasses: c2 } = yd(t2), { dimensionStyles: f2 } = rd(t2), { elevationClasses: d2 } = Cd(t2), { locationStyles: g2 } = np(t2), { positionClasses: h2 } = cp(t2), { roundedClasses: j2 } = pd(t2);
  return Cu(() => createVNode(t2.tag, { class: ["v-sheet", n2.value, o2.value, c2.value, d2.value, h2.value, j2.value, t2.class], style: [r2.value, f2.value, g2.value, t2.style] }, s2)), {};
} });

export { D, O, _, te as t };
