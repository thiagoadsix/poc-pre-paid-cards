import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';

import { CategoryKey, CategorySchema } from './schemas/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel('CardCategory')
    private readonly model: Model<CategorySchema, CategoryKey>,
  ) {
    this.model = model;
  }

  async create(input: CategorySchema): Promise<any> {
    const category = await this.model.create({ ...input });
    return category;
  }
}
