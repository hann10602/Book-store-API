import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Users } from './Users.schema';
import { Books } from './Books.schema';

@Schema()
export class Carts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  user: Users;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Books' })
  book: Books;

  @Prop({ required: true })
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Carts);
