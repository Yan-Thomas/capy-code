<script setup lang="ts">
useHead({
  title: "Sobre",
});

const { data: content } = await useAsyncData("about-content", () =>
  queryContent().where({ title: "Sobre o projeto" }).findOne()
);
</script>

<template>
  <main>
    <section>
      <article>
        <ContentRenderer class="flow-block" :value="content!">
          <template #empty>
            <p>Erro ao carregar conteúdo.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-block: var(--space-xl);
  padding-inline: var(--space-s);
}

section {
  max-width: 75ch;
  height: 100%;
  margin-inline: auto;
}
</style>
