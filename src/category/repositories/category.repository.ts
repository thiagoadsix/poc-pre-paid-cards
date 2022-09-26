import { Injectable } from '@nestjs/common'
import { InjectModel, Model } from 'nestjs-dynamoose'

import { Category } from '../entities/category'

import { CategoryKey, CategorySchema } from './schemas/category.schema'

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel('CardCategory')
    private readonly model: Model<CategorySchema, CategoryKey>,
  ) {
    this.model = model
  }

  async create(input: Category): Promise<Category> {
    const category = await this.model.create({
      companyId: input.getCompanyId,
      name: input.getName,
      color: input.getColor,
    })

    const entity = new Category(category.companyId, category.name, category.color)

    entity.setCategoryId = category.categoryId
    entity.setCreatedAt = category.createdAt
    entity.setUpdatedAt = category.updatedAt

    return entity
  }

  async findAll(companyId: string): Promise<Category[]> {
    const model = await this.model.query('companyId').eq(companyId).exec()

    return model.map((category) => {
      const entity = new Category(category.companyId, category.name, category.color)

      entity.setCategoryId = category.categoryId
      entity.setCreatedAt = category.createdAt
      entity.setUpdatedAt = category.updatedAt

      return entity
    })
  }
}
