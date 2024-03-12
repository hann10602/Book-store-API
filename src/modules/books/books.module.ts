import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookSchema, Books } from 'src/schemas/Books.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategorySchema } from 'src/schemas/Categories.schema';
import { CategoriesModule } from 'src/modules/categories/categories.module';

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
    CategoriesModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
