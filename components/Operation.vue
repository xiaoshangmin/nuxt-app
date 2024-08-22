<template>
  <figure  style="padding-bottom: env(safe-area-inset-bottom);">
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
            @update:modelValue="onSwitchChange('title')" min-width="100" v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.content" :label="$t('Content')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('content')" min-width="100" v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.author" :label="$t('Author')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('author')" min-width="100" v-show="'temp-1' == userConfig.tempId"></v-switch>
          <v-switch v-model="show.padding" :label="$t('Padding')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('padding')" min-width="100"></v-switch>
          <v-switch v-model="show.qrcode" :label="$t('QR Code')" hide-details inset color="primary"
            @update:modelValue="onSwitchChange('qrcode')" min-width="120"  v-show="'temp-2' != userConfig.tempId"></v-switch>
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
    <v-tabs v-model="tab" align-tabs="center" center-active >
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
  themeList: { type: Object }
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
  updateShareUserConfig({styleObject: userConfig.value.styleObject })

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
