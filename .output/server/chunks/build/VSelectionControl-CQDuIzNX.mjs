import { inject, computed, shallowRef, ref, createVNode, mergeProps, withDirectives, Fragment, resolveDirective, nextTick, provide, onScopeDispose, toRef } from 'vue';
import { g as vu, f as nu, am as Op, a8 as Dd, k as Eu, Z as Ui, _ as ud, aD as cd, l as su, m as Cu, q as Vi, X as qd, T as ou, aK as ls, J as mc, a5 as Od, ak as Ci, a6 as uc, al as du } from './server.mjs';
import { z as ze } from './VFileInput-CfGseUP1.mjs';

const G = Symbol.for("vuetify:selection-control-group"), w = nu({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: uc, trueIcon: uc, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Ci }, ...ou(), ...Od(), ...mc() }, "SelectionControlGroup"), $ = nu({ ...w({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
vu()({ name: "VSelectionControlGroup", props: $(), emits: { "update:modelValue": (e2) => true }, setup(t2, u2) {
  let { slots: n2 } = u2;
  const s2 = Eu(t2, "modelValue"), i2 = su(), c2 = computed(() => t2.id || `v-selection-control-group-${i2}`), d2 = computed(() => t2.name || c2.value), v2 = /* @__PURE__ */ new Set();
  return provide(G, { modelValue: s2, forceUpdate: () => {
    v2.forEach((e2) => e2());
  }, onForceUpdate: (e2) => {
    v2.add(e2), onScopeDispose(() => {
      v2.delete(e2);
    });
  } }), du({ [t2.defaultsTarget]: { color: toRef(t2, "color"), disabled: toRef(t2, "disabled"), density: toRef(t2, "density"), error: toRef(t2, "error"), inline: toRef(t2, "inline"), modelValue: s2, multiple: computed(() => !!t2.multiple || null == t2.multiple && Array.isArray(s2.value)), name: d2, falseIcon: toRef(t2, "falseIcon"), trueIcon: toRef(t2, "trueIcon"), readonly: toRef(t2, "readonly"), ripple: toRef(t2, "ripple"), type: toRef(t2, "type"), valueComparator: toRef(t2, "valueComparator") } }), Cu(() => {
    var e2;
    return createVNode("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": t2.inline }, t2.class], style: t2.style, role: "radio" === t2.type ? "radiogroup" : void 0 }, [null == (e2 = n2.default) ? void 0 : e2.call(n2)]);
  }), {};
} });
const q = nu({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ou(), ...w() }, "VSelectionControl");
const D = vu()({ name: "VSelectionControl", directives: { Ripple: Op }, inheritAttrs: false, props: q(), emits: { "update:modelValue": (e2) => true }, setup(l2, o2) {
  let { attrs: a2, slots: p2 } = o2;
  const { group: y2, densityClasses: C2, icon: m2, model: f2, textColorClasses: b2, textColorStyles: g2, backgroundColorClasses: k2, backgroundColorStyles: I2, trueValue: w2 } = function(l3) {
    const o3 = inject(G, void 0), { densityClasses: a3 } = Dd(l3), r2 = Eu(l3, "modelValue"), t2 = computed(() => void 0 !== l3.trueValue ? l3.trueValue : void 0 === l3.value || l3.value), u2 = computed(() => void 0 !== l3.falseValue && l3.falseValue), n2 = computed(() => !!l3.multiple || null == l3.multiple && Array.isArray(r2.value)), s2 = computed({ get() {
      const e2 = o3 ? o3.modelValue.value : r2.value;
      return n2.value ? Ui(e2).some((e3) => l3.valueComparator(e3, t2.value)) : l3.valueComparator(e2, t2.value);
    }, set(e2) {
      if (l3.readonly) return;
      const a4 = e2 ? t2.value : u2.value;
      let s3 = a4;
      n2.value && (s3 = e2 ? [...Ui(r2.value), a4] : Ui(r2.value).filter((e3) => !l3.valueComparator(e3, t2.value))), o3 ? o3.modelValue.value = s3 : r2.value = s3;
    } }), { textColorClasses: i2, textColorStyles: c2 } = ud(computed(() => {
      if (!l3.error && !l3.disabled) return s2.value ? l3.color : l3.baseColor;
    })), { backgroundColorClasses: v2, backgroundColorStyles: p3 } = cd(computed(() => !s2.value || l3.error || l3.disabled ? l3.baseColor : l3.color)), y3 = computed(() => s2.value ? l3.trueIcon : l3.falseIcon);
    return { group: o3, densityClasses: a3, trueValue: t2, falseValue: u2, model: s2, textColorClasses: i2, textColorStyles: c2, backgroundColorClasses: v2, backgroundColorStyles: p3, icon: y3 };
  }(l2), $2 = su(), q2 = shallowRef(false), D2 = shallowRef(false), E = ref(), J = computed(() => l2.id || `input-${$2}`), K = computed(() => !l2.disabled && !l2.readonly);
  function N(e2) {
    K.value && (q2.value = true, false !== ls(e2.target) && (D2.value = true));
  }
  function O() {
    q2.value = false, D2.value = false;
  }
  function P(e2) {
    e2.stopPropagation();
  }
  function R(e2) {
    K.value ? (l2.readonly && y2 && nextTick(() => y2.forceUpdate()), f2.value = e2.target.checked) : E.value && (E.value.checked = f2.value);
  }
  return null == y2 || y2.onForceUpdate(() => {
    E.value && (E.value.checked = f2.value);
  }), Cu(() => {
    var _a;
    var e2, o3;
    const t2 = p2.label ? p2.label({ label: l2.label, props: { for: J.value } }) : l2.label, [u2, d2] = Vi(a2), v2 = createVNode("input", mergeProps({ ref: E, checked: f2.value, disabled: !!l2.disabled, id: J.value, onBlur: O, onFocus: N, onInput: R, "aria-disabled": !!l2.disabled, "aria-label": l2.label, type: l2.type, value: w2.value, name: l2.name, "aria-checked": "checkbox" === l2.type ? f2.value : void 0 }, d2), null);
    return createVNode("div", mergeProps({ class: ["v-selection-control", { "v-selection-control--dirty": f2.value, "v-selection-control--disabled": l2.disabled, "v-selection-control--error": l2.error, "v-selection-control--focused": q2.value, "v-selection-control--focus-visible": D2.value, "v-selection-control--inline": l2.inline }, C2.value, l2.class] }, u2, { style: l2.style }), [createVNode("div", { class: ["v-selection-control__wrapper", b2.value], style: g2.value }, [null == (e2 = p2.default) ? void 0 : e2.call(p2, { backgroundColorClasses: k2, backgroundColorStyles: I2 }), withDirectives(createVNode("div", { class: ["v-selection-control__input"] }, [(_a = null == (o3 = p2.input) ? void 0 : o3.call(p2, { model: f2, textColorClasses: b2, textColorStyles: g2, backgroundColorClasses: k2, backgroundColorStyles: I2, inputNode: v2, icon: m2.value, props: { onFocus: N, onBlur: O, id: J.value } })) != null ? _a : createVNode(Fragment, null, [m2.value && createVNode(qd, { key: "icon", icon: m2.value }, null), v2])]), [[resolveDirective("ripple"), l2.ripple && [!l2.disabled && !l2.readonly, null, ["center", "circle"]]]])]), t2 && createVNode(ze, { for: J.value, onClick: P }, { default: () => [t2] })]);
  }), { isFocused: q2, input: E };
} });

export { D, q };
