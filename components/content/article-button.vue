<script setup lang="ts">
import sdk, { VM } from "@stackblitz/sdk";
const fsDiff = {
  create: {
    "index.html": `
<!DOCTYPE html>
<html>
    <head>
    <!-- tags meta irão aqui! -->
    </head>
    <body>
        <h1>Um título no HTML
    </body>
</html>
`,
  },
  destroy: [],
};

const vm = ref<VM>();

function applyCodeChanges() {
  if (!vm) return;
  vm.value?.applyFsDiff(fsDiff);
}

onMounted(async () => {
  const iframe = document.getElementById("codeEmbed") as HTMLIFrameElement;
  vm.value = await sdk.connect(iframe);
});
</script>
<template>
  <button @click="applyCodeChanges()">Me mostre!</button>
</template>
<style scoped>
button {
  color: var(--gray-0);
  background-color: var(--orange-5);
  border-color: transparent;
  border-radius: 24px;
  padding-block: var(--space-3xs);
  padding-inline: var(--space-s);
}

button:hover {
  cursor: pointer;
  background-color: var(--orange-6);
}
</style>
