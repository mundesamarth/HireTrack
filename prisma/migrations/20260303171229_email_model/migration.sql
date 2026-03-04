-- CreateTable
CREATE TABLE "emailDate" (
    "id" TEXT NOT NULL,
    "snippet" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "emailDate_id_key" ON "emailDate"("id");
