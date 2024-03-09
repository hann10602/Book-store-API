import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema, Carts } from 'src/schemas/Carts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Carts.name,
        schema: CartSchema,
      },
    ]),
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
