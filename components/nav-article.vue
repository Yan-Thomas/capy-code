<script setup lang="ts">
import { Article } from ".prisma/client";

const props = defineProps<{
  currentArticle: Article;
  allArticles: Article[];
}>();

const isOpen = ref(false);

function toggleNav() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="nav-container">
    <div>
      <button @click="toggleNav()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20"
          width="20"
        >
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <p>{{ props.currentArticle.name }}</p>
    </div>
    <span
      >{{ props.currentArticle.order }} / {{ props.allArticles.length }}</span
    >
  </div>
  <nav :class="{ open: isOpen }">
    <ul>
      <li v-for="atc in props.allArticles" :key="atc.id">
        <a :href="atc.id" :class="{ active: atc.id == currentArticle.id }">{{
          atc.order + ". " + atc.name
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav-container {
  background-color: #ffffff;
  width: calc(45% - var(--space-s) - var(--space-s));
  position: fixed;
  top: calc(77.78px + var(--space-3xs) - 5px);
  padding-block: var(--space-3xs);
  border-bottom: 0.5px solid var(--gray-4);
}

svg {
  fill: var(--gray-8);
}

p {
  font-weight: bold;
}

span {
  font-weight: medium;
  color: var(--gray-6);
}

nav {
  visibility: hidden;
  position: fixed;
  top: calc(77.78px + 35.94px + 1px);
  z-index: 2;
  width: 25%;
  border-right: 0.5px solid var(--gray-4);
  padding-block: var(--space-3xs);
  margin-bottom: var(--space-s);
  background-color: #ffffff;
}

nav.open {
  visibility: visible;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding-block: var(--space-3xs);
  padding-left: var(--space-2xs);
  border-bottom: 0.5px solid var(--gray-4);
}

li:has(a.active) {
  background-color: var(--gray-2);
}

li a {
  text-decoration: none;
  color: inherit;
}
li a.active {
  font-weight: bold;
}

button {
  background-color: transparent;
  border: none;
  margin-right: var(--space-2xs);
  padding: 0;
  cursor: pointer;
}
</style>
