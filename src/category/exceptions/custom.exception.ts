import { HttpStatus } from '@nestjs/common';

export class CustomException extends Error {
  constructor(
    message: any,
    private readonly code: number,
    private readonly statusCode: HttpStatus,
  ) {
    super(message);

    this.code = code;
    this.statusCode = statusCode;
    this.name = CustomException.name;
  }
}
