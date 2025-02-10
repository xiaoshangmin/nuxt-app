import { shallowRef, onScopeDispose, nextTick, ref, inject, watchEffect, watch, computed, createVNode, mergeProps, defineComponent, provide, createElementBlock } from 'vue';
import { g as vu, f as nu, k as Eu, A as cp, B as ff, C as yc, D as Td, E as pd, F as wc, G as hi, P as Bc, H as Si, I as _f, m as Cu, Q as wf, R as Nd, y as ap, S as od, o as Ti, J as mc, K as Pd, L as dd, M as up, N as tp, O as Ef } from './server.mjs';

defineComponent({ name: "ServerPlaceholder", render: () => createElementBlock("div") });
const O = Symbol.for("nuxt:client-only"), Y = defineComponent({ name: "ClientOnly", inheritAttrs: false, props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"], setup(e2, { slots: n2, attrs: s2 }) {
  const o2 = ref(false);
  return provide(O, true), (e3) => {
    var t2;
    if (o2.value) return null == (t2 = n2.default) ? void 0 : t2.call(n2);
    const l2 = n2.fallback || n2.placeholder;
    if (l2) return l2();
    const r2 = e3.fallback || e3.placeholder || "", i2 = e3.fallbackTag || e3.placeholderTag || "span";
    return createElementBlock(i2, s2, r2);
  };
} });
const j = nu({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...tp({ location: "bottom" }), ...up(), ...dd(), ...Pd(), ...mc(), ...Ti(Ef({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"]) }, "VSnackbar"), E = vu()({ name: "VSnackbar", props: j(), emits: { "update:modelValue": (e2) => true }, setup(e2, a2) {
  let { slots: l2 } = a2;
  const d2 = Eu(e2, "modelValue"), { positionClasses: f2 } = cp(e2), { scopeId: P2 } = ff(), { themeClasses: V2 } = yc(e2), { colorClasses: A2, colorStyles: B2, variantClasses: I2 } = Td(e2), { roundedClasses: L2 } = pd(e2), N2 = function(e3) {
    const a3 = shallowRef(e3());
    let t2 = -1;
    function l3() {
      clearInterval(t2);
    }
    return onScopeDispose(l3), { clear: l3, time: a3, start: function(n2) {
      const s2 = n2 ? getComputedStyle(n2) : { transitionDuration: 0.2 }, o2 = 1e3 * parseFloat(s2.transitionDuration) || 200;
      if (l3(), a3.value <= 0) return;
      const r2 = performance.now();
      t2 = (void 0).setInterval(() => {
        const t3 = performance.now() - r2 + o2;
        a3.value = Math.max(e3() - t3, 0), a3.value <= 0 && l3();
      }, o2);
    }, reset: function() {
      l3(), nextTick(() => a3.value = e3());
    } };
  }(() => Number(e2.timeout)), O2 = ref(), Y2 = ref(), j2 = shallowRef(false), E2 = shallowRef(0), H = ref(), J = inject(wc, void 0);
  hi(() => !!J, () => {
    const e3 = Bc();
    watchEffect(() => {
      H.value = e3.mainStyles.value;
    });
  }), watch(d2, Q), watch(() => e2.timeout, Q);
  let K = -1;
  function Q() {
    N2.reset(), (void 0).clearTimeout(K);
    const a3 = Number(e2.timeout);
    if (!d2.value || -1 === a3) return;
    const t2 = Si(Y2.value);
    N2.start(t2), K = (void 0).setTimeout(() => {
      d2.value = false;
    }, a3);
  }
  function R() {
    j2.value = true, N2.reset(), (void 0).clearTimeout(K);
  }
  function U() {
    j2.value = false, Q();
  }
  function $(e3) {
    E2.value = e3.touches[0].clientY;
  }
  function q(e3) {
    Math.abs(E2.value - e3.changedTouches[0].clientY) > 50 && (d2.value = false);
  }
  function z() {
    j2.value && U();
  }
  const W = computed(() => e2.location.split(" ").reduce((e3, a3) => (e3[`v-snackbar--${a3}`] = true, e3), {}));
  return Cu(() => {
    const a3 = wf.filterProps(e2), t2 = !!(l2.default || l2.text || e2.text);
    return createVNode(wf, mergeProps({ ref: O2, class: ["v-snackbar", { "v-snackbar--active": d2.value, "v-snackbar--multi-line": e2.multiLine && !e2.vertical, "v-snackbar--timer": !!e2.timer, "v-snackbar--vertical": e2.vertical }, W.value, f2.value, e2.class], style: [H.value, e2.style] }, a3, { modelValue: d2.value, "onUpdate:modelValue": (e3) => d2.value = e3, contentProps: mergeProps({ class: ["v-snackbar__wrapper", V2.value, A2.value, L2.value, I2.value], style: [B2.value], onPointerenter: R, onPointerleave: U }, a3.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: $, onTouchend: q, onAfterLeave: z }, P2), { default: () => {
      var _a;
      var a4, n2;
      return [Nd(false, "v-snackbar"), e2.timer && !j2.value && createVNode("div", { key: "timer", class: "v-snackbar__timer" }, [createVNode(ap, { ref: Y2, color: "string" == typeof e2.timer ? e2.timer : "info", max: e2.timeout, "model-value": N2.time.value }, null)]), t2 && createVNode("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [(_a = null == (a4 = l2.text) ? void 0 : a4.call(l2)) != null ? _a : e2.text, null == (n2 = l2.default) ? void 0 : n2.call(l2)]), l2.actions && createVNode(od, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [createVNode("div", { class: "v-snackbar__actions" }, [l2.actions({ isActive: d2 })])] })];
    }, activator: l2.activator });
  }), _f({}, O2);
} });

export { E, Y };
