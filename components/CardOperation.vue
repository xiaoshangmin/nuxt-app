<template>
    <div class="operation mt-4 mx-1 d-flex flex-column align-center">
        <div style="max-width: 600px;">
            <div class="bgcolor-class d-flex flex-row align-center justify-space-between">
                <div style="width: 5rem;">
                    背景颜色
                </div>
                <div class="d-flex flex-row ga-2 flex-wrap	" style="flex:1">
                    <div v-for="theme in themeList" class="color-item rounded-circle cursor-pointer"
                        :style="theme.bgcolor" @click="changeColor(theme)">
                    </div>
                </div>
            </div>
            <v-divider inset class="my-4 d-none d-sm-flex"></v-divider>
            <div class="padding-class d-none d-sm-flex flex-row align-center justify-start">
                <div style="width: 5rem;">
                    内边距
                </div>
                <div>
                    <v-btn-toggle v-model="paddingSlider" color="deep-purple-accent-3" rounded="0" group
                        data-id="padding" @click="onBtnToggle('padding')">
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
                            <v-btn icon="mdi-minus" size="small" variant="text" @click="decrement('padding')"
                                data-id="padding"></v-btn>
                        </template>

                        <template v-slot:append>
                            <v-btn icon="mdi-plus" size="small" variant="text" @click="increment('padding')"
                                data-id="padding"></v-btn>
                        </template>
                    </v-slider>
                </div>

            </div>
            <v-divider inset class="my-4 d-none d-sm-flex"></v-divider>
            <div class="width-class  flex-row align-center justify-start d-none d-sm-flex ">
                <div style="width: 5rem;">
                    宽度
                </div>
                <div>
                    <v-btn-toggle v-model="widthSlider" color="deep-purple-accent-3" rounded="0" group
                        @click="onBtnToggle('width')">
                        <v-btn value="340">
                            小
                        </v-btn>
                        <v-btn value="440">
                            默认
                        </v-btn>
                        <v-btn value="540">
                            中
                        </v-btn>
                        <v-btn value="640">
                            大
                        </v-btn>
                        <v-btn value="740">
                            加大
                        </v-btn>
                    </v-btn-toggle>
                    <div class="d-flex">
                        <v-slider v-model="widthSlider" thumb-label :step="5" track-color="grey" min="340" max="900"
                            @update:modelValue="onSliderChange('width')">
                            <template v-slot:prepend>
                                <v-btn icon="mdi-minus" size="small" variant="text" @click="decrement('width')"
                                    data-id="width"></v-btn>
                            </template>

                            <template v-slot:append>
                                <v-btn icon="mdi-plus" size="small" variant="text" @click="increment('width')"
                                    data-id="width"></v-btn>
                            </template>
                        </v-slider>
                    </div>
                </div>
            </div>
            <v-divider inset class="my-4 d-none d-sm-flex"></v-divider>
            <div class="font-size-class  d-none d-sm-flex flex-row align-center justify-start">
                <div style="width: 5rem;">
                    字体大小
                </div>
                <div>
                    <v-btn-toggle v-model="fontSizeSlider" color="deep-purple-accent-3" rounded="0" group
                        @click="onBtnToggle('fontsize')">
                        <v-btn value="0.77">
                            小
                        </v-btn>
                        <v-btn value="1.1">
                            默认
                        </v-btn>
                        <v-btn value="1.375">
                            中
                        </v-btn>
                        <v-btn value="1.65">
                            大
                        </v-btn>
                    </v-btn-toggle>
                    <div class="d-flex">
                        <v-slider v-model="fontSizeSlider" thumb-label :step="0.1" track-color="grey" min="0.5" max="2"
                            @update:modelValue="onSliderChange('fontsize')">
                            <template v-slot:prepend>
                                <v-btn icon="mdi-minus" size="small" variant="text" @click="decrement('fontsize')"
                                    data-id="fontsize"></v-btn>
                            </template>

                            <template v-slot:append>
                                <v-btn icon="mdi-plus" size="small" variant="text" @click="increment('fontsize')"
                                    data-id="fontsize"></v-btn>
                            </template>
                        </v-slider>
                    </div>
                </div>
            </div>
            <v-divider inset class="my-4"></v-divider>
            <div class="d-flex flex-row ga-3  flex-wrap">
                <v-switch v-model="show.title" label="标题" hide-details inset color="primary"
                    @update:modelValue="onSwitchChange('title')"></v-switch>
                <v-switch v-model="show.content" label="内容" hide-details inset color="primary"
                    @update:modelValue="onSwitchChange('content')"></v-switch>
                <v-switch v-model="show.qrcode" label="二维码" hide-details inset color="primary"
                    @update:modelValue="onSwitchChange('qrcode')"></v-switch>
                <v-switch v-model="show.author" label="作者" hide-details inset color="primary"
                    @update:modelValue="onSwitchChange('author')"></v-switch>
                <v-switch v-model="show.padding" label="无边距" hide-details inset color="primary"
                    @update:modelValue="onSwitchChange('padding')"></v-switch>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CardOperation',
    props: ['themeList'],
    data: () => ({
        fontSizeSlider: '1.1',
        widthSlider: '440',
        paddingSlider: '20',
        show: {
            title: true,
            content: true,
            qrcode: true,
            author: true,
            padding: false
        },
    }),
    methods: {
        onBtnToggle(e) {
            let val = e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;
            this.$emit('onBtnToggleChange', { "action": e, "val": val });
        },
        changeColor(theme) {
            this.$emit('changeColor', theme);
        },
        onSliderChange(e) {
            let val = e == "padding" ? this.paddingSlider : e == "width" ? this.widthSlider : this.fontSizeSlider;
            this.$emit('onSliderChange', { "action": e, "val": val });
        },
        onSwitchChange(e) {
            this.$emit('onSwitchChange', { "action": e, "val": this.show });
        },
        decrement(e) {
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

            this.$emit('decrement', { "action": e, "val": val });
        },
        increment(e) {
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

            this.$emit('increment', { "action": e, "val": val });
        }
    }
}
</script>