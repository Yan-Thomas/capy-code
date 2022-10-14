<script setup lang="ts">
const props = defineProps<{
  type: "primary" | "secondary";
}>();
</script>

<template>
  <button
    :class="{
      primary: props.type === 'primary',
      secondary: props.type === 'secondary',
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 24px;
  padding-block: var(--space-3xs);
  padding-inline: var(--space-s);
}

button:hover {
  cursor: pointer;
  transition: background-color 100ms ease-out;
}

button.primary {
  color: var(--gray-0);
  background-color: var(--orange-5);
  border-color: transparent;
}

button.primary:hover {
  background-color: var(--orange-6);
}

button.secondary {
  color: var(--blue-5);
  background-color: transparent;
  border: 2px solid var(--blue-5);
}

button.secondary:hover {
  background-color: var(--blue-5);
  color: var(--gray-0);
}

:slotted(svg) {
  margin-left: var(--space-3xs);
}
</style>
