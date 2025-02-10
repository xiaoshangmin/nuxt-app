import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, isRef, withDirectives, vShow, createCommentVNode, createBlock, openBlock, shallowRef, computed, toRef, watchEffect, reactive, watch, Fragment, renderList, inject, provide, resolveDirective, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { b6 as Mc, ab as tc, V as Lp, s as bv, g as vu, v as Wp, f as nu, k as Eu, m as Cu, t as Sf, ad as Ec, G as hi, bd as Sc, $ as vd, x as Gp, z as $d, b7 as md, X as qd, bb as Bf, b8 as Yd, ba as nv, a0 as fd, N as tp, bc as _c, o as Ti, b1 as Dp, W as Lu, aG as Ii, S as od, y as ap, aC as lp, l as su, q as Vi, a_ as Xc, aH as ip, aN as _i, a8 as Dd, aD as cd, B as ff, al as du, _ as ud, I as _f, C as yc, aa as Nu, ac as Ud, aq as Vd, b3 as _d, b4 as pf, a6 as uc, b9 as gd, b0 as yi, ah as Vc, a5 as Od, aF as Es, aI as mu, J as mc, T as ou, b2 as Di, b5 as df, aw as Md } from './server.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { i as il$1, E as Ee, O as Oe, G as Ge, H as He, T as Te } from './VFileInput-CfGseUP1.mjs';
import { I } from './VTextField-ByCJoDrK.mjs';
import { D as D$1, q } from './VSelectionControl-CQDuIzNX.mjs';
import { K } from './VSlider-BqL5O7z_.mjs';
import { E, Y } from './VSnackbar-BITpVUD2.mjs';
import { codeToHtml } from 'shiki';
import Ke from 'axios';
import Ze from 'html2canvas';
import { i } from './index-BSDl_Q2m.mjs';
import { O, _, D, t as te } from './VSheet-CnplqxSw.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const rl = "" + buildAssetsURL("temp-1.NYvxd2TQ.png"), dl = "" + buildAssetsURL("temp-2.D4PRaVJM.png"), nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgCAMAAAAjXV6yAAABv1BMVEVHcEyPx8ORx8OTycWRx8ORycORx8NHcEz///////+Px8ORycWRx8WRycWPx8ORx8ORx8WRx8ORycWRx8WJxcWRx8WRx8WVy8eRx8WRycOfz8+Rx8WRycOPx8eRycWRycWRycWRx8WXy8n///+Px8ePx8OTz8+Px8OVy8ub09OTyceVycWn2dmPx8WXy8eVyceTycWv19eXy8eTycmTycW53d2Rx8ORycORx8WRx8ORx8WZzc2TycmRx8WTycWRycWVy8uNzc2fz8+Px8OTycWRx8Odz8+TycWX2ceRx8Pb+eet29Gv29Gj38+t49GZ28nL8+HV9eWl1c3P8eG34der2c+TycXP8ePX9eWZzceX2cm95dnF693X9+WXy8fB59un18/R8+PZ9+ef0cux3dOZzcmr2dG749m549ep18+j082n1c+f3cuVy8fX9+fH69+Vy8Wx5dORycXL8eG139XH692z39Wbzcmh082749eXzcep19Gh08uX28md3cud28un4c/T9eO159Wf3c2p2c+x3dWp4c+159fH79+56dnD7d3R8ePN7+HB7dup2dG549mj383N8eGz5dWj1c3V9+Vm7XkVAAAASHRSTlMAya9s72rfAAYCaF7T1Zn5y79O3xqPo2LPryCdXhqxz0pOUgQoPhRYKhZQchpIRF5cEk4ccBZublrBpQ4qm5GRHBQQQEKbLqdvVv/dAAAIiElEQVR4AezV7UtbSRvH8RPzwH1jVRTaqlAoFpbdbWn3qexSVrrsQzlBmMNJomxIjDbmhUnDoj2LEAnoln3R0hTc/sVrk7pJ1Hpy5lwz18zx930/J3N9yMw4/5uoxw/TT5dSucxc3vrmMrnU1M3sr1/fu/f/CZoA6MGj1RnuqVQ089tXX8QHWr4/zz2Iyua/+ykW0MoS9wTqm/pSGiidyJN1sZmsFFA6x71xfeWykYFWFrk3rbfFhUhAy0+4N6y/W99ODnQ7w71bjjLTkwKtcm+Vq9mJgJ6luPfJV+rzcKBvruXxOitzNwzoNvcWuZu+GijNvT/+slcBwSd/XsjB+brQtDPa6P3MvTNTuns50LNr/X6NlvnxUqAU977MKXUZ0Cr3rkxq9iIQLuixps8DLeMCGitz5xzQE+4dmdatcaAV7v2Y18IY0CL3dsxrcRQozb0bE8uOAOW4N2NiuSEQ/kCXlv0PaIZ7K2Z24wwIT9gnWvgItMS9EVObGgAtc+/D3O70ge5zb8Pcvu8DzZN9r9wtNNeYaxa6ZbKB5j8APaD40uF2qVqsG1OxWmrWKOb67BToUeyvFDo9bpHL6nUKsUf74RRoNd4nWhWfW+LT+ZVWvOlmT4FmYqx/2TDyvzNar7ERY8AbjvNYfvVeyeA/zzC/tCc/48/OQ+m1B1bw9IkOpIf8xUlLrmwa9GiFV2xKjpl1nkqtq21xjxy1Lbln/6azJPX3seZ0DfP/lpl0yklJrNrlHlauXYlRU04u8ppalXtS2arRn7Ock4m6ZMeq23m84k7UaTPOXMQVLQuvn2F+K+K4c05Un03uGeP1R1Qh53r5RBeKBrRj9fka5O+oA6pZfD8PK9aUAVn7vo9XVQW0yz0ZVbtqgJrcc9G1rgKoloAL+qy/agqAtrinomyLHihBB+xDTXKgRLzww4rUQAfcE1F3QAu0l6AbetDvG6RAJe556PuTEuhl4v5A9bq/QQjU4J5GRQ1CoB73MCrq0QG1uGdRU4EMqMI9ipoqZEDhV3QgPFcuTwRcQD4VUCHcx40Tm1CBCKgT+ksiFpDgAuoQAYW/YV4sII8LqEcDdBj+S7F8XJcLqH5IArSdXKAmCVApuUAlEqBqcoGqJEDF5AK9JQGqJxeoTgFUTjJQmQCom2SgLgFQIclALwiAmkkGWicAWksy0BqAAAQgAAEIQAACEICUAnmxfLzkA4lYQCL5QEEsoCD5QPVAyJ4yTzD66AOyNQABCEAAApDBWfDMk+eJwDyggFtlvMA4IMFNMp4wDsiY8zXIMw6IW+R8AAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAciQAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAAByGIgj1tkPM84IMFNMp4wDijgJhkvMA6oHghjTpknJvfRB2RrAAIQgAAEIIMDEIAAlAygQHiuntqvNi0ECjTp9Du2EEjoBHLf2Qek63wNem8f0BGArm5fK9Br+4CetzX67NP56Hvm/TfH7dOL6ERtrnt0IgivaI1AtgYgAAEIQAAyOACZAhQIz9VT+9WmhUCBJp1+xxYCCZ1A7jv7gHSdr0Hv7QM6AtDV7WsFem0f0PO2Rp99Oh99z7z/5rh9ehGdqM11j04E4RWtEcjWAAQgAAEIQAYHIAABCEAAMjgAAQhAAAKQwQEIQAACEIAMDkAAAhCAAGRwAAIQgM4KhOdGyhOBFqAmt8xHH1eiUKF1AqACN80gIQMkwr76ggCoy00zyJMB8sK+2iUAKnPTDJLxcd2wr5YJgPLcNCqB8hRARW4bdUBvSYCq3DbqgKokQCVum35KLukSCVCT26afkmd+mwSoxm3TL5ABCkI+WiYByve4cQZCIuIp80SYTy9PA9ThtlFVhwiowD2IqgpEQHmfexI1+XkqoAr3KGqqkAG1uEdRU4sMyJB3jLh/8nRADe5hVNQgBNqw9Jr+t73ye2kbCsPwl5AEEmtKpS296MCizm0gbGy4gbuY+3Hxsau0VSaWdlAvWoURZBQc3gy805v9x+ui09Z1tufkpO9p2ofcfuF9H875zkNfcKpQENfRddRTZ5WCwtQdoSBUKoh76EKq6bFaQVxDN1JLjVUL6qIrqaWrXBC30J1U0mL1gpop2tNBMwFBfIGupY4LTkIQd9C9VNHhZARxA91MDQ1OSlCYire+FiYmiNspWNRBm5MTxMff0P1ic8xJCpp9Q1XBwpQVNTTTtywQPD+cJUtwgtszvKlrbdG2FjmiI9yc2de+EQqXdcgQnmHuoJvK0ZGoapApMcV7P9FlxQkuZJqaVJAZ42YL3VeUVlOqaIFsqTnm7kzt6lpXsqZHHyUnmXtf0LUnJehJl9ygF9KzvP89QFefSE89lO+4Q2vL8tO8f3SFrj+OX0enMQpmiNY+cSyqhxofo+DwOF47n8h9znGpnml5jq7OqrGrbfYFPY39lz4/uvXGJdrIHZeN+tcDFb12+4LcnIo/RRycn+x9BrN3cq5ETUSO/gh6pex/qWM7EvQOHUNf8pEg10Tn0BWTrgU9QwfRlcqNIHcZnURPMvRXkI2OoiferSDXQWfREYfuBC2O0Ai8AUFuCZ1GP0o0KGgFHUc/KkOC3CI6j24UaVjQSwudSC+s/D1B7hI6kl6U6b4g10dn0gmf/hXkGuhU+mDQKEFPFmvoBmt9pCB3FR1MF7ZotKDFor6mPOhnWJKNzqYDHo1iYehhP7eS5v6Wlf/v51rS6ly/ZdbWGD993hrolDiM9fF++vjonCh8mpClubxmVnlSP0SPiui006eYJxFWSujA06VUIVFsBx16ejgeyWBn0MGnQ0ZOT3TRTHT45DEr0nqidf06h26QJLntfCw9EY/f+Km8axl/cze+nRvef7ALpuFYWXSr+GQtxzAL3sbOZM1/A0ALANTV/Q17AAAAAElFTkSuQmCC", il = "" + buildAssetsURL("temp-4.DFwHO0q9.png"), ul = nu({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...He(), ...q() }, "VSwitch"), cl = vu()({ name: "VSwitch", inheritAttrs: false, props: ul(), emits: { "update:focused": (e2) => true, "update:modelValue": (e2) => true, "update:indeterminate": (e2) => true }, setup(r2, d2) {
  let { attrs: n2, slots: i2 } = d2;
  const u2 = Eu(r2, "indeterminate"), c2 = Eu(r2, "modelValue"), { loaderClasses: s2 } = lp(r2), { isFocused: g2, focus: m2, blur: p2 } = Ee(r2), v2 = ref(), b2 = yi, f2 = computed(() => "string" == typeof r2.loading && "" !== r2.loading ? r2.loading : r2.color), y2 = su(), x2 = computed(() => r2.id || `switch-${y2}`);
  function h2() {
    u2.value && (u2.value = false);
  }
  function V2(e2) {
    var l2, t2;
    e2.stopPropagation(), e2.preventDefault(), null == (t2 = null == (l2 = v2.value) ? void 0 : l2.input) || t2.click();
  }
  return Cu(() => {
    const [e2, l2] = Vi(n2), d3 = Oe.filterProps(r2), y3 = D$1.filterProps(r2);
    return createVNode(Oe, mergeProps({ class: ["v-switch", { "v-switch--flat": r2.flat }, { "v-switch--inset": r2.inset }, { "v-switch--indeterminate": u2.value }, s2.value, r2.class] }, e2, d3, { modelValue: c2.value, "onUpdate:modelValue": (e3) => c2.value = e3, id: x2.value, focused: g2.value, style: r2.style }), { ...i2, default: (e3) => {
      let { id: d4, messagesId: n3, isDisabled: s3, isReadonly: g3, isValid: x3 } = e3;
      const w2 = { model: c2, isValid: x3 };
      return createVNode(D$1, mergeProps({ ref: v2 }, y3, { modelValue: c2.value, "onUpdate:modelValue": [(e4) => c2.value = e4, h2], id: d4.value, "aria-describedby": n3.value, type: "checkbox", "aria-checked": u2.value ? "mixed" : void 0, disabled: s3.value, readonly: g3.value, onFocus: m2, onBlur: p2 }, l2), { ...i2, default: (e4) => {
        let { backgroundColorClasses: l3, backgroundColorStyles: a2 } = e4;
        return createVNode("div", { class: ["v-switch__track", l3.value], style: a2.value, onClick: V2 }, [i2["track-true"] && createVNode("div", { key: "prepend", class: "v-switch__track-true" }, [i2["track-true"](w2)]), i2["track-false"] && createVNode("div", { key: "append", class: "v-switch__track-false" }, [i2["track-false"](w2)])]);
      }, input: (e4) => {
        let { inputNode: l3, icon: a2, backgroundColorClasses: d5, backgroundColorStyles: n4 } = e4;
        return createVNode(Fragment, null, [l3, createVNode("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": a2 || r2.loading }, r2.inset || b2 ? void 0 : d5.value], style: r2.inset ? void 0 : n4.value }, [i2.thumb ? createVNode(od, { defaults: { VIcon: { icon: a2, size: "x-small" } } }, { default: () => [i2.thumb({ ...w2, icon: a2 })] }) : createVNode(Xc, null, { default: () => [r2.loading ? createVNode(ip, { name: "v-switch", active: true, color: false === x3.value ? void 0 : f2.value }, { default: (e5) => i2.loader ? i2.loader(e5) : createVNode($d, { active: e5.isActive, color: e5.color, indeterminate: true, size: "16", width: "2" }, null) }) : a2 && createVNode(qd, { key: String(a2), icon: a2, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), sl = Symbol.for("vuetify:v-tabs"), gl = nu({ fixed: Boolean, sliderColor: String, hideSlider: Boolean, direction: { type: String, default: "horizontal" }, ...Ti(Dp({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), ml = vu()({ name: "VTab", props: gl(), setup(r2, d2) {
  let { slots: n2, attrs: i2 } = d2;
  const { textColorClasses: u2, textColorStyles: c2 } = ud(r2, "sliderColor"), s2 = ref(), g2 = ref(), m2 = computed(() => "horizontal" === r2.direction), p2 = computed(() => {
    var _a;
    var e2, l2;
    return (_a = null == (l2 = null == (e2 = s2.value) ? void 0 : e2.group) ? void 0 : l2.isSelected.value) != null ? _a : false;
  });
  function v2(e2) {
    var l2, t2;
    let { value: a2 } = e2;
    if (a2) {
      const e3 = null == (t2 = null == (l2 = s2.value) ? void 0 : l2.$el.parentElement) ? void 0 : t2.querySelector(".v-tab--selected .v-tab__slider"), a3 = g2.value;
      if (!e3 || !a3) return;
      const o2 = getComputedStyle(e3).color, r3 = e3.getBoundingClientRect(), d3 = a3.getBoundingClientRect(), n3 = m2.value ? "x" : "y", i3 = m2.value ? "X" : "Y", u3 = m2.value ? "right" : "bottom", c3 = m2.value ? "width" : "height", p3 = r3[n3] > d3[n3] ? r3[u3] - d3[u3] : r3[n3] - d3[n3], v3 = Math.sign(p3) > 0 ? m2.value ? "right" : "bottom" : Math.sign(p3) < 0 ? m2.value ? "left" : "top" : "center", b2 = (Math.abs(p3) + (Math.sign(p3) < 0 ? r3[c3] : d3[c3])) / Math.max(r3[c3], d3[c3]) || 0, f2 = r3[c3] / d3[c3] || 0, y2 = 1.5;
      Es(a3, { backgroundColor: [o2, "currentcolor"], transform: [`translate${i3}(${p3}px) scale${i3}(${f2})`, `translate${i3}(${p3 / y2}px) scale${i3}(${(b2 - 1) / y2 + 1})`, "none"], transformOrigin: Array(3).fill(v3) }, { duration: 225, easing: mu });
    }
  }
  return Cu(() => {
    const e2 = Lp.filterProps(r2);
    return createVNode(Lp, mergeProps({ symbol: sl, ref: s2, class: ["v-tab", r2.class], style: r2.style, tabindex: p2.value ? 0 : -1, role: "tab", "aria-selected": String(p2.value), active: false }, e2, i2, { block: r2.fixed, maxWidth: r2.fixed ? 300 : void 0, "onGroup:selected": v2 }), { ...n2, default: () => {
      var _a;
      var e3;
      return createVNode(Fragment, null, [(_a = null == (e3 = n2.default) ? void 0 : e3.call(n2)) != null ? _a : r2.text, !r2.hideSlider && createVNode("div", { ref: g2, class: ["v-tab__slider", u2.value], style: c2.value }, null)]);
    } });
  }), _f({}, s2);
} });
function pl(e2, l2) {
  var t2;
  const a2 = e2.changedTouches[0];
  l2.touchendX = a2.clientX, l2.touchendY = a2.clientY, null == (t2 = l2.end) || t2.call(l2, { originalEvent: e2, ...l2 }), ((e3) => {
    const { touchstartX: l3, touchendX: t3, touchstartY: a3, touchendY: o2 } = e3;
    e3.offsetX = t3 - l3, e3.offsetY = o2 - a3, Math.abs(e3.offsetY) < 0.5 * Math.abs(e3.offsetX) && (e3.left && t3 < l3 - 16 && e3.left(e3), e3.right && t3 > l3 + 16 && e3.right(e3)), Math.abs(e3.offsetX) < 0.5 * Math.abs(e3.offsetY) && (e3.up && o2 < a3 - 16 && e3.up(e3), e3.down && o2 > a3 + 16 && e3.down(e3));
  })(l2);
}
const vl = { mounted: function(e2, l2) {
  var _a, _b;
  var t2;
  const a2 = l2.value, o2 = (null == a2 ? void 0 : a2.parent) ? e2.parentElement : e2, r2 = (_a = null == a2 ? void 0 : a2.options) != null ? _a : { passive: true }, d2 = null == (t2 = l2.instance) ? void 0 : t2.$.uid;
  if (!o2 || !d2) return;
  const n2 = function() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const l3 = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e3.left, right: e3.right, up: e3.up, down: e3.down, start: e3.start, move: e3.move, end: e3.end };
    return { touchstart: (e4) => function(e5, l4) {
      var t3;
      const a3 = e5.changedTouches[0];
      l4.touchstartX = a3.clientX, l4.touchstartY = a3.clientY, null == (t3 = l4.start) || t3.call(l4, { originalEvent: e5, ...l4 });
    }(e4, l3), touchend: (e4) => pl(e4, l3), touchmove: (e4) => function(e5, l4) {
      var t3;
      const a3 = e5.changedTouches[0];
      l4.touchmoveX = a3.clientX, l4.touchmoveY = a3.clientY, null == (t3 = l4.move) || t3.call(l4, { originalEvent: e5, ...l4 });
    }(e4, l3) };
  }(l2.value);
  o2._touchHandlers = (_b = o2._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null), o2._touchHandlers[d2] = n2, Di(n2).forEach((e3) => {
    o2.addEventListener(e3, n2[e3], r2);
  });
}, unmounted: function(e2, l2) {
  var t2, a2;
  const o2 = (null == (t2 = l2.value) ? void 0 : t2.parent) ? e2.parentElement : e2, r2 = null == (a2 = l2.instance) ? void 0 : a2.$.uid;
  if (!(null == o2 ? void 0 : o2._touchHandlers) || !r2) return;
  const d2 = o2._touchHandlers[r2];
  Di(d2).forEach((e3) => {
    o2.removeEventListener(e3, d2[e3]);
  }), delete o2._touchHandlers[r2];
} }, bl = Symbol.for("vuetify:v-window"), fl = Symbol.for("vuetify:v-window-group"), yl = nu({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e2) => "boolean" == typeof e2 || "hover" === e2 }, touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, ...ou(), ...Vc(), ...mc() }, "VWindow"), xl = vu()({ name: "VWindow", directives: { Touch: vl }, props: yl(), emits: { "update:modelValue": (e2) => true }, setup(a2, o2) {
  let { slots: c2 } = o2;
  const { themeClasses: s2 } = yc(a2), { isRtl: g2 } = Nu(), { t: m2 } = Lu(), p2 = Ud(a2, fl), v2 = ref(), b2 = computed(() => g2.value ? !a2.reverse : a2.reverse), f2 = shallowRef(false), y2 = computed(() => `v-window-${"vertical" === a2.direction ? "y" : "x"}${(b2.value ? !f2.value : f2.value) ? "-reverse" : ""}-transition`), x2 = shallowRef(0), h2 = ref(void 0), V2 = computed(() => p2.items.value.findIndex((e2) => p2.selected.value.includes(e2.id)));
  watch(V2, (e2, l2) => {
    const t2 = p2.items.value.length, a3 = t2 - 1;
    f2.value = t2 <= 2 ? e2 < l2 : e2 === a3 && 0 === l2 || (0 !== e2 || l2 !== a3) && e2 < l2;
  }), provide(bl, { transition: y2, isReversed: f2, transitionCount: x2, transitionHeight: h2, rootRef: v2 });
  const w2 = computed(() => a2.continuous || 0 !== V2.value), k2 = computed(() => a2.continuous || V2.value !== p2.items.value.length - 1);
  function $2() {
    w2.value && p2.prev();
  }
  function _2() {
    k2.value && p2.next();
  }
  const C2 = computed(() => {
    const e2 = [], l2 = { icon: g2.value ? a2.nextIcon : a2.prevIcon, class: "v-window__" + (b2.value ? "right" : "left"), onClick: p2.prev, "aria-label": m2("$vuetify.carousel.prev") };
    e2.push(w2.value ? c2.prev ? c2.prev({ props: l2 }) : createVNode(Lp, l2, null) : createVNode("div", null, null));
    const o3 = { icon: g2.value ? a2.prevIcon : a2.nextIcon, class: "v-window__" + (b2.value ? "left" : "right"), onClick: p2.next, "aria-label": m2("$vuetify.carousel.next") };
    return e2.push(k2.value ? c2.next ? c2.next({ props: o3 }) : createVNode(Lp, o3, null) : createVNode("div", null, null)), e2;
  }), A2 = computed(() => {
    if (false === a2.touch) return a2.touch;
    return { ...{ left: () => {
      b2.value ? $2() : _2();
    }, right: () => {
      b2.value ? _2() : $2();
    }, start: (e2) => {
      let { originalEvent: l2 } = e2;
      l2.stopPropagation();
    } }, ...true === a2.touch ? {} : a2.touch };
  });
  return Cu(() => withDirectives(createVNode(a2.tag, { ref: v2, class: ["v-window", { "v-window--show-arrows-on-hover": "hover" === a2.showArrows }, s2.value, a2.class], style: a2.style }, { default: () => {
    var e2, l2;
    return [createVNode("div", { class: "v-window__container", style: { height: h2.value } }, [null == (e2 = c2.default) ? void 0 : e2.call(c2, { group: p2 }), false !== a2.showArrows && createVNode("div", { class: "v-window__controls" }, [C2.value])]), null == (l2 = c2.additional) ? void 0 : l2.call(c2, { group: p2 })];
  } }), [[resolveDirective("touch"), A2.value]])), { group: p2 };
} }), hl = nu({ ...Ti(yl(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Vl = vu()({ name: "VTabsWindow", props: hl(), emits: { "update:modelValue": (e2) => true }, setup(e2, o2) {
  let { slots: r2 } = o2;
  const d2 = inject(sl, null), n2 = Eu(e2, "modelValue"), i2 = computed({ get() {
    var e3;
    return null == n2.value && d2 ? null == (e3 = d2.items.value.find((e4) => d2.selected.value.includes(e4.id))) ? void 0 : e3.value : n2.value;
  }, set(e3) {
    n2.value = e3;
  } });
  return Cu(() => {
    const l2 = xl.filterProps(e2);
    return createVNode(xl, mergeProps({ _as: "VTabsWindow" }, l2, { modelValue: i2.value, "onUpdate:modelValue": (e3) => i2.value = e3, class: ["v-tabs-window", e2.class], style: e2.style, mandatory: false, touch: false }), r2);
  }), {};
} }), wl = nu({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...ou(), ...Md(), ...df() }, "VWindowItem"), kl = vu()({ name: "VWindowItem", directives: { Touch: vl }, props: wl(), emits: { "group:selected": (e2) => true }, setup(e2, a2) {
  let { slots: o2 } = a2;
  const d2 = inject(bl), n2 = Vd(e2, fl), { isBooted: u2 } = _d();
  if (!d2 || !n2) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const m2 = shallowRef(false), p2 = computed(() => u2.value && (d2.isReversed.value ? false !== e2.reverseTransition : false !== e2.transition));
  function v2() {
    m2.value && d2 && (m2.value = false, d2.transitionCount.value > 0 && (d2.transitionCount.value -= 1, 0 === d2.transitionCount.value && (d2.transitionHeight.value = void 0)));
  }
  function b2() {
    var e3;
    !m2.value && d2 && (m2.value = true, 0 === d2.transitionCount.value && (d2.transitionHeight.value = Ii(null == (e3 = d2.rootRef.value) ? void 0 : e3.clientHeight)), d2.transitionCount.value += 1);
  }
  function f2() {
    v2();
  }
  function y2(e3) {
    m2.value && nextTick(() => {
      p2.value && m2.value && d2 && (d2.transitionHeight.value = Ii(e3.clientHeight));
    });
  }
  const x2 = computed(() => {
    const l2 = d2.isReversed.value ? e2.reverseTransition : e2.transition;
    return !!p2.value && { name: "string" != typeof l2 ? d2.transition.value : l2, onBeforeEnter: b2, onAfterEnter: v2, onEnterCancelled: f2, onBeforeLeave: b2, onAfterLeave: v2, onLeaveCancelled: f2, onEnter: y2 };
  }), { hasContent: h2 } = pf(e2, n2.isSelected);
  return Cu(() => createVNode(vd, { transition: x2.value, disabled: !u2.value }, { default: () => {
    var l2;
    return [withDirectives(createVNode("div", { class: ["v-window-item", n2.selectedClass.value, e2.class], style: e2.style }, [h2.value && (null == (l2 = o2.default) ? void 0 : l2.call(o2))]), [[vShow, n2.isSelected.value]])];
  } })), { groupItem: n2 };
} }), $l = nu({ ...wl() }, "VTabsWindowItem"), _l = vu()({ name: "VTabsWindowItem", props: $l(), setup(e2, l2) {
  let { slots: o2 } = l2;
  return Cu(() => {
    const l3 = kl.filterProps(e2);
    return createVNode(kl, mergeProps({ _as: "VTabsWindowItem" }, l3, { class: ["v-tabs-window-item", e2.class], style: e2.style }), o2);
  }), {};
} });
const Cl = nu({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, sliderColor: String, ...Te({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...Od(), ...Vc() }, "VTabs"), Al = vu()({ name: "VTabs", props: Cl(), emits: { "update:modelValue": (e2) => true }, setup(e2, r2) {
  let { attrs: d2, slots: n2 } = r2;
  const i2 = Eu(e2, "modelValue"), u2 = computed(() => function(e3) {
    return e3 ? e3.map((e4) => _i(e4) ? e4 : { text: e4, value: e4 }) : [];
  }(e2.items)), { densityClasses: c2 } = Dd(e2), { backgroundColorClasses: s2, backgroundColorStyles: g2 } = cd(toRef(e2, "bgColor")), { scopeId: p2 } = ff();
  return du({ VTab: { color: toRef(e2, "color"), direction: toRef(e2, "direction"), stacked: toRef(e2, "stacked"), fixed: toRef(e2, "fixedTabs"), sliderColor: toRef(e2, "sliderColor"), hideSlider: toRef(e2, "hideSlider") } }), Cu(() => {
    const l2 = Ge.filterProps(e2), r3 = !!(n2.window || e2.items.length > 0);
    return createVNode(Fragment, null, [createVNode(Ge, mergeProps(l2, { modelValue: i2.value, "onUpdate:modelValue": (e3) => i2.value = e3, class: ["v-tabs", `v-tabs--${e2.direction}`, `v-tabs--align-tabs-${e2.alignTabs}`, { "v-tabs--fixed-tabs": e2.fixedTabs, "v-tabs--grow": e2.grow, "v-tabs--stacked": e2.stacked }, c2.value, s2.value, e2.class], style: [{ "--v-tabs-height": Ii(e2.height) }, g2.value, e2.style], role: "tablist", symbol: sl }, p2, d2), { default: () => {
      var _a;
      var e3;
      return [(_a = null == (e3 = n2.default) ? void 0 : e3.call(n2)) != null ? _a : u2.value.map((e4) => {
        var _a2;
        var l3;
        return (_a2 = null == (l3 = n2.tab) ? void 0 : l3.call(n2, { item: e4 })) != null ? _a2 : createVNode(ml, mergeProps(e4, { key: e4.text, value: e4.value }), { default: n2[`tab.${e4.value}`] ? () => {
          var l4;
          return null == (l4 = n2[`tab.${e4.value}`]) ? void 0 : l4.call(n2, { item: e4 });
        } : void 0 });
      })];
    } }), r3 && createVNode(Vl, mergeProps({ modelValue: i2.value, "onUpdate:modelValue": (e3) => i2.value = e3, key: "tabs-window" }, p2), { default: () => {
      var e3;
      return [u2.value.map((e4) => {
        var _a;
        var l3;
        return (_a = null == (l3 = n2.item) ? void 0 : l3.call(n2, { item: e4 })) != null ? _a : createVNode(_l, { value: e4.value }, { default: () => {
          var l4;
          return null == (l4 = n2[`item.${e4.value}`]) ? void 0 : l4.call(n2, { item: e4 });
        } });
      }), null == (e3 = n2.window) ? void 0 : e3.call(n2)];
    } })]);
  }), {};
} }), Bl = { __name: "PcOperation", __ssrInlineRender: true, props: {}, emits: ["changeColor", "decrement", "increment", "onUrlChange", "changePicScale"], setup(l2, { emit: a2 }) {
  const r2 = a2, { userConfig: n2, updateShareUserConfig: u2 } = Mc(), c2 = ref(null), g2 = ref(""), m2 = ref("temp-1"), k2 = ref("1.1"), $2 = ref("440"), _2 = ref("20"), S2 = ref(0), O2 = reactive({ title: true, content: true, qrcode: true, author: true, padding: false }), D2 = ref([{ bgcolor: "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));", colorA: "rgb(5, 174, 157)", colorB: "rgb(17, 26, 35)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(0, 0, 0), rgb(0, 0, 0));", colorA: "rgb(0, 0, 0)", colorB: "rgb(0, 0, 0)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(256, 256, 256), rgb(256, 256, 256));", colorA: "rgb(256, 256, 256)", colorB: "rgb(256, 256, 256)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(50, 50, 50), rgb(30, 30, 30));", colorA: " rgb(50, 50, 50)", colorB: "rgb(30, 30, 30)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(18, 18, 18), rgb(18, 18, 18));", colorA: "rgb(18, 18, 18)", colorB: "rgb(18, 18, 18)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(136, 22, 22), rgb(241, 57, 63));", colorA: "rgb(136, 22, 22)", colorB: "rgb(241, 57, 63)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24));", colorA: "rgb(177, 177, 177)", colorB: "rgb(24, 24, 24)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 255, 255), rgb(128, 222, 234));", colorA: "rgb(255, 255, 255)", colorB: "rgb(128, 222, 234)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(238, 213, 182), rgb(175, 136, 86));", colorA: "rgb(238, 213, 182)", colorB: "rgb(175, 136, 86)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(80, 104, 83), rgb(33, 50, 35));", colorA: "rgb(80, 104, 83)", colorB: "rgb(33, 50, 35)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24));", colorA: "rgb(51, 51, 51)", colorB: "rgb(24, 24, 24)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));", colorA: "rgb(207, 47, 152)", colorB: "rgb(106, 61, 236)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));", colorA: "rgb(165, 142, 251)", colorB: "rgb(233, 191, 248)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52));", colorA: "rgb(255, 99, 99)", colorB: "rgb(115, 52, 52)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84));", colorA: "rgb(189, 227, 236)", colorB: "rgb(54, 54, 84)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45));", colorA: "rgb(89, 212, 153)", colorB: "rgb(160, 135, 45)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51));", colorA: "rgb(76, 200, 200)", colorB: "rgb(32, 32, 51)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170));", colorA: "rgb(142, 199, 251)", colorB: "rgb(28, 85, 170)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47));", colorA: "rgb(255, 207, 115)", colorB: "rgb(255, 122, 47)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));", colorA: "rgb(94, 106, 137)", colorB: " rgb(15, 19, 40)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));", colorA: "rgb(87, 151, 249)", colorB: " rgb(108, 213, 196)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));", colorA: "rgb(64, 127, 231)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));", colorA: "rgb(77, 3, 222)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));", colorA: "rgb(204, 81, 36)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));", colorA: "rgb(52, 182, 150)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));", colorA: "rgb(244, 205, 82)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));", colorA: "rgb(86, 93, 204)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));", colorA: "rgb(33, 127, 193)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));", colorA: "rgb(53, 99, 250)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));", colorA: "rgb(44, 68, 89)", colorB: " rgb(255, 203, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));", colorA: "rgb(137, 176, 217)", colorB: " rgb(255, 238, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));", colorA: "rgb(14, 87, 238)", colorB: " rgb(230, 255, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));", colorA: "rgb(186, 125, 239)", colorB: " rgb(255, 203, 253)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));", colorA: "rgb(67, 197, 167)", colorB: " rgb(203, 238, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));", colorA: "rgb(240, 111, 105)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));", colorA: "rgb(44, 176, 206)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));", colorA: "rgb(176, 189, 191)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));", colorA: "rgb(149, 18, 190)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));", colorA: "rgb(180, 20, 51)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));", colorA: "rgb(245, 148, 126)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));", colorA: "rgb(255, 242, 201)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));", colorA: "rgb(139, 177, 196)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));", colorA: "rgb(136, 14, 133)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));", colorA: "rgb(69, 165, 215)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", colorA: "rgb(191, 69, 133)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));", colorA: "rgb(182, 195, 141)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));", colorA: "rgb(154, 151, 236)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));", colorA: "rgb(84, 102, 105)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));", colorA: "rgb(247, 174, 171)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));", colorA: "rgb(254, 252, 59)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));", colorA: "rgb(167, 254, 204)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));", colorA: "rgb(241, 255, 207)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));", colorA: "rgb(186, 167, 228)", colorB: " rgb(245, 159, 156)", angle: "45deg" }]);
  function R2(e2) {
    r2("changePicScale", e2);
  }
  function L2(e2) {
    m2.value = e2, u2({ tempId: e2 });
  }
  function T2(e2) {
    1 == O2.padding ? n2.value.styleObject.padding = "0px" : n2.value.styleObject.padding = "20px", u2({ show: O2, styleObject: n2.value.styleObject });
  }
  function q2(e2) {
    "padding" == e2 && (n2.value.styleObject.padding = `${_2.value}px`), "width" == e2 && (n2.value.styleObject.width = `${$2.value}px`, n2.value.styleObject.transition = "500ms"), "fontsize" == e2 && (n2.value.styleObject["--base-font-size"] = `${k2.value}rem`), u2({ show: O2, styleObject: n2.value.styleObject });
  }
  function z2(e2, l3) {
    S2.value = String(l3), r2("changeColor", e2);
  }
  function W2(e2) {
    "padding" == e2 && (n2.value.styleObject.padding = `${_2.value}px`), "width" == e2 && (n2.value.styleObject.width = `${$2.value}px`, n2.value.styleObject.transition = "500ms"), "fontsize" == e2 && (n2.value.styleObject["--base-font-size"] = `${k2.value}rem`), u2({ styleObject: n2.value.styleObject });
  }
  return watch(g2, (e2) => {
    r2("onUrlChange", e2);
  }), (e2, l3, a3, r3) => {
    l3(`<figure${ssrRenderAttrs(r3)} data-v-ccf1b841>`), l3(ssrRenderComponent(Al, { modelValue: unref(c2), "onUpdate:modelValue": (e3) => isRef(c2) ? c2.value = e3 : null, "align-tabs": "center", "center-active": "" }, { default: withCtx((l4, a4, o2, r4) => {
      if (!a4) return [createVNode(ml, { value: "template", class: "text-none" }, { default: withCtx(() => [createTextVNode("\u6A21\u677F")]), _: 1 }), createVNode(ml, { value: "bg", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Bg Color")), 1)]), _: 1 }), createVNode(ml, { value: "setting", class: "text-none" }, { default: withCtx(() => [createTextVNode("\u8BBE\u7F6E")]), _: 1 })];
      a4(ssrRenderComponent(ml, { value: "template", class: "text-none" }, { default: withCtx((e3, l5, t2, a5) => {
        if (!l5) return [createTextVNode("\u6A21\u677F")];
        l5("\u6A21\u677F");
      }), _: 1 }, o2, r4)), a4(ssrRenderComponent(ml, { value: "bg", class: "text-none" }, { default: withCtx((l5, t2, a5, o3) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Bg Color")), 1)];
        t2(`${ssrInterpolate(e2.$t("Bg Color"))}`);
      }), _: 1 }, o2, r4)), a4(ssrRenderComponent(ml, { value: "setting", class: "text-none" }, { default: withCtx((e3, l5, t2, a5) => {
        if (!l5) return [createTextVNode("\u8BBE\u7F6E")];
        l5("\u8BBE\u7F6E");
      }), _: 1 }, o2, r4));
    }), _: 1 }, a3)), l3(ssrRenderComponent(Vl, { modelValue: unref(c2), "onUpdate:modelValue": (e3) => isRef(c2) ? c2.value = e3 : null }, { default: withCtx((l4, a4, r4, d2) => {
      if (!a4) return [createVNode(_l, { value: "template" }, { default: withCtx(() => [createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center template py-4 px-2" }, [createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(n2).tempId }], onClick: (e3) => L2("temp-1") }, [createVNode(md, { src: rl, width: 80, alt: "temp-1" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(n2).tempId }], onClick: (e3) => L2("temp-2") }, [createVNode(md, { src: dl, width: 80, alt: "temp-2" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(n2).tempId }], onClick: (e3) => L2("temp-3") }, [createVNode(md, { src: nl, width: 80, alt: "temp-3" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(n2).tempId }], onClick: (e3) => L2("temp-4") }, [createVNode(md, { src: il, width: 80, alt: "temp-4" })], 10, ["onClick"])])]), _: 1 }), createVNode(_l, { value: "bg" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(D2), (e3, l5) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(l5) == unref(S2) }], onClick: (t2) => z2(e3, l5) }, [createVNode("div", { style: e3.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])])]), _: 1 }), createVNode(_l, { value: "setting" }, { default: withCtx(() => [withDirectives(createVNode("div", { class: "py-2 px-2" }, [createVNode(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(g2), "onUpdate:modelValue": (e3) => isRef(g2) ? g2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])], 512), [[vShow, "temp-3" == unref(n2).tempId]]), createVNode("div", { class: "d-flex flex-wrap align-center justify-start py-2 px-2" }, [withDirectives(createVNode(cl, { modelValue: unref(O2).title, "onUpdate:modelValue": [(e3) => unref(O2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(O2).content, "onUpdate:modelValue": [(e3) => unref(O2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(O2).author, "onUpdate:modelValue": [(e3) => unref(O2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), createVNode(cl, { modelValue: unref(O2).padding, "onUpdate:modelValue": [(e3) => unref(O2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), withDirectives(createVNode(cl, { modelValue: unref(O2).qrcode, "onUpdate:modelValue": [(e3) => unref(O2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-2" != unref(n2).tempId]])]), createVNode("div", { class: "d-flex flex-row align-center justify-start py-3 px-2" }, [createVNode("div", { class: "d-flex flex-row align-center" }, [createVNode("div", { style: { width: "4rem" } }, " \u6BD4\u4F8B "), createVNode("div", { class: "d-flex ga-2 flex-wrap" }, [createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(0) }, { default: withCtx(() => [createTextVNode(" 1:1 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(1) }, { default: withCtx(() => [createTextVNode(" 3:4 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(2) }, { default: withCtx(() => [createTextVNode(" 4:3 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(3) }, { default: withCtx(() => [createTextVNode(" 7:5 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(4) }, { default: withCtx(() => [createTextVNode(" 9:16 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(5) }, { default: withCtx(() => [createTextVNode(" 16:9 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(6) }, { default: withCtx(() => [createTextVNode(" 12:16 ")]), _: 1 }, 8, ["onClick"])])])]), createVNode("div", { class: "d-flex flex-row align-center justify-start px-2" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Padding")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx(() => [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "py-3" }, [createVNode(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])]), createVNode("div", { class: "d-flex flex-row align-center justify-start py-2 px-2" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Width")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx(() => [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex py-3" }, [createVNode(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])]), createVNode("div", { class: "d-flex align-center justify-start py-2 px-2" }, [createVNode("div", { class: "d-flex flex-row align-center" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Font")), 1), createVNode("div", { class: "py-3" }, [createVNode(Yd, { modelValue: unref(k2), "onUpdate:modelValue": (e3) => isRef(k2) ? k2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx(() => [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref(k2), "onUpdate:modelValue": [(e3) => isRef(k2) ? k2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])]), _: 1 })];
      a4(ssrRenderComponent(_l, { value: "template" }, { default: withCtx((e3, l5, a5, o2) => {
        if (!l5) return [createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center template py-4 px-2" }, [createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(n2).tempId }], onClick: (e4) => L2("temp-1") }, [createVNode(md, { src: rl, width: 80, alt: "temp-1" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(n2).tempId }], onClick: (e4) => L2("temp-2") }, [createVNode(md, { src: dl, width: 80, alt: "temp-2" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(n2).tempId }], onClick: (e4) => L2("temp-3") }, [createVNode(md, { src: nl, width: 80, alt: "temp-3" })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(n2).tempId }], onClick: (e4) => L2("temp-4") }, [createVNode(md, { src: il, width: 80, alt: "temp-4" })], 10, ["onClick"])])];
        l5(`<div class="d-flex flex-wrap justify-space-between align-center template py-4 px-2" data-v-ccf1b841${o2}><div class="${ssrRenderClass([{ "temp-item-activate": "temp-1" == unref(n2).tempId }, "temp-item cursor-pointer"])}" data-v-ccf1b841${o2}>`), l5(ssrRenderComponent(md, { src: rl, width: 80, alt: "temp-1" }, null, a5, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-2" == unref(n2).tempId }, "temp-item cursor-pointer"])}" data-v-ccf1b841${o2}>`), l5(ssrRenderComponent(md, { src: dl, width: 80, alt: "temp-2" }, null, a5, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-3" == unref(n2).tempId }, "temp-item cursor-pointer"])}" data-v-ccf1b841${o2}>`), l5(ssrRenderComponent(md, { src: nl, width: 80, alt: "temp-3" }, null, a5, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-4" == unref(n2).tempId }, "temp-item cursor-pointer"])}" data-v-ccf1b841${o2}>`), l5(ssrRenderComponent(md, { src: il, width: 80, alt: "temp-4" }, null, a5, o2)), l5("</div></div>");
      }), _: 1 }, r4, d2)), a4(ssrRenderComponent(_l, { value: "bg" }, { default: withCtx((e3, l5, a5, r5) => {
        if (!l5) return [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(D2), (e4, l6) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(l6) == unref(S2) }], onClick: (t2) => z2(e4, l6) }, [createVNode("div", { style: e4.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])])];
        l5(`<div class="d-flex align-center justify-center py-2 px-2" data-v-ccf1b841${r5}><div class="d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" data-v-ccf1b841${r5}><!--[-->`), ssrRenderList(unref(D2), (e4, t2) => {
          l5(`<div class="${ssrRenderClass([{ "item-activate": String(t2) == unref(S2) }, "d-flex cursor-pointer item"])}" data-v-ccf1b841${r5}><div style="${ssrRenderStyle(e4.bgcolor)}" class="color-item rounded-circle" data-v-ccf1b841${r5}></div></div>`);
        }), l5("<!--]--></div></div>");
      }), _: 1 }, r4, d2)), a4(ssrRenderComponent(_l, { value: "setting" }, { default: withCtx((l5, a5, o2, r5) => {
        if (!a5) return [withDirectives(createVNode("div", { class: "py-2 px-2" }, [createVNode(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(g2), "onUpdate:modelValue": (e3) => isRef(g2) ? g2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])], 512), [[vShow, "temp-3" == unref(n2).tempId]]), createVNode("div", { class: "d-flex flex-wrap align-center justify-start py-2 px-2" }, [withDirectives(createVNode(cl, { modelValue: unref(O2).title, "onUpdate:modelValue": [(e3) => unref(O2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(O2).content, "onUpdate:modelValue": [(e3) => unref(O2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(O2).author, "onUpdate:modelValue": [(e3) => unref(O2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(n2).tempId]]), createVNode(cl, { modelValue: unref(O2).padding, "onUpdate:modelValue": [(e3) => unref(O2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), withDirectives(createVNode(cl, { modelValue: unref(O2).qrcode, "onUpdate:modelValue": [(e3) => unref(O2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-2" != unref(n2).tempId]])]), createVNode("div", { class: "d-flex flex-row align-center justify-start py-3 px-2" }, [createVNode("div", { class: "d-flex flex-row align-center" }, [createVNode("div", { style: { width: "4rem" } }, " \u6BD4\u4F8B "), createVNode("div", { class: "d-flex ga-2 flex-wrap" }, [createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(0) }, { default: withCtx(() => [createTextVNode(" 1:1 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(1) }, { default: withCtx(() => [createTextVNode(" 3:4 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(2) }, { default: withCtx(() => [createTextVNode(" 4:3 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(3) }, { default: withCtx(() => [createTextVNode(" 7:5 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(4) }, { default: withCtx(() => [createTextVNode(" 9:16 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(5) }, { default: withCtx(() => [createTextVNode(" 16:9 ")]), _: 1 }, 8, ["onClick"]), createVNode(Lp, { variant: "tonal", onClick: (e3) => R2(6) }, { default: withCtx(() => [createTextVNode(" 12:16 ")]), _: 1 }, 8, ["onClick"])])])]), createVNode("div", { class: "d-flex flex-row align-center justify-start px-2" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Padding")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx(() => [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "py-3" }, [createVNode(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])]), createVNode("div", { class: "d-flex flex-row align-center justify-start py-2 px-2" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Width")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx(() => [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex py-3" }, [createVNode(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])]), createVNode("div", { class: "d-flex align-center justify-start py-2 px-2" }, [createVNode("div", { class: "d-flex flex-row align-center" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Font")), 1), createVNode("div", { class: "py-3" }, [createVNode(Yd, { modelValue: unref(k2), "onUpdate:modelValue": (e3) => isRef(k2) ? k2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx(() => [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref(k2), "onUpdate:modelValue": [(e3) => isRef(k2) ? k2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])];
        a5(`<div class="py-2 px-2" style="${ssrRenderStyle("temp-3" == unref(n2).tempId ? null : { display: "none" })}" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(g2), "onUpdate:modelValue": (e3) => isRef(g2) ? g2.value = e3 : null }, null, o2, r5)), a5(`</div><div class="d-flex flex-wrap align-center justify-start py-2 px-2" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(cl, { modelValue: unref(O2).title, "onUpdate:modelValue": [(e3) => unref(O2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(n2).tempId ? null : { display: "none" } }, null, o2, r5)), a5(ssrRenderComponent(cl, { modelValue: unref(O2).content, "onUpdate:modelValue": [(e3) => unref(O2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(n2).tempId ? null : { display: "none" } }, null, o2, r5)), a5(ssrRenderComponent(cl, { modelValue: unref(O2).author, "onUpdate:modelValue": [(e3) => unref(O2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(n2).tempId ? null : { display: "none" } }, null, o2, r5)), a5(ssrRenderComponent(cl, { modelValue: unref(O2).padding, "onUpdate:modelValue": [(e3) => unref(O2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, o2, r5)), a5(ssrRenderComponent(cl, { modelValue: unref(O2).qrcode, "onUpdate:modelValue": [(e3) => unref(O2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120", style: "temp-2" != unref(n2).tempId ? null : { display: "none" } }, null, o2, r5)), a5(`</div><div class="d-flex flex-row align-center justify-start py-3 px-2" data-v-ccf1b841${r5}><div class="d-flex flex-row align-center" data-v-ccf1b841${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-ccf1b841${r5}> \u6BD4\u4F8B </div><div class="d-flex ga-2 flex-wrap" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(0) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 1:1 ")];
          l6(" 1:1 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(1) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 3:4 ")];
          l6(" 3:4 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(2) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 4:3 ")];
          l6(" 4:3 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(3) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 7:5 ")];
          l6(" 7:5 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(4) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 9:16 ")];
          l6(" 9:16 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(5) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 16:9 ")];
          l6(" 16:9 ");
        }), _: 1 }, o2, r5)), a5(ssrRenderComponent(Lp, { variant: "tonal", onClick: (e3) => R2(6) }, { default: withCtx((e3, l6, t2, a6) => {
          if (!l6) return [createTextVNode(" 12:16 ")];
          l6(" 12:16 ");
        }), _: 1 }, o2, r5)), a5(`</div></div></div><div class="d-flex flex-row align-center justify-start px-2" data-v-ccf1b841${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-ccf1b841${r5}>${ssrInterpolate(e2.$t("Padding"))}</div><div data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx((e3, l6, a6, o3) => {
          if (!l6) return [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })];
          l6(ssrRenderComponent(Lp, { value: "20" }, { default: withCtx((e4, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" 20 ")];
            l7(" 20 ");
          }), _: 1 }, a6, o3)), l6(ssrRenderComponent(Lp, { value: "30" }, { default: withCtx((e4, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" 30 ")];
            l7(" 30 ");
          }), _: 1 }, a6, o3)), l6(ssrRenderComponent(Lp, { value: "40" }, { default: withCtx((e4, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" 40 ")];
            l7(" 40 ");
          }), _: 1 }, a6, o3)), l6(ssrRenderComponent(Lp, { value: "50" }, { default: withCtx((e4, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" 50 ")];
            l7(" 50 ");
          }), _: 1 }, a6, o3)), l6(ssrRenderComponent(Lp, { value: "60" }, { default: withCtx((e4, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" 60 ")];
            l7(" 60 ");
          }), _: 1 }, a6, o3));
        }), _: 1 }, o2, r5)), a5(`<div class="py-3" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, o2, r5)), a5(`</div></div></div><div class="d-flex flex-row align-center justify-start py-2 px-2" data-v-ccf1b841${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-ccf1b841${r5}>${ssrInterpolate(e2.$t("Width"))}</div><div data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx((l6, a6, o3, r6) => {
          if (!a6) return [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })];
          a6(ssrRenderComponent(Lp, { value: "340", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Small")), 1)];
            t2(`${ssrInterpolate(e2.$t("Small"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "440", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Default")), 1)];
            t2(`${ssrInterpolate(e2.$t("Default"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "540", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Middle")), 1)];
            t2(`${ssrInterpolate(e2.$t("Middle"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "640", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("Large"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "740", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("XL Large"))}`);
          }), _: 1 }, o3, r6));
        }), _: 1 }, o2, r5)), a5(`<div class="d-flex py-3" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, o2, r5)), a5(`</div></div></div><div class="d-flex align-center justify-start py-2 px-2" data-v-ccf1b841${r5}><div class="d-flex flex-row align-center" data-v-ccf1b841${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-ccf1b841${r5}>${ssrInterpolate(e2.$t("Font"))}</div><div class="py-3" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(Yd, { modelValue: unref(k2), "onUpdate:modelValue": (e3) => isRef(k2) ? k2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx((l6, a6, o3, r6) => {
          if (!a6) return [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })];
          a6(ssrRenderComponent(Lp, { value: "0.7", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Small")), 1)];
            t2(`${ssrInterpolate(e2.$t("Small"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "1", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Default")), 1)];
            t2(`${ssrInterpolate(e2.$t("Default"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "1.25", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Middle")), 1)];
            t2(`${ssrInterpolate(e2.$t("Middle"))}`);
          }), _: 1 }, o3, r6)), a6(ssrRenderComponent(Lp, { value: "1.5", class: "text-none" }, { default: withCtx((l7, t2, a7, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("Large"))}`);
          }), _: 1 }, o3, r6));
        }), _: 1 }, o2, r5)), a5(`<div class="d-flex" data-v-ccf1b841${r5}>`), a5(ssrRenderComponent(K, { modelValue: unref(k2), "onUpdate:modelValue": [(e3) => isRef(k2) ? k2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, o2, r5)), a5("</div></div></div></div>");
      }), _: 1 }, r4, d2));
    }), _: 1 }, a3)), l3("</figure>");
  };
} }, Ul = Bl.setup;
Bl.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/PcOperation.vue"), Ul ? Ul(e2, l2) : void 0;
};
const Il = o(Bl, [["__scopeId", "data-v-ccf1b841"]]), jl = (e2, l2) => {
  const t2 = new Image();
  return t2.crossOrigin = "anonymous", t2.src = l2 ? `https://images.weserv.nl/?url=${e2}` : e2, new Promise((e3, l3) => {
    t2.onload = () => {
      const l4 = (void 0).createElement("canvas");
      l4.width = t2.width, l4.height = t2.height;
      l4.getContext("2d").drawImage(t2, 0, 0, l4.width, l4.height), e3(l4.toDataURL());
    }, t2.onerror = (e4) => {
      l3(e4);
    };
  });
}, Sl = { __name: "DefaultTemplate", __ssrInlineRender: true, props: { isMobile: { type: Boolean, default: false } }, emits: [], setup(l2, { emit: a2 }) {
  const { userConfig: o2, updateShareUserConfig: r2 } = Mc();
  ref(false);
  const d2 = ref(""), n2 = ref(""), i2 = ref(""), u2 = ref(""), c2 = ref("");
  ref(null);
  const s2 = ref(false);
  ref("#fff");
  const g2 = reactive({ required: (e2) => !!e2 || "\u8BF7\u8F93\u5165\u4E8C\u7EF4\u7801\u5185\u5BB9." });
  function m2() {
    s2.value = false;
    let e2 = { qrData: o2.value.qrData };
    r2(e2);
  }
  return (e2, l3, a3, r3) => {
    const p2 = Y;
    l3(`<figure${ssrRenderAttrs(r3)} data-v-080bb180><div class="main d-flex flex-column justify-center align-center" data-v-080bb180><div class="d-flex justify-center align-center" data-v-080bb180><div class="content-mode" style="${ssrRenderStyle(unref(o2).styleObject)}" data-v-080bb180><div class="${ssrRenderClass([{ "rounded-xl": "0px" != unref(o2).styleObject.padding }, "card d-flex justify-space-between align-start pt-8 pb-8 px-6 flex-column"])}" style="${ssrRenderStyle({ "min-height": "inherit" })}" data-v-080bb180><div style="${ssrRenderStyle({ width: "100%" })}" data-v-080bb180><div contenteditable="true" autocorrect="off" autocomplete="off" class="${ssrRenderClass([{ hidden: !unref(o2).show.title }, "editable-element title"])}" data-key="title" data-v-080bb180>${ssrInterpolate(unref(n2))}</div><div contenteditable="true" autocorrect="off" autocomplete="off" class="${ssrRenderClass([{ hidden: !unref(o2).show.content }, "editable-element content"])}" data-key="content" data-v-080bb180>${ssrInterpolate(unref(d2))}</div></div><div class="d-flex flex-column" style="${ssrRenderStyle({ width: "100%" })}" data-v-080bb180><div class="${ssrRenderClass([{ hidden: !unref(o2).show.author }, "editable-element"])}" data-v-080bb180><div class="time d-flex justify-end mt-6" contenteditable="true" data-key="author" data-v-080bb180>${ssrInterpolate(unref(i2))}</div></div><div class="${ssrRenderClass([{ hidden: !unref(o2).show.qrcode }, "qrcode-container"])}" style="${ssrRenderStyle({ width: "100%" })}" data-v-080bb180><div class="qrcode flex-cloumn pt-4 mt-6" data-v-080bb180><div class="d-flex flex-row justify-space-between align-center" data-v-080bb180><div data-v-080bb180><div class="editable-element qr-title" contenteditable="true" autocorrect="off" autocomplete="off" data-key="qrCodeTitle" data-v-080bb180>${ssrInterpolate(unref(u2))}</div><div class="editable-element qr-desc mt-2" contenteditable="true" data-key="qrCodeDesc" data-v-080bb180>${ssrInterpolate(unref(c2))}</div></div><div data-v-080bb180>`), l3(ssrRenderComponent(p2, null, {}, a3)), l3("</div></div></div></div></div></div></div></div>"), l3(ssrRenderComponent(Sf, { modelValue: unref(s2), "onUpdate:modelValue": (e3) => isRef(s2) ? s2.value = e3 : null, "max-width": "500" }, { default: withCtx((e3, l4, a4, r4) => {
      if (!l4) return [createVNode(Wp, { hover: "", title: "\u7F16\u8F91\u4E8C\u7EF4\u7801" }, { default: withCtx(() => [createVNode(Gp, null, { default: withCtx(() => [createVNode(I, { modelValue: unref(o2).qrData, "onUpdate:modelValue": (e4) => unref(o2).qrData = e4, class: "mb-2", rules: [unref(g2).required], label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5", clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(Lp, { color: "success", size: "large", type: "submit", variant: "elevated", block: "", onClick: m2 }, { default: withCtx(() => [createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")]), _: 1 })]), _: 1 })]), _: 1 })];
      l4(ssrRenderComponent(Wp, { hover: "", title: "\u7F16\u8F91\u4E8C\u7EF4\u7801" }, { default: withCtx((e4, l5, a5, r5) => {
        if (!l5) return [createVNode(Gp, null, { default: withCtx(() => [createVNode(I, { modelValue: unref(o2).qrData, "onUpdate:modelValue": (e5) => unref(o2).qrData = e5, class: "mb-2", rules: [unref(g2).required], label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5", clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(Lp, { color: "success", size: "large", type: "submit", variant: "elevated", block: "", onClick: m2 }, { default: withCtx(() => [createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")]), _: 1 })]), _: 1 })];
        l5(ssrRenderComponent(Gp, null, { default: withCtx((e5, l6, a6, r6) => {
          if (!l6) return [createVNode(I, { modelValue: unref(o2).qrData, "onUpdate:modelValue": (e6) => unref(o2).qrData = e6, class: "mb-2", rules: [unref(g2).required], label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5", clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(Lp, { color: "success", size: "large", type: "submit", variant: "elevated", block: "", onClick: m2 }, { default: withCtx(() => [createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")]), _: 1 })];
          l6(ssrRenderComponent(I, { modelValue: unref(o2).qrData, "onUpdate:modelValue": (e6) => unref(o2).qrData = e6, class: "mb-2", rules: [unref(g2).required], label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5", clearable: "" }, null, a6, r6)), l6(ssrRenderComponent(Lp, { color: "success", size: "large", type: "submit", variant: "elevated", block: "", onClick: m2 }, { default: withCtx((e6, l7, t2, a7) => {
            if (!l7) return [createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")];
            l7(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ");
          }), _: 1 }, a6, r6));
        }), _: 1 }, a5, r5));
      }), _: 1 }, a4, r4));
    }), _: 1 }, a3)), l3("</div></figure>");
  };
} }, Ol = Sl.setup;
Sl.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/DefaultTemplate.vue"), Ol ? Ol(e2, l2) : void 0;
};
const Dl = o(Sl, [["__scopeId", "data-v-080bb180"]]), Rl = { __name: "CodeTemplate", __ssrInlineRender: true, props: { isMobile: { type: Boolean, default: false }, template: { type: Object } }, emits: [], setup(l2, { emit: t2 }) {
  const { userConfig: a2, updateShareUserConfig: o2 } = Mc(), r2 = ref("");
  ref("js");
  const n2 = ref(""), i2 = ref(false);
  return watch(r2, async () => {
    n2.value = await codeToHtml(r2.value, { lang: "javascript", theme: "nord", lineNumbers: true, wordWrap: true });
    let e2 = { highlightedCode: n2.value, code: r2.value };
    o2({ codeData: e2 });
  }), (e2, l3, t3, o3) => {
    var _a;
    l3(`<figure${ssrRenderAttrs(o3)} data-v-f3d54176>`), unref(i2) ? (l3(`<div class="main d-flex code-container" style="${ssrRenderStyle(unref(a2).styleObject)}" data-v-f3d54176><div class="editor-container" data-v-f3d54176><div class="editor-header" data-v-f3d54176><div class="editor-controls" data-v-f3d54176><span class="control red" data-v-f3d54176></span><span class="control yellow" data-v-f3d54176></span><span class="control green" data-v-f3d54176></span></div><div class="editor-title" contenteditable="true" data-v-f3d54176>Untitled</div></div><div class="code-editor" data-v-f3d54176><textarea placeholder="Enter your code here" class="code-input" style="${ssrRenderStyle({ "letter-spacing": "0.2px" })}" autocomplete="off" spellcheck="false" autocapitalize="off" data-enable-grammarly="false" data-v-f3d54176>${ssrInterpolate(unref(r2))}</textarea>`), unref(i2) ? l3(`<div class="code-output" style="${ssrRenderStyle({ "letter-spacing": "0.2px" })}" data-v-f3d54176>${(_a = unref(n2)) != null ? _a : ""}</div>`) : l3("<!---->"), l3("</div></div></div>")) : l3("<!---->"), l3("</figure>");
  };
} }, Ll = Rl.setup;
Rl.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/CodeTemplate.vue"), Ll ? Ll(e2, l2) : void 0;
};
const Tl = o(Rl, [["__scopeId", "data-v-f3d54176"]]), ql = { __name: "CardTemplate", __ssrInlineRender: true, props: { isMobile: { type: Boolean, default: false }, isLoading: { type: Boolean, default: false }, template: { type: Object }, url: { type: String, default: "https://labs.wowyou.cc" } }, emits: [], setup(l2, { emit: t2 }) {
  const { userConfig: a2 } = Mc(), o2 = ref(false);
  return ref("#fff"), (e2, t3, r2, d2) => {
    const n2 = Y;
    t3(`<figure${ssrRenderAttrs(d2)} data-v-df82a956>`), unref(o2) ? (t3(`<div class="main d-flex flex-column justify-center align-center" data-v-df82a956><div class="d-flex justify-center align-center" data-v-df82a956><div class="content-mode" style="${ssrRenderStyle(unref(a2).styleObject)}" data-v-df82a956><div class="card d-flex justify-center flex-column" data-v-df82a956>`), l2.isLoading ? (t3(`<div class="d-flex justify-center align-start py-10" style="${ssrRenderStyle({ width: "100%" })}" data-v-df82a956>`), t3(ssrRenderComponent($d, { indeterminate: "", size: 80, width: 4, color: "#fff" }, null, r2)), t3("</div>")) : t3("<!---->"), l2.isLoading ? t3("<!---->") : (t3("<div data-v-df82a956>"), t3(ssrRenderComponent(md, { class: "img", src: unref(a2).metaData.base64Image, alt: "logo" }, null, r2)), t3('<div class="qrcode-container flex-cloumn my-2 px-2" data-v-df82a956><div class="d-flex flex-row align-center ga-2" data-v-df82a956>'), unref(a2).metaData.url ? (t3(`<div class="${ssrRenderClass([{ hidden: unref(o2) && !unref(a2).show.qrcode }, "qrcode d-flex"])}" data-v-df82a956>`), t3(ssrRenderComponent(n2, null, {}, r2)), t3("</div>")) : t3("<!---->"), t3(`<div data-v-df82a956><div class="editable-element qr-title" data-key="qrCodeTitle" data-v-df82a956>${ssrInterpolate(unref(a2).metaData.title)}</div><div class="editable-element qr-desc mt-1" data-key="qrCodeDesc" data-v-df82a956>${ssrInterpolate(unref(a2).metaData.description)}</div><div class="d-flex flex-row ga-2 mt-1 align-center" style="${ssrRenderStyle({ opacity: ".7" })}" data-v-df82a956>`), unref(a2).metaData.base64Logo ? (t3("<div data-v-df82a956>"), t3(ssrRenderComponent(md, { width: 20, cover: "", src: unref(a2).metaData.base64Logo }, null, r2)), t3("</div>")) : t3("<!---->"), t3(`<div class="qr-url" data-v-df82a956>${ssrInterpolate(unref(a2).metaData.url)}</div></div></div></div></div></div>`)), t3("</div></div></div></div>")) : t3("<!---->"), t3("</figure>");
  };
} }, zl = ql.setup;
ql.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/CardTemplate.vue"), zl ? zl(e2, l2) : void 0;
};
const Wl = o(ql, [["__scopeId", "data-v-df82a956"]]), Pl = { __name: "ImageTemplate", __ssrInlineRender: true, props: { isMobile: { type: Boolean, default: false }, isLoading: { type: Boolean, default: false }, template: { type: Object }, url: { type: String, default: "https://labs.wowyou.cc" } }, emits: ["getClipboardData"], setup(l2, { emit: t2 }) {
  const { userConfig: a2 } = Mc(), o2 = ref(null), r2 = ref([]), d2 = ref(false), n2 = ref(""), i2 = [(e2) => !e2 || !e2.length || e2[0].size < 2e6 || "Avatar size should be less than 2 MB!"];
  async function u2() {
    let e2 = r2.value;
    const l3 = URL.createObjectURL(e2), t3 = await jl(l3, false);
    n2.value = t3;
  }
  return (e2, l3, t3, c2) => {
    l3(`<figure${ssrRenderAttrs(c2)} data-v-09921ce5>`), unref(d2) ? (l3(`<div class="main d-flex flex-column justify-center align-center" data-v-09921ce5><div class="d-flex justify-center align-center" data-v-09921ce5><div class="content-mode" style="${ssrRenderStyle(unref(a2).styleObject)}" data-v-09921ce5><div class="${ssrRenderClass([{ "rounded-xl": "0px" != unref(a2).styleObject.padding }, "d-flex justify-center align-center cursor-pointer"])}" data-v-09921ce5>`), unref(n2) ? l3(ssrRenderComponent(md, { src: unref(n2), alt: "\u56FE\u7247" }, null, t3)) : l3("<!---->"), unref(n2) ? l3("<!---->") : l3(ssrRenderComponent(qd, { icon: "mdi-plus-box", size: "130px" }, null, t3)), l3("</div></div></div>"), l3(ssrRenderComponent(il$1, { ref_key: "uploadRef", ref: o2, label: "", rules: i2, "prepend-icon": "", modelValue: unref(r2), "onUpdate:modelValue": (e3) => isRef(r2) ? r2.value = e3 : null, onChange: u2, class: "custom-file-input" }, null, t3)), l3("</div>")) : l3("<!---->"), l3("</figure>");
  };
} }, Ql = Pl.setup;
Pl.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/ImageTemplate.vue"), Ql ? Ql(e2, l2) : void 0;
};
const Ml = o(Pl, [["__scopeId", "data-v-09921ce5"]]), El = nu({ color: String, cycle: Boolean, delimiterIcon: { type: uc, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e2) => Number(e2) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...yl({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), Xl = vu()({ name: "VCarousel", props: El(), emits: { "update:modelValue": (e2) => true }, setup(l2, r2) {
  let { slots: n2 } = r2;
  const i2 = Eu(l2, "modelValue"), { t: u2 } = Lu(), c2 = ref();
  let s2 = -1;
  function g2() {
    l2.cycle && c2.value && (s2 = (void 0).setTimeout(c2.value.group.next, +l2.interval > 0 ? +l2.interval : 6e3));
  }
  function m2() {
    (void 0).clearTimeout(s2), (void 0).requestAnimationFrame(g2);
  }
  return watch(i2, m2), watch(() => l2.interval, m2), watch(() => l2.cycle, (e2) => {
    e2 ? m2() : (void 0).clearTimeout(s2);
  }), Cu(() => {
    const e2 = xl.filterProps(l2);
    return createVNode(xl, mergeProps({ ref: c2 }, e2, { modelValue: i2.value, "onUpdate:modelValue": (e3) => i2.value = e3, class: ["v-carousel", { "v-carousel--hide-delimiter-background": l2.hideDelimiterBackground, "v-carousel--vertical-delimiters": l2.verticalDelimiters }, l2.class], style: [{ height: Ii(l2.height) }, l2.style] }), { default: n2.default, additional: (e3) => {
      let { group: r3 } = e3;
      return createVNode(Fragment, null, [!l2.hideDelimiters && createVNode("div", { class: "v-carousel__controls", style: { left: "left" === l2.verticalDelimiters && l2.verticalDelimiters ? 0 : "auto", right: "right" === l2.verticalDelimiters ? 0 : "auto" } }, [r3.items.value.length > 0 && createVNode(od, { defaults: { VBtn: { color: l2.color, icon: l2.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [r3.items.value.map((e4, l3) => {
        const o2 = { id: `carousel-item-${e4.id}`, "aria-label": u2("$vuetify.carousel.ariaLabel.delimiter", l3 + 1, r3.items.value.length), class: ["v-carousel__controls__item", r3.isSelected(e4.id) && "v-btn--active"], onClick: () => r3.select(e4.id, true) };
        return n2.item ? n2.item({ props: o2, item: e4 }) : createVNode(Lp, mergeProps(e4, o2), null);
      })] })]), l2.progress && createVNode(ap, { class: "v-carousel__progress", color: "string" == typeof l2.progress ? l2.progress : void 0, modelValue: (r3.getItemIndex(i2.value) + 1) / r3.items.value.length * 100 }, null)]);
    }, prev: n2.prev, next: n2.next });
  }), {};
} }), Fl = nu({ ...gd(), ...wl() }, "VCarouselItem"), Nl = vu()({ name: "VCarouselItem", inheritAttrs: false, props: Fl(), setup(e2, l2) {
  let { slots: o2, attrs: r2 } = l2;
  Cu(() => {
    const l3 = md.filterProps(e2), d2 = kl.filterProps(e2);
    return createVNode(kl, mergeProps({ class: ["v-carousel-item", e2.class] }, d2), { default: () => [createVNode(md, mergeProps(r2, l3), o2)] });
  });
} }), Hl = { __name: "MobileOperation", __ssrInlineRender: true, props: {}, emits: ["changeColor", "onSliderChange", "decrement", "increment", "onUrlChange", "onChangeTemp"], setup(l2, { emit: r2 }) {
  const n2 = r2, { userConfig: u2, updateShareUserConfig: c2 } = Mc(), g2 = ref(null), m2 = ref(""), k2 = ref("temp-1"), $2 = ref("1.1"), _2 = ref("440"), S2 = ref("20"), O2 = ref(0), D2 = reactive({ title: true, content: true, qrcode: true, author: true, padding: false }), R2 = ref([[{ bgcolor: "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));", colorA: "rgb(5, 174, 157)", colorB: "rgb(17, 26, 35)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(0, 0, 0), rgb(0, 0, 0));", colorA: "rgb(0, 0, 0)", colorB: "rgb(0, 0, 0)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(50, 50, 50), rgb(30, 30, 30));", colorA: " rgb(50, 50, 50)", colorB: "rgb(30, 30, 30)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(18, 18, 18), rgb(18, 18, 18));", colorA: "rgb(18, 18, 18)", colorB: "rgb(18, 18, 18)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(136, 22, 22), rgb(241, 57, 63));", colorA: "rgb(136, 22, 22)", colorB: "rgb(241, 57, 63)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24));", colorA: "rgb(177, 177, 177)", colorB: "rgb(24, 24, 24)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 255, 255), rgb(128, 222, 234));", colorA: "rgb(255, 255, 255)", colorB: "rgb(128, 222, 234)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(238, 213, 182), rgb(175, 136, 86));", colorA: "rgb(238, 213, 182)", colorB: "rgb(175, 136, 86)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(80, 104, 83), rgb(33, 50, 35));", colorA: "rgb(80, 104, 83)", colorB: "rgb(33, 50, 35)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24));", colorA: "rgb(51, 51, 51)", colorB: "rgb(24, 24, 24)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));", colorA: "rgb(207, 47, 152)", colorB: "rgb(106, 61, 236)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));", colorA: "rgb(165, 142, 251)", colorB: "rgb(233, 191, 248)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52));", colorA: "rgb(255, 99, 99)", colorB: "rgb(115, 52, 52)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84));", colorA: "rgb(189, 227, 236)", colorB: "rgb(54, 54, 84)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45));", colorA: "rgb(89, 212, 153)", colorB: "rgb(160, 135, 45)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51));", colorA: "rgb(76, 200, 200)", colorB: "rgb(32, 32, 51)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170));", colorA: "rgb(142, 199, 251)", colorB: "rgb(28, 85, 170)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47));", colorA: "rgb(255, 207, 115)", colorB: "rgb(255, 122, 47)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));", colorA: "rgb(94, 106, 137)", colorB: " rgb(15, 19, 40)", angle: "150deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));", colorA: "rgb(87, 151, 249)", colorB: " rgb(108, 213, 196)", angle: "45deg" }], [{ bgcolor: "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));", colorA: "rgb(64, 127, 231)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));", colorA: "rgb(77, 3, 222)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));", colorA: "rgb(204, 81, 36)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));", colorA: "rgb(52, 182, 150)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));", colorA: "rgb(244, 205, 82)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));", colorA: "rgb(86, 93, 204)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));", colorA: "rgb(33, 127, 193)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));", colorA: "rgb(53, 99, 250)", colorB: " rgb(253, 202, 220)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));", colorA: "rgb(44, 68, 89)", colorB: " rgb(255, 203, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));", colorA: "rgb(137, 176, 217)", colorB: " rgb(255, 238, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));", colorA: "rgb(14, 87, 238)", colorB: " rgb(230, 255, 203)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));", colorA: "rgb(186, 125, 239)", colorB: " rgb(255, 203, 253)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));", colorA: "rgb(67, 197, 167)", colorB: " rgb(203, 238, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));", colorA: "rgb(240, 111, 105)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));", colorA: "rgb(44, 176, 206)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));", colorA: "rgb(176, 189, 191)", colorB: " rgb(205, 203, 255)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));", colorA: "rgb(149, 18, 190)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));", colorA: "rgb(180, 20, 51)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));", colorA: "rgb(245, 148, 126)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));", colorA: "rgb(255, 242, 201)", colorB: " rgb(245, 159, 156)", angle: "45deg" }], [{ bgcolor: "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));", colorA: "rgb(139, 177, 196)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));", colorA: "rgb(136, 14, 133)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));", colorA: "rgb(69, 165, 215)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", colorA: "rgb(191, 69, 133)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));", colorA: "rgb(182, 195, 141)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));", colorA: "rgb(154, 151, 236)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));", colorA: "rgb(84, 102, 105)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));", colorA: "rgb(247, 174, 171)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));", colorA: "rgb(254, 252, 59)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));", colorA: "rgb(167, 254, 204)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));", colorA: "rgb(241, 255, 207)", colorB: " rgb(245, 159, 156)", angle: "45deg" }, { bgcolor: "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));", colorA: "rgb(186, 167, 228)", colorB: " rgb(245, 159, 156)", angle: "45deg" }]]);
  function L2(e2) {
    k2.value = e2, c2({ tempId: e2 });
  }
  function T2(e2) {
    1 == D2.padding ? u2.value.styleObject.padding = "0px" : u2.value.styleObject.padding = "20px", c2({ show: D2, styleObject: u2.value.styleObject });
  }
  function q2(e2) {
    "padding" == e2 && (u2.value.styleObject.padding = `${S2.value}px`), "width" == e2 && (u2.value.styleObject.width = `${_2.value}px`, u2.value.styleObject.transition = "500ms"), "fontsize" == e2 && (u2.value.styleObject["--base-font-size"] = `${$2.value}rem`), c2({ show: D2, styleObject: u2.value.styleObject });
  }
  function z2(e2, l3, t2) {
    O2.value = String(t2) + String(l3), n2("changeColor", e2);
  }
  function W2(e2) {
    "padding" == e2 && (u2.value.styleObject.padding = `${S2.value}px`), "width" == e2 && (u2.value.styleObject.width = `${_2.value}px`, u2.value.styleObject.transition = "500ms"), "fontsize" == e2 && (u2.value.styleObject["--base-font-size"] = `${$2.value}rem`), c2({ styleObject: u2.value.styleObject });
  }
  return watch(m2, (e2) => {
    n2("onUrlChange", e2);
  }), (e2, l3, r3, d2) => {
    l3(`<figure${ssrRenderAttrs(mergeProps({ style: { "padding-bottom": "env(safe-area-inset-bottom)" } }, d2))} data-v-59d05f6d>`), l3(ssrRenderComponent(Vl, { modelValue: unref(g2), "onUpdate:modelValue": (e3) => isRef(g2) ? g2.value = e3 : null }, { default: withCtx((l4, a2, r4, d3) => {
      if (!a2) return [createVNode(_l, { value: "template" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center template ga-6 py-4 px-4" }, [createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(u2).tempId }], onClick: (e3) => L2("temp-1") }, [createVNode(md, { src: rl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(u2).tempId }], onClick: (e3) => L2("temp-2") }, [createVNode(md, { src: dl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(u2).tempId }], onClick: (e3) => L2("temp-3") }, [createVNode(md, { src: nl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(u2).tempId }], onClick: (e3) => L2("temp-4") }, [createVNode(md, { src: il, width: 80, alt: "temp-4" })], 10, ["onClick"])])]), _: 1 }), createVNode(_l, { value: "url" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(m2), "onUpdate:modelValue": (e3) => isRef(m2) ? m2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])])]), _: 1 }), createVNode(_l, { value: "bg" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode(Xl, { continuous: false, "show-arrows": false, color: "#fff", height: "100", "hide-delimiter-background": "", class: "d-flex align-center justify-center custom" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(R2), (e3, l5) => (openBlock(), createBlock(Nl, { key: l5, cover: "" }, { default: withCtx(() => [createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(e3, (e4, a3) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(l5) + String(a3) == unref(O2) }], onClick: (t2) => z2(e4, a3, l5) }, [createVNode("div", { style: e4.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])]), _: 2 }, 1024))), 128))]), _: 1 })])]), _: 1 }), createVNode(_l, { value: "display" }, { default: withCtx(() => [createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" }, [withDirectives(createVNode(cl, { modelValue: unref(D2).title, "onUpdate:modelValue": [(e3) => unref(D2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(D2).content, "onUpdate:modelValue": [(e3) => unref(D2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(D2).author, "onUpdate:modelValue": [(e3) => unref(D2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), createVNode(cl, { modelValue: unref(D2).padding, "onUpdate:modelValue": [(e3) => unref(D2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), withDirectives(createVNode(cl, { modelValue: unref(D2).qrcode, "onUpdate:modelValue": [(e3) => unref(D2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-2" != unref(u2).tempId]])])]), _: 1 }), createVNode(_l, { value: "three" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center justify-center" }, [createVNode("div", { class: "d-flex flex-row ga-4 py-2" }, [createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Padding")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(S2), "onUpdate:modelValue": (e3) => isRef(S2) ? S2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx(() => [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode(K, { modelValue: unref(S2), "onUpdate:modelValue": [(e3) => isRef(S2) ? S2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, 8, ["modelValue", "onUpdate:modelValue"])])]), createVNode(nv, { vertical: "" }), createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Width")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx(() => [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])])]), _: 1 }), createVNode(_l, { value: "font" }, { default: withCtx(() => [createVNode("div", { class: "d-flex align-center justify-center" }, [createVNode("div", { class: "d-flex flex-row align-center px-2 py-2" }, [createVNode("div", null, [createVNode(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx(() => [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])]), _: 1 })];
      a2(ssrRenderComponent(_l, { value: "template" }, { default: withCtx((e3, l5, a3, o2) => {
        if (!l5) return [createVNode("div", { class: "d-flex align-center template ga-6 py-4 px-4" }, [createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(u2).tempId }], onClick: (e4) => L2("temp-1") }, [createVNode(md, { src: rl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(u2).tempId }], onClick: (e4) => L2("temp-2") }, [createVNode(md, { src: dl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(u2).tempId }], onClick: (e4) => L2("temp-3") }, [createVNode(md, { src: nl, width: 80 })], 10, ["onClick"]), createVNode("div", { class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(u2).tempId }], onClick: (e4) => L2("temp-4") }, [createVNode(md, { src: il, width: 80, alt: "temp-4" })], 10, ["onClick"])])];
        l5(`<div class="d-flex align-center template ga-6 py-4 px-4" data-v-59d05f6d${o2}><div class="${ssrRenderClass([{ "temp-item-activate": "temp-1" == unref(u2).tempId }, "temp-item cursor-pointer"])}" data-v-59d05f6d${o2}>`), l5(ssrRenderComponent(md, { src: rl, width: 80 }, null, a3, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-2" == unref(u2).tempId }, "temp-item cursor-pointer"])}" data-v-59d05f6d${o2}>`), l5(ssrRenderComponent(md, { src: dl, width: 80 }, null, a3, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-3" == unref(u2).tempId }, "temp-item cursor-pointer"])}" data-v-59d05f6d${o2}>`), l5(ssrRenderComponent(md, { src: nl, width: 80 }, null, a3, o2)), l5(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-4" == unref(u2).tempId }, "temp-item cursor-pointer"])}" data-v-59d05f6d${o2}>`), l5(ssrRenderComponent(md, { src: il, width: 80, alt: "temp-4" }, null, a3, o2)), l5("</div></div>");
      }), _: 1 }, r4, d3)), a2(ssrRenderComponent(_l, { value: "url" }, { default: withCtx((e3, l5, a3, o2) => {
        if (!l5) return [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(m2), "onUpdate:modelValue": (e4) => isRef(m2) ? m2.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])])];
        l5(`<div class="d-flex align-center justify-center py-2 px-2" data-v-59d05f6d${o2}>`), l5(ssrRenderComponent(I, { clearable: "", variant: "outlined", placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740", modelValue: unref(m2), "onUpdate:modelValue": (e4) => isRef(m2) ? m2.value = e4 : null }, null, a3, o2)), l5("</div>");
      }), _: 1 }, r4, d3)), a2(ssrRenderComponent(_l, { value: "bg" }, { default: withCtx((e3, l5, a3, r5) => {
        if (!l5) return [createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [createVNode(Xl, { continuous: false, "show-arrows": false, color: "#fff", height: "100", "hide-delimiter-background": "", class: "d-flex align-center justify-center custom" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(R2), (e4, l6) => (openBlock(), createBlock(Nl, { key: l6, cover: "" }, { default: withCtx(() => [createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(e4, (e5, a4) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(l6) + String(a4) == unref(O2) }], onClick: (t2) => z2(e5, a4, l6) }, [createVNode("div", { style: e5.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])]), _: 2 }, 1024))), 128))]), _: 1 })])];
        l5(`<div class="d-flex align-center justify-center py-2 px-2" data-v-59d05f6d${r5}>`), l5(ssrRenderComponent(Xl, { continuous: false, "show-arrows": false, color: "#fff", height: "100", "hide-delimiter-background": "", class: "d-flex align-center justify-center custom" }, { default: withCtx((e4, l6, a4, r6) => {
          if (!l6) return [(openBlock(true), createBlock(Fragment, null, renderList(unref(R2), (e5, l7) => (openBlock(), createBlock(Nl, { key: l7, cover: "" }, { default: withCtx(() => [createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(e5, (e6, a5) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(l7) + String(a5) == unref(O2) }], onClick: (t2) => z2(e6, a5, l7) }, [createVNode("div", { style: e6.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])]), _: 2 }, 1024))), 128))];
          l6("<!--[-->"), ssrRenderList(unref(R2), (e5, d4) => {
            l6(ssrRenderComponent(Nl, { key: d4, cover: "" }, { default: withCtx((l7, a5, r7, n3) => {
              if (!a5) return [createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(e5, (e6, l8) => (openBlock(), createBlock("div", { class: ["d-flex cursor-pointer item", { "item-activate": String(d4) + String(l8) == unref(O2) }], onClick: (t2) => z2(e6, l8, d4) }, [createVNode("div", { style: e6.bgcolor, class: "color-item rounded-circle" }, null, 4)], 10, ["onClick"]))), 256))])];
              a5(`<div class="d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" data-v-59d05f6d${n3}><!--[-->`), ssrRenderList(e5, (e6, l8) => {
                a5(`<div class="${ssrRenderClass([{ "item-activate": String(d4) + String(l8) == unref(O2) }, "d-flex cursor-pointer item"])}" data-v-59d05f6d${n3}><div style="${ssrRenderStyle(e6.bgcolor)}" class="color-item rounded-circle" data-v-59d05f6d${n3}></div></div>`);
              }), a5("<!--]--></div>");
            }), _: 2 }, a4, r6));
          }), l6("<!--]-->");
        }), _: 1 }, a3, r5)), l5("</div>");
      }), _: 1 }, r4, d3)), a2(ssrRenderComponent(_l, { value: "display" }, { default: withCtx((l5, a3, o2, r5) => {
        if (!a3) return [createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" }, [withDirectives(createVNode(cl, { modelValue: unref(D2).title, "onUpdate:modelValue": [(e3) => unref(D2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(D2).content, "onUpdate:modelValue": [(e3) => unref(D2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), withDirectives(createVNode(cl, { modelValue: unref(D2).author, "onUpdate:modelValue": [(e3) => unref(D2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-1" == unref(u2).tempId]]), createVNode(cl, { modelValue: unref(D2).padding, "onUpdate:modelValue": [(e3) => unref(D2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), withDirectives(createVNode(cl, { modelValue: unref(D2).qrcode, "onUpdate:modelValue": [(e3) => unref(D2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120" }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [[vShow, "temp-2" != unref(u2).tempId]])])];
        a3(`<div class="d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(cl, { modelValue: unref(D2).title, "onUpdate:modelValue": [(e3) => unref(D2).title = e3, (e3) => T2()], label: e2.$t("Title"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(u2).tempId ? null : { display: "none" } }, null, o2, r5)), a3(ssrRenderComponent(cl, { modelValue: unref(D2).content, "onUpdate:modelValue": [(e3) => unref(D2).content = e3, (e3) => T2()], label: e2.$t("Content"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(u2).tempId ? null : { display: "none" } }, null, o2, r5)), a3(ssrRenderComponent(cl, { modelValue: unref(D2).author, "onUpdate:modelValue": [(e3) => unref(D2).author = e3, (e3) => T2()], label: e2.$t("Author"), "hide-details": "", inset: "", color: "primary", "min-width": "100", style: "temp-1" == unref(u2).tempId ? null : { display: "none" } }, null, o2, r5)), a3(ssrRenderComponent(cl, { modelValue: unref(D2).padding, "onUpdate:modelValue": [(e3) => unref(D2).padding = e3, (e3) => T2()], label: e2.$t("Padding"), "hide-details": "", inset: "", color: "primary", "min-width": "100" }, null, o2, r5)), a3(ssrRenderComponent(cl, { modelValue: unref(D2).qrcode, "onUpdate:modelValue": [(e3) => unref(D2).qrcode = e3, (e3) => T2()], label: e2.$t("QR Code"), "hide-details": "", inset: "", color: "primary", "min-width": "120", style: "temp-2" != unref(u2).tempId ? null : { display: "none" } }, null, o2, r5)), a3("</div>");
      }), _: 1 }, r4, d3)), a2(ssrRenderComponent(_l, { value: "three" }, { default: withCtx((l5, a3, o2, r5) => {
        if (!a3) return [createVNode("div", { class: "d-flex align-center justify-center" }, [createVNode("div", { class: "d-flex flex-row ga-4 py-2" }, [createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Padding")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(S2), "onUpdate:modelValue": (e3) => isRef(S2) ? S2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx(() => [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode(K, { modelValue: unref(S2), "onUpdate:modelValue": [(e3) => isRef(S2) ? S2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, 8, ["modelValue", "onUpdate:modelValue"])])]), createVNode(nv, { vertical: "" }), createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [createVNode("div", { style: { width: "4rem" } }, toDisplayString(e2.$t("Width")), 1), createVNode("div", null, [createVNode(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx(() => [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])])];
        a3(`<div class="d-flex align-center justify-center" data-v-59d05f6d${r5}><div class="d-flex flex-row ga-4 py-2" data-v-59d05f6d${r5}><div class="flex-row d-flex align-center justify-start" data-v-59d05f6d${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-59d05f6d${r5}>${ssrInterpolate(e2.$t("Padding"))}</div><div data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(Yd, { modelValue: unref(S2), "onUpdate:modelValue": (e3) => isRef(S2) ? S2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", group: "", "data-id": "padding", onClick: (e3) => q2("padding") }, { default: withCtx((e3, l6, a4, o3) => {
          if (!l6) return [createVNode(Lp, { value: "20" }, { default: withCtx(() => [createTextVNode(" 20 ")]), _: 1 }), createVNode(Lp, { value: "30" }, { default: withCtx(() => [createTextVNode(" 30 ")]), _: 1 }), createVNode(Lp, { value: "40" }, { default: withCtx(() => [createTextVNode(" 40 ")]), _: 1 }), createVNode(Lp, { value: "50" }, { default: withCtx(() => [createTextVNode(" 50 ")]), _: 1 }), createVNode(Lp, { value: "60" }, { default: withCtx(() => [createTextVNode(" 60 ")]), _: 1 })];
          l6(ssrRenderComponent(Lp, { value: "20" }, { default: withCtx((e4, l7, t2, a5) => {
            if (!l7) return [createTextVNode(" 20 ")];
            l7(" 20 ");
          }), _: 1 }, a4, o3)), l6(ssrRenderComponent(Lp, { value: "30" }, { default: withCtx((e4, l7, t2, a5) => {
            if (!l7) return [createTextVNode(" 30 ")];
            l7(" 30 ");
          }), _: 1 }, a4, o3)), l6(ssrRenderComponent(Lp, { value: "40" }, { default: withCtx((e4, l7, t2, a5) => {
            if (!l7) return [createTextVNode(" 40 ")];
            l7(" 40 ");
          }), _: 1 }, a4, o3)), l6(ssrRenderComponent(Lp, { value: "50" }, { default: withCtx((e4, l7, t2, a5) => {
            if (!l7) return [createTextVNode(" 50 ")];
            l7(" 50 ");
          }), _: 1 }, a4, o3)), l6(ssrRenderComponent(Lp, { value: "60" }, { default: withCtx((e4, l7, t2, a5) => {
            if (!l7) return [createTextVNode(" 60 ")];
            l7(" 60 ");
          }), _: 1 }, a4, o3));
        }), _: 1 }, o2, r5)), a3(ssrRenderComponent(K, { modelValue: unref(S2), "onUpdate:modelValue": [(e3) => isRef(S2) ? S2.value = e3 : null, (e3) => W2("padding")], "thumb-label": "", step: 1, "track-color": "grey" }, null, o2, r5)), a3("</div></div>"), a3(ssrRenderComponent(nv, { vertical: "" }, null, o2, r5)), a3(`<div class="flex-row d-flex align-center justify-start" data-v-59d05f6d${r5}><div style="${ssrRenderStyle({ width: "4rem" })}" data-v-59d05f6d${r5}>${ssrInterpolate(e2.$t("Width"))}</div><div data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(Yd, { modelValue: unref(_2), "onUpdate:modelValue": (e3) => isRef(_2) ? _2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("width") }, { default: withCtx((l6, a4, o3, r6) => {
          if (!a4) return [createVNode(Lp, { value: "340", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "440", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "540", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "640", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 }), createVNode(Lp, { value: "740", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)]), _: 1 })];
          a4(ssrRenderComponent(Lp, { value: "340", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Small")), 1)];
            t2(`${ssrInterpolate(e2.$t("Small"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "440", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Default")), 1)];
            t2(`${ssrInterpolate(e2.$t("Default"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "540", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Middle")), 1)];
            t2(`${ssrInterpolate(e2.$t("Middle"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "640", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("Large"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "740", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("XL Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("XL Large"))}`);
          }), _: 1 }, o3, r6));
        }), _: 1 }, o2, r5)), a3(`<div class="d-flex" data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(K, { modelValue: unref(_2), "onUpdate:modelValue": [(e3) => isRef(_2) ? _2.value = e3 : null, (e3) => W2("width")], "thumb-label": "", step: 5, "track-color": "grey", min: "340", max: "900" }, null, o2, r5)), a3("</div></div></div></div></div>");
      }), _: 1 }, r4, d3)), a2(ssrRenderComponent(_l, { value: "font" }, { default: withCtx((l5, a3, o2, r5) => {
        if (!a3) return [createVNode("div", { class: "d-flex align-center justify-center" }, [createVNode("div", { class: "d-flex flex-row align-center px-2 py-2" }, [createVNode("div", null, [createVNode(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx(() => [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]), createVNode("div", { class: "d-flex" }, [createVNode(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, 8, ["modelValue", "onUpdate:modelValue"])])])])])];
        a3(`<div class="d-flex align-center justify-center" data-v-59d05f6d${r5}><div class="d-flex flex-row align-center px-2 py-2" data-v-59d05f6d${r5}><div data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(Yd, { modelValue: unref($2), "onUpdate:modelValue": (e3) => isRef($2) ? $2.value = e3 : null, color: "deep-purple-accent-3", rounded: "0", onClick: (e3) => q2("fontsize") }, { default: withCtx((l6, a4, o3, r6) => {
          if (!a4) return [createVNode(Lp, { value: "0.7", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Small")), 1)]), _: 1 }), createVNode(Lp, { value: "1", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Default")), 1)]), _: 1 }), createVNode(Lp, { value: "1.25", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Middle")), 1)]), _: 1 }), createVNode(Lp, { value: "1.5", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Large")), 1)]), _: 1 })];
          a4(ssrRenderComponent(Lp, { value: "0.7", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Small")), 1)];
            t2(`${ssrInterpolate(e2.$t("Small"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "1", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Default")), 1)];
            t2(`${ssrInterpolate(e2.$t("Default"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "1.25", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Middle")), 1)];
            t2(`${ssrInterpolate(e2.$t("Middle"))}`);
          }), _: 1 }, o3, r6)), a4(ssrRenderComponent(Lp, { value: "1.5", class: "text-none" }, { default: withCtx((l7, t2, a5, o4) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Large")), 1)];
            t2(`${ssrInterpolate(e2.$t("Large"))}`);
          }), _: 1 }, o3, r6));
        }), _: 1 }, o2, r5)), a3(`<div class="d-flex" data-v-59d05f6d${r5}>`), a3(ssrRenderComponent(K, { modelValue: unref($2), "onUpdate:modelValue": [(e3) => isRef($2) ? $2.value = e3 : null, (e3) => W2("fontsize")], "thumb-label": "", step: 0.1, "track-color": "grey", min: "0.7", max: "1.5" }, null, o2, r5)), a3("</div></div></div></div>");
      }), _: 1 }, r4, d3));
    }), _: 1 }, r3)), l3(ssrRenderComponent(Al, { modelValue: unref(g2), "onUpdate:modelValue": (e3) => isRef(g2) ? g2.value = e3 : null, "align-tabs": "center", "center-active": "" }, { default: withCtx((l4, a2, o2, r4) => {
      if (!a2) return [createVNode(ml, { value: "template", class: "text-none" }, { default: withCtx(() => [createTextVNode("\u6A21\u677F")]), _: 1 }), withDirectives(createVNode(ml, { value: "url", class: "text-none" }, { default: withCtx(() => [createTextVNode("URL")]), _: 1 }, 512), [[vShow, "temp-3" == unref(u2).tempId]]), createVNode(ml, { value: "bg", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Bg Color")), 1)]), _: 1 }), createVNode(ml, { value: "display", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Display")), 1)]), _: 1 }), createVNode(ml, { value: "three", class: "text-none d-none d-sm-flex" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Width And Padding")), 1)]), _: 1 }), createVNode(ml, { value: "font", class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Font")), 1)]), _: 1 })];
      a2(ssrRenderComponent(ml, { value: "template", class: "text-none" }, { default: withCtx((e3, l5, t2, a3) => {
        if (!l5) return [createTextVNode("\u6A21\u677F")];
        l5("\u6A21\u677F");
      }), _: 1 }, o2, r4)), a2(ssrRenderComponent(ml, { value: "url", class: "text-none", style: "temp-3" == unref(u2).tempId ? null : { display: "none" } }, { default: withCtx((e3, l5, t2, a3) => {
        if (!l5) return [createTextVNode("URL")];
        l5("URL");
      }), _: 1 }, o2, r4)), a2(ssrRenderComponent(ml, { value: "bg", class: "text-none" }, { default: withCtx((l5, t2, a3, o3) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Bg Color")), 1)];
        t2(`${ssrInterpolate(e2.$t("Bg Color"))}`);
      }), _: 1 }, o2, r4)), a2(ssrRenderComponent(ml, { value: "display", class: "text-none" }, { default: withCtx((l5, t2, a3, o3) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Display")), 1)];
        t2(`${ssrInterpolate(e2.$t("Display"))}`);
      }), _: 1 }, o2, r4)), a2(ssrRenderComponent(ml, { value: "three", class: "text-none d-none d-sm-flex" }, { default: withCtx((l5, t2, a3, o3) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Width And Padding")), 1)];
        t2(`${ssrInterpolate(e2.$t("Width And Padding"))}`);
      }), _: 1 }, o2, r4)), a2(ssrRenderComponent(ml, { value: "font", class: "text-none" }, { default: withCtx((l5, t2, a3, o3) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Font")), 1)];
        t2(`${ssrInterpolate(e2.$t("Font"))}`);
      }), _: 1 }, o2, r4));
    }), _: 1 }, r3)), l3("</figure>");
  };
} }, Yl = Hl.setup;
Hl.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/MobileOperation.vue"), Yl ? Yl(e2, l2) : void 0;
};
const Gl = o(Hl, [["__scopeId", "data-v-59d05f6d"]]), Jl = nu({ inset: Boolean, ...Bf({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), Kl = vu()({ name: "VBottomSheet", props: Jl(), emits: { "update:modelValue": (e2) => true }, setup(e2, l2) {
  let { slots: o2 } = l2;
  const r2 = Eu(e2, "modelValue");
  return Cu(() => {
    const l3 = Sf.filterProps(e2);
    return createVNode(Sf, mergeProps(l3, { contentClass: ["v-bottom-sheet__content", e2.contentClass], modelValue: r2.value, "onUpdate:modelValue": (e3) => r2.value = e3, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e2.inset }, e2.class], style: e2.style }), o2);
  }), {};
} }), Zl = nu({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Ti(Dp({ active: true }), ["location"]), ..._c(), ...tp(), ...fd({ transition: "fab-transition" }) }, "VFab"), et = vu()({ name: "VFab", props: Zl(), emits: { "update:modelValue": (e2) => true }, setup(o2, d2) {
  let { slots: n2 } = d2;
  const u2 = Eu(o2, "modelValue"), c2 = shallowRef(56), g2 = ref(), { resizeRef: p2 } = Ec(), v2 = computed(() => o2.app || o2.absolute), b2 = computed(() => {
    var _a;
    var e2;
    return !!v2.value && ((_a = null == (e2 = o2.location) ? void 0 : e2.split(" ").shift()) != null ? _a : "bottom");
  }), f2 = computed(() => {
    var _a;
    var e2;
    return !!v2.value && ((_a = null == (e2 = o2.location) ? void 0 : e2.split(" ")[1]) != null ? _a : "end");
  });
  hi(() => o2.app, () => {
    const e2 = Sc({ id: o2.name, order: computed(() => parseInt(o2.order, 10)), position: b2, layoutSize: computed(() => o2.layout ? c2.value + 24 : 0), elementSize: computed(() => c2.value + 24), active: computed(() => o2.app && u2.value), absolute: toRef(o2, "absolute") });
    watchEffect(() => {
      g2.value = e2.layoutItemStyles.value;
    });
  });
  const y2 = ref();
  return Cu(() => {
    const e2 = Lp.filterProps(o2);
    return createVNode("div", { ref: y2, class: ["v-fab", { "v-fab--absolute": o2.absolute, "v-fab--app": !!o2.app, "v-fab--extended": o2.extended, "v-fab--offset": o2.offset, [`v-fab--${b2.value}`]: v2.value, [`v-fab--${f2.value}`]: v2.value }, o2.class], style: [o2.app ? { ...g2.value } : { height: o2.absolute ? "100%" : "inherit" }, o2.style] }, [createVNode("div", { class: "v-fab__container" }, [createVNode(vd, { appear: o2.appear, transition: o2.transition }, { default: () => [withDirectives(createVNode(Lp, mergeProps({ ref: p2 }, e2, { active: void 0, location: void 0 }), n2), [[vShow, o2.active]])] })])]);
  }), {};
} }), lt = { __name: "index", __ssrInlineRender: true, setup(l2) {
  const { userConfig: o2, updateShareUserConfig: r2 } = Mc();
  tc();
  const d2 = ref(false), n2 = ref(false), u2 = ref(null), c2 = ref(null), g2 = ref(null), m2 = ref(null), p2 = ref(false), w2 = ref(false);
  function k2(e2) {
    let l3 = String(o2.value.styleObject.width);
    l3 = l3.match(/(\d+)/)[1];
    let t2 = l3;
    0 == e2 && (l3 = 400, t2 = l3), 1 == e2 && (l3 = 500, t2 = l3 / 3 * 4), 2 == e2 && (l3 = 700, t2 = l3 / 4 * 3), 3 == e2 && (l3 = 1024, t2 = l3 / 7 * 5), 4 == e2 && (l3 = 393, t2 = l3 / 9 * 16), 5 == e2 && (l3 = 700, t2 = l3 / 16 * 9), 6 == e2 && (l3 = 533, t2 = l3 / 12 * 16), o2.value.styleObject.height = `${t2}px`, o2.value.styleObject.width = `${l3}px`, r2({ scale: o2.value.scale, styleObject: o2.value.styleObject });
  }
  function $2(e2) {
    q2(e2);
  }
  function U2(e2) {
    o2.value.styleObject.transition = "", r2({ styleObject: o2.value.styleObject }), T2().style.setProperty("--colorA", e2.colorA), T2().style.setProperty("--colorB", e2.colorB), T2().style.setProperty("--angle", e2.angle);
  }
  function I2(e2) {
    "padding" == e2.action && (styleObject.padding = `${e2.val}px`), "width" == e2.action && (styleObject.width = `${e2.val}px`), "fontsize" == e2.action && (styleObject.fontSize = `${e2.val}rem`, T2().style.setProperty("--base-font-size", `${e2.val}rem`));
  }
  function S2(e2) {
    "padding" == e2.action ? styleObject.padding = `${e2.val}px` : "width" == e2.action ? styleObject.width = `${e2.val}px` : (styleObject.fontSize = `${e2.val}rem`, u2.value.$refs.template.style.setProperty("--base-font-size", `${e2.val}rem`));
  }
  function O2(e2) {
    "padding" == e2.action ? styleObject.padding = `${e2.val}px` : "width" == e2.action ? styleObject.width = `${e2.val}px` : (styleObject.fontSize = `${e2.val}rem`, u2.value.$refs.template.style.setProperty("--base-font-size", `${e2.val}rem`));
  }
  function D2() {
    Ze(T2(), { scale: 3 }).then((e2) => {
      const l3 = e2.toDataURL("image/png"), t2 = R2(l3), a2 = URL.createObjectURL(t2), o3 = (void 0).createElement("a");
      o3.href = a2, o3.download = "\u521B\u56FE\u5361\u7247-screenshot.png", (void 0).body.appendChild(o3), o3.click(), (void 0).body.removeChild(o3);
    });
  }
  i({ title: "\u521B\u56FE\u5361\u7247 - \u4F53\u9A8C\u5168\u65B0\u7684\u6587\u5B57\u5361\u7247\u5206\u4EAB | labs.wowyou.cc", ogTitle: "\u521B\u56FE\u5361\u7247 - \u4F53\u9A8C\u5168\u65B0\u7684\u6587\u5B57\u5361\u7247\u5206\u4EAB | labs.wowyou.cc", keywords: "\u521B\u56FE\u5361\u7247,\u5361\u7247,\u6587\u751F\u56FE,\u6587\u5B57\u5361\u7247,\u5DE5\u5177,\u6F14\u793A,\u751F\u6210\u5668,\u5C0F\u7EA2\u4E66\u56FE\u6587\u5FC5\u5907,\u56FE\u6587\u795E\u5668", ogType: "website", description: "\u521B\u56FE\u5361\u7247\u4E00\u6B3E\u5728\u7EBF\u6587\u5B57\u5361\u7247\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EA\u9700\u7B80\u5355\u8F93\u5165\uFF0C\u5373\u53EF\u77AC\u95F4\u8F6C\u5316\u4E3A\u7CBE\u81F4\u3001\u98CE\u683C\u72EC\u7279\u7684\u6587\u5B57\u5361\u7247\uFF0C\u8BA9\u6BCF\u4E2A\u5B57\u53E5\u90FD\u6563\u53D1\u72EC\u7279\u7684\u9B45\u529B\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u8868\u8FBE\u90FD\u7559\u4E0B\u6DF1\u523B\u5370\u8C61", ogDescription: "\u521B\u56FE\u5361\u7247\u4E00\u6B3E\u5728\u7EBF\u6587\u5B57\u5361\u7247\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EA\u9700\u7B80\u5355\u8F93\u5165\uFF0C\u5373\u53EF\u77AC\u95F4\u8F6C\u5316\u4E3A\u7CBE\u81F4\u3001\u98CE\u683C\u72EC\u7279\u7684\u6587\u5B57\u5361\u7247\uFF0C\u8BA9\u6BCF\u4E2A\u5B57\u53E5\u90FD\u6563\u53D1\u72EC\u7279\u7684\u9B45\u529B\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u8868\u8FBE\u90FD\u7559\u4E0B\u6DF1\u523B\u5370\u8C61", twitterCard: "summary_large_image", ogUrl: "https://labs.wowyou.cc", ogLocale: "zh", ogPublisher: "\u521B\u56FE\u5361\u7247", ogLogo: "https://labs.wowyou.cc/logo.png", ogImage: "https://labs.wowyou.cc/preview.png", robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
  const R2 = (e2) => {
    const l3 = atob(e2.split(",")[1]), t2 = e2.split(",")[0].split(":")[1].split(";")[0], a2 = new ArrayBuffer(l3.length), o3 = new Uint8Array(a2);
    for (let r3 = 0; r3 < l3.length; r3++) o3[r3] = l3.charCodeAt(r3);
    return new Blob([a2], { type: t2 });
  };
  function L2() {
    Ze(T2(), { scale: 3 }).then((e2) => {
      !function(e3) {
        let l3 = (e3 = e3.split(";base64,"))[0].split("data:")[1];
        e3 = e3[1];
        let t2 = atob(e3), a2 = new ArrayBuffer(t2.length), o3 = new Uint8Array(a2);
        [...Array(t2.length)].forEach((e4, l4) => o3[l4] = t2.charCodeAt(l4));
        let r3 = new Blob([a2], { type: l3 });
        (void 0).clipboard.write([new ClipboardItem({ [l3]: r3 })]), n2.value = true;
      }(e2.toDataURL("image/png"));
    });
  }
  function T2() {
    return "temp-1" == o2.value.tempId ? u2.value.$refs.template : "temp-2" == o2.value.tempId ? c2.value.$refs.template : "temp-3" == o2.value.tempId ? g2.value.$refs.template : "temp-4" == o2.value.tempId ? m2.value.$refs.template : void 0;
  }
  const q2 = async (e2) => {
    w2.value = true;
    const { data: l3 } = await Ke.post("https://api.wowyou.cc/api/web/og", { url: e2 });
    if (l3) {
      let a2 = "", o3 = "";
      if (null == l3 ? void 0 : l3.image) try {
        a2 = await jl(l3.image, true), o3 = await jl(l3.logo, false);
      } catch (t2) {
      }
      const d3 = { title: l3.title, description: l3.description, url: e2, image: l3.image, logo: l3.logo, author: l3.author, publisher: l3.publisher, base64Image: a2, base64Logo: o3 };
      r2({ metaData: d3 });
    }
    w2.value = false;
  };
  return (e2, l3, r3, R3) => {
    const T3 = Il, q3 = Dl, z2 = Tl, W2 = Wl, P2 = Ml, Q2 = Gl;
    unref(d2) ? (l3(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex flex-column justify-center align-center mb-4 pb-2" }, R3))} data-v-4db8f94e><div id="temp-1" style="${ssrRenderStyle("temp-1" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e>`), l3(ssrRenderComponent(q3, { ref_key: "temp1", ref: u2, isMobile: unref(d2) }, null, r3)), l3(`</div><div id="temp-2" style="${ssrRenderStyle("temp-2" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e>`), l3(ssrRenderComponent(z2, { ref_key: "temp2", ref: c2 }, null, r3)), l3(`</div><div id="temp-3" style="${ssrRenderStyle("temp-3" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e>`), l3(ssrRenderComponent(W2, { ref_key: "temp3", ref: g2, isLoading: unref(w2) }, null, r3)), l3(`</div><div id="temp-4" style="${ssrRenderStyle("temp-4" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e>`), l3(ssrRenderComponent(P2, { ref_key: "temp4", ref: m2 }, null, r3)), l3('</div><div class="d-flex mt-5 flex-row align-center justify-center ga-4" data-v-4db8f94e>'), l3(ssrRenderComponent(Lp, { onClick: D2, class: "text-none" }, { default: withCtx((l4, t2, a2, o3) => {
      if (!t2) return [createTextVNode(toDisplayString(e2.$t("Download Image")), 1)];
      t2(`${ssrInterpolate(e2.$t("Download Image"))}`);
    }), _: 1 }, r3)), unref(d2) ? l3("<!---->") : l3(ssrRenderComponent(bv, { text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, { activator: withCtx(({ props: l4 }, o3, r4, d3) => {
      if (!o3) return [createVNode(Lp, mergeProps(l4, { onClick: L2, class: "text-none" }), { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)]), _: 2 }, 1040)];
      o3(ssrRenderComponent(Lp, mergeProps(l4, { onClick: L2, class: "text-none" }), { default: withCtx((l5, t2, a2, o4) => {
        if (!t2) return [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)];
        t2(`${ssrInterpolate(e2.$t("Copy Image"))}`);
      }), _: 2 }, r4, d3));
    }), _: 1 }, r3)), l3("</div>"), l3(ssrRenderComponent(Kl, { modelValue: unref(p2), "onUpdate:modelValue": (e3) => isRef(p2) ? p2.value = e3 : null, inset: "", opacity: 0.2 }, { default: withCtx((e3, l4, a2, o3) => {
      if (!l4) return [createVNode(Wp, null, { default: withCtx(() => [createVNode(Q2, { onChangeColor: U2, onOnSliderChange: I2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })]), _: 1 })];
      l4(ssrRenderComponent(Wp, null, { default: withCtx((e4, l5, a3, o4) => {
        if (!l5) return [createVNode(Q2, { onChangeColor: U2, onOnSliderChange: I2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })];
        l5(ssrRenderComponent(Q2, { onChangeColor: U2, onOnSliderChange: I2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 }, null, a3, o4));
      }), _: 1 }, a2, o3));
    }), _: 1 }, r3)), l3(ssrRenderComponent(E, { modelValue: unref(n2), "onUpdate:modelValue": (e3) => isRef(n2) ? n2.value = e3 : null, elevation: "24", timeout: "3000", color: "red" }, { default: withCtx((e3, l4, t2, a2) => {
      if (!l4) return [createTextVNode(" \u590D\u5236\u6210\u529F ")];
      l4(" \u590D\u5236\u6210\u529F ");
    }), _: 1 }, r3)), l3(ssrRenderComponent(et, { icon: "mdi-pencil", onClick: (e3) => p2.value = true, location: "bottom end", app: "", color: "primary", style: { "z-index": "1006" } }, null, r3)), l3("</div>")) : l3(ssrRenderComponent(O, mergeProps({ class: "fill-height" }, R3), { default: withCtx((l4, r4, n3, p3) => {
      if (!r4) return [createVNode(_, { style: { "flex-wrap": "nowrap" } }, { default: withCtx(() => [createVNode(D, { cols: "3", style: { "min-width": "400px", "max-width": "500px" } }, { default: withCtx(() => [createVNode(te, { rounded: "lg", "min-height": "268" }, { default: withCtx(() => [createVNode(T3, { onChangeColor: U2, onOnSliderChange: I2, onChangePicScale: k2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })]), _: 1 })]), _: 1 }), createVNode(D, { style: { "min-width": "500px" } }, { default: withCtx(() => [withDirectives(createVNode("div", { id: "temp-1" }, [createVNode(q3, { ref_key: "temp1", ref: u2, isMobile: unref(d2) }, null, 8, ["isMobile"])], 512), [[vShow, "temp-1" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-2" }, [createVNode(z2, { ref_key: "temp2", ref: c2 }, null, 512)], 512), [[vShow, "temp-2" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-3" }, [createVNode(W2, { ref_key: "temp3", ref: g2, isLoading: unref(w2) }, null, 8, ["isLoading"])], 512), [[vShow, "temp-3" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-4" }, [createVNode(P2, { ref_key: "temp4", ref: m2 }, null, 512)], 512), [[vShow, "temp-4" == unref(o2).tempId]]), createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [createVNode(Lp, { onClick: D2, class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Download Image")), 1)]), _: 1 }), unref(d2) ? createCommentVNode("", true) : (openBlock(), createBlock(bv, { key: 0, text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, { activator: withCtx(({ props: l5 }) => [createVNode(Lp, mergeProps(l5, { onClick: L2, class: "text-none" }), { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)]), _: 2 }, 1040)]), _: 1 }))])]), _: 1 })]), _: 1 })];
      r4(ssrRenderComponent(_, { style: { "flex-wrap": "nowrap" } }, { default: withCtx((l5, r5, n4, p4) => {
        if (!r5) return [createVNode(D, { cols: "3", style: { "min-width": "400px", "max-width": "500px" } }, { default: withCtx(() => [createVNode(te, { rounded: "lg", "min-height": "268" }, { default: withCtx(() => [createVNode(T3, { onChangeColor: U2, onOnSliderChange: I2, onChangePicScale: k2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })]), _: 1 })]), _: 1 }), createVNode(D, { style: { "min-width": "500px" } }, { default: withCtx(() => [withDirectives(createVNode("div", { id: "temp-1" }, [createVNode(q3, { ref_key: "temp1", ref: u2, isMobile: unref(d2) }, null, 8, ["isMobile"])], 512), [[vShow, "temp-1" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-2" }, [createVNode(z2, { ref_key: "temp2", ref: c2 }, null, 512)], 512), [[vShow, "temp-2" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-3" }, [createVNode(W2, { ref_key: "temp3", ref: g2, isLoading: unref(w2) }, null, 8, ["isLoading"])], 512), [[vShow, "temp-3" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-4" }, [createVNode(P2, { ref_key: "temp4", ref: m2 }, null, 512)], 512), [[vShow, "temp-4" == unref(o2).tempId]]), createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [createVNode(Lp, { onClick: D2, class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Download Image")), 1)]), _: 1 }), unref(d2) ? createCommentVNode("", true) : (openBlock(), createBlock(bv, { key: 0, text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, { activator: withCtx(({ props: l6 }) => [createVNode(Lp, mergeProps(l6, { onClick: L2, class: "text-none" }), { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)]), _: 2 }, 1040)]), _: 1 }))])]), _: 1 })];
        r5(ssrRenderComponent(D, { cols: "3", style: { "min-width": "400px", "max-width": "500px" } }, { default: withCtx((e3, l6, a2, o3) => {
          if (!l6) return [createVNode(te, { rounded: "lg", "min-height": "268" }, { default: withCtx(() => [createVNode(T3, { onChangeColor: U2, onOnSliderChange: I2, onChangePicScale: k2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })]), _: 1 })];
          l6(ssrRenderComponent(te, { rounded: "lg", "min-height": "268" }, { default: withCtx((e4, l7, a3, o4) => {
            if (!l7) return [createVNode(T3, { onChangeColor: U2, onOnSliderChange: I2, onChangePicScale: k2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 })];
            l7(ssrRenderComponent(T3, { onChangeColor: U2, onOnSliderChange: I2, onChangePicScale: k2, onDecrement: S2, onIncrement: O2, onOnUrlChange: $2 }, null, a3, o4));
          }), _: 1 }, a2, o3));
        }), _: 1 }, n4, p4)), r5(ssrRenderComponent(D, { style: { "min-width": "500px" } }, { default: withCtx((l6, r6, n5, p5) => {
          if (!r6) return [withDirectives(createVNode("div", { id: "temp-1" }, [createVNode(q3, { ref_key: "temp1", ref: u2, isMobile: unref(d2) }, null, 8, ["isMobile"])], 512), [[vShow, "temp-1" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-2" }, [createVNode(z2, { ref_key: "temp2", ref: c2 }, null, 512)], 512), [[vShow, "temp-2" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-3" }, [createVNode(W2, { ref_key: "temp3", ref: g2, isLoading: unref(w2) }, null, 8, ["isLoading"])], 512), [[vShow, "temp-3" == unref(o2).tempId]]), withDirectives(createVNode("div", { id: "temp-4" }, [createVNode(P2, { ref_key: "temp4", ref: m2 }, null, 512)], 512), [[vShow, "temp-4" == unref(o2).tempId]]), createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [createVNode(Lp, { onClick: D2, class: "text-none" }, { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Download Image")), 1)]), _: 1 }), unref(d2) ? createCommentVNode("", true) : (openBlock(), createBlock(bv, { key: 0, text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, { activator: withCtx(({ props: l7 }) => [createVNode(Lp, mergeProps(l7, { onClick: L2, class: "text-none" }), { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)]), _: 2 }, 1040)]), _: 1 }))])];
          r6(`<div id="temp-1" style="${ssrRenderStyle("temp-1" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e${p5}>`), r6(ssrRenderComponent(q3, { ref_key: "temp1", ref: u2, isMobile: unref(d2) }, null, n5, p5)), r6(`</div><div id="temp-2" style="${ssrRenderStyle("temp-2" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e${p5}>`), r6(ssrRenderComponent(z2, { ref_key: "temp2", ref: c2 }, null, n5, p5)), r6(`</div><div id="temp-3" style="${ssrRenderStyle("temp-3" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e${p5}>`), r6(ssrRenderComponent(W2, { ref_key: "temp3", ref: g2, isLoading: unref(w2) }, null, n5, p5)), r6(`</div><div id="temp-4" style="${ssrRenderStyle("temp-4" == unref(o2).tempId ? null : { display: "none" })}" data-v-4db8f94e${p5}>`), r6(ssrRenderComponent(P2, { ref_key: "temp4", ref: m2 }, null, n5, p5)), r6(`</div><div class="d-flex mt-5 flex-row align-center justify-center ga-4" data-v-4db8f94e${p5}>`), r6(ssrRenderComponent(Lp, { onClick: D2, class: "text-none" }, { default: withCtx((l7, t2, a2, o3) => {
            if (!t2) return [createTextVNode(toDisplayString(e2.$t("Download Image")), 1)];
            t2(`${ssrInterpolate(e2.$t("Download Image"))}`);
          }), _: 1 }, n5, p5)), unref(d2) ? r6("<!---->") : r6(ssrRenderComponent(bv, { text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, { activator: withCtx(({ props: l7 }, o3, r7, d3) => {
            if (!o3) return [createVNode(Lp, mergeProps(l7, { onClick: L2, class: "text-none" }), { default: withCtx(() => [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)]), _: 2 }, 1040)];
            o3(ssrRenderComponent(Lp, mergeProps(l7, { onClick: L2, class: "text-none" }), { default: withCtx((l8, t2, a2, o4) => {
              if (!t2) return [createTextVNode(toDisplayString(e2.$t("Copy Image")), 1)];
              t2(`${ssrInterpolate(e2.$t("Copy Image"))}`);
            }), _: 2 }, r7, d3));
          }), _: 1 }, n5, p5)), r6("</div>");
        }), _: 1 }, n4, p4));
      }), _: 1 }, n3, p3));
    }), _: 1 }, r3));
  };
} }, tt = lt.setup;
lt.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), tt ? tt(e2, l2) : void 0;
};
const at = o(lt, [["__scopeId", "data-v-4db8f94e"]]);

export { at as default };
