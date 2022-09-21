import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../repositories/category.repository';
import { CategorySchema } from '../repositories/schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async create(category: CategorySchema): Promise<void> {
    await this.categoryRepository.create(category);
  }
}
