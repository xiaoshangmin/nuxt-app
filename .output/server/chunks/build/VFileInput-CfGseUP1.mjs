import { computed, ref, watch, createVNode, mergeProps, Fragment, shallowRef, unref, nextTick, withDirectives, vShow, toRef, resolveDirective, inject } from 'vue';
import { g as vu, f as nu, W as Lu, k as Eu, Z as Ui, aJ as zi, I as _f, m as Cu, q as Vi, a2 as ru, a8 as Dd, a9 as rd, C as yc, aa as Nu, l as su, a3 as au, G as hi, aA as Ri, aB as Ni, $ as vd, aC as lp, E as pd, aD as cd, _ as ud, aE as Cs, aF as Es, aI as mu, aG as Ii, aH as ip, as as td, S as od, Y as ns, am as Op, an as yd, D as Td, ao as Cd, ap as Kd, aq as Vd, ar as pp, R as Nd, X as qd, at as Vp, J as mc, L as dd, az as rp, T as ou, U as es, a6 as uc, a4 as Fi, a5 as Od, a7 as ad, a0 as fd, a1 as $c, K as Pd, ah as Vc, au as zd, av as fp, aw as Md, ax as bd, ay as hd, ab as tc, ac as Ud, ad as Ec, ae as lc, af as Zc, ag as Rd, ai as ec, aj as os, ak as Ci, al as du } from './server.mjs';

