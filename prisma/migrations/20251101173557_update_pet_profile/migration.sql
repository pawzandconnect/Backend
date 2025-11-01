/*
  Warnings:

  - You are about to drop the column `createdAt` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `availableForAdoption` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `energyLevel` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `mediaType` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `neuteredStatus` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `temperamentTags` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `pet_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `vaccinationStatus` on the `pet_profiles` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `media_type` to the `pet_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `pet_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "files" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pet_profiles" DROP COLUMN "availableForAdoption",
DROP COLUMN "createdAt",
DROP COLUMN "energyLevel",
DROP COLUMN "mediaType",
DROP COLUMN "neuteredStatus",
DROP COLUMN "temperamentTags",
DROP COLUMN "updatedAt",
DROP COLUMN "vaccinationStatus",
ADD COLUMN     "available_for_adoption" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "energy_level" "PetEnergyLevel",
ADD COLUMN     "media_type" "PetMediaType" NOT NULL,
ADD COLUMN     "neutered_status" TEXT,
ADD COLUMN     "temperament_tags" TEXT[],
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vaccination_status" TEXT;
