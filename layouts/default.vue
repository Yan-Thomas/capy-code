<template>
  <div>
    <nav-header />
    <slot />
  </div>
</template>

<style scoped>
div {
  height: 100%;
}

:slotted(main) {
  min-height: calc(100% - 79px);
}
</style>
