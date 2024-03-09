import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsModule } from './carts/carts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RolesModule,
    BooksModule,
    CategoriesModule,
    CommentsModule,
    CartsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/book-store'),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
