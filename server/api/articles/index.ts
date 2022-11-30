import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.courseId) {
    const allArticles = await prisma.article.findMany({
      orderBy: {
        creationDate: "desc",
      },
    });

    return allArticles;
  }

  const courseArticles = await prisma.article.findMany({
    where: {
      courseId: query.courseId.toString(),
    },
    orderBy: {
      order: "asc",
    },
  });

  return courseArticles;
});
