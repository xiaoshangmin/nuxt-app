<template>
    <figure>
        <div class="d-flex code-container" ref="template" :style="userConfig.styleObject">
            <div class="editor-container">
                <div class="editor-header">
                    <div class="editor-controls">
                        <span class="control red"></span>
                        <span class="control yellow"></span>
                        <span class="control green"></span>
                    </div>
                    <div class="editor-title" contenteditable="true" @paste="getClipboardData">Untitled</div>
                </div>
                <div class="code-editor">
                    <textarea v-model="code" ref="textarea" @input="highlightCode" placeholder="Enter your code here"
                        class="code-input" style="letter-spacing: 0.2px;" autocomplete="off" spellcheck="false"
                        autocapitalize="off" data-enable-grammarly="false"></textarea>
                    <div class="code-output" style="letter-spacing: 0.2px;" v-html="highlightedCode" v-if="isClient">
                    </div>
                </div>
            </div>
        </div>
    </figure>
</template>

<script setup>
const { userConfig, updateShareUserConfig } = useSharedConfig();
import { codeToHtml } from 'shiki'


const code = ref('')
const lang = ref('js')
const highlightedCode = ref('')
const isClient = ref(false);
onMounted(() => {
    isClient.value = true;
    code.value = userConfig.value.codeData.code;
    highlightedCode.value = userConfig.value.codeData.highlightedCode;
});

const props = defineProps({
    isMobile: { type: Boolean, default: false },
    template: { type: Object }, 
});
const emit = defineEmits(["getClipboardData"]);

function getClipboardData(event) {
    emit("getClipboardData", event)
}
const highlightCode = async () => {
    highlightedCode.value = await codeToHtml(code.value, {
        lang: 'javascript',
        theme: 'nord',
        lineNumbers: true,
        wordWrap: true
    })
    let codeData = {
        highlightedCode: highlightedCode.value,
        code: code.value
    }
    updateShareUserConfig({ codeData: codeData })
}
onMounted(() => {
    highlightCode()
})
watch(code, highlightCode)

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

.code-container {
    background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
    transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s, opacity .5s;
    font-family: inherit;
    padding: 60px;
    /* width: 100%; */
    width: 800px;
}

.editor-container {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    /* background: rgba(255, 255, 255, 0.2); */
    backdrop-filter: blur(10px);
    width: 100%;
}

.editor-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    background: rgba(240, 240, 240, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
}

.editor-controls {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    padding: 0 16px;
    left: 0;
}

.control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.red {
    background-color: #ff5f56;
}

.yellow {
    background-color: #ffbd2e;
}

.green {
    background-color: #27c93f;
}

.editor-title {
    flex-grow: 1;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #333;
}


.code-editor {
    position: relative;
    min-height: 120px;
    background-color: rgba(46, 52, 54, .8);
    color: hsla(0, 0%, 100%, .6);
}

.code-input {
    font-size: inherit;
    background: transparent;
    color: transparent;
    outline: none;
    border: none;
    caret-color: #fff;
    height: 100%;
    overflow: hidden;
    position: absolute;
    resize: none;
    width: 100%;
    z-index: 2;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
    counter-increment: step 0;
    counter-reset: step;
    font-family: inherit;
    -webkit-font-feature-settings: inherit;
    font-feature-settings: inherit;
    font-size: inherit;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-variation-settings: inherit;
    font-weight: inherit;
    line-height: 1.6;
    margin: 0;
    padding: 16px 16px 21px;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-transition: padding .2s;
    transition: padding .2s;
    white-space: pre-wrap
}

.code-output {
    counter-increment: step 0;
    counter-reset: step;
    font-family: inherit;
    font-size: inherit;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-weight: inherit;
    line-height: 1.6;
    margin: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    padding: 16px 16px 21px;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    white-space: pre-wrap;
    width: 100%;
    transition: font-size .5s;
}

:deep(.line) {
    display: inline-block;
    margin: 0 -16px;
    padding: 0 16px;
    -webkit-transition: width .2s, padding .2s, margin .2s;
    transition: width .2s, padding .2s, margin .2s;
    white-space: pre-wrap;
    word-break: break-word
}


:deep(code),
:deep(pre) {
    font-family: inherit !important;
    font-size: inherit !important;
}

:deep(pre) {
    background-color: inherit !important;
}
</style>