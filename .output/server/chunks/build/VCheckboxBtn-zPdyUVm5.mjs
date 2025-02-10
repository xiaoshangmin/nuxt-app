import { computed, createVNode, mergeProps } from 'vue';
import { D, q } from './VSelectionControl-CQDuIzNX.mjs';
import { g as vu, f as nu, k as Eu, m as Cu, o as Ti, a6 as uc } from './server.mjs';

const i = nu({ indeterminate: Boolean, indeterminateIcon: { type: uc, default: "$checkboxIndeterminate" }, ...q({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), d = vu()({ name: "VCheckboxBtn", props: i(), emits: { "update:modelValue": (e2) => true, "update:indeterminate": (e2) => true }, setup(o2, l2) {
  let { slots: s2 } = l2;
  const c2 = Eu(o2, "indeterminate"), i2 = Eu(o2, "modelValue");
  function d2(e2) {
    c2.value && (c2.value = false);
  }
  const p = computed(() => c2.value ? o2.indeterminateIcon : o2.falseIcon), v = computed(() => c2.value ? o2.indeterminateIcon : o2.trueIcon);
  return Cu(() => {
    const e2 = Ti(D.filterProps(o2), ["modelValue"]);
    return createVNode(D, mergeProps(e2, { modelValue: i2.value, "onUpdate:modelValue": [(e3) => i2.value = e3, d2], class: ["v-checkbox-btn", o2.class], style: o2.style, type: "checkbox", falseIcon: p.value, trueIcon: v.value, "aria-checked": c2.value ? "mixed" : void 0 }), s2);
  }), {};
} });

export { d, i };
