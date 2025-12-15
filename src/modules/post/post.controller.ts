import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Post()
  async handleCreatePost(@Body() dto: CreatePostDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.create(dto, owner);
  }

  @Post(';id/react')
  async handleReactToPost(@Body() dto: ReactToPostDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.reactToPost(dto, owner);
  }

  @Post(':id/comments')
  async handleCommentOnPost(@Body() dto: CommentOnPostDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.comment(dto, owner);
  }

  @Post(';id/like')
  async handleLikePost(@Body() dto: LikePostDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.likePost(dto, owner);
  }

  @Post(':id/comments/:commentId/react')
  async handleReactToComment(@Body() dto: ReactToCommentDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.reactToComment(dto, owner);
  }

  @Post(':id/comments/:commentId/like')
  async handleLikeComment(@Body() dto: LikeCommentDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.postService.likeComment(dto, owner);
  }

  @Post(':id/comments/:commentId/reply')
  async handleReplyCommentOnPost(
    @Body() dto: ReplyCommentDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.replyComment(dto, owner);
  }

  @Post(':id/comments/:commentId/replies/:replyId/like')
  async handleLikeCommentReply(
    @Body() dto: LikeCommentReplyDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.postService.likeCommentReply(dto, owner);
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
