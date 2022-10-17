<script setup lang="ts">
import { SandpackBundlerFiles } from "@codesandbox/sandpack-client";

const route = useRoute();

const { data: courseData } = await useFetch(
  `/api/courses/${route.params.course}`
);

const course = courseData.value;
const articles = course?.articles;
const article = articles?.find(
  (article) => article.id === route.params.article
);

if (!course || !article) {
  await navigateTo("/404", { redirectCode: 404 });
}

const index = articles?.findIndex((art) => article?.id === art.id);

const context = {
  article,
  /* eslint-disable */
  previous: articles![index! - 1],
  next: articles![index! + 1]
  /* eslint-enable */
};

const { data: content } = await useAsyncData("article-content", () =>
  queryContent().where({ id: route.params.article }).findOne()
);

const path = content?.value?.__path;
const folder = path?.substring(0, path.lastIndexOf("/"));

const { data: sandboxData } = await useAsyncData("article-code", () =>
  queryContent(folder).where({ _extension: "json" }).findOne()
);

let codeData: { files: SandpackBundlerFiles; entryFile: string } | null = null;

if (sandboxData.value && article) {
  codeData = sandboxData.value[article.id];
}
</script>

<template>
  <main>
    <section>
      <article-header
        :course-name="course!.name"
        :current-article="article!"
        :articles="articles!"
      />
      <article>
        <ContentRenderer class="flow-block" :value="content!">
          <template #empty>
            <p>Erro ao carregar conteúdo.</p>
          </template>
        </ContentRenderer>
      </article>
      <article-nav class="nav" :article-context="context" />
    </section>
    <div :class="{ inactive: !codeData }" class="sandbox-iframe">
      <interactive-sandbox
        v-if="codeData"
        :files="codeData!.files"
        :entry-file="codeData!.entryFile"
      />
      <p v-else>Sem editor de código para esta aula!</p>
    </div>
  </main>
</template>

<style scoped>
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

.sandbox-iframe.inactive {
  display: grid;
  place-items: center;
}

.editor {
  height: calc(50% - 79px);
}
</style>
