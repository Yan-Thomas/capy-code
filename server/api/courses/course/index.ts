import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const courseId = query.course?.toString();
  const userId = query.user?.toString();

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      articles: true,
    },
  });

  const progress = await prisma.articleProgress.findMany({
    where: {
      userId: userId,
      article: {
        courseId: courseId,
      },
    },
  });

  if (!course) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Course not found" })
    );
  }

  return { course: course, progress: progress };
});
