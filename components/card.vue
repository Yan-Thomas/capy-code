<script setup lang="ts">
const props = defineProps<{
  type: "curso" | "artigo" | "trilha";
  name: string;
  description: string;
  imageUrl: string;
}>();
</script>

<template>
  <div class="card">
    <img
      :src="`https://og-gen-mocha.vercel.app/api/og?type=${props.type}&name=${props.name}&description=${props.description}`"
      alt=""
      loading="lazy"
    />
    <div class="card-info">
      <h2>{{ props.name }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--gray-4);
  border-radius: 12px;
  height: 100%;
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
