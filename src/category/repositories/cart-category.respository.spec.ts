import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken, Model } from 'nestjs-dynamoose';
import { CardCategoryRepository } from './card-category.repository';
import {
  CardCategoryKey,
  CardCategorySchema,
} from './schemas/card-category.schema';

const mockCardCategory = (
  name = 'Test Category',
  companyId = 'cd144497-1478-4c7e-99e2-b7647e87fda0',
  color = '#E0BB22',
): CardCategorySchema => ({ name, companyId, color });

describe('Testing Card Category Repository', () => {
  let repository: CardCategoryRepository;
  let model: Model<CardCategorySchema, CardCategoryKey>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardCategoryRepository,
        {
          provide: getModelToken('CardCategory'),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    repository = module.get<CardCategoryRepository>(CardCategoryRepository);
    model = module.get<Model<CardCategorySchema, CardCategoryKey>>(
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
      .mockImplementationOnce(() => Promise.resolve(mockCardCategory()));
    const cardCategory = await repository.create({
      name: 'Test Category',
      companyId: 'cd144497-1478-4c7e-99e2-b7647e87fda0',
      color: '#E0BB22',
    });

    expect(cardCategory).toBeTruthy();
  });
});
