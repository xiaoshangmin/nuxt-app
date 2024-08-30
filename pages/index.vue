<template>
  <!-- pc -->
  <v-container v-if="!isMobile" class="fill-height">
    <v-row style="flex-wrap: nowrap;">
      <v-col cols="3" style="min-width: 400px;max-width: 500px;">
        <v-sheet rounded="lg" min-height="268">
          <PcOperation @changeColor="changeColor" @onSliderChange="onSliderChange" @changePicScale="changePicScale"
            @decrement="decrement" @increment="increment" @onUrlChange="onUrlChange">
          </PcOperation>
        </v-sheet>
      </v-col>
      <v-col style="min-width: 500px;">
        <!-- 主体部分 -->
        <div id="temp-1" v-show="'temp-1' == userConfig.tempId">
          <DefaultTemplate ref="temp1" :isMobile="isMobile">
          </DefaultTemplate>
        </div>
        <div id="temp-2" v-show="'temp-2' == userConfig.tempId">
          <CodeTemplate ref="temp2" @getClipboardData="getClipboardData" />
        </div>
        <div id="temp-3" v-show="'temp-3' == userConfig.tempId">
          <CardTemplate ref="temp3" :isLoading="isLoading">
          </CardTemplate>
        </div>
        <div id="temp-4" v-show="'temp-4' == userConfig.tempId">
          <ImageTemplate ref="temp4"></ImageTemplate>
        </div>

        <div class="d-flex mt-5 flex-row align-center justify-center ga-4">
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
      </v-col>
    </v-row>
  </v-container>

  <!-- mobile -->
  <div v-else class="container d-flex flex-column justify-center align-center mb-4 pb-2">
    <!-- 主体部分 -->
    <div id="temp-1" v-show="'temp-1' == userConfig.tempId">
      <DefaultTemplate ref="temp1" :isMobile="isMobile">
      </DefaultTemplate>
    </div>
    <div id="temp-2" v-show="'temp-2' == userConfig.tempId">
      <CodeTemplate ref="temp2" @getClipboardData="getClipboardData" />
    </div>
    <div id="temp-3" v-show="'temp-3' == userConfig.tempId">
      <CardTemplate ref="temp3" :isLoading="isLoading">
      </CardTemplate>
    </div>

    <div class="d-flex mt-5 flex-row align-center justify-center ga-4">
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
    <!-- 底部弹出区域 -->
    <v-bottom-sheet v-model="sheet" inset :opacity="0.2">
      <v-card>
        <!-- <v-card-text> -->
        <MobileOperation @changeColor="changeColor" @onSliderChange="onSliderChange" @decrement="decrement"
          @increment="increment" @onUrlChange="onUrlChange">
        </MobileOperation>
        <!-- </v-card-text> -->
      </v-card>
    </v-bottom-sheet>
    <!-- 消息条 -->
    <v-snackbar v-model="snackbar" elevation="24" timeout="3000" color="red">
      复制成功
    </v-snackbar>
    <!-- 浮动按钮 -->
    <v-fab icon="mdi-pencil" @click="sheet = true" location="bottom end" app color="primary"
      style="z-index: 1006;"></v-fab>
  </div>
</template>

<script setup>
import axios from 'axios'
import interact from "interactjs";
import html2canvas from "html2canvas";
import { getBase64Image } from '@/utils'
import { useDisplay } from "vuetify";

const { userConfig, initUserConfig, updateShareUserConfig } = useSharedConfig();
const { width, mobile } = useDisplay();

const isMobile = ref(false);
const snackbar = ref(false);
const temp1 = ref(null);
const temp2 = ref(null);
const temp3 = ref(null);
const temp4 = ref(null);
const sheet = ref(false);
const isLoading = ref(false)

useSeoMeta({
  title: "创图卡片 - 体验全新的文字卡片分享 | labs.wowyou.cc",
  ogTitle: "创图卡片 - 体验全新的文字卡片分享 | labs.wowyou.cc",
  keywords: "创图卡片,卡片,文生图,文字卡片,工具,演示,生成器",
  ogType: "website",
  description: "创图卡片一款在线文字卡片制作工具，只需简单输入，即可瞬间转化为精致、风格独特的文字卡片，让每个字句都散发独特的魅力，让每一次表达都留下深刻印象",
  ogDescription: "创图卡片一款在线文字卡片制作工具，只需简单输入，即可瞬间转化为精致、风格独特的文字卡片，让每个字句都散发独特的魅力，让每一次表达都留下深刻印象",
  twitterCard: "summary_large_image",
  ogUrl: "https://labs.wowyou.cc",
  ogLocale: "zh",
  ogPublisher: '创图卡片',
  ogLogo: 'https://labs.wowyou.cc/logo.png',
  ogImage: 'https://labs.wowyou.cc/preview.png',
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

});

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 0.2))
  if (mobile.value) {
    isMobile.value = true
    userConfig.value.styleObject.width = `${width.value}px`;
    updateShareUserConfig({ styleObject: userConfig.value.styleObject })
  } else {
    initInteract();
  }
});

