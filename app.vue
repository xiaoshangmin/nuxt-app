<template>
  <NuxtLayout>
    <v-app id="app">
      <NavBar @onClick="onClick"></NavBar>
      <v-main>
        <NuxtLoadingIndicator />
        <NuxtPage />
        <v-footer class="text-center d-flex flex-column mt-16">
          <v-row justify="center" no-gutters>
            <v-btn variant="text">
              <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
              <v-tooltip
                activator="parent"
                location="top"
                class="custom-tooltip"
              >
                <v-img
                  :width="200"
                  aspect-ratio="1"
                  src="~/assets/qrcode_official_account.jpg"
                  alt="公众号二维码"
                ></v-img
              ></v-tooltip>
            </v-btn>
            <v-btn variant="text">
              <v-icon icon="mdi-wechat" size="x-large"></v-icon>
              <v-tooltip
                activator="parent"
                location="top"
                class="custom-tooltip"
              >
                <v-img
                  :width="200"
                  aspect-ratio="1"
                  src="~/assets/qrcode_mini_program.jpg"
                  alt="小程序二维码"
                ></v-img
              ></v-tooltip>
            </v-btn>
          </v-row>

          <div class="mt-4 mb-8">有问题或者建议可关注公众号给我反馈 感谢！</div>
          <div class="mt-4 mb-8"><v-btn href="https://wowyou.cc/"  target="_blank" class="text-none" tile="Zero Project"> Zero Project</v-btn></div>
        </v-footer>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

onMounted(() => {
  theme.global.name.value =  localStorage.getItem("theme") || "dark";
});

function onClick() {
  theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.global.name.value);
}
</script>
