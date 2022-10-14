<script setup lang="ts">
const { data: courses } = await useFetch(`/api/courses`);
</script>

<template>
  <main>
    <div class="heading">
      <h1>Cursos</h1>
    </div>
    <section class="courses">
      <a
        v-for="course in courses"
        :key="course.id"
        :href="'/curso/' + course.id"
      >
        <div class="course-card">
          <span class="article-count">0 / {{ course._count.articles }}</span>
          <img src="https://web.dev/images/courses/html/card.svg" alt="" />
          <div class="card-info">
            <h2>{{ course.name }}</h2>
            <p>{{ course.description }}</p>
          </div>
        </div>
      </a>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-inline: var(--space-s);
}
.heading {
  padding-top: var(--space-xl);
  margin-bottom: var(--space-s);
}

h2 {
  font-size: var(--step-0);
}

.courses {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-2xs);
}

a {
  max-width: 450px;
  text-decoration: none;
}

.course-card {
  border: 1px solid var(--gray-4);
  border-radius: 12px;
}

.article-count {
  position: relative;
  left: 90%;
  top: 4px;
  color: var(--gray-6);
}

.course-card img {
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
</style>
