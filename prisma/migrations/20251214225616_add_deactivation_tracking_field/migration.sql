/*
  Warnings:

  - The `auth_provider` column on the `owners` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ActionTakenBy" AS ENUM ('user', 'system', 'admin');

-- AlterTable
ALTER TABLE "owners" ADD COLUMN     "deactivated_at" TIMESTAMP(3),
ADD COLUMN     "deactivated_by" "ActionTakenBy",
ADD COLUMN     "deleted_by" "ActionTakenBy",
DROP COLUMN "auth_provider",
ADD COLUMN     "auth_provider" "AuthProvider" NOT NULL DEFAULT 'google';
