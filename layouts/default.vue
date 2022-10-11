<template>
  <nav-header />
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  min-height: calc(100% - 79px);
}
</style>
