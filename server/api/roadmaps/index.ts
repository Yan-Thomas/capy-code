import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const userId = query.user?.toString();

  const roadmaps = await prisma.roadmap.findMany({
    include: {
      courses: {
        select: {
          course: true,
        },
      },
    },
  });

  if (userId) {
    const roadmaps = await prisma.roadmap.findMany({
      include: {
        roadmapProgress: {
          where: {
            userId: userId,
          },
        },
        courses: {
          select: {
            course: {
              include: {
                articles: {
                  select: {
                    articleProgress: {
                      where: {
                        userId: userId,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return roadmaps;
  }

  if (!roadmaps) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Roadmaps not found" })
    );
  }

  return roadmaps;
});
