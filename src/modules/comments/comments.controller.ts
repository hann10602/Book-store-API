import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import {
  CreateCommentSDI,
  SearchCommentsSDI,
  UpdateCommentSDI,
} from './dtos/comment.dto';

@Controller('api/v1/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('search')
  search(@Body() commentDto?: SearchCommentsSDI) {
    return this.commentsService.searchComments(commentDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.commentsService.getOne(id);
  }

  @Post()
  createComment(@Body() commentDto: CreateCommentSDI) {
    return this.commentsService.createComment(commentDto);
  }

  @Put(':id')
  updateComment(@Param('id') id: string, @Body() commentDto: UpdateCommentSDI) {
    return this.commentsService.updateComment(id, commentDto);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }
}
