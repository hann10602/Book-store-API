import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookSchema, Books } from 'src/schemas/Books.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategorySchema } from 'src/schemas/Categories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BookSchema,
      },
      {
        name: Categories.name,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
