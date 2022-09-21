import { Test, TestingModule } from '@nestjs/testing';
import { CategorySchema } from '../repositories/schemas/category.schema';
import { CategoryService } from './category.service';
import { RepositoryModule } from '../repositories/repository.module';
import { DynamooseModule } from 'nestjs-dynamoose';

const mockCategory = (
  name = 'Test Category',
  companyId = 'cd144497-1478-4c7e-99e2-b7647e87fda0',
  color = '#E0BB22',
): CategorySchema => ({ name, companyId, color });

describe('Testing Category Service', () => {
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
    service.create(mockCategory());
    expect(createSpy).toHaveBeenCalledWith(mockCategory());
  });
});
