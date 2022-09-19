import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { CardCategoryRepository } from './card-category.repository';
import { CardCategorySchema } from './schemas/card-category.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      { name: 'CardCategory', schema: CardCategorySchema.schema() },
    ]),
  ],
  providers: [CardCategoryRepository],
  exports: [CardCategoryRepository],
})
export class RepositoryModule {}
