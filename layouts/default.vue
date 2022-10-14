<template>
  <nav-header />
  <slot />
</template>

<style scoped>
:slotted(main) {
  min-height: calc(100% - 79px);
}
</style>
