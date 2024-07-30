<template>
    <div class="main d-flex flex-column justify-center align-center">
        <div class="d-flex justify-center align-center">
            <div class="content-mode" ref="draggable" :style="styleObject">
                <div class="card d-flex justify-center align-start pt-4 pb-4 px-4 flex-column"
                    :class="{ 'rounded-lg': styleObject.padding != '0px' }">
                    <div class="editable-element title" contenteditable="true" autocorrect="off" autocomplete="off"
                        :class="{ 'd-none': !show.title }" @input="updateConfig" data-key="title"
                        @paste="getClipboardData">
                        {{ userConfig.title }}
                    </div>
                    <div class="editable-element content" contenteditable="true" autocorrect="off" autocomplete="off"
                        :class="{ 'd-none': !show.content }" @input="updateConfig" data-key="content"
                        @paste="getClipboardData">
                        {{ userConfig.content }}
                    </div>
                    <div class="editable-element time justify-end mt-6" contenteditable="true"
                        :class="{ 'd-none': !show.author, 'd-flex': show.author }" @input="updateConfig"
                        data-key="author" @paste="getClipboardData">
                        {{ userConfig.author }}
                    </div>
                    <div class="qrcode pt-2 flex-row justify-space-between align-center"
                        :class="{ 'd-none': !show.qrcode, 'd-flex': show.qrcode }">
                        <div>
                            <div class="editable-element" contenteditable="true" autocorrect="off" autocomplete="off"
                                @input="updateConfig" data-key="qrCodeTitle" @paste="getClipboardData">
                                {{ userConfig.qrCodeTitle }}
                            </div>
                            <div class="editable-element desc" contenteditable="true" @paste="getClipboardData"
                                @input="updateConfig" data-key="qrCodeDesc">
                                {{ userConfig.qrCodeDesc }}
                            </div>
                        </div>
                        <div @click="dialog = true">
                            <ClientOnly>
                                <vueQr :text="userConfig.qrData" :size="60" :margin="0" colorLight="transparent"
                                    backgroundColor="transparent" :colorDark="colorDark" :callback="getQrcode">
                                </vueQr>
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mt-5 mb-16 flex-row align-center justify-center ga-4">
            <ClientOnly>
                <v-btn @click="generateImage" class="text-none">
                    {{ $t("Download Image") }}
                </v-btn>
                <v-tooltip text="可直接粘贴在聊天框" v-if="!xs">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" @click="copyImage" class="text-none">
                            {{ $t("Copy Image") }}</v-btn>
                    </template>
                </v-tooltip>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
import vueQr from "vue-qr/src/packages/vue-qr.vue";
const draggable = ref(null);
const colorDark = ref("#101320");
const styleObject = reactive({
    padding: "20px",
    width: "393px",
    fontSize: "1.1rem",
});

const show = reactive({
  title: true,
  content: true,
  qrcode: true,
  author: true,
  padding: false,
});

const userConfig = reactive({
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
})


function updateConfig(e) {
    if ('title' == e.target.dataset.key) {
        userConfigStore.title = e.target.innerHTML;
    }
    if ('content' == e.target.dataset.key) {
        userConfigStore.content = e.target.innerHTML;
    }
    if ('author' == e.target.dataset.key) {
        userConfigStore.author = e.target.innerHTML;
    }
    if ('qrCodeTitle' == e.target.dataset.key) {
        userConfigStore.qrCodeTitle = e.target.innerHTML;
    }
    if ('qrCodeDesc' == e.target.dataset.key) {
        userConfigStore.qrCodeDesc = e.target.innerHTML;
    }
}
function editQrData() {
    if (this.qrDataCopy) {
        this.qrData = this.qrDataCopy;
        this.dialog = false;
    }
}
function getQrcode(data, id) {
    qrcode.value = data;
}
function getClipboardData(event) {
    event.preventDefault(); // 阻止默认粘贴行为

    // 获取剪贴板中的纯文本内容
    const text = (event.clipboardData || window.clipboardData).getData('text/plain');

    // 获取当前选中的范围
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);

    // 创建一个文本节点并插入到当前范围
    const textNode = document.createTextNode(text);
    range.deleteContents(); // 删除选中内容
    range.insertNode(textNode);

    // 调整光标位置
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);
}
</script>