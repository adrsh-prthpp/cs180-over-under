/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Bet` table. All the data in the column will be lost.
  - Added the required column `name` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "createdAt",
DROP COLUMN "creatorId",
DROP COLUMN "question",
ADD COLUMN     "expiry" INTEGER,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BetUser" (
    "userId" TEXT NOT NULL,
    "betId" TEXT NOT NULL,
    "choice" TEXT NOT NULL,

    CONSTRAINT "BetUser_pkey" PRIMARY KEY ("userId","betId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "BetUser" ADD CONSTRAINT "BetUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BetUser" ADD CONSTRAINT "BetUser_betId_fkey" FOREIGN KEY ("betId") REFERENCES "Bet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
