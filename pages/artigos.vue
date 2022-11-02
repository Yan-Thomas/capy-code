<script setup lang="ts">
const { data: articles } = await useFetch(`/api/articles`);

useHead({
  title: "Artigos",
});

const search = ref("");

const filteredArticles = computed(() => {
  return articles.value?.filter(
    (article) =>
      article.name.toLowerCase().includes(search.value.toLowerCase()) &&
      !article.isHidden
  );
});
</script>

<template>
  <NuxtLayout name="card-group">
    <template #heading>
      <h1>Artigos</h1>
      <search-content v-model="search" placeholder="Pesquisar por artigos..." />
    </template>
    <NuxtLink
      v-for="article in filteredArticles"
      :key="article.id"
      :to="'/curso/' + article.courseId + '/' + article.id"
    >
      <Card
        :name="article.name"
        :description="article.description"
        :image-url="`/api/generateImage?type=artigo&description=${article.description}&name=${article.name}`"
      />
    </NuxtLink>
  </NuxtLayout>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
