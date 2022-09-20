import { Test } from '@nestjs/testing';
import { CardCategoryRepository } from './card-category.repository';
import { CardCategorySchema } from './schemas/card-category.schema';

class ApiServiceMock {
  create(input: CardCategorySchema) {
    return;
  }
}

describe('Testing Card Category Repository', () => {
  let repository: CardCategoryRepository;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: CardCategoryRepository,
      useClass: ApiServiceMock,
    };
    const module = await Test.createTestingModule({
      providers: [CardCategoryRepository, ApiServiceProvider],
    }).compile();

    repository = module.get<CardCategoryRepository>(CardCategoryRepository);
  });

  test('should be', async () => {
    expect(repository).toBeDefined();
  });

  test('should create a category', async () => {
    const createCardCategorySpy = jest.spyOn(repository, 'create');
    const input: CardCategorySchema = {
      name: 'Test Category',
      companyId: 'cd144497-1478-4c7e-99e2-b7647e87fda0',
      color: '#E0BB22',
    };
    repository.create(input);
    expect(createCardCategorySpy).toHaveBeenCalledWith(input);
  });
});
