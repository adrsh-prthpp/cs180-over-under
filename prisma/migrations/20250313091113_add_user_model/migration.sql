/*
  Warnings:

  - You are about to drop the column `expiry` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the `BetUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `question` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Made the column `creatorId` on table `Bet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "BetUser" DROP CONSTRAINT "BetUser_betId_fkey";

-- DropForeignKey
ALTER TABLE "BetUser" DROP CONSTRAINT "BetUser_userId_fkey";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "expiry",
DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "question" TEXT NOT NULL,
ALTER COLUMN "creatorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "BetUser";

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
