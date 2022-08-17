<script setup lang="ts">
const challengeStatus = JSON.parse(`{
  "Possui h1": "true",
  "Possui p": "true"
}`);
</script>

<template>
  <div>
    <h3>Resultados do desafio</h3>
    <template v-for="(value, key) of challengeStatus" :key="key">
      <div class="challenge flow-inline">
        <input :checked="value" type="checkbox" disabled />
        <span>{{ key }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
div {
  padding: var(--space-2xs);
  border: 1px solid var(--gray-4);
}

h3 {
  padding-block: var(--space-3xs);
}

.challenge {
  display: block;
}
</style>
