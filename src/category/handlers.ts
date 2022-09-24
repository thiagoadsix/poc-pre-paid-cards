import { CreateCategoryLambda } from './lambdas/create-category-lambda';
import { FindAllCategoryLambda } from './lambdas/find-all-category-lambda';

export const create = new CreateCategoryLambda().handler;
export const findAll = new FindAllCategoryLambda().handler;
