/*
  Warnings:

  - Made the column `views` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `views` INTEGER NOT NULL DEFAULT 0;
