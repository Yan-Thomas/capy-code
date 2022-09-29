<script setup lang="ts">
import { Article } from ".prisma/client";
import { VM } from "@stackblitz/sdk";
import embedStackBlitz from "~~/utils/stackEmbed";

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

onMounted(() => {
  if (!articleMarkdown.value?.project) return;
  embedStackBlitz("codeEmbed", articleMarkdown.value?.project);
});
</script>

<template>
  <div>
    <nav-header />
    <main>
      <section>
        <nav-article
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
        <article-buttons :article-meta="articleMeta!" />
      </section>
      <div id="codeEmbed">
        <p>Sem editor interativo nessa aula, quem sabe na próxima!</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 79px);
}

section {
  padding-inline: var(--space-s);
  padding-top: var(--space-xl);
  overflow-y: scroll;
  width: 46%;
}

div#codeEmbed {
  width: 54%;
  display: grid;
  place-items: center;
}
</style>
