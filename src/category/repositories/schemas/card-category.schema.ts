import { Schema } from 'dynamoose';

export type CardCategoryKey = {
  companyId: string;
};

export class CardCategorySchema {
  companyId: string;
  name: string;
  color: string;

  public static schema() {
    return new Schema({
      companyId: {
        type: String,
        hashKey: true,
      },
      name: {
        type: String,
      },
      color: {
        type: String,
      },
    });
  }
}
