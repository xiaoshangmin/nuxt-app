import { computed, ref, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, cloneVNode, nextTick } from 'vue';
import { E as Ee, O as Oe, n as nl, X as Xe, a as al, l as ll, H as He } from './VFileInput-CfGseUP1.mjs';
import { g as vu, f as nu, a$ as Ad, k as Eu, I as _f, m as Cu, q as Vi, Y as ns } from './server.mjs';

const C = ["color", "file", "time", "date", "datetime-local", "week", "month"], S = nu({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...He(), ...ll() }, "VTextField"), I = vu()({ name: "VTextField", directives: { Intersect: Ad }, inheritAttrs: false, props: S(), emits: { "click:control": (e2) => true, "mousedown:control": (e2) => true, "update:focused": (e2) => true, "update:modelValue": (e2) => true }, setup(s2, c2) {
  let { attrs: x2, emit: g2, slots: y2 } = c2;
  const S2 = Eu(s2, "modelValue"), { isFocused: I2, focus: F, blur: w } = Ee(s2), B = computed(() => {
    var _a;
    return "function" == typeof s2.counterValue ? s2.counterValue(S2.value) : "number" == typeof s2.counterValue ? s2.counterValue : ((_a = S2.value) != null ? _a : "").toString().length;
  }), P = computed(() => x2.maxlength ? x2.maxlength : !s2.counter || "number" != typeof s2.counter && "string" != typeof s2.counter ? void 0 : s2.counter), j = computed(() => ["plain", "underlined"].includes(s2.variant));
  function D(e2, l2) {
    var t2, n2;
    s2.autofocus && e2 && (null == (n2 = null == (t2 = l2[0].target) ? void 0 : t2.focus) || n2.call(t2));
  }
  const E = ref(), M = ref(), A = ref(), N = computed(() => C.includes(s2.type) || s2.persistentPlaceholder || I2.value || s2.active);
  function T() {
    var e2;
    A.value !== (void 0).activeElement && (null == (e2 = A.value) || e2.focus()), I2.value || F();
  }
  function q(e2) {
    g2("mousedown:control", e2), e2.target !== A.value && (T(), e2.preventDefault());
  }
  function z(e2) {
    T(), g2("click:control", e2);
  }
  function O(e2) {
    e2.stopPropagation(), T(), nextTick(() => {
      S2.value = null, ns(s2["onClick:clear"], e2);
    });
  }
  function R(e2) {
    var l2;
    const t2 = e2.target;
    if (S2.value = t2.value, (null == (l2 = s2.modelModifiers) ? void 0 : l2.trim) && ["text", "search", "password", "tel", "url"].includes(s2.type)) {
      const e3 = [t2.selectionStart, t2.selectionEnd];
      nextTick(() => {
        t2.selectionStart = e3[0], t2.selectionEnd = e3[1];
      });
    }
  }
  return Cu(() => {
    const e2 = !!(y2.counter || false !== s2.counter && null != s2.counter), l2 = !(!e2 && !y2.details), [i2, c3] = Vi(x2), { modelValue: d2, ...g3 } = Oe.filterProps(s2), V2 = nl(s2);
    return createVNode(Oe, mergeProps({ ref: E, modelValue: S2.value, "onUpdate:modelValue": (e3) => S2.value = e3, class: ["v-text-field", { "v-text-field--prefixed": s2.prefix, "v-text-field--suffixed": s2.suffix, "v-input--plain-underlined": j.value }, s2.class], style: s2.style }, i2, g3, { centerAffix: !j.value, focused: I2.value }), { ...y2, default: (e3) => {
      let { id: l3, isDisabled: i3, isDirty: d3, isReadonly: f2, isValid: p2 } = e3;
      return createVNode(al, mergeProps({ ref: M, onMousedown: q, onClick: z, "onClick:clear": O, "onClick:prependInner": s2["onClick:prependInner"], "onClick:appendInner": s2["onClick:appendInner"], role: s2.role }, V2, { id: l3.value, active: N.value || d3.value, dirty: d3.value || s2.dirty, disabled: i3.value, focused: I2.value, error: false === p2.value }), { ...y2, default: (e4) => {
        let { props: { class: l4, ...d4 } } = e4;
        const p3 = withDirectives(createVNode("input", mergeProps({ ref: A, value: S2.value, onInput: R, autofocus: s2.autofocus, readonly: f2.value, disabled: i3.value, name: s2.name, placeholder: s2.placeholder, size: 1, type: s2.type, onFocus: T, onBlur: w }, d4, c3), null), [[resolveDirective("intersect"), { handler: D }, null, { once: true }]]);
        return createVNode(Fragment, null, [s2.prefix && createVNode("span", { class: "v-text-field__prefix" }, [createVNode("span", { class: "v-text-field__prefix__text" }, [s2.prefix])]), y2.default ? createVNode("div", { class: l4, "data-no-activator": "" }, [y2.default(), p3]) : cloneVNode(p3, { class: l4 }), s2.suffix && createVNode("span", { class: "v-text-field__suffix" }, [createVNode("span", { class: "v-text-field__suffix__text" }, [s2.suffix])])]);
      } });
    }, details: l2 ? (l3) => {
      var n2;
      return createVNode(Fragment, null, [null == (n2 = y2.details) ? void 0 : n2.call(y2, l3), e2 && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(Xe, { active: s2.persistentCounter || I2.value, value: B.value, max: P.value, disabled: s2.disabled }, y2.counter)])]);
    } : void 0 });
  }), _f({}, E, M, A);
} });

export { I, S };
