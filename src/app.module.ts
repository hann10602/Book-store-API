import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsModule } from './modules/carts/carts.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CommentsModule } from './modules/comments/comments.module';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './modules/books/books.module';
import { AuthModule } from './modules/auth/auth.module';
import { CheckTokenMiddleware } from './modules/auth/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RolesModule,
    BooksModule,
    CategoriesModule,
    CommentsModule,
    CartsModule,
    MongooseModule.forRoot('mongodb://172.17.0.2/book-store'),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckTokenMiddleware).forRoutes(
      {
        path: 'api/v1/users/*',
        method: RequestMethod.ALL,
      },
      {
        path: 'api/v1/roles/*',
        method: RequestMethod.ALL,
      },
      {
        path: 'api/v1/books/*',
        method: RequestMethod.POST,
      },
      {
        path: 'api/v1/books/*',
        method: RequestMethod.PUT,
      },
      {
        path: 'api/v1/books/*',
        method: RequestMethod.DELETE,
      },
      {
        path: 'api/v1/categories/*',
        method: RequestMethod.ALL,
      },
      {
        path: 'api/v1/comments/*',
        method: RequestMethod.ALL,
      },
      {
        path: 'api/v1/carts/*',
        method: RequestMethod.ALL,
      },
    );
  }
}
