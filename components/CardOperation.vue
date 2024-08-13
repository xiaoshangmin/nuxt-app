<template>
  <v-expansion-panels v-model="showOperation">
    <v-expansion-panel :title="$t('Edit')" elevation="10" value="showOperation" ripple>
      <v-expansion-panel-text>
        <v-tabs-window v-model="tab">

          <v-tabs-window-item value="url">
            <div>
              <v-text-field clearable variant="outlined" placeholder="请输入url地址" v-model="url"></v-text-field>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="one">
            <v-carousel :continuous="false" :show-arrows="false" color="#033" height="120" hide-delimiter-background>
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
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <div class="d-flex flex-row ga-3 flex-wrap">
              <v-switch v-model="show.title" :label="$t('Title')" hide-details inset color="primary"
                @update:modelValue="onSwitchChange('title')"></v-switch>
              <v-switch v-model="show.content" :label="$t('Content')" hide-details inset color="primary"
                @update:modelValue="onSwitchChange('content')"></v-switch>
              <v-switch v-model="show.qrcode" :label="$t('QR Code')" hide-details inset color="primary"
                @update:modelValue="onSwitchChange('qrcode')"></v-switch>
              <v-switch v-model="show.author" :label="$t('Author')" hide-details inset color="primary"
                @update:modelValue="onSwitchChange('author')"></v-switch>
              <v-switch v-model="show.padding" :label="$t('Padding')" hide-details inset color="primary"
                @update:modelValue="onSwitchChange('padding')"></v-switch>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <div class="d-flex flex-row ga-4">
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
          </v-tabs-window-item>

          <v-tabs-window-item value="four">
            <div class="d-flex flex-row align-center ga-2 justify-start px-2">
              <div style="width: 4rem">
                {{ $t("Font") }}
              </div>
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
          </v-tabs-window-item>
        </v-tabs-window>
        <!-- </v-card-text> -->
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="url" class="text-none">URL</v-tab>
          <v-tab value="one" class="text-none">{{ $t("Bg Color") }}</v-tab>
          <v-tab value="two" class="text-none">{{ $t("Display") }}</v-tab>
          <v-tab value="three" class="text-none d-none d-sm-flex">{{
            $t("Width And Padding")
          }}</v-tab>
          <v-tab value="four" class="text-none">{{ $t("Font") }}</v-tab>
        </v-tabs>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
const props = defineProps({
  themeList: { type: Object }
});
const emit = defineEmits([
  "onSwitchChange",
  "onBtnToggleChange",
  "changeColor",
  "onSliderChange",
  "decrement",
  "increment",
  "onUrlChange",
]);
const tab = ref(null);
const url = ref('')
const showOperation = ref("showOperation");
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

watch(url, (newUrl) => {
  emit("onUrlChange", newUrl);
})

function onSwitchChange(e) {
  emit("onSwitchChange", { action: e, val: show });
}
function onBtnToggle(e) {
  let val =
    e == "padding"
      ? paddingSlider.value
      : e == "width"
        ? widthSlider.value
        : fontSizeSlider.value;
  emit("onBtnToggleChange", { action: e, val: val });
}
function changeColor(e, index, i) {
  selectedColorIndex.value = String(i) + String(index);
  emit("changeColor", e);
}
function onSliderChange(e) {
  let val =
    e == "padding"
      ? paddingSlider.value
      : e == "width"
        ? widthSlider.value
        : fontSizeSlider.value;
  emit("onSliderChange", { action: e, val: val });
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
.color-item {
  width: 1.75rem;
  height: 1.75rem;
  box-sizing: border-box;
  position: relative;
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

.item {
  position: relative;
}

.item-activate::after {
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  opacity: 1; 
}
 
</style>
