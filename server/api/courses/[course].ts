import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const courseId = event.context.params.course;
  const course = await prisma.course.findUniqueOrThrow({
    where: {
      id: courseId,
    },
  });

  return course;
});
