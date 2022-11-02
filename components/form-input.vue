<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  label: string;
  name: string;
  type: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="heading">
    <label :for="props.label">{{ props.label }}</label>
    <slot />
  </div>
  <input
    :id="props.label"
    :type="props.type"
    :name="props.name"
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
  margin-bottom: var(--space-s);
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
