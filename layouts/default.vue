<script setup lang="ts">
import sdk from "@stackblitz/sdk";
onMounted(async () => {
  const vm = await sdk.embedProject(
    "codeEmbed",
    {
      title: "Primeiras etapas HTML",
      description: "Começando a entender o HTML",
      template: "html",
      files: {
        "index.html": `
    <!DOCTYPE html>
    <html>
      <head>
      <!-- tags meta irão aqui! -->
      </head>
    <body>
      <h1>Um título no HTML</h1>
      <p>Um parágrafo no HTML</p>
    </body>
  </html>
  `,
        "desafio.json": `{
  "Possui h1": "true",
  "Possui p": "true"
}`,
      },
    },
    {
      height: "100%",
      width: "60%",
      hideExplorer: true,
      hideNavigation: true,
      hideDevTools: true,
    }
  );

  useState("vm", () => vm);
});
</script>

<template>
  <nav-header />
  <main>
    <section>
      <article>
        <ContentDoc class="flow-block" path="/" />
      </article>
    </section>
    <div id="codeEmbed"></div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 79px);
}

section {
  padding: var(--space-s);
  overflow-y: scroll;
  width: 50%;
}
</style>
