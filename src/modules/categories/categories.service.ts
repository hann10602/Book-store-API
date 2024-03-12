import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from 'src/schemas/Categories.schema';
import {
  CreateCategoriesSDI,
  SearchCategoriesSDI,
  UpdateCategoriesSDI,
} from './dtos/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoryModel: Model<Categories>,
  ) {}

  search(categoryDto?: SearchCategoriesSDI): Promise<Categories[]> {
    return this.categoryModel.find(categoryDto);
  }

  getOne(id: string): Promise<Categories> {
    return this.categoryModel.findById(id);
  }

  async createCategory(categoryDto: CreateCategoriesSDI) {
    const category = await this.categoryModel.create(categoryDto);

    category.save();

    return 'Success';
  }

  async updateCategory(id: string, categoryDto: UpdateCategoriesSDI) {
    await this.categoryModel.findByIdAndUpdate(id, categoryDto);

    return 'Success';
  }

  async deleteCategory(id: string) {
    await this.categoryModel.findByIdAndDelete(id);

    return 'Success';
  }
}
