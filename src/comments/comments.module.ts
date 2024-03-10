import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema, Books } from 'src/schemas/Books.schema';
import { CommentSchema, Comments } from 'src/schemas/Comments.schema';
import { UserSchema, Users } from 'src/schemas/Users.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { BooksModule } from 'src/books/books.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comments.name,
        schema: CommentSchema,
      },
      {
        name: Books.name,
        schema: BookSchema,
      },
      {
        name: Users.name,
        schema: UserSchema,
      },
    ]),
    BooksModule,
    UsersModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
