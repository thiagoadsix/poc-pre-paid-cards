import { Schema } from 'dynamoose'
import { v4 as uuid } from 'uuid'

export type CategoryKey = {
  companyId: string
}

export class CategorySchema {
  companyId: string
  name: string
  color: string
  categoryId?: string
  createdAt?: string
  updatedAt?: string

  public static schema() {
    return new Schema({
      companyId: {
        type: String,
        hashKey: true,
      },
      categoryId: {
        type: String,
        rangeKey: true,
        default: () => uuid(),
      },
      name: {
        type: String,
      },
      color: {
        type: String,
      },
      createdAt: {
        type: String,
        default: new Date().toString(),
      },
      updatedAt: {
        type: String,
        default: new Date().toString(),
      },
    })
  }
}
