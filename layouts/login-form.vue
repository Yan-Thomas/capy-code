<template>
  <main>
    <section>
      <NuxtLink to="/">
        <img src="/logo.svg" alt="" />
        <span class="sr-only">Tela inicial</span>
      </NuxtLink>
      <div class="login-container">
        <slot />
      </div>
    </section>
  </main>
</template>

<style scoped>
main,
section {
  height: 100%;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 200px;
  height: 150px;
  object-fit: contain;
}

.login-container {
  width: 40vw;
  max-width: 650px;
  padding: var(--space-s);
  padding-top: var(--space-m);
  border: 1px solid var(--gray-4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}
</style>
