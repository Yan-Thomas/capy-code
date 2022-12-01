<script setup lang="ts">
const { session } = await useSession();

const { data: roadmaps, refresh: refreshRoadmaps } = await useFetch(
  `/api/roadmaps`,
  {
    params: {
      user: session.value?.user?.id,
    },
  }
);

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
      <roadmap-modal :roadmap="roadmap" :refresh-roadmaps="refreshRoadmaps">
        <Card
          type="trilha"
          :name="roadmap.name"
          :description="roadmap.description"
        />
      </roadmap-modal>
    </template>
  </NuxtLayout>
</template>
