<script setup lang="ts">
const route = useRoute();

const { session } = await useSession();

const { data: courseData } = await useFetch(`/api/courses/course`, {
  params: {
    course: route.params.course,
    userId: session.value.user.id,
  },
});

const course = courseData.value;
const progress = course?.progress;
const articles = course?.course.articles;
const firstArticle = articles?.find((article) => article.order === 1);

if (!course || !firstArticle) {
  await navigateTo("/404", { redirectCode: 404 });
}

useHead({
  title: course?.course.name,
  meta: [
    {
      property: "og:image",
      content: `https://og-gen-mocha.vercel.app/api/og?type=curso&name=${course?.course.name}&description=${course?.course.description}`,
    },
  ],
});

await navigateTo(`/curso/${course?.course.id}/${firstArticle?.id}`);
</script>

<template>Redirecionando para página do curso...</template>
