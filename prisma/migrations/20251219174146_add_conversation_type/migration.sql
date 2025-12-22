/*
  Warnings:

  - A unique constraint covering the columns `[type,pairing_key]` on the table `conversations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ConversationType" AS ENUM ('direct', 'group');

-- DropIndex
DROP INDEX "public"."conversations_pairing_key_key";

-- AlterTable
ALTER TABLE "conversations" ADD COLUMN     "type" "ConversationType" NOT NULL DEFAULT 'direct',
ALTER COLUMN "pairing_key" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "conversations_type_pairing_key_key" ON "conversations"("type", "pairing_key");
