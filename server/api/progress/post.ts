import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.user || !query.article)
    return { message: "User, Article or State not found", code: "404" };

  const userId = query.user.toString();
  const articleId = query.article.toString();

  if (!userId)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "User not logged in" })
    );

  const existingProgress = await prisma.articleProgress.findUnique({
    where: {
      userId_articleId: {
        userId: userId,
        articleId: articleId,
      },
    },
  });

  if (existingProgress) {
    await prisma.articleProgress.update({
      where: {
        userId_articleId: {
          userId: userId,
          articleId: articleId,
        },
      },
      data: {
        isFinished: !existingProgress.isFinished,
      },
    });
  } else {
    await prisma.articleProgress.create({
      data: {
        userId: userId,
        articleId: articleId,
        isFinished: true,
      },
    });
  }
});
