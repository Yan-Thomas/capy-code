import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const userId = query.user?.toString();
  const subscribedOnly = query.subscribed?.toString() === "true" ? true : false;

  const courses = await prisma.course.findMany({
    include: {
      _count: {
        select: { articles: true },
      },
    },
  });

  if (userId) {
    const courses = subscribedOnly
      ? await prisma.course.findMany({
          where: {
            articles: {
              some: {
                articleProgress: {
                  some: {
                    isFinished: true,
                    userId: userId,
                  },
                },
              },
            },
          },
          include: {
            _count: {
              select: { articles: true },
            },
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
        })
      : await prisma.course.findMany({
          include: {
            _count: {
              select: { articles: true },
            },
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
        });

    return courses;
  }

  if (!courses) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Article not found" })
    );
  }

  return courses;
});
