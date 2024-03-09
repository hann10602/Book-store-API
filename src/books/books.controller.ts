import { Body, Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { SearchBookSDI } from './dtos/Book.dto';
import { Books } from 'src/schemas/Books.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  searchBook(@Body() bookDto: SearchBookSDI): Promise<Books[]> {
    return this.booksService.searchBook(bookDto);
  }
}
