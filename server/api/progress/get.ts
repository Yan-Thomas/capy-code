import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.course || !query.user)
    return { message: "Course or User not found", code: "404" };

  const courseId = query.course.toString();
  const userId = query.user.toString();

  if (!userId)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "User not logged in" })
    );

  const progress = await prisma.articleProgress.findMany({
    where: {
      article: {
        courseId: courseId,
      },
      userId: userId,
    },
  });

  return progress;
});
