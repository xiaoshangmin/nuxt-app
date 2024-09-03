<template>
  <figure>
    <div
      class="main d-flex flex-column justify-center align-center"
      v-if="isClient"
    >
      <div class="d-flex justify-center align-center">
        <div
          class="content-mode"
          ref="template"
          :style="userConfig.styleObject"
        >
          <div
            class="d-flex justify-center align-center cursor-pointer"
            :class="{ 'rounded-xl': userConfig.styleObject.padding != '0px' }"
             @click="upload"
          >
          <v-img v-if="base64Image" :src="base64Image" alt="图片"></v-img>
            <v-icon  v-if="!base64Image" icon="mdi-plus-box" size="130px"></v-icon>
          </div>
        </div>
      </div>
      <v-file-input ref="uploadRef" label="" :rules="rules" prepend-icon="" v-model="files"
                @change="uploadImg" class="custom-file-input">
            </v-file-input>
    </div>
  </figure>
</template>

<script setup>
import { getBase64Image } from '@/utils'
const { userConfig, updateShareUserConfig } = useSharedConfig();

const uploadRef = ref(null)
const files = ref([]); 
const isClient = ref(false);
const base64Image = ref('')
const rules = [
    value => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    },
]
onMounted(() => {
  isClient.value = true;
});

const props = defineProps({
  isMobile: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false },
  template: { type: Object },
  url: { type: String, default: "https://labs.wowyou.cc" },
});
const emit = defineEmits(["getClipboardData"]);

function upload() {
    uploadRef?.value.click()
}
async function uploadImg() { 
    let file = files.value; //拿到上传的file   
    const url = URL.createObjectURL(file)
    const base64 = await getBase64Image(url, false)
    base64Image.value = base64
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

.main {
  position: relative;
  font-family: inherit;
  margin-right: auto;
  margin-left: auto;
}

.content-mode {
  width: 100%;
  background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
  transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s, opacity 0.5s;
  min-width: 393px;
  max-width: 940px;
  font-family: inherit;
  box-sizing: border-box;
  --base-font-size: 1.1rem;
}

.custom-file-input {
    width: 0;
    height: 0;
    visibility: hidden;
}
</style>
