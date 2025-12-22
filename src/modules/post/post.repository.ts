import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { LikedPost, Post } from '@prisma/client';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.post.create({ data });
  }

  async findAll() {
    return this.prisma.post.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
            bio: true,
          },
        },
      },
    });
  }

  async update(id, data: Partial<Post>) {
    return this.prisma.post.update({ where: { id }, data });
  }

  // async delete(id) {}

  async upsert(id, data) {
    return this.prisma.post.upsert({
      where: { id },
      update: data,
      create: data,
    });
  }

  // Custom methods - In association
  async findCommentById(commentId: string) {
    return this.prisma.comment.findUnique({ where: { id: commentId }, select: { id: true } });
  }

  async findCommentReplyById(commentReplyId: string) {
    return this.prisma.commentReply.findUnique({
      where: { id: commentReplyId },
      select: { id: true },
    });
  }

  async createComment(data) {
    return this.prisma.comment.create({
      data,
    });
  }

  async createCommentReply(data) {
    return this.prisma.commentReply.create({ data });
  }

  async storeReaction(data) {
    return this.prisma.reaction.create({
      data,
    });
  }

  async storeLikeAndIncrementCountWithTx(data: LikedPost) {
    const { comment_id, comment_reply_id, post_id } = data;
    // Validation: Exactly one entity must be provided
    const entityCount = [post_id, comment_id, comment_reply_id].filter(Boolean).length;

    if (entityCount === 0) {
      throw new Error('Must provide at least one entity ID to like');
    }

    if (entityCount > 1) {
      throw new Error('Can only like one entity at a time');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.likedPost.create({
        data,
      });

      if (post_id) {
        await tx.post.update({
          where: { id: post_id },
          data: { like_count: { increment: 1 } },
        });
      } else if (comment_id) {
        await tx.comment.update({
          where: { id: comment_id },
          data: { like_count: { increment: 1 } },
        });
      } else if (comment_reply_id) {
        await tx.commentReply.update({
          where: { id: comment_reply_id },
          data: { like_count: { increment: 1 } },
        });
      }
    });
  }
}
