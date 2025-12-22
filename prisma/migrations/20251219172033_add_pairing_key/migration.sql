/*
  Warnings:

  - A unique constraint covering the columns `[pairing_key]` on the table `conversations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pairing_key` to the `conversations` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ParticipantStatus" AS ENUM ('requested', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "conversation_participants" ADD COLUMN     "status" "ParticipantStatus" NOT NULL DEFAULT 'requested';

-- AlterTable
ALTER TABLE "conversations" ADD COLUMN     "pairing_key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "conversations_pairing_key_key" ON "conversations"("pairing_key");
