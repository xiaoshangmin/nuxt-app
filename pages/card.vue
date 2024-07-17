<template>
    <div class="container d-flex justify-center align-center ga-4"
        :class="{ 'flex-row': mdAndUp, 'flex-column': !mdAndUp }">
        <div class="main d-flex flex-column justify-center align-center" :style="mainStyleObj">

            <div class="d-flex justify-center align-center ">
                <!-- <v-hover v-slot="{ isHovering, props }">
                    <div class="d-none d-sm-flex resize-handle-left" v-if="isHovering"></div> 
                </v-hover> -->
                <div class="content-mode" ref="draggable" :style="styleObject">
                    <div class="card d-flex justify-center align-start pt-4 pb-4 px-4  flex-column"
                        :class="{ 'rounded-lg': styleObject.padding != '0px' }">
                        <div class="editable-element title" contenteditable="true" :class="{ 'd-none': !show.title }"
                            @paste="getClipboardData">
                            <p>👋 hi 你好</p>
                        </div>
                        <div class="editable-element content" contenteditable="true"
                            :class="{ 'd-none': !show.content }" @input="updateTitle" @paste="getClipboardData">
                            <p>这是简单的文字卡片生成工具，帮你发布社交媒体内容更有特色。</p>
                            <p>💡你可以在这里输入文字尝试一下，在电脑上全选文字后支持下面快捷键</p>
                            <p>- Ctrl+B 加粗文本</p>
                            <p>- Ctrl+I 斜体文本</p>
                            <p>- Ctrl+U 下划线文本</p>
                        </div>
                        <div class="editable-element time justify-end mt-6" contenteditable="true"
                            :class="{ 'd-none': !show.author, 'd-flex': show.author }" @paste="getClipboardData">
                            <p>讨厌麻烦事 2024-07-15 18:20 广东</p>
                        </div>
                        <v-divider class="my-2" :class="{ 'd-none': !show.qrcode, 'd-flex': show.qrcode }"
                            style="width: 100%;"></v-divider>
                        <div class="qrcode pt-2 flex-row justify-space-between align-center"
                            :class="{ 'd-none': !show.qrcode, 'd-flex': show.qrcode }">
                            <div>
                                <div class="editable-element" contenteditable="true" @paste="getClipboardData">
                                    简单卡片
                                </div>
                                <div class="editable-element desc" contenteditable="true" @paste="getClipboardData">
                                    扫描二维码
                                </div>
                            </div>
                            <div @click="dialog = true">
                                <vue-qr :text="qrData" :size="60" :margin="0" colorLight="transparent"
                                    backgroundColor="transparent" :colorDark="colorDark" :callback="getQrcode">
                                </vue-qr>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="d-none d-sm-flex resize-handle-right" v-if="isHovering"></div> -->

            </div>
            <div style="width: 100%;visibility:hidden">
                <v-divider class="my-2" color="info">{{ showWidth }}</v-divider>
            </div>
            <div class="d-flex mt-5 mb-4  flex-row align-center justify-center ga-2">
                <v-btn @click="generateImage">
                    下载图片
                </v-btn>
                <v-tooltip text="可直接粘贴在聊天框">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" @click="copyImage">复制图片</v-btn>
                    </template>
                </v-tooltip>
            </div>
        </div>

        <!-- 操作区域 -->
        <v-sheet v-if="mdAndUp" height="80vh" width="650px" elevation="4" style="position: fixed;right: 0;top: 80px;">
            <CardOperation :themeList="themeList" @changeColor="changeColor" @onSliderChange="onSliderChange"
                @decrement="decrement" @increment="increment" @onBtnToggleChange="onBtnToggleChange"
                @onSwitchChange="onSwitchChange"></CardOperation>
        </v-sheet>
        <v-bottom-sheet inset v-if="!mdAndUp">
            <template v-slot:activator="{ props }">
                <div style="position: fixed;right: 6px;bottom: 10vh;">
                    <v-btn v-bind="props" text="Click Me" icon="mdi-pencil"></v-btn>
                </div>
            </template>
            <v-sheet height="50vh" :elevation="15">
                <CardOperation :themeList="themeList" @changeColor="changeColor" @onSliderChange="onSliderChange"
                    @decrement="decrement" @increment="increment" @onBtnToggleChange="onBtnToggleChange"
                    @onSwitchChange="onSwitchChange">
                </CardOperation>
            </v-sheet>
        </v-bottom-sheet>
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

