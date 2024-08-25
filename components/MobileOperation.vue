<template>
  <figure style="padding-bottom: env(safe-area-inset-bottom);">
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="template">
        <div class="d-flex align-center template ga-6 py-4 px-4">
          <div class="temp-item cursor-pointer" :class="{ 'temp-item-activate': 'temp-1' == userConfig.tempId }"
            @click="changeTemp('temp-1')">
            <v-img src="~/assets/temp-1.png" :width="80"></v-img>
          </div>
          <div class="temp-item cursor-pointer" :class="{ 'temp-item-activate': 'temp-2' == userConfig.tempId }"
            @click="changeTemp('temp-2')">
            <v-img src="~/assets/temp-2.png" :width="80"></v-img>
          </div>
          <div class="temp-item cursor-pointer" :class="{ 'temp-item-activate': 'temp-3' == userConfig.tempId }"
            @click="changeTemp('temp-3')">
            <v-img src="~/assets/temp-3.png" :width="80"></v-img>
          </div>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="url">
        <div class="d-flex align-center justify-center py-2 px-2">
          <v-text-field clearable variant="outlined" placeholder="请输入url地址" v-model="url"></v-text-field>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="bg">
        <div class="d-flex align-center justify-center py-2 px-2">
          <v-carousel :continuous="false" :show-arrows="false" color="#fff" height="100" hide-delimiter-background
            class="d-flex  align-center justify-center custom">
            <v-carousel-item v-for="(theme, i) in themeList" :key="i" cover>
              <div class="d-flex flex-row ga-2 align-center justify-start flex-wrap px-1 py-1">
                <div v-for="(item, index) in theme" class="d-flex cursor-pointer item"
                  :class="{ 'item-activate': String(i) + String(index) == selectedColorIndex }"
                  @click="changeColor(item, index, i)">
                  <div :style="item.bgcolor" class="color-item rounded-circle"></div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="display">
        <div class="d-flex flex-row ga-3 align-center justify-start  py-3 px-3 crtl">
          <v-switch v-model="show.title" :label="$t('Title')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('title')" min-width="100"
            v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.content" :label="$t('Content')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('content')" min-width="100"
            v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.author" :label="$t('Author')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('author')" min-width="100"
            v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.padding" :label="$t('Padding')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('padding')" min-width="100"></v-switch>
          <v-switch v-model="show.qrcode" :label="$t('QR Code')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('qrcode')" min-width="120"
            v-show="'temp-2' != userConfig.tempId"></v-switch>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        <div class="d-flex align-center justify-center">
          <div class="d-flex flex-row ga-4 py-2">
            <div class="flex-row d-flex align-center justify-start">
              <div style="width: 4rem">
                {{ $t("Padding") }}
              </div>
              <div>
                <v-btn-toggle v-model="paddingSlider" color="deep-purple-accent-3" rounded="0" group data-id="padding"
                  @click="onBtnToggle('padding')">
                  <v-btn value="20"> 20 </v-btn>
                  <v-btn value="30"> 30 </v-btn>
                  <v-btn value="40"> 40 </v-btn>
                  <v-btn value="50"> 50 </v-btn>
                  <v-btn value="60"> 60 </v-btn>
                </v-btn-toggle>
                <v-slider v-model="paddingSlider" thumb-label :step="1" track-color="grey"
                  @update:modelValue="onSliderChange('padding')">
                  <!-- <template v-slot:prepend>
                                                    <v-btn icon="mdi-minus" size="small" variant="text"
                                                        @click="decrement('padding')" data-id="padding"></v-btn>
                                                </template>

<template v-slot:append>
                                                    <v-btn icon="mdi-plus" size="small" variant="text"
                                                        @click="increment('padding')" data-id="padding"></v-btn>
                                                </template> -->
                </v-slider>
              </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="flex-row d-flex align-center justify-start">
              <div style="width: 4rem">
                {{ $t("Width") }}
              </div>
              <div>
                <v-btn-toggle v-model="widthSlider" color="deep-purple-accent-3" rounded="0"
                  @click="onBtnToggle('width')">
                  <v-btn value="340" class="text-none">
                    {{ $t("Small") }}
                  </v-btn>
                  <v-btn value="440" class="text-none">
                    {{ $t("Default") }}
                  </v-btn>
                  <v-btn value="540" class="text-none">
                    {{ $t("Middle") }}
                  </v-btn>
                  <v-btn value="640" class="text-none">
                    {{ $t("Large") }}
                  </v-btn>
                  <v-btn value="740" class="text-none">
                    {{ $t("XL Large") }}
                  </v-btn>
                </v-btn-toggle>
                <div class="d-flex">
                  <v-slider v-model="widthSlider" thumb-label :step="5" track-color="grey" min="340" max="900"
                    @update:modelValue="onSliderChange('width')">
                    <!-- <template v-slot:prepend>
                                                        <v-btn icon="mdi-minus" size="small" variant="text"
                                                            @click="decrement('width')" data-id="width"></v-btn>
                                                    </template>

                                                    <template v-slot:append>
                                                        <v-btn icon="mdi-plus" size="small" variant="text"
                                                            @click="increment('width')" data-id="width"></v-btn>
                                                    </template> -->
                  </v-slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="font">
        <div class="d-flex align-center justify-center">
          <div class="d-flex flex-row align-center px-2 py-2">
            <!-- <div style="width: 4rem">
              {{ $t("Font") }}
            </div> -->
            <div>
              <v-btn-toggle v-model="fontSizeSlider" color="deep-purple-accent-3" rounded="0"
                @click="onBtnToggle('fontsize')">
                <v-btn value="0.7" class="text-none">
                  {{ $t("Small") }}
                </v-btn>
                <v-btn value="1" class="text-none">
                  {{ $t("Default") }}
                </v-btn>
                <v-btn value="1.25" class="text-none">
                  {{ $t("Middle") }}
                </v-btn>
                <v-btn value="1.5" class="text-none">
                  {{ $t("Large") }}
                </v-btn>
              </v-btn-toggle>
              <div class="d-flex">
                <v-slider v-model="fontSizeSlider" thumb-label :step="0.1" track-color="grey" min="0.7" max="1.5"
                  @update:modelValue="onSliderChange('fontsize')">
                  <!-- <template v-slot:prepend>
                                                    <v-btn icon="mdi-minus" size="small" variant="text"
                                                        @click="decrement('fontsize')" data-id="fontsize"></v-btn>
                                                </template>

                                                <template v-slot:append>
                                                    <v-btn icon="mdi-plus" size="small" variant="text"
                                                        @click="increment('fontsize')" data-id="fontsize"></v-btn>
                                                </template> -->
                </v-slider>
              </div>
            </div>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
    <!-- </v-card-text> -->
    <v-tabs v-model="tab" align-tabs="center" center-active>
      <v-tab value="template" class="text-none">模板</v-tab>
      <v-tab value="url" class="text-none" v-show="'temp-3' == userConfig.tempId">URL</v-tab>
      <v-tab value="bg" class="text-none">{{ $t("Bg Color") }}</v-tab>
      <v-tab value="display" class="text-none">{{ $t("Display") }}</v-tab>
      <v-tab value="three" class="text-none d-none d-sm-flex">{{
        $t("Width And Padding")
      }}</v-tab>
      <v-tab value="font" class="text-none">{{ $t("Font") }}</v-tab>
    </v-tabs>

  </figure>
</template>

<script setup>
const props = defineProps({
});
const emit = defineEmits([
  "changeColor",
  "onSliderChange",
  "decrement",
  "increment",
  "onUrlChange",
  "onChangeTemp",
]);

const { userConfig, updateShareUserConfig } = useSharedConfig();

const tab = ref(null);
const url = ref('')
const tempId = ref("temp-1");
const fontSizeSlider = ref("1.1");
const widthSlider = ref("440");
const paddingSlider = ref("20");
const selectedColorIndex = ref(0);
const show = reactive({
  title: true,
  content: true,
  qrcode: true,
  author: true,
  padding: false,
});

