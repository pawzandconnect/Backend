/*
  Warnings:

  - A unique constraint covering the columns `[conversation_id,owner_id]` on the table `conversation_participants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "conversation_participants_conversation_id_owner_id_key" ON "conversation_participants"("conversation_id", "owner_id");
