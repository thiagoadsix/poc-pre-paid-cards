export class Category {
  private _companyId: string;
  private _name: string;
  private _color: string;

  private _categoryId: string;
  private _createdAt: string;
  private _updatedAt: string;

  constructor(companyId: string, name: string, color: string) {
    this._companyId = companyId;
    this._name = name;
    this._color = color;

    this.validate();
  }

  validate(): boolean {
    if (this._companyId.length === 0) {
      throw new Error('companyId is required');
    }

    if (this._name.length === 0) {
      throw new Error('name is required');
    }

    if (this._color.length === 0) {
      throw new Error('color is required');
    }

    return true;
  }

  get companyId(): string {
    return this._companyId;
  }

  get name(): string {
    return this._name;
  }

  get color(): string {
    return this._color;
  }

  set categoryId(value: string) {
    this._categoryId = value;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }
}
