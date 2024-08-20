<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="toggleDrawer" v-if="isMobile" />
    <v-btn
      v-if="!isMobile"
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      :href="item.href"
      class="text-none"
    >
      {{ item.title }}
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="!isMobile" class="d-flex justify-center align-center">
      <v-btn variant="text">
        <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
        <v-tooltip activator="parent" location="bottom" class="custom-tooltip">
          <v-img
            :width="150"
            aspect-ratio="1"
            src="~/assets/qccode_official_account.jpg"
          ></v-img
        ></v-tooltip>
      </v-btn>
      <v-btn variant="text">
        <v-icon icon="mdi-wechat" size="x-large"></v-icon>
        <v-tooltip activator="parent" location="bottom" class="custom-tooltip">
          <v-img
            :width="150"
            aspect-ratio="1"
            src="~/assets/qrcode_mini_program.jpg"
          ></v-img
        ></v-tooltip>
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
          <v-list-item
            v-for="loc in availableLocales"
            :key="loc.code"
            @click="updateLocale(loc.code)"
          >
            <v-list-item-title>{{ loc.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        slim
        @click="onClick"
      ></v-btn>
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
      <v-list-item
        v-for="item in mobileItems"
        :key="item.title"
        :to="item.to"
        :href="item.href"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-dialog v-model="dialog" max-width="400" persistent>
    <v-card
      prepend-icon="mdi-alert"
      text="确定要重置目前所有文本内容及配置并刷新页面吗？"
      title="重置所有内容"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false"> 取消 </v-btn>

        <v-btn @click="onReset"> 重置 </v-btn>
      </template>
    </v-card>
  </v-dialog>
  <v-dialog v-model="dialogHelp" max-width="400">
    <v-card
      prepend-icon="mdi-alert"
      text="确定要重置目前所有文本内容及配置并刷新页面吗？"
      title="重置所有内容"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false"> 取消 </v-btn>

        <v-btn @click="onReset"> 重置 </v-btn>
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
    localStorage.setItem('userConfigStore',null)
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
