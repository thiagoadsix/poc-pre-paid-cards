import { CreateCategoryLambda } from './lambdas/create-category-lambda';

export const createCategory = new CreateCategoryLambda().handler;
