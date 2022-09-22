import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { APIGatewayEvent, Context } from 'aws-lambda';
import { validateOrReject } from 'class-validator';
import { HandlerInterface } from '../../common/aws/handler/handler.interface';
import { CategoryModule } from '../category.module';
import { CreateCategoryRequest } from './requests/create-category.request';
import { CategoryService } from '../services/category.service';
import { HandlerResponse } from '../../common/aws/handler/handler.response';
import { ExceptionFilter } from '../../common/filters/exception.filter';
import { Category } from '../entities/category';

export class CreateCategoryLambda implements HandlerInterface {
  async handler(event: APIGatewayEvent, context: Context): Promise<any> {
    console.log('Event', JSON.stringify(event));

    try {
      console.log(`Stating lambda: ${context.functionName}`);

      const appContext = await NestFactory.createApplicationContext(
        CategoryModule,
      );

      const appService = appContext.get(CategoryService);

      const input = JSON.parse(event.body);
      const mergeObjects = Object.assign({}, input, {
        companyId: event.requestContext.authorizer.claims['custom:companyId'],
      });

      const request = new CreateCategoryRequest(mergeObjects);

      try {
        await validateOrReject(request);
      } catch (errors) {
        return ExceptionFilter.throw(errors);
      }

      try {
        const entity = new Category(
          request.companyId,
          request.name,
          request.color,
        );
        const resp = await appService.create(entity);

        console.log(`Finishing lambda: ${context.functionName}`);

        return HandlerResponse.getResponse(resp, HttpStatus.OK);
      } catch (error) {
        return ExceptionFilter.throw(error);
      }
    } catch (error) {
      return ExceptionFilter.throw(error);
    }
  }
}
