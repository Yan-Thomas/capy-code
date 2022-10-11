<script setup lang="ts">
import { Article } from ".prisma/client";

const route = useRoute();

const { data: articleMeta } = await useFetch(
  `/api/articles/${route.params.article}`
);
const { data: allArticles } = await useFetch<Article[]>(
  `/api/articles?courseId=${route.params.course}`
);
const { data: articleMarkdown } = await useAsyncData("article-data", () =>
  queryContent().where({ id: route.params.article }).findOne()
);
</script>

<template>
  <section>
    <article-header
      :current-article="articleMeta!.article"
      :all-articles="allArticles!"
    />
    <article>
      <ContentRenderer class="flow-block" :value="articleMarkdown!">
        <template #empty>
          <p>Erro ao carregar conteúdo.</p>
        </template>
      </ContentRenderer>
    </article>
    <article-nav class="nav" :article-meta="articleMeta!" />
  </section>
  <div class="sandbox-iframe">
    <interactive-sandbox />
  </div>
</template>

<style>
html,
body {
  overflow-y: hidden;
}

main {
  height: calc(100% - 79px);
  display: flex;
  flex-direction: row;
}

section {
  padding-inline: var(--space-s);
  padding-top: var(--space-xl);
  overflow-y: scroll;
  width: 46%;
}

.sandbox-iframe {
  width: 54%;
}

.editor {
  height: calc(50% - 79px);
}
</style>
