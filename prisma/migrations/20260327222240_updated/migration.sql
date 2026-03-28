/*
  Warnings:

  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "positionTitle" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT,
    "interviewDate" DATETIME,
    "emailId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("companyName", "createdAt", "emailId", "id", "interviewDate", "location", "positionTitle", "status", "updatedAt") SELECT "companyName", "createdAt", "emailId", "id", "interviewDate", "location", "positionTitle", "status", "updatedAt" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_emailId_key" ON "Application"("emailId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
