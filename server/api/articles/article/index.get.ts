import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.article) return { message: "Article not found", code: "404" };

  const articleId = query.article.toString();

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
