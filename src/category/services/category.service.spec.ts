import { Test, TestingModule } from '@nestjs/testing';
import { CardCategorySchema } from '../repositories/schemas/card-category.schema';
import { CategoryService } from './category.service';
import { RepositoryModule } from '../repositories/repository.module';
import { DynamooseModule } from 'nestjs-dynamoose';

const mockCardCategory = (
  name = 'Test Category',
  companyId = 'cd144497-1478-4c7e-99e2-b7647e87fda0',
  color = '#E0BB22',
): CardCategorySchema => ({ name, companyId, color });

describe('Testing Card Category Service', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
      imports: [RepositoryModule, DynamooseModule.forRoot()],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create with correct values', async () => {
    const createSpy = jest.spyOn(service, 'create');
    service.create(mockCardCategory());
    expect(createSpy).toHaveBeenCalledWith(mockCardCategory());
  });
});
