-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "looking_for" TEXT[],
ADD COLUMN     "preferred_meetup_locations" TEXT[],
ADD COLUMN     "state" TEXT,
ADD COLUMN     "travel_radius" INTEGER,
ADD COLUMN     "visibility" "ProfileVisibility" NOT NULL DEFAULT 'private',
ADD COLUMN     "zip_code" TEXT;
