/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `pet_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner_id` to the `pet_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pet_profiles" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "auth_provider" TEXT NOT NULL DEFAULT 'google',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_key" ON "Owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pet_profiles_owner_id_key" ON "pet_profiles"("owner_id");

-- AddForeignKey
ALTER TABLE "pet_profiles" ADD CONSTRAINT "pet_profiles_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
