<script setup lang="ts">
function changeTheme() {
  const colorMode = useColorMode();
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src="/logo.svg" alt="" />
            <span class="sr-only">Tela inicial</span>
          </a>
        </li>
        <div class="flow-inline center">
          <li>
            <a href="/cursos">Aprenda</a>
          </li>
          <li>
            <a href="/contribuidores">Contribuidores</a>
          </li>
          <li>
            <a href="/">Sobre</a>
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
            <button @click="changeTheme">
              <svg
                v-if="$colorMode.value === 'light'"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <path
                  fill="inherit"
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414Zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707Zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414ZM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-if="$colorMode.value === 'dark'"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <path
                  fill="inherit"
                  d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"
                />
              </svg>
            </button>
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

button {
  cursor: pointer;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
}

button:hover svg {
  fill: var(--gray-9);
}

a {
  color: var(--gray-8);
  text-decoration: none;
}

a:hover {
  color: var(--gray-9);
}
</style>