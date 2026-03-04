/*
  Warnings:

  - You are about to drop the `emailDate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "emailDate";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "EmailData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gmailId" TEXT NOT NULL,
    "snippet" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "EmailData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailData_gmailId_key" ON "EmailData"("gmailId");
