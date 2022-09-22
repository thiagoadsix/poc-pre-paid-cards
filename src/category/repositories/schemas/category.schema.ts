import { Schema } from 'dynamoose';

export type CategoryKey = {
  companyId: string;
};

export class CategorySchema {
  companyId: string;
  name: string;
  color: string;
  categoryId?: string;
  createdAt?: string;
  updatedAt?: string;

  public static schema() {
    return new Schema({
      companyId: {
        type: String,
        hashKey: true,
      },
      categoryId: {
        type: String,
        rangeKey: true,
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
    });
  }
}
