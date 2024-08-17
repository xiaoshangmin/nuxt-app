<template>
    <figure>
        <div class="main d-flex flex-column justify-center align-center">
            <div class="d-flex justify-center align-center">
                <div class="content-mode" ref="template" :style="userConfig.styleObject">

                    <div class="card d-flex justify-center align-start pb-2 flex-column">
                        <!-- loading -->
                        <div v-if="isLoading" class="d-flex justify-center align-start py-10" style="width: 100%;">
                            <v-progress-circular indeterminate :size="80" :width="4" color="#fff"></v-progress-circular>
                        </div>
                        <!-- content -->
                        <div v-if="!isLoading">
                            <v-img class="img" :src="userConfig.metaData.base64Image"></v-img>
                            <div class="qrcode-container flex-cloumn my-2 px-2">
                                <div class="d-flex flex-row  justify-space-between align-center ga-2">
                                    <div class="qrcode d-flex" :class="{
                                        'hidden': isClient && !userConfig.show.qrcode
                                    }" v-if="userConfig.metaData.url">
                                        <ClientOnly>
                                            <vueQr :text="userConfig.metaData.url" :size="100" :margin="0"
                                                colorLight="transparent" backgroundColor="transparent"
                                                :colorDark="colorDark">
                                            </vueQr>
                                        </ClientOnly>
                                    </div>
                                    <div :class="{ 'hidden': isClient && !userConfig.show.content }">
                                        <div class="editable-element qr-title " data-key="qrCodeTitle"
                                            @paste="getClipboardData">{{ userConfig.metaData.title }}
                                        </div>
                                        <div class="editable-element qr-desc mt-1" data-key="qrCodeDesc">
                                            {{ userConfig.metaData.description }}</div>
                                        <div class="d-flex flex-row ga-2 mt-1 align-center" style="opacity: .7;">
                                            <div> <v-img :width="20" cover
                                                    :src="userConfig.metaData.base64Logo"></v-img>
                                            </div>
                                            <div>{{ userConfig.metaData.publisher }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </figure>
</template>

<script setup>

import vueQr from "vue-qr/src/packages/vue-qr.vue";

const { userConfig, updateShareUserConfig } = useSharedConfig();

const isClient = ref(false);
onMounted(() => {
    isClient.value = true;
});

const props = defineProps({
    isMobile: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    template: { type: Object },
    url: { type: String, default: "https://labs.wowyou.cc" },
});
const emit = defineEmits(["getClipboardData"]);

const colorDark = ref("#fff");

function getClipboardData(event) {
    emit("getClipboardData", event)
}

</script>

<style scoped>
@property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 145deg;
}

@property --colorA {
    syntax: "<color>";
    inherits: false;
    initial-value: rgb(5, 174, 157);
}

@property --colorB {
    syntax: "<color>";
    inherits: false;
    initial-value: rgb(17, 26, 35);
}


.main {
    position: relative;
    font-family: inherit;
    margin-right: auto;
    margin-left: auto;
}

.content-mode {
    width: 100%;
    background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
    transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s, opacity .5s;
    min-width: 393px;
    max-width: 940px;
    font-family: inherit;
    box-sizing: border-box;
    --base-font-size: 1.1rem;
}

.editable-element {
    display: block;
    white-space: pre-wrap;
    word-break: break-word;
    outline: none;
    width: 100%;
    transition: opacity 0.5s, max-height 0.5s, font-size 0.5s;
    max-height: 2000px;
    max-width: 2000px;
    overflow: hidden;
}

.img {
    width: 100%;
}

.qrcode-container {
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s, max-width 0.5s, font-size 0.5s;
    max-height: 2000px;
    overflow: hidden;
}

.qrcode {
    opacity: 0.8;
    transition: opacity 0.5s, max-width 0.5s, font-size 0.5s;
    max-width: 2000px;
}

.qr-title {
    font-size: calc(var(--base-font-size) * 1.1);
    font-weight: 700;
    line-height: 1.4;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.qr-desc {
    font-size: calc(var(--base-font-size) * 0.8);
    line-height: 1.4;
    opacity: 0.6;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.hidden {
    opacity: 0;
    max-width: 0;
}

.card {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 12px 17px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 22px 4px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
    box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 12px 17px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 22px 4px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
    color: #000;
    transition: all 500ms ease 0s;
    color: #fff;
}
</style>