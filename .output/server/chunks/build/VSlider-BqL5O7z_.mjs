import { ref, computed, toRef, shallowRef, provide, createVNode, mergeProps, Fragment, nextTick, inject, withDirectives, resolveDirective, vShow } from 'vue';
import { g as vu, f as nu, aa as Nu, aX as Gi, aM as ji, k as Eu, aY as ki, m as Cu, E as pd, aD as cd, aG as Ii, am as Op, ao as Cd, _ as ud, aZ as Oi, a_ as Xc, ax as bd, L as dd, T as ou } from './server.mjs';
import { E as Ee, O as Oe, z as ze, H as He, R as Re } from './VFileInput-CfGseUP1.mjs';

const P = Symbol.for("vuetify:v-slider");
const j = nu({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e2) => "boolean" == typeof e2 || "always" === e2 }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e2) => "boolean" == typeof e2 || "always" === e2 }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e2) => ["vertical", "horizontal"].includes(e2) }, reverse: Boolean, ...dd(), ...bd({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), A = nu({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, ...ou() }, "VSliderThumb"), I = vu()({ name: "VSliderThumb", directives: { Ripple: Op }, props: A(), emits: { "update:modelValue": (e2) => true }, setup(l2, a2) {
  let { slots: t2, emit: r2 } = a2;
  const i2 = inject(P), { isRtl: d2, rtlClasses: c2 } = Nu();
  if (!i2) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: m2, step: p2, disabled: h2, thumbSize: k2, thumbLabel: f2, direction: y2, isReversed: S2, vertical: g2, readonly: F2, elevation: z2, mousePressed: E2, decimals: L2, indexFromEnd: M2 } = i2, N2 = computed(() => h2.value ? void 0 : z2.value), { elevationClasses: B2 } = Cd(N2), { textColorClasses: R2, textColorStyles: q2 } = ud(m2), { pageup: j2, pagedown: A2, end: I2, home: D2, left: O2, right: $2, down: K2, up: X } = Oi, Y = [j2, A2, I2, D2, O2, $2, K2, X], G = computed(() => p2.value ? [1, 2, 3] : [1, 5, 10]);
  function U(e2) {
    const a3 = function(e3, a4) {
      if (!Y.includes(e3.key)) return;
      e3.preventDefault();
      const t3 = p2.value || 0.1, r3 = (l2.max - l2.min) / t3;
      if ([O2, $2, K2, X].includes(e3.key)) {
        const l3 = (g2.value ? [d2.value ? O2 : $2, S2.value ? K2 : X] : M2.value !== d2.value ? [O2, X] : [$2, X]).includes(e3.key) ? 1 : -1, r4 = e3.shiftKey ? 2 : e3.ctrlKey ? 1 : 0;
        a4 += l3 * t3 * G.value[r4];
      } else e3.key === D2 ? a4 = l2.min : e3.key === I2 ? a4 = l2.max : a4 -= (e3.key === A2 ? 1 : -1) * t3 * (r3 > 100 ? r3 / 10 : 10);
      return Math.max(l2.min, Math.min(l2.max, a4));
    }(e2, l2.modelValue);
    null != a3 && r2("update:modelValue", a3);
  }
  return Cu(() => {
    const e2 = Ii(M2.value ? 100 - l2.position : l2.position, "%");
    return createVNode("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": l2.focused, "v-slider-thumb--pressed": l2.focused && E2.value }, l2.class, c2.value], style: [{ "--v-slider-thumb-position": e2, "--v-slider-thumb-size": Ii(k2.value) }, l2.style], role: "slider", tabindex: h2.value ? -1 : 0, "aria-label": l2.name, "aria-valuemin": l2.min, "aria-valuemax": l2.max, "aria-valuenow": l2.modelValue, "aria-readonly": !!F2.value, "aria-orientation": y2.value, onKeydown: F2.value ? void 0 : U }, [createVNode("div", { class: ["v-slider-thumb__surface", R2.value, B2.value], style: { ...q2.value } }, null), withDirectives(createVNode("div", { class: ["v-slider-thumb__ripple", R2.value], style: q2.value }, null), [[resolveDirective("ripple"), l2.ripple, null, { circle: true, center: true }]]), createVNode(Xc, { origin: "bottom center" }, { default: () => {
      var _a;
      var e3;
      return [withDirectives(createVNode("div", { class: "v-slider-thumb__label-container" }, [createVNode("div", { class: ["v-slider-thumb__label"] }, [createVNode("div", null, [(_a = null == (e3 = t2["thumb-label"]) ? void 0 : e3.call(t2, { modelValue: l2.modelValue })) != null ? _a : l2.modelValue.toFixed(p2.value ? L2.value : 1)])])]), [[vShow, f2.value && l2.focused || "always" === f2.value]])];
    } })]);
  }), {};
} }), D = nu({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...ou() }, "VSliderTrack"), O = vu()({ name: "VSliderTrack", props: D(), emits: {}, setup(l2, a2) {
  let { slots: t2 } = a2;
  const r2 = inject(P);
  if (!r2) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: i2, parsedTicks: o2, rounded: n2, showTicks: v2, tickSize: d2, trackColor: c2, trackFillColor: m2, trackSize: p2, vertical: b2, min: h2, max: k2, indexFromEnd: f2 } = r2, { roundedClasses: y2 } = pd(n2), { backgroundColorClasses: S2, backgroundColorStyles: g2 } = cd(m2), { backgroundColorClasses: _2, backgroundColorStyles: x2 } = cd(c2), C2 = computed(() => `inset-${b2.value ? "block" : "inline"}-${f2.value ? "end" : "start"}`), T2 = computed(() => b2.value ? "height" : "width"), F2 = computed(() => ({ [C2.value]: "0%", [T2.value]: "100%" })), L2 = computed(() => l2.stop - l2.start), M2 = computed(() => ({ [C2.value]: Ii(l2.start, "%"), [T2.value]: Ii(L2.value, "%") })), N2 = computed(() => {
    if (!v2.value) return [];
    return (b2.value ? o2.value.slice().reverse() : o2.value).map((e2, a3) => {
      var _a;
      var r3;
      const i3 = e2.value !== h2.value && e2.value !== k2.value ? Ii(e2.position, "%") : void 0;
      return createVNode("div", { key: e2.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": e2.position >= l2.start && e2.position <= l2.stop, "v-slider-track__tick--first": e2.value === h2.value, "v-slider-track__tick--last": e2.value === k2.value }], style: { [C2.value]: i3 } }, [(e2.label || t2["tick-label"]) && createVNode("div", { class: "v-slider-track__tick-label" }, [(_a = null == (r3 = t2["tick-label"]) ? void 0 : r3.call(t2, { tick: e2, index: a3 })) != null ? _a : e2.label])]);
    });
  });
  return Cu(() => createVNode("div", { class: ["v-slider-track", y2.value, l2.class], style: [{ "--v-slider-track-size": Ii(p2.value), "--v-slider-tick-size": Ii(d2.value) }, l2.style] }, [createVNode("div", { class: ["v-slider-track__background", _2.value, { "v-slider-track__background--opacity": !!i2.value || !m2.value }], style: { ...F2.value, ...x2.value } }, null), createVNode("div", { class: ["v-slider-track__fill", S2.value], style: { ...M2.value, ...g2.value } }, null), v2.value && createVNode("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": "always" === v2.value }] }, [N2.value])])), {};
} }), $ = nu({ ...Re(), ...j(), ...He(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), K = vu()({ name: "VSlider", props: $(), emits: { "update:focused": (e2) => true, "update:modelValue": (e2) => true, start: (e2) => true, end: (e2) => true }, setup(u2, o2) {
  let { slots: n2, emit: v2 } = o2;
  const m2 = ref(), { rtlClasses: k2 } = Nu(), f2 = ((l2) => {
    const a2 = computed(() => parseFloat(l2.min)), t2 = computed(() => parseFloat(l2.max)), r2 = computed(() => +l2.step > 0 ? parseFloat(l2.step) : 0), i2 = computed(() => Math.max(Gi(r2.value), Gi(a2.value)));
    return { min: a2, max: t2, step: r2, decimals: i2, roundValue: function(e2) {
      if (e2 = parseFloat(e2), r2.value <= 0) return e2;
      const l3 = ji(e2, a2.value, t2.value), u3 = a2.value % r2.value, s2 = Math.round((l3 - u3) / r2.value) * r2.value + u3;
      return parseFloat(Math.min(s2, t2.value).toFixed(i2.value));
    } };
  })(u2), S2 = Eu(u2, "modelValue", void 0, (e2) => f2.roundValue(null == e2 ? f2.min.value : e2)), { min: g2, max: _2, mousePressed: x2, roundValue: C2, onSliderMousedown: w2, onSliderTouchstart: T2, trackContainerRef: F2, position: z2, hasLabels: E2, readonly: N2 } = ((u3) => {
    let { props: s2, steps: o3, onSliderStart: n3, onSliderMove: v3, onSliderEnd: d2, getActiveThumb: c2 } = u3;
    const { isRtl: m3 } = Nu(), p2 = toRef(s2, "reverse"), k3 = computed(() => "vertical" === s2.direction), f3 = computed(() => k3.value !== p2.value), { min: S3, max: g3, step: _3, decimals: x3, roundValue: C3 } = o3, V2 = computed(() => parseInt(s2.thumbSize, 10)), w3 = computed(() => parseInt(s2.tickSize, 10)), T3 = computed(() => parseInt(s2.trackSize, 10)), F3 = computed(() => (g3.value - S3.value) / _3.value), z3 = toRef(s2, "disabled"), E3 = computed(() => {
      var _a;
      return s2.error || s2.disabled ? void 0 : (_a = s2.thumbColor) != null ? _a : s2.color;
    }), L2 = computed(() => {
      var _a;
      return s2.error || s2.disabled ? void 0 : (_a = s2.trackColor) != null ? _a : s2.color;
    }), M2 = computed(() => {
      var _a;
      return s2.error || s2.disabled ? void 0 : (_a = s2.trackFillColor) != null ? _a : s2.color;
    }), N3 = shallowRef(false), B3 = shallowRef(0), R2 = ref(), q2 = ref();
    function j3(e2) {
      var l2;
      const a2 = "vertical" === s2.direction, t2 = a2 ? "top" : "left", r2 = a2 ? "height" : "width", i2 = a2 ? "clientY" : "clientX", { [t2]: u4, [r2]: o4 } = null == (l2 = R2.value) ? void 0 : l2.$el.getBoundingClientRect(), n4 = function(e3, l3) {
        return "touches" in e3 && e3.touches.length ? e3.touches[0][l3] : "changedTouches" in e3 && e3.changedTouches.length ? e3.changedTouches[0][l3] : e3[l3];
      }(e2, i2);
      let v4 = Math.min(Math.max((n4 - u4 - B3.value) / o4, 0), 1) || 0;
      return (a2 ? f3.value : f3.value !== m3.value) && (v4 = 1 - v4), C3(S3.value + v4 * (g3.value - S3.value));
    }
    const A3 = (e2) => {
      d2({ value: j3(e2) }), N3.value = false, B3.value = 0;
    }, I2 = (e2) => {
      q2.value = c2(e2), q2.value && (N3.value = true, q2.value.contains(e2.target) ? B3.value = function(e3, l2, a2) {
        const t2 = "vertical" === a2, r2 = l2.getBoundingClientRect(), i2 = "touches" in e3 ? e3.touches[0] : e3;
        return t2 ? i2.clientY - (r2.top + r2.height / 2) : i2.clientX - (r2.left + r2.width / 2);
      }(e2, q2.value, s2.direction) : (B3.value = 0, v3({ value: j3(e2) })), n3({ value: j3(e2) }), nextTick(() => {
        var e3;
        return null == (e3 = q2.value) ? void 0 : e3.focus();
      }));
    }, D3 = { passive: true, capture: true };
    function O2(e2) {
      v3({ value: j3(e2) });
    }
    function $2(e2) {
      e2.stopPropagation(), e2.preventDefault(), A3(e2), (void 0).removeEventListener("mousemove", O2, D3), (void 0).removeEventListener("mouseup", $2);
    }
    function K2(e2) {
      var l2;
      A3(e2), (void 0).removeEventListener("touchmove", O2, D3), null == (l2 = e2.target) || l2.removeEventListener("touchend", K2);
    }
    const X = (e2) => {
      const l2 = (e2 - S3.value) / (g3.value - S3.value) * 100;
      return ji(isNaN(l2) ? 0 : l2, 0, 100);
    }, Y = toRef(s2, "showTicks"), G = computed(() => Y.value ? s2.ticks ? Array.isArray(s2.ticks) ? s2.ticks.map((e2) => ({ value: e2, position: X(e2), label: e2.toString() })) : Object.keys(s2.ticks).map((e2) => ({ value: parseFloat(e2), position: X(parseFloat(e2)), label: s2.ticks[e2] })) : F3.value !== 1 / 0 ? ki(F3.value + 1).map((e2) => {
      const l2 = S3.value + e2 * _3.value;
      return { value: l2, position: X(l2) };
    }) : [] : []), U = computed(() => G.value.some((e2) => {
      let { label: l2 } = e2;
      return !!l2;
    })), Z = { activeThumbRef: q2, color: toRef(s2, "color"), decimals: x3, disabled: z3, direction: toRef(s2, "direction"), elevation: toRef(s2, "elevation"), hasLabels: U, isReversed: p2, indexFromEnd: f3, min: S3, max: g3, mousePressed: N3, numTicks: F3, onSliderMousedown: function(e2) {
      e2.preventDefault(), I2(e2), (void 0).addEventListener("mousemove", O2, D3), (void 0).addEventListener("mouseup", $2, { passive: false });
    }, onSliderTouchstart: function(e2) {
      var l2;
      I2(e2), (void 0).addEventListener("touchmove", O2, D3), null == (l2 = e2.target) || l2.addEventListener("touchend", K2, { passive: false });
    }, parsedTicks: G, parseMouseMove: j3, position: X, readonly: toRef(s2, "readonly"), rounded: toRef(s2, "rounded"), roundValue: C3, showTicks: Y, startOffset: B3, step: _3, thumbSize: V2, thumbColor: E3, thumbLabel: toRef(s2, "thumbLabel"), ticks: toRef(s2, "ticks"), tickSize: w3, trackColor: L2, trackContainerRef: R2, trackFillColor: M2, trackSize: T3, vertical: k3 };
    return provide(P, Z), Z;
  })({ props: u2, steps: f2, onSliderStart: () => {
    v2("start", S2.value);
  }, onSliderEnd: (e2) => {
    let { value: l2 } = e2;
    const a2 = C2(l2);
    S2.value = a2, v2("end", a2);
  }, onSliderMove: (e2) => {
    let { value: l2 } = e2;
    return S2.value = C2(l2);
  }, getActiveThumb: () => {
    var e2;
    return null == (e2 = m2.value) ? void 0 : e2.$el;
  } }), { isFocused: B2, focus: j2, blur: A2 } = Ee(u2), D2 = computed(() => z2(S2.value));
  return Cu(() => {
    const e2 = Oe.filterProps(u2), l2 = !!(u2.label || n2.label || n2.prepend);
    return createVNode(Oe, mergeProps({ class: ["v-slider", { "v-slider--has-labels": !!n2["tick-label"] || E2.value, "v-slider--focused": B2.value, "v-slider--pressed": x2.value, "v-slider--disabled": u2.disabled }, k2.value, u2.class], style: u2.style }, e2, { focused: B2.value }), { ...n2, prepend: l2 ? (e3) => {
      var _a;
      var l3, a2;
      return createVNode(Fragment, null, [(_a = null == (l3 = n2.label) ? void 0 : l3.call(n2, e3)) != null ? _a : u2.label ? createVNode(ze, { id: e3.id.value, class: "v-slider__label", text: u2.label }, null) : void 0, null == (a2 = n2.prepend) ? void 0 : a2.call(n2, e3)]);
    } : void 0, default: (e3) => {
      let { id: l3, messagesId: a2 } = e3;
      return createVNode("div", { class: "v-slider__container", onMousedown: N2.value ? void 0 : w2, onTouchstartPassive: N2.value ? void 0 : T2 }, [createVNode("input", { id: l3.value, name: u2.name || l3.value, disabled: !!u2.disabled, readonly: !!u2.readonly, tabindex: "-1", value: S2.value }, null), createVNode(O, { ref: F2, start: 0, stop: D2.value }, { "tick-label": n2["tick-label"] }), createVNode(I, { ref: m2, "aria-describedby": a2.value, focused: B2.value, min: g2.value, max: _2.value, modelValue: S2.value, "onUpdate:modelValue": (e4) => S2.value = e4, position: D2.value, elevation: u2.elevation, onFocus: j2, onBlur: A2, ripple: u2.ripple, name: u2.name }, { "thumb-label": n2["thumb-label"] })]);
    } });
  }), {};
} });

export { K };
