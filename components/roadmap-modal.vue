<script setup lang="ts">
import { Roadmap } from "@prisma/client";
import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData";

const props = defineProps<{
  roadmap: Roadmap;
  refreshRoadmaps: (opts?: AsyncDataExecuteOptions) => Promise<void>;
}>();

const open = ref(false);

const { session } = await useSession();

async function updateRoadmapSubscription(state: boolean) {
  await useFetch("/api/roadmaps/roadmap", {
    method: "post",
    params: {
      roadmap: props.roadmap.id,
      user: session.value?.user?.id,
      state: state,
    },
  });
  await props.refreshRoadmaps();
}
</script>

<template>
  <button class="open-modal" @click="open = true">
    <slot />
  </button>
  <Teleport to="body">
    <div v-if="open === true" class="container">
      <div class="heading">
        <h3>{{ props.roadmap.name }}</h3>
        <div class="flow-inline">
          <main-button
            v-if="props.roadmap?.roadmapProgress[0]?.isSelected"
            type="secondary"
            @click="updateRoadmapSubscription(false)"
            >Sair da Trilha</main-button
          >
          <main-button
            v-else
            type="primary"
            :arrow="true"
            @click="updateRoadmapSubscription(true)"
            >Entrar na Trilha</main-button
          >
          <button class="close-modal" @click="open = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="roadmap-courses">
        <template v-for="{ course } in props.roadmap?.courses" :key="course.id">
          <NuxtLink :to="'/curso/' + course.id">
            <Card
              type="curso"
              :name="course.name"
              :description="course.description"
              :progress="course?.articles"
            />
          </NuxtLink>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
a {
  text-decoration: none;
}

svg {
  fill: var(--gray-8);
}

svg:hover {
  fill: var(--gray-9);
}

.open-modal {
  cursor: pointer;
  background: none;
  border: none;
  text-decoration: none;
  text-align: left;
  padding: 0;
}

.close-modal {
  cursor: pointer;
  background: none;
  border: none;
}

.container {
  position: fixed;
  z-index: 999;
  width: 70vw;
  height: 70vh;
  top: calc(50% - 35vh);
  left: calc(50% - 35vw);
  padding: var(--space-s);
  border: 1px solid var(--gray-4);
  border-radius: 12px;
  background-color: #ffffff;
  overflow-y: auto;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--space-s);
}

.heading div {
  display: flex;
  flex-direction: row;
}

.roadmap-courses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: var(--space-2xs);
}
</style>
