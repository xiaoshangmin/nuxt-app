import { mergeProps, withCtx, createTextVNode, toDisplayString, defineComponent, ref, h, resolveComponent, computed, useSSRContext } from 'vue';
import { u as wt, a as Ue, p as ot, b as He, h as dt, r as St, j as mt, n as Bt, w as vt, c as ft, d as Pe } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { l } from './index-BSDl_Q2m.mjs';
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

function j(o2) {
  const i2 = o2.componentName || "NuxtLink";
  function u2(e2) {
    return "string" == typeof e2 && e2.startsWith("#");
  }
  function s2(e2, t2) {
    if (!e2 || "append" !== o2.trailingSlash && "remove" !== o2.trailingSlash) return e2;
    if ("string" == typeof e2) return z(e2, o2.trailingSlash);
    const r2 = "path" in e2 && void 0 !== e2.path ? e2.path : t2(e2).path;
    return { ...e2, name: void 0, path: z(r2, o2.trailingSlash) };
  }
  function l2(e2) {
    var _a, _b, _c;
    const t2 = wt(), r2 = He(), o3 = computed(() => !!e2.target && "_self" !== e2.target), i3 = computed(() => {
      const t3 = e2.to || e2.href || "";
      return "string" == typeof t3 && dt(t3, { acceptRelative: true });
    }), l3 = resolveComponent("RouterLink"), c2 = l3 && "string" != typeof l3 ? l3.useLink : void 0, p2 = computed(() => {
      if (e2.external) return true;
      const t3 = e2.to || e2.href || "";
      return "object" != typeof t3 && ("" === t3 || i3.value);
    }), b2 = computed(() => {
      const r3 = e2.to || e2.href || "";
      return p2.value ? r3 : s2(r3, t2.resolve);
    }), y2 = p2.value || null == c2 ? void 0 : c2({ ...e2, to: b2 }), x2 = computed(() => {
      var _a2;
      var e3;
      if (!b2.value || i3.value || u2(b2.value)) return b2.value;
      if (p2.value) {
        const e4 = "object" == typeof b2.value && "path" in b2.value ? St(b2.value) : b2.value;
        return s2("object" == typeof e4 ? t2.resolve(e4).href : e4, t2.resolve);
      }
      return "object" == typeof b2.value ? (_a2 = null == (e3 = t2.resolve(b2.value)) ? void 0 : e3.href) != null ? _a2 : null : s2(mt(r2.app.baseURL, b2.value), t2.resolve);
    });
    return { to: b2, hasTarget: o3, isAbsoluteUrl: i3, isExternal: p2, href: x2, isActive: (_a = null == y2 ? void 0 : y2.isActive) != null ? _a : computed(() => b2.value === t2.currentRoute.value.path), isExactActive: (_b = null == y2 ? void 0 : y2.isExactActive) != null ? _b : computed(() => b2.value === t2.currentRoute.value.path), route: (_c = null == y2 ? void 0 : y2.route) != null ? _c : computed(() => t2.resolve(b2.value)), async navigate() {
      await Bt(x2.value, { replace: e2.replace, external: p2.value || o3.value });
    } };
  }
  return defineComponent({ name: i2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: l2, setup(e2, { slots: n2 }) {
    wt();
    const { to: i3, href: s3, navigate: f2, isExternal: v2, hasTarget: h2, isAbsoluteUrl: m2 } = l2(e2);
    ref(false);
    async function g2(e3 = Ue()) {
    }
    return () => {
      var t2;
      if (!v2.value && !h2.value && !u2(i3.value)) {
        const t3 = { ref: void 0, to: i3.value, activeClass: e2.activeClass || o2.activeClass, exactActiveClass: e2.exactActiveClass || o2.exactActiveClass, replace: e2.replace, ariaCurrentValue: e2.ariaCurrentValue, custom: e2.custom };
        return e2.custom || (t3.rel = e2.rel || void 0), h(resolveComponent("RouterLink"), t3, n2.default);
      }
      const l3 = e2.target || null, d2 = ((...e3) => e3.find((e4) => void 0 !== e4))(e2.noRel ? "" : e2.rel, o2.externalRelAttribute, m2.value || h2.value ? "noopener noreferrer" : "") || null;
      return e2.custom ? n2.default ? n2.default({ href: s3.value, navigate: f2, prefetch: g2, get route() {
        if (!s3.value) return;
        const e3 = new URL(s3.value, "http://localhost");
        return { path: e3.pathname, fullPath: e3.pathname, get query() {
          return ot(e3.search);
        }, hash: e3.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: s3.value };
      }, rel: d2, target: l3, isExternal: v2.value || h2.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: s3.value || null, rel: d2, target: l3 }, null == (t2 = n2.default) ? void 0 : t2.call(n2));
    };
  } });
}
const A = j(Pe);
function z(e2, t2) {
  const r2 = "append" === t2 ? vt : ft;
  return dt(e2) && !e2.startsWith("http") ? e2 : r2(e2, true);
}
const _ = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e2) {
  const t2 = e2;
  return l({ title: `${t2.statusCode} - ${t2.statusMessage} | ${t2.appName}`, script: [{ children: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ children: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t3, r2, a2, n2) => {
    const l2 = A;
    r2(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, n2))} data-v-c2c324f7><div class="fixed left-0 right-0 spotlight z-10" data-v-c2c324f7></div><div class="max-w-520px text-center z-20" data-v-c2c324f7><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-c2c324f7>${ssrInterpolate(e2.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-c2c324f7>${ssrInterpolate(e2.description)}</p><div class="flex items-center justify-center w-full" data-v-c2c324f7>`), r2(ssrRenderComponent(l2, { to: "/", class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md" }, { default: withCtx((t4, r3, a3, n3) => {
      if (!r3) return [createTextVNode(toDisplayString(e2.backHome), 1)];
      r3(`${ssrInterpolate(e2.backHome)}`);
    }), _: 1 }, a2)), r2("</div></div></div>");
  };
} }, L = _.setup;
_.setup = (e2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue"), L ? L(e2, t2) : void 0;
};
const N = o(_, [["__scopeId", "data-v-c2c324f7"]]);

export { N as default };
