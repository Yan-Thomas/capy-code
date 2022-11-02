/*
  Warnings:

  - You are about to drop the column `emailConfirmationCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isEmailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordRecoveryToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailConfirmationCode",
DROP COLUMN "isEmailVerified",
DROP COLUMN "passwordRecoveryToken";
