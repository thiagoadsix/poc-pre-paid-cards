import { CreateCategoryLambda } from './lambdas/create-category-lambda';
import { FindAllCategoryLambda } from './lambdas/create-category-lambda copy';

export const create = new CreateCategoryLambda().handler;
export const findAll = new FindAllCategoryLambda().handler;
