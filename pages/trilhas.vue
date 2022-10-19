<script setup lang="ts">
const { data: roadmaps } = await useFetch(`/api/roadmaps`);

useHead({
  title: "Trilhas",
});

const search = ref("");

const filteredRoadmaps = computed(() => {
  return roadmaps.value?.filter((roadmap) =>
    roadmap.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <NuxtLayout name="card-group">
    <template #heading>
      <h1>Trilhas</h1>
      <search-content v-model="search" placeholder="Pesquisar por trilhas..." />
    </template>
    <Card
      v-for="roadmap in filteredRoadmaps"
      :key="roadmap.id"
      :name="roadmap.name"
      :description="roadmap.description"
      :image-url="roadmap.imageUrl"
    />
  </NuxtLayout>
</template>
