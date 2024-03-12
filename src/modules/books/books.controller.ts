import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Books } from 'src/schemas/Books.schema';
import { CheckRoleGuard } from '../auth/auth.guard';
import { BooksService } from './books.service';
import { CreateBookSDI, SearchBookSDI, UpdateBookSDI } from './dtos/Book.dto';

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
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  createBook(@Body() bookDto: CreateBookSDI) {
    return this.booksService.createBook(bookDto);
  }

  @Put(':id')
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  updateBook(@Param('id') id: string, @Body() bookDto: UpdateBookSDI) {
    return this.booksService.updateBook(id, bookDto);
  }

  @Delete(':id')
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
