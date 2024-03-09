import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Categories {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  code: string;
}

export const CategorySchema = SchemaFactory.createForClass(Categories);
