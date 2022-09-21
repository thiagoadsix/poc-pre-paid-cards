import { CreateCategoryLambda } from './lambdas/create-category-lambda';

export const create = new CreateCategoryLambda().handler;
