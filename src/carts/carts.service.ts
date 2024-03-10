import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carts } from 'src/schemas/Carts.schema';
import { CreateCartSDI, SearchCartSDI, UpdateCartSDI } from './dtos/Cart.dto';
import { UsersService } from 'src/users/users.service';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Carts.name) private cartModel: Model<Carts>,
    private readonly userService: UsersService,
    private readonly bookService: BooksService,
  ) {}

  searchCart(cartDto?: SearchCartSDI) {
    return this.cartModel.find(cartDto).populate(['user', 'book']);
  }

  getOne(id: string) {
    return this.cartModel.findById(id).populate(['user', 'book']);
  }

  async createCart(cartDto: CreateCartSDI) {
    let cart;
    cart = await this.cartModel.findOne({
      user: cartDto.user,
      book: cartDto.book,
    });

    if (cart) {
      cart.quantity += cartDto.quantity;
    } else {
      cart = await this.cartModel.create(cartDto);
    }

    cart.save();

    return 'Success';
  }

  async updateCart(id: string, cartDto: UpdateCartSDI) {
    await this.cartModel.findByIdAndUpdate(id, cartDto);

    return 'Success';
  }

  async deleteCart(id: string) {
    await this.cartModel.findByIdAndDelete(id);

    return 'Success';
  }
}
