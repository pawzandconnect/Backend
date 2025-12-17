/*
  Warnings:

  - You are about to drop the column `likeCount` on the `comment_replies` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `viewCount` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comment_replies" DROP COLUMN "likeCount",
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "likeCount",
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "likeCount",
DROP COLUMN "viewCount",
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "view_count" INTEGER NOT NULL DEFAULT 0;
