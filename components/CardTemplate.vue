<template>
    <figure>
        <div class="main d-flex flex-column justify-center align-center">
            <div class="d-flex justify-center align-center">
                <div class="content-mode" ref="draggable" :style="styleObject">
                    <div class="card d-flex justify-center align-start pb-2 flex-column">
                        <!-- loading -->
                        <div v-if="isLoading" class="d-flex justify-center align-start py-10" style="width: 100%;">
                            <v-progress-circular indeterminate :size="80" :width="4" color="#fff"></v-progress-circular>
                        </div>
                        <!-- content -->
                        <div v-if="!isLoading">
                            <v-img class="img" :src="base64Image"></v-img>
                            <div class="qrcode-container flex-cloumn mt-3 px-3">
                                <div class="d-flex flex-row  justify-space-between align-center ga-2">
                                    <div class="qrcode" :class="{
                                        'hidden': !userConfig.show.qrcode
                                    }">
                                        <ClientOnly>
                                            <vueQr :text="userConfig.qrData" :size="100" :margin="0"
                                                colorLight="transparent" backgroundColor="transparent"
                                                :colorDark="colorDark">
                                            </vueQr>
                                        </ClientOnly>
                                    </div>
                                    <div :class="{ 'hidden': !userConfig.show.content }">
                                        <div class="editable-element qr-title " data-key="qrCodeTitle"
                                            @paste="getClipboardData">GitHub: Let’s build from here
                                        </div>
                                        <div class="editable-element qr-desc mt-2" data-key="qrCodeDesc">GitHub is
                                            where over 100 million developers shape the future of software,
                                            together. Contribute to the open source community, manage your Git
                                            repositories,
                                            review code like a pro, track bugs and fea
                                        </div>
                                        <div class="d-flex flex-row ga-2 mt-1 align-center" style="opacity: .7;">
                                            <div> <v-img :width="20" cover :src="base64ImageLogo"></v-img></div>
                                            <div>GitHub</div>
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

import axios from 'axios'
import vueQr from "vue-qr/src/packages/vue-qr.vue";

const props = defineProps({
    isMobile: { type: Boolean, default: false },
    draggable: { type: Object },
    url: { type: String, default: "https://labs.wowyou.cc" },
    styleObject: {},
    userConfig: {
        type: Object,
        default: () => ({
            content: `这是简单的文字卡片生成工具，帮你发布社交媒体内容更有特色。
      显示的文字都可以修改，点击二维码可以修改内容
      电脑上鼠标拖动左右边框进行缩放
      在电脑上全选文字后支持下面快捷键
      - Ctrl+B 加粗文本
      - Ctrl+I 斜体文本
      - Ctrl+U 下划线文本`,
            title: `创图卡片`,
            author: "创图卡片 2024-07-15 18:20 广东",
            qrCodeTitle: "创图卡片",
            qrCodeDesc: "扫描二维码",
            qrData: "https://labs.wowyou.cc/",
            show: {
                title: true,
                content: true,
                qrcode: true,
                author: true,
                padding: false,
            },
        }),
    },
});
const emit = defineEmits(["updateConfig", "getClipboardData", "editQrData"]);

// const draggable = ref(null); 
const colorDark = ref("#fff");//#101320 
const base64Image = ref('')
const base64ImageLogo = ref('')
const isLoading = ref(false)


async function fetchImageAsBase64(url, target) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
            target.value = reader.result;
        };
        reader.readAsDataURL(blob);
    } catch (error) {
        console.error('Error fetching and converting image:', error);
    }
}

function getClipboardData(event) {
    emit("getClipboardData", event)
}

onMounted(() => {
    fetchImageAsBase64('https://labs.wowyou.cc/preview.png', base64Image)
    fetchImageAsBase64('https://logo.clearbit.com/github.com', base64ImageLogo);
})

const API_PREFIX_VERCEL = 'https://labs.wowyou.cc/api?url='
const metaData = reactive({
    title: '',
    description: '',
    url: '',
    image: '',
    logo: '',
    author: '',
    publisher: '',
    base64Image: '',
    base64Logo: ''
})

const init = async () => {
    isLoading.value = true

    const { data } = await axios.get(`${API_PREFIX_VERCEL}${props.url}`)

    if (data) {
        let base64Image = ''
        if (data?.image) {
            try {
                base64Image = await fetchImageAsBase64(data.image, base64Image)
            } catch (error) {
                console.log(`Oops, something went wrong: Maybe caused by CORS!!!`)
            }
        }

        metaData.title = data.title
        metaData.description = data.description
        metaData.url = props.url
        metaData.image = data.image
        metaData.logo = data.logo
        metaData.author = data.author
        metaData.publisher = data.publisher
        metaData.base64Image = base64Image
    } else {
        metaData.description =
            'description'
        metaData.image = 'https://labs.wowyou.cc/preview.png'
        metaData.logo = 'https://labs.wowyou.cc/favicon.svg'
        metaData.title = 'title'
        metaData.url = props.url
    }

    isLoading.value = false
}

watch(
    () => props.url,
    async (newVal) => {
        if (newVal !== '') {
            await init()
        }
    },
    { deep: true, immediate: true }
)

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
    opacity: 0.9;
    transition: opacity 0.5s, max-width 0.5s, font-size 0.5s;
    max-height: 2000px;
    overflow: hidden;
}

.qrcode {
    opacity: 0.9;
    transition: opacity 0.5s, max-width 0.5s, font-size 0.5s;
    max-width: 2000px;
}

.qr-title {
    font-size: calc(var(--base-font-size) * 1.25);
    font-weight: 700;
    line-height: 1.4;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.qr-desc {
    font-size: calc(var(--base-font-size) * 0.875);
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
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    color: #000;
    transition: all 500ms ease 0s;
    color: #fff;
}
</style>