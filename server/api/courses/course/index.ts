import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const courseId = query.course?.toString();

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      articles: true,
    },
  });

  if (!course) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Course not found" })
    );
  }

  return course;
});
