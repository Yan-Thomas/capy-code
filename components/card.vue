<script setup lang="ts">
const props = defineProps<{
  name: string;
  description: string;
  imageUrl: string;
}>();
</script>

<template>
  <div class="card">
    <img :src="props.imageUrl" alt="" />
    <div class="card-info">
      <h2>{{ props.name }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  border: 1px solid var(--gray-4);
  border-radius: 12px;
}

h2 {
  font-size: var(--step-0);
}

.card img {
  border-radius: 12px 12px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-info {
  border-top: 1px solid var(--gray-4);
  padding-inline: var(--space-2xs);
  padding-block: var(--space-xs);
}
</style>
