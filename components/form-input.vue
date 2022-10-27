<script setup lang="ts">
const props = defineProps<{
  label: string;
  type: string;
}>();
</script>

<template>
  <label :for="props.label">{{ props.label }}</label>
  <input :id="props.label" :type="props.type" :name="props.label" />
</template>

<style scoped>
label {
  font-weight: bold;
  font-size: var(--step-0);
  margin-bottom: var(--space-2xs);
}

input {
  padding-inline: var(--space-s);
  padding-block: var(--space-2xs);
  border: 1px solid var(--gray-4);
  border-radius: 16px;
  background-color: var(--gray-0);
}
</style>
