import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';

import { Category } from '../entities/category';

import { CategoryKey, CategorySchema } from './schemas/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel('CardCategory')
    private readonly model: Model<CategorySchema, CategoryKey>,
  ) {
    this.model = model;
  }

  async create(input: Category): Promise<Category> {
    const category = await this.model.create({
      companyId: input.companyId,
      name: input.name,
      color: input.color,
    });

    const entity = new Category(
      category.companyId,
      category.name,
      category.color,
    );

    entity.categoryId = category.categoryId;
    entity.createdAt = category.createdAt;
    entity.updatedAt = category.updatedAt;

    return entity;
  }
}
