/*
  Warnings:

  - Added the required column `link` to the `Social` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Social` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Social" ADD COLUMN     "link" VARCHAR(500) NOT NULL,
ADD COLUMN     "name" VARCHAR(200) NOT NULL;
