<template>
  <div class="main d-flex flex-column justify-center align-center">
    <div class="d-flex justify-center align-center">
      <div class="content-mode" ref="template" :style="styleObject">
        <div class="card d-flex justify-center align-start pt-8 pb-8 px-6 flex-column"
          :class="{ 'rounded-xl': styleObject.padding != '0px' }">
          <div class="editable-element title " contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'hidden': !userConfig.show.title }" @input="updateConfig" data-key="title"
            @paste="getClipboardData">
            {{ userConfig.title }}
          </div>
          <div class="editable-element content " contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'hidden': !userConfig.show.content }" @input="updateConfig" data-key="content"
            @paste="getClipboardData">
            {{ userConfig.content }}
          </div>
          <div class="editable-element time  d-flex justify-end mt-6" contenteditable="true" :class="{
            'hidden': !userConfig.show.author
          }" @input="updateConfig" data-key="author" @paste="getClipboardData">
            {{ userConfig.author }}
          </div>

          <div class="qrcode flex-cloumn" :class="{
            'hidden': !userConfig.show.qrcode
          }">
            <v-divider class=" mt-4 mb-4" length="100%"></v-divider>
            <div class="d-flex flex-row  justify-space-between align-center">
              <div>
                <div class="editable-element qr-title " contenteditable="true" autocorrect="off" autocomplete="off"
                  @input="updateConfig" data-key="qrCodeTitle" @paste="getClipboardData">
                  {{ userConfig.qrCodeTitle }}
                </div>
                <div class="editable-element qr-desc  mt-2" contenteditable="true" @paste="getClipboardData"
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

const props = defineProps({
  isMobile: { type: Boolean, default: false },
  template: { type: Object },
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
 
const dialog = ref(false);
const colorDark = ref("#fff");//#101320
const qrData = ref("https://labs.wowyou.cc/");
const rules = reactive({
  required: (value) => !!value || "请输入二维码内容.",
});

function updateConfig(e) {
  emit("updateConfig", { key: e.target.dataset.key, text: e.target.innerHTML });
}

function editQrData() {
  dialog.value = false
  emit("editQrData", qrData.value)
}
function getQrcode(data, id) {
  // qrcode.value = data;
}

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
  overflow: hidden;
}


.qrcode {
  width: 100%;
  opacity: 0.5;
  transition: opacity 0.5s, max-height 0.5s, font-size 0.5s;
  max-height: 2000px;
  overflow: hidden;
}

.qr-title {
  font-size: calc(var(--base-font-size) * 1.25);
  font-weight: 700;
  line-height: 1.4;
  opacity: .4;
}

.qr-desc {
  font-size: calc(var(--base-font-size) * 0.875);
  line-height: 1.4;
  opacity: 0.5;
}

.editable-element.hidden,
.qrcode.hidden {
  opacity: 0;
  max-height: 0;
}

.title,
.content {
  width: 100%;
  font-family: inherit;
}

.title {
  font-weight: 700;
  line-height: 1.4;
  font-size: calc(var(--base-font-size) * 1.25);
  margin: .5rem 0;
}

.content {
  line-height: 1.8;
  /* min-height: 2rem; */
  font-size: calc(var(--base-font-size) * 1.1);
  opacity: .8;
}

.time {
  width: 100%;
  height: auto;
  font-size: calc(var(--base-font-size) * 0.875);
  opacity: 0.4;
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
