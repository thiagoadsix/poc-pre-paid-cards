import { HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { CustomException } from '../../category/exceptions/custom.exception';
import { HandlerResponse } from '../aws/handler/handler.response';

export class ExceptionFilter {
  static throw(error: any): any {
    switch (true) {
      case error instanceof CustomException:
        console.warn(error);
        return HandlerResponse.getResponse(
          {
            message: error.message,
            code: error.code,
            name: error.name,
          },
          error.statusCode,
        );
      case error[0] instanceof ValidationError:
        console.warn(error);
        const customErrors = error.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        }));
        return HandlerResponse.getResponse(
          customErrors,
          HttpStatus.BAD_REQUEST,
        );
      default:
        console.error(error);
        return HandlerResponse.getResponse(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
  }
}
