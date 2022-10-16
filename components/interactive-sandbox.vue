<script setup lang="ts">
import { SandpackClient } from "@codesandbox/sandpack-client";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const props = defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: any;
  entryFile: string;
}>();

const activeTab = ref(props.entryFile);

function changeTab(tab: string) {
  activeTab.value = tab;
  extensions.value = [getFileExtension(activeTab.value)()];
}

// eslint-disable-next-line @typescript-eslint/ban-types
function getFileExtension(filename: string): Function {
  const extension = filename.substring(filename.indexOf(".") + 1);

  if (extension === "html") return html;
  if (extension === "js") return javascript;
  if (extension === "css") return css;
  else throw new Error("Invalid extension");
}

const extensions = ref([getFileExtension(activeTab.value)()]);

let client: SandpackClient;

function refreshClient() {
  client.dispatch({ type: "refresh" });
}

onMounted(() => {
  client = new SandpackClient(
    "#codeEmbed",
    {
      files: props.files,
      entry: props.entryFile,
      dependencies: {},
    },
    {
      width: "100%",
      height: "50%",
      showOpenInCodeSandbox: false,
      showLoadingScreen: false,
    }
  );
});

watch(props.files, () => {
  client.updatePreview({
    files: props.files,
  });
});
</script>

<template>
  <div class="editor">
    <div class="tabs-container">
      <button
        v-for="(value, name) in props.files"
        :key="name"
        :class="{ active: String(name) === activeTab }"
        class="tab-button"
        @click="changeTab(String(name))"
      >
        {{ name }}
      </button>
    </div>
    <template v-for="(value, name) in props.files" :key="name">
      <Codemirror
        v-if="String(name) === activeTab"
        v-model="toRef(props.files, name).value.code"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        :style="{ height: 'calc(100% - 40px)', outline: '0 !important' }"
        class="code"
      />
    </template>
  </div>
  <div class="divider">
    Resultado
    <button @click="refreshClient()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="refresh"
      >
        <path
          fill-rule="evenodd"
          d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
  <div id="codeEmbed"></div>
</template>

<style scoped>
.editor {
  height: 40%;
  display: block;
  overflow-y: auto;
}

.divider {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--space-2xs);
  border-block: 1px solid var(--gray-4);
}

button {
  border: none;
  background-color: transparent;
}

button:hover {
  cursor: pointer;
}

.refresh {
  width: 20px;
  height: 20px;
  fill: var(--gray-8);
}

.tabs-container {
  border-bottom: 1px solid var(--gray-4);
  z-index: 10;
}

.tab-button {
  padding: var(--space-3xs);
}

.tab-button.active {
  color: var(--orange-6);
  border-bottom: 3px solid var(--orange-5);
  cursor: text;
}
</style>
