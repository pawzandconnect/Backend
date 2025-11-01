-- CreateEnum
CREATE TYPE "ProfileVisibility" AS ENUM ('public', 'private');

-- CreateEnum
CREATE TYPE "PetEnergyLevel" AS ENUM ('low', 'moderate', 'high');

-- CreateEnum
CREATE TYPE "PetSpecies" AS ENUM ('dog', 'cat', 'bird', 'other');

-- CreateEnum
CREATE TYPE "PetSize" AS ENUM ('small', 'medium', 'large');

-- CreateEnum
CREATE TYPE "PetGender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "PetMediaType" AS ENUM ('image', 'video');

-- CreateTable
CREATE TABLE "pet_profiles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "media" JSONB[],
    "mediaType" "PetMediaType" NOT NULL,
    "species" "PetSpecies" NOT NULL,
    "gender" "PetGender" NOT NULL,
    "size" "PetSize" NOT NULL,
    "visibility" "ProfileVisibility" NOT NULL DEFAULT 'public',
    "energyLevel" "PetEnergyLevel",
    "vaccinationStatus" TEXT,
    "neuteredStatus" TEXT,
    "temperamentTags" TEXT[],
    "availableForAdoption" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pet_profiles_pkey" PRIMARY KEY ("id")
);
