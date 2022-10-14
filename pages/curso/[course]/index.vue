<script setup lang="ts">
const route = useRoute();

const { data: courseData } = await useFetch(
  `/api/courses/${route.params.course}`
);

const course = courseData.value;
const articles = course?.articles;
const firstArticle = articles?.find((article) => article.order === 1);

if (!course || !firstArticle) {
  await navigateTo("/404", { redirectCode: 404 });
}

await navigateTo(`/curso/${course?.id}/${firstArticle?.id}`);
</script>