const themeList = ref(
  [
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
      },], [
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


onMounted(() => {
  Object.assign(show, userConfig.value.show)
});


watch(url, (newUrl) => {
  emit("onUrlChange", newUrl);
})
function changeTemp(e) {
  tempId.value = e
  // emit("onChangeTemp", e);
  updateShareUserConfig({ tempId: e })
}
function onSwitchChange(e) {
  if (show.padding == true) {
    userConfig.value.styleObject.padding = "0px";
  } else {
    userConfig.value.styleObject.padding = "20px";
  }
  updateShareUserConfig({ show: show, styleObject: userConfig.value.styleObject })
}
function onBtnToggle(e) {
  if (e == "padding") {
    userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
  }
  if (e == "width") {
    userConfig.value.styleObject.width = `${widthSlider.value}px`;
    userConfig.value.styleObject.transition = "500ms"
  }
  if (e == "fontsize") {
    userConfig.value.styleObject['--base-font-size'] = `${fontSizeSlider.value}rem`
  }
  updateShareUserConfig({ show: show, styleObject: userConfig.value.styleObject })
}
function changeColor(e, index, i) {
  selectedColorIndex.value = String(i) + String(index);
  emit("changeColor", e);
}
function onSliderChange(e) {
  if (e == "padding") {
    userConfig.value.styleObject.padding = `${paddingSlider.value}px`;
  }
  if (e == "width") {
    userConfig.value.styleObject.width = `${widthSlider.value}px`;
    userConfig.value.styleObject.transition = "500ms"
  }
  if (e == "fontsize") {
    userConfig.value.styleObject['--base-font-size'] = `${fontSizeSlider.value}rem`
  }
  updateShareUserConfig({ styleObject: userConfig.value.styleObject })

}
function decrement(e) {
  let val = 0;
  if ("padding" == e) {
    let padding = parseInt(paddingSlider.value) - 1;
    paddingSlider.value = padding + "";
    val = paddingSlider.value;
  } else if ("width" == e) {
    let width = parseInt(widthSlider.value) - 5;
    widthSlider.value = width + "";
    val = widthSlider.value;
  } else {
    let fontSize = parseFloat(fontSizeSlider.value) - 0.1;
    fontSizeSlider.value = fontSize + "";
    val = fontSizeSlider;
  }

  emit("decrement", { action: e, val: val });
}
function increment(e) {
  let val = 0;
  if ("padding" == e) {
    let padding = parseInt(paddingSlider.value) + 1;
    paddingSlider.value = padding + "";
    val = paddingSlider.value;
  } else if ("width" == e) {
    let width = parseInt(widthSlider.value) + 5;
    widthSlider.value = width + "";
    val = widthSlider.value;
  } else {
    let fontSize = parseFloat(fontSizeSlider.value) + 0.1;
    fontSizeSlider.value = fontSize + "";
    val = fontSizeSlider.value;
  }

  emit("increment", { action: e, val: val });
}
</script>
<style scoped>
.template {
  overflow-x: auto;
}

.template::-webkit-scrollbar {
  width: 2px;
  /* 滚动条的宽度 */
  height: 2px;
}

.template::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* 轨道背景颜色 */
  border-radius: 5px;
  /* 轨道圆角 */
}

/* 滚动条滑块 */
.template::-webkit-scrollbar-thumb {
  background: #888;
  /* 滑块颜色 */
  border-radius: 5px;
  /* 滑块圆角 */
}

/* 滑块悬停时的颜色 */
.template::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* 滑块悬停时颜色 */
}

.crtl {
  overflow-x: auto;
}

.color-item {
  width: 1.75rem;
  height: 1.75rem;
  box-sizing: border-box;
  position: relative;
}


.item,
.temp-item {
  position: relative;
  transition: all .2s ease-out;
}

.item::after {
  border: 2px solid #63e2b7;
  /* 边框颜色 */
  border-radius: 50%;
  /* 边框也是圆形 */
  content: "";
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  position: absolute;
  opacity: 0;
  /* 初始时边框不可见 */
  overflow: hidden;
  transition: opacity 0.3s ease-out;
  /* 边框显示的过渡效果 */
}

.item-activate::after {
  opacity: 1;
}

.template .temp-item::after {
  border: 2px solid #63e2b7;
  /* 边框颜色 */
  border-radius: 16px;
  /* 边框也是圆形 */
  content: "";
  top: -7px;
  right: -7px;
  bottom: -7px;
  left: -7px;
  position: absolute;
  opacity: 0;
  /* 初始时边框不可见 */
  overflow: hidden;
  transition: opacity .5s ease-out;
}

.template .temp-item-activate::after {
  opacity: 1;
}

:deep(.v-carousel__controls) {
  height: 20px;

}

:deep(.v-btn--size-x-small) {
  --v-btn-height: 5px !important;
}
</style>
