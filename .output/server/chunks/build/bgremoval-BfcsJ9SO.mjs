import { m as makeVSelectionControlProps, V as VSelectionControl, a as makeVInputProps, u as useFocus, b as VInput, c as VFileInput, d as VSnackbar, _ as __nuxt_component_0 } from './VSnackbar-DhhPecVl.mjs';
import { _ as _export_sfc, u as useSeoMeta } from './_plugin-vue_export-helper-BfqB2mGJ.mjs';
import { computed, createVNode, mergeProps, useSSRContext, defineComponent, ref, unref, withCtx, isRef, createTextVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { removeBackground } from '@imgly/background-removal';
import { f as propsFactory, I as IconValue, g as genericComponent, k as useProxiedModel, l as useRender, o as omit, m as getUid, q as filterInputAttrs, V as VBtn, s as VTooltip, t as VDialog, v as VCard, x as VCardText, y as VProgressLinear, z as VProgressCircular } from './server.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});
const makeVCheckboxProps = propsFactory({
  ...makeVInputProps(),
  ...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
const VCheckbox = genericComponent()({
  name: "VCheckbox",
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:focused": (focused) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const uid = getUid();
    const id = computed(() => props.id || `checkbox-${uid}`);
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-checkbox", props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VCheckboxBtn, mergeProps(checkboxProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "error": isValid.value === false,
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bgremoval",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u6D88\u9664\u56FE\u7247\u80CC\u666F - \u5728\u7EBF\u62A0\u56FE\u53BB\u9664\u80CC\u666F | labs.wowyou.cc",
      ogTitle: "\u6D88\u9664\u56FE\u7247\u80CC\u666F - \u5728\u7EBF\u62A0\u56FE\u53BB\u9664\u80CC\u666F",
      keywords: "\u6D88\u9664\u56FE\u7247\u80CC\u666F,\u62A0\u56FE,\u53BB\u80CC\u666F",
      ogType: "website",
      description: "\u5728\u7EBF\u62A0\u56FE\u5DE5\u5177\u8F7B\u677E\u5B9E\u73B0\u4E00\u952E\u62A0\u56FE\uFF0C\u53EA\u9700\u4E0A\u4F20\u56FE\u7247\uFF0C\u65E0\u9700\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u53EF100%\u81EA\u52A8\u53BB\u9664\u56FE\u7247\u80CC\u666F",
      ogDescription: "\u5728\u7EBF\u62A0\u56FE\u5DE5\u5177\u8F7B\u677E\u5B9E\u73B0\u4E00\u952E\u62A0\u56FE\uFF0C\u53EA\u9700\u4E0A\u4F20\u56FE\u7247\uFF0C\u65E0\u9700\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u53EF100%\u81EA\u52A8\u53BB\u9664\u56FE\u7247\u80CC\u666F",
      twitterCard: "summary_large_image",
      ogUrl: "https://labs.wowyou.cc/bgremoval",
      ogLocale: "zh",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    });
    const uploadRef = ref(null);
    const isActive = ref(false);
    const gpu = ref(false);
    const dialog = ref(false);
    const isLoading = ref(false);
    const isProgress = ref(false);
    const snackbar = ref(false);
    const disabled = ref(true);
    const downloadProgress = ref(0);
    const imgSliderVal = ref(75);
    const files = ref([]);
    const rules = [
      (value) => {
        return !value || !value.length || value[0].size < 2e6 || "Avatar size should be less than 2 MB!";
      }
    ];
    const before = ref("");
    const after = ref("");
    function handleDownload() {
      if (after.value) {
        const link = (void 0).createElement("a");
        link.href = after.value;
        link.download = `remove-bg-${Date.now()}.png`;
        link.click();
      }
    }
    function upload() {
      uploadRef == null ? void 0 : uploadRef.value.click();
    }
    function remove() {
      downloadProgress.value = 0;
      let file = files.value;
      const url = URL.createObjectURL(file);
      before.value = url;
      after.value = url;
      isActive.value = true;
      disabled.value = true;
      doRemove(url);
    }
    function doRemove(url) {
      let config = {
        debug: false,
        model: "isnet",
        output: {
          quality: 0.8,
          format: "image/png"
          //image/jpeg, image/webp
        },
        device: gpu.value ? "gpu" : "cpu",
        //publicPath: "http://localhost:3000/ai-data/", // path to the wasm files
        progress: (key, current, total) => {
          let per = (current / total * 100).toFixed(0);
          if (key.includes("fetch:")) {
            if (key.includes("model")) {
              downloadProgress.value = Number(per);
            }
          }
          if (key == "compute:decode") {
            isLoading.value = false;
            isProgress.value = true;
          }
        }
      };
      console.time();
      isLoading.value = true;
      isProgress.value = false;
      dialog.value = true;
      let imageData = url;
      removeBackground(imageData, config).then((blob) => {
        const url2 = URL.createObjectURL(blob);
        after.value = url2;
        imgSliderVal.value = 15;
        isLoading.value = false;
        isProgress.value = false;
        dialog.value = false;
        snackbar.value = true;
        disabled.value = false;
        console.timeEnd();
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<!--[--><div class="d-flex justify-center flex-column mt-10" data-v-d2f9b246><div class="d-flex justify-center remove" data-v-d2f9b246>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="mt-10" data-v-d2f9b246><div class="d-flex justify-center align-center flex-column" data-v-d2f9b246><div class="d-flex justify-center align-center ga-5 mb-6" data-v-d2f9b246>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: upload,
        text: _ctx.$t("Upload Image"),
        "prepend-icon": "mdi-image",
        elevation: "12",
        size: "x-large",
        rounded: "xl",
        width: "180px",
        height: "55px",
        class: "text-none"
      }, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: handleDownload,
        text: _ctx.$t("Download Image"),
        "prepend-icon": "mdi-download",
        elevation: "12",
        size: "x-large",
        width: "180px",
        height: "55px",
        rounded: "xl",
        disabled: unref(disabled),
        class: "text-none"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VTooltip, { text: "\u7535\u8111\u6709GPU\u7684\u8BDD\u52FE\u9009\u51FA\u56FE\u66F4\u5FEB" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCheckbox, mergeProps({
              label: "\u4F7F\u7528GPU",
              modelValue: unref(gpu),
              "onUpdate:modelValue": ($event) => isRef(gpu) ? gpu.value = $event : null
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCheckbox, mergeProps({
                label: "\u4F7F\u7528GPU",
                modelValue: unref(gpu),
                "onUpdate:modelValue": ($event) => isRef(gpu) ? gpu.value = $event : null
              }, props), null, 16, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VFileInput, {
        ref_key: "uploadRef",
        ref: uploadRef,
        label: "\u9009\u62E9\u9700\u8981\u8F6C\u6362\u7684\u6587\u4EF6",
        rules,
        "prepend-icon": "",
        modelValue: unref(files),
        "onUpdate:modelValue": ($event) => isRef(files) ? files.value = $event : null,
        onChange: remove,
        class: "custom-file-input"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        "max-width": "500",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLoading)) {
              _push2(ssrRenderComponent(VCard, { title: "\u5904\u7406\u4E2D" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 `);
                        } else {
                          return [
                            createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VProgressLinear, {
                      color: "light-blue",
                      height: "10",
                      striped: "",
                      modelValue: unref(downloadProgress),
                      "onUpdate:modelValue": ($event) => isRef(downloadProgress) ? downloadProgress.value = $event : null
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VProgressLinear, {
                        color: "light-blue",
                        height: "10",
                        striped: "",
                        modelValue: unref(downloadProgress),
                        "onUpdate:modelValue": ($event) => isRef(downloadProgress) ? downloadProgress.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isProgress)) {
              _push2(ssrRenderComponent(VCard, { title: "\u6B63\u5728\u5904\u7406\u56FE\u50CF" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VProgressCircular, { indeterminate: "" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VProgressCircular, { indeterminate: "" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VProgressCircular, { indeterminate: "" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(isLoading) ? (openBlock(), createBlock(VCard, {
                key: 0,
                title: "\u5904\u7406\u4E2D"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" \u521D\u59CB\u5316AI\u6A21\u578B\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B\uFF0C\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u5904\u7406\u56FE\u7247 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VProgressLinear, {
                    color: "light-blue",
                    height: "10",
                    striped: "",
                    modelValue: unref(downloadProgress),
                    "onUpdate:modelValue": ($event) => isRef(downloadProgress) ? downloadProgress.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isProgress) ? (openBlock(), createBlock(VCard, {
                key: 1,
                title: "\u6B63\u5728\u5904\u7406\u56FE\u50CF"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VProgressCircular, { indeterminate: "" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(snackbar),
        "onUpdate:modelValue": ($event) => isRef(snackbar) ? snackbar.value = $event : null,
        elevation: "24",
        timeout: "3000",
        color: "red"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u56FE\u7247\u5DF2\u7ECF\u5904\u7406\u5B8C\u6210\u5566\uFF0C\u62D6\u52A8\u5206\u5272\u6761\u770B\u770B\u5427\uFF01 `);
          } else {
            return [
              createTextVNode(" \u56FE\u7247\u5DF2\u7ECF\u5904\u7406\u5B8C\u6210\u5566\uFF0C\u62D6\u52A8\u5206\u5272\u6761\u770B\u770B\u5427\uFF01 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bgremoval.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bgremoval = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2f9b246"]]);

export { bgremoval as default };
