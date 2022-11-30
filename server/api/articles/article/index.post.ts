import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = event.context.session.user;
  const query = getQuery(event);

  if (!user) return { message: "User must be autenticated", code: "401" };
  if (!query.article || !query.state)
    return { message: "Article or state param missing", code: "400" };

  const articleId = query.article.toString();

  const articleProgress = await prisma.articleProgress.findUnique({
    where: {
      userId_articleId: {
        userId: user.id,
        articleId: articleId,
      },
    },
  });

  if (articleProgress) {
    const updatedProgress = await prisma.articleProgress.update({
      where: {
        userId_articleId: {
          userId: user.id,
          articleId: articleId,
        },
      },
      data: {
        isFinished: query.state.toString() === "finished" ? true : false,
      },
    });

    return updatedProgress;
  }

  const createdProgress = await prisma.articleProgress.create({
    data: {
      articleId: articleId,
      userId: user.id,
      isFinished: query.state.toString() === "finished" ? true : false,
    },
  });

  return createdProgress;
});
