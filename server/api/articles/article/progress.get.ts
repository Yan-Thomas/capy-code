import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  if (!query.course || !query.user)
    return { message: "Course or User not found", code: "404" };

  const courseId = query.course.toString();
  const userId = query.user.toString();

  if (!userId)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "User not logged in" })
    );

  const articles = await prisma.article.findMany({
    where: {
      courseId: courseId,
    },
    select: {
      articleProgress: {
        where: {
          userId: userId,
        },
      },
    },
  });

  if (!articles) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Article not found" })
    );
  }

  return articles;
});
