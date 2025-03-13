-- CreateTable
CREATE TABLE "BetUser" (
    "userId" TEXT NOT NULL,
    "betId" TEXT NOT NULL,
    "choice" TEXT NOT NULL,

    CONSTRAINT "BetUser_pkey" PRIMARY KEY ("userId","betId")
);

-- AddForeignKey
ALTER TABLE "BetUser" ADD CONSTRAINT "BetUser_betId_fkey" FOREIGN KEY ("betId") REFERENCES "Bet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BetUser" ADD CONSTRAINT "BetUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
