import { HttpStatus } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { APIGatewayEvent, Context } from 'aws-lambda'
import { validateOrReject } from 'class-validator'
import { HandlerInterface } from '../../common/aws/handler/handler.interface'
import { CategoryModule } from '../category.module'
import { CategoryService } from '../services/category.service'
import { HandlerResponse } from '../../common/aws/handler/handler.response'
import { ExceptionFilter } from '../../common/filters/exception.filter'
import { FindAllCategoryRequest } from './requests/find-all-category.request'

export class FindAllCategoryLambda implements HandlerInterface {
  async handler(event: APIGatewayEvent, context: Context): Promise<any> {
    try {
      console.log(`Stating lambda: ${context.functionName}`)

      const appContext = await NestFactory.createApplicationContext(CategoryModule)

      const appService = appContext.get(CategoryService)

      const request = new FindAllCategoryRequest({
        companyId: event.requestContext.authorizer.claims['custom:companyId'],
      })

      try {
        await validateOrReject(request)
      } catch (errors) {
        return ExceptionFilter.throw(errors)
      }

      try {
        const resp = await appService.findAll(request.companyId)

        console.log(`Finishing lambda: ${context.functionName}`)

        return HandlerResponse.getResponse(resp, HttpStatus.OK)
      } catch (error) {
        return ExceptionFilter.throw(error)
      }
    } catch (error) {
      return ExceptionFilter.throw(error)
    }
  }
}
