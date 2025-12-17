import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { CommunityPost } from '@prisma/client';
import { Helpers } from '@utils';

@Injectable()
export class CommunityRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.communityPost.create({ data });
  }

  async findAll() {
    return this.prisma.communityPost.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id) {
    return this.prisma.communityPost.findUnique({
      where: { id },
    });
  }

  async update(id, data: Partial<CommunityPost>) {
    return this.prisma.communityPost.update({ where: { id }, data });
  }

  async writeComment(data) {
    return this.prisma.communityComment.create({
      data,
    });
  }

  async voteOnPostTx(params: { post_id: string; author_id: string; vote_value: 'up' | 'down' }) {
    const { post_id, author_id, vote_value } = params;

    return this.prisma.$transaction(async (tx) => {
      const existingVote = await tx.communityPostVote.findUnique({
        where: {
          post_id_author_id: { post_id, author_id },
        },
      });

      const from = Helpers.getVoteState(existingVote?.value);
      const to = Helpers.getVoteState(vote_value);

      // Same vote → treat as removal
      const finalTo = from === to ? 'NONE' : to;

      const postUpdate = Helpers.getPostUpdateForTransition(from, finalTo);
      if (!postUpdate) return null;

      if (!existingVote && finalTo !== 'NONE') {
        await tx.communityPostVote.create({
          data: { post_id, author_id, value: vote_value },
        });
      } else if (existingVote && finalTo === 'NONE') {
        await tx.communityPostVote.delete({
          where: { id: existingVote.id },
        });
      } else if (existingVote) {
        await tx.communityPostVote.update({
          where: { id: existingVote.id },
          data: { value: vote_value },
        });
      }

      await tx.communityPost.update({
        where: { id: post_id },
        data: postUpdate,
      });

      return { from, to: finalTo };
    });
  }
}
