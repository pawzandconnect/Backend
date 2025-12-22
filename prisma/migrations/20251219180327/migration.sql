/*
  Warnings:

  - A unique constraint covering the columns `[message_id,owner_id]` on the table `message_receipts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "message_receipts_message_id_owner_id_key" ON "message_receipts"("message_id", "owner_id");
