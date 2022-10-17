<script setup lang="ts">
const props = defineProps<{
  type: "primary" | "secondary";
  arrow?: boolean;
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
    <svg
      v-if="arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path
        fill-rule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clip-rule="evenodd"
      />
    </svg>
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

:slotted(svg),
svg {
  margin-left: var(--space-3xs);
}
</style>
