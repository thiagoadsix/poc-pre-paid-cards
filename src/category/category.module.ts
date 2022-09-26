import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import { RepositoryModule } from './repositories/repository.module'
import { CategoryService } from './services/category.service'

@Module({
  imports: [
    DynamooseModule.forRoot({
      aws: {
        region: 'us-east-1',
        accessKeyId: 'test',
        secretAccessKey: 'test',
      },
      local: process.env.IS_OFFLINE ? 'http://localhost:4566' : false,
    }),
    RepositoryModule,
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
