<script setup lang="ts">
definePageMeta({
  layout: "login-form",
});

const page = ref("login");
const email = ref("");

function authLogin() {
  if (email.value !== "" && email.value.includes("@")) page.value = "loginAuth";
}
</script>

<template>
  <template v-if="page === 'login'">
    <h1>Inicie sua sessão</h1>
    <form class="flow-block">
      <form-input v-model="email" label="E-mail" type="text" />
      <div class="flow-block buttons">
        <main-button type="primary" :full-width="true" @click="authLogin">
          Continuar com E-mail
        </main-button>
        <main-button type="secondary" :full-width="true">
          Registrar-se
        </main-button>
      </div>
    </form>
  </template>
  <template v-if="page === 'loginAuth'">
    <h1>Inicie sua sessão</h1>
    <p>Enviamos um código de autenticação para seu e-mail.</p>
    <form class="flow-block">
      <form-input v-model="email" label="Código de autenticação" type="text" />
      <div class="flow-block buttons">
        <main-button type="primary" :full-width="true">
          Iniciar sessão
        </main-button>
        <main-button type="secondary" :full-width="true">
          Registrar-se
        </main-button>
      </div>
    </form>
  </template>
</template>

<style scoped>
h1,
p {
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
