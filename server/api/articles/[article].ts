import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const articleId = event.context.params.article;

  const article = await prisma.article.findUnique({
    where: {
      id: articleId,
    },
  });

  if (!article) {
    return sendError(
      event,
      createError({ statusCode: 404, statusMessage: "Article not found" })
    );
  }

  return article;
});
