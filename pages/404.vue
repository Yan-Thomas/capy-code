<script setup lang="ts">
useHead({
  title: "Erro 404",
});
</script>

<template>
  <main>
    <div class="content flow-block">
      <h1>404</h1>
      <p>As capivaras comeram a página. Que tal uma carona?</p>
      <main-button class="button" type="primary" :arrow="true">
        Voltar a página principal
      </main-button>
    </div>
    <div class="image">
      <img src="/capivara-carro.png" alt="Capivara no volante de um carro" />
    </div>
  </main>
</template>

<style scoped>
main {
  max-height: calc(100% - 79px);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: var(--space-s);
}

.content {
  flex: 1.5;
  height: 100%;
}

.image {
  flex: 1;
}

.image img {
  width: 100%;
  height: 100%;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

h1 {
  color: var(--gray-9);
  font-size: 16rem;
  line-height: 1.2;
}

p {
  font-size: var(--step-1);
  font-weight: bold;
  --flow-space: 0;
}

button {
  --flow-space: var(--space-m);
}
</style>
