<template>
  <div class="container d-flex flex-column justify-center align-center ga-4 mt-4">
    <!-- 主体部分 -->
    <div class="main d-flex flex-column justify-center align-center">
      <div class="d-flex justify-center align-center">
        <div class="content-mode" ref="draggable" :style="styleObject">
          <div class="card d-flex justify-center align-start pt-4 pb-4 px-4 flex-column"
            :class="{ 'rounded-lg': styleObject.padding != '0px' }">
            <div class="editable-element title" contenteditable="true" autocorrect="off" autocomplete="off"
              :class="{ 'd-none': !show.title }" @input="updateConfig" data-key="title" @paste="getClipboardData">
              {{ userConfig.title }}
            </div>
            <div class="editable-element content" contenteditable="true" autocorrect="off" autocomplete="off"
              :class="{ 'd-none': !show.content }" @input="updateConfig" data-key="content" @paste="getClipboardData">
              {{ userConfig.content }}
            </div>
            <div class="editable-element time justify-end mt-6" contenteditable="true"
              :class="{ 'd-none': !show.author, 'd-flex': show.author }" @input="updateConfig" data-key="author"
              @paste="getClipboardData">
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
        <v-btn @click="generateImage" class="text-none">
          {{ $t("Download Image") }}
        </v-btn>
        <v-tooltip text="可直接粘贴在聊天框" v-if="!xs">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" @click="copyImage" class="text-none">
              {{ $t("Copy Image") }}</v-btn>
          </template>
        </v-tooltip>
      </div>
    </div>
    <div class="operation">
      <!-- <ClientOnly> -->
      <CardOperation2 :themeList="themeList" @changeColor="changeColor" @onSwitchChange="onSwitchChange"
        @onSliderChange="onSliderChange" @decrement="decrement" @increment="increment"
        @onBtnToggleChange="onBtnToggleChange">
      </CardOperation2>
      <!-- </ClientOnly> -->
    </div>
    <!-- qrcode edit -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card hover title="编辑二维码">
        <v-card-text>
          <v-text-field v-model="qrDataCopy" class="mb-2" :rules="[rules.required]" label="可输入文本或链接"
            clearable></v-text-field>
          <v-btn color="success" size="large" type="submit" variant="elevated" block @click="editQrData">
            更新二维码
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- 消息条 -->
    <v-snackbar v-model="snackbar" elevation="24" timeout="3000" color="red">
      复制成功
    </v-snackbar>
  </div>
</template>

<script setup>
import interact from "interactjs";
// import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { useDisplay } from "vuetify";
import vueQr from "vue-qr/src/packages/vue-qr.vue";

const { width, xs } = useDisplay();

const snackbar = ref(false);
const draggable = ref(null);
const dialog = ref(false);
const rules = reactive({
  required: (value) => !!value || "请输入二维码内容.",
});
const show = reactive({
  title: true,
  content: true,
  qrcode: true,
  author: true,
  padding: false,
});
const colorDark = ref("#101320");
const showWidth = ref("0px");
const qrcode = ref("");
const themeList = ref([
  {
    bgcolor:
      "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));",
    colorA: "rgb(5, 174, 157)",
    colorB: "rgb(17, 26, 35)",
    angle: "150deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));",
    colorA: "rgb(94, 106, 137)",
    colorB: " rgb(15, 19, 40)",
    angle: "150deg",
  },
  //蓝粉
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));",
    colorA: "rgb(87, 151, 249)",
    colorB: " rgb(108, 213, 196)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));",
    colorA: "rgb(64, 127, 231)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));",
    colorA: "rgb(77, 3, 222)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));",
    colorA: "rgb(204, 81, 36)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));",
    colorA: "rgb(52, 182, 150)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));",
    colorA: "rgb(244, 205, 82)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));",
    colorA: "rgb(86, 93, 204)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));",
    colorA: "rgb(33, 127, 193)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));",
    colorA: "rgb(53, 99, 250)",
    colorB: " rgb(253, 202, 220)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));",
    colorA: "rgb(44, 68, 89)",
    colorB: " rgb(255, 203, 203)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));",
    colorA: "rgb(137, 176, 217)",
    colorB: " rgb(255, 238, 203)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));",
    colorA: "rgb(14, 87, 238)",
    colorB: " rgb(230, 255, 203)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));",
    colorA: "rgb(186, 125, 239)",
    colorB: " rgb(255, 203, 253)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));",
    colorA: "rgb(67, 197, 167)",
    colorB: " rgb(203, 238, 255)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));",
    colorA: "rgb(240, 111, 105)",
    colorB: " rgb(205, 203, 255)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));",
    colorA: "rgb(44, 176, 206)",
    colorB: " rgb(205, 203, 255)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));",
    colorA: "rgb(176, 189, 191)",
    colorB: " rgb(205, 203, 255)",
    angle: "45deg",
  },
  // 红粉
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));",
    colorA: "rgb(149, 18, 190)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));",
    colorA: "rgb(180, 20, 51)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));",
    colorA: "rgb(245, 148, 126)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));",
    colorA: "rgb(255, 242, 201)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));",
    colorA: "rgb(139, 177, 196)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));",
    colorA: "rgb(136, 14, 133)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));",
    colorA: "rgb(69, 165, 215)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));",
    colorA: "rgb(191, 69, 133)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));",
    colorA: "rgb(182, 195, 141)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));",
    colorA: "rgb(154, 151, 236)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));",
    colorA: "rgb(84, 102, 105)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));",
    colorA: "rgb(247, 174, 171)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));",
    colorA: "rgb(254, 252, 59)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));",
    colorA: "rgb(167, 254, 204)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));",
    colorA: "rgb(241, 255, 207)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
  {
    bgcolor:
      "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));",
    colorA: "rgb(186, 167, 228)",
    colorB: " rgb(245, 159, 156)",
    angle: "45deg",
  },
]);
const styleObject = reactive({
  padding: "20px",
  width: "393px",
  fontSize: "1.1rem",
});
const qrDataCopy = ref("https://labs.wowyou.cc/");

