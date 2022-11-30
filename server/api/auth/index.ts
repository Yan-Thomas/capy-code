import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.email || !query.token)
    return { message: "Missing email or token", code: "400" };

  const user = await prisma.user.findUnique({
    where: {
      email_authToken: {
        email: query.email.toString(),
        authToken: query.token.toString(),
      },
    },
  });

  if (user === null) return { message: "Not found", code: "404" };

  return {
    user,
    code: "200",
  };
});
