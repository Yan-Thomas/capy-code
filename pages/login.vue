<script setup lang="ts">
definePageMeta({
  layout: "login-form",
});

const { session, overwrite } = await useSession();

if (session.value?.user) {
  await navigateTo("/cursos");
}

const page = ref<"login" | "auth" | "signup">("login");

const name = ref("");
const email = ref("");
const confirmEmail = ref("");
const token = ref("");

const showInvalidEmailError = ref(false);
const showInvalidNameError = ref(false);
const showDifferentEmailsError = ref(false);
const showInvalidTokenError = ref(false);
const showSignUpSuccessfull = ref(false);

async function formSubmit() {
  showInvalidEmailError.value = false;
  showInvalidNameError.value = false;
  showDifferentEmailsError.value = false;
  showInvalidTokenError.value = false;
  showSignUpSuccessfull.value = false;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const isNameValid =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      name.value.trim()
    );
  const emailsMatch = email.value.trim() === confirmEmail.value.trim();

  if (page.value === "login") {
    if (!isEmailValid) {
      showInvalidEmailError.value = true;
      return;
    }

    const { data: login } = await useFetch("/api/auth/sendToken", {
      method: "post",
      params: {
        email: email.value.trim(),
      },
    });

    if (login.value?.code === "404") {
      showInvalidEmailError.value = true;
      return;
    }

    page.value = "auth";
  }

  if (page.value === "signup") {
    if (isNameValid && emailsMatch) {
      signUp();
    } else if (!isNameValid) showInvalidNameError.value = true;
    else if (!isEmailValid) showInvalidEmailError.value = true;
    else if (!emailsMatch) showDifferentEmailsError.value = true;
  }
}

function goToLogin() {
  page.value = "login";
  showInvalidEmailError.value = false;
  showInvalidNameError.value = false;
  showDifferentEmailsError.value = false;
}

function goToSignUp() {
  page.value = "signup";
  showInvalidEmailError.value = false;
  showInvalidNameError.value = false;
  showDifferentEmailsError.value = false;
}

async function verifyCode() {
  const { data: auth } = await useFetch("/api/auth", {
    params: {
      email: email.value.trim(),
      token: token.value.trim(),
    },
  });

  if (auth.value?.code === "404") {
    showInvalidTokenError.value = true;
  } else {
    await overwrite({ user: auth.value?.user });
    await navigateTo("/cursos");
  }
}

async function signUp() {
  const { data: signUp } = await useFetch("/api/auth/signup", {
    method: "post",
    params: {
      email: email.value.trim(),
      name: name.value.trim(),
    },
  });

  if (
    signUp.value?.code === "400" &&
    signUp.value.message?.startsWith("Existing")
  ) {
    showInvalidEmailError.value = true;
    return;
  }

  showSignUpSuccessfull.value = true;
  console.log(signUp.value?.code, signUp.value?.user);
}
</script>

<template>
  <template v-if="page === 'login'">
    <h1>Inicie sua sessão</h1>
    <form class="flow-block" @submit.prevent="formSubmit">
      <form-input v-model="email" label="E-mail" name="email" type="text">
        <span v-if="showInvalidEmailError" class="error"
          >E-mail inserido é inválido ou inexistente.</span
        >
      </form-input>
      <div class="flow-block buttons">
        <main-button type="primary" :full-width="true">
          Continuar com E-mail
        </main-button>
        <main-button type="secondary" :full-width="true" @click="goToSignUp">
          Registrar-se
        </main-button>
      </div>
    </form>
  </template>
  <template v-if="page === 'auth'">
    <h1>Inicie sua sessão</h1>
    <p>Verifique seu e-mail e insira o código de autenticação enviado.</p>
    <form class="flow-block" @submit.prevent="formSubmit">
      <form-input
        v-model="token"
        label="Código de autenticação"
        name="auth"
        type="text"
      >
        <span v-if="showInvalidTokenError" class="error"
          >Token inserido é inválido.</span
        >
      </form-input>
      <div class="flow-block buttons">
        <main-button type="primary" :full-width="true" @click="verifyCode">
          Iniciar sessão
        </main-button>
        <main-button type="secondary" :full-width="true" @click="goToLogin"
          >Voltar</main-button
        >
      </div>
    </form>
  </template>
  <template v-if="page === 'signup'">
    <h1>Registre-se</h1>
    <p v-if="showSignUpSuccessfull">
      Sua conta foi registrada, você pode iniciar sua sessão.
    </p>
    <form class="flow-block" @submit.prevent="formSubmit">
      <form-input v-model="name" label="Nome" name="name" type="text">
        <span v-if="showInvalidNameError" class="error"
          >Nome inserido é inválido.</span
        ></form-input
      >
      <form-input v-model="email" label="E-mail" name="email" type="text">
        <span v-if="showInvalidEmailError" class="error"
          >E-mail inserido é inválido ou já está em uso.</span
        >
      </form-input>
      <form-input
        v-model="confirmEmail"
        label="Confirmar E-mail"
        name="confirmEmail"
        type="text"
      >
        <span v-if="showDifferentEmailsError" class="error"
          >Os e-mails inseridos são diferentes.</span
        >
      </form-input>
      <div class="flow-block buttons">
        <main-button type="primary" :full-width="true">
          Registrar-se
        </main-button>
        <main-button type="secondary" :full-width="true" @click="goToLogin">
          Iniciar sessão
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

h1 {
  font-size: var(--step-1);
  margin-bottom: var(--space-m);
}

form {
  display: flex;
  flex-direction: column;
}

.buttons {
  margin-top: var(--space-s);
  --flow-space: var(--space-2xs);
}

.error {
  color: var(--red-7);
}

a {
  display: block;
  text-decoration: none;
}
</style>