const $e = nu({ text: String, onClick: es(), ...ou(), ...mc() }, "VLabel"), ze = vu()({ name: "VLabel", props: $e(), setup(l2, a2) {
  let { slots: n2 } = a2;
  return Cu(() => {
    var a3;
    return createVNode("label", { class: ["v-label", { "v-label--clickable": !!l2.onClick }, l2.class], style: l2.style, onClick: l2.onClick }, [l2.text, null == (a3 = n2.default) ? void 0 : a3.call(n2)]);
  }), {};
} });
function De(l2) {
  const { t: a2 } = Lu();
  return { InputIcon: function(n2) {
    var _a;
    let { name: t2 } = n2;
    const i2 = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[t2], s2 = l2[`onClick:${t2}`], o2 = s2 && i2 ? a2(`$vuetify.input.${i2}`, (_a = l2.label) != null ? _a : "") : void 0;
    return createVNode(qd, { icon: l2[`${t2}Icon`], "aria-label": o2, onClick: s2, onKeydown: function(e2) {
      "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), e2.stopPropagation(), ns(s2, new PointerEvent("click", e2)));
    } }, null);
  } };
}
const Fe = nu({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ou(), ...fd({ transition: { component: $c, leaveAbsolute: true, group: true } }) }, "VMessages"), Me = vu()({ name: "VMessages", props: Fe(), setup(a2, n2) {
  let { slots: t2 } = n2;
  const i2 = computed(() => Ui(a2.messages)), { textColorClasses: s2, textColorStyles: o2 } = ud(computed(() => a2.color));
  return Cu(() => createVNode(vd, { transition: a2.transition, tag: "div", class: ["v-messages", s2.value, a2.class], style: [o2.value, a2.style] }, { default: () => [a2.active && i2.value.map((l2, a3) => createVNode("div", { class: "v-messages__message", key: `${a3}-${i2.value}` }, [t2.message ? t2.message({ message: l2 }) : l2]))] })), {};
} }), Re = nu({ focused: Boolean, "onUpdate:focused": es() }, "focus");
function Ee(e2) {
  let a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ru();
  const n2 = Eu(e2, "focused");
  return { focusClasses: computed(() => ({ [`${a2}--focused`]: n2.value })), isFocused: n2, focus: function() {
    n2.value = true;
  }, blur: function() {
    n2.value = false;
  } };
}
const Pe = Symbol.for("vuetify:form");
function Le(e2) {
  const n2 = inject(Pe, null);
  return { ...n2, isReadonly: computed(() => {
    var _a;
    return !!((_a = null == e2 ? void 0 : e2.readonly) != null ? _a : null == n2 ? void 0 : n2.isReadonly.value);
  }), isDisabled: computed(() => {
    var _a;
    return !!((_a = null == e2 ? void 0 : e2.disabled) != null ? _a : null == n2 ? void 0 : n2.isDisabled.value);
  }) };
}
const We = nu({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Re() }, "validation");
const He = nu({ id: String, appendIcon: uc, centerAffix: { type: Boolean, default: true }, prependIcon: uc, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e2) => ["horizontal", "vertical"].includes(e2) }, "onClick:prepend": es(), "onClick:append": es(), ...ou(), ...Od(), ...Fi(ad(), ["maxWidth", "minWidth", "width"]), ...mc(), ...We() }, "VInput"), Oe = vu()({ name: "VInput", props: { ...He() }, emits: { "update:modelValue": (e2) => true }, setup(a2, r2) {
  let { attrs: u2, slots: d2, emit: v2 } = r2;
  const { densityClasses: c2 } = Dd(a2), { dimensionStyles: p2 } = rd(a2), { themeClasses: f2 } = yc(a2), { rtlClasses: y2 } = Nu(), { InputIcon: m2 } = De(a2), b2 = su(), h2 = computed(() => a2.id || `input-${b2}`), k2 = computed(() => `${h2.value}-messages`), { errorMessages: C2, isDirty: I2, isDisabled: x2, isReadonly: V2, isPristine: _2, isValid: B2, isValidating: F2, reset: M2, resetValidation: R2, validate: E2, validationClasses: O2 } = function(e2) {
    let a3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ru(), r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : su();
    const u3 = Eu(e2, "modelValue"), d3 = computed(() => void 0 === e2.validationValue ? u3.value : e2.validationValue), v3 = Le(e2), c3 = ref([]), p3 = shallowRef(true), f3 = computed(() => !(!Ui("" === u3.value ? null : u3.value).length && !Ui("" === d3.value ? null : d3.value).length)), y3 = computed(() => {
      var l2;
      return (null == (l2 = e2.errorMessages) ? void 0 : l2.length) ? Ui(e2.errorMessages).concat(c3.value).slice(0, Math.max(0, +e2.maxErrors)) : c3.value;
    }), g2 = computed(() => {
      var _a, _b;
      var l2;
      let a4 = ((_a = e2.validateOn) != null ? _a : null == (l2 = v3.validateOn) ? void 0 : l2.value) || "input";
      "lazy" === a4 && (a4 = "input lazy"), "eager" === a4 && (a4 = "input eager");
      const n2 = new Set((_b = null == a4 ? void 0 : a4.split(" ")) != null ? _b : []);
      return { input: n2.has("input"), blur: n2.has("blur") || n2.has("input") || n2.has("invalid-input"), invalidInput: n2.has("invalid-input"), lazy: n2.has("lazy"), eager: n2.has("eager") };
    }), m3 = computed(() => {
      var l2;
      return !e2.error && !(null == (l2 = e2.errorMessages) ? void 0 : l2.length) && (!e2.rules.length || (p3.value ? !c3.value.length && !g2.value.lazy || null : !c3.value.length));
    }), b3 = shallowRef(false), h3 = computed(() => ({ [`${a3}--error`]: false === m3.value, [`${a3}--dirty`]: f3.value, [`${a3}--disabled`]: v3.isDisabled.value, [`${a3}--readonly`]: v3.isReadonly.value }));
    au("validation");
    const k3 = computed(() => {
      var _a;
      return (_a = e2.name) != null ? _a : unref(r3);
    });
    async function C3() {
      p3.value = true, g2.value.lazy ? c3.value = [] : await I3(!g2.value.eager);
    }
    async function I3() {
      var _a;
      let l2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      const a4 = [];
      b3.value = true;
      for (const n2 of e2.rules) {
        if (a4.length >= +((_a = e2.maxErrors) != null ? _a : 1)) break;
        const l3 = "function" == typeof n2 ? n2 : () => n2, t2 = await l3(d3.value);
        true !== t2 && (false !== t2 && "string" != typeof t2 || a4.push(t2 || ""));
      }
      return c3.value = a4, b3.value = false, p3.value = l2, c3.value;
    }
    return hi(() => g2.value.input || g2.value.invalidInput && false === m3.value, () => {
      watch(d3, () => {
        if (null != d3.value) I3();
        else if (e2.focused) {
          const l2 = watch(() => e2.focused, (e3) => {
            e3 || I3(), l2();
          });
        }
      });
    }), hi(() => g2.value.blur, () => {
      watch(() => e2.focused, (e3) => {
        e3 || I3();
      });
    }), watch([m3, y3], () => {
      var e3;
      null == (e3 = v3.update) || e3.call(v3, k3.value, m3.value, y3.value);
    }), { errorMessages: y3, isDirty: f3, isDisabled: v3.isDisabled, isReadonly: v3.isReadonly, isPristine: p3, isValid: m3, isValidating: b3, reset: async function() {
      u3.value = null, await nextTick(), await C3();
    }, resetValidation: C3, validate: I3, validationClasses: h3 };
  }(a2, "v-input", h2), j2 = computed(() => ({ id: h2, messagesId: k2, isDirty: I2, isDisabled: x2, isReadonly: V2, isPristine: _2, isValid: B2, isValidating: F2, reset: M2, resetValidation: R2, validate: E2 })), N2 = computed(() => {
    var e2;
    return (null == (e2 = a2.errorMessages) ? void 0 : e2.length) || !_2.value && C2.value.length ? C2.value : a2.hint && (a2.persistentHint || a2.focused) ? a2.hint : a2.messages;
  });
  return Cu(() => {
    var l2, n2, t2, i2;
    const s2 = !(!d2.prepend && !a2.prependIcon), o2 = !(!d2.append && !a2.appendIcon), r3 = N2.value.length > 0, u3 = !a2.hideDetails || "auto" === a2.hideDetails && (r3 || !!d2.details);
    return createVNode("div", { class: ["v-input", `v-input--${a2.direction}`, { "v-input--center-affix": a2.centerAffix, "v-input--hide-spin-buttons": a2.hideSpinButtons }, c2.value, f2.value, y2.value, O2.value, a2.class], style: [p2.value, a2.style] }, [s2 && createVNode("div", { key: "prepend", class: "v-input__prepend" }, [null == (l2 = d2.prepend) ? void 0 : l2.call(d2, j2.value), a2.prependIcon && createVNode(m2, { key: "prepend-icon", name: "prepend" }, null)]), d2.default && createVNode("div", { class: "v-input__control" }, [null == (n2 = d2.default) ? void 0 : n2.call(d2, j2.value)]), o2 && createVNode("div", { key: "append", class: "v-input__append" }, [a2.appendIcon && createVNode(m2, { key: "append-icon", name: "append" }, null), null == (t2 = d2.append) ? void 0 : t2.call(d2, j2.value)]), u3 && createVNode("div", { id: k2.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [createVNode(Me, { active: r3, messages: N2.value }, { message: d2.message }), null == (i2 = d2.details) ? void 0 : i2.call(d2, j2.value)])]);
  }), { reset: M2, resetValidation: R2, validate: E2, isValid: B2, errorMessages: C2 };
} });
function je(e2, l2) {
  return (null == l2 ? void 0 : l2[e2 ? "offsetWidth" : "offsetHeight"]) || 0;
}
const Ne = Symbol.for("vuetify:v-slide-group"), Te = nu({ centerActive: Boolean, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Ne }, nextIcon: { type: uc, default: "$next" }, prevIcon: { type: uc, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e2) => "boolean" == typeof e2 || ["always", "desktop", "mobile"].includes(e2) }, ...ou(), ...ec({ mobile: null }), ...Vc(), ...Rd({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Ge = vu()({ name: "VSlideGroup", props: Te(), emits: { "update:modelValue": (e2) => true }, setup(a2, n2) {
  let { slots: i2 } = n2;
  const { isRtl: s2 } = Nu(), { displayClasses: o2, mobile: r2 } = tc(a2), u2 = Ud(a2, a2.symbol), d2 = shallowRef(false), v2 = shallowRef(0), c2 = shallowRef(0);
  shallowRef(0);
  const p2 = computed(() => "horizontal" === a2.direction), { resizeRef: f2 } = Ec(), { resizeRef: y2 } = Ec();
  lc(), computed(() => ({ container: f2.el, duration: 200, easing: "easeOutQuart" })), computed(() => u2.selected.value.length ? u2.items.value.findIndex((e2) => e2.id === u2.selected.value[0]) : -1), computed(() => u2.selected.value.length ? u2.items.value.findIndex((e2) => e2.id === u2.selected.value[u2.selected.value.length - 1]) : -1);
  const m2 = shallowRef(false);
  function b2(e2, l2) {
    !function(e3) {
      let { selectedElement: l3, containerElement: a3, isRtl: n3, isHorizontal: t2 } = e3;
      je(t2, a3); (function(e4, l4, a4) {
        if (!a4) return 0;
        const { scrollLeft: n4, offsetWidth: t3, scrollWidth: i4 } = a4;
        return e4 ? l4 ? i4 - t3 + n4 : n4 : a4.scrollTop;
      })(t2, n3, a3); je(t2, l3); (function(e4, l4) {
        return (null == l4 ? void 0 : l4[e4 ? "offsetLeft" : "offsetTop"]) || 0;
      })(t2, l3);
    }({ containerElement: f2.el, isHorizontal: p2.value, isRtl: s2.value, selectedElement: e2 });
  }
  function h2(e2) {
    const { scrollTop: l2, scrollLeft: a3 } = e2.target;
    v2.value = p2.value ? a3 : l2;
  }
  function k2(e2) {
    if (m2.value = true, d2.value && y2.el) {
      for (const l2 of e2.composedPath()) for (const e3 of y2.el.children) if (e3 === l2) return void b2(e3);
    }
  }
  function I2(e2) {
    m2.value = false;
  }
  let S2 = false;
  function x2(e2) {
    var l2;
    S2 || m2.value || e2.relatedTarget && (null == (l2 = y2.el) ? void 0 : l2.contains(e2.relatedTarget)) || A2(), S2 = false;
  }
  function V2() {
    S2 = true;
  }
  function _2(e2) {
    function l2(l3) {
      e2.preventDefault(), A2(l3);
    }
    y2.el && (p2.value ? "ArrowRight" === e2.key ? l2(s2.value ? "prev" : "next") : "ArrowLeft" === e2.key && l2(s2.value ? "next" : "prev") : "ArrowDown" === e2.key ? l2("next") : "ArrowUp" === e2.key && l2("prev"), "Home" === e2.key ? l2("first") : "End" === e2.key && l2("last"));
  }
  function B2(e2, l2) {
    if (!e2) return;
    let a3 = e2;
    do {
      a3 = null == a3 ? void 0 : a3["next" === l2 ? "nextElementSibling" : "previousElementSibling"];
    } while (null == a3 ? void 0 : a3.hasAttribute("disabled"));
    return a3;
  }
  function A2(e2) {
    if (!y2.el) return;
    let l2;
    if (e2) if ("next" === e2) {
      if (l2 = B2(y2.el.querySelector(":focus"), e2), !l2) return A2("first");
    } else if ("prev" === e2) {
      if (l2 = B2(y2.el.querySelector(":focus"), e2), !l2) return A2("last");
    } else "first" === e2 ? (l2 = y2.el.firstElementChild, (null == l2 ? void 0 : l2.hasAttribute("disabled")) && (l2 = B2(l2, "next"))) : "last" === e2 && (l2 = y2.el.lastElementChild, (null == l2 ? void 0 : l2.hasAttribute("disabled")) && (l2 = B2(l2, "prev")));
    else {
      l2 = os(y2.el)[0];
    }
    l2 && l2.focus({ preventScroll: true });
  }
  function w2(e2) {
    p2.value && s2.value ? -1 : 1;
    c2.value;
    if (v2.value, p2.value && s2.value && f2.el) {
      const { scrollWidth: e3, offsetWidth: l3 } = f2.el;
    }
  }
  const $2 = computed(() => ({ next: u2.next, prev: u2.prev, select: u2.select, isSelected: u2.isSelected })), z2 = computed(() => {
    switch (a2.showArrows) {
      case "always":
        return true;
      case "desktop":
        return !r2.value;
      case true:
        return d2.value || Math.abs(v2.value) > 0;
      case "mobile":
        return r2.value || d2.value || Math.abs(v2.value) > 0;
      default:
        return !r2.value && (d2.value || Math.abs(v2.value) > 0);
    }
  }), D2 = computed(() => Math.abs(v2.value) > 1), F2 = computed(() => {
    if (!f2.value) return false;
    const e2 = function(e3, l3) {
      return (null == l3 ? void 0 : l3[e3 ? "scrollWidth" : "scrollHeight"]) || 0;
    }(p2.value, f2.el), l2 = function(e3, l3) {
      return (null == l3 ? void 0 : l3[e3 ? "clientWidth" : "clientHeight"]) || 0;
    }(p2.value, f2.el);
    return e2 - l2 - Math.abs(v2.value) > 1;
  });
  return Cu(() => createVNode(a2.tag, { class: ["v-slide-group", { "v-slide-group--vertical": !p2.value, "v-slide-group--has-affixes": z2.value, "v-slide-group--is-overflowing": d2.value }, o2.value, a2.class], style: a2.style, tabindex: m2.value || u2.selected.value.length ? -1 : 0, onFocus: x2 }, { default: () => {
    var _a, _b;
    var l2, n3, t2;
    return [z2.value && createVNode("div", { key: "prev", class: ["v-slide-group__prev", { "v-slide-group__prev--disabled": !D2.value }], onMousedown: V2, onClick: () => D2.value && w2() }, [(_a = null == (l2 = i2.prev) ? void 0 : l2.call(i2, $2.value)) != null ? _a : createVNode(Zc, null, { default: () => [createVNode(qd, { icon: s2.value ? a2.nextIcon : a2.prevIcon }, null)] })]), createVNode("div", { key: "container", ref: f2, class: "v-slide-group__container", onScroll: h2 }, [createVNode("div", { ref: y2, class: "v-slide-group__content", onFocusin: k2, onFocusout: I2, onKeydown: _2 }, [null == (n3 = i2.default) ? void 0 : n3.call(i2, $2.value)])]), z2.value && createVNode("div", { key: "next", class: ["v-slide-group__next", { "v-slide-group__next--disabled": !F2.value }], onMousedown: V2, onClick: () => F2.value && w2() }, [(_b = null == (t2 = i2.next) ? void 0 : t2.call(i2, $2.value)) != null ? _b : createVNode(Zc, null, { default: () => [createVNode(qd, { icon: s2.value ? a2.prevIcon : a2.nextIcon }, null)] })])];
  } })), { selected: u2.selected, scrollTo: w2, scrollOffset: v2, focus: A2, hasPrev: D2, hasNext: F2 };
} }), qe = Symbol.for("vuetify:v-chip-group"), Ke = nu({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Ci }, ...Te(), ...ou(), ...Rd({ selectedClass: "v-chip--selected" }), ...Vc(), ...mc(), ...Pd({ variant: "tonal" }) }, "VChipGroup");
vu()({ name: "VChipGroup", props: Ke(), emits: { "update:modelValue": (e2) => true }, setup(l2, a2) {
  let { slots: n2 } = a2;
  const { themeClasses: t2 } = yc(l2), { isSelected: i2, select: s2, next: o2, prev: d2, selected: v2 } = Ud(l2, qe);
  return du({ VChip: { color: toRef(l2, "color"), disabled: toRef(l2, "disabled"), filter: toRef(l2, "filter"), variant: toRef(l2, "variant") } }), Cu(() => {
    const a3 = Ge.filterProps(l2);
    return createVNode(Ge, mergeProps(a3, { class: ["v-chip-group", { "v-chip-group--column": l2.column }, t2.value, l2.class], style: l2.style }), { default: () => {
      var e2;
      return [null == (e2 = n2.default) ? void 0 : e2.call(n2, { isSelected: i2, select: s2, next: o2, prev: d2, selected: v2.value })];
    } });
  }), {};
} });
const Ue = nu({ activeClass: String, appendAvatar: String, appendIcon: uc, closable: Boolean, closeIcon: { type: uc, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: uc, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: uc, ripple: { type: [Boolean, Object], default: true }, text: String, modelValue: { type: Boolean, default: true }, onClick: es(), onClickOnce: es(), ...hd(), ...ou(), ...Od(), ...bd(), ...Md(), ...dd(), ...fp(), ...zd(), ...Vc({ tag: "span" }), ...mc(), ...Pd({ variant: "tonal" }) }, "VChip"), Je = vu()({ name: "VChip", directives: { Ripple: Op }, props: Ue(), emits: { "click:close": (e2) => true, "update:modelValue": (e2) => true, "group:selected": (e2) => true, click: (e2) => true }, setup(a2, n2) {
  let { attrs: t2, emit: i2, slots: s2 } = n2;
  const { t: o2 } = Lu(), { borderClasses: r2 } = yd(a2), { colorClasses: f2, colorStyles: y2, variantClasses: g2 } = Td(a2), { densityClasses: m2 } = Dd(a2), { elevationClasses: b2 } = Cd(a2), { roundedClasses: h2 } = pd(a2), { sizeClasses: I2 } = Kd(a2), { themeClasses: S2 } = yc(a2), x2 = Eu(a2, "modelValue"), V2 = Vd(a2, qe, false), _2 = pp(a2, t2), B2 = computed(() => false !== a2.link && _2.isLink.value), A2 = computed(() => !a2.disabled && false !== a2.link && (!!V2 || a2.link || _2.isClickable.value)), $2 = computed(() => ({ "aria-label": o2(a2.closeLabel), onClick(e2) {
    e2.preventDefault(), e2.stopPropagation(), x2.value = false, i2("click:close", e2);
  } }));
  function z2(e2) {
    var l2;
    i2("click", e2), A2.value && (null == (l2 = _2.navigate) || l2.call(_2, e2), null == V2 || V2.toggle());
  }
  function D2(e2) {
    "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), z2(e2));
  }
  return () => {
    var l2;
    const n3 = _2.isLink.value ? "a" : a2.tag, t3 = !(!a2.appendIcon && !a2.appendAvatar), i3 = !(!t3 && !s2.append), o3 = !(!s2.close && !a2.closable), k2 = !(!s2.filter && !a2.filter) && V2, w2 = !(!a2.prependIcon && !a2.prependAvatar), F2 = !(!w2 && !s2.prepend), M2 = !V2 || V2.isSelected.value;
    return x2.value && withDirectives(createVNode(n3, mergeProps({ class: ["v-chip", { "v-chip--disabled": a2.disabled, "v-chip--label": a2.label, "v-chip--link": A2.value, "v-chip--filter": k2, "v-chip--pill": a2.pill, [`${a2.activeClass}`]: a2.activeClass && (null == (l2 = _2.isActive) ? void 0 : l2.value) }, S2.value, r2.value, M2 ? f2.value : void 0, m2.value, b2.value, h2.value, I2.value, g2.value, null == V2 ? void 0 : V2.selectedClass.value, a2.class], style: [M2 ? y2.value : void 0, a2.style], disabled: a2.disabled || void 0, draggable: a2.draggable, tabindex: A2.value ? 0 : void 0, onClick: z2, onKeydown: A2.value && !B2.value && D2 }, _2.linkProps), { default: () => {
      var _a;
      var l3;
      return [Nd(A2.value, "v-chip"), k2 && createVNode(td, { key: "filter" }, { default: () => [withDirectives(createVNode("div", { class: "v-chip__filter" }, [s2.filter ? createVNode(od, { key: "filter-defaults", disabled: !a2.filterIcon, defaults: { VIcon: { icon: a2.filterIcon } } }, s2.filter) : createVNode(qd, { key: "filter-icon", icon: a2.filterIcon }, null)]), [[vShow, V2.isSelected.value]])] }), F2 && createVNode("div", { key: "prepend", class: "v-chip__prepend" }, [s2.prepend ? createVNode(od, { key: "prepend-defaults", disabled: !w2, defaults: { VAvatar: { image: a2.prependAvatar, start: true }, VIcon: { icon: a2.prependIcon, start: true } } }, s2.prepend) : createVNode(Fragment, null, [a2.prependIcon && createVNode(qd, { key: "prepend-icon", icon: a2.prependIcon, start: true }, null), a2.prependAvatar && createVNode(Vp, { key: "prepend-avatar", image: a2.prependAvatar, start: true }, null)])]), createVNode("div", { class: "v-chip__content", "data-no-activator": "" }, [(_a = null == (l3 = s2.default) ? void 0 : l3.call(s2, { isSelected: null == V2 ? void 0 : V2.isSelected.value, selectedClass: null == V2 ? void 0 : V2.selectedClass.value, select: null == V2 ? void 0 : V2.select, toggle: null == V2 ? void 0 : V2.toggle, value: null == V2 ? void 0 : V2.value.value, disabled: a2.disabled })) != null ? _a : a2.text]), i3 && createVNode("div", { key: "append", class: "v-chip__append" }, [s2.append ? createVNode(od, { key: "append-defaults", disabled: !t3, defaults: { VAvatar: { end: true, image: a2.appendAvatar }, VIcon: { end: true, icon: a2.appendIcon } } }, s2.append) : createVNode(Fragment, null, [a2.appendIcon && createVNode(qd, { key: "append-icon", end: true, icon: a2.appendIcon }, null), a2.appendAvatar && createVNode(Vp, { key: "append-avatar", end: true, image: a2.appendAvatar }, null)])]), o3 && createVNode("button", mergeProps({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, $2.value), [s2.close ? createVNode(od, { key: "close-defaults", defaults: { VIcon: { icon: a2.closeIcon, size: "x-small" } } }, s2.close) : createVNode(qd, { key: "close-icon", icon: a2.closeIcon, size: "x-small" }, null)])];
    } }), [[resolveDirective("ripple"), A2.value && a2.ripple, null]]);
  };
} }), Qe = nu({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ou(), ...fd({ transition: { component: $c } }) }, "VCounter"), Xe = vu()({ name: "VCounter", functional: true, props: Qe(), setup(a2, n2) {
  let { slots: t2 } = n2;
  const i2 = computed(() => a2.max ? `${a2.value} / ${a2.max}` : String(a2.value));
  return Cu(() => createVNode(vd, { transition: a2.transition }, { default: () => [withDirectives(createVNode("div", { class: ["v-counter", { "text-error": a2.max && !a2.disabled && parseFloat(a2.value) > parseFloat(a2.max) }, a2.class], style: a2.style }, [t2.default ? t2.default({ counter: i2.value, max: a2.max, value: a2.value }) : i2.value]), [[vShow, a2.active]])] })), {};
} }), Ye = nu({ floating: Boolean, ...ou() }, "VFieldLabel"), Ze = vu()({ name: "VFieldLabel", props: Ye(), setup(l2, a2) {
  let { slots: n2 } = a2;
  return Cu(() => createVNode(ze, { class: ["v-field-label", { "v-field-label--floating": l2.floating }, l2.class], style: l2.style, "aria-hidden": l2.floating || void 0 }, n2)), {};
} }), el = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ll = nu({ appendInnerIcon: uc, bgColor: String, clearable: Boolean, clearIcon: { type: uc, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: uc, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e2) => el.includes(e2) }, "onClick:clear": es(), "onClick:appendInner": es(), "onClick:prependInner": es(), ...ou(), ...rp(), ...dd(), ...mc() }, "VField"), al = vu()({ name: "VField", inheritAttrs: false, props: { id: String, ...Re(), ...ll() }, emits: { "update:focused": (e2) => true, "update:modelValue": (e2) => true }, setup(a2, t2) {
  let { attrs: i2, emit: o2, slots: p2 } = t2;
  const { themeClasses: f2 } = yc(a2), { loaderClasses: y2 } = lp(a2), { focusClasses: m2, isFocused: b2, focus: h2, blur: k2 } = Ee(a2), { InputIcon: C2 } = De(a2), { roundedClasses: I2 } = pd(a2), { rtlClasses: S2 } = Nu(), V2 = computed(() => a2.dirty || a2.active), _2 = computed(() => !(!a2.label && !p2.label)), B2 = computed(() => !a2.singleLine && _2.value), A2 = su(), w2 = computed(() => a2.id || `input-${A2}`), z2 = computed(() => `${w2.value}-messages`), D2 = ref(), F2 = ref(), M2 = ref(), R2 = computed(() => ["plain", "underlined"].includes(a2.variant)), { backgroundColorClasses: E2, backgroundColorStyles: P2 } = cd(toRef(a2, "bgColor")), { textColorClasses: L2, textColorStyles: O2 } = ud(computed(() => a2.error || a2.disabled ? void 0 : V2.value && b2.value ? a2.color : a2.baseColor));
  watch(V2, (e2) => {
    if (B2.value) {
      const l2 = D2.value.$el, a3 = F2.value.$el;
      requestAnimationFrame(() => {
        const n2 = Cs(l2), t3 = a3.getBoundingClientRect(), i3 = t3.x - n2.x, s2 = t3.y - n2.y - (n2.height / 2 - t3.height / 2), o3 = t3.width / 0.75, r2 = Math.abs(o3 - n2.width) > 1 ? { maxWidth: Ii(o3) } : void 0, u2 = getComputedStyle(l2), d2 = getComputedStyle(a3), v2 = 1e3 * parseFloat(u2.transitionDuration) || 150, c2 = parseFloat(d2.getPropertyValue("--v-field-label-scale")), p3 = d2.getPropertyValue("color");
        l2.style.visibility = "visible", a3.style.visibility = "hidden", Es(l2, { transform: `translate(${i3}px, ${s2}px) scale(${c2})`, color: p3, ...r2 }, { duration: v2, easing: mu, direction: e2 ? "normal" : "reverse" }).finished.then(() => {
          l2.style.removeProperty("visibility"), a3.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const j2 = computed(() => ({ isActive: V2, isFocused: b2, controlRef: M2, blur: k2, focus: h2 }));
  function N2(e2) {
    e2.target !== (void 0).activeElement && e2.preventDefault();
  }
  return Cu(() => {
    var _a;
    var l2, n2, t3;
    const s2 = "outlined" === a2.variant, o3 = !(!p2["prepend-inner"] && !a2.prependInnerIcon), r2 = !(!a2.clearable && !p2.clear || a2.disabled), g2 = !!(p2["append-inner"] || a2.appendInnerIcon || r2), b3 = () => p2.label ? p2.label({ ...j2.value, label: a2.label, props: { for: w2.value } }) : a2.label;
    return createVNode("div", mergeProps({ class: ["v-field", { "v-field--active": V2.value, "v-field--appended": g2, "v-field--center-affix": (_a = a2.centerAffix) != null ? _a : !R2.value, "v-field--disabled": a2.disabled, "v-field--dirty": a2.dirty, "v-field--error": a2.error, "v-field--flat": a2.flat, "v-field--has-background": !!a2.bgColor, "v-field--persistent-clear": a2.persistentClear, "v-field--prepended": o3, "v-field--reverse": a2.reverse, "v-field--single-line": a2.singleLine, "v-field--no-label": !b3(), [`v-field--variant-${a2.variant}`]: true }, f2.value, E2.value, m2.value, y2.value, I2.value, S2.value, a2.class], style: [P2.value, a2.style], onClick: N2 }, i2), [createVNode("div", { class: "v-field__overlay" }, null), createVNode(ip, { name: "v-field", active: !!a2.loading, color: a2.error ? "error" : "string" == typeof a2.loading ? a2.loading : a2.color }, { default: p2.loader }), o3 && createVNode("div", { key: "prepend", class: "v-field__prepend-inner" }, [a2.prependInnerIcon && createVNode(C2, { key: "prepend-icon", name: "prependInner" }, null), null == (l2 = p2["prepend-inner"]) ? void 0 : l2.call(p2, j2.value)]), createVNode("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(a2.variant) && B2.value && createVNode(Ze, { key: "floating-label", ref: F2, class: [L2.value], floating: true, for: w2.value, style: O2.value }, { default: () => [b3()] }), _2.value && createVNode(Ze, { key: "label", ref: D2, for: w2.value }, { default: () => [b3()] }), null == (n2 = p2.default) ? void 0 : n2.call(p2, { ...j2.value, props: { id: w2.value, class: "v-field__input", "aria-describedby": z2.value }, focus: h2, blur: k2 })]), r2 && createVNode(td, { key: "clear" }, { default: () => [withDirectives(createVNode("div", { class: "v-field__clearable", onMousedown: (e2) => {
      e2.preventDefault(), e2.stopPropagation();
    } }, [createVNode(od, { defaults: { VIcon: { icon: a2.clearIcon } } }, { default: () => [p2.clear ? p2.clear({ ...j2.value, props: { onFocus: h2, onBlur: k2, onClick: a2["onClick:clear"] } }) : createVNode(C2, { name: "clear", onFocus: h2, onBlur: k2 }, null)] })]), [[vShow, a2.dirty]])] }), g2 && createVNode("div", { key: "append", class: "v-field__append-inner" }, [null == (t3 = p2["append-inner"]) ? void 0 : t3.call(p2, j2.value), a2.appendInnerIcon && createVNode(C2, { key: "append-icon", name: "appendInner" }, null)]), createVNode("div", { class: ["v-field__outline", L2.value], style: O2.value }, [s2 && createVNode(Fragment, null, [createVNode("div", { class: "v-field__outline__start" }, null), B2.value && createVNode("div", { class: "v-field__outline__notch" }, [createVNode(Ze, { ref: F2, floating: true, for: w2.value }, { default: () => [b3()] })]), createVNode("div", { class: "v-field__outline__end" }, null)]), R2.value && B2.value && createVNode(Ze, { ref: F2, floating: true, for: w2.value }, { default: () => [b3()] })])]);
  }), { controlRef: M2 };
} });
function nl(e2) {
  const l2 = Object.keys(al.props).filter((e3) => !Ri(e3) && "class" !== e3 && "style" !== e3);
  return Ni(e2, l2);
}
const tl = nu({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e2) => "boolean" == typeof e2 || [1e3, 1024].includes(Number(e2)) }, ...He({ prependIcon: "$file" }), modelValue: { type: [Array, Object], default: (e2) => e2.multiple ? [] : null, validator: (e2) => Ui(e2).every((e3) => null != e3 && "object" == typeof e3) }, ...ll({ clearable: true }) }, "VFileInput"), il = vu()({ name: "VFileInput", inheritAttrs: false, props: tl(), emits: { "click:control": (e2) => true, "mousedown:control": (e2) => true, "update:focused": (e2) => true, "update:modelValue": (e2) => true }, setup(a2, t2) {
  let { attrs: i2, emit: r2, slots: d2 } = t2;
  const { t: v2 } = Lu(), p2 = Eu(a2, "modelValue", a2.modelValue, (e2) => Ui(e2), (e2) => !a2.multiple && Array.isArray(e2) ? e2[0] : e2), { isFocused: f2, focus: y2, blur: m2 } = Ee(a2), b2 = computed(() => "boolean" != typeof a2.showSize ? a2.showSize : void 0), h2 = computed(() => {
    var _a;
    return ((_a = p2.value) != null ? _a : []).reduce((e2, l2) => {
      let { size: a3 = 0 } = l2;
      return e2 + a3;
    }, 0);
  }), C2 = computed(() => zi(h2.value, b2.value)), x2 = computed(() => {
    var _a;
    return ((_a = p2.value) != null ? _a : []).map((e2) => {
      const { name: l2 = "", size: n2 = 0 } = e2;
      return a2.showSize ? `${l2} (${zi(n2, b2.value)})` : l2;
    });
  }), V2 = computed(() => {
    var _a;
    var e2;
    const l2 = (_a = null == (e2 = p2.value) ? void 0 : e2.length) != null ? _a : 0;
    return a2.showSize ? v2(a2.counterSizeString, l2, C2.value) : v2(a2.counterString, l2);
  }), _2 = ref(), B2 = ref(), A2 = ref(), $2 = computed(() => f2.value || a2.active), z2 = computed(() => ["plain", "underlined"].includes(a2.variant));
  function D2() {
    var e2;
    A2.value !== (void 0).activeElement && (null == (e2 = A2.value) || e2.focus()), f2.value || y2();
  }
  function F2(e2) {
    var l2;
    null == (l2 = A2.value) || l2.click();
  }
  function M2(e2) {
    r2("mousedown:control", e2);
  }
  function R2(e2) {
    var l2;
    null == (l2 = A2.value) || l2.click(), r2("click:control", e2);
  }
  function E2(e2) {
    e2.stopPropagation(), D2(), nextTick(() => {
      p2.value = [], ns(a2["onClick:clear"], e2);
    });
  }
  return watch(p2, (e2) => {
    (!Array.isArray(e2) || !e2.length) && A2.value && (A2.value.value = "");
  }), Cu(() => {
    const l2 = !(!d2.counter && !a2.counter), n2 = !(!l2 && !d2.details), [t3, s2] = Vi(i2), { modelValue: o2, ...r3 } = Oe.filterProps(a2), v3 = nl(a2);
    return createVNode(Oe, mergeProps({ ref: _2, modelValue: p2.value, "onUpdate:modelValue": (e2) => p2.value = e2, class: ["v-file-input", { "v-file-input--chips": !!a2.chips, "v-file-input--hide": a2.hideInput, "v-input--plain-underlined": z2.value }, a2.class], style: a2.style, "onClick:prepend": F2 }, t3, r3, { centerAffix: !z2.value, focused: f2.value }), { ...d2, default: (l3) => {
      let { id: n3, isDisabled: t4, isDirty: i3, isReadonly: o3, isValid: r4 } = l3;
      return createVNode(al, mergeProps({ ref: B2, "prepend-icon": a2.prependIcon, onMousedown: M2, onClick: R2, "onClick:clear": E2, "onClick:prependInner": a2["onClick:prependInner"], "onClick:appendInner": a2["onClick:appendInner"] }, v3, { id: n3.value, active: $2.value || i3.value, dirty: i3.value || a2.dirty, disabled: t4.value, focused: f2.value, error: false === r4.value }), { ...d2, default: (l4) => {
        var n4;
        let { props: { class: i4, ...r5 } } = l4;
        return createVNode(Fragment, null, [createVNode("input", mergeProps({ ref: A2, type: "file", readonly: o3.value, disabled: t4.value, multiple: a2.multiple, name: a2.name, onClick: (e2) => {
          e2.stopPropagation(), o3.value && e2.preventDefault(), D2();
        }, onChange: (e2) => {
          var _a;
          if (!e2.target) return;
          const l5 = e2.target;
          p2.value = [...(_a = l5.files) != null ? _a : []];
        }, onFocus: D2, onBlur: m2 }, r5, s2), null), createVNode("div", { class: i4 }, [!!(null == (n4 = p2.value) ? void 0 : n4.length) && !a2.hideInput && (d2.selection ? d2.selection({ fileNames: x2.value, totalBytes: h2.value, totalBytesReadable: C2.value }) : a2.chips ? x2.value.map((l5) => createVNode(Je, { key: l5, size: "small", text: l5 }, null)) : x2.value.join(", "))])]);
      } });
    }, details: n2 ? (n3) => {
      var t4, i3;
      return createVNode(Fragment, null, [null == (t4 = d2.details) ? void 0 : t4.call(d2, n3), l2 && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(Xe, { active: !!(null == (i3 = p2.value) ? void 0 : i3.length), value: V2.value, disabled: a2.disabled }, d2.counter)])]);
    } : void 0 });
  }), _f({}, _2, B2, A2);
} });

export { Ee as E, Ge as G, He as H, Je as J, Le as L, Oe as O, Re as R, Te as T, Xe as X, al as a, il as i, ll as l, nl as n, ze as z };
