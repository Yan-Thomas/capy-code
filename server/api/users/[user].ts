import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = event.context.params.user;

  const user = prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      socials: true,
      roadmaps: {
        include: {
          roadmap: {
            include: {
              courses: {
                include: {
                  course: true,
                },
              },
            },
          },
        },
      },
      _count: {
        select: { articles: true, challenges: true },
      },
    },
  });

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "User not found" })
    );
  }

  return user;
});
