import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export interface HandlerInterface {
  /**
   * Implements your lambda creation your application context with Nest.
   * @param event: APIGatewayEvent
   * @param context: Context
   */
  handler(
    event: APIGatewayEvent,
    context: Context,
  ): Promise<APIGatewayProxyResult>;
}
