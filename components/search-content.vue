<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="props.modelValue"
    :placeholder="props.placeholder"
    type="text"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped>
input {
  width: 100%;
  max-width: 300px;
  padding-left: var(--space-s);
  padding-right: calc(var(--space-s) + 20px);
  background: url("/search-icon.svg") no-repeat right;
  background-position-x: calc(100% - 20px);
  background-size: 20px;
  border: 1px solid var(--gray-4);
  border-radius: 36px;
}
</style>
