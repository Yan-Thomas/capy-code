<template>
  <main>
    <div class="heading">
      <slot name="heading" />
    </div>
    <section class="view">
      <slot />
    </section>
  </main>
</template>

<style scoped>
main {
  padding-inline: var(--space-s);
  padding-bottom: var(--space-m);
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: var(--space-xl);
  margin-bottom: var(--space-s);
}

.view {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: var(--space-2xs);
}

@media (min-width: 640px) {
  .view {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .view {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1536px) {
  .view {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
