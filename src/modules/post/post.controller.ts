import { Body, Controller, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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

  @Post(';id/like')
  async handleLikePost(
    @Param('id') post_id: string,
    @Body() dto: LikePostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likePost({ post_id, ...dto }, owner);
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
    @Body() dto: LikeCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likeComment({ comment_id, ...dto }, owner);
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
    @Body() dto: LikeCommentReplyDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likeCommentReply({ comment_reply_id, ...dto }, owner);
  }

  @Post(':id/comments/:commentId/replies/:replyId/react')
  async handleReactToCommentReply(
    @Param('replyId') comment_reply_id: string,
    @Body() dto: ReactToCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.reactToComment({ comment_reply_id, ...dto }, owner);
  }

  // @Get(':id/comments')
  // async handleGetPostComments(@Query() dto) {
  //   return this.postService.getComments();
  // }

  // @Get(':id/comments/:commentId/replies')
  // async handleGetCommentReplies(@Query() dto) {
  //   return this.postService.getCommentReplies();
  // }
}