<script>
import interact from 'interactjs';
import domtoimage from 'dom-to-image-more'; 
import VueQr from 'vue-qr';

export default {
    data: () => ({
        snackbar: false,
        canvas: null,
        dialog: false,
        rules: {
            required: value => !!value || '请输入二维码内容.'
        },
        show: {
            title: true,
            content: true,
            qrcode: true,
            author: true,
            padding: false
        },
        colorDark: "#101320",
        showWidth: '0px',
        content: "",
        qrcode: "",
        themeList: [
            { "bgcolor": "background-image: linear-gradient(150deg, rgb(5, 174, 157), rgb(17, 26, 35));", "colorA": "rgb(5, 174, 157)", "colorB": "rgb(17, 26, 35)", "angle": "150deg" },
            { "bgcolor": "background-image: linear-gradient(150deg, rgb(94, 106, 137), rgb(15, 19, 40));", "colorA": "rgb(94, 106, 137)", "colorB": " rgb(15, 19, 40)", "angle": "150deg" },
            //蓝粉
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(87, 151, 249), rgb(108, 213, 196));", "colorA": "rgb(87, 151, 249)", "colorB": " rgb(108, 213, 196)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(64, 127, 231), rgb(253, 202, 220));", "colorA": "rgb(64, 127, 231)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(77, 3, 222), rgb(253, 202, 220));", "colorA": "rgb(77, 3, 222)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(204, 81, 36), rgb(253, 202, 220));", "colorA": "rgb(204, 81, 36)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(52, 182, 150), rgb(253, 202, 220));", "colorA": "rgb(52, 182, 150)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(244, 205, 82), rgb(253, 202, 220));", "colorA": "rgb(244, 205, 82)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(86, 93, 204), rgb(253, 202, 220));", "colorA": "rgb(86, 93, 204)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(33, 127, 193), rgb(253, 202, 220));", "colorA": "rgb(33, 127, 193)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(53, 99, 250), rgb(253, 202, 220));", "colorA": "rgb(53, 99, 250)", "colorB": " rgb(253, 202, 220)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(44, 68, 89), rgb(255, 203, 203));", "colorA": "rgb(44, 68, 89)", "colorB": " rgb(255, 203, 203)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(137, 176, 217), rgb(255, 238, 203));", "colorA": "rgb(137, 176, 217)", "colorB": " rgb(255, 238, 203)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(14, 87, 238), rgb(230, 255, 203));", "colorA": "rgb(14, 87, 238)", "colorB": " rgb(230, 255, 203)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(186, 125, 239), rgb(255, 203, 253));", "colorA": "rgb(186, 125, 239)", "colorB": " rgb(255, 203, 253)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(67, 197, 167), rgb(203, 238, 255));", "colorA": "rgb(67, 197, 167)", "colorB": " rgb(203, 238, 255)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(240, 111, 105), rgb(205, 203, 255));", "colorA": "rgb(240, 111, 105)", "colorB": " rgb(205, 203, 255)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(44, 176, 206), rgb(205, 203, 255));", "colorA": "rgb(44, 176, 206)", "colorB": " rgb(205, 203, 255)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(176, 189, 191), rgb(205, 203, 255));", "colorA": "rgb(176, 189, 191)", "colorB": " rgb(205, 203, 255)", "angle": "45deg" },
            // 红粉
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(149, 18, 190), rgb(245, 159, 156));", "colorA": "rgb(149, 18, 190)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(180, 20, 51), rgb(245, 159, 156));", "colorA": "rgb(180, 20, 51)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(245, 148, 126), rgb(245, 159, 156));", "colorA": "rgb(245, 148, 126)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(255, 242, 201), rgb(245, 159, 156));", "colorA": "rgb(255, 242, 201)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(139, 177, 196), rgb(245, 159, 156));", "colorA": "rgb(139, 177, 196)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(136, 14, 133), rgb(245, 159, 156));", "colorA": "rgb(136, 14, 133)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(69, 165, 215), rgb(245, 159, 156));", "colorA": "rgb(69, 165, 215)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "colorA": "rgb(191, 69, 133)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(182, 195, 141), rgb(245, 159, 156));", "colorA": "rgb(182, 195, 141)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(154, 151, 236), rgb(245, 159, 156));", "colorA": "rgb(154, 151, 236)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(84, 102, 105), rgb(245, 159, 156));", "colorA": "rgb(84, 102, 105)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(247, 174, 171), rgb(245, 159, 156));", "colorA": "rgb(247, 174, 171)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(254, 252, 59), rgb(245, 159, 156));", "colorA": "rgb(254, 252, 59)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(167, 254, 204), rgb(245, 159, 156));", "colorA": "rgb(167, 254, 204)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(241, 255, 207), rgb(245, 159, 156));", "colorA": "rgb(241, 255, 207)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },
            { "bgcolor": "background-image: linear-gradient(45deg, rgb(186, 167, 228), rgb(245, 159, 156));", "colorA": "rgb(186, 167, 228)", "colorB": " rgb(245, 159, 156)", "angle": "45deg" },


        ],
        styleObject: {
            padding: '20px',
            width: '393px',
            fontSize: '1.1rem'
        },
        mainStyleObj: {},
        qrData: "https://card.wowyou.cc/",
        qrDataCopy: "https://card.wowyou.cc/",
        mdAndUp: true,
    }),
    created() {
        if (!this.$vuetify.display.mdAndUp) {
            let width = this.$vuetify.display.width
            this.styleObject.width = `${width}px`
            this.mdAndUp = false;
        }
        if (this.mdAndUp) {
            this.mainStyleObj = {
                marginRight: '25vw',
                marginTop: '40px',
            }
        }

    },
    computed: {
        color() {

        }
    },
    components:{
        VueQr
    },
    mounted() {
        let self = this
        interact(this.$refs.draggable)
            .resizable({
                edges: { top: false, left: true, bottom: false, right: true },
                listeners: {
                    start(event) {
                        console.log('Resize started');
                    },
                    move(event) {
                        let { x, y } = event.target.dataset

                        x = (parseFloat(x) || 0) + event.deltaRect.left
                        y = (parseFloat(y) || 0) + event.deltaRect.top
                        self.showWidth = `${event.rect.width}px`;
                        Object.assign(event.target.style, {
                            width: `${event.rect.width}px`,
                            // height: `${event.rect.height}px`,
                            // transform: `translate(${x}px, ${y}px)`
                        })
                        Object.assign(event.target.dataset, { x, y })
                    },
                    end(event) {
                        console.log('Resize ended');

                    }
                }
            });
    },
    methods: {
        editQrData() {
            if (this.qrDataCopy) {
                this.qrData = this.qrDataCopy
                this.dialog = false
            }
        },
        getQrcode(data, id) {
            this.qrcode = data;
        },
        changeColor(theme) {
            this.$refs.draggable.style.setProperty('--colorA', theme.colorA);
            this.$refs.draggable.style.setProperty('--colorB', theme.colorB);
            this.$refs.draggable.style.setProperty('--angle', theme.angle);

        },
        onSwitchChange(e) {
            //无边框
            if (e.val.padding == true) {
                this.styleObject.padding = '0px'
            } else if (this.styleObject.padding == '0px') {
                this.styleObject.padding = '20px'
            }
            this.show = e.val
        },
        onSliderChange(e) {
            if (e.action == 'padding') {
                this.styleObject.padding = `${e.val}px`
            }
            if (e.action == 'width') {
                this.styleObject.width = `${e.val}px`
            }
            if (e.action == 'fontsize') {
                this.styleObject.fontSize = `${e.val}rem`
            }
        },
        onBtnToggleChange(e) {
            if (e.action == 'padding') {
                this.styleObject.padding = `${e.val}px`
            }
            if (e.action == 'width') {
                this.styleObject.width = `${e.val}px`
            }
            if (e.action == 'fontsize') {
                this.styleObject.fontSize = `${e.val}rem`
            }
        },
        decrement(e) {
            if ("padding" == e.action) {
                this.styleObject.padding = `${e.val}px`
            } else if ("width" == e.action) {
                this.styleObject.width = `${e.val}px`
            } else {
                this.styleObject.fontSize = `${e.val}rem`
            }
        },
        increment(e) {
            if ("padding" == e.action) {
                this.styleObject.padding = `${e.val}px`
            } else if ("width" == e.action) {
                this.styleObject.width = `${e.val}px`
            } else {
                this.styleObject.fontSize = `${e.val}rem`
            }
        },
        generateImage() {
            document.fonts.ready.then(() => {
                domtoimage.toPng(this.$refs.draggable).then(dataUrl => {
                    this.imageUrl = dataUrl;

                    const link = document.createElement('a');
                    link.download = 'simple.png';
                    link.href = dataUrl;
                    document.body.appendChild(link); // 需要先插入文档流才能触发点击事件
                    link.click();
                    document.body.removeChild(link);
                }).catch(error => {
                    console.error('生成图片时出错:', error);
                });
            });
        },
        copyImage() {
            document.fonts.ready.then(() => {
                domtoimage.toPng(this.$refs.draggable).then(dataUrl => {
                    this.copyBase64Img(dataUrl)

                }).catch(error => {
                    console.error('生成图片时出错:', error);
                });
            });
        },
        /*复制Base64图片*/
        copyBase64Img(base64Data) {
            // location.origin.includes('https://') || showToast('图片复制功能需要在https://协议下使用');
            //将base64转为Blob类型
            base64Data = base64Data.split(';base64,'); let type = base64Data[0].split('data:')[1]; base64Data = base64Data[1];
            let bytes = atob(base64Data), ab = new ArrayBuffer(bytes.length), ua = new Uint8Array(ab);
            [...Array(bytes.length)].forEach((v, i) => ua[i] = bytes.charCodeAt(i));
            let blob = new Blob([ab], { type });
            // “navigator.clipboard.write”该方法的确只能在本地localhost 、127.0.0.1 或者 https 协议下使用，否则navigator没有clipboard方法。
            navigator.clipboard.write([new ClipboardItem({ [type]: blob })]);
            // showToast('已复制到你的剪贴板');
            this.snackbar = true
        },

        updateTitle(event) {
            this.content = event.target.innerText;
        },
        getClipboardData(event) {
            event.preventDefault(); // 阻止默认粘贴行为

            // 获取剪贴板中的纯文本内容
            const text = (event.clipboardData || window.clipboardData).getData('text/plain');

            // 获取当前选中的范围
            const selection = window.getSelection();
            if (!selection.rangeCount) return;
            const range = selection.getRangeAt(0);

            // 创建一个文本节点并插入到当前范围
            const textNode = document.createTextNode(text);
            range.deleteContents(); // 删除选中内容
            range.insertNode(textNode);

            // 调整光标位置
            range.setStartAfter(textNode);
            range.setEndAfter(textNode);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}
</script>

<style>
@property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 45deg
}

