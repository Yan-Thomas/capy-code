import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const roadmapId = query.roadmap?.toString();
  const userId = query.user?.toString();
  const state = query.state?.toString() === "true" ? true : false;

  if (!roadmapId || !userId)
    return { message: "Missing roadmap or user id", status: "400" };

  const existingProgress = await prisma.roadmapProgress.findUnique({
    where: {
      userId_roadmapId: {
        userId: userId,
        roadmapId: roadmapId,
      },
    },
  });

  if (existingProgress) {
    await prisma.roadmapProgress.delete({
      where: {
        userId_roadmapId: {
          userId: userId,
          roadmapId: roadmapId,
        },
      },
    });

    await prisma.roadmapProgress.create({
      data: {
        isSelected: state,
        roadmapId: roadmapId,
        userId: userId,
      },
    });

    return;
  }

  await prisma.roadmapProgress.create({
    data: {
      isSelected: true,
      roadmapId: roadmapId,
      userId: userId,
    },
  });
});
