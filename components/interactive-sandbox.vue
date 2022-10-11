<script setup lang="ts">
import { SandpackClient } from "@codesandbox/sandpack-client";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

const code = `<!DOCTYPE html>
<html>
<body>
<p>Teste</p>
</body>
</html>
`;

const extensions = [html()];

onMounted(() => {
  const client = new SandpackClient(
    "#codeEmbed",
    {
      files: {
        "/index.html": {
          code: `<!DOCTYPE HTML><html><head></head><body><p>Teste</p></body></html>`,
        },
      },
      entry: "/index.html",
      dependencies: {},
    },
    {
      width: "100%",
      height: "40%",
      showOpenInCodeSandbox: false,
    }
  );
});
</script>

<template>
  <div class="editor">
    <Codemirror
      v-model="code"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :style="{ height: '100%' }"
    />
  </div>
  <div class="divider">Resultado</div>
  <div id="codeEmbed"></div>
</template>

<style>
.editor {
  display: block;
  overflow-y: auto;
}

#codeEmbed {
  width: 100%;
  height: 50%;
}

.divider {
  padding: var(--space-2xs);
  border-block: 1px solid var(--gray-4);
}
</style>
