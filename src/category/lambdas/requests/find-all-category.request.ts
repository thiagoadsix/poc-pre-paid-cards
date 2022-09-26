import { IsNotEmpty, IsUUID } from 'class-validator'

export class FindAllCategoryRequest {
  @IsNotEmpty()
  @IsUUID()
  companyId: string

  constructor(obj: Partial<FindAllCategoryRequest>) {
    Object.assign(this, obj)
  }
}
