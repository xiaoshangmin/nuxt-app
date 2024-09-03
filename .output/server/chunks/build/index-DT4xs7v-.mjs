import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { f as propsFactory, A as makeComponentProps, X as makeDimensionProps, a0 as makeTagProps, g as genericComponent, _ as useRtl, Y as useDimension, l as useRender, aL as breakpoints, ac as makeRoundedProps, aa as makeElevationProps, R as Ripple, ah as useElevation, K as useTextColor, at as convertToUnit, aQ as VScaleTransition, ai as useRounded, L as useBackgroundColor, k as useProxiedModel, ar as useLoader, m as getUid, q as filterInputAttrs, ao as VDefaultsProvider, G as VIcon, av as LoaderSlot, z as VProgressCircular, o as omit, aT as makeVBtnProps, V as VBtn, aA as forwardRefs, B as makeThemeProps, Z as provideTheme, N as useLocale, a3 as useGroup, ab as makeGroupItemProps, aV as makeLazyProps, ak as useGroupItem, aW as useSsrBoot, aX as useLazy, Q as MaybeTransition, D as makeDensityProps, H as useDensity, aG as useScopeId, F as provideDefaults, aZ as Intersect, I as IconValue, y as VProgressLinear, b0 as makeVImgProps, a_ as VImg, b2 as makeVDialogProps, t as VDialog, b3 as makeLayoutItemProps, aC as makeLocationProps, O as makeTransitionProps, a4 as useResizeObserver, U as useToggleScope, b4 as useLayoutItem, a9 as makeBorderProps, aD as makePositionProps, af as useBorder, b5 as useLocation, aF as usePosition, aN as getDecimals, aO as createRange, aS as IN_BROWSER, au as animate, aw as standardEasing, aY as isObject, aB as callEvent, a2 as useDisplay, s as VTooltip, v as VCard, aM as useState, aP as clamp, aU as keys, a$ as VBtnToggle, x as VCardText, b1 as VDivider, aR as keyValues } from './server.mjs';
import { createVNode, capitalize, computed, h, inject, withDirectives, resolveDirective, vShow, ref, mergeProps, Fragment, shallowRef, watch, provide, toRef, cloneVNode, watchEffect, nextTick, useSSRContext, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, isRef, reactive, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSeoMeta } from './_plugin-vue_export-helper-BfqB2mGJ.mjs';
import { e as makeFocusProps, a as makeVInputProps, u as useFocus, b as VInput, f as VLabel, m as makeVSelectionControlProps, V as VSelectionControl, g as makeVSlideGroupProps, h as VSlideGroup, i as makeVFieldProps, j as filterFieldProps, k as VField, l as VCounter, d as VSnackbar, c as VFileInput, _ as __nuxt_component_0$1 } from './VSnackbar-DhhPecVl.mjs';
import { codeToHtml } from 'shiki';
import axios from 'axios';
import html2canvas from 'html2canvas';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = "order" + capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str) => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: [classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const useSharedConfig = () => {
  const defaultUserConfig = {
    content: `\u5728\u8FD9\u8F93\u5165\u6B63\u6587...`,
    title: `\u5728\u8FD9\u8F93\u5165\u6807\u9898`,
    author: "\u5728\u8FD9\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65F6\u95F4/\u4F5C\u8005/\u5730\u70B9",
    qrCodeTitle: "\u521B\u56FE\u5361\u7247",
    qrCodeDesc: "\u626B\u63CF\u4E8C\u7EF4\u7801",
    qrData: "https://labs.wowyou.cc/",
    update: false,
    tempId: "temp-1",
    styleObject: {
      padding: "30px",
      width: "390px",
      transition: "",
      "--base-font-size": "1rem"
    },
    scale: {
      minHeight: "4rem"
    },
    show: {
      title: true,
      content: true,
      qrcode: true,
      author: true,
      padding: false
    },
    codeData: {
      code: `class HelloWorld {
    greet() {
        console.log('Hello, World!');
    }
}

const helloWorld = new HelloWorld();
helloWorld.greet();`,
      highlightedCode: `<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#81A1C1">class</span><span style="color:#8FBCBB"> HelloWorld</span><span style="color:#ECEFF4"> {</span></span>
<span class="line"><span style="color:#88C0D0">    greet</span><span style="color:#ECEFF4">()</span><span style="color:#ECEFF4"> {</span></span>
<span class="line"><span style="color:#D8DEE9">        console</span><span style="color:#ECEFF4">.</span><span style="color:#88C0D0">log</span><span style="color:#D8DEE9FF">(</span><span style="color:#ECEFF4">'</span><span style="color:#A3BE8C">Hello, World!</span><span style="color:#ECEFF4">'</span><span style="color:#D8DEE9FF">)</span><span style="color:#81A1C1">;</span></span>
<span class="line"><span style="color:#ECEFF4">    }</span></span>
<span class="line"><span style="color:#ECEFF4">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1">const</span><span style="color:#D8DEE9"> helloWorld</span><span style="color:#81A1C1"> =</span><span style="color:#81A1C1"> new</span><span style="color:#88C0D0"> HelloWorld</span><span style="color:#D8DEE9FF">()</span><span style="color:#81A1C1">;</span></span>
<span class="line"><span style="color:#D8DEE9">helloWorld</span><span style="color:#ECEFF4">.</span><span style="color:#88C0D0">greet</span><span style="color:#D8DEE9FF">()</span><span style="color:#81A1C1">;</span></span></code></pre>`
    },
    metaData: {
      title: "\u521B\u56FE\u5361\u7247",
      description: "\u521B\u56FE\u5361\u7247\u8BA9\u4F60\u4F53\u9A8C\u5168\u65B0\u7684\u6587\u5B57\u5206\u4EAB\uFF0C\u8BA9\u4F60\u7684\u6587\u5B57\u66F4\u5177\u7279\u8272",
      url: "https://labs.wowyou.cc",
      image: "",
      logo: "",
      author: "",
      publisher: "\u521B\u56FE\u5361\u7247",
      base64Image: "data:image/png;base64,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",
      base64Logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAETNJREFUeF7tnW9OG0kTh3tMsmxO8ZJbRAqrJSdJuIW/hXzzLSAngVWItLcIewqWFfG8HhsTbIyna6b/Vj2RXu0rMdPT9VT1z9XVPT2N4x8EIGCWQGPWcgyHAAQcAkAQQMAwAQTAsPMxHQIIADEAAcMEEADDzsd0CCAAxAAEDBNAAAw7H9MhgAAQAxAwTAABMOx8TIcAAkAMQMAwAQTAsPMxHQIIADEAAcMEEADDzsd0CCAAxAAEDBNAAAp1/vTd7ZF75Y5cc3C07GL782b533t3M/v7zer/8w8CIwkgACMBhrh9NdgnH51rT1btNQ//3dN66zoRuHKT5q/Zt98uQvSDNuwRQAAy+nx6fPfZtd2vvPs0uhudIDTuYnZ9+GV0WzRghgACkMHVy4Hv3FmUR5MZRMGqtVEEIKFnp8e3J66dnC9+qVfz+tj/1mLQzL/Ort9cxX4c7ddHAAFI4LPlHP9g8jlIqj+0vw9TBHc//0oRcShEffchAJF9+lDg+xH5McLm2yvXTL5SPBRiU3g5AhDRqcuU300uIz5iXNNMEcbxU3A3AhDJicUP/m2711MEN/+LekGkoCiwWQQgglOqG/wviAFLihGCo7AmEYDADilzzj/QSJYUB4Kr5zYEILCvpsf/Xnrt5Ot77mrwOde0q/+2TbdhKM3y4a6+US/o81iVf0cAArpt9AYfj918ywzj9cGJa+cfgwjNEPtZUhxCrch7EIBAbhk57z8bMt/efIfA4/2BQLZuNNOJwaT5wpJiDLjx20QAAjEelPovf0nnpyGq7o9i0LpPWaYKTBECRVLaZhCAALyH/fq3V7Pr3z8EePxGE4+vEbeTj9l2HrKkGNqt0dpDAAKglf/6xxn826ZQLwjgXOVNIAAjHSz/9U8z+HeKweOZAxnqBcusoL1hC/LIgAt8OwIwEuj0/V33dp//+/z387e5X8ahXjDS6YpuRwBGOnP6/u6Hf9Ft/iFEwW9klx9vp14QimS97SAAI3w3/eO/T65tz72aaN3N7PvhW69rM1xUUr1gyJJoBmQqHokAjHCjKP1vmtNa1sqziwFbkEdEpexWBEDGa3PJ7fiu9b198atWJWvqBb4ervO6KoOyBNTC9P9i9v3wtIR+j+nDw5Fm+fcXcKrRGDdu3IsADEQpW/svq/g30OTN4mHO9xFYUhzrwsf7EYCBKBcv/qhP/33QFFMv4OBTH3c9uwYBGIBNlP47N+hFnwHdyn5LEfWCxl04TjXyjgUEwBvVrwtF6X8BG38GmDj6luwnIXu8Wj3aSAUNqBKAX+lo+7+lb5Zf3WkjHKLhuZW2dSqKf2Pi/NEn8/ZP0Y7JMQ99ei9LintJVi0ARbwPvw/v+lSfUMFcezs5TzRa/SCsvqdIvaDuIuBq4Dfn2U7EqX0g0v+VGHT1AuNLilVlAAx8Rm4cAnY/lFKFADDw44Q9rW4RMDhFKF4A5O/bE9YQCEDAyKlGRQuAcL09gNdpAgI7CCheUixWAERv2hG1EEhBQOGSYpECINpok8LxPAMC2wSU1AuKE4DRH9cgVCGQmkDFS4pFCQAFv9SRq+15q+W8bF9NWmcFP+dfcp/76OvZYgRA1Uc1felzXQwCy5evsu4SrUgIyhGAUB/VjBFStFkPgR1fW8r2lmIFqwdFCACpfz3jq4qedgPv5/zDdhqe7xTk9srdt6clTgsKEYBAn9SuIjrpZBICPW9iJj/I5AVRSsJiz0OyCwC//rlDQOnzBR9eTSYGBU4JChAAfv2VDsECzJJ/hi16vaCwz6kXIAD+Z+sVEFF0oToCww9kjXaqkSA7iY07qwCw1z+2e2l/cSrU6FOZopxqVEhNIK8ASD+sSTxDQEog8CfZgtYLAvdNiqa7Pq8ACI7WHmIc90BgRWD4NGAfwV+bjdzZYNIBMpTBz84pAKT/Y9zGvUICUY9mH1U4zFwPyJYBIADCEObyEQTkqwFDHvZQNLz0/1z8+ilp+rfLJgRgiKe5pzIC6QbY4GlBpq9H5xOA47vPiygaPneqLATpbkYCiYttw86wTCdSTz2RTwBYAcg4Iow9OrEAdHSHTQfiFCv3eRsBMDYWrJq7eEU4eayLt7lnWBFIDmUdgBz7ZXUoZrI70zcaRXGeIVNBADLFI49NTCCbANyeODe59Lc27TQAAfD3DFfWTCCTACzrAbLDbqLuWdh2IQJQc1DTd38CWQVAkgWkXQ1AAPxDiCtrJpBRAERZQOI6AAJQc1DTd38CCMBOVgiAfwhxZc0EsguAYONbwr4iADUHNX33J5BwUO3qlOjdl4R9RQD8Q4grayaQcFAhAB6BIlwa8WiRSyCwh0BuAZC8+5Kwr2QAjBobBBIOqp0ZgODdl5TblhEAG+GPlfkF4IfvOQEIAOEKgdAEMgqAqADo2AgU2vW0BwHncgqAIP0PcYqxxN1MASS0uLZeAnkFwDv9d4lPBkIA6g1pei4hkEkAZOm/S56pIACSIOLaegnkEgBJ+u+cS1kA7JyJANQb0vRcQiCXAEi+fcGJQBKPci0EBAQyCEDp6T8ZgCB+uLRyAjkEQHQQSNrlv7U3mQJUHtd035NAFgEQfPk6cfUfAfCMGy5TQiCxAEyFxb9c+xTIAJTEN2b0EEgvAP5r/xmKf2QAjBhbBBIKgLj4lyn9pwhoawjYtjalAAjT/9Rr/08DgSmA7WFhx/qUAlD42j8CYCfssXRNIJEAiNN/l/ZDINsBQQbAELFBIJUAiNb+02/9RQBshDtWbhNIJgCCtf+M1X9WARgitggkEABx+p+gT31OZgrQR4i/6yCQYLBN39/5r/0nPvnnJSciADrCGyv6CEQWgOmx5Pt/3Xu4zens228Xfd2O/XcEIDZh2i+DQGwBEK7959r6SxGwjHCkF6kJxBcA//S/gOIfRcDUAcjz8hKIKADi4l8h6X/nEKYAecOSp6ciEFMAhOl/zq2/TAFSBRzPKYtATAGoaOsvAlBWWNKbVAQiCYA4/c+89RcBSBVwPKcsArEEoLKtvwhAWWFJb1IRiCYAdW39RQBSBRzPKYtABAGYSj753dGI0IexkFkFGEuQ++sgEGHw1bj1lwygjnCll6EJBBYAcfGvoLX/p2jJAEIHGu2VSSC0AAjX/ktM/ztHIQBlhiu9Ck0gtABUvPZPBhA6uGivfAIBBUBL+k8GUH7Y0sNQBEIKQOVr/2QAoYKKduohEFQA6l77RwDqCVt6GopAIAEQp/+Fbf1lGTBUQNFOXQRCCYDo2K/8p/72OYlVgD5C/F0HgQACID72q6CDP15yIgKgI7yxoo9ACAFQsvZPDaAvWPi7PgJhBEBy7NfN7Pvh29JBkgGU7iH6F4bASAEQF/8K3fpLETBMONFKbQTGCoDC9L9zIRlAbYFMf4cRGCsASrb+kgEMCx/uqp3ACAHQmv6TAdQe1PTfn8AYAVC09ZcMwD9kuFITgVECoGfrLwKgKaixxZ/AQAEQp/+Fb/1FAPxDhis1ERgqAMq2/iIAmoIaW/wJDBAAjVt/EQD/kOFKTQSGCIB07b+y9J9VAE0Bji37CQwTAHVbf8kAGCg2CQgFQFz8q2TrLwJgM/yxWioA0vRf2H4pDmErcCmeoB9xCQgH6OKrP613hyp47/8lWxAAby9zYdUEBAJgJf2nCFh1RNN5EQGJACje+ksNQBQ1XKyGgKcATN/dHrlXkx/edlec/pMBeHuZC6sn4CsA0uJfpdX/tT+pAVQf2RjgRcBfAPzX/l35p/72sUEA+gjxdx0EPARAXPyrPP1nCqAjtLHCh4CPAEjT/wq3/lIE9AkWrtFHwEcAJGv/CtJ/MgB9YY5FLxHoEQBx+l958Y8iIEPFFoE+ARCu/TuPjKIGwBQBa/ASfRxPoFcAbGz9pQYwPpRooUYCewTAavpPDaDGQKbPwwjsEwDlx37tA8YUYFg4cVdtBF4QAAvHfiEAtQUr/Q1P4CUBkK79K6n+swoQPsRosWQCLwuAqa2/FAFLDlL6Fo/ADgEQF/8UbP1FAOKFGC2XTGCXAEjTfwVbfxGAkoOUvsUjsEsADG79RQDihRgtl0xgSwDE6b+y4h9FwJKDlb6FJ7AtAEa3/pIBhA8tWqyBwDMBsLn1FwGoIVjpY3gCTwRgKi3+KU3/O8jsBAwfarRYIoFNARCt/Wt582+XWxCAEoOVPoUn8CAA4uKfwrX/p3ARgPChRoslElgLAOn/hncQgBKDlT6FJ7AWANb+EYDw0UWLxRO4n791rw9OXNuee/dVefpPEdA7EriwegKdALxqzp1rTvxtmX+YXb+58r++viuZAtTnM3o8hMBSAASf/FJy6m8fKgSgjxB/10LgbGFI9z/ff2ez68MvvhfXeh0CUKvn6HdcAkpO/e2DhAD0EeLv9ggYKP6tnYoA2AtvLO4joHjr77bpCEBfMPB3ewSMpP+dYxEAe+GNxfsIGEr/EQCGAgSe5cTN6ezbbxdWwJABWPE0dnoRWCz9ZRsTXh0MfFE2Y6fSE1kCG05zEHhGwFj6zxSAMQCBDQL6t/6yCkDIQ+AFAtbSfzIAhgIE1gQMpv8IAOEPgTUBQ2v/T51OEZAhAAHXXs2uf/9gEQQCYNHr2LxJwNDWX4qABD8EtgkYTf+pATAUIGC0+Ld2PFMAhoBtAobTfzIA26GP9UaO/drnaDIAhoFdAsbTfzIAu6GP5UsC9rb+sgpA6EPggYDFrb8IAOEPgY4A6f8yDqgBMBxsEjC89v/U4QiAzfA3brXdrb9MAYyHPuZ3ea+tY79YBiTqIfCUAOn/Iw2mAAwNWwQo/m34GwGwFf5YS/qPADAK7BJg7X/T92QAdseCPctJ/5/5HAGwNwwMW8zWX5YBDYe/ddNJ/59HABmA9VFhyH4EAAEwFO6Yuk0AAUAAGBWGCSAACIDh8Md0BAABYBQYJoAAIACGwx/TEQAEgFFgmAACgAAYDn9MRwAQAEaBYQIIAAJgOPwxHQEoSQDe3527xn0iLCGQigACUJIAHN99XnTnLJXzeY5xAq27mX0/fGucwjPzM74LgAAQjCkJcBDoLtr5BOCP/z65tj1PGQI8yzABzgLY6fx8AnB8e+Lc5NJwSGJ6SgIIQGEC8O72yL2a/EgZAzzLMAHOAixLALreTI//vXSuOTEclpieiAArALtBZ5sCLAWAOkCi8Df+GNL/FwMgrwAwDTA+MhOZT/pfpgAwDUg0AKw/hi8BlSwArAZYH59R7Sf934s36xRg3TOKgVGHgO3G+fWvQACoBdgepLGs59e/l2wRGQC1gF4/ccEQAvz691IrRwC6LOBgcukad9Tbay6AQC8BvgLUi8g5V4wALLMApgI+PuOafgJni40/X/ov44qiBGApAmwOIipHEeCtPwm+4gRgVQ/gVWGJE7n2gQDv/ItDoUwBWE0FPi6s4cAQsUuN3sDgH+T4IgVgbQmZwCCfGryJtH+o04sWgMfCIKsDQ/1r4T4KfiO8XLwAPFkdYEowwtHqbm3djWvmp7PrN1fqbEtoUBUC8DglWO0V+MxpwgkjpLRHLQe+u2CZL4xjqhIAhCCM06tshYEfxW1VCsCGELw+OHHz9k+ygijxkbfRh0Hv7udfZ3+/ucnbGZ1Pr1oAtl2y3EnYCcL6XycM/CufQON+De6m+ce1P2+Y26dxmyoBSIOMp0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgIIgBgZN0BADwEEQI8vsQQCYgL/B/67TIj+XfEmAAAAAElFTkSuQmCC"
    }
  };
  const userConfig = useState("userConfig", () => {
    return defaultUserConfig;
  });
  const initUserConfig = () => {
  };
  const updateShareUserConfig = (newData) => {
    userConfig.value = { ...userConfig.value, ...newData };
  };
  return { userConfig, initUserConfig, updateShareUserConfig };
};
const _imports_0 = "" + buildAssetsURL("temp-1.NYvxd2TQ.png");
const _imports_1 = "" + buildAssetsURL("temp-2.D4PRaVJM.png");
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + buildAssetsURL("temp-4.DFwHO0q9.png");
const VSliderSymbol = Symbol.for("vuetify:v-slider");
function getOffset(e, el, direction) {
  const vertical = direction === "vertical";
  const rect = el.getBoundingClientRect();
  const touch = "touches" in e ? e.touches[0] : e;
  return vertical ? touch.clientY - (rect.top + rect.height / 2) : touch.clientX - (rect.left + rect.width / 2);
}
function getPosition(e, position) {
  if ("touches" in e && e.touches.length)
    return e.touches[0][position];
  else if ("changedTouches" in e && e.changedTouches.length)
    return e.changedTouches[0][position];
  else
    return e[position];
}
const makeSliderProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (v) => typeof v === "boolean" || v === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: false,
    validator: (v) => typeof v === "boolean" || v === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  reverse: Boolean,
  ...makeRoundedProps(),
  ...makeElevationProps({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: true
  }
}, "Slider");
const useSteps = (props) => {
  const min = computed(() => parseFloat(props.min));
  const max = computed(() => parseFloat(props.max));
  const step = computed(() => +props.step > 0 ? parseFloat(props.step) : 0);
  const decimals = computed(() => Math.max(getDecimals(step.value), getDecimals(min.value)));
  function roundValue(value) {
    value = parseFloat(value);
    if (step.value <= 0)
      return value;
    const clamped = clamp(value, min.value, max.value);
    const offset = min.value % step.value;
    const newValue = Math.round((clamped - offset) / step.value) * step.value + offset;
    return parseFloat(Math.min(newValue, max.value).toFixed(decimals.value));
  }
  return {
    min,
    max,
    step,
    decimals,
    roundValue
  };
};
const useSlider = (_ref) => {
  let {
    props,
    steps,
    onSliderStart,
    onSliderMove,
    onSliderEnd,
    getActiveThumb
  } = _ref;
  const {
    isRtl
  } = useRtl();
  const isReversed = toRef(props, "reverse");
  const vertical = computed(() => props.direction === "vertical");
  const indexFromEnd = computed(() => vertical.value !== isReversed.value);
  const {
    min,
    max,
    step,
    decimals,
    roundValue
  } = steps;
  const thumbSize = computed(() => parseInt(props.thumbSize, 10));
  const tickSize = computed(() => parseInt(props.tickSize, 10));
  const trackSize = computed(() => parseInt(props.trackSize, 10));
  const numTicks = computed(() => (max.value - min.value) / step.value);
  const disabled = toRef(props, "disabled");
  const thumbColor = computed(() => {
    var _a;
    return props.error || props.disabled ? void 0 : (_a = props.thumbColor) != null ? _a : props.color;
  });
  const trackColor = computed(() => {
    var _a;
    return props.error || props.disabled ? void 0 : (_a = props.trackColor) != null ? _a : props.color;
  });
  const trackFillColor = computed(() => {
    var _a;
    return props.error || props.disabled ? void 0 : (_a = props.trackFillColor) != null ? _a : props.color;
  });
  const mousePressed = shallowRef(false);
  const startOffset = shallowRef(0);
  const trackContainerRef = ref();
  const activeThumbRef = ref();
  function parseMouseMove(e) {
    var _a;
    const vertical2 = props.direction === "vertical";
    const start = vertical2 ? "top" : "left";
    const length = vertical2 ? "height" : "width";
    const position2 = vertical2 ? "clientY" : "clientX";
    const {
      [start]: trackStart,
      [length]: trackLength
    } = (_a = trackContainerRef.value) == null ? void 0 : _a.$el.getBoundingClientRect();
    const clickOffset = getPosition(e, position2);
    let clickPos = Math.min(Math.max((clickOffset - trackStart - startOffset.value) / trackLength, 0), 1) || 0;
    if (vertical2 ? indexFromEnd.value : indexFromEnd.value !== isRtl.value)
      clickPos = 1 - clickPos;
    return roundValue(min.value + clickPos * (max.value - min.value));
  }
  const handleStop = (e) => {
    onSliderEnd({
      value: parseMouseMove(e)
    });
    mousePressed.value = false;
    startOffset.value = 0;
  };
  const handleStart = (e) => {
    activeThumbRef.value = getActiveThumb(e);
    if (!activeThumbRef.value)
      return;
    activeThumbRef.value.focus();
    mousePressed.value = true;
    if (activeThumbRef.value.contains(e.target)) {
      startOffset.value = getOffset(e, activeThumbRef.value, props.direction);
    } else {
      startOffset.value = 0;
      onSliderMove({
        value: parseMouseMove(e)
      });
    }
    onSliderStart({
      value: parseMouseMove(e)
    });
  };
  const moveListenerOptions = {
    passive: true,
    capture: true
  };
  function onMouseMove(e) {
    onSliderMove({
      value: parseMouseMove(e)
    });
  }
  function onSliderMouseUp(e) {
    e.stopPropagation();
    e.preventDefault();
    handleStop(e);
    (void 0).removeEventListener("mousemove", onMouseMove, moveListenerOptions);
    (void 0).removeEventListener("mouseup", onSliderMouseUp);
  }
  function onSliderTouchend(e) {
    var _a;
    handleStop(e);
    (void 0).removeEventListener("touchmove", onMouseMove, moveListenerOptions);
    (_a = e.target) == null ? void 0 : _a.removeEventListener("touchend", onSliderTouchend);
  }
  function onSliderTouchstart(e) {
    var _a;
    handleStart(e);
    (void 0).addEventListener("touchmove", onMouseMove, moveListenerOptions);
    (_a = e.target) == null ? void 0 : _a.addEventListener("touchend", onSliderTouchend, {
      passive: false
    });
  }
  function onSliderMousedown(e) {
    e.preventDefault();
    handleStart(e);
    (void 0).addEventListener("mousemove", onMouseMove, moveListenerOptions);
    (void 0).addEventListener("mouseup", onSliderMouseUp, {
      passive: false
    });
  }
  const position = (val) => {
    const percentage = (val - min.value) / (max.value - min.value) * 100;
    return clamp(isNaN(percentage) ? 0 : percentage, 0, 100);
  };
  const showTicks = toRef(props, "showTicks");
  const parsedTicks = computed(() => {
    if (!showTicks.value)
      return [];
    if (!props.ticks) {
      return numTicks.value !== Infinity ? createRange(numTicks.value + 1).map((t) => {
        const value = min.value + t * step.value;
        return {
          value,
          position: position(value)
        };
      }) : [];
    }
    if (Array.isArray(props.ticks))
      return props.ticks.map((t) => ({
        value: t,
        position: position(t),
        label: t.toString()
      }));
    return Object.keys(props.ticks).map((key) => ({
      value: parseFloat(key),
      position: position(parseFloat(key)),
      label: props.ticks[key]
    }));
  });
  const hasLabels = computed(() => parsedTicks.value.some((_ref2) => {
    let {
      label
    } = _ref2;
    return !!label;
  }));
  const data = {
    activeThumbRef,
    color: toRef(props, "color"),
    decimals,
    disabled,
    direction: toRef(props, "direction"),
    elevation: toRef(props, "elevation"),
    hasLabels,
    isReversed,
    indexFromEnd,
    min,
    max,
    mousePressed,
    numTicks,
    onSliderMousedown,
    onSliderTouchstart,
    parsedTicks,
    parseMouseMove,
    position,
    readonly: toRef(props, "readonly"),
    rounded: toRef(props, "rounded"),
    roundValue,
    showTicks,
    startOffset,
    step,
    thumbSize,
    thumbColor,
    thumbLabel: toRef(props, "thumbLabel"),
    ticks: toRef(props, "ticks"),
    tickSize,
    trackColor,
    trackContainerRef,
    trackFillColor,
    trackSize,
    vertical
  };
  provide(VSliderSymbol, data);
  return data;
};
const makeVSliderThumbProps = propsFactory({
  focused: Boolean,
  max: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  name: String,
  ...makeComponentProps()
}, "VSliderThumb");
const VSliderThumb = genericComponent()({
  name: "VSliderThumb",
  directives: {
    Ripple
  },
  props: makeVSliderThumbProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const slider = inject(VSliderSymbol);
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    if (!slider)
      throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor,
      step,
      disabled,
      thumbSize,
      thumbLabel,
      direction,
      isReversed,
      vertical,
      readonly,
      elevation,
      mousePressed,
      decimals,
      indexFromEnd
    } = slider;
    const elevationProps = computed(() => !disabled.value ? elevation.value : void 0);
    const {
      elevationClasses
    } = useElevation(elevationProps);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(thumbColor);
    const {
      pageup,
      pagedown,
      end,
      home,
      left,
      right,
      down,
      up
    } = keyValues;
    const relevantKeys = [pageup, pagedown, end, home, left, right, down, up];
    const multipliers = computed(() => {
      if (step.value)
        return [1, 2, 3];
      else
        return [1, 5, 10];
    });
    function parseKeydown(e, value) {
      if (!relevantKeys.includes(e.key))
        return;
      e.preventDefault();
      const _step = step.value || 0.1;
      const steps = (props.max - props.min) / _step;
      if ([left, right, down, up].includes(e.key)) {
        const increase = vertical.value ? [isRtl.value ? left : right, isReversed.value ? down : up] : indexFromEnd.value !== isRtl.value ? [left, up] : [right, up];
        const direction2 = increase.includes(e.key) ? 1 : -1;
        const multiplier = e.shiftKey ? 2 : e.ctrlKey ? 1 : 0;
        value = value + direction2 * _step * multipliers.value[multiplier];
      } else if (e.key === home) {
        value = props.min;
      } else if (e.key === end) {
        value = props.max;
      } else {
        const direction2 = e.key === pagedown ? 1 : -1;
        value = value - direction2 * _step * (steps > 100 ? steps / 10 : 10);
      }
      return Math.max(props.min, Math.min(props.max, value));
    }
    function onKeydown(e) {
      const newValue = parseKeydown(e, props.modelValue);
      newValue != null && emit("update:modelValue", newValue);
    }
    useRender(() => {
      const positionPercentage = convertToUnit(indexFromEnd.value ? 100 - props.position : props.position, "%");
      return createVNode("div", {
        "class": ["v-slider-thumb", {
          "v-slider-thumb--focused": props.focused,
          "v-slider-thumb--pressed": props.focused && mousePressed.value
        }, props.class, rtlClasses.value],
        "style": [{
          "--v-slider-thumb-position": positionPercentage,
          "--v-slider-thumb-size": convertToUnit(thumbSize.value)
        }, props.style],
        "role": "slider",
        "tabindex": disabled.value ? -1 : 0,
        "aria-label": props.name,
        "aria-valuemin": props.min,
        "aria-valuemax": props.max,
        "aria-valuenow": props.modelValue,
        "aria-readonly": !!readonly.value,
        "aria-orientation": direction.value,
        "onKeydown": !readonly.value ? onKeydown : void 0
      }, [createVNode("div", {
        "class": ["v-slider-thumb__surface", textColorClasses.value, elevationClasses.value],
        "style": {
          ...textColorStyles.value
        }
      }, null), withDirectives(createVNode("div", {
        "class": ["v-slider-thumb__ripple", textColorClasses.value],
        "style": textColorStyles.value
      }, null), [[resolveDirective("ripple"), props.ripple, null, {
        circle: true,
        center: true
      }]]), createVNode(VScaleTransition, {
        "origin": "bottom center"
      }, {
        default: () => {
          var _a2;
          var _a;
          return [withDirectives(createVNode("div", {
            "class": "v-slider-thumb__label-container"
          }, [createVNode("div", {
            "class": ["v-slider-thumb__label"]
          }, [createVNode("div", null, [(_a2 = (_a = slots["thumb-label"]) == null ? void 0 : _a.call(slots, {
            modelValue: props.modelValue
          })) != null ? _a2 : props.modelValue.toFixed(step.value ? decimals.value : 1)])])]), [[vShow, thumbLabel.value && props.focused || thumbLabel.value === "always"]])];
        }
      })]);
    });
    return {};
  }
});
const makeVSliderTrackProps = propsFactory({
  start: {
    type: Number,
    required: true
  },
  stop: {
    type: Number,
    required: true
  },
  ...makeComponentProps()
}, "VSliderTrack");
const VSliderTrack = genericComponent()({
  name: "VSliderTrack",
  props: makeVSliderTrackProps(),
  emits: {},
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const slider = inject(VSliderSymbol);
    if (!slider)
      throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color,
      parsedTicks,
      rounded,
      showTicks,
      tickSize,
      trackColor,
      trackFillColor,
      trackSize,
      vertical,
      min,
      max,
      indexFromEnd
    } = slider;
    const {
      roundedClasses
    } = useRounded(rounded);
    const {
      backgroundColorClasses: trackFillColorClasses,
      backgroundColorStyles: trackFillColorStyles
    } = useBackgroundColor(trackFillColor);
    const {
      backgroundColorClasses: trackColorClasses,
      backgroundColorStyles: trackColorStyles
    } = useBackgroundColor(trackColor);
    const startDir = computed(() => `inset-${vertical.value ? "block" : "inline"}-${indexFromEnd.value ? "end" : "start"}`);
    const endDir = computed(() => vertical.value ? "height" : "width");
    const backgroundStyles = computed(() => {
      return {
        [startDir.value]: "0%",
        [endDir.value]: "100%"
      };
    });
    const trackFillWidth = computed(() => props.stop - props.start);
    const trackFillStyles = computed(() => {
      return {
        [startDir.value]: convertToUnit(props.start, "%"),
        [endDir.value]: convertToUnit(trackFillWidth.value, "%")
      };
    });
    const computedTicks = computed(() => {
      if (!showTicks.value)
        return [];
      const ticks = vertical.value ? parsedTicks.value.slice().reverse() : parsedTicks.value;
      return ticks.map((tick, index2) => {
        var _a2;
        var _a;
        const directionValue = tick.value !== min.value && tick.value !== max.value ? convertToUnit(tick.position, "%") : void 0;
        return createVNode("div", {
          "key": tick.value,
          "class": ["v-slider-track__tick", {
            "v-slider-track__tick--filled": tick.position >= props.start && tick.position <= props.stop,
            "v-slider-track__tick--first": tick.value === min.value,
            "v-slider-track__tick--last": tick.value === max.value
          }],
          "style": {
            [startDir.value]: directionValue
          }
        }, [(tick.label || slots["tick-label"]) && createVNode("div", {
          "class": "v-slider-track__tick-label"
        }, [(_a2 = (_a = slots["tick-label"]) == null ? void 0 : _a.call(slots, {
          tick,
          index: index2
        })) != null ? _a2 : tick.label])]);
      });
    });
    useRender(() => {
      return createVNode("div", {
        "class": ["v-slider-track", roundedClasses.value, props.class],
        "style": [{
          "--v-slider-track-size": convertToUnit(trackSize.value),
          "--v-slider-tick-size": convertToUnit(tickSize.value)
        }, props.style]
      }, [createVNode("div", {
        "class": ["v-slider-track__background", trackColorClasses.value, {
          "v-slider-track__background--opacity": !!color.value || !trackFillColor.value
        }],
        "style": {
          ...backgroundStyles.value,
          ...trackColorStyles.value
        }
      }, null), createVNode("div", {
        "class": ["v-slider-track__fill", trackFillColorClasses.value],
        "style": {
          ...trackFillStyles.value,
          ...trackFillColorStyles.value
        }
      }, null), showTicks.value && createVNode("div", {
        "class": ["v-slider-track__ticks", {
          "v-slider-track__ticks--always-show": showTicks.value === "always"
        }]
      }, [computedTicks.value])]);
    });
    return {};
  }
});
const makeVSliderProps = propsFactory({
  ...makeFocusProps(),
  ...makeSliderProps(),
  ...makeVInputProps(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider");
const VSlider = genericComponent()({
  name: "VSlider",
  props: makeVSliderProps(),
  emits: {
    "update:focused": (value) => true,
    "update:modelValue": (v) => true,
    start: (value) => true,
    end: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const thumbContainerRef = ref();
    const {
      rtlClasses
    } = useRtl();
    const steps = useSteps(props);
    const model = useProxiedModel(props, "modelValue", void 0, (value) => {
      return steps.roundValue(value == null ? steps.min.value : value);
    });
    const {
      min,
      max,
      mousePressed,
      roundValue,
      onSliderMousedown,
      onSliderTouchstart,
      trackContainerRef,
      position,
      hasLabels,
      readonly
    } = useSlider({
      props,
      steps,
      onSliderStart: () => {
        emit("start", model.value);
      },
      onSliderEnd: (_ref2) => {
        let {
          value
        } = _ref2;
        const roundedValue = roundValue(value);
        model.value = roundedValue;
        emit("end", roundedValue);
      },
      onSliderMove: (_ref3) => {
        let {
          value
        } = _ref3;
        return model.value = roundValue(value);
      },
      getActiveThumb: () => {
        var _a;
        return (_a = thumbContainerRef.value) == null ? void 0 : _a.$el;
      }
    });
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const trackStop = computed(() => position(model.value));
    useRender(() => {
      const inputProps = VInput.filterProps(props);
      const hasPrepend = !!(props.label || slots.label || slots.prepend);
      return createVNode(VInput, mergeProps({
        "class": ["v-slider", {
          "v-slider--has-labels": !!slots["tick-label"] || hasLabels.value,
          "v-slider--focused": isFocused.value,
          "v-slider--pressed": mousePressed.value,
          "v-slider--disabled": props.disabled
        }, rtlClasses.value, props.class],
        "style": props.style
      }, inputProps, {
        "focused": isFocused.value
      }), {
        ...slots,
        prepend: hasPrepend ? (slotProps) => {
          var _a2;
          var _a, _b;
          return createVNode(Fragment, null, [(_a2 = (_a = slots.label) == null ? void 0 : _a.call(slots, slotProps)) != null ? _a2 : props.label ? createVNode(VLabel, {
            "id": slotProps.id.value,
            "class": "v-slider__label",
            "text": props.label
          }, null) : void 0, (_b = slots.prepend) == null ? void 0 : _b.call(slots, slotProps)]);
        } : void 0,
        default: (_ref4) => {
          let {
            id,
            messagesId
          } = _ref4;
          return createVNode("div", {
            "class": "v-slider__container",
            "onMousedown": !readonly.value ? onSliderMousedown : void 0,
            "onTouchstartPassive": !readonly.value ? onSliderTouchstart : void 0
          }, [createVNode("input", {
            "id": id.value,
            "name": props.name || id.value,
            "disabled": !!props.disabled,
            "readonly": !!props.readonly,
            "tabindex": "-1",
            "value": model.value
          }, null), createVNode(VSliderTrack, {
            "ref": trackContainerRef,
            "start": 0,
            "stop": trackStop.value
          }, {
            "tick-label": slots["tick-label"]
          }), createVNode(VSliderThumb, {
            "ref": thumbContainerRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused.value,
            "min": min.value,
            "max": max.value,
            "modelValue": model.value,
            "onUpdate:modelValue": (v) => model.value = v,
            "position": trackStop.value,
            "elevation": props.elevation,
            "onFocus": focus,
            "onBlur": blur,
            "ripple": props.ripple,
            "name": props.name
          }, {
            "thumb-label": slots["thumb-label"]
          })]);
        }
      });
    });
    return {};
  }
});
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const isForcedColorsModeActive = IN_BROWSER;
    const loaderColor = computed(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      var _a, _b;
      e.stopPropagation();
      e.preventDefault();
      (_b = (_a = control.value) == null ? void 0 : _a.input) == null ? void 0 : _b.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
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
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createVNode("div", {
                "class": ["v-switch__track", backgroundColorClasses.value],
                "style": backgroundColorStyles.value,
                "onClick": onTrackClick
              }, [slots["track-true"] && createVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createVNode(Fragment, null, [inputNode, createVNode("div", {
                "class": ["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value],
                "style": props.inset ? void 0 : backgroundColorStyles.value
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return {};
  }
});
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) != null ? _a2 : false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl)
          return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a2;
          var _a;
          return createVNode(Fragment, null, [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? void 0 : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid)
    return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid)
    return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const Touch$1 = Touch;
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false)
        return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group)
          return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch: Touch$1
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem)
      throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items)
    return [];
  return items.map((item) => {
    if (!isObject(item))
      return {
        text: item,
        value: item
      };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a2;
          var _a;
          return [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : items.value.map((item) => {
            var _a3;
            var _a22;
            return (_a3 = (_a22 = slots.tab) == null ? void 0 : _a22.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a32;
                return (_a32 = slots[`tab.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              } : void 0
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a3;
            var _a2;
            return (_a3 = (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a32;
                return (_a32 = slots[`item.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      var _a;
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : ((_a = model.value) != null ? _a : "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (inputRef.value !== (void 0).activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value)
        return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [createVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [createVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const _sfc_main$6 = {
  __name: "PcOperation",
  __ssrInlineRender: true,
  props: {},
  emits: [
    "changeColor",
    "decrement",
    "increment",
    "onUrlChange",
    "changePicScale"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    const tab = ref(null);
    const url = ref("");
    const tempId = ref("temp-1");
    const fontSizeSlider = ref("1.1");
    const widthSlider = ref("440");
    const paddingSlider = ref("20");
    const selectedColorIndex = ref(0);
    const show = reactive({
      title: true,
      content: true,
      qrcode: true,
      author: true,
      padding: false
    });
    const themeList = ref(
      [
        {
          bgcolor: "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));",
          colorA: "rgb(5, 174, 157)",
          colorB: "rgb(17, 26, 35)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(0, 0, 0), rgb(0, 0, 0));",
          colorA: "rgb(0, 0, 0)",
          colorB: "rgb(0, 0, 0)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(256, 256, 256), rgb(256, 256, 256));",
          colorA: "rgb(256, 256, 256)",
          colorB: "rgb(256, 256, 256)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(50, 50, 50), rgb(30, 30, 30));",
          colorA: " rgb(50, 50, 50)",
          colorB: "rgb(30, 30, 30)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(18, 18, 18), rgb(18, 18, 18));",
          colorA: "rgb(18, 18, 18)",
          colorB: "rgb(18, 18, 18)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(136, 22, 22), rgb(241, 57, 63));",
          colorA: "rgb(136, 22, 22)",
          colorB: "rgb(241, 57, 63)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24));",
          colorA: "rgb(177, 177, 177)",
          colorB: "rgb(24, 24, 24)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(255, 255, 255), rgb(128, 222, 234));",
          colorA: "rgb(255, 255, 255)",
          colorB: "rgb(128, 222, 234)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(238, 213, 182), rgb(175, 136, 86));",
          colorA: "rgb(238, 213, 182)",
          colorB: "rgb(175, 136, 86)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(80, 104, 83), rgb(33, 50, 35));",
          colorA: "rgb(80, 104, 83)",
          colorB: "rgb(33, 50, 35)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24));",
          colorA: "rgb(51, 51, 51)",
          colorB: "rgb(24, 24, 24)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));",
          colorA: "rgb(207, 47, 152)",
          colorB: "rgb(106, 61, 236)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));",
          colorA: "rgb(165, 142, 251)",
          colorB: "rgb(233, 191, 248)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52));",
          colorA: "rgb(255, 99, 99)",
          colorB: "rgb(115, 52, 52)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84));",
          colorA: "rgb(189, 227, 236)",
          colorB: "rgb(54, 54, 84)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45));",
          colorA: "rgb(89, 212, 153)",
          colorB: "rgb(160, 135, 45)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51));",
          colorA: "rgb(76, 200, 200)",
          colorB: "rgb(32, 32, 51)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170));",
          colorA: "rgb(142, 199, 251)",
          colorB: "rgb(28, 85, 170)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47));",
          colorA: "rgb(255, 207, 115)",
          colorB: "rgb(255, 122, 47)",
          angle: "150deg"
        },
        {
          bgcolor: "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));",
          colorA: "rgb(94, 106, 137)",
          colorB: " rgb(15, 19, 40)",
          angle: "150deg"
        },
        //蓝粉
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));",
          colorA: "rgb(87, 151, 249)",
          colorB: " rgb(108, 213, 196)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));",
          colorA: "rgb(64, 127, 231)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));",
          colorA: "rgb(77, 3, 222)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));",
          colorA: "rgb(204, 81, 36)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));",
          colorA: "rgb(52, 182, 150)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));",
          colorA: "rgb(244, 205, 82)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));",
          colorA: "rgb(86, 93, 204)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));",
          colorA: "rgb(33, 127, 193)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));",
          colorA: "rgb(53, 99, 250)",
          colorB: " rgb(253, 202, 220)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));",
          colorA: "rgb(44, 68, 89)",
          colorB: " rgb(255, 203, 203)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));",
          colorA: "rgb(137, 176, 217)",
          colorB: " rgb(255, 238, 203)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));",
          colorA: "rgb(14, 87, 238)",
          colorB: " rgb(230, 255, 203)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));",
          colorA: "rgb(186, 125, 239)",
          colorB: " rgb(255, 203, 253)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));",
          colorA: "rgb(67, 197, 167)",
          colorB: " rgb(203, 238, 255)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));",
          colorA: "rgb(240, 111, 105)",
          colorB: " rgb(205, 203, 255)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));",
          colorA: "rgb(44, 176, 206)",
          colorB: " rgb(205, 203, 255)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));",
          colorA: "rgb(176, 189, 191)",
          colorB: " rgb(205, 203, 255)",
          angle: "45deg"
        },
        // 红粉
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));",
          colorA: "rgb(149, 18, 190)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));",
          colorA: "rgb(180, 20, 51)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));",
          colorA: "rgb(245, 148, 126)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));",
          colorA: "rgb(255, 242, 201)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));",
          colorA: "rgb(139, 177, 196)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));",
          colorA: "rgb(136, 14, 133)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));",
          colorA: "rgb(69, 165, 215)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));",
          colorA: "rgb(191, 69, 133)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));",
          colorA: "rgb(182, 195, 141)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));",
          colorA: "rgb(154, 151, 236)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));",
          colorA: "rgb(84, 102, 105)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));",
          colorA: "rgb(247, 174, 171)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));",
          colorA: "rgb(254, 252, 59)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));",
          colorA: "rgb(167, 254, 204)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));",
          colorA: "rgb(241, 255, 207)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        },
        {
          bgcolor: "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));",
          colorA: "rgb(186, 167, 228)",
          colorB: " rgb(245, 159, 156)",
          angle: "45deg"
        }
      ]
    );
    watch(url, (newUrl) => {
      emit("onUrlChange", newUrl);
    });
    function changePicScale(e) {
      emit("changePicScale", e);
    }
    function changeTemp(e) {
      tempId.value = e;
      updateShareUserConfig({ tempId: e });
    }
    function onSwitchChange(e) {
      if (show.padding == true) {
        userConfig.value.styleObject.padding = "0px";
      } else {
        userConfig.value.styleObject.padding = "20px";
      }
      updateShareUserConfig({ show, styleObject: userConfig.value.styleObject });
    }
    function onBtnToggle(e) {
      if (e == "padding") {
        userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
      }
      if (e == "width") {
        userConfig.value.styleObject.width = `${widthSlider.value}px`;
        userConfig.value.styleObject.transition = "500ms";
      }
      if (e == "fontsize") {
        userConfig.value.styleObject["--base-font-size"] = `${fontSizeSlider.value}rem`;
      }
      updateShareUserConfig({ show, styleObject: userConfig.value.styleObject });
    }
    function changeColor(e, index2) {
      selectedColorIndex.value = String(index2);
      emit("changeColor", e);
    }
    function onSliderChange(e) {
      if (e == "padding") {
        userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
      }
      if (e == "width") {
        userConfig.value.styleObject.width = `${widthSlider.value}px`;
        userConfig.value.styleObject.transition = "500ms";
      }
      if (e == "fontsize") {
        userConfig.value.styleObject["--base-font-size"] = `${fontSizeSlider.value}rem`;
      }
      updateShareUserConfig({ styleObject: userConfig.value.styleObject });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(_attrs)} data-v-767f1e57>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        "align-tabs": "center",
        "center-active": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, {
              value: "template",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6A21\u677F`);
                } else {
                  return [
                    createTextVNode("\u6A21\u677F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "bg",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Bg Color"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Bg Color")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "setting",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u8BBE\u7F6E`);
                } else {
                  return [
                    createTextVNode("\u8BBE\u7F6E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, {
                value: "template",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode("\u6A21\u677F")
                ]),
                _: 1
              }),
              createVNode(VTab, {
                value: "bg",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Bg Color")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, {
                value: "setting",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode("\u8BBE\u7F6E")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VTabsWindow, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "template" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap justify-space-between align-center template py-4 px-2" data-v-767f1e57${_scopeId2}><div class="${ssrRenderClass([{ "temp-item-activate": "temp-1" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_0,
                    width: 80,
                    alt: "temp-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-2" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_1,
                    width: 80,
                    alt: "temp-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-3" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_2,
                    width: 80,
                    alt: "temp-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-4" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_3,
                    width: 80,
                    alt: "temp-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center template py-4 px-2" }, [
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-1")
                      }, [
                        createVNode(VImg, {
                          src: _imports_0,
                          width: 80,
                          alt: "temp-1"
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-2")
                      }, [
                        createVNode(VImg, {
                          src: _imports_1,
                          width: 80,
                          alt: "temp-2"
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-3")
                      }, [
                        createVNode(VImg, {
                          src: _imports_2,
                          width: 80,
                          alt: "temp-3"
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-4")
                      }, [
                        createVNode(VImg, {
                          src: _imports_3,
                          width: 80,
                          alt: "temp-4"
                        })
                      ], 10, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "bg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center py-2 px-2" data-v-767f1e57${_scopeId2}><div class="d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" data-v-767f1e57${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(themeList), (item, index2) => {
                    _push3(`<div class="${ssrRenderClass([{ "item-activate": String(index2) == unref(selectedColorIndex) }, "d-flex cursor-pointer item"])}" data-v-767f1e57${_scopeId2}><div style="${ssrRenderStyle(item.bgcolor)}" class="color-item rounded-circle" data-v-767f1e57${_scopeId2}></div></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                      createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(themeList), (item, index2) => {
                          return openBlock(), createBlock("div", {
                            class: ["d-flex cursor-pointer item", { "item-activate": String(index2) == unref(selectedColorIndex) }],
                            onClick: ($event) => changeColor(item, index2)
                          }, [
                            createVNode("div", {
                              style: item.bgcolor,
                              class: "color-item rounded-circle"
                            }, null, 4)
                          ], 10, ["onClick"]);
                        }), 256))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "setting" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-2 px-2" style="${ssrRenderStyle("temp-3" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    clearable: "",
                    variant: "outlined",
                    placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                    modelValue: unref(url),
                    "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex flex-wrap align-center justify-start py-2 px-2" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).title,
                    "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Title"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).content,
                    "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Content"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).author,
                    "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Author"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).padding,
                    "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Padding"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).qrcode,
                    "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("QR Code"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "120",
                    style: "temp-2" != unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex flex-row align-center justify-start py-3 px-2" data-v-767f1e57${_scopeId2}><div class="d-flex flex-row align-center" data-v-767f1e57${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-767f1e57${_scopeId2}> \u6BD4\u4F8B </div><div class="d-flex ga-2 flex-wrap" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(0)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 1:1 `);
                      } else {
                        return [
                          createTextVNode(" 1:1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(1)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 3:4 `);
                      } else {
                        return [
                          createTextVNode(" 3:4 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(2)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 4:3 `);
                      } else {
                        return [
                          createTextVNode(" 4:3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(3)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 7:5 `);
                      } else {
                        return [
                          createTextVNode(" 7:5 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(4)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 9:16 `);
                      } else {
                        return [
                          createTextVNode(" 9:16 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(5)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 16:9 `);
                      } else {
                        return [
                          createTextVNode(" 16:9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    onClick: ($event) => changePicScale(6)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 12:16 `);
                      } else {
                        return [
                          createTextVNode(" 12:16 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="d-flex flex-row align-center justify-start px-2" data-v-767f1e57${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-767f1e57${_scopeId2}>${ssrInterpolate(_ctx.$t("Padding"))}</div><div data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(paddingSlider),
                    "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    group: "",
                    "data-id": "padding",
                    onClick: ($event) => onBtnToggle("padding")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { value: "20" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 20 `);
                            } else {
                              return [
                                createTextVNode(" 20 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "30" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 30 `);
                            } else {
                              return [
                                createTextVNode(" 30 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "40" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 40 `);
                            } else {
                              return [
                                createTextVNode(" 40 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "50" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 50 `);
                            } else {
                              return [
                                createTextVNode(" 50 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "60" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 60 `);
                            } else {
                              return [
                                createTextVNode(" 60 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { value: "20" }, {
                            default: withCtx(() => [
                              createTextVNode(" 20 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "30" }, {
                            default: withCtx(() => [
                              createTextVNode(" 30 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "40" }, {
                            default: withCtx(() => [
                              createTextVNode(" 40 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "50" }, {
                            default: withCtx(() => [
                              createTextVNode(" 50 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "60" }, {
                            default: withCtx(() => [
                              createTextVNode(" 60 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="py-3" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(paddingSlider),
                    "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                    "thumb-label": "",
                    step: 1,
                    "track-color": "grey"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="d-flex flex-row align-center justify-start py-2 px-2" data-v-767f1e57${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-767f1e57${_scopeId2}>${ssrInterpolate(_ctx.$t("Width"))}</div><div data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(widthSlider),
                    "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    onClick: ($event) => onBtnToggle("width")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "340",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Small"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "440",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Default"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "540",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Middle"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "640",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "740",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("XL Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "340",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "440",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "540",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "640",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "740",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex py-3" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(widthSlider),
                    "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                    "thumb-label": "",
                    step: 5,
                    "track-color": "grey",
                    min: "340",
                    max: "900"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="d-flex align-center justify-start py-2 px-2" data-v-767f1e57${_scopeId2}><div class="d-flex flex-row align-center" data-v-767f1e57${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-767f1e57${_scopeId2}>${ssrInterpolate(_ctx.$t("Font"))}</div><div class="py-3" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(fontSizeSlider),
                    "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    onClick: ($event) => onBtnToggle("fontsize")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "0.7",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Small"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Default"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1.25",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Middle"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1.5",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "0.7",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1.25",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1.5",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex" data-v-767f1e57${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(fontSizeSlider),
                    "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                    "thumb-label": "",
                    step: 0.1,
                    "track-color": "grey",
                    min: "0.7",
                    max: "1.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div>`);
                } else {
                  return [
                    withDirectives(createVNode("div", { class: "py-2 px-2" }, [
                      createVNode(VTextField, {
                        clearable: "",
                        variant: "outlined",
                        placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                        modelValue: unref(url),
                        "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ], 512), [
                      [vShow, "temp-3" == unref(userConfig).tempId]
                    ]),
                    createVNode("div", { class: "d-flex flex-wrap align-center justify-start py-2 px-2" }, [
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).title,
                        "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Title"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).content,
                        "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Content"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).author,
                        "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Author"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      createVNode(VSwitch, {
                        modelValue: unref(show).padding,
                        "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Padding"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).qrcode,
                        "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("QR Code"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "120"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-2" != unref(userConfig).tempId]
                      ])
                    ]),
                    createVNode("div", { class: "d-flex flex-row align-center justify-start py-3 px-2" }, [
                      createVNode("div", { class: "d-flex flex-row align-center" }, [
                        createVNode("div", { style: { "width": "4rem" } }, " \u6BD4\u4F8B "),
                        createVNode("div", { class: "d-flex ga-2 flex-wrap" }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(0)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 1:1 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(1)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 3:4 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(2)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 4:3 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(3)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 7:5 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(4)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 9:16 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(5)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 16:9 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "tonal",
                            onClick: ($event) => changePicScale(6)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 12:16 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex flex-row align-center justify-start px-2" }, [
                      createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Padding")), 1),
                      createVNode("div", null, [
                        createVNode(VBtnToggle, {
                          modelValue: unref(paddingSlider),
                          "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                          color: "deep-purple-accent-3",
                          rounded: "0",
                          group: "",
                          "data-id": "padding",
                          onClick: ($event) => onBtnToggle("padding")
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { value: "20" }, {
                              default: withCtx(() => [
                                createTextVNode(" 20 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: "30" }, {
                              default: withCtx(() => [
                                createTextVNode(" 30 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: "40" }, {
                              default: withCtx(() => [
                                createTextVNode(" 40 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: "50" }, {
                              default: withCtx(() => [
                                createTextVNode(" 50 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: "60" }, {
                              default: withCtx(() => [
                                createTextVNode(" 60 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode(VSlider, {
                            modelValue: unref(paddingSlider),
                            "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                            "thumb-label": "",
                            step: 1,
                            "track-color": "grey"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex flex-row align-center justify-start py-2 px-2" }, [
                      createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Width")), 1),
                      createVNode("div", null, [
                        createVNode(VBtnToggle, {
                          modelValue: unref(widthSlider),
                          "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                          color: "deep-purple-accent-3",
                          rounded: "0",
                          onClick: ($event) => onBtnToggle("width")
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              value: "340",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "440",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "540",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "640",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "740",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                        createVNode("div", { class: "d-flex py-3" }, [
                          createVNode(VSlider, {
                            modelValue: unref(widthSlider),
                            "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                            "thumb-label": "",
                            step: 5,
                            "track-color": "grey",
                            min: "340",
                            max: "900"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-start py-2 px-2" }, [
                      createVNode("div", { class: "d-flex flex-row align-center" }, [
                        createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Font")), 1),
                        createVNode("div", { class: "py-3" }, [
                          createVNode(VBtnToggle, {
                            modelValue: unref(fontSizeSlider),
                            "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                            color: "deep-purple-accent-3",
                            rounded: "0",
                            onClick: ($event) => onBtnToggle("fontsize")
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                value: "0.7",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1.25",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1.5",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(VSlider, {
                              modelValue: unref(fontSizeSlider),
                              "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                              "thumb-label": "",
                              step: 0.1,
                              "track-color": "grey",
                              min: "0.7",
                              max: "1.5"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabsWindowItem, { value: "template" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap justify-space-between align-center template py-4 px-2" }, [
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-1")
                    }, [
                      createVNode(VImg, {
                        src: _imports_0,
                        width: 80,
                        alt: "temp-1"
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-2")
                    }, [
                      createVNode(VImg, {
                        src: _imports_1,
                        width: 80,
                        alt: "temp-2"
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-3")
                    }, [
                      createVNode(VImg, {
                        src: _imports_2,
                        width: 80,
                        alt: "temp-3"
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-4")
                    }, [
                      createVNode(VImg, {
                        src: _imports_3,
                        width: 80,
                        alt: "temp-4"
                      })
                    ], 10, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "bg" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                    createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start flex-wrap px-1 py-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(themeList), (item, index2) => {
                        return openBlock(), createBlock("div", {
                          class: ["d-flex cursor-pointer item", { "item-activate": String(index2) == unref(selectedColorIndex) }],
                          onClick: ($event) => changeColor(item, index2)
                        }, [
                          createVNode("div", {
                            style: item.bgcolor,
                            class: "color-item rounded-circle"
                          }, null, 4)
                        ], 10, ["onClick"]);
                      }), 256))
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "setting" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("div", { class: "py-2 px-2" }, [
                    createVNode(VTextField, {
                      clearable: "",
                      variant: "outlined",
                      placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                      modelValue: unref(url),
                      "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ], 512), [
                    [vShow, "temp-3" == unref(userConfig).tempId]
                  ]),
                  createVNode("div", { class: "d-flex flex-wrap align-center justify-start py-2 px-2" }, [
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).title,
                      "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Title"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).content,
                      "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Content"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).author,
                      "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Author"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    createVNode(VSwitch, {
                      modelValue: unref(show).padding,
                      "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Padding"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).qrcode,
                      "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("QR Code"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "120"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-2" != unref(userConfig).tempId]
                    ])
                  ]),
                  createVNode("div", { class: "d-flex flex-row align-center justify-start py-3 px-2" }, [
                    createVNode("div", { class: "d-flex flex-row align-center" }, [
                      createVNode("div", { style: { "width": "4rem" } }, " \u6BD4\u4F8B "),
                      createVNode("div", { class: "d-flex ga-2 flex-wrap" }, [
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(0)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 1:1 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(1)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 3:4 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(2)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 4:3 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(3)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 7:5 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(4)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 9:16 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(5)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 16:9 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "tonal",
                          onClick: ($event) => changePicScale(6)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 12:16 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex flex-row align-center justify-start px-2" }, [
                    createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Padding")), 1),
                    createVNode("div", null, [
                      createVNode(VBtnToggle, {
                        modelValue: unref(paddingSlider),
                        "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                        color: "deep-purple-accent-3",
                        rounded: "0",
                        group: "",
                        "data-id": "padding",
                        onClick: ($event) => onBtnToggle("padding")
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, { value: "20" }, {
                            default: withCtx(() => [
                              createTextVNode(" 20 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "30" }, {
                            default: withCtx(() => [
                              createTextVNode(" 30 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "40" }, {
                            default: withCtx(() => [
                              createTextVNode(" 40 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "50" }, {
                            default: withCtx(() => [
                              createTextVNode(" 50 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "60" }, {
                            default: withCtx(() => [
                              createTextVNode(" 60 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode(VSlider, {
                          modelValue: unref(paddingSlider),
                          "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                          "thumb-label": "",
                          step: 1,
                          "track-color": "grey"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex flex-row align-center justify-start py-2 px-2" }, [
                    createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Width")), 1),
                    createVNode("div", null, [
                      createVNode(VBtnToggle, {
                        modelValue: unref(widthSlider),
                        "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                        color: "deep-purple-accent-3",
                        rounded: "0",
                        onClick: ($event) => onBtnToggle("width")
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            value: "340",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "440",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "540",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "640",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "740",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode("div", { class: "d-flex py-3" }, [
                        createVNode(VSlider, {
                          modelValue: unref(widthSlider),
                          "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                          "thumb-label": "",
                          step: 5,
                          "track-color": "grey",
                          min: "340",
                          max: "900"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-start py-2 px-2" }, [
                    createVNode("div", { class: "d-flex flex-row align-center" }, [
                      createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Font")), 1),
                      createVNode("div", { class: "py-3" }, [
                        createVNode(VBtnToggle, {
                          modelValue: unref(fontSizeSlider),
                          "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                          color: "deep-purple-accent-3",
                          rounded: "0",
                          onClick: ($event) => onBtnToggle("fontsize")
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              value: "0.7",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1.25",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1.5",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                        createVNode("div", { class: "d-flex" }, [
                          createVNode(VSlider, {
                            modelValue: unref(fontSizeSlider),
                            "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                            "thumb-label": "",
                            step: 0.1,
                            "track-color": "grey",
                            min: "0.7",
                            max: "1.5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</figure>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PcOperation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-767f1e57"]]);
const getBase64Image = (url, proxy) => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  if (proxy) {
    img.src = `https://images.weserv.nl/?url=${url}`;
  } else {
    img.src = url;
  }
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = (void 0).createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL());
    };
    img.onerror = (error) => {
      reject(error);
    };
  });
};
const _sfc_main$5 = {
  __name: "DefaultTemplate",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean, default: false }
  },
  emits: [],
  setup(__props, { emit: __emit }) {
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    ref(false);
    const content = ref("");
    const title = ref("");
    const author = ref("");
    const qrCodeTitle = ref("");
    const qrCodeDesc = ref("");
    ref(null);
    const dialog = ref(false);
    ref("#fff");
    const rules = reactive({
      required: (value) => !!value || "\u8BF7\u8F93\u5165\u4E8C\u7EF4\u7801\u5185\u5BB9."
    });
    function editQrData() {
      dialog.value = false;
      let config = { qrData: userConfig.value.qrData };
      updateShareUserConfig(config);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<figure${ssrRenderAttrs(_attrs)} data-v-710c34a1><div class="main d-flex flex-column justify-center align-center" data-v-710c34a1><div class="d-flex justify-center align-center" data-v-710c34a1><div class="content-mode" style="${ssrRenderStyle(unref(userConfig).styleObject)}" data-v-710c34a1><div class="${ssrRenderClass([{ "rounded-xl": unref(userConfig).styleObject.padding != "0px" }, "card d-flex justify-space-between align-start pt-8 pb-8 px-6 flex-column"])}" style="${ssrRenderStyle({ "min-height": "inherit" })}" data-v-710c34a1><div style="${ssrRenderStyle({ "width": "100%" })}" data-v-710c34a1><div contenteditable="true" autocorrect="off" autocomplete="off" class="${ssrRenderClass([{ "hidden": !unref(userConfig).show.title }, "editable-element title"])}" data-key="title" data-v-710c34a1>${ssrInterpolate(unref(title))}</div><div contenteditable="true" autocorrect="off" autocomplete="off" class="${ssrRenderClass([{ "hidden": !unref(userConfig).show.content }, "editable-element content"])}" data-key="content" data-v-710c34a1>${ssrInterpolate(unref(content))}</div></div><div class="d-flex flex-column" style="${ssrRenderStyle({ "width": "100%" })}" data-v-710c34a1><div class="${ssrRenderClass([{ "hidden": !unref(userConfig).show.author }, "editable-element"])}" data-v-710c34a1><div class="time d-flex justify-end mt-6" contenteditable="true" data-key="author" data-v-710c34a1>${ssrInterpolate(unref(author))}</div></div><div class="${ssrRenderClass([{ "hidden": !unref(userConfig).show.qrcode }, "qrcode-container"])}" style="${ssrRenderStyle({ "width": "100%" })}" data-v-710c34a1><div class="qrcode flex-cloumn pt-4 mt-6" data-v-710c34a1><div class="d-flex flex-row justify-space-between align-center" data-v-710c34a1><div data-v-710c34a1><div class="editable-element qr-title" contenteditable="true" autocorrect="off" autocomplete="off" data-key="qrCodeTitle" data-v-710c34a1>${ssrInterpolate(unref(qrCodeTitle))}</div><div class="editable-element qr-desc mt-2" contenteditable="true" data-key="qrCodeDesc" data-v-710c34a1>${ssrInterpolate(unref(qrCodeDesc))}</div></div><div data-v-710c34a1>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              hover: "",
              title: "\u7F16\u8F91\u4E8C\u7EF4\u7801"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(userConfig).qrData,
                          "onUpdate:modelValue": ($event) => unref(userConfig).qrData = $event,
                          class: "mb-2",
                          rules: [unref(rules).required],
                          label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          size: "large",
                          type: "submit",
                          variant: "elevated",
                          block: "",
                          onClick: editQrData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u66F4\u65B0\u4E8C\u7EF4\u7801 `);
                            } else {
                              return [
                                createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(userConfig).qrData,
                            "onUpdate:modelValue": ($event) => unref(userConfig).qrData = $event,
                            class: "mb-2",
                            rules: [unref(rules).required],
                            label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VBtn, {
                            color: "success",
                            size: "large",
                            type: "submit",
                            variant: "elevated",
                            block: "",
                            onClick: editQrData
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(userConfig).qrData,
                          "onUpdate:modelValue": ($event) => unref(userConfig).qrData = $event,
                          class: "mb-2",
                          rules: [unref(rules).required],
                          label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(VBtn, {
                          color: "success",
                          size: "large",
                          type: "submit",
                          variant: "elevated",
                          block: "",
                          onClick: editQrData
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                hover: "",
                title: "\u7F16\u8F91\u4E8C\u7EF4\u7801"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(userConfig).qrData,
                        "onUpdate:modelValue": ($event) => unref(userConfig).qrData = $event,
                        class: "mb-2",
                        rules: [unref(rules).required],
                        label: "\u53EF\u8F93\u5165\u6587\u672C\u6216\u94FE\u63A5",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(VBtn, {
                        color: "success",
                        size: "large",
                        type: "submit",
                        variant: "elevated",
                        block: "",
                        onClick: editQrData
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u66F4\u65B0\u4E8C\u7EF4\u7801 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></figure>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DefaultTemplate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-710c34a1"]]);
const _sfc_main$4 = {
  __name: "CodeTemplate",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean, default: false },
    template: { type: Object }
  },
  emits: [],
  setup(__props, { emit: __emit }) {
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    const code = ref("");
    ref("js");
    const highlightedCode = ref("");
    const isClient = ref(false);
    const highlightCode = async () => {
      highlightedCode.value = await codeToHtml(code.value, {
        lang: "javascript",
        theme: "nord",
        lineNumbers: true,
        wordWrap: true
      });
      let codeData = {
        highlightedCode: highlightedCode.value,
        code: code.value
      };
      updateShareUserConfig({ codeData });
    };
    watch(code, highlightCode);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<figure${ssrRenderAttrs(_attrs)} data-v-af993b2c>`);
      if (unref(isClient)) {
        _push(`<div class="main d-flex code-container" style="${ssrRenderStyle(unref(userConfig).styleObject)}" data-v-af993b2c><div class="editor-container" data-v-af993b2c><div class="editor-header" data-v-af993b2c><div class="editor-controls" data-v-af993b2c><span class="control red" data-v-af993b2c></span><span class="control yellow" data-v-af993b2c></span><span class="control green" data-v-af993b2c></span></div><div class="editor-title" contenteditable="true" data-v-af993b2c>Untitled</div></div><div class="code-editor" data-v-af993b2c><textarea placeholder="Enter your code here" class="code-input" style="${ssrRenderStyle({ "letter-spacing": "0.2px" })}" autocomplete="off" spellcheck="false" autocapitalize="off" data-enable-grammarly="false" data-v-af993b2c>${ssrInterpolate(unref(code))}</textarea>`);
        if (unref(isClient)) {
          _push(`<div class="code-output" style="${ssrRenderStyle({ "letter-spacing": "0.2px" })}" data-v-af993b2c>${(_a = unref(highlightedCode)) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CodeTemplate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-af993b2c"]]);
const _sfc_main$3 = {
  __name: "CardTemplate",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    template: { type: Object },
    url: { type: String, default: "https://labs.wowyou.cc" }
  },
  emits: [],
  setup(__props, { emit: __emit }) {
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    const isClient = ref(false);
    ref("#fff");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<figure${ssrRenderAttrs(_attrs)} data-v-acc95fb4>`);
      if (unref(isClient)) {
        _push(`<div class="main d-flex flex-column justify-center align-center" data-v-acc95fb4><div class="d-flex justify-center align-center" data-v-acc95fb4><div class="content-mode" style="${ssrRenderStyle(unref(userConfig).styleObject)}" data-v-acc95fb4><div class="card d-flex justify-center flex-column" data-v-acc95fb4>`);
        if (__props.isLoading) {
          _push(`<div class="d-flex justify-center align-start py-10" style="${ssrRenderStyle({ "width": "100%" })}" data-v-acc95fb4>`);
          _push(ssrRenderComponent(VProgressCircular, {
            indeterminate: "",
            size: 80,
            width: 4,
            color: "#fff"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!__props.isLoading) {
          _push(`<div data-v-acc95fb4>`);
          _push(ssrRenderComponent(VImg, {
            class: "img",
            src: unref(userConfig).metaData.base64Image
          }, null, _parent));
          _push(`<div class="qrcode-container flex-cloumn my-2 px-2" data-v-acc95fb4><div class="d-flex flex-row align-center ga-2" data-v-acc95fb4>`);
          if (unref(userConfig).metaData.url) {
            _push(`<div class="${ssrRenderClass([{
              "hidden": unref(isClient) && !unref(userConfig).show.qrcode
            }, "qrcode d-flex"])}" data-v-acc95fb4>`);
            _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-acc95fb4><div class="editable-element qr-title" data-key="qrCodeTitle" data-v-acc95fb4>${ssrInterpolate(unref(userConfig).metaData.title)}</div><div class="editable-element qr-desc mt-1" data-key="qrCodeDesc" data-v-acc95fb4>${ssrInterpolate(unref(userConfig).metaData.description)}</div><div class="d-flex flex-row ga-2 mt-1 align-center" style="${ssrRenderStyle({ "opacity": ".7" })}" data-v-acc95fb4>`);
          if (unref(userConfig).metaData.base64Logo) {
            _push(`<div data-v-acc95fb4>`);
            _push(ssrRenderComponent(VImg, {
              width: 20,
              cover: "",
              src: unref(userConfig).metaData.base64Logo
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="qr-url" data-v-acc95fb4>${ssrInterpolate(unref(userConfig).metaData.url)}</div></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardTemplate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-acc95fb4"]]);
const _sfc_main$2 = {
  __name: "ImageTemplate",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    template: { type: Object },
    url: { type: String, default: "https://labs.wowyou.cc" }
  },
  emits: ["getClipboardData"],
  setup(__props, { emit: __emit }) {
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    const uploadRef = ref(null);
    const files = ref([]);
    const isClient = ref(false);
    const base64Image = ref("");
    const rules = [
      (value) => {
        return !value || !value.length || value[0].size < 2e6 || "Avatar size should be less than 2 MB!";
      }
    ];
    async function uploadImg() {
      let file = files.value;
      const url = URL.createObjectURL(file);
      const base64 = await getBase64Image(url, false);
      base64Image.value = base64;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(_attrs)} data-v-702fa085>`);
      if (unref(isClient)) {
        _push(`<div class="main d-flex flex-column justify-center align-center" data-v-702fa085><div class="d-flex justify-center align-center" data-v-702fa085><div class="content-mode" style="${ssrRenderStyle(unref(userConfig).styleObject)}" data-v-702fa085><div class="${ssrRenderClass([{ "rounded-xl": unref(userConfig).styleObject.padding != "0px" }, "d-flex justify-center align-center cursor-pointer"])}" data-v-702fa085>`);
        if (unref(base64Image)) {
          _push(ssrRenderComponent(VImg, { src: unref(base64Image) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(base64Image)) {
          _push(ssrRenderComponent(VIcon, {
            icon: "mdi-plus-box",
            size: "130px"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
        _push(ssrRenderComponent(VFileInput, {
          ref_key: "uploadRef",
          ref: uploadRef,
          label: "",
          rules,
          "prepend-icon": "",
          modelValue: unref(files),
          "onUpdate:modelValue": ($event) => isRef(files) ? files.value = $event : null,
          onChange: uploadImg,
          class: "custom-file-input"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageTemplate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-702fa085"]]);
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index2) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index2 + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": ["v-carousel-item", props.class]
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
const _sfc_main$1 = {
  __name: "MobileOperation",
  __ssrInlineRender: true,
  props: {},
  emits: [
    "changeColor",
    "onSliderChange",
    "decrement",
    "increment",
    "onUrlChange",
    "onChangeTemp"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { userConfig, updateShareUserConfig } = useSharedConfig();
    const tab = ref(null);
    const url = ref("");
    const tempId = ref("temp-1");
    const fontSizeSlider = ref("1.1");
    const widthSlider = ref("440");
    const paddingSlider = ref("20");
    const selectedColorIndex = ref(0);
    const show = reactive({
      title: true,
      content: true,
      qrcode: true,
      author: true,
      padding: false
    });
    const themeList = ref(
      [
        [
          {
            bgcolor: "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));",
            colorA: "rgb(5, 174, 157)",
            colorB: "rgb(17, 26, 35)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(0, 0, 0), rgb(0, 0, 0));",
            colorA: "rgb(0, 0, 0)",
            colorB: "rgb(0, 0, 0)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(50, 50, 50), rgb(30, 30, 30));",
            colorA: " rgb(50, 50, 50)",
            colorB: "rgb(30, 30, 30)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(18, 18, 18), rgb(18, 18, 18));",
            colorA: "rgb(18, 18, 18)",
            colorB: "rgb(18, 18, 18)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(136, 22, 22), rgb(241, 57, 63));",
            colorA: "rgb(136, 22, 22)",
            colorB: "rgb(241, 57, 63)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24));",
            colorA: "rgb(177, 177, 177)",
            colorB: "rgb(24, 24, 24)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(255, 255, 255), rgb(128, 222, 234));",
            colorA: "rgb(255, 255, 255)",
            colorB: "rgb(128, 222, 234)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(238, 213, 182), rgb(175, 136, 86));",
            colorA: "rgb(238, 213, 182)",
            colorB: "rgb(175, 136, 86)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(80, 104, 83), rgb(33, 50, 35));",
            colorA: "rgb(80, 104, 83)",
            colorB: "rgb(33, 50, 35)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24));",
            colorA: "rgb(51, 51, 51)",
            colorB: "rgb(24, 24, 24)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));",
            colorA: "rgb(207, 47, 152)",
            colorB: "rgb(106, 61, 236)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));",
            colorA: "rgb(165, 142, 251)",
            colorB: "rgb(233, 191, 248)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52));",
            colorA: "rgb(255, 99, 99)",
            colorB: "rgb(115, 52, 52)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84));",
            colorA: "rgb(189, 227, 236)",
            colorB: "rgb(54, 54, 84)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45));",
            colorA: "rgb(89, 212, 153)",
            colorB: "rgb(160, 135, 45)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51));",
            colorA: "rgb(76, 200, 200)",
            colorB: "rgb(32, 32, 51)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170));",
            colorA: "rgb(142, 199, 251)",
            colorB: "rgb(28, 85, 170)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47));",
            colorA: "rgb(255, 207, 115)",
            colorB: "rgb(255, 122, 47)",
            angle: "150deg"
          },
          {
            bgcolor: "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));",
            colorA: "rgb(94, 106, 137)",
            colorB: " rgb(15, 19, 40)",
            angle: "150deg"
          },
          //蓝粉
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));",
            colorA: "rgb(87, 151, 249)",
            colorB: " rgb(108, 213, 196)",
            angle: "45deg"
          }
        ],
        [
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));",
            colorA: "rgb(64, 127, 231)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));",
            colorA: "rgb(77, 3, 222)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));",
            colorA: "rgb(204, 81, 36)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));",
            colorA: "rgb(52, 182, 150)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));",
            colorA: "rgb(244, 205, 82)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));",
            colorA: "rgb(86, 93, 204)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));",
            colorA: "rgb(33, 127, 193)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));",
            colorA: "rgb(53, 99, 250)",
            colorB: " rgb(253, 202, 220)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));",
            colorA: "rgb(44, 68, 89)",
            colorB: " rgb(255, 203, 203)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));",
            colorA: "rgb(137, 176, 217)",
            colorB: " rgb(255, 238, 203)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));",
            colorA: "rgb(14, 87, 238)",
            colorB: " rgb(230, 255, 203)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));",
            colorA: "rgb(186, 125, 239)",
            colorB: " rgb(255, 203, 253)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));",
            colorA: "rgb(67, 197, 167)",
            colorB: " rgb(203, 238, 255)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));",
            colorA: "rgb(240, 111, 105)",
            colorB: " rgb(205, 203, 255)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));",
            colorA: "rgb(44, 176, 206)",
            colorB: " rgb(205, 203, 255)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));",
            colorA: "rgb(176, 189, 191)",
            colorB: " rgb(205, 203, 255)",
            angle: "45deg"
          },
          // 红粉
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));",
            colorA: "rgb(149, 18, 190)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));",
            colorA: "rgb(180, 20, 51)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));",
            colorA: "rgb(245, 148, 126)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));",
            colorA: "rgb(255, 242, 201)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          }
        ],
        [
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));",
            colorA: "rgb(139, 177, 196)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));",
            colorA: "rgb(136, 14, 133)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));",
            colorA: "rgb(69, 165, 215)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));",
            colorA: "rgb(191, 69, 133)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));",
            colorA: "rgb(182, 195, 141)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));",
            colorA: "rgb(154, 151, 236)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));",
            colorA: "rgb(84, 102, 105)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));",
            colorA: "rgb(247, 174, 171)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));",
            colorA: "rgb(254, 252, 59)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));",
            colorA: "rgb(167, 254, 204)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));",
            colorA: "rgb(241, 255, 207)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          },
          {
            bgcolor: "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));",
            colorA: "rgb(186, 167, 228)",
            colorB: " rgb(245, 159, 156)",
            angle: "45deg"
          }
        ]
      ]
    );
    watch(url, (newUrl) => {
      emit("onUrlChange", newUrl);
    });
    function changeTemp(e) {
      tempId.value = e;
      updateShareUserConfig({ tempId: e });
    }
    function onSwitchChange(e) {
      if (show.padding == true) {
        userConfig.value.styleObject.padding = "0px";
      } else {
        userConfig.value.styleObject.padding = "20px";
      }
      updateShareUserConfig({ show, styleObject: userConfig.value.styleObject });
    }
    function onBtnToggle(e) {
      if (e == "padding") {
        userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
      }
      if (e == "width") {
        userConfig.value.styleObject.width = `${widthSlider.value}px`;
        userConfig.value.styleObject.transition = "500ms";
      }
      if (e == "fontsize") {
        userConfig.value.styleObject["--base-font-size"] = `${fontSizeSlider.value}rem`;
      }
      updateShareUserConfig({ show, styleObject: userConfig.value.styleObject });
    }
    function changeColor(e, index2, i) {
      selectedColorIndex.value = String(i) + String(index2);
      emit("changeColor", e);
    }
    function onSliderChange(e) {
      if (e == "padding") {
        userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
      }
      if (e == "width") {
        userConfig.value.styleObject.width = `${widthSlider.value}px`;
        userConfig.value.styleObject.transition = "500ms";
      }
      if (e == "fontsize") {
        userConfig.value.styleObject["--base-font-size"] = `${fontSizeSlider.value}rem`;
      }
      updateShareUserConfig({ styleObject: userConfig.value.styleObject });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(mergeProps({ style: { "padding-bottom": "env(safe-area-inset-bottom)" } }, _attrs))} data-v-46d4f1d4>`);
      _push(ssrRenderComponent(VTabsWindow, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "template" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center template ga-6 py-4 px-4" data-v-46d4f1d4${_scopeId2}><div class="${ssrRenderClass([{ "temp-item-activate": "temp-1" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_0,
                    width: 80
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-2" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_1,
                    width: 80
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-3" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_2,
                    width: 80
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "temp-item-activate": "temp-4" == unref(userConfig).tempId }, "temp-item cursor-pointer"])}" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_3,
                    width: 80,
                    alt: "temp-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center template ga-6 py-4 px-4" }, [
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-1")
                      }, [
                        createVNode(VImg, {
                          src: _imports_0,
                          width: 80
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-2")
                      }, [
                        createVNode(VImg, {
                          src: _imports_1,
                          width: 80
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-3")
                      }, [
                        createVNode(VImg, {
                          src: _imports_2,
                          width: 80
                        })
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(userConfig).tempId }],
                        onClick: ($event) => changeTemp("temp-4")
                      }, [
                        createVNode(VImg, {
                          src: _imports_3,
                          width: 80,
                          alt: "temp-4"
                        })
                      ], 10, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "url" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center py-2 px-2" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    clearable: "",
                    variant: "outlined",
                    placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                    modelValue: unref(url),
                    "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                      createVNode(VTextField, {
                        clearable: "",
                        variant: "outlined",
                        placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                        modelValue: unref(url),
                        "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "bg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center py-2 px-2" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCarousel, {
                    continuous: false,
                    "show-arrows": false,
                    color: "#fff",
                    height: "100",
                    "hide-delimiter-background": "",
                    class: "d-flex align-center justify-center custom"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(themeList), (theme, i) => {
                          _push4(ssrRenderComponent(VCarouselItem, {
                            key: i,
                            cover: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" data-v-46d4f1d4${_scopeId4}><!--[-->`);
                                ssrRenderList(theme, (item, index2) => {
                                  _push5(`<div class="${ssrRenderClass([{ "item-activate": String(i) + String(index2) == unref(selectedColorIndex) }, "d-flex cursor-pointer item"])}" data-v-46d4f1d4${_scopeId4}><div style="${ssrRenderStyle(item.bgcolor)}" class="color-item rounded-circle" data-v-46d4f1d4${_scopeId4}></div></div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(theme, (item, index2) => {
                                      return openBlock(), createBlock("div", {
                                        class: ["d-flex cursor-pointer item", { "item-activate": String(i) + String(index2) == unref(selectedColorIndex) }],
                                        onClick: ($event) => changeColor(item, index2, i)
                                      }, [
                                        createVNode("div", {
                                          style: item.bgcolor,
                                          class: "color-item rounded-circle"
                                        }, null, 4)
                                      ], 10, ["onClick"]);
                                    }), 256))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(themeList), (theme, i) => {
                            return openBlock(), createBlock(VCarouselItem, {
                              key: i,
                              cover: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(theme, (item, index2) => {
                                    return openBlock(), createBlock("div", {
                                      class: ["d-flex cursor-pointer item", { "item-activate": String(i) + String(index2) == unref(selectedColorIndex) }],
                                      onClick: ($event) => changeColor(item, index2, i)
                                    }, [
                                      createVNode("div", {
                                        style: item.bgcolor,
                                        class: "color-item rounded-circle"
                                      }, null, 4)
                                    ], 10, ["onClick"]);
                                  }), 256))
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                      createVNode(VCarousel, {
                        continuous: false,
                        "show-arrows": false,
                        color: "#fff",
                        height: "100",
                        "hide-delimiter-background": "",
                        class: "d-flex align-center justify-center custom"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(themeList), (theme, i) => {
                            return openBlock(), createBlock(VCarouselItem, {
                              key: i,
                              cover: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(theme, (item, index2) => {
                                    return openBlock(), createBlock("div", {
                                      class: ["d-flex cursor-pointer item", { "item-activate": String(i) + String(index2) == unref(selectedColorIndex) }],
                                      onClick: ($event) => changeColor(item, index2, i)
                                    }, [
                                      createVNode("div", {
                                        style: item.bgcolor,
                                        class: "color-item rounded-circle"
                                      }, null, 4)
                                    ], 10, ["onClick"]);
                                  }), 256))
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "display" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).title,
                    "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Title"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).content,
                    "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Content"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).author,
                    "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Author"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100",
                    style: "temp-1" == unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).padding,
                    "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("Padding"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: unref(show).qrcode,
                    "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                    label: _ctx.$t("QR Code"),
                    "hide-details": "",
                    inset: "",
                    color: "primary",
                    "min-width": "120",
                    style: "temp-2" != unref(userConfig).tempId ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" }, [
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).title,
                        "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Title"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).content,
                        "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Content"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).author,
                        "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Author"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-1" == unref(userConfig).tempId]
                      ]),
                      createVNode(VSwitch, {
                        modelValue: unref(show).padding,
                        "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("Padding"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                      withDirectives(createVNode(VSwitch, {
                        modelValue: unref(show).qrcode,
                        "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                        label: _ctx.$t("QR Code"),
                        "hide-details": "",
                        inset: "",
                        color: "primary",
                        "min-width": "120"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                        [vShow, "temp-2" != unref(userConfig).tempId]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "three" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center" data-v-46d4f1d4${_scopeId2}><div class="d-flex flex-row ga-4 py-2" data-v-46d4f1d4${_scopeId2}><div class="flex-row d-flex align-center justify-start" data-v-46d4f1d4${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-46d4f1d4${_scopeId2}>${ssrInterpolate(_ctx.$t("Padding"))}</div><div data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(paddingSlider),
                    "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    group: "",
                    "data-id": "padding",
                    onClick: ($event) => onBtnToggle("padding")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { value: "20" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 20 `);
                            } else {
                              return [
                                createTextVNode(" 20 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "30" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 30 `);
                            } else {
                              return [
                                createTextVNode(" 30 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "40" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 40 `);
                            } else {
                              return [
                                createTextVNode(" 40 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "50" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 50 `);
                            } else {
                              return [
                                createTextVNode(" 50 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { value: "60" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 60 `);
                            } else {
                              return [
                                createTextVNode(" 60 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { value: "20" }, {
                            default: withCtx(() => [
                              createTextVNode(" 20 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "30" }, {
                            default: withCtx(() => [
                              createTextVNode(" 30 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "40" }, {
                            default: withCtx(() => [
                              createTextVNode(" 40 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "50" }, {
                            default: withCtx(() => [
                              createTextVNode(" 50 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: "60" }, {
                            default: withCtx(() => [
                              createTextVNode(" 60 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(paddingSlider),
                    "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                    "thumb-label": "",
                    step: 1,
                    "track-color": "grey"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(VDivider, { vertical: "" }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex-row d-flex align-center justify-start" data-v-46d4f1d4${_scopeId2}><div style="${ssrRenderStyle({ "width": "4rem" })}" data-v-46d4f1d4${_scopeId2}>${ssrInterpolate(_ctx.$t("Width"))}</div><div data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(widthSlider),
                    "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    onClick: ($event) => onBtnToggle("width")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "340",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Small"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "440",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Default"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "540",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Middle"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "640",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "740",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("XL Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "340",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "440",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "540",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "640",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "740",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(widthSlider),
                    "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                    "thumb-label": "",
                    step: 5,
                    "track-color": "grey",
                    min: "340",
                    max: "900"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center" }, [
                      createVNode("div", { class: "d-flex flex-row ga-4 py-2" }, [
                        createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [
                          createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Padding")), 1),
                          createVNode("div", null, [
                            createVNode(VBtnToggle, {
                              modelValue: unref(paddingSlider),
                              "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                              color: "deep-purple-accent-3",
                              rounded: "0",
                              group: "",
                              "data-id": "padding",
                              onClick: ($event) => onBtnToggle("padding")
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { value: "20" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 20 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "30" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 30 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "40" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 40 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "50" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 50 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "60" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 60 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                            createVNode(VSlider, {
                              modelValue: unref(paddingSlider),
                              "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                              "thumb-label": "",
                              step: 1,
                              "track-color": "grey"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode(VDivider, { vertical: "" }),
                        createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [
                          createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Width")), 1),
                          createVNode("div", null, [
                            createVNode(VBtnToggle, {
                              modelValue: unref(widthSlider),
                              "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                              color: "deep-purple-accent-3",
                              rounded: "0",
                              onClick: ($event) => onBtnToggle("width")
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  value: "340",
                                  class: "text-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "440",
                                  class: "text-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "540",
                                  class: "text-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "640",
                                  class: "text-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "740",
                                  class: "text-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(VSlider, {
                                modelValue: unref(widthSlider),
                                "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                                "thumb-label": "",
                                step: 5,
                                "track-color": "grey",
                                min: "340",
                                max: "900"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindowItem, { value: "font" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center" data-v-46d4f1d4${_scopeId2}><div class="d-flex flex-row align-center px-2 py-2" data-v-46d4f1d4${_scopeId2}><div data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(fontSizeSlider),
                    "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                    color: "deep-purple-accent-3",
                    rounded: "0",
                    onClick: ($event) => onBtnToggle("fontsize")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "0.7",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Small"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Default"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1.25",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Middle"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "1.5",
                          class: "text-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Large"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "0.7",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1.25",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "1.5",
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex" data-v-46d4f1d4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSlider, {
                    modelValue: unref(fontSizeSlider),
                    "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                    "thumb-label": "",
                    step: 0.1,
                    "track-color": "grey",
                    min: "0.7",
                    max: "1.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center" }, [
                      createVNode("div", { class: "d-flex flex-row align-center px-2 py-2" }, [
                        createVNode("div", null, [
                          createVNode(VBtnToggle, {
                            modelValue: unref(fontSizeSlider),
                            "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                            color: "deep-purple-accent-3",
                            rounded: "0",
                            onClick: ($event) => onBtnToggle("fontsize")
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                value: "0.7",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1.25",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "1.5",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(VSlider, {
                              modelValue: unref(fontSizeSlider),
                              "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                              "thumb-label": "",
                              step: 0.1,
                              "track-color": "grey",
                              min: "0.7",
                              max: "1.5"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabsWindowItem, { value: "template" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center template ga-6 py-4 px-4" }, [
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-1" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-1")
                    }, [
                      createVNode(VImg, {
                        src: _imports_0,
                        width: 80
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-2" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-2")
                    }, [
                      createVNode(VImg, {
                        src: _imports_1,
                        width: 80
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-3" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-3")
                    }, [
                      createVNode(VImg, {
                        src: _imports_2,
                        width: 80
                      })
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["temp-item cursor-pointer", { "temp-item-activate": "temp-4" == unref(userConfig).tempId }],
                      onClick: ($event) => changeTemp("temp-4")
                    }, [
                      createVNode(VImg, {
                        src: _imports_3,
                        width: 80,
                        alt: "temp-4"
                      })
                    ], 10, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "url" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                    createVNode(VTextField, {
                      clearable: "",
                      variant: "outlined",
                      placeholder: "\u8BF7\u8F93\u5165url\u5730\u5740",
                      modelValue: unref(url),
                      "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "bg" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center py-2 px-2" }, [
                    createVNode(VCarousel, {
                      continuous: false,
                      "show-arrows": false,
                      color: "#fff",
                      height: "100",
                      "hide-delimiter-background": "",
                      class: "d-flex align-center justify-center custom"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(themeList), (theme, i) => {
                          return openBlock(), createBlock(VCarouselItem, {
                            key: i,
                            cover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(theme, (item, index2) => {
                                  return openBlock(), createBlock("div", {
                                    class: ["d-flex cursor-pointer item", { "item-activate": String(i) + String(index2) == unref(selectedColorIndex) }],
                                    onClick: ($event) => changeColor(item, index2, i)
                                  }, [
                                    createVNode("div", {
                                      style: item.bgcolor,
                                      class: "color-item rounded-circle"
                                    }, null, 4)
                                  ], 10, ["onClick"]);
                                }), 256))
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "display" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-row ga-3 align-center justify-start py-3 px-3 crtl" }, [
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).title,
                      "onUpdate:modelValue": [($event) => unref(show).title = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Title"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).content,
                      "onUpdate:modelValue": [($event) => unref(show).content = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Content"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).author,
                      "onUpdate:modelValue": [($event) => unref(show).author = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Author"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-1" == unref(userConfig).tempId]
                    ]),
                    createVNode(VSwitch, {
                      modelValue: unref(show).padding,
                      "onUpdate:modelValue": [($event) => unref(show).padding = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("Padding"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "100"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                    withDirectives(createVNode(VSwitch, {
                      modelValue: unref(show).qrcode,
                      "onUpdate:modelValue": [($event) => unref(show).qrcode = $event, ($event) => onSwitchChange()],
                      label: _ctx.$t("QR Code"),
                      "hide-details": "",
                      inset: "",
                      color: "primary",
                      "min-width": "120"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), [
                      [vShow, "temp-2" != unref(userConfig).tempId]
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "three" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center" }, [
                    createVNode("div", { class: "d-flex flex-row ga-4 py-2" }, [
                      createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [
                        createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Padding")), 1),
                        createVNode("div", null, [
                          createVNode(VBtnToggle, {
                            modelValue: unref(paddingSlider),
                            "onUpdate:modelValue": ($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null,
                            color: "deep-purple-accent-3",
                            rounded: "0",
                            group: "",
                            "data-id": "padding",
                            onClick: ($event) => onBtnToggle("padding")
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { value: "20" }, {
                                default: withCtx(() => [
                                  createTextVNode(" 20 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: "30" }, {
                                default: withCtx(() => [
                                  createTextVNode(" 30 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: "40" }, {
                                default: withCtx(() => [
                                  createTextVNode(" 40 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: "50" }, {
                                default: withCtx(() => [
                                  createTextVNode(" 50 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: "60" }, {
                                default: withCtx(() => [
                                  createTextVNode(" 60 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode(VSlider, {
                            modelValue: unref(paddingSlider),
                            "onUpdate:modelValue": [($event) => isRef(paddingSlider) ? paddingSlider.value = $event : null, ($event) => onSliderChange("padding")],
                            "thumb-label": "",
                            step: 1,
                            "track-color": "grey"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode(VDivider, { vertical: "" }),
                      createVNode("div", { class: "flex-row d-flex align-center justify-start" }, [
                        createVNode("div", { style: { "width": "4rem" } }, toDisplayString(_ctx.$t("Width")), 1),
                        createVNode("div", null, [
                          createVNode(VBtnToggle, {
                            modelValue: unref(widthSlider),
                            "onUpdate:modelValue": ($event) => isRef(widthSlider) ? widthSlider.value = $event : null,
                            color: "deep-purple-accent-3",
                            rounded: "0",
                            onClick: ($event) => onBtnToggle("width")
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                value: "340",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "440",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "540",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "640",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "740",
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("XL Large")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(VSlider, {
                              modelValue: unref(widthSlider),
                              "onUpdate:modelValue": [($event) => isRef(widthSlider) ? widthSlider.value = $event : null, ($event) => onSliderChange("width")],
                              "thumb-label": "",
                              step: 5,
                              "track-color": "grey",
                              min: "340",
                              max: "900"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VTabsWindowItem, { value: "font" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center" }, [
                    createVNode("div", { class: "d-flex flex-row align-center px-2 py-2" }, [
                      createVNode("div", null, [
                        createVNode(VBtnToggle, {
                          modelValue: unref(fontSizeSlider),
                          "onUpdate:modelValue": ($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null,
                          color: "deep-purple-accent-3",
                          rounded: "0",
                          onClick: ($event) => onBtnToggle("fontsize")
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              value: "0.7",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Small")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Default")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1.25",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Middle")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              value: "1.5",
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Large")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                        createVNode("div", { class: "d-flex" }, [
                          createVNode(VSlider, {
                            modelValue: unref(fontSizeSlider),
                            "onUpdate:modelValue": [($event) => isRef(fontSizeSlider) ? fontSizeSlider.value = $event : null, ($event) => onSliderChange("fontsize")],
                            "thumb-label": "",
                            step: 0.1,
                            "track-color": "grey",
                            min: "0.7",
                            max: "1.5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        "align-tabs": "center",
        "center-active": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, {
              value: "template",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6A21\u677F`);
                } else {
                  return [
                    createTextVNode("\u6A21\u677F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "url",
              class: "text-none",
              style: "temp-3" == unref(userConfig).tempId ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`URL`);
                } else {
                  return [
                    createTextVNode("URL")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "bg",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Bg Color"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Bg Color")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "display",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Display"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Display")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "three",
              class: "text-none d-none d-sm-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Width And Padding"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Width And Padding")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, {
              value: "font",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Font"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Font")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, {
                value: "template",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode("\u6A21\u677F")
                ]),
                _: 1
              }),
              withDirectives(createVNode(VTab, {
                value: "url",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode("URL")
                ]),
                _: 1
              }, 512), [
                [vShow, "temp-3" == unref(userConfig).tempId]
              ]),
              createVNode(VTab, {
                value: "bg",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Bg Color")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, {
                value: "display",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Display")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, {
                value: "three",
                class: "text-none d-none d-sm-flex"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Width And Padding")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, {
                value: "font",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Font")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</figure>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileOperation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-46d4f1d4"]]);
const makeVBottomSheetProps = propsFactory({
  inset: Boolean,
  ...makeVDialogProps({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet");
const VBottomSheet = genericComponent()({
  name: "VBottomSheet",
  props: makeVBottomSheetProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    useRender(() => {
      const dialogProps = VDialog.filterProps(props);
      return createVNode(VDialog, mergeProps(dialogProps, {
        "contentClass": ["v-bottom-sheet__content", props.contentClass],
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "class": ["v-bottom-sheet", {
          "v-bottom-sheet--inset": props.inset
        }, props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
const makeVFabProps = propsFactory({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: true
  },
  ...omit(makeVBtnProps({
    active: true
  }), ["location"]),
  ...makeLayoutItemProps(),
  ...makeLocationProps(),
  ...makeTransitionProps({
    transition: "fab-transition"
  })
}, "VFab");
const VFab = genericComponent()({
  name: "VFab",
  props: makeVFabProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const height = shallowRef(56);
    const layoutItemStyles = ref();
    const {
      resizeRef
    } = useResizeObserver();
    const hasPosition = computed(() => props.app || props.absolute);
    const position = computed(() => {
      var _a2;
      var _a;
      if (!hasPosition.value)
        return false;
      return (_a2 = (_a = props.location) == null ? void 0 : _a.split(" ").shift()) != null ? _a2 : "bottom";
    });
    const orientation = computed(() => {
      var _a2;
      var _a;
      if (!hasPosition.value)
        return false;
      return (_a2 = (_a = props.location) == null ? void 0 : _a.split(" ")[1]) != null ? _a2 : "end";
    });
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position,
        layoutSize: computed(() => props.layout ? height.value + 24 : 0),
        elementSize: computed(() => height.value + 24),
        active: computed(() => props.app && model.value),
        absolute: toRef(props, "absolute")
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    const vFabRef = ref();
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode("div", {
        "ref": vFabRef,
        "class": ["v-fab", {
          "v-fab--absolute": props.absolute,
          "v-fab--app": !!props.app,
          "v-fab--extended": props.extended,
          "v-fab--offset": props.offset,
          [`v-fab--${position.value}`]: hasPosition.value,
          [`v-fab--${orientation.value}`]: hasPosition.value
        }, props.class],
        "style": [props.app ? {
          ...layoutItemStyles.value
        } : {
          height: "inherit",
          width: void 0
        }, props.style]
      }, [createVNode("div", {
        "class": "v-fab__container"
      }, [createVNode(MaybeTransition, {
        "appear": props.appear,
        "transition": props.transition
      }, {
        default: () => [withDirectives(createVNode(VBtn, mergeProps({
          "ref": resizeRef
        }, btnProps, {
          "active": void 0,
          "location": void 0
        }), slots), [[vShow, props.active]])]
      })])]);
    });
    return {};
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
const API_PREFIX_VERCEL = "https://doc.wowyou.cc/api/web/og";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { userConfig, initUserConfig, updateShareUserConfig } = useSharedConfig();
    useDisplay();
    const isMobile = ref(false);
    const snackbar = ref(false);
    const temp1 = ref(null);
    const temp2 = ref(null);
    const temp3 = ref(null);
    const temp4 = ref(null);
    const sheet = ref(false);
    const isLoading = ref(false);
    useSeoMeta({
      title: "\u521B\u56FE\u5361\u7247 - \u4F53\u9A8C\u5168\u65B0\u7684\u6587\u5B57\u5361\u7247\u5206\u4EAB | labs.wowyou.cc",
      ogTitle: "\u521B\u56FE\u5361\u7247 - \u4F53\u9A8C\u5168\u65B0\u7684\u6587\u5B57\u5361\u7247\u5206\u4EAB | labs.wowyou.cc",
      keywords: "\u521B\u56FE\u5361\u7247,\u5361\u7247,\u6587\u751F\u56FE,\u6587\u5B57\u5361\u7247,\u5DE5\u5177,\u6F14\u793A,\u751F\u6210\u5668,\u5C0F\u7EA2\u4E66\u56FE\u6587\u5FC5\u5907,\u56FE\u6587\u795E\u5668",
      ogType: "website",
      description: "\u521B\u56FE\u5361\u7247\u4E00\u6B3E\u5728\u7EBF\u6587\u5B57\u5361\u7247\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EA\u9700\u7B80\u5355\u8F93\u5165\uFF0C\u5373\u53EF\u77AC\u95F4\u8F6C\u5316\u4E3A\u7CBE\u81F4\u3001\u98CE\u683C\u72EC\u7279\u7684\u6587\u5B57\u5361\u7247\uFF0C\u8BA9\u6BCF\u4E2A\u5B57\u53E5\u90FD\u6563\u53D1\u72EC\u7279\u7684\u9B45\u529B\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u8868\u8FBE\u90FD\u7559\u4E0B\u6DF1\u523B\u5370\u8C61",
      ogDescription: "\u521B\u56FE\u5361\u7247\u4E00\u6B3E\u5728\u7EBF\u6587\u5B57\u5361\u7247\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EA\u9700\u7B80\u5355\u8F93\u5165\uFF0C\u5373\u53EF\u77AC\u95F4\u8F6C\u5316\u4E3A\u7CBE\u81F4\u3001\u98CE\u683C\u72EC\u7279\u7684\u6587\u5B57\u5361\u7247\uFF0C\u8BA9\u6BCF\u4E2A\u5B57\u53E5\u90FD\u6563\u53D1\u72EC\u7279\u7684\u9B45\u529B\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u8868\u8FBE\u90FD\u7559\u4E0B\u6DF1\u523B\u5370\u8C61",
      twitterCard: "summary_large_image",
      ogUrl: "https://labs.wowyou.cc",
      ogLocale: "zh",
      ogPublisher: "\u521B\u56FE\u5361\u7247",
      ogLogo: "https://labs.wowyou.cc/logo.png",
      ogImage: "https://labs.wowyou.cc/preview.png",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    });
    function changePicScale(e) {
      let width2 = String(userConfig.value.styleObject.width);
      width2 = width2.match(/(\d+)/)[1];
      let height = width2;
      if (e == 0) {
        width2 = 400;
        height = width2;
      }
      if (e == 1) {
        width2 = 500;
        height = width2 / 3 * 4;
      }
      if (e == 2) {
        width2 = 700;
        height = width2 / 4 * 3;
      }
      if (e == 3) {
        width2 = 1024;
        height = width2 / 7 * 5;
      }
      if (e == 4) {
        width2 = 393;
        height = width2 / 9 * 16;
      }
      if (e == 5) {
        width2 = 700;
        height = width2 / 16 * 9;
      }
      if (e == 6) {
        width2 = 533;
        height = width2 / 12 * 16;
      }
      userConfig.value.styleObject.height = `${height}px`;
      userConfig.value.styleObject.width = `${width2}px`;
      updateShareUserConfig({ scale: userConfig.value.scale, styleObject: userConfig.value.styleObject });
    }
    function onUrlChange(url) {
      queryOg(url);
    }
    function changeColor(theme) {
      userConfig.value.styleObject.transition = "";
      updateShareUserConfig({ styleObject: userConfig.value.styleObject });
      getChildRef().style.setProperty("--colorA", theme.colorA);
      getChildRef().style.setProperty("--colorB", theme.colorB);
      getChildRef().style.setProperty("--angle", theme.angle);
    }
    function onSliderChange(e) {
      if (e.action == "padding") {
        styleObject.padding = `${e.val}px`;
      }
      if (e.action == "width") {
        styleObject.width = `${e.val}px`;
      }
      if (e.action == "fontsize") {
        styleObject.fontSize = `${e.val}rem`;
        getChildRef().style.setProperty("--base-font-size", `${e.val}rem`);
      }
    }
    function decrement(e) {
      if ("padding" == e.action) {
        styleObject.padding = `${e.val}px`;
      } else if ("width" == e.action) {
        styleObject.width = `${e.val}px`;
      } else {
        styleObject.fontSize = `${e.val}rem`;
        temp1.value.$refs.template.style.setProperty("--base-font-size", `${e.val}rem`);
      }
    }
    function increment(e) {
      if ("padding" == e.action) {
        styleObject.padding = `${e.val}px`;
      } else if ("width" == e.action) {
        styleObject.width = `${e.val}px`;
      } else {
        styleObject.fontSize = `${e.val}rem`;
        temp1.value.$refs.template.style.setProperty("--base-font-size", `${e.val}rem`);
      }
    }
    function generateImage() {
      html2canvas(getChildRef(), { scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const blob = dataURItoBlob(imgData);
        const url = URL.createObjectURL(blob);
        const link = (void 0).createElement("a");
        link.href = url;
        link.download = "\u521B\u56FE\u5361\u7247-screenshot.png";
        (void 0).body.appendChild(link);
        link.click();
        (void 0).body.removeChild(link);
      });
    }
    const dataURItoBlob = (dataURI) => {
      const byteString = atob(dataURI.split(",")[1]);
      const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };
    function copyImage() {
      html2canvas(getChildRef(), { scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        copyBase64Img(imgData);
      });
    }
    function copyBase64Img(base64Data) {
      base64Data = base64Data.split(";base64,");
      let type = base64Data[0].split("data:")[1];
      base64Data = base64Data[1];
      let bytes = atob(base64Data), ab = new ArrayBuffer(bytes.length), ua = new Uint8Array(ab);
      [...Array(bytes.length)].forEach((v, i) => ua[i] = bytes.charCodeAt(i));
      let blob = new Blob([ab], { type });
      (void 0).clipboard.write([new ClipboardItem({ [type]: blob })]);
      snackbar.value = true;
    }
    function getChildRef() {
      if ("temp-1" == userConfig.value.tempId) {
        return temp1.value.$refs.template;
      }
      if ("temp-2" == userConfig.value.tempId) {
        return temp2.value.$refs.template;
      }
      if ("temp-3" == userConfig.value.tempId) {
        return temp3.value.$refs.template;
      }
      if ("temp-4" == userConfig.value.tempId) {
        return temp4.value.$refs.template;
      }
    }
    const queryOg = async (url) => {
      isLoading.value = true;
      const { data } = await axios.post(`${API_PREFIX_VERCEL}`, { "url": url });
      if (data) {
        let base64Image = "";
        let base64Logo = "";
        if (data == null ? void 0 : data.image) {
          try {
            base64Image = await getBase64Image(data.image, true);
            base64Logo = await getBase64Image(data.logo, false);
          } catch (error) {
            console.log(`Oops, something went wrong: Maybe caused by CORS!!!`);
          }
        }
        const metaData = {
          title: data.title,
          description: data.description,
          url,
          image: data.image,
          logo: data.logo,
          author: data.author,
          publisher: data.publisher,
          base64Image,
          base64Logo
        };
        updateShareUserConfig({ metaData });
      }
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PcOperation = __nuxt_component_0;
      const _component_DefaultTemplate = __nuxt_component_1;
      const _component_CodeTemplate = __nuxt_component_2;
      const _component_CardTemplate = __nuxt_component_3;
      const _component_ImageTemplate = __nuxt_component_4;
      const _component_MobileOperation = __nuxt_component_5;
      if (!unref(isMobile)) {
        _push(ssrRenderComponent(VContainer, mergeProps({ class: "fill-height" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, { style: { "flex-wrap": "nowrap" } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "3",
                      style: { "min-width": "400px", "max-width": "500px" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSheet, {
                            rounded: "lg",
                            "min-height": "268"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_PcOperation, {
                                  onChangeColor: changeColor,
                                  onOnSliderChange: onSliderChange,
                                  onChangePicScale: changePicScale,
                                  onDecrement: decrement,
                                  onIncrement: increment,
                                  onOnUrlChange: onUrlChange
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_PcOperation, {
                                    onChangeColor: changeColor,
                                    onOnSliderChange: onSliderChange,
                                    onChangePicScale: changePicScale,
                                    onDecrement: decrement,
                                    onIncrement: increment,
                                    onOnUrlChange: onUrlChange
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VSheet, {
                              rounded: "lg",
                              "min-height": "268"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_PcOperation, {
                                  onChangeColor: changeColor,
                                  onOnSliderChange: onSliderChange,
                                  onChangePicScale: changePicScale,
                                  onDecrement: decrement,
                                  onIncrement: increment,
                                  onOnUrlChange: onUrlChange
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCol, { style: { "min-width": "500px" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div id="temp-1" style="${ssrRenderStyle("temp-1" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_DefaultTemplate, {
                            ref_key: "temp1",
                            ref: temp1,
                            isMobile: unref(isMobile)
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div id="temp-2" style="${ssrRenderStyle("temp-2" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_CodeTemplate, {
                            ref_key: "temp2",
                            ref: temp2
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div id="temp-3" style="${ssrRenderStyle("temp-3" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_CardTemplate, {
                            ref_key: "temp3",
                            ref: temp3,
                            isLoading: unref(isLoading)
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div id="temp-4" style="${ssrRenderStyle("temp-4" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ImageTemplate, {
                            ref_key: "temp4",
                            ref: temp4
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="d-flex mt-5 flex-row align-center justify-center ga-4" data-v-6602bb3f${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: generateImage,
                            class: "text-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Download Image"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Download Image")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (!unref(isMobile)) {
                            _push4(ssrRenderComponent(VTooltip, { text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, {
                              activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VBtn, mergeProps(props, {
                                    onClick: copyImage,
                                    class: "text-none"
                                  }), {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(_ctx.$t("Copy Image"))}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VBtn, mergeProps(props, {
                                      onClick: copyImage,
                                      class: "text-none"
                                    }), {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            withDirectives(createVNode("div", { id: "temp-1" }, [
                              createVNode(_component_DefaultTemplate, {
                                ref_key: "temp1",
                                ref: temp1,
                                isMobile: unref(isMobile)
                              }, null, 8, ["isMobile"])
                            ], 512), [
                              [vShow, "temp-1" == unref(userConfig).tempId]
                            ]),
                            withDirectives(createVNode("div", { id: "temp-2" }, [
                              createVNode(_component_CodeTemplate, {
                                ref_key: "temp2",
                                ref: temp2
                              }, null, 512)
                            ], 512), [
                              [vShow, "temp-2" == unref(userConfig).tempId]
                            ]),
                            withDirectives(createVNode("div", { id: "temp-3" }, [
                              createVNode(_component_CardTemplate, {
                                ref_key: "temp3",
                                ref: temp3,
                                isLoading: unref(isLoading)
                              }, null, 8, ["isLoading"])
                            ], 512), [
                              [vShow, "temp-3" == unref(userConfig).tempId]
                            ]),
                            withDirectives(createVNode("div", { id: "temp-4" }, [
                              createVNode(_component_ImageTemplate, {
                                ref_key: "temp4",
                                ref: temp4
                              }, null, 512)
                            ], 512), [
                              [vShow, "temp-4" == unref(userConfig).tempId]
                            ]),
                            createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [
                              createVNode(VBtn, {
                                onClick: generateImage,
                                class: "text-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Download Image")), 1)
                                ]),
                                _: 1
                              }),
                              !unref(isMobile) ? (openBlock(), createBlock(VTooltip, {
                                key: 0,
                                text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    onClick: copyImage,
                                    class: "text-none"
                                  }), {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "3",
                        style: { "min-width": "400px", "max-width": "500px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            rounded: "lg",
                            "min-height": "268"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_PcOperation, {
                                onChangeColor: changeColor,
                                onOnSliderChange: onSliderChange,
                                onChangePicScale: changePicScale,
                                onDecrement: decrement,
                                onIncrement: increment,
                                onOnUrlChange: onUrlChange
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { style: { "min-width": "500px" } }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", { id: "temp-1" }, [
                            createVNode(_component_DefaultTemplate, {
                              ref_key: "temp1",
                              ref: temp1,
                              isMobile: unref(isMobile)
                            }, null, 8, ["isMobile"])
                          ], 512), [
                            [vShow, "temp-1" == unref(userConfig).tempId]
                          ]),
                          withDirectives(createVNode("div", { id: "temp-2" }, [
                            createVNode(_component_CodeTemplate, {
                              ref_key: "temp2",
                              ref: temp2
                            }, null, 512)
                          ], 512), [
                            [vShow, "temp-2" == unref(userConfig).tempId]
                          ]),
                          withDirectives(createVNode("div", { id: "temp-3" }, [
                            createVNode(_component_CardTemplate, {
                              ref_key: "temp3",
                              ref: temp3,
                              isLoading: unref(isLoading)
                            }, null, 8, ["isLoading"])
                          ], 512), [
                            [vShow, "temp-3" == unref(userConfig).tempId]
                          ]),
                          withDirectives(createVNode("div", { id: "temp-4" }, [
                            createVNode(_component_ImageTemplate, {
                              ref_key: "temp4",
                              ref: temp4
                            }, null, 512)
                          ], 512), [
                            [vShow, "temp-4" == unref(userConfig).tempId]
                          ]),
                          createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [
                            createVNode(VBtn, {
                              onClick: generateImage,
                              class: "text-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Download Image")), 1)
                              ]),
                              _: 1
                            }),
                            !unref(isMobile) ? (openBlock(), createBlock(VTooltip, {
                              key: 0,
                              text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps(props, {
                                  onClick: copyImage,
                                  class: "text-none"
                                }), {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VRow, { style: { "flex-wrap": "nowrap" } }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "3",
                      style: { "min-width": "400px", "max-width": "500px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VSheet, {
                          rounded: "lg",
                          "min-height": "268"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_PcOperation, {
                              onChangeColor: changeColor,
                              onOnSliderChange: onSliderChange,
                              onChangePicScale: changePicScale,
                              onDecrement: decrement,
                              onIncrement: increment,
                              onOnUrlChange: onUrlChange
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { style: { "min-width": "500px" } }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("div", { id: "temp-1" }, [
                          createVNode(_component_DefaultTemplate, {
                            ref_key: "temp1",
                            ref: temp1,
                            isMobile: unref(isMobile)
                          }, null, 8, ["isMobile"])
                        ], 512), [
                          [vShow, "temp-1" == unref(userConfig).tempId]
                        ]),
                        withDirectives(createVNode("div", { id: "temp-2" }, [
                          createVNode(_component_CodeTemplate, {
                            ref_key: "temp2",
                            ref: temp2
                          }, null, 512)
                        ], 512), [
                          [vShow, "temp-2" == unref(userConfig).tempId]
                        ]),
                        withDirectives(createVNode("div", { id: "temp-3" }, [
                          createVNode(_component_CardTemplate, {
                            ref_key: "temp3",
                            ref: temp3,
                            isLoading: unref(isLoading)
                          }, null, 8, ["isLoading"])
                        ], 512), [
                          [vShow, "temp-3" == unref(userConfig).tempId]
                        ]),
                        withDirectives(createVNode("div", { id: "temp-4" }, [
                          createVNode(_component_ImageTemplate, {
                            ref_key: "temp4",
                            ref: temp4
                          }, null, 512)
                        ], 512), [
                          [vShow, "temp-4" == unref(userConfig).tempId]
                        ]),
                        createVNode("div", { class: "d-flex mt-5 flex-row align-center justify-center ga-4" }, [
                          createVNode(VBtn, {
                            onClick: generateImage,
                            class: "text-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Download Image")), 1)
                            ]),
                            _: 1
                          }),
                          !unref(isMobile) ? (openBlock(), createBlock(VTooltip, {
                            key: 0,
                            text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                onClick: copyImage,
                                class: "text-none"
                              }), {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex flex-column justify-center align-center mb-4 pb-2" }, _attrs))} data-v-6602bb3f><div id="temp-1" style="${ssrRenderStyle("temp-1" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f>`);
        _push(ssrRenderComponent(_component_DefaultTemplate, {
          ref_key: "temp1",
          ref: temp1,
          isMobile: unref(isMobile)
        }, null, _parent));
        _push(`</div><div id="temp-2" style="${ssrRenderStyle("temp-2" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f>`);
        _push(ssrRenderComponent(_component_CodeTemplate, {
          ref_key: "temp2",
          ref: temp2
        }, null, _parent));
        _push(`</div><div id="temp-3" style="${ssrRenderStyle("temp-3" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f>`);
        _push(ssrRenderComponent(_component_CardTemplate, {
          ref_key: "temp3",
          ref: temp3,
          isLoading: unref(isLoading)
        }, null, _parent));
        _push(`</div><div id="temp-4" style="${ssrRenderStyle("temp-4" == unref(userConfig).tempId ? null : { display: "none" })}" data-v-6602bb3f>`);
        _push(ssrRenderComponent(_component_ImageTemplate, {
          ref_key: "temp4",
          ref: temp4
        }, null, _parent));
        _push(`</div><div class="d-flex mt-5 flex-row align-center justify-center ga-4" data-v-6602bb3f>`);
        _push(ssrRenderComponent(VBtn, {
          onClick: generateImage,
          class: "text-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Download Image"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Download Image")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!unref(isMobile)) {
          _push(ssrRenderComponent(VTooltip, { text: "\u53EF\u76F4\u63A5\u7C98\u8D34\u5728\u804A\u5929\u6846" }, {
            activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VBtn, mergeProps(props, {
                  onClick: copyImage,
                  class: "text-none"
                }), {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Copy Image"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VBtn, mergeProps(props, {
                    onClick: copyImage,
                    class: "text-none"
                  }), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Copy Image")), 1)
                    ]),
                    _: 2
                  }, 1040)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(VBottomSheet, {
          modelValue: unref(sheet),
          "onUpdate:modelValue": ($event) => isRef(sheet) ? sheet.value = $event : null,
          inset: "",
          opacity: 0.2
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_MobileOperation, {
                      onChangeColor: changeColor,
                      onOnSliderChange: onSliderChange,
                      onDecrement: decrement,
                      onIncrement: increment,
                      onOnUrlChange: onUrlChange
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_MobileOperation, {
                        onChangeColor: changeColor,
                        onOnSliderChange: onSliderChange,
                        onDecrement: decrement,
                        onIncrement: increment,
                        onOnUrlChange: onUrlChange
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_MobileOperation, {
                      onChangeColor: changeColor,
                      onOnSliderChange: onSliderChange,
                      onDecrement: decrement,
                      onIncrement: increment,
                      onOnUrlChange: onUrlChange
                    })
                  ]),
                  _: 1
                })
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
              _push2(` \u590D\u5236\u6210\u529F `);
            } else {
              return [
                createTextVNode(" \u590D\u5236\u6210\u529F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VFab, {
          icon: "mdi-pencil",
          onClick: ($event) => sheet.value = true,
          location: "bottom end",
          app: "",
          color: "primary",
          style: { "z-index": "1006" }
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6602bb3f"]]);

export { index as default };
