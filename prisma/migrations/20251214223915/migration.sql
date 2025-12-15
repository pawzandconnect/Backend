/*
  Warnings:

  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('heart', 'laugh', 'wow', 'sad', 'angry', 'fire', 'clap', 'celebrate');

-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('google', 'apple');

-- DropForeignKey
ALTER TABLE "public"."pet_profiles" DROP CONSTRAINT "pet_profiles_owner_id_fkey";

-- AlterTable
ALTER TABLE "pet_profiles" ADD COLUMN     "display_picture" TEXT,
ADD COLUMN     "owner_account_deleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "species" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "media_type" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Owner";

-- CreateTable
CREATE TABLE "owners" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "auth_provider" TEXT NOT NULL DEFAULT 'google',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "deactivated" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "looking_for" TEXT[],
    "preferred_meetup_locations" TEXT[],
    "visibility" "ProfileVisibility" NOT NULL DEFAULT 'private',
    "travel_radius" INTEGER,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "city" TEXT,
    "state" TEXT,
    "zip_code" TEXT,
    "country" TEXT,
    "bio" TEXT,
    "display_name" TEXT,
    "display_picture" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "media" JSONB[],
    "author_id" TEXT NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liked_posts" (
    "id" TEXT NOT NULL,
    "liked_by_id" TEXT NOT NULL,
    "post_id" TEXT,
    "comment_id" TEXT,
    "comment_reply_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "liked_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_replies" (
    "id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reactions" (
    "id" TEXT NOT NULL,
    "type" "ReactionType" NOT NULL,
    "post_id" TEXT,
    "comment_id" TEXT,
    "comment_reply_id" TEXT,
    "author_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_email_key" ON "owners"("email");

-- CreateIndex
CREATE INDEX "posts_author_id_idx" ON "posts"("author_id");

-- CreateIndex
CREATE INDEX "posts_author_id_created_at_idx" ON "posts"("author_id", "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "liked_posts_liked_by_id_post_id_key" ON "liked_posts"("liked_by_id", "post_id");

-- CreateIndex
CREATE UNIQUE INDEX "liked_posts_liked_by_id_comment_id_key" ON "liked_posts"("liked_by_id", "comment_id");

-- CreateIndex
CREATE UNIQUE INDEX "liked_posts_liked_by_id_comment_reply_id_key" ON "liked_posts"("liked_by_id", "comment_reply_id");

-- CreateIndex
CREATE INDEX "comments_author_id_idx" ON "comments"("author_id");

-- CreateIndex
CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");

-- CreateIndex
CREATE INDEX "comments_post_id_created_at_idx" ON "comments"("post_id", "created_at");

-- CreateIndex
CREATE INDEX "comments_author_id_created_at_idx" ON "comments"("author_id", "created_at");

-- CreateIndex
CREATE INDEX "comment_replies_author_id_comment_id_idx" ON "comment_replies"("author_id", "comment_id");

-- CreateIndex
CREATE INDEX "comment_replies_comment_id_created_at_idx" ON "comment_replies"("comment_id", "created_at");

-- CreateIndex
CREATE INDEX "reactions_post_id_type_idx" ON "reactions"("post_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "reactions_author_id_post_id_type_key" ON "reactions"("author_id", "post_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "reactions_author_id_comment_id_type_key" ON "reactions"("author_id", "comment_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "reactions_author_id_comment_reply_id_type_key" ON "reactions"("author_id", "comment_reply_id", "type");

-- AddForeignKey
ALTER TABLE "pet_profiles" ADD CONSTRAINT "pet_profiles_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "owners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pet_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_posts" ADD CONSTRAINT "liked_posts_liked_by_id_fkey" FOREIGN KEY ("liked_by_id") REFERENCES "pet_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_posts" ADD CONSTRAINT "liked_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_posts" ADD CONSTRAINT "liked_posts_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_posts" ADD CONSTRAINT "liked_posts_comment_reply_id_fkey" FOREIGN KEY ("comment_reply_id") REFERENCES "comment_replies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pet_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_replies" ADD CONSTRAINT "comment_replies_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_replies" ADD CONSTRAINT "comment_replies_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pet_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "pet_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_comment_reply_id_fkey" FOREIGN KEY ("comment_reply_id") REFERENCES "comment_replies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
