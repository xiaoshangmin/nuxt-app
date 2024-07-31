<template>
    <v-expansion-panels v-model="showOperation">
        <v-expansion-panel :title="$t('Edit')" elevation="10" value="showOperation">
            <v-expansion-panel-text>
                <v-card class="mx-auto" max-width="1024">
                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <div class="d-flex flex-row ga-2 align-center justify-start flex-wrap">
                                    <div v-for="theme in themeList" class="color-item rounded-circle cursor-pointer"
                                        :style="theme.bgcolor" @click="changeColor(theme)">
                                    </div>
                                </div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <div class="d-flex flex-row ga-3  flex-wrap">
                                    <v-switch v-model="show.title" :label="$t('Title')" hide-details inset
                                        color="primary" @update:modelValue="onSwitchChange('title')"></v-switch>
                                    <v-switch v-model="show.content" :label="$t('Content')" hide-details inset
                                        color="primary" @update:modelValue="onSwitchChange('content')"></v-switch>
                                    <v-switch v-model="show.qrcode" :label="$t('QR Code')" hide-details inset
                                        color="primary" @update:modelValue="onSwitchChange('qrcode')"></v-switch>
                                    <v-switch v-model="show.author" :label="$t('Author')" hide-details inset
                                        color="primary" @update:modelValue="onSwitchChange('author')"></v-switch>
                                    <v-switch v-model="show.padding" :label="$t('Padding')" hide-details inset
                                        color="primary" @update:modelValue="onSwitchChange('padding')"></v-switch>
                                </div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                <div class="d-flex flex-row ga-4">
                                    <div class="flex-row d-flex align-center justify-start">
                                        <div style="width: 4rem;">
                                            {{ $t("Padding") }}
                                        </div>
                                        <div>
                                            <v-btn-toggle v-model="paddingSlider" color="deep-purple-accent-3"
                                                rounded="0" group data-id="padding" @click="onBtnToggle('padding')">
                                                <v-btn value="20">
                                                    20
                                                </v-btn>
                                                <v-btn value="30">
                                                    30
                                                </v-btn>
                                                <v-btn value="40">
                                                    40
                                                </v-btn>
                                                <v-btn value="50">
                                                    50
                                                </v-btn>
                                                <v-btn value="60">
                                                    60
                                                </v-btn>
                                            </v-btn-toggle>
                                            <v-slider v-model="paddingSlider" thumb-label :step="1" track-color="grey"
                                                @update:modelValue="onSliderChange('padding')">
                                                <template v-slot:prepend>
                                                    <v-btn icon="mdi-minus" size="small" variant="text"
                                                        @click="decrement('padding')" data-id="padding"></v-btn>
                                                </template>

                                                <template v-slot:append>
                                                    <v-btn icon="mdi-plus" size="small" variant="text"
                                                        @click="increment('padding')" data-id="padding"></v-btn>
                                                </template>
                                            </v-slider>
                                        </div>

                                    </div>
                                    <v-divider vertical></v-divider>
                                    <div class="flex-row d-flex align-center justify-start ">
                                        <div style="width: 4rem;">
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
                                                <v-slider v-model="widthSlider" thumb-label :step="5" track-color="grey"
                                                    min="340" max="900" @update:modelValue="onSliderChange('width')">
                                                    <template v-slot:prepend>
                                                        <v-btn icon="mdi-minus" size="small" variant="text"
                                                            @click="decrement('width')" data-id="width"></v-btn>
                                                    </template>

                                                    <template v-slot:append>
                                                        <v-btn icon="mdi-plus" size="small" variant="text"
                                                            @click="increment('width')" data-id="width"></v-btn>
                                                    </template>
                                                </v-slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="four">
                                <div class="d-flex flex-row align-center justify-start">
                                    <div style="width: 4rem;">
                                        {{ $t("Font") }}
                                    </div>
                                    <div>
                                        <v-btn-toggle v-model="fontSizeSlider" color="deep-purple-accent-3" rounded="0"
                                            @click="onBtnToggle('fontsize')">
                                            <v-btn value="0.77" class="text-none">
                                                {{ $t("Small") }}
                                            </v-btn>
                                            <v-btn value="1.1" class="text-none">
                                                {{ $t("Default") }}
                                            </v-btn>
                                            <v-btn value="1.375" class="text-none">
                                                {{ $t("Middle") }}
                                            </v-btn>
                                            <v-btn value="1.65" class="text-none">
                                                {{ $t("Large") }}
                                            </v-btn>
                                        </v-btn-toggle>
                                        <div class="d-flex">
                                            <v-slider v-model="fontSizeSlider" thumb-label :step="0.1"
                                                track-color="grey" min="0.5" max="2"
                                                @update:modelValue="onSliderChange('fontsize')">
                                                <template v-slot:prepend>
                                                    <v-btn icon="mdi-minus" size="small" variant="text"
                                                        @click="decrement('fontsize')" data-id="fontsize"></v-btn>
                                                </template>

                                                <template v-slot:append>
                                                    <v-btn icon="mdi-plus" size="small" variant="text"
                                                        @click="increment('fontsize')" data-id="fontsize"></v-btn>
                                                </template>
                                            </v-slider>
                                        </div>
                                    </div>
                                </div>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                    <v-tabs v-model="tab" align-tabs="center">
                        <v-tab value="one" class="text-none">{{ $t("Bg Color") }}</v-tab>
                        <v-tab value="two" class="text-none">{{ $t("Display") }}</v-tab>
                        <v-tab value="three" class="text-none d-none d-sm-flex">{{ $t("Width And Padding") }}</v-tab>
                        <v-tab value="four" class="text-none">{{ $t("Font") }}</v-tab>
                    </v-tabs>
                </v-card>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
