<template>
  <div class="container d-flex flex-column justify-center align-center mb-10" :class="{ 'mt-4': !isMobile }">
    <!-- 主体部分 -->
    <div id="temp-1" v-show="'temp-1' == userConfig.tempId">
      <DefaultTemplate ref="temp1" @getClipboardData="getClipboardData" :isMobile="isMobile">
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
        <CardOperation2 :themeList="themeList" @changeColor="changeColor" @onSliderChange="onSliderChange"
          @decrement="decrement" @increment="increment" @onUrlChange="onUrlChange">
        </CardOperation2>
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
const { width, xs } = useDisplay();

const isMobile = ref(false);
const snackbar = ref(false);
const temp1 = ref(null);
const temp2 = ref(null);
const temp3 = ref(null);
const showWidth = ref("0px");
const sheet = ref(false);
const isLoading = ref(false)
const tempId = ref("temp-1")

const themeList = ref([
  [
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
    },], [
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
    },]
]);

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
  ogPublisher: '创图卡片',
  ogLogo: 'https://labs.wowyou.cc/logo.png',
  ogImage: 'https://labs.wowyou.cc/preview.png',
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

});

onMounted(async () => {
  // loadUserConfig();   
  await new Promise(resolve => setTimeout(resolve, 0.5))
  if (xs.value) {
    isMobile.value = true
    userConfig.value.styleObject.width = `${width.value}px`;
    updateShareUserConfig({ styleObject: userConfig.value.styleObject })
  } else {
    initInteract();
  }
});



function initInteract() {
  console.log('initInteract')
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

function onUrlChange(url) {
  queryOg(url)
}
 
function changeColor(theme) {
  userConfig.value.styleObject.transition = "";
  updateShareUserConfig({ styleObject: userConfig.value.styleObject })
  // temp1.value.$refs.template.style.setProperty("--colorA", theme.colorA);
  // temp1.value.$refs.template.style.setProperty("--colorB", theme.colorB);
  // temp1.value.$refs.template.style.setProperty("--angle", theme.angle);
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
  let key = event.target.dataset.key
  if('content'==key){

  }
  // userConfig[`${event.target.dataset.key}`] = text
  // doUpdateUserConfig(event.target.dataset.key, text)
  // 获取当前选中的范围
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
