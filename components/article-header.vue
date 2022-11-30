<script setup lang="ts">
import { Article, ArticleProgress } from ".prisma/client";

const props = defineProps<{
  courseName: string;
  courseId: string;
  currentArticle: Article;
  articles: Article[];
}>();

const isOpen = ref(false);

const { session } = await useSession();

function toggleNav() {
  isOpen.value = !isOpen.value;
}

const userId = session?.value?.user?.id;

const { data: progress, refresh: refreshProgress } = await useFetch<
  ArticleProgress[]
>("/api/progress/get/", {
  method: "get",
  params: {
    course: props.courseId,
    user: userId,
  },
});

function isFinished(id: string) {
  return (
    progress.value?.find(
      ({ articleId, isFinished }) => articleId === id && isFinished
    ) !== undefined
  );
}

async function updateProgress(id: string) {
  await useFetch("/api/progress/post/", {
    method: "post",
    params: {
      article: id,
      user: userId,
    },
  });
  refreshProgress();
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
      <p>
        {{ props.courseName }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20"
          width="20"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="article">{{ props.currentArticle.name }}</span>
      </p>
    </div>
    <span class="count"
      >{{ props.currentArticle.order }} / {{ props.articles.length }}</span
    >
  </div>
  <nav :class="{ open: isOpen }">
    <ul>
      <template v-for="{ id, order, name } in props.articles" :key="id">
        <li :class="{ active: id == currentArticle.id }">
          <NuxtLink :to="id">{{ order + ". " + name }}</NuxtLink>
          <button
            v-if="userId"
            class="finish-button"
            @click="updateProgress(id)"
          >
            <svg
              v-if="isFinished(id)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </template>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
}

.count {
  color: var(--gray-6);
}

.article {
  font-weight: normal;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: var(--space-3xs);
  padding-left: var(--space-2xs);
  border-bottom: 0.5px solid var(--gray-4);
}

li a {
  text-decoration: none;
  color: inherit;
}

li.active {
  background-color: var(--gray-2);
}

li.active a {
  font-weight: bold;
}

button {
  background-color: transparent;
  border: none;
  margin-right: var(--space-2xs);
  padding: 0;
  cursor: pointer;
}

.finish-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--gray-4);
  border-radius: 50%;
}
.finish-button:hover {
  background-color: var(--gray-3);
}
</style>