const props = defineProps(['themeList']);
const emit = defineEmits(['onSwitchChange', 'onBtnToggle', 'changeColor', 'onSliderChange', 'decrement', 'increment']);
const tab = ref(null);
const showOperation = ref('showOperation')
const fontSizeSlider = ref('1.1');
const widthSlider = ref('440');
const paddingSlider = ref('20');
const show = reactive({
    title: true,
    content: true,
    qrcode: true,
    author: true,
    padding: false
})
function onSwitchChange(e) {
    emit('onSwitchChange', { "action": e, "val": show });
}
function onBtnToggle(e) {
    let val = e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;
    emit('onBtnToggleChange', { "action": e, "val": val });
}
function changeColor(e) {
    emit('changeColor', e);
}
function onSliderChange(e) {
    let val = e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;
    emit('onSliderChange', { "action": e, "val": val });
}
function decrement(e) {
    let val = 0;//e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;

    if ("padding" == e) {
        let paddingSlider = parseInt(this.paddingSlider) - 1
        this.paddingSlider = paddingSlider + ""
        val = paddingSlider
    } else if ("width" == e) {
        let widthSlider = parseInt(this.widthSlider) - 5
        this.widthSlider = widthSlider + ""
        val = widthSlider
    } else {
        let fontSizeSlider = parseFloat(this.fontSizeSlider) - 0.1
        this.fontSizeSlider = fontSizeSlider + ""
        val = fontSizeSlider
    }

    emit('decrement', { "action": e, "val": val });
}
function increment(e) {
    let val = 0;//e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;

    if ("padding" == e) {
        let paddingSlider = parseInt(this.paddingSlider) + 1
        this.paddingSlider = paddingSlider + ""
        val = paddingSlider
    } else if ("width" == e) {
        let widthSlider = parseInt(this.widthSlider) + 5
        this.widthSlider = widthSlider + ""
        val = widthSlider
    } else {
        let fontSizeSlider = parseFloat(this.fontSizeSlider) + 0.1
        this.fontSizeSlider = fontSizeSlider + ""
        val = fontSizeSlider
    }

    emit('increment', { "action": e, "val": val });
}
</script>
<style scoped>
.color-item {
    width: 1.75rem;
    height: 1.75rem;
}
</style>