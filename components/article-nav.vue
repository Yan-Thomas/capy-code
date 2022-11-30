<script setup lang="ts">
import { Article, ArticleProgress } from ".prisma/client";

const props = defineProps<{
  articleContext: {
    article: Article | undefined;
    previous: Article | undefined;
    next: Article | undefined;
  };
  courseId: string;
}>();

const { session } = await useSession();

const userId = session?.value?.user?.id;

const { data: progress } = await useFetch<ArticleProgress[]>(
  "/api/progress/get/",
  {
    method: "get",
    params: {
      course: props.courseId,
      user: userId,
    },
  }
);

function isFinished(id: string) {
  return (
    progress.value?.find(
      ({ articleId, isFinished }) => articleId === id && isFinished
    ) !== undefined
  );
}

async function finishArticle(id: string) {
  if (!userId || isFinished(id))
    return await navigateTo(props.articleContext?.next?.id);
  await useFetch(`/api/progress/post/`, {
    method: "post",
    params: {
      article: id,
      user: userId,
    },
  });
  await navigateTo(props.articleContext?.next?.id);
}
</script>
<template>
  <div class="article-buttons">
    <div>
      <NuxtLink
        v-if="props.articleContext.previous"
        :to="props.articleContext.previous.id"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
        Anterior
      </NuxtLink>
    </div>
    <div>
      <div>
        <NuxtLink
          v-if="props.articleContext.next"
          @click="finishArticle(props.articleContext.article!.id)"
          >Próximo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.article-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-3xs);
  border-top: 0.5px solid var(--gray-4);
  margin-top: var(--space-m);
  margin-bottom: var(--space-2xs);
}

a {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: var(--gray-7);
  font-weight: bold;
}

a:hover {
  cursor: pointer;
}

a svg {
  fill: var(--gray-7);
}
</style>
