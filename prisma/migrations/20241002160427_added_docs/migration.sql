/*
  Warnings:

  - You are about to drop the column `isTwoFactorEnabled` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isTwoFactorEnabled",
ADD COLUMN     "reviewDocUrl" TEXT,
ADD COLUMN     "startDocUrl" TEXT;
