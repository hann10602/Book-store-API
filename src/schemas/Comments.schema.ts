import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Users } from './Users.schema';
import { Books } from './Books.schema';

@Schema()
export class Comments {
  @Prop({ required: true })
  content: string;

  @Prop({ default: new Date() })
  createdDate: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  user: Users;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Books' })
  book: Books;
}

export const CommentSchema = SchemaFactory.createForClass(Comments);
