<script setup lang="ts">
interface ArticleWithProgress {
  articleProgress: [
    {
      isFinished: boolean;
      conclusionDate: string;
      userId: string;
      articleId: string;
    }
  ];
}

const props = defineProps<{
  type: "curso" | "artigo" | "trilha";
  name: string;
  description: string;
  progress?: ArticleWithProgress[];
}>();

// eslint-disable-next-line vue/no-setup-props-destructure
const maxProgress = props.progress?.length;
const actualProgress = props.progress?.filter(
  (article) => article?.articleProgress[0]?.isFinished
).length;
</script>

<template>
  <div class="card">
    <img
      :src="`https://og-gen-mocha.vercel.app/api/og?type=${props.type}&name=${props.name}&description=${props.description}`"
      alt=""
      loading="lazy"
    />
    <progress
      v-if="props.progress"
      :max="maxProgress"
      :value="actualProgress"
    ></progress>
    <div class="card-info">
      <h2>{{ props.name }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--gray-4);
  border-radius: 12px;
  height: 100%;
}

h2 {
  font-size: var(--step-0);
}

.card img {
  border-radius: 12px 12px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-info {
  border-top: 1px solid var(--gray-4);
  padding-inline: var(--space-2xs);
  padding-block: var(--space-xs);
}

progress {
  width: 100%;
  height: 8px;
  margin-bottom: -4px;
  border: none;
}

progress[value]::-webkit-progress-bar {
  background-color: transparent;
}

progress[value]::-webkit-progress-value {
  background-color: var(--green-5);
}
</style>
