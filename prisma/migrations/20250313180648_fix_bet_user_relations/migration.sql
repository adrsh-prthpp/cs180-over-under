/*
  Warnings:

  - You are about to drop the column `name` on the `Bet` table. All the data in the column will be lost.
  - Added the required column `question` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Made the column `creatorId` on table `Bet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_creatorId_fkey";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "name",
ADD COLUMN     "question" TEXT NOT NULL,
ALTER COLUMN "creatorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
