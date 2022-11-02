import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  if (!query.email || !query.name)
    return { message: "Missing email or name", code: "400" };

  const existingUser = await prisma.user.findUnique({
    where: {
      email: query.email.toString(),
    },
  });

  if (existingUser)
    return { message: "Existing user with this e-mail", code: "400" };

  const user = await prisma.user.create({
    data: {
      email: query.email.toString(),
      name: query.name.toString(),
    },
  });

  return {
    user,
    code: "200",
  };
});
