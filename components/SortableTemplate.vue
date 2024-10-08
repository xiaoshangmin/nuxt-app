<template>
  <figure>
    <div class="main d-flex flex-column justify-center align-center">
      <div class="container content-mode" ref="template" :style="userConfig.styleObject">

        <v-sheet :elevation="24" rounded="lg" class="section  py-3 px-3 my-1 cursor-pointer">
          <div class="editable-element title" contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'hidden': !userConfig.show.title }" @input="updateConfig" data-key="title"
            @paste="getClipboardData">
            {{ title }}
          </div>
        </v-sheet>

        <v-sheet :elevation="24" rounded="lg" class="section  py-3 px-3 my-1 cursor-pointer">
          <div class="editable-element content" contenteditable="true" autocorrect="off" autocomplete="off"
            :class="{ 'hidden': !userConfig.show.content }" @input="updateConfig" data-key="content"
            @paste="getClipboardData">
            {{ content }}
          </div>
        </v-sheet>

        <v-sheet :elevation="24" rounded="lg" class="section py-3 px-3 my-1 cursor-pointer">
          <div class="editable-element py-2 px-2  my-1 time" :class="{ 'hidden': !userConfig.show.author }"
            contenteditable="true" @input="updateConfig" data-key="author" @paste="getClipboardData">
            {{ author }}
          </div>
        </v-sheet>

        <div class="qrcode-container section cursor-pointer" :class="{ 'hidden': !userConfig.show.qrcode }">
          <div class="qrcode flex-cloumn">
            <div class="d-flex flex-row  justify-space-between align-center">
              <div class="handle" data-swapy-handle>
                <v-sheet :elevation="24" rounded="lg">
                  <div class="px-2 py-2">
                    <div class="editable-element qr-title" contenteditable="true" autocorrect="off" autocomplete="off"
                      @input="updateConfig" data-key="qrCodeTitle" @paste="getClipboardData">
                      {{ qrCodeTitle }}
                    </div>
                    <div class="editable-element qr-desc mt-2" contenteditable="true" @paste="getClipboardData"
                      @input="updateConfig" data-key="qrCodeDesc">
                      {{ qrCodeDesc }}
                    </div>
                  </div>
                </v-sheet>
              </div>
              <ClientOnly>
                <v-sheet :elevation="24" rounded="lg">
                  <div class="px-2 py-2">
                    <vueQr :text="userConfig.qrData" :size="60" :margin="0" colorLight="transparent"
                      backgroundColor="transparent" :colorDark="colorDark" :callback="getQrcode">
                    </vueQr>
                  </div>
                </v-sheet>
              </ClientOnly>
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
  </figure>
</template>

<script setup>
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import Sortable from 'sortablejs'

const { userConfig, updateShareUserConfig } = useSharedConfig();


const isClient = ref(false);
const content = ref('')
const title = ref('')
const author = ref('')
const qrCodeTitle = ref('')
const qrCodeDesc = ref('qrCodeDesc')

onMounted(() => {
  isClient.value = true;
  content.value = userConfig.value.content
  title.value = userConfig.value.title
  author.value = userConfig.value.author
  qrCodeTitle.value = userConfig.value.qrCodeTitle
  qrCodeDesc.value = userConfig.value.qrCodeDesc

  new Sortable(template.value, {
    animation: 150,
    handle: '.section', // 使用 header 作为拖拽把手
    ghostClass: 'ghost',
    onEnd: (evt) => {
      const itemEl = evt.item
      const newIndex = evt.newIndex
      console.log(`Item ${itemEl.dataset.id} moved to index ${newIndex}`)

      // 这里可以添加逻辑来保存新的顺序，例如发送到后端
      const newOrder = Array.from(template.value.children).map(el => el.dataset.id)
      console.log('New order:', newOrder)
    },
  })
});

const props = defineProps({
  isMobile: { type: Boolean, default: false }
});
const emit = defineEmits([]);

const template = ref(null)
const dialog = ref(false);
const colorDark = ref("#fff");//#101320 
const rules = reactive({
  required: (value) => !!value || "请输入二维码内容.",
});

function updateConfig(e) {
  let key = e.target.dataset.key
  let val = e.target.innerText
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
  event.preventDefault(); // 阻止默认粘贴行为 
  // 获取剪贴板中的纯文本内容
  const text = (event.clipboardData || window.clipboardData).getData('text/plain');
  // const text = await navigator.clipboard.readText()
  insertTextAtCursor(text)
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
  /* max-width: 940px; */
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

.qrcode-container {
  max-height: 2000px;
  transition: max-height 0.5s, opacity 0.5s, font-size 0.5s;
}

.qrcode {
  width: 100%;
  opacity: 0.5;
  overflow: hidden;
  /* border-top: 1px solid rgba(169, 167, 167, 0.5); */

}

.qr-title {
  font-size: calc(var(--base-font-size) * 1.2);
  font-weight: 700;
  line-height: 1.4;
  opacity: .6;
}

.qr-desc {
  font-size: calc(var(--base-font-size) * 0.875);
  line-height: 1.4;
  opacity: 0.5;
}

.editable-element.hidden,
.qrcode.hidden,
.qrcode-container.hidden {
  opacity: 0;
  max-height: 0;
  margin: 0;
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
  outline: none;
}

.card {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  color: #000;
  transition: all 500ms ease 0s;
  color: #fff;
}
</style>
