/*
  Warnings:

  - You are about to drop the column `link` on the `Step` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Made the column `taskId` on table `Step` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Step` DROP FOREIGN KEY `Step_taskId_fkey`;

-- AlterTable
ALTER TABLE `Step` DROP COLUMN `link`,
    ADD COLUMN `duration` INTEGER NOT NULL,
    MODIFY `taskId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Step` ADD CONSTRAINT `Step_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
