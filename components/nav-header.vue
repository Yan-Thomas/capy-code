<script setup lang="ts">
const { session, reset } = await useSession();
const isOpen = ref(false);

async function logOut() {
  await reset();
  navigateTo("/");
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            <img src="/logo.svg" alt="" />
            <span class="sr-only">Tela inicial</span>
          </NuxtLink>
        </li>
        <div class="flow-inline center">
          <li>
            <NuxtLink to="/cursos">Cursos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/artigos">Artigos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trilhas">Trilhas</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
          </li>
        </div>
        <div class="flow-inline right">
          <li>
            <a target="_blank" href="https://discord.gg/link">
              <span class="sr-only">Discord</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Yan-Thomas/capy-code">
              <span class="sr-only">GitHub</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <template v-if="session?.user">
              <button class="menu-button" @click="isOpen = !isOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div v-if="isOpen" class="menu">
                <ul class="flow-block">
                  <li>
                    <NuxtLink
                      :to="`/perfil/${session.user.id}`"
                      @click="isOpen = !isOpen"
                      >Seu perfil</NuxtLink
                    >
                  </li>
                  <li class="logout">
                    <button @click="logOut">Sair</button>
                  </li>
                </ul>
              </div>
            </template>
            <NuxtLink v-else to="/login">
              <main-button type="primary">Entrar</main-button>
            </NuxtLink>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding-block: var(--space-2xs);
  border-bottom: 0.5px solid var(--gray-4);
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-inline: var(--space-xs);
}

ul > * {
  justify-content: center;
}

ul .center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  --flow-space: var(--space-xs);
}

ul .right {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: right;
}

img {
  display: inline;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

svg {
  fill: var(--gray-8);
}

a {
  color: var(--gray-8);
  text-decoration: none;
}

a:hover {
  color: var(--gray-9);
}

.menu-button {
  all: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-button:hover svg {
  fill: var(--gray-9);
}

.menu {
  text-align: left;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 60px;
  padding-block: var(--space-2xs);
  border: 1px solid var(--gray-4);
}

.menu ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  --flow-space: var(--space-3xs);
}

.menu li {
  width: 100%;
  padding-inline: var(--space-s);
}

.menu li:hover {
  background-color: var(--gray-4);
}

.menu button {
  color: var(--gray-8);
  text-align: left;
}

.logout button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>
