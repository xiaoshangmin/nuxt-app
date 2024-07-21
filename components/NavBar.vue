<template>
    <v-app-bar class="px-3" density="compact" flat>
        <v-spacer></v-spacer>
        <NuxtLink to="/">
            <v-btn text class="text-none">{{ $t("Simple Card") }}</v-btn>
        </NuxtLink>
        <NuxtLink to="/bgremoval">
            <v-btn text class="text-none">移除背景图片</v-btn>
        </NuxtLink>
        <NuxtLink to="/about">
            <v-btn text class="text-none">{{ $t("About") }}</v-btn>
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-translate " v-bind="props">
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="loc in availableLocales" :key="loc.code" @click="updateLocale(loc.code)">
                    <v-list-item-title>{{ loc.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick"></v-btn>
    </v-app-bar>
</template>
<script setup>
const theme = ref('light'); 

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return (locales.value)
})

function updateLocale(event) {
    setLocale(event)
    // window.location.reload()
} 

const emit = defineEmits(['onClick']);
function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    emit('onClick', theme.value);
}
</script>