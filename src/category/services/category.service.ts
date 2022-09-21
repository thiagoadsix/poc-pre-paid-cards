import { Injectable } from '@nestjs/common';
import { CardCategoryRepository } from '../repositories/card-category.repository';
import { CardCategorySchema } from '../repositories/schemas/card-category.schema';

@Injectable()
export class CategoryService {
  constructor(private readonly cardCategoryRepository: CardCategoryRepository) {
    this.cardCategoryRepository = cardCategoryRepository;
  }

  async create(category: CardCategorySchema): Promise<void> {
    await this.cardCategoryRepository.create(category);
  }
}
