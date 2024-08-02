<template>
  <div class="main d-flex flex-column justify-center align-center">
    <div class="d-flex justify-center align-center">
      <div class="content-mode" ref="draggable" :style="styleObject">
        <div class="card d-flex justify-center align-start pt-4 pb-4 px-4 flex-column"
          :class="{ 'rounded-xl': styleObject.padding != '0px' }">
          <div class="editable-element title" contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'd-none': !userConfig.show.title }" @input="updateConfig" data-key="title"
            @paste="getClipboardData">
            {{ userConfig.title }}
          </div>
          <div class="editable-element content" contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'd-none': !userConfig.show.content }" @input="updateConfig" data-key="content"
            @paste="getClipboardData">
            {{ userConfig.content }}
          </div>
          <div class="editable-element time justify-end mt-6" contenteditable="true" :class="{
            'd-none': !userConfig.show.author,
            'd-flex': userConfig.show.author,
          }" @input="updateConfig" data-key="author" @paste="getClipboardData">
            {{ userConfig.author }}
          </div>
          <div class="qrcode pt-2 flex-row justify-space-between align-center" :class="{
            'd-none': !userConfig.show.qrcode,
            'd-flex': userConfig.show.qrcode,
          }">
            <div>
              <div class="editable-element qr-title" contenteditable="true" autocorrect="off" autocomplete="off"
                @input="updateConfig" data-key="qrCodeTitle" @paste="getClipboardData">
                {{ userConfig.qrCodeTitle }}
              </div>
              <div class="editable-element qr-desc mt-2" contenteditable="true" @paste="getClipboardData"
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
      <v-btn @click="generateImage" class="text-none">
        {{ $t("Download Image") }}
      </v-btn>
      <v-tooltip text="可直接粘贴在聊天框" v-if="!isMobile">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="copyImage" class="text-none">
            {{ $t("Copy Image") }}</v-btn>
        </template>
      </v-tooltip>
    </div>
    <!-- qrcode edit -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card hover title="编辑二维码">
        <v-card-text>
          <v-text-field v-model="qrData" class="mb-2" :rules="[rules.required]" label="可输入文本或链接"
            clearable></v-text-field>
          <v-btn color="success" size="large" type="submit" variant="elevated" block @click="editQrData">
            更新二维码
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>

import vueQr from "vue-qr/src/packages/vue-qr.vue";
import { useDisplay } from "vuetify";

const props = defineProps({
  isMobile: { type: Boolean, default: false },
  draggable: { type: Object },
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
const emit = defineEmits(["updateConfig", "generateImage", "copyImage", "getClipboardData","editQrData"]);

// const draggable = ref(null);
const dialog = ref(false);
const colorDark = ref("#101320");
const qrData = ref("https://labs.wowyou.cc/");
const rules = reactive({
  required: (value) => !!value || "请输入二维码内容.",
});
const { width, xs } = useDisplay();


function updateConfig(e) {
  // doUpdateUserConfig(e.target.dataset.key, e.target.innerHTML)
  emit("updateConfig", { key: e.target.dataset.key, text: e.target.innerHTML });
}

function doUpdateUserConfig(key, text) {
  if ("title" == key) {
    userConfigStore.title = text;
  }
  if ("content" == key) {
    userConfigStore.content = text;
  }
  if ("author" == key) {
    userConfigStore.author = text;
  }
  if ("qrCodeTitle" == key) {
    userConfigStore.qrCodeTitle = text;
  }
  if ("qrCodeDesc" == key) {
    userConfigStore.qrCodeDesc = text;
  }
}

function editQrData() {
  dialog.value = false
  emit("editQrData",qrData.value)
  // if (qrDataCopy.value) {
  //   qrData.value = this.qrDataCopy;
  //   dialog.value = false;
  // }
}
function getQrcode(data, id) {
  // qrcode.value = data;
}

function getClipboardData(event) {
  emit("getClipboardData", event)
  // event.preventDefault(); // 阻止默认粘贴行为

  // // 获取剪贴板中的纯文本内容
  // const text = (event.clipboardData || window.clipboardData).getData(
  //   "text/plain"
  // );
  // doUpdateUserConfig(event.target.dataset.key, text);
}

function generateImage() {
  emit("generateImage")
}
function copyImage() {
  emit("copyImage")
} 
</script>

<style scoped>
@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --colorA {
  syntax: "<color>";
  inherits: false;
  initial-value: #5797f9;
}

@property --colorB {
  syntax: "<color>";
  inherits: false;
  initial-value: #6cd5c4;
}


.main {
  position: relative;
  font-family: inherit;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30vh;

}

.content-mode {
  width: 100%;
  background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
  transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s;
  min-width: 393px;
  max-width: 940px;
  font-family: inherit;
  /* 防止触摸屏设备上默认行为干扰 */
  box-sizing: border-box;
  --base-font-size: 1rem;
  /* 基准字体大小 */
}

.title,
.content {
  width: 100%;
  height: auto;
  font-family: inherit;
}

.title {
  font-weight: 700;
  line-height: 1.4;
  font-size: calc(var(--base-font-size) * 0.875);
}

.content {
  line-height: 1.8;
  min-height: 2rem;
  font-size: calc(var(--base-font-size) * 0.77);
}

.time {
  width: 100%;
  height: auto;
  font-size: calc(var(--base-font-size) * 0.62);
  opacity: 0.4;
}

.card {
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.5);
  box-shadow: 0 10px 40px hsla(0, 0%, 39%, 0.4);
  color: #000;
  transition: all 500ms ease 0s;
}

.editable-element {
  display: block;
  white-space: pre-wrap;
  word-break: break-word;
  outline: none;
  width: 100%;
}

.qrcode {
  width: 100%;
  opacity: 0.5;
}

.qr-title {
  font-size: calc(var(--base-font-size) * 0.875);
  font-weight: 700;
  line-height: 1.4;
  opacity: 0.5;
}

.qr-desc {
  font-size: calc(var(--base-font-size) * 0.62);
  line-height: 1.4;
  opacity: 0.5;
}
</style>
