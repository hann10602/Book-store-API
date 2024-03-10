import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartSDI, SearchCartSDI, UpdateCartSDI } from './dtos/Cart.dto';
import { Carts } from 'src/schemas/Carts.schema';

@Controller('api/v1/carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get('search')
  searchBook(@Body() cartDto: SearchCartSDI): Promise<Carts[]> {
    return this.cartsService.searchCart(cartDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.cartsService.getOne(id);
  }

  @Post()
  createCart(@Body() cartDto: CreateCartSDI) {
    return this.cartsService.createCart(cartDto);
  }

  @Put(':id')
  updateCart(@Param('id') id: string, @Body() cartDto: UpdateCartSDI) {
    return this.cartsService.updateCart(id, cartDto);
  }

  @Delete(':id')
  deleteCart(@Param('id') id: string) {
    return this.cartsService.deleteCart(id);
  }
}
