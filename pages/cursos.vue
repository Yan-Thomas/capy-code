<script setup lang="ts">
const { data: courses } = await useFetch(`/api/courses`);

useHead({
  title: "Cursos",
});

const search = ref("");

const filteredCourses = computed(() => {
  return courses.value?.filter((course) =>
    course.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <NuxtLayout name="card-group">
    <template #heading>
      <h1>Cursos</h1>
      <search-content v-model="search" placeholder="Pesquisar por cursos..." />
    </template>
    <NuxtLink
      v-for="course in filteredCourses"
      :key="course.id"
      :to="'/curso/' + course.id"
    >
      <Card
        :name="course.name"
        :description="course.description"
        :image-url="course.imageUrl"
      />
    </NuxtLink>
  </NuxtLayout>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
