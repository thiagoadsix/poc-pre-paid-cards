import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import { CategoryRepository } from './category.repository'
import { CategorySchema } from './schemas/category.schema'

@Module({
  imports: [DynamooseModule.forFeature([{ name: 'CardCategory', schema: CategorySchema.schema() }])],
  providers: [CategoryRepository],
  exports: [CategoryRepository],
})
export class RepositoryModule {}
