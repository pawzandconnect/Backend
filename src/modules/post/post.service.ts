import { Injectable, Logger } from '@nestjs/common';
import { ExceptionFactory, ExceptionHandler, Helpers } from '@utils';
import {
  CommentOnPostDto,
  CreatePostDto,
  LikeCommentDto,
  LikeCommentReplyDto,
  LikePostDto,
  ReactToCommentDto,
  ReactToPostDto,
  ReplyCommentDto,
} from './dto';
import { AuthTokenClaim } from '@common/typings';
import { PostRepository } from './post.repository';
import { Comment, CommentReply, LikedPost, Reaction, ReactionType } from '@prisma/client';

// NOTE: All interaction here are for pets,
// NOTE FOR ME: Ensure there's no N+1 Query, all request must be fast and process efficently
// Would have been easier to just fetch all in a single DB call, but I need to consider pagination
// Now I think cursor based pagination will shine better here.
@Injectable()
export class PostService {
  private logger = new Logger(PostService.name);
  constructor(private readonly postRepo: PostRepository) {}

  async create(dto: CreatePostDto, owner: AuthTokenClaim) {
    const { content, media } = dto;
    if (!content || content.trim() === '') {
      throw ExceptionFactory.badRequest('Post content is required to create a post');
    }
    // Validate if media is provided (but I think it should be required - Remind me to ask Sophia)
    if (media) {
      Helpers.basicValidateMedia(media);
    }

    const hydratedPostPayload = {
      content,
      author_id: owner.pet_id,
      ...(media && { media: JSON.parse(JSON.stringify(dto.media)) }),
    };
    try {
      const createdPost = await this.postRepo.create(hydratedPostPayload);
      return { message: 'Post created', data: createdPost };
    } catch (e) {
      this.logger.log('An error occured while creating post', e.message);
      ExceptionHandler.handle(e);
    }
  }

  async comment(dto: CommentOnPostDto, owner: AuthTokenClaim) {
    const { content, post_id } = dto;
    if (!content || content.trim() === '') {
      throw ExceptionFactory.badRequest('Comment text is required');
    }
    if (!post_id || post_id.trim() === '') {
      throw ExceptionFactory.badRequest('Post ID is missing');
    }

    const post = await this.postRepo.findById(post_id);
    if (!post) {
      throw ExceptionFactory.notFound("Post not found, can't comment on it");
    }

    try {
      const createdPostComment = await this.postRepo.createComment({
        content,
        post_id,
        author_id: owner.pet_id,
      } as Comment);
      return { message: 'You commented on a post', data: createdPostComment };
    } catch (e) {
      this.logger.log('An error occured while commenting on post', e.message);
      ExceptionHandler.handle(e);
    }
  }

  async replyComment(dto: ReplyCommentDto, owner: AuthTokenClaim) {
    const { content, comment_id } = dto;
    if (!content || content.trim() === '') {
      throw ExceptionFactory.badRequest('Comment reply text is required');
    }
    if (!comment_id || comment_id.trim() === '') {
      throw ExceptionFactory.badRequest('Comment ID is missing');
    }

    const comment = await this.postRepo.findCommentById(comment_id);
    if (!comment) {
      throw ExceptionFactory.notFound("Comment not found, can't reply to it");
    }

    try {
      const createdCommentReply = await this.postRepo.createCommentReply({
        content,
        comment_id,
        author_id: owner.pet_id,
      } as CommentReply);
      return { message: 'You replied a comment', data: createdCommentReply };
    } catch (e) {
      this.logger.log('An error occured while replying comment', e.message);
      ExceptionHandler.handle(e);
    }
  }

  async reactToPost(dto: ReactToPostDto, owner: AuthTokenClaim) {
    const { post_id, type } = dto;
    if (!type) {
      throw ExceptionFactory.badRequest('A valid or supported reaction is required');
    }
    if (!Object.values(ReactionType).includes(type)) {
      throw ExceptionFactory.badRequest('A valid or supported reaction is required');
    }
    if (!post_id || post_id.trim() === '') {
      throw ExceptionFactory.badRequest('Post ID is missing');
    }

    const post = await this.postRepo.findById(post_id);
    if (!post) {
      throw ExceptionFactory.notFound("Post not found, can't react to it");
    }

    try {
      const createdPostReaction = await this.postRepo.storeReaction({
        post_id,
        type,
        author_id: owner.pet_id,
      } as Reaction);
      return { message: 'You reacted to a post', data: createdPostReaction };
    } catch (e) {
      this.logger.log('An error occured while reacting to post', e.message);
      ExceptionHandler.handle(e);
    }
  }

  async reactToComment(dto: ReactToCommentDto, owner: AuthTokenClaim) {
    const { type, comment_id, comment_reply_id } = dto;
    if (!type) {
      throw ExceptionFactory.badRequest('A valid or supported reaction is required');
    }
    if (!Object.values(ReactionType).includes(type)) {
      throw ExceptionFactory.badRequest('A valid or supported reaction is required');
    }

    if (comment_id) {
      if (!comment_id || comment_id.trim() === '') {
        throw ExceptionFactory.badRequest('Comment ID is missing');
      }
      const comment = await this.postRepo.findCommentById(comment_id);
      if (!comment) {
        throw ExceptionFactory.notFound("Comment not found, can't react to it");
      }
    }
    if (comment_reply_id) {
      if (!comment_reply_id || comment_reply_id.trim() === '') {
        throw ExceptionFactory.badRequest('Comment reply ID is missing');
      }
      const commentReply = await this.postRepo.findCommentReplyById(comment_reply_id);
      if (!commentReply) {
        throw ExceptionFactory.notFound("Comment reply not found, can't react to it");
      }
    }

    try {
      const createdPostReaction = await this.postRepo.storeReaction({
        type,
        author_id: owner.pet_id,
        ...(comment_id && { comment_id }),
        ...(comment_reply_id && { comment_reply_id }),
      } as Reaction);
      return { message: 'You reacted to a post', data: createdPostReaction };
    } catch (e) {
      this.logger.log('An error occured while reacting to comment', e.message);
      ExceptionHandler.handle(e);
    }
  }

  async likePost(dto: LikePostDto, owner: AuthTokenClaim) {
    const { post_id } = dto;
    if (!post_id || post_id.trim() === '') {
      throw ExceptionFactory.badRequest('Post ID is missing');
    }

    try {
      const likedPost = await this.postRepo.createComment({
        post_id,
        liked_by_id: owner.pet_id,
      } as LikedPost);
      return { message: 'You liked a post', data: likedPost };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async likeComment(dto: LikeCommentDto, owner: AuthTokenClaim) {
    const { comment_id } = dto;
    if (!comment_id || comment_id.trim() === '') {
      throw ExceptionFactory.badRequest('Comment ID is missing');
    }

    try {
      const likedPost = await this.postRepo.createComment({
        comment_id,
        liked_by_id: owner.pet_id,
      } as LikedPost);
      return { message: 'You liked a post', data: likedPost };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async likeCommentReply(dto: LikeCommentReplyDto, owner: AuthTokenClaim) {
    const { comment_reply_id } = dto;
    if (!comment_reply_id || comment_reply_id.trim() === '') {
      throw ExceptionFactory.badRequest('Comment reply ID is missing');
    }

    try {
      const likedPost = await this.postRepo.createComment({
        comment_reply_id,
        liked_by_id: owner.pet_id,
      } as LikedPost);
      return { message: 'You liked a post', data: likedPost };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  // async getComments() {}
  // async getCommentReplies() {}
}
