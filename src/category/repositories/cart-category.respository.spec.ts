import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken, Model } from 'nestjs-dynamoose';
import { Category } from '../entities/category';
import { CategoryRepository } from './category.repository';
import { CategoryKey, CategorySchema } from './schemas/category.schema';

const mockCategory = (
  name = 'Test Category',
  companyId = 'cd144497-1478-4c7e-99e2-b7647e87fda0',
  color = '#E0BB22',
): CategorySchema => ({ name, companyId, color });

describe('Testing Category Repository', () => {
  let repository: CategoryRepository;
  let model: Model<CategorySchema, CategoryKey>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryRepository,
        {
          provide: getModelToken('CardCategory'),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    repository = module.get<CategoryRepository>(CategoryRepository);
    model = module.get<Model<CategorySchema, CategoryKey>>(
      getModelToken('CardCategory'),
    );
  });

  it('should be', async () => {
    expect(repository).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a category', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockCategory()));
    const entity = new Category(
      'cd144497-1478-4c7e-99e2-b7647e87fda0',
      'Test Category',
      '#E0BB22',
    );
    const category = await repository.create(entity);

    expect(category).toBeTruthy();
  });
});
