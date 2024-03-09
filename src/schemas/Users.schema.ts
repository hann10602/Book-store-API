import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Roles } from './Roles.schema';

@Schema()
export class Users {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop()
  password: string;

  @Prop({ required: true, default: true })
  status: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Roles' })
  roles: Roles;
}

export const UserSchema = SchemaFactory.createForClass(Users);