const content = ref("")

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


const userConfigStore = reactive({
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
});

useSeoMeta({
  title: "创图卡片 - 体验全新的文字分享 | labs.wowyou.cc",
  ogTitle: "创图卡片 - 优雅好看的文字卡片工具",
  keywords: "创图卡片，卡片，文生图，文字卡片",
  ogType: "website",
  description: "创图卡片让你体验全新的文字分享，让你的文字更具特色",
  ogDescription: "创图卡片让你体验全新的文字分享，让你的文字更具特色",
  twitterCard: "summary_large_image",
  ogUrl: "https://labs.wowyou.cc",
  ogLocale: "zh",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

});

onMounted(() => {
  if (xs.value) {
    styleObject.width = `${width.value}px`;
  } else {
    initInteract();
  }

  loadUserConfig();

});
function initInteract() {
  interact(draggable.value).resizable({
    edges: { top: false, left: true, bottom: false, right: true },
    listeners: {
      start(event) { },
      move(event) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          // height: `${event.rect.height}px`,
          // transform: `translate(${x}px, ${y}px)`
        });
        Object.assign(event.target.dataset, { x, y });
      },
    },
  });
}
function updateConfig(e) {
  doUpdateUserConfig(e.target.dataset.key, e.target.innerHTML)
}
function doUpdateUserConfig(key, text) {
  if ('title' == key) {
    userConfigStore.title = text;
  }
  if ('content' == key) {
    userConfigStore.content = text;
  }
  if ('author' == key) {
    userConfigStore.author = text;
  }
  if ('qrCodeTitle' == key) {
    userConfigStore.qrCodeTitle = text;
  }
  if ('qrCodeDesc' == key) {
    userConfigStore.qrCodeDesc = text;
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
function changeColor(theme) {
  draggable.value.style.setProperty("--colorA", theme.colorA);
  draggable.value.style.setProperty("--colorB", theme.colorB);
  draggable.value.style.setProperty("--angle", theme.angle);
}
function onSwitchChange(e) {
  //无边框
  if (e.val.padding == true) {
    styleObject.padding = "0px";
  } else if (styleObject.padding == "0px") {
    styleObject.padding = "20px";
  }
  // show = e.val
  Object.assign(show, e.val);
}
function onSliderChange(e) {
  if (e.action == "padding") {
    styleObject.padding = `${e.val}px`;
  }
  if (e.action == "width") {
    styleObject.width = `${e.val}px`;
  }
  if (e.action == "fontsize") {
    styleObject.fontSize = `${e.val}rem`;
  }
}
function onBtnToggleChange(e) {
  if (e.action == "padding") {
    styleObject.padding = `${e.val}px`;
  }
  if (e.action == "width") {
    styleObject.width = `${e.val}px`;
  }
  if (e.action == "fontsize") {
    styleObject.fontSize = `${e.val}rem`;
  }
}
function decrement(e) {
  if ("padding" == e.action) {
    styleObject.padding = `${e.val}px`;
  } else if ("width" == e.action) {
    styleObject.width = `${e.val}px`;
  } else {
    styleObject.fontSize = `${e.val}rem`;
  }
}
function increment(e) {
  if ("padding" == e.action) {
    styleObject.padding = `${e.val}px`;
  } else if ("width" == e.action) {
    styleObject.width = `${e.val}px`;
  } else {
    styleObject.fontSize = `${e.val}rem`;
  }
}
function generateImage() {
  html2canvas(draggable.value).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const blob = dataURItoBlob(imgData);

    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "创图卡片-screenshot.png"; // 设置下载文件名

    // 触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // document.fonts.ready.then(() => {
  //     domtoimage.toJpeg(draggable.value).then(dataUrl => {
  //         const link = document.createElement('a');
  //         link.download = 'simple.jpeg';
  //         link.href = dataUrl;
  //         document.body.appendChild(link); // 需要先插入文档流才能触发点击事件
  //         link.click();
  //         document.body.removeChild(link);
  //     }).catch(error => {
  //         console.error('生成图片时出错:', error);
  //     });
  // });
}
// 将 base64 转换为 Blob 对象的函数
const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};
function copyImage() {
  html2canvas(draggable.value).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    copyBase64Img(imgData);
  });
  //   document.fonts.ready.then(() => {
  //     domtoimage
  //       .toPng(draggable.value)
  //       .then((dataUrl) => {
  //         copyBase64Img(dataUrl);
  //       })
  //       .catch((error) => {
  //         console.error("生成图片时出错:", error);
  //       });
  //   });
}
/*复制Base64图片*/
function copyBase64Img(base64Data) {
  // location.origin.includes('https://') || showToast('图片复制功能需要在https://协议下使用');
  //将base64转为Blob类型
  base64Data = base64Data.split(";base64,");
  let type = base64Data[0].split("data:")[1];
  base64Data = base64Data[1];
  let bytes = atob(base64Data),
    ab = new ArrayBuffer(bytes.length),
    ua = new Uint8Array(ab);
  [...Array(bytes.length)].forEach((v, i) => (ua[i] = bytes.charCodeAt(i)));
  let blob = new Blob([ab], { type });
  // “navigator.clipboard.write”该方法的确只能在本地localhost 、127.0.0.1 或者 https 协议下使用，否则navigator没有clipboard方法。
  navigator.clipboard.write([new ClipboardItem({ [type]: blob })]);
  // showToast('已复制到你的剪贴板');
  snackbar.value = true;
}
function getClipboardData(event) {
  event.preventDefault(); // 阻止默认粘贴行为

  // 获取剪贴板中的纯文本内容
  const text = (event.clipboardData || window.clipboardData).getData('text/plain');
  doUpdateUserConfig(event.target.dataset.key, text)
  // 获取当前选中的范围
  // const selection = window.getSelection();
  // if (!selection.rangeCount) return;
  // const range = selection.getRangeAt(0);

  // // 创建一个文本节点并插入到当前范围
  // const textNode = document.createTextNode(text);
  // range.deleteContents(); // 删除选中内容
  // range.insertNode(textNode);

  // // 调整光标位置
  // range.setStartAfter(textNode);
  // range.setEndAfter(textNode);
  // selection.removeAllRanges();
  // selection.addRange(range);
}


// 监视状态变化，并将其保存到 localStorage
//Object.assign(userConfig, userConfigStore)
watch(
  userConfigStore,
  (newState) => {
    localStorage.setItem("userConfigStore", JSON.stringify(newState));
  },
  { deep: true }
);

const loadUserConfig = () => {
  const savedUserConfig = localStorage.getItem("userConfigStore");
  if (savedUserConfig) {
    const config = JSON.parse(savedUserConfig);
    Object.assign(userConfig, config);
  }
};
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

.container {
  font-family: "Roboto", sans-serif;
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
  touch-action: none;
  /* 防止触摸屏设备上默认行为干扰 */
  box-sizing: border-box;
}

.title,
.content {
  width: 100%;
  height: auto;
  font-family: inherit;
}

.title {
  font-weight: 700;
  line-height: 2rem;
}

.content {
  line-height: 1.8;
  min-height: 2rem;
}

.time {
  width: 100%;
  height: auto;
  font-size: 0.875rem;
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
  font-size: 1.25rem;
}

.desc {
  font-size: 0.875rem;
}

.operation {
  position: fixed;
  bottom: 20px;
  overflow: hidden;
}
</style>
