import { Injectable, Logger } from '@nestjs/common';
import { CommunityRepository } from './community.repository';
import { CommentOnCommunityPostDto, CreateCommunityPostDto, VoteOnCommunityPostDto } from './dto';
import { AuthTokenClaim } from '@common/typings';
import { ExceptionFactory, ExceptionHandler, Helpers } from '@utils';
import { VoteValue } from '@prisma/client';

@Injectable()
export class CommunityService {
  private logger = new Logger(CommunityService.name);
  constructor(private readonly communityRepo: CommunityRepository) {}

  async createPost(dto: CreateCommunityPostDto, owner: AuthTokenClaim) {
    const { content, media, tags, title } = dto;

    if (!title || title.trim() === '') {
      throw ExceptionFactory.badRequest('Post title is required');
    }

    if (!content || content.trim() === '') {
      throw ExceptionFactory.badRequest('Post content is required');
    }

    if (media) {
      Helpers.basicValidateMedia(media);
    }

    try {
      // Write post to DB
      const opsResult = await this.communityRepo.create({
        title,
        content,
        author_id: owner.sub,
        ...(media && { media: JSON.parse(JSON.stringify(media)) }),
        ...(tags.length && { tags }),
      });
      return { message: 'Community post created', data: opsResult };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async comment(dto: CommentOnCommunityPostDto, owner: AuthTokenClaim) {
    const { content, post_id } = dto;

    if (!post_id || post_id.trim() === '') {
      throw ExceptionFactory.badRequest('Post ID is required to comment');
    }

    if (!content || content.trim() === '') {
      throw ExceptionFactory.badRequest('Comment text is required');
    }

    try {
      const post = await this.communityRepo.findById(post_id);
      if (!post) {
        throw ExceptionFactory.notFound("Post not found can't comment");
      }

      // Write comment to DB
      const opsResult = await this.communityRepo.writeComment({
        post_id,
        content,
        author_id: owner.sub,
      });
      return { message: 'You commented on a post', data: opsResult };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async voteOnPost(dto: VoteOnCommunityPostDto, owner: AuthTokenClaim) {
    const { post_id, vote_value } = dto;
    if (!post_id || post_id.trim() === '') {
      throw ExceptionFactory.badRequest('Post ID is required to comment');
    }

    if (!Object.values(VoteValue).includes(vote_value)) {
      throw ExceptionFactory.badRequest("Your vote value can either be 'up' or 'down'");
    }

    try {
      const post = await this.communityRepo.findById(post_id);
      if (!post) {
        throw ExceptionFactory.notFound("Post not found can't vote");
      }

      const result = await this.communityRepo.voteOnPostTx({
        post_id,
        author_id: owner.sub,
        vote_value,
      });

      const label =
        result.to === 'UP'
          ? ' Post upvoted'
          : result.to === 'DOWN'
            ? 'Post downvoted'
            : 'Vote removed';

      return {
        message: `${label}`,
        data: result,
      };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  // list, well paginated
  async fetchPosts() {}

  // retrieve post deets
  async getPost() {}

  // list, well paginated
  async getPostComments() {}
}
