<template>
  <NuxtLayout>
    <v-app id="app">
      <NavBar @onClick="onClick"></NavBar>
      <v-main>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
const theme = ref('dark');

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'dark'; // 默认使用light主题 
})

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
}
</script>