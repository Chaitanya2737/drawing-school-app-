/*
  Warnings:

  - The primary key for the `SchoolSetUp` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SchoolSetUp` table. All the data in the column will be lost.
  - Made the column `systemId` on table `SchoolSetUp` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchoolSetUp" (
    "systemId" TEXT NOT NULL PRIMARY KEY,
    "school_name" TEXT NOT NULL,
    "support_Email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_Number" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SchoolSetUp" ("address", "contact_Number", "createdAt", "school_name", "support_Email", "systemId", "updatedAt") SELECT "address", "contact_Number", "createdAt", "school_name", "support_Email", "systemId", "updatedAt" FROM "SchoolSetUp";
DROP TABLE "SchoolSetUp";
ALTER TABLE "new_SchoolSetUp" RENAME TO "SchoolSetUp";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
