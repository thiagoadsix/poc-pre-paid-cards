export class Category {
  private companyId: string
  private name: string
  private color: string

  private categoryId: string
  private createdAt: string
  private updatedAt: string

  constructor(companyId: string, name: string, color: string) {
    this.companyId = companyId
    this.name = name
    this.color = color

    this.validate()
  }

  validate(): boolean {
    if (this.companyId.length === 0) {
      throw new Error('companyId is required')
    }

    if (this.name.length === 0) {
      throw new Error('name is required')
    }

    if (this.color.length === 0) {
      throw new Error('color is required')
    }

    return true
  }

  get getCompanyId(): string {
    return this.companyId
  }

  get getName(): string {
    return this.name
  }

  get getColor(): string {
    return this.color
  }

  set setCategoryId(value: string) {
    this.categoryId = value
  }

  set setCreatedAt(value: string) {
    this.createdAt = value
  }

  set setUpdatedAt(value: string) {
    this.updatedAt = value
  }
}
