<template>
    <div class="editor-container" ref="draggable" :style="styleObject">
        <div class="editor-header">
            <div class="editor-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
            </div>
            <div class="editor-title">Code Editor</div>
        </div>
        <div class="code-editor">
            <textarea ref="textarea" :value="code"  @input="updateHeight" class="code-input"
                :style="{ height: textareaHeight }"></textarea>
            <pre class="code-output" :style="{ height: textareaHeight }" v-html="highlightedCode"></pre>
        </div> 

    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { createHighlighter, getSingletonHighlighter, getHighlighter, codeToHtml } from 'shiki'

const props = defineProps({
    isMobile: { type: Boolean, default: false },
    draggable: { type: Object },
    styleObject: { type: Object },
});
 
const code = ref('')
const textarea = ref(null)
const { height } = useElementSize(textarea)
const textareaHeight = ref('auto') 

const highlightedCode = ref('')

var highlighter

// 初始化高亮器
const initHighlighter = async () => {
    highlighter = await getHighlighter({
        theme: ['nord'],
        langs: ['javascript']
    })

}

// 高亮代码
const highlightCode = async () => {
    // if (highlighter) {
    //     console.log(2)
    //     highlightedCode = highlighter.codeToHtml(code.value, {
    //         lang: 'javascript',
    //         theme: 'nord'
    //     })
    // }   
    highlightedCode.value = await codeToHtml(code.value, {
        lang: 'javascript',
        themes: {
            light: 'min-light',
            dark: 'github-dark',
        }
    })
}

// 在组件挂载后初始化高亮器
onMounted(async () => {
    // await initHighlighter()

    highlightCode()
})

// 监听代码变化并更新高亮
watch(code, highlightCode)

const updateHeight = async () => {
    console.log(height.value)
    textareaHeight.value = `${height.value}px`
   
}
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


.editor-container {

    background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
    transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s, opacity .5s;
    font-family: inherit;
    box-sizing: border-box;
    --base-font-size: 1.1rem;

    margin: 1rem auto;
    /* border-radius: 8px; */
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    /* background: rgba(255, 255, 255, 0.2); */
    backdrop-filter: blur(10px);
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
    /* font-size: 14px; */
    font-size: inherit;
    font-weight: 500;
    color: #333;
}

.code-editor {
    position: relative;
    width: 100%;
    min-height: 300px;
    /* transition: height 0.2s; */
}

.code-input,
.code-output {
    tab-size: 2;
    transition: font-size .5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100px;
    margin: 0;
    padding: 1rem;
    border: none;
    font-family: 'Roboto';
    /* font-size: calc(var(--base-font-size)); */
    font-size: inherit;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    background-color: rgba(209, 166, 66, .1);
    letter-spacing: 1.5px;
}

.code-input {
    color: transparent;
    caret-color: #333;
    background: transparent;
    resize: none;
    z-index: 1;
    outline: none;
    text-size-adjust: none;
    font-variant-ligatures: none;
}

/* .code-input:focus {
  box-shadow: inset 0 0 0 2px rgba(0, 120, 212, 0.1);
} */

.code-output {
    pointer-events: none;
    z-index: 0;
    background: rgba(255, 255, 255, 0.8);
}

.code-output code {
    font-family: inherit;
} 
</style>