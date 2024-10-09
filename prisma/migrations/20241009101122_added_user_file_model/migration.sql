-- CreateEnum
CREATE TYPE "FilePurpose" AS ENUM ('REVIEW', 'START');

-- CreateTable
CREATE TABLE "UserFile" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "purpose" "FilePurpose" NOT NULL,

    CONSTRAINT "UserFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFile_url_key" ON "UserFile"("url");

-- AddForeignKey
ALTER TABLE "UserFile" ADD CONSTRAINT "UserFile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
