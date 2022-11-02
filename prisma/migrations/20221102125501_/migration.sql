/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Roadmap` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,authToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Roadmap" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_authToken_key" ON "User"("email", "authToken");
