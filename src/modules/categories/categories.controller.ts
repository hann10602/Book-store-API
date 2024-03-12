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
import { CheckRoleGuard } from '../auth/auth.guard';
import { CategoriesService } from './categories.service';
import {
  CreateCategoriesSDI,
  SearchCategoriesSDI,
  UpdateCategoriesSDI,
} from './dtos/category.dto';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('search')
  search(@Body() categoryDto?: SearchCategoriesSDI) {
    return this.categoriesService.search(categoryDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoriesService.getOne(id);
  }

  @Post()
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  createCategory(@Body() categoryDto: CreateCategoriesSDI) {
    return this.categoriesService.createCategory(categoryDto);
  }

  @Put(':id')
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  updateCategory(
    @Param('id') id: string,
    @Body() categoryDto: UpdateCategoriesSDI,
  ) {
    return this.categoriesService.updateCategory(id, categoryDto);
  }

  @Delete(':id')
  @UseGuards(new CheckRoleGuard(['ADMIN']))
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
