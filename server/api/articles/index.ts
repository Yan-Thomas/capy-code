import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  if (!query.courseId) return null;

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
