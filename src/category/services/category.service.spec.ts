import { Test, TestingModule } from '@nestjs/testing'
import { CategoryService } from './category.service'
import { RepositoryModule } from '../repositories/repository.module'
import { DynamooseModule } from 'nestjs-dynamoose'
import { Category } from '../entities/category'

describe('Testing Category Service', () => {
  let service: CategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
      imports: [RepositoryModule, DynamooseModule.forRoot()],
    }).compile()

    service = module.get<CategoryService>(CategoryService)
  })

  it('should be defined', async () => {
    expect(service).toBeDefined()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should create with correct values', async () => {
    const entity = new Category('cd144497-1478-4c7e-99e2-b7647e87fda0', 'Test Category', '#E0BB22')
    const createSpy = jest.spyOn(service, 'create')
    service.create(entity)
    expect(createSpy).toHaveBeenCalledWith(entity)
  })

  test('should call findAll from CategoryRepository with correct values', async () => {
    const findAllSpy = jest.spyOn(service, 'findAll')
    service.findAll('cd144497-1478-4c7e-99e2-b7647e87fda0')
    expect(findAllSpy).toHaveBeenCalledWith('cd144497-1478-4c7e-99e2-b7647e87fda0')
  })
})
