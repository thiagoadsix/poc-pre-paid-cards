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

  async create(input: CardCategorySchema): Promise<any> {
    const cardCategory = await this.model.create({ ...input });
    return cardCategory;
  }
}
