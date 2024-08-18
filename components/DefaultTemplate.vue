<template>
  <figure>
    <div class="main d-flex flex-column justify-center align-center" v-if="isClient">
      <div class="d-flex justify-center align-center">
        <div class="content-mode" ref="template" :style="userConfig.styleObject">
          <div class="card d-flex justify-center align-start pt-8 pb-8 px-6 flex-column"
            :class="{ 'rounded-xl': userConfig.styleObject.padding != '0px' }">
            <div class="editable-element title" contenteditable="true" autocorrect="off" autocomplete="off"
              :class="{ 'hidden': !userConfig.show.title }" @input="updateConfig" data-key="title"
              @paste="getClipboardData">
              {{ title }}
            </div>
            <div class="editable-element content" contenteditable="true" autocorrect="off" autocomplete="off"
              :class="{ 'hidden': !userConfig.show.content }" @input="updateConfig" data-key="content"
              @paste="getClipboardData">
              {{ content }}
            </div>
            <div class="editable-element" :class="{ 'hidden': !userConfig.show.author }">
              <div class="time d-flex justify-end mt-6" contenteditable="true" @input="updateConfig" data-key="author"
                @paste="getClipboardData">
                {{ author }}
              </div>
            </div>

            <div class="qrcode flex-cloumn" :class="{ 'hidden': !userConfig.show.qrcode }">
              <v-divider class=" mt-4 mb-4" length="100%"></v-divider>
              <div class="d-flex flex-row  justify-space-between align-center">
                <div>
                  <div class="editable-element qr-title" contenteditable="true" autocorrect="off" autocomplete="off"
                    @input="updateConfig" data-key="qrCodeTitle" @paste="getClipboardData">
                    {{ qrCodeTitle }}
                  </div>
                  <div class="editable-element qr-desc mt-2" contenteditable="true" @paste="getClipboardData"
                    @input="updateConfig" data-key="qrCodeDesc">
                    {{ qrCodeDesc }}
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
            <v-text-field v-model="userConfig.qrData" class="mb-2" :rules="[rules.required]" label="可输入文本或链接"
              clearable></v-text-field>
            <v-btn color="success" size="large" type="submit" variant="elevated" block @click="editQrData">
              更新二维码
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </figure>
</template>

<script setup>

import vueQr from "vue-qr/src/packages/vue-qr.vue";

const { userConfig, updateShareUserConfig } = useSharedConfig();

const isClient = ref(false);
const content = ref('')
const title = ref('')
const author= ref('')
const qrCodeTitle = ref('')
const qrCodeDesc = ref('qrCodeDesc')
onMounted(async () => {
  isClient.value = true;
  content.value = userConfig.value.content
  title.value = userConfig.value.title
  author.value = userConfig.value.author
  qrCodeTitle.value = userConfig.value.qrCodeTitle
  qrCodeDesc.value = userConfig.value.qrCodeDesc
});

const props = defineProps({
  isMobile: { type: Boolean, default: false },
  template: { type: Object }
});
const emit = defineEmits(["getClipboardData"]);

const dialog = ref(false);
const colorDark = ref("#fff");//#101320 
const rules = reactive({
  required: (value) => !!value || "请输入二维码内容.",
});

function updateConfig(e) {
  let key = e.target.dataset.key
  let val = e.target.innerHTML
  let config = { [key]: val }
  updateShareUserConfig(config)
}

function editQrData() {
  dialog.value = false
  let config = { qrData: userConfig.value.qrData }
  updateShareUserConfig(config)
}
function getQrcode(data, id) {
  // qrcode.value = data;
}

async function getClipboardData(event) {
  // emit("getClipboardData", event)
  event.preventDefault(); // 阻止默认粘贴行为

  // 获取剪贴板中的纯文本内容
  const text = (event.clipboardData || window.clipboardData).getData('text/plain');
  // const text = await navigator.clipboard.readText()
  insertTextAtCursor(text)
  return

  let key = event.target.dataset.key
  if('content'==key){
    content.value = text
    updateShareUserConfig({content:text})
  }
  if('title'==key){
    title.value = text
    updateShareUserConfig({title:text})
  }
  if('author'==key){
    author.value = text
    updateShareUserConfig({author:text})
  }
  if('qrCodeTitle'==key){
    qrCodeTitle.value = text
    updateShareUserConfig({qrCodeTitle:text})
  }
  if('qrCodeDesc'==key){
    qrCodeDesc.value = text
    updateShareUserConfig({qrCodeDesc:text})
  }
}
const insertTextAtCursor = (text) => {
  const selection = window.getSelection()
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    range.deleteContents()
    const textNode = document.createTextNode(text)
    range.insertNode(textNode)
    range.setStartAfter(textNode)
    range.setEndAfter(textNode)
    selection.removeAllRanges()
    selection.addRange(range)
  }
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
  font-size: calc(var(--base-font-size) * 1.3);
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
