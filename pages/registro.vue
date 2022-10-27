<script setup>
definePageMeta({
  layout: "login-form",
});
</script>

<template>
  <h1>Registre-se</h1>
  <form class="flow-block">
    <form-input label="Nome" type="text" />
    <form-input label="E-mail" type="text" />
    <form-input label="Confirmar E-mail" type="text" />
    <div class="flow-block buttons">
      <main-button type="primary" :full-width="true">
        Registrar-se
      </main-button>
      <main-button type="secondary" :full-width="true">
        Iniciar sessão
      </main-button>
    </div>
  </form>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: var(--space-s);
}

form {
  display: flex;
  flex-direction: column;
}

.buttons {
  margin-top: var(--space-m);
  --flow-space: var(--space-2xs);
}
</style>
