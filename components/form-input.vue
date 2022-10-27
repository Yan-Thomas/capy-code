<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  label: string;
  type: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <label :for="props.label">{{ props.label }}</label>
  <input
    :id="props.label"
    :type="props.type"
    :name="props.label"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped>
label,
input {
  color: var(--gray-7);
}

label {
  font-weight: bold;
  font-size: var(--step-0);
  --flow-space: var(--space-s);
}

input {
  padding-inline: var(--space-s);
  padding-block: var(--space-2xs);
  border: 1px solid var(--gray-4);
  border-radius: 16px;
  background-color: var(--gray-0);
}
</style>
