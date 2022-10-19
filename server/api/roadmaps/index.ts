import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const roadmaps = await prisma.roadmap.findMany({
    include: {
      courses: true,
    },
  });

  if (!roadmaps) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Roadmaps not found" })
    );
  }

  return roadmaps;
});
