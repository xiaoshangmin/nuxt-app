import { Y, E as E$1 } from './VSnackbar-BITpVUD2.mjs';
import { computed, createVNode, mergeProps, defineComponent, ref, unref, withCtx, isRef, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { removeBackground } from '@imgly/background-removal';
import { i as i$1 } from './index-BSDl_Q2m.mjs';
import { f as nu, o as Ti, g as vu, k as Eu, l as su, m as Cu, q as Vi, V as Lp, s as bv, t as Sf, v as Wp, x as Gp, y as ap, z as $d } from './server.mjs';
import { i, d } from './VCheckboxBtn-zPdyUVm5.mjs';
import { H as He, E as Ee, O as Oe, i as il } from './VFileInput-CfGseUP1.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import '@unhead/shared';
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
import 'vue-router';
import './VSelectionControl-CQDuIzNX.mjs';

const S = nu({ ...He(), ...Ti(i(), ["inline"]) }, "VCheckbox"), q = vu()({ name: "VCheckbox", inheritAttrs: false, props: S(), emits: { "update:modelValue": (e2) => true, "update:focused": (e2) => true }, setup(e2, l2) {
  let { attrs: u2, slots: d2 } = l2;
  const i2 = Eu(e2, "modelValue"), { isFocused: n2, focus: r2, blur: s2 } = Ee(e2), m2 = su(), c2 = computed(() => e2.id || `checkbox-${m2}`);
  return Cu(() => {
    const [l3, a2] = Vi(u2), m3 = Oe.filterProps(e2), p2 = d.filterProps(e2);
    return createVNode(Oe, mergeProps({ class: ["v-checkbox", e2.class] }, l3, m3, { modelValue: i2.value, "onUpdate:modelValue": (e3) => i2.value = e3, id: c2.value, focused: n2.value, style: e2.style }), { ...d2, default: (e3) => {
      let { id: l4, messagesId: u3, isDisabled: n3, isReadonly: m4, isValid: c3 } = e3;
      return createVNode(d, mergeProps(p2, { id: l4.value, "aria-describedby": u3.value, disabled: n3.value, readonly: m4.value }, a2, { error: false === c3.value, modelValue: i2.value, "onUpdate:modelValue": (e4) => i2.value = e4, onFocus: r2, onBlur: s2 }), d2);
    } });
  }), {};
} }), O = defineComponent({ __name: "bgremoval", __ssrInlineRender: true, setup(a2) {
  i$1({ title: "\u6D88\u9664\u56FE\u7247\u80CC\u666F - \u5728\u7EBF\u62A0\u56FE\u53BB\u9664\u80CC\u666F | labs.wowyou.cc", ogTitle: "\u6D88\u9664\u56FE\u7247\u80CC\u666F - \u5728\u7EBF\u62A0\u56FE\u53BB\u9664\u80CC\u666F", keywords: "\u6D88\u9664\u56FE\u7247\u80CC\u666F,\u62A0\u56FE,\u53BB\u80CC\u666F", ogType: "website", description: "\u5728\u7EBF\u62A0\u56FE\u5DE5\u5177\u8F7B\u677E\u5B9E\u73B0\u4E00\u952E\u62A0\u56FE\uFF0C\u53EA\u9700\u4E0A\u4F20\u56FE\u7247\uFF0C\u65E0\u9700\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u53EF100%\u81EA\u52A8\u53BB\u9664\u56FE\u7247\u80CC\u666F", ogDescription: "\u5728\u7EBF\u62A0\u56FE\u5DE5\u5177\u8F7B\u677E\u5B9E\u73B0\u4E00\u952E\u62A0\u56FE\uFF0C\u53EA\u9700\u4E0A\u4F20\u56FE\u7247\uFF0C\u65E0\u9700\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u53EF100%\u81EA\u52A8\u53BB\u9664\u56FE\u7247\u80CC\u666F", twitterCard: "summary_large_image", ogUrl: "https://labs.wowyou.cc/bgremoval", ogLocale: "zh", robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
  const u2 = ref(null), v2 = ref(false), h2 = ref(false), V2 = ref(false), b2 = ref(false), _2 = ref(false), U2 = ref(false), y2 = ref(true), k2 = ref(0), L2 = ref(75), P2 = ref([]), D2 = [(e2) => !e2 || !e2.length || e2[0].size < 2e6 || "Avatar size should be less than 2 MB!"], F2 = ref(""), $2 = ref("");
  function G2() {
    if ($2.value) {
      const e2 = (void 0).createElement("a");
      e2.href = $2.value, e2.download = `remove-bg-${Date.now()}.png`, e2.click();
    }
  }
  function S2() {
    null == u2 || u2.value.click();
  }
  function O2() {
    k2.value = 0;
    let e2 = P2.value;
    const l2 = URL.createObjectURL(e2);
    F2.value = l2, $2.value = l2, v2.value = true, y2.value = true, function(e3) {
      let l3 = { debug: false, model: "isnet_fp16", output: { quality: 0.8, format: "image/png" }, device: h2.value ? "gpu" : "cpu", progress: (e4, l4, a4) => {
        let t2 = (l4 / a4 * 100).toFixed(0);
        e4.includes("fetch:") && e4.includes("model") && (k2.value = Number(t2)), "compute:decode" == e4 && (b2.value = false, _2.value = true);
      } };
      b2.value = true, _2.value = false, V2.value = true;
      let a3 = e3;
      removeBackground(a3, l3).then((e4) => {
        const l4 = URL.createObjectURL(e4);
        $2.value = l4, L2.value = 15, b2.value = false, _2.value = false, V2.value = false, U2.value = true, y2.value = false;
      });
    }(l2);
  }
  return (a3, d2, v3, x2) => {
    const g2 = Y;
    d2('<!--[--><div class="d-flex justify-center flex-column mt-10" data-v-de1632cc><div class="d-flex justify-center remove" data-v-de1632cc>'), d2(ssrRenderComponent(g2, null, {}, v3)), d2('</div><div class="mt-10" data-v-de1632cc><div class="d-flex justify-center align-center flex-column" data-v-de1632cc><div class="d-flex justify-center align-center ga-5 mb-6" data-v-de1632cc>'), d2(ssrRenderComponent(Lp, { onClick: S2, text: a3.$t("Upload Image"), "prepend-icon": "mdi-image", elevation: "12", size: "x-large", rounded: "xl", width: "180px", height: "55px", class: "text-none" }, null, v3)), d2(ssrRenderComponent(Lp, { onClick: G2, text: a3.$t("Download Image"), "prepend-icon": "mdi-download", elevation: "12", size: "x-large", width: "180px", height: "55px", rounded: "xl", disabled: unref(y2), class: "text-none" }, null, v3)), d2("</div>"), d2(ssrRenderComponent(bv, { text: "\u7535\u8111\u6709GPU\u7684\u8BDD\u52FE\u9009\u51FA\u56FE\u66F4\u5FEB" }, { activator: withCtx(({ props: e2 }, l2, a4, u3) => {
      if (!l2) return [createVNode(q, mergeProps({ label: "\u4F7F\u7528GPU", modelValue: unref(h2), "onUpdate:modelValue": (e3) => isRef(h2) ? h2.value = e3 : null }, e2), null, 16, ["modelValue", "onUpdate:modelValue"])];
      l2(ssrRenderComponent(q, mergeProps({ label: "\u4F7F\u7528GPU", modelValue: unref(h2), "onUpdate:modelValue": (e3) => isRef(h2) ? h2.value = e3 : null }, e2), null, a4, u3));
    }), _: 1 }, v3)), d2("</div>"), d2(ssrRenderComponent(il, { ref_key: "uploadRef", ref: u2, label: "\u9009\u62E9\u9700\u8981\u8F6C\u6362\u7684\u6587\u4EF6", rules: D2, "prepend-icon": "", modelValue: unref(P2), "onUpdate:modelValue": (e2) => isRef(P2) ? P2.value = e2 : null, onChange: O2, class: "custom-file-input" }, null, v3)), d2("</div></div>"), d2(ssrRenderComponent(Sf, { modelValue: unref(V2), "onUpdate:modelValue": (e2) => isRef(V2) ? V2.value = e2 : null, "max-width": "500", persistent: "" }, { default: withCtx((e2, l2, a4, o2) => {
      if (!l2) return [unref(b2) ? (openBlock(), createBlock(Wp, { key: 0, title: "\u5904\u7406\u4E2D" }, { default: withCtx(() => [createVNode(Gp, null, { default: withCtx(() => [createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")]), _: 1 }), createVNode(ap, { color: "light-blue", height: "10", striped: "", modelValue: unref(k2), "onUpdate:modelValue": (e3) => isRef(k2) ? k2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 })) : createCommentVNode("", true), unref(_2) ? (openBlock(), createBlock(Wp, { key: 1, title: "\u6B63\u5728\u5904\u7406\u56FE\u50CF" }, { default: withCtx(() => [createVNode(Gp, null, { default: withCtx(() => [createVNode($d, { indeterminate: "" })]), _: 1 })]), _: 1 })) : createCommentVNode("", true)];
      unref(b2) ? l2(ssrRenderComponent(Wp, { title: "\u5904\u7406\u4E2D" }, { default: withCtx((e3, l3, a5, o3) => {
        if (!l3) return [createVNode(Gp, null, { default: withCtx(() => [createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")]), _: 1 }), createVNode(ap, { color: "light-blue", height: "10", striped: "", modelValue: unref(k2), "onUpdate:modelValue": (e4) => isRef(k2) ? k2.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(Gp, null, { default: withCtx((e4, l4, a6, t2) => {
          if (!l4) return [createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")];
          l4(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ");
        }), _: 1 }, a5, o3)), l3(ssrRenderComponent(ap, { color: "light-blue", height: "10", striped: "", modelValue: unref(k2), "onUpdate:modelValue": (e4) => isRef(k2) ? k2.value = e4 : null }, null, a5, o3));
      }), _: 1 }, a4, o2)) : l2("<!---->"), unref(_2) ? l2(ssrRenderComponent(Wp, { title: "\u6B63\u5728\u5904\u7406\u56FE\u50CF" }, { default: withCtx((e3, l3, a5, o3) => {
        if (!l3) return [createVNode(Gp, null, { default: withCtx(() => [createVNode($d, { indeterminate: "" })]), _: 1 })];
        l3(ssrRenderComponent(Gp, null, { default: withCtx((e4, l4, a6, o4) => {
          if (!l4) return [createVNode($d, { indeterminate: "" })];
          l4(ssrRenderComponent($d, { indeterminate: "" }, null, a6, o4));
        }), _: 1 }, a5, o3));
      }), _: 1 }, a4, o2)) : l2("<!---->");
    }), _: 1 }, v3)), d2(ssrRenderComponent(E$1, { modelValue: unref(U2), "onUpdate:modelValue": (e2) => isRef(U2) ? U2.value = e2 : null, elevation: "24", timeout: "3000", color: "red" }, { default: withCtx((e2, l2, a4, t2) => {
      if (!l2) return [createTextVNode(" \u56FE\u7247\u5DF2\u7ECF\u5904\u7406\u5B8C\u6210\u5566\uFF0C\u62D6\u52A8\u5206\u5272\u6761\u770B\u770B\u5427\uFF01 ")];
      l2(" \u56FE\u7247\u5DF2\u7ECF\u5904\u7406\u5B8C\u6210\u5566\uFF0C\u62D6\u52A8\u5206\u5272\u6761\u770B\u770B\u5427\uFF01 ");
    }), _: 1 }, v3)), d2("<!--]-->");
  };
} }), T = O.setup;
O.setup = (e2, l2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/bgremoval.vue"), T ? T(e2, l2) : void 0;
};
const E = o(O, [["__scopeId", "data-v-de1632cc"]]);

export { E as default };
