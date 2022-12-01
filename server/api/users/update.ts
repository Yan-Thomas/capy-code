import { PrismaClient, Social } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const body = await readBody(event);

  if (!query.user || !query.name || !query.description)
    return { message: "User not found", code: "404" };

  const userId = query.user.toString();
  const name = query.name.toString();
  const description = query.description.toString();
  const socials = body.socials;

  if (!userId)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "User not logged in" })
    );

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: name,
      description: description,
    },
  });

  await prisma.social.deleteMany({
    where: {
      userId: userId,
    },
  });

  socials.forEach(async (social: Social) => {
    await prisma.social.create({
      data: {
        link: social.link,
        name: social.name,
        userId: userId,
      },
    });
  });

  return { message: "User updated sucessfully", statusCode: "200" };
});
