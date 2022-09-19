export class HandlerResponse {
  /**
   * Static method to help to build a handler response
   * @param message: any
   * @param statusCode: number
   * @returns
   */
  public static getResponse(message: any, statusCode: number) {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(message),
    };
  }
}
