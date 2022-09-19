import { HttpStatus, Injectable } from '@nestjs/common';
import { CustomException } from '../exceptions/custom.exception';
import { CardCategoryRepository } from '../repositories/card-category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly cardCategoryRepository: CardCategoryRepository) {
    this.cardCategoryRepository = cardCategoryRepository;
  }

  async createCategory(category: any): Promise<void> {
    throw new CustomException(
      'Custom Exception',
      1,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
    await this.cardCategoryRepository.create(category);
  }
}
