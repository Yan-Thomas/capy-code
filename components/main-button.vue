<template>
  <button>
    <slot />
  </button>
</template>
<style scoped>
button {
  color: var(--gray-0);
  background-color: var(--orange-5);
  border-color: transparent;
  border-radius: 24px;
  padding-block: var(--space-3xs);
  padding-inline: var(--space-s);
}

button:hover {
  cursor: pointer;
  background-color: var(--orange-6);
}
</style>