function initInteract() {
  interact(getChildRef()).resizable({
    edges: { top: false, left: true, bottom: false, right: true },
    listeners: {
      start(event) {
        userConfig.value.styleObject.transition = "";
        updateShareUserConfig({ styleObject: userConfig.value.styleObject })
      },
      move(event) {
        userConfig.value.styleObject.width = `${event.rect.width}px`;
        updateShareUserConfig({ styleObject: userConfig.value.styleObject })
      },
    },
  });
}

function changePicScale(e) {
  let width = String(userConfig.value.styleObject.width)
  width = width.match(/(\d+)/)[1]
  if (e == 0) {
    let height = width
    userConfig.value.scale.minHeight = `${height}px`;
  }

  if (e == 1) {
    let height = (width / 3) * 4
    userConfig.value.scale.minHeight = `${height}px`;

  }
  if (e == 2) {
    let height = (width / 4) * 3
    userConfig.value.scale.minHeight = `${height}px`;
  }
  if (e == 3) {
    width = 1024
    let height = (width / 7) * 5
    userConfig.value.scale.minHeight = `${height}px`;
  }
  if (e == 4) {
    width = 393
    let height = (width / 9) * 16
    userConfig.value.scale.minHeight = `${height}px`;
  }
  if (e == 5) {
    width = 700
    let height = (width / 16) * 9
    userConfig.value.scale.minHeight = `${height}px`;
  }
  if (e == 6) {
    width = 533
    let height = (width / 12) * 16
    userConfig.value.scale.minHeight = `${height}px`;
  }
  userConfig.value.styleObject.width = `${width}px`;
  updateShareUserConfig({ scale: userConfig.value.scale, styleObject: userConfig.value.styleObject })
}

function onUrlChange(url) {
  queryOg(url)
}

function changeColor(theme) {
  userConfig.value.styleObject.transition = "";
  updateShareUserConfig({ styleObject: userConfig.value.styleObject })
  getChildRef().style.setProperty("--colorA", theme.colorA);
  getChildRef().style.setProperty("--colorB", theme.colorB);
  getChildRef().style.setProperty("--angle", theme.angle);
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
    getChildRef().style.setProperty("--base-font-size", `${e.val}rem`);
  }
}

function decrement(e) {
  if ("padding" == e.action) {
    styleObject.padding = `${e.val}px`;
  } else if ("width" == e.action) {
    styleObject.width = `${e.val}px`;
  } else {
    styleObject.fontSize = `${e.val}rem`;
    temp1.value.$refs.template.style.setProperty("--base-font-size", `${e.val}rem`);
  }
}

function increment(e) {
  if ("padding" == e.action) {
    styleObject.padding = `${e.val}px`;
  } else if ("width" == e.action) {
    styleObject.width = `${e.val}px`;
  } else {
    styleObject.fontSize = `${e.val}rem`;
    temp1.value.$refs.template.style.setProperty("--base-font-size", `${e.val}rem`);
  }
}

function generateImage() {
  html2canvas(getChildRef(), { scale: 3 }).then((canvas) => {
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
  html2canvas(getChildRef(), { scale: 3 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    copyBase64Img(imgData);
  });
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
  snackbar.value = true;
}
function getClipboardData(event) {
  event.preventDefault(); // 阻止默认粘贴行为

  // 获取剪贴板中的纯文本内容
  const text = (event.clipboardData || window.clipboardData).getData('text/plain');
  console.log(event.target.dataset.key)
}

function getChildRef() {
  if ('temp-1' == userConfig.value.tempId) {
    return temp1.value.$refs.template;
  }
  if ('temp-2' == userConfig.value.tempId) {
    return temp2.value.$refs.template;
  }
  if ('temp-3' == userConfig.value.tempId) {
    return temp3.value.$refs.template;
  }
  if ('temp-4' == userConfig.value.tempId) {
    return temp4.value.$refs.template;
  }
}


const API_PREFIX_VERCEL = 'https://doc.wowyou.cc/api/web/og'

const queryOg = async (url) => {
  isLoading.value = true

  const { data } = await axios.post(`${API_PREFIX_VERCEL}`, { "url": url })

  if (data) {
    let base64Image = ''
    let base64Logo = '';
    if (data?.image) {
      try {
        base64Image = await getBase64Image(data.image, true)
        base64Logo = await getBase64Image(data.logo, false)
      } catch (error) {
        console.log(`Oops, something went wrong: Maybe caused by CORS!!!`)
      }
    }
    const metaData = {
      title: data.title,
      description: data.description,
      url: url,
      image: data.image,
      logo: data.logo,
      author: data.author,
      publisher: data.publisher,
      base64Image: base64Image,
      base64Logo: base64Logo
    }
    updateShareUserConfig({ metaData: metaData })
  }
  isLoading.value = false
}


</script>

<style scoped>
.container {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  position: relative;
}

code {
  font-family: inherit !important;
}
</style>
