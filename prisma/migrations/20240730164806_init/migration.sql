/*
  Warnings:

  - Made the column `firstname` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `firstname` VARCHAR(191) NOT NULL;
