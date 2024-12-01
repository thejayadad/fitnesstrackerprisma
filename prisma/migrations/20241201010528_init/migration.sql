/*
  Warnings:

  - You are about to alter the column `caloriesBurned` on the `Exercise` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `protein` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `carbs` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `fats` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `entryDate` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entryDate` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "entryDate" TEXT NOT NULL,
ALTER COLUMN "caloriesBurned" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "entryDate" TEXT NOT NULL,
ALTER COLUMN "protein" SET DATA TYPE INTEGER,
ALTER COLUMN "carbs" SET DATA TYPE INTEGER,
ALTER COLUMN "fats" SET DATA TYPE INTEGER;
