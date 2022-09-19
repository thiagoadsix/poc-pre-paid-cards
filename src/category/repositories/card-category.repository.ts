import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';

import {
  CardCategoryKey,
  CardCategorySchema,
} from './schemas/card-category.schema';

@Injectable()
export class CardCategoryRepository {
  constructor(
    @InjectModel('CardCategory')
    private readonly model: Model<CardCategorySchema, CardCategoryKey>,
  ) {
    this.model = model;
  }

  async create(category: any): Promise<void> {
    this.model.create({ ...category });
  }

  async get(companyId: string): Promise<any> {
    return this.model.get({ companyId });
  }
}
