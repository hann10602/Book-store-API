import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Roles {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  code: string;
}

export const RoleSchema = SchemaFactory.createForClass(Roles);
