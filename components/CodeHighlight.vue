<template>
  <div ref="codeBlock" class="code-highlight" :class="theme">
    <pre><code :class="'language-' + language">
      <span v-if="showLineNumbers" class="line-numbers">
        <span v-for="i in lineCount" :key="i">{{ i }}</span>
      </span>
      <span class="code-content">{{ code }}</span>
    </code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useNuxtApp } from '#app'

const props = defineProps<{
  code: string
  language: string
  showLineNumbers?: boolean
  theme?: 'default' | 'dark' | 'github'
}>()

const codeBlock = ref<HTMLElement | null>(null)
const { $highlightCode } = useNuxtApp()

const lineCount = computed(() => props.code.split('\n').length)

const highlightCode = () => {
  if (codeBlock.value && $highlightCode) {
    $highlightCode(codeBlock.value)
  }
}

onMounted(() => {
  highlightCode()
})

watch([() => props.code, () => props.language, () => props.theme], () => {
  nextTick(highlightCode)
})
</script>

<style>
.code-highlight {
  position: relative;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 1em;
  overflow-x: auto;
}

.code-highlight pre {
  margin: 0;
  padding: 0;
}

.code-highlight code {
  display: flex;
  font-family: "Roboto", sans-serif;
}

.line-numbers {
  display: inline-block;
  padding-right: 1em;
  border-right: 1px solid #999;
  text-align: right;
  user-select: none;
}

.line-numbers span {
  display: block;
  color: #999;
}

.code-content {
  padding-left: 1em;
  white-space: pre;
}

/* 主题样式 */
.code-highlight.dark {
  background-color: #1e1e1e;
  color: #d4d4d4;
}

.code-highlight.github {
  background-color: #f6f8fa;
  color: #24292e;
}
</style>