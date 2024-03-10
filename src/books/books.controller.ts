import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookSDI, SearchBookSDI, UpdateBookSDI } from './dtos/Book.dto';
import { Books } from 'src/schemas/Books.schema';

@Controller('api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  searchBook(@Body() bookDto: SearchBookSDI): Promise<Books[]> {
    return this.booksService.searchBook(bookDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.booksService.getOne(id);
  }

  @Post()
  createBook(@Body() bookDto: CreateBookSDI) {
    return this.booksService.createBook(bookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() bookDto: UpdateBookSDI) {
    return this.booksService.updateBook(id, bookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
