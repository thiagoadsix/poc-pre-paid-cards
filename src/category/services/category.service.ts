import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async create(category: Category): Promise<void> {
    await this.categoryRepository.create(category);
  }

  async findAll(companyId: string): Promise<Category[]> {
    return await this.categoryRepository.findAll(companyId);
  }
}
