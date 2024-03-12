import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesService } from 'src/modules/categories/categories.service';
import { Books } from 'src/schemas/Books.schema';
import { CreateBookSDI, SearchBookSDI, UpdateBookSDI } from './dtos/Book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private bookModel: Model<Books>,
    private readonly categoryService: CategoriesService,
  ) {}

  searchBook(bookDto?: SearchBookSDI) {
    return this.bookModel.find(bookDto).populate(['category']);
  }

  getOne(id: string) {
    return this.bookModel.findById(id).populate(['category']);
  }

  async createBook(bookDto: CreateBookSDI) {
    const category = await this.categoryService.getOne(bookDto.categoryId);

    if (!category) throw new ConflictException('Category not found');

    const book = await this.bookModel.create({ category, ...bookDto });

    book.save();

    return 'Success';
  }

  async updateBook(id: string, bookDto: UpdateBookSDI) {
    let category;
    if (bookDto.categoryId)
      category = await this.categoryService.getOne(bookDto.categoryId);

    if (!category) throw new ConflictException('Category not found');

    await this.bookModel.findByIdAndUpdate(id, {
      category,
      ...bookDto,
    });

    return 'Success';
  }

  async deleteBook(id: string) {
    await this.bookModel.findByIdAndDelete(id);

    return 'Success';
  }
}
