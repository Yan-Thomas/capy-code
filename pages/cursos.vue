<script setup lang="ts">
const { data } = await useFetch(`/api/courses/`);
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
