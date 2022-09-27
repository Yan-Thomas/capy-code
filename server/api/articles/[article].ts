import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const articleId = event.context.params.article;

  const article = await prisma.article.findUniqueOrThrow({
    where: {
      id: articleId,
    },
  });

  const previousArticle = await prisma.article.findFirst({
    where: {
      courseId: article?.courseId,
      order: article?.order - 1,
    },
  });

  const nextArticle = await prisma.article.findFirst({
    where: {
      courseId: article?.courseId,
      order: article?.order + 1,
    },
  });

  return {
    article,
    previous: previousArticle,
    next: nextArticle,
  };
});
