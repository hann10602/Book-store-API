import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema, Carts } from 'src/schemas/Carts.schema';
import { UsersModule } from 'src/users/users.module';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Carts.name,
        schema: CartSchema,
      },
    ]),
    UsersModule,
    BooksModule,
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
