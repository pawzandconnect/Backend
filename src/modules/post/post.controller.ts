import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CommentOnPostDto,
  CreatePostDto,
  ReactToCommentDto,
  ReactToPostDto,
  ReplyCommentDto,
} from './dto';
import { CurrentUser } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';

@ApiBearerAuth()
@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('new')
  async handleCreatePost(@Body() dto: CreatePostDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.create(dto, owner);
  }

  @Post(':id/react')
  async handleReactToPost(
    @Param('id') post_id: string,
    @Body() dto: ReactToPostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.reactToPost({ post_id, ...dto }, owner);
  }

  @Post(':id/comments')
  async handleCommentOnPost(
    @Param('id') post_id: string,
    @Body() dto: CommentOnPostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.comment({ post_id, ...dto }, owner);
  }

  @Post(':id/like')
  async handleLikePost(@Param('id') post_id: string, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.likePost({ post_id }, owner);
  }

  @Post(':id/comments/:commentId/react')
  async handleReactToComment(
    @Param('commentId') comment_id: string,
    @Body() dto: ReactToCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.reactToComment({ comment_id, ...dto }, owner);
  }

  @Post(':id/comments/:commentId/like')
  async handleLikeComment(
    @Param('commentId') comment_id: string,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likeComment({ comment_id }, owner);
  }

  @Post(':id/comments/:commentId/reply')
  async handleReplyCommentOnPost(
    @Param('commentId') comment_id: string,
    @Body() dto: ReplyCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.replyComment({ comment_id, ...dto }, owner);
  }

  @Post(':id/comments/:commentId/replies/:replyId/like')
  async handleLikeCommentReply(
    @Param('replyId') comment_reply_id: string,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likeCommentReply({ comment_reply_id }, owner);
  }

  @Post(':id/comments/:commentId/replies/:replyId/react')
  async handleReactToCommentReply(
    @Param('replyId') comment_reply_id: string,
    @Body() dto: ReactToCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.reactToComment({ comment_reply_id, ...dto }, owner);
  }

  @Get(':id')
  async handleGetPostById(@Param('id') post_id: string) {
    return this.postService.getPostById({ post_id });
  }

  // @Get(':id/comments')
  // async handleGetPostComments(@Query() dto, @Param('id') post_id: string) {
  //   return this.postService.getComments({ post_id });
  // }

  // @Get(':id/comments/:commentId/replies')
  // async handleGetCommentReplies(@Query() dto, @Param('commentId') comment_id: string) {
  //   return this.postService.getCommentReplies({ comment_id });
  // }
}
