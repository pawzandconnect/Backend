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
    return this.prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findById(id) {
    return this.prisma.post.findUnique({
      where: { id },
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

  async storeLike(data: LikedPost) {
    return this.prisma.likedPost.create({
      data,
    });
  }
}
