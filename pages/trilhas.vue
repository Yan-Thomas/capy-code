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
    <template v-for="roadmap in filteredRoadmaps" :key="roadmap.id">
      <roadmap-modal :name="roadmap.name" :courses="roadmap.courses">
        <Card
          :name="roadmap.name"
          :description="roadmap.description"
          :image-url="`/api/generateImage?type=trilha&description=${roadmap.description}&name=${roadmap.name}`"
        />
      </roadmap-modal>
    </template>
  </NuxtLayout>
</template>
