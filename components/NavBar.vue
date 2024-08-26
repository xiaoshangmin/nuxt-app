<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="toggleDrawer" v-if="isMobile" />
    <v-btn v-if="!isMobile" v-for="item in items" :key="item.title" :to="item.to" :href="item.href" class="text-none">
      {{ item.title }}
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="!isMobile" class="d-flex justify-center align-center">
      <v-btn variant="text">
        <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
        <v-tooltip activator="parent" location="bottom" class="custom-tooltip">
          <v-img :width="150" aspect-ratio="1" src="~/assets/qrcode_official_account.jpg"></v-img></v-tooltip>
      </v-btn>
      <v-btn variant="text">
        <v-icon icon="mdi-wechat" size="x-large"></v-icon>
        <v-tooltip activator="parent" location="bottom" class="custom-tooltip">
          <v-img :width="150" aspect-ratio="1" src="~/assets/qrcode_mini_program.jpg"></v-img></v-tooltip>
      </v-btn>
      <v-btn variant="text" @click="feedback">
        <v-icon icon="mdi-message-alert-outline " size="x-large"></v-icon>
      </v-btn>
    </div>
    <div v-if="!isMobile">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-translate " v-bind="props"> </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="loc in availableLocales" :key="loc.code" @click="updateLocale(loc.code)">
            <v-list-item-title>{{ loc.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick"></v-btn>
    </div>
    <div>
      <v-btn icon="mdi-help" slim @click="dialogHelp = true"></v-btn>
    </div>
    <div>
      <v-btn icon="mdi-eraser" slim @click="dialog = true"></v-btn>
    </div>

  </v-app-bar>

  <v-navigation-drawer app v-model="drawer" temporary style="z-index: 1006">
    <v-list>
      <v-list-item v-for="item in mobileItems" :key="item.title" :to="item.to" :href="item.href">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item>
        <v-list-item-title @click="dialogOfficial = true">公众号</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-dialog v-model="dialog" max-width="400" persistent>
    <v-card prepend-icon="mdi-alert" text="确定要重置目前所有文本内容及配置并刷新页面吗？" title="重置所有内容">
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false"> 取消 </v-btn>

        <v-btn @click="onReset"> 重置 </v-btn>
      </template>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogHelp" max-width="500">
    <v-card prepend-icon="mdi-help" title="简单说明">
      <template v-slot:text>
        <span class="font-weight-black">
          <p>点击有下角按钮可以弹出设置页面</p>
          <p>设置页面可以切换模板，URL(模板三)背景颜色，显示控制，字体大小</p>
          <p>背景颜色有多页，可以左右滑动切换</p>
          <p>模板一：用于生成文字卡片，所有文字都可以修改替换，可以输入文字表情，点击二维码可以替换自己的链接或者其他文本内容</p>
          <p>模板二：用于代码高亮的卡片，可以修改成自己的代码</p>
          <p>模板三：把社交链接生成卡片 选择模板三后设置底部会多个URl的tab可以输入地址</p>
          <p>例如小红书分享的地址：http://xhslink.com/hDTT9T </p>
          <p>还有本站地址: https://labs.wowyou.cc/
          </p>
          <p>在页面右上角有个像笔擦图标可以恢复默认值，底部的导出按钮可以把卡片生成图片</p>
        </span>
      </template>

      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialogHelp = false"> ok </v-btn>
      </template>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogOfficial" max-width="400">
    <v-card>
      <template v-slot:text>
        <div>扫码关注公众号,获取最新功能更新或者留下您宝贵的建议</div>
        <div class="d-flex">
        <v-img :width="150" aspect-ratio="1" src="~/assets/qrcode_official_account.jpg"></v-img>
      </div>
      </template>
    </v-card>
  </v-dialog>

</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";
const { mobile } = useDisplay();
const { t, locale, locales, setLocale } = useI18n();

const drawer = ref(false);
const dialog = ref(false);
const dialogHelp = ref(false);
const dialogOfficial = ref(false);

const items = computed(() => [
  { title: t("Simple Card"), to: "/" },
  { title: t("Bg Remove"), to: "/bgremoval" },
  { title: t("IT Tools"), href: "https://tools.wowyou.cc" },
]);

const mobileItems = ref([
  { title: t("Simple Card"), to: "/" },
  { title: t("Bg Remove"), to: "/bgremoval" },
  { type: "divider" },
  { title: t("IT Tools"), href: "https://tools.wowyou.cc" },
]);

const isMobile = computed(() => mobile.value);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const theme = ref("light");

const availableLocales = computed(() => {
  return locales.value;
});

function showOfficial() {

}

function updateLocale(event) {
  setLocale(event);
}

const emit = defineEmits(["onClick"]);
function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
  emit("onClick", theme.value);
}
function onReset() {
  dialog.value = false
  localStorage.setItem('userConfigStore', null)
  window.location.reload()
}
function feedback() {
  window.open("https://txc.qq.com/products/662353");
}
</script>
<style>
.custom-tooltip .v-overlay__content {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
