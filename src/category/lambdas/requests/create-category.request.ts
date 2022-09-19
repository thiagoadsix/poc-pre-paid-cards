import { IsHexColor, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCategoryRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  companyId: string;

  @IsNotEmpty()
  @IsHexColor()
  color: string;

  constructor(obj: Partial<CreateCategoryRequest>) {
    Object.assign(this, obj);
  }
}
