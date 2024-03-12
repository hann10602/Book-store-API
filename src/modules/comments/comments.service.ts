import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from 'src/schemas/Comments.schema';
import {
  CreateCommentSDI,
  SearchCommentsSDI,
  UpdateCommentSDI,
} from './dtos/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private commentModel: Model<Comments>,
  ) {}

  searchComments(commentDto?: SearchCommentsSDI) {
    return this.commentModel.find(commentDto);
  }

  getOne(id: string) {
    return this.commentModel.findById(id);
  }

  async createComment(commentDto?: CreateCommentSDI) {
    const comment = await this.commentModel.create(commentDto);

    comment.save();

    return 'Success';
  }

  async updateComment(id: string, commentDto: UpdateCommentSDI) {
    return this.commentModel.findByIdAndUpdate(id, commentDto);
  }

  async deleteComment(id: string) {
    await this.commentModel.findByIdAndDelete(id);

    return 'Success';
  }
}
