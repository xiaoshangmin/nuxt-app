import { defineComponent, ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, shallowRef, Fragment, watchEffect, onScopeDispose, nextTick, toRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { i as il, L as Le, J as Je } from './VFileInput-CfGseUP1.mjs';
import { v as Wp, x as Gp, g as vu, y as ap, V as Lp, aW as Rp, f as nu, W as Lu, k as Eu, aO as sv, Z as Ui, I as _f, m as Cu, X as qd, aR as vv, aS as pv, aT as Xf, at as Vp, aU as is, S as od, a0 as fd, o as Ti, aP as Kc, aV as us, aK as ls, a3 as au, a9 as rd, ab as tc, ad as Ec, aL as Hi, aM as ji, aN as _i, G as hi, aG as Ii, aQ as rv, a6 as uc, a7 as ad, T as ou } from './server.mjs';
import { I, S } from './VTextField-ByCJoDrK.mjs';
import { d } from './VCheckboxBtn-zPdyUVm5.mjs';
import { K } from './VSlider-BqL5O7z_.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './VSelectionControl-CQDuIzNX.mjs';

const ye = nu({ renderless: Boolean, ...ou() }, "VVirtualScrollItem"), we = vu()({ name: "VVirtualScrollItem", inheritAttrs: false, props: ye(), emits: { "update:height": (e2) => true }, setup(o2, u2) {
  let { attrs: n2, emit: s2, slots: i2 } = u2;
  const { resizeRef: r2, contentRect: d2 } = Ec();
  watch(() => {
    var e2;
    return null == (e2 = d2.value) ? void 0 : e2.height;
  }, (e2) => {
    null != e2 && s2("update:height", e2);
  }), Cu(() => {
    var e2, u3;
    return o2.renderless ? createVNode(Fragment, null, [null == (e2 = i2.default) ? void 0 : e2.call(i2, { itemRef: r2 })]) : createVNode("div", mergeProps({ ref: r2, class: ["v-virtual-scroll__item", o2.class], style: o2.style }, n2), [null == (u3 = i2.default) ? void 0 : u3.call(i2)]);
  });
} }), ke = nu({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
const xe = nu({ items: { type: Array, default: () => [] }, renderless: Boolean, ...ke(), ...ou(), ...ad() }, "VVirtualScroll"), Ue = vu()({ name: "VVirtualScroll", props: xe(), setup(t2, v2) {
  let { slots: c2 } = v2;
  au("VVirtualScroll");
  const { dimensionStyles: m2 } = rd(t2), { calculateVisibleItems: p2, containerRef: f2, markerRef: h2, handleScroll: b2, handleScrollend: g2, handleItemResize: V2, scrollToIndex: y2, paddingTop: w2, paddingBottom: k2, computedItems: x2 } = function(l2, a2) {
    const t3 = tc(), d2 = shallowRef(0);
    watchEffect(() => {
      d2.value = parseFloat(l2.itemHeight || 0);
    });
    const v3 = shallowRef(0), c3 = shallowRef(Math.ceil((parseInt(l2.height) || t3.height.value) / (d2.value || 16)) || 1), m3 = shallowRef(0), p3 = shallowRef(0), f3 = ref(), h3 = ref();
    let b3 = 0;
    const { resizeRef: g3, contentRect: V3 } = Ec();
    watchEffect(() => {
      g3.value = f3.value;
    });
    const y3 = computed(() => {
      var e2;
      return f3.value === (void 0).documentElement ? t3.height.value : (null == (e2 = V3.value) ? void 0 : e2.height) || parseInt(l2.height) || 0;
    }), w3 = computed(() => !!(f3.value && h3.value && y3.value && d2.value));
    let k3 = Array.from({ length: a2.value.length }), x3 = Array.from({ length: a2.value.length });
    const U2 = shallowRef(0);
    let _2 = -1;
    const C2 = Hi(() => {
      const e2 = performance.now();
      x3[0] = 0;
      const l3 = a2.value.length;
      for (let a3 = 1; a3 <= l3 - 1; a3++) x3[a3] = (x3[a3 - 1] || 0) + (k3[a3 - 1] || d2.value);
      U2.value = Math.max(U2.value, performance.now() - e2);
    }, U2), S2 = watch(w3, (e2) => {
      e2 && (S2(), b3 = h3.value.offsetTop, C2.immediate(), O2(), ~_2 && nextTick(() => {
      }));
    });
    function I2(e2) {
      return e2 = ji(e2, 0, a2.value.length - 1), x3[e2] || 0;
    }
    function R2(e2) {
      return function(e3, l3) {
        let a3 = e3.length - 1, t4 = 0, o2 = 0, u2 = null, n2 = -1;
        if (e3[a3] < l3) return a3;
        for (; t4 <= a3; ) if (o2 = t4 + a3 >> 1, u2 = e3[o2], u2 > l3) a3 = o2 - 1;
        else {
          if (!(u2 < l3)) return u2 === l3 ? o2 : t4;
          n2 = o2, t4 = o2 + 1;
        }
        return n2;
      }(x3, e2);
    }
    onScopeDispose(() => {
      C2.clear();
    });
    let A2 = 0, P2 = 0, T2 = 0;
    watch(y3, (e2, l3) => {
      l3 && (O2(), e2 < l3 && requestAnimationFrame(() => {
        P2 = 0, O2();
      }));
    });
    let $2 = -1;
    function B2() {
      f3.value && h3.value && (P2 = 0, T2 = 0, (void 0).clearTimeout($2), O2());
    }
    let L2 = -1;
    function O2() {
      cancelAnimationFrame(L2), L2 = requestAnimationFrame(H2);
    }
    function H2() {
      if (!f3.value || !y3.value) return;
      const e2 = A2 - b3, l3 = Math.sign(P2), t4 = Math.max(0, e2 - 100), o2 = ji(R2(t4), 0, a2.value.length), u2 = e2 + y3.value + 100, n2 = ji(R2(u2) + 1, o2 + 1, a2.value.length);
      if ((-1 !== l3 || o2 < v3.value) && (1 !== l3 || n2 > c3.value)) {
        const e3 = I2(v3.value) - I2(o2), l4 = I2(n2) - I2(c3.value);
        Math.max(e3, l4) > 100 ? (v3.value = o2, c3.value = n2) : (o2 <= 0 && (v3.value = o2), n2 >= a2.value.length && (c3.value = n2));
      }
      m3.value = I2(v3.value), p3.value = I2(a2.value.length) - I2(c3.value);
    }
    const K2 = computed(() => a2.value.slice(v3.value, c3.value).map((e2, l3) => ({ raw: e2, index: l3 + v3.value, key: _i(e2) && "value" in e2 ? e2.value : l3 + v3.value })));
    return watch(a2, () => {
      k3 = Array.from({ length: a2.value.length }), x3 = Array.from({ length: a2.value.length }), C2.immediate(), O2();
    }, { deep: true }), { calculateVisibleItems: O2, containerRef: f3, markerRef: h3, computedItems: K2, paddingTop: m3, paddingBottom: p3, scrollToIndex: function(e2) {
      const l3 = I2(e2);
      !f3.value || e2 && !l3 ? _2 = e2 : f3.value.scrollTop = l3;
    }, handleScroll: function() {
      if (!f3.value || !h3.value) return;
      const e2 = f3.value.scrollTop, l3 = performance.now();
      l3 - T2 > 500 ? (P2 = Math.sign(e2 - A2), b3 = h3.value.offsetTop) : P2 = e2 - A2, A2 = e2, T2 = l3, (void 0).clearTimeout($2), $2 = (void 0).setTimeout(B2, 500), O2();
    }, handleScrollend: B2, handleItemResize: function(e2, l3) {
      const a3 = k3[e2], t4 = d2.value;
      d2.value = t4 ? Math.min(d2.value, l3) : l3, a3 === l3 && t4 === d2.value || (k3[e2] = l3, C2());
    } };
  }(t2, toRef(t2, "items"));
  return hi(() => t2.renderless, () => {
    onScopeDispose(function() {
      var e2, l2;
      const a2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? "addEventListener" : "removeEventListener";
      f2.value === (void 0).documentElement ? ((void 0)[a2]("scroll", b2, { passive: true }), (void 0)[a2]("scrollend", g2)) : (null == (e2 = f2.value) || e2[a2]("scroll", b2, { passive: true }), null == (l2 = f2.value) || l2[a2]("scrollend", g2));
    });
  }), Cu(() => {
    const e2 = x2.value.map((e3) => createVNode(we, { key: e3.key, renderless: t2.renderless, "onUpdate:height": (l2) => V2(e3.index, l2) }, { default: (l2) => {
      var a2;
      return null == (a2 = c2.default) ? void 0 : a2.call(c2, { item: e3.raw, index: e3.index, ...l2 });
    } }));
    return t2.renderless ? createVNode(Fragment, null, [createVNode("div", { ref: h2, class: "v-virtual-scroll__spacer", style: { paddingTop: Ii(w2.value) } }, null), e2, createVNode("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: Ii(k2.value) } }, null)]) : createVNode("div", { ref: f2, class: ["v-virtual-scroll", t2.class], onScrollPassive: b2, onScrollend: g2, style: [m2.value, t2.style] }, [createVNode("div", { ref: h2, class: "v-virtual-scroll__container", style: { paddingTop: Ii(w2.value), paddingBottom: Ii(k2.value) } }, [e2])]);
  }), { calculateVisibleItems: p2, scrollToIndex: y2 };
} });
function _e(l2, a2) {
  const t2 = shallowRef(false);
  let u2;
  return { onScrollPassive: function(e2) {
    cancelAnimationFrame(u2), t2.value = true, u2 = requestAnimationFrame(() => {
      u2 = requestAnimationFrame(() => {
        t2.value = false;
      });
    });
  }, onKeydown: async function(o2) {
    var u3, n2;
    if ("Tab" === o2.key && (null == (u3 = a2.value) || u3.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o2.key)) return;
    const s2 = null == (n2 = l2.value) ? void 0 : n2.$el;
    if (!s2) return;
    "Home" !== o2.key && "End" !== o2.key || s2.scrollTo({ top: "Home" === o2.key ? 0 : s2.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((e2) => requestAnimationFrame(e2)), await new Promise((e2) => requestAnimationFrame(e2)), await new Promise((e2) => requestAnimationFrame(e2)), await new Promise((l3) => {
        if (t2.value) {
          const a3 = watch(t2, () => {
            a3(), l3();
          });
        } else l3();
      });
    }();
    const i2 = s2.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if ("PageDown" === o2.key || "Home" === o2.key) {
      const e2 = s2.getBoundingClientRect().top;
      for (const l3 of i2) if (l3.getBoundingClientRect().top >= e2) {
        l3.focus();
        break;
      }
    } else {
      const e2 = s2.getBoundingClientRect().bottom;
      for (const l3 of [...i2].reverse()) if (l3.getBoundingClientRect().bottom <= e2) {
        l3.focus();
        break;
      }
    }
  } };
}
const Ce = nu({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: uc, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...rv({ itemChildren: false }) }, "Select"), Se = nu({ ...Ce(), ...Ti(S({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...fd({ transition: { component: Kc } }) }, "VSelect"), Ie = vu()({ name: "VSelect", props: Se(), emits: { "update:focused": (e2) => true, "update:modelValue": (e2) => true, "update:menu": (e2) => true }, setup(u2, i2) {
  let { slots: d2 } = i2;
  const { t: c2 } = Lu(), m2 = ref(), p2 = ref(), f2 = ref(), h2 = Eu(u2, "menu"), b2 = computed({ get: () => h2.value, set: (e2) => {
    var l2;
    h2.value && !e2 && (null == (l2 = p2.value) ? void 0 : l2.\u03A8openChildren.size) || (h2.value = e2);
  } }), { items: g2, transformIn: V2, transformOut: y2 } = sv(u2), w2 = Eu(u2, "modelValue", [], (e2) => V2(null === e2 ? [null] : Ui(e2)), (e2) => {
    var _a;
    const l2 = y2(e2);
    return u2.multiple ? l2 : (_a = l2[0]) != null ? _a : null;
  }), k2 = computed(() => "function" == typeof u2.counterValue ? u2.counterValue(w2.value) : "number" == typeof u2.counterValue ? u2.counterValue : w2.value.length), x2 = Le(u2), U2 = computed(() => w2.value.map((e2) => e2.value)), _2 = shallowRef(false), C2 = computed(() => b2.value ? u2.closeText : u2.openText);
  let S2, A2 = "";
  const P2 = computed(() => u2.hideSelected ? g2.value.filter((e2) => !w2.value.some((l2) => u2.valueComparator(l2, e2))) : g2.value), T2 = computed(() => u2.hideNoData && !P2.value.length || x2.isReadonly.value || x2.isDisabled.value), F2 = computed(() => {
    var e2;
    return { ...u2.menuProps, activatorProps: { ...(null == (e2 = u2.menuProps) ? void 0 : e2.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), B2 = ref(), M2 = _e(B2, m2);
  function j2(e2) {
    u2.openOnClear && (b2.value = true);
  }
  function D2() {
    T2.value || (b2.value = !b2.value);
  }
  function E2(e2) {
    us(e2) && L2(e2);
  }
  function L2(e2) {
    var l2, a2;
    if (!e2.key || x2.isReadonly.value) return;
    ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e2.key) && e2.preventDefault(), ["Enter", "ArrowDown", " "].includes(e2.key) && (b2.value = true), ["Escape", "Tab"].includes(e2.key) && (b2.value = false), "Home" === e2.key ? null == (l2 = B2.value) || l2.focus("first") : "End" === e2.key && (null == (a2 = B2.value) || a2.focus("last"));
    if (!us(e2)) return;
    const t2 = performance.now();
    t2 - S2 > 1e3 && (A2 = ""), A2 += e2.key.toLowerCase(), S2 = t2;
    const o2 = g2.value.find((e3) => e3.title.toLowerCase().startsWith(A2));
    void 0 !== o2 && (w2.value = [o2], P2.value.indexOf(o2));
  }
  function O2(e2) {
    let l2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    if (!e2.props.disabled) if (u2.multiple) {
      const a2 = w2.value.findIndex((l3) => u2.valueComparator(l3.value, e2.value)), t2 = null == l2 ? !~a2 : l2;
      if (~a2) {
        const l3 = t2 ? [...w2.value, e2] : [...w2.value];
        l3.splice(a2, 1), w2.value = l3;
      } else t2 && (w2.value = [...w2.value, e2]);
    } else {
      const a2 = false !== l2;
      w2.value = a2 ? [e2] : [], nextTick(() => {
        b2.value = false;
      });
    }
  }
  function H2(e2) {
    var l2;
    (null == (l2 = B2.value) ? void 0 : l2.$el.contains(e2.relatedTarget)) || (b2.value = false);
  }
  function K2() {
    var e2;
    u2.eager && (null == (e2 = f2.value) || e2.calculateVisibleItems());
  }
  function q2() {
    var e2;
    _2.value && (null == (e2 = m2.value) || e2.focus());
  }
  function Q2(e2) {
    _2.value = true;
  }
  function X2(e2) {
    if (null == e2) w2.value = [];
    else if (ls(m2.value) || ls(m2.value)) ; else m2.value && (m2.value.value = "");
  }
  return watch(b2, () => {
    !u2.hideSelected && b2.value && w2.value.length && P2.value.findIndex((e2) => w2.value.some((l2) => u2.valueComparator(l2.value, e2.value)));
  }), watch(() => u2.items, (e2, l2) => {
    b2.value || _2.value && !l2.length && e2.length && (b2.value = true);
  }), Cu(() => {
    const e2 = !(!u2.chips && !d2.chip), o2 = !!(!u2.hideNoData || P2.value.length || d2["prepend-item"] || d2["append-item"] || d2["no-data"]), n2 = w2.value.length > 0, s2 = I.filterProps(u2), i3 = n2 || !_2.value && u2.label && !u2.persistentPlaceholder ? void 0 : u2.placeholder;
    return createVNode(I, mergeProps({ ref: m2 }, s2, { modelValue: w2.value.map((e3) => e3.props.value).join(", "), "onUpdate:modelValue": X2, focused: _2.value, "onUpdate:focused": (e3) => _2.value = e3, validationValue: w2.externalValue, counterValue: k2.value, dirty: n2, class: ["v-select", { "v-select--active-menu": b2.value, "v-select--chips": !!u2.chips, ["v-select--" + (u2.multiple ? "multiple" : "single")]: true, "v-select--selected": w2.value.length, "v-select--selection-slot": !!d2.selection }, u2.class], style: u2.style, inputmode: "none", placeholder: i3, "onClick:clear": j2, "onMousedown:control": D2, onBlur: H2, onKeydown: L2, "aria-label": c2(C2.value), title: c2(C2.value) }), { ...d2, default: () => createVNode(Fragment, null, [createVNode(vv, mergeProps({ ref: p2, modelValue: b2.value, "onUpdate:modelValue": (e3) => b2.value = e3, activator: "parent", contentClass: "v-select__content", disabled: T2.value, eager: u2.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: u2.transition, onAfterEnter: K2, onAfterLeave: q2 }, F2.value), { default: () => {
      var _a;
      return [o2 && createVNode(pv, mergeProps({ ref: B2, selected: U2.value, selectStrategy: u2.multiple ? "independent" : "single-independent", onMousedown: (e3) => e3.preventDefault(), onKeydown: E2, onFocusin: Q2, tabindex: "-1", "aria-live": "polite", color: (_a = u2.itemColor) != null ? _a : u2.color }, M2, u2.listProps), { default: () => {
        var _a2;
        var e3, o3, n3;
        return [null == (e3 = d2["prepend-item"]) ? void 0 : e3.call(d2), !P2.value.length && !u2.hideNoData && ((_a2 = null == (o3 = d2["no-data"]) ? void 0 : o3.call(d2)) != null ? _a2 : createVNode(Xf, { key: "no-data", title: c2(u2.noDataText) }, null)), createVNode(Ue, { ref: f2, renderless: true, items: P2.value }, { default: (e4) => {
          var _a3;
          var o4;
          let { item: n4, index: s3, itemRef: i4 } = e4;
          const r2 = mergeProps(n4.props, { ref: i4, key: n4.value, onClick: () => O2(n4, null) });
          return (_a3 = null == (o4 = d2.item) ? void 0 : o4.call(d2, { item: n4, index: s3, props: r2 })) != null ? _a3 : createVNode(Xf, mergeProps(r2, { role: "option" }), { prepend: (e5) => {
            let { isSelected: t2 } = e5;
            return createVNode(Fragment, null, [u2.multiple && !u2.hideSelected ? createVNode(d, { key: n4.value, modelValue: t2, ripple: false, tabindex: "-1" }, null) : void 0, n4.props.prependAvatar && createVNode(Vp, { image: n4.props.prependAvatar }, null), n4.props.prependIcon && createVNode(qd, { icon: n4.props.prependIcon }, null)]);
          } });
        } }), null == (n3 = d2["append-item"]) ? void 0 : n3.call(d2)];
      } })];
    } }), w2.value.map((a2, o3) => {
      function n3(e3) {
        e3.stopPropagation(), e3.preventDefault(), O2(a2, false);
      }
      const s3 = { "onClick:close": n3, onKeydown(e3) {
        "Enter" !== e3.key && " " !== e3.key || (e3.preventDefault(), e3.stopPropagation(), n3(e3));
      }, onMousedown(e3) {
        e3.preventDefault(), e3.stopPropagation();
      }, modelValue: true, "onUpdate:modelValue": void 0 }, i4 = e2 ? !!d2.chip : !!d2.selection, r2 = i4 ? is(e2 ? d2.chip({ item: a2, index: o3, props: s3 }) : d2.selection({ item: a2, index: o3 })) : void 0;
      if (!i4 || r2) return createVNode("div", { key: a2.value, class: "v-select__selection" }, [e2 ? d2.chip ? createVNode(od, { key: "chip-defaults", defaults: { VChip: { closable: u2.closableChips, size: "small", text: a2.title } } }, { default: () => [r2] }) : createVNode(Je, mergeProps({ key: "chip", closable: u2.closableChips, size: "small", text: a2.title, disabled: a2.props.disabled }, s3), null) : r2 != null ? r2 : createVNode("span", { class: "v-select__selection-text" }, [a2.title, u2.multiple && o3 < w2.value.length - 1 && createVNode("span", { class: "v-select__selection-comma" }, [createTextVNode(",")])])]);
    })]), "append-inner": function() {
      for (var e3, t2 = arguments.length, o3 = new Array(t2), n3 = 0; n3 < t2; n3++) o3[n3] = arguments[n3];
      return createVNode(Fragment, null, [null == (e3 = d2["append-inner"]) ? void 0 : e3.call(d2, ...o3), u2.menuIcon ? createVNode(qd, { class: "v-select__menu-icon", icon: u2.menuIcon }, null) : void 0]);
    } });
  }), _f({ isFocused: _2, menu: b2, select: O2 }, m2);
} }), Re = defineComponent({ __name: "compressed", __ssrInlineRender: true, setup(a2) {
  const o2 = ref(""), u2 = ref(""), i2 = ref(null), r2 = ref(0), d2 = ref(""), c2 = ref("mp4"), y2 = ref("h264"), I2 = ref("aac"), R2 = ref("medium"), P2 = ref(2e3), T2 = ref(128), F2 = ref(null), $2 = ref(false), B2 = [{ title: "MP4", value: "mp4" }, { title: "WebM", value: "webm" }, { title: "MOV", value: "mov" }, { title: "MKV", value: "mkv" }, { title: "GIF", value: "gif" }, { title: "AVI", value: "avi" }], M2 = computed(() => {
    switch (c2.value) {
      case "webm":
        return [{ title: "VP8", value: "vp8" }, { title: "VP9", value: "vp9" }];
      case "gif":
        return [{ title: "GIF", value: "gif" }];
      default:
        return [{ title: "H.264", value: "h264" }, { title: "H.265/HEVC", value: "hevc" }, { title: "MPEG-4", value: "mpeg4" }];
    }
  }), j2 = computed(() => "gif" === c2.value ? [] : [{ title: "AAC", value: "aac" }, { title: "MP3", value: "mp3" }, { title: "Opus", value: "opus" }, { title: "Vorbis", value: "vorbis" }]), D2 = [{ title: "\u8D85\u9AD8\u8D28\u91CF (\u975E\u5E38\u6162)", value: "veryhigh" }, { title: "\u9AD8\u8D28\u91CF (\u6162\u901F\u8F6C\u6362)", value: "high" }, { title: "\u4E2D\u7B49\u8D28\u91CF (\u63A8\u8350)", value: "medium" }, { title: "\u4F4E\u8D28\u91CF (\u5FEB\u901F\u8F6C\u6362)", value: "low" }, { title: "\u6781\u901F\u8F6C\u6362 (\u4F4E\u8D28\u91CF)", value: "verylow" }], E2 = () => {
    const e2 = [];
    switch (y2.value) {
      case "h264":
        e2.push("-c:v", "libx264");
        break;
      case "hevc":
        e2.push("-c:v", "libx265");
        break;
      case "vp8":
        e2.push("-c:v", "libvpx");
        break;
      case "vp9":
        e2.push("-c:v", "libvpx-vp9");
        break;
      case "mpeg4":
        e2.push("-c:v", "mpeg4");
    }
    if ("gif" !== c2.value) switch (I2.value) {
      case "aac":
        e2.push("-c:a", "aac");
        break;
      case "mp3":
        e2.push("-c:a", "libmp3lame");
        break;
      case "opus":
        e2.push("-c:a", "libopus");
        break;
      case "vorbis":
        e2.push("-c:a", "libvorbis");
    }
    if ("h264" === y2.value || "hevc" === y2.value) switch (R2.value) {
      case "veryhigh":
        e2.push("-crf", "16", "-preset", "veryslow");
        break;
      case "high":
        e2.push("-crf", "18", "-preset", "slow");
        break;
      case "medium":
        e2.push("-crf", "23", "-preset", "medium");
        break;
      case "low":
        e2.push("-crf", "28", "-preset", "fast");
        break;
      case "verylow":
        e2.push("-crf", "32", "-preset", "ultrafast");
    }
    return "gif" !== c2.value && (e2.push("-b:v", `${P2.value}k`), e2.push("-b:a", `${T2.value}k`)), "gif" === c2.value && e2.push("-vf", "fps=15,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse"), e2;
  };
  watch(F2, async (e2) => {
    e2 && (u2.value = "", r2.value = 0, d2.value = "", i2.value || await (async () => {
      try {
        if (i2.value) return;
        i2.value = new FFmpeg();
        const e3 = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";
        o2.value = "\u52A0\u8F7D FFmpeg \u6838\u5FC3\u6587\u4EF6...", await i2.value.load({ coreURL: await toBlobURL(`${e3}/ffmpeg-core.js`, "text/javascript"), wasmURL: await toBlobURL(`${e3}/ffmpeg-core.wasm`, "application/wasm"), workerURL: await toBlobURL(`${e3}/ffmpeg-core.worker.js`, "text/javascript") }), o2.value = "FFmpeg \u52A0\u8F7D\u5B8C\u6210";
      } catch (e3) {
        o2.value = `FFmpeg \u52A0\u8F7D\u5931\u8D25: ${(null == e3 ? void 0 : e3.message) || "\u672A\u77E5\u9519\u8BEF"}`, i2.value = null;
      }
    })());
  });
  const L2 = async () => {
    if (F2.value && i2.value && !$2.value) try {
      $2.value = true, o2.value = "\u5F00\u59CB\u8F6C\u6362\u89C6\u9891...", r2.value = 0;
      const e2 = `input.${((e3) => {
        var l3;
        const a4 = null == (l3 = e3.name.split(".").pop()) ? void 0 : l3.toLowerCase();
        return a4 || ({ "video/mp4": "mp4", "video/webm": "webm", "video/quicktime": "mov", "video/x-matroska": "mkv", "video/x-msvideo": "avi", "video/x-flv": "flv", "video/3gpp": "3gp", "video/x-ms-wmv": "wmv" }[e3.type] || "mp4");
      })(F2.value)}`, l2 = `output.${c2.value}`;
      await i2.value.writeFile(e2, await fetchFile(F2.value));
      await O2(F2.value);
      const a3 = ["-i", e2, ...E2(), l2];
      await i2.value.exec(a3);
      const t2 = await i2.value.readFile(l2), n2 = new Uint8Array(t2), s2 = "gif" === c2.value ? "image/gif" : `video/${c2.value}`;
      u2.value = URL.createObjectURL(new Blob([n2], { type: s2 })), r2.value = 100, o2.value = "\u89C6\u9891\u8F6C\u6362\u5B8C\u6210!", await i2.value.deleteFile(e2), await i2.value.deleteFile(l2);
    } catch (e2) {
      o2.value = `\u89C6\u9891\u8F6C\u6362\u5931\u8D25: ${(null == e2 ? void 0 : e2.message) || "\u672A\u77E5\u9519\u8BEF"}`, r2.value = 0;
    } finally {
      $2.value = false;
    }
  }, O2 = (e2) => new Promise((l2) => {
    const a3 = (void 0).createElement("video");
    a3.preload = "metadata", a3.onloadedmetadata = () => {
      URL.revokeObjectURL(a3.src), l2(a3.duration);
    }, a3.src = URL.createObjectURL(e2);
  }), H2 = () => {
    if (!u2.value) return;
    const e2 = (void 0).createElement("a");
    e2.href = u2.value, e2.download = `converted_video.${c2.value}`, (void 0).body.appendChild(e2), e2.click(), (void 0).body.removeChild(e2);
  };
  return (e2, a3, o3, n2) => {
    a3(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, n2))} data-v-3c51ae69><h1 data-v-3c51ae69>\u89C6\u9891\u683C\u5F0F\u8F6C\u6362</h1><div class="upload-container" data-v-3c51ae69>`), a3(ssrRenderComponent(il, { modelValue: unref(F2), "onUpdate:modelValue": (e3) => isRef(F2) ? F2.value = e3 : null, accept: "video/*", label: "\u9009\u62E9\u89C6\u9891\u6587\u4EF6", "prepend-icon": "mdi-video", "show-size": "", "truncate-length": "30" }, null, o3)), unref(F2) ? (a3('<div class="format-settings mt-4" data-v-3c51ae69>'), a3(ssrRenderComponent(Wp, null, { default: withCtx((e3, a4, t2, o4) => {
      if (!a4) return [createVNode(Gp, null, { default: withCtx(() => [unref(d2) ? (openBlock(), createBlock("p", { key: 0 }, "\u6E90\u6587\u4EF6\u683C\u5F0F: " + toDisplayString(unref(d2)), 1)) : createCommentVNode("", true), createVNode(Ie, { modelValue: unref(c2), "onUpdate:modelValue": (e4) => isRef(c2) ? c2.value = e4 : null, items: B2, label: "\u76EE\u6807\u683C\u5F0F", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(Ie, { modelValue: unref(y2), "onUpdate:modelValue": (e4) => isRef(y2) ? y2.value = e4 : null, items: unref(M2), label: "\u89C6\u9891\u7F16\u7801", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]), createVNode(Ie, { modelValue: unref(I2), "onUpdate:modelValue": (e4) => isRef(I2) ? I2.value = e4 : null, items: unref(j2), label: "\u97F3\u9891\u7F16\u7801", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]), createVNode(Ie, { modelValue: unref(R2), "onUpdate:modelValue": (e4) => isRef(R2) ? R2.value = e4 : null, items: D2, label: "\u8F6C\u6362\u8D28\u91CF", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(K, { modelValue: unref(P2), "onUpdate:modelValue": (e4) => isRef(P2) ? P2.value = e4 : null, min: 500, max: 8e3, step: 500, label: "\u89C6\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(K, { modelValue: unref(T2), "onUpdate:modelValue": (e4) => isRef(T2) ? T2.value = e4 : null, min: 64, max: 320, step: 32, label: "\u97F3\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), unref(r2) > 0 && unref(r2) < 100 ? (openBlock(), createBlock(ap, { key: 1, modelValue: unref(r2), "onUpdate:modelValue": (e4) => isRef(r2) ? r2.value = e4 : null, color: "primary", height: "25" }, { default: withCtx(() => [createVNode("strong", null, toDisplayString(Math.ceil(unref(r2))) + "%", 1)]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true), createVNode(Lp, { color: "primary", block: "", loading: unref($2), disabled: unref($2), class: "mt-4", onClick: L2 }, { default: withCtx(() => [createTextVNode(toDisplayString(unref($2) ? "\u8F6C\u6362\u4E2D..." : "\u5F00\u59CB\u8F6C\u6362"), 1)]), _: 1 }, 8, ["loading", "disabled"])]), _: 1 })];
      a4(ssrRenderComponent(Gp, null, { default: withCtx((e4, a5, t3, o5) => {
        if (!a5) return [unref(d2) ? (openBlock(), createBlock("p", { key: 0 }, "\u6E90\u6587\u4EF6\u683C\u5F0F: " + toDisplayString(unref(d2)), 1)) : createCommentVNode("", true), createVNode(Ie, { modelValue: unref(c2), "onUpdate:modelValue": (e5) => isRef(c2) ? c2.value = e5 : null, items: B2, label: "\u76EE\u6807\u683C\u5F0F", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(Ie, { modelValue: unref(y2), "onUpdate:modelValue": (e5) => isRef(y2) ? y2.value = e5 : null, items: unref(M2), label: "\u89C6\u9891\u7F16\u7801", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]), createVNode(Ie, { modelValue: unref(I2), "onUpdate:modelValue": (e5) => isRef(I2) ? I2.value = e5 : null, items: unref(j2), label: "\u97F3\u9891\u7F16\u7801", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]), createVNode(Ie, { modelValue: unref(R2), "onUpdate:modelValue": (e5) => isRef(R2) ? R2.value = e5 : null, items: D2, label: "\u8F6C\u6362\u8D28\u91CF", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(K, { modelValue: unref(P2), "onUpdate:modelValue": (e5) => isRef(P2) ? P2.value = e5 : null, min: 500, max: 8e3, step: 500, label: "\u89C6\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(K, { modelValue: unref(T2), "onUpdate:modelValue": (e5) => isRef(T2) ? T2.value = e5 : null, min: 64, max: 320, step: 32, label: "\u97F3\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, 8, ["modelValue", "onUpdate:modelValue"]), unref(r2) > 0 && unref(r2) < 100 ? (openBlock(), createBlock(ap, { key: 1, modelValue: unref(r2), "onUpdate:modelValue": (e5) => isRef(r2) ? r2.value = e5 : null, color: "primary", height: "25" }, { default: withCtx(() => [createVNode("strong", null, toDisplayString(Math.ceil(unref(r2))) + "%", 1)]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true), createVNode(Lp, { color: "primary", block: "", loading: unref($2), disabled: unref($2), class: "mt-4", onClick: L2 }, { default: withCtx(() => [createTextVNode(toDisplayString(unref($2) ? "\u8F6C\u6362\u4E2D..." : "\u5F00\u59CB\u8F6C\u6362"), 1)]), _: 1 }, 8, ["loading", "disabled"])];
        unref(d2) ? a5(`<p data-v-3c51ae69${o5}>\u6E90\u6587\u4EF6\u683C\u5F0F: ${ssrInterpolate(unref(d2))}</p>`) : a5("<!---->"), a5(ssrRenderComponent(Ie, { modelValue: unref(c2), "onUpdate:modelValue": (e5) => isRef(c2) ? c2.value = e5 : null, items: B2, label: "\u76EE\u6807\u683C\u5F0F", class: "mb-4" }, null, t3, o5)), a5(ssrRenderComponent(Ie, { modelValue: unref(y2), "onUpdate:modelValue": (e5) => isRef(y2) ? y2.value = e5 : null, items: unref(M2), label: "\u89C6\u9891\u7F16\u7801", class: "mb-4" }, null, t3, o5)), a5(ssrRenderComponent(Ie, { modelValue: unref(I2), "onUpdate:modelValue": (e5) => isRef(I2) ? I2.value = e5 : null, items: unref(j2), label: "\u97F3\u9891\u7F16\u7801", class: "mb-4" }, null, t3, o5)), a5(ssrRenderComponent(Ie, { modelValue: unref(R2), "onUpdate:modelValue": (e5) => isRef(R2) ? R2.value = e5 : null, items: D2, label: "\u8F6C\u6362\u8D28\u91CF", class: "mb-4" }, null, t3, o5)), a5(ssrRenderComponent(K, { modelValue: unref(P2), "onUpdate:modelValue": (e5) => isRef(P2) ? P2.value = e5 : null, min: 500, max: 8e3, step: 500, label: "\u89C6\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, t3, o5)), a5(ssrRenderComponent(K, { modelValue: unref(T2), "onUpdate:modelValue": (e5) => isRef(T2) ? T2.value = e5 : null, min: 64, max: 320, step: 32, label: "\u97F3\u9891\u6BD4\u7279\u7387 (Kbps)", "thumb-label": "", class: "mb-4" }, null, t3, o5)), unref(r2) > 0 && unref(r2) < 100 ? a5(ssrRenderComponent(ap, { modelValue: unref(r2), "onUpdate:modelValue": (e5) => isRef(r2) ? r2.value = e5 : null, color: "primary", height: "25" }, { default: withCtx((e5, a6, t4, o6) => {
          if (!a6) return [createVNode("strong", null, toDisplayString(Math.ceil(unref(r2))) + "%", 1)];
          a6(`<strong data-v-3c51ae69${o6}>${ssrInterpolate(Math.ceil(unref(r2)))}%</strong>`);
        }), _: 1 }, t3, o5)) : a5("<!---->"), a5(ssrRenderComponent(Lp, { color: "primary", block: "", loading: unref($2), disabled: unref($2), class: "mt-4", onClick: L2 }, { default: withCtx((e5, l2, a6, t4) => {
          if (!l2) return [createTextVNode(toDisplayString(unref($2) ? "\u8F6C\u6362\u4E2D..." : "\u5F00\u59CB\u8F6C\u6362"), 1)];
          l2(`${ssrInterpolate(unref($2) ? "\u8F6C\u6362\u4E2D..." : "\u5F00\u59CB\u8F6C\u6362")}`);
        }), _: 1 }, t3, o5));
      }), _: 1 }, t2, o4));
    }), _: 1 }, o3)), a3("</div>")) : a3("<!---->"), a3("</div>"), unref(u2) ? (a3('<div class="video-container mt-4" data-v-3c51ae69>'), a3(ssrRenderComponent(Wp, null, { default: withCtx((e3, a4, t2, o4) => {
      if (!a4) return [createVNode(Rp, null, { default: withCtx(() => [createTextVNode("\u8F6C\u6362\u5B8C\u6210")]), _: 1 }), createVNode(Gp, null, { default: withCtx(() => [createVNode("video", { src: unref(u2), controls: "", class: "w-100" }, null, 8, ["src"]), createVNode(Lp, { color: "primary", block: "", class: "mt-4", onClick: H2 }, { default: withCtx(() => [createTextVNode(" \u4E0B\u8F7D\u8F6C\u6362\u540E\u7684\u89C6\u9891 ")]), _: 1 })]), _: 1 })];
      a4(ssrRenderComponent(Rp, null, { default: withCtx((e4, l2, a5, t3) => {
        if (!l2) return [createTextVNode("\u8F6C\u6362\u5B8C\u6210")];
        l2("\u8F6C\u6362\u5B8C\u6210");
      }), _: 1 }, t2, o4)), a4(ssrRenderComponent(Gp, null, { default: withCtx((e4, a5, t3, o5) => {
        if (!a5) return [createVNode("video", { src: unref(u2), controls: "", class: "w-100" }, null, 8, ["src"]), createVNode(Lp, { color: "primary", block: "", class: "mt-4", onClick: H2 }, { default: withCtx(() => [createTextVNode(" \u4E0B\u8F7D\u8F6C\u6362\u540E\u7684\u89C6\u9891 ")]), _: 1 })];
        a5(`<video${ssrRenderAttr("src", unref(u2))} controls class="w-100" data-v-3c51ae69${o5}></video>`), a5(ssrRenderComponent(Lp, { color: "primary", block: "", class: "mt-4", onClick: H2 }, { default: withCtx((e5, l2, a6, t4) => {
          if (!l2) return [createTextVNode(" \u4E0B\u8F7D\u8F6C\u6362\u540E\u7684\u89C6\u9891 ")];
          l2(" \u4E0B\u8F7D\u8F6C\u6362\u540E\u7684\u89C6\u9891 ");
        }), _: 1 }, t3, o5));
      }), _: 1 }, t2, o4));
    }), _: 1 }, o3)), a3("</div>")) : a3("<!---->"), a3("</div>");
  };
} }), Ae = Re.setup;
Re.setup = (e2, l2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/compressed.vue"), Ae ? Ae(e2, l2) : void 0;
};
const Pe = o(Re, [["__scopeId", "data-v-3c51ae69"]]);

export { Pe as default };
