import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const courses = await prisma.course.findMany({
    include: {
      _count: {
        select: { articles: true },
      },
    },
  });

  if (!courses) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Article not found" })
    );
  }

  return courses;
});