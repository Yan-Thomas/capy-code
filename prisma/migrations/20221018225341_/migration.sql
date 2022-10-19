-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "isHidden" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "description" DROP DEFAULT;
