import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books } from 'src/schemas/Books.schema';
import {
  CreateBookSDI,
  SearchBookSDI,
  SelfBookSDI,
  UpdateBookSDI,
} from './dtos/Book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private bookModel: Model<Books>) {}

  searchBook(bookDto?: SearchBookSDI) {
    return this.bookModel.find(bookDto).populate(['categories']);
  }

  selfBook(id: string) {
    return this.bookModel.findById(id).populate(['categories']);
  }

  createBook(bookDto: CreateBookSDI) {}

  updateBook(id: string, bookDto: UpdateBookSDI) {}

  deleteBook(id: string) {}
}