@property --colorA {
    syntax: "<color>";
    inherits: false;
    initial-value: #5797f9
}

@property --colorB {
    syntax: "<color>";
    inherits: false;
    initial-value: #6cd5c4
}


.container {
    font-family: "Roboto", sans-serif;
}

.main {
    position: relative;
    font-family: inherit;
}

.content-mode {
    width: 100%;
    background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
    transition: padding .5s, --angle 1s, --colorA 1s, --colorB 1s, width .5s;
    min-width: 393px;
    max-width: 940px;
    font-family: inherit;
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
    opacity: .4;
}

.card {
    width: 100%;
    background-color: hsla(0, 0%, 100%, .5);
    box-shadow: 0 10px 40px hsla(0, 0%, 39%, .4);
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

.resize-handle-left {
    width: 0.5rem;
    height: 0.5rem;
    background-color: white;
    border-radius: 50%;
    margin-right: -0.25rem;
    z-index: 99;
}

.resize-handle-right {
    width: 0.5rem;
    height: 0.5rem;
    background-color: white;
    border-radius: 50%;
    margin-left: -0.25rem;
    z-index: 99;
}

.qrcode {
    width: 100%;
    opacity: .5;
    font-size: 1.25rem;
}

.desc {
    font-size: 0.875rem;
}

.operation {}

.bgcolor-class,
.width-class,
.padding-class {
    /* margin: 2rem 0; */
}

.color-item {
    width: 1.75rem;
    height: 1.75rem;
}
</style>
