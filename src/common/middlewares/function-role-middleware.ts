import { APIGatewayEvent, Context } from 'aws-lambda';

type MiddlewareContext<TResult = any> = Context & {
  end: () => void;
  prev: TResult;
};

export const check = async (
  event: APIGatewayEvent,
  context: MiddlewareContext,
) => {
  console.log('Event', JSON.stringify(event));
  try {
    const mfaStatus =
      event.requestContext.authorizer?.claims['custom:MFA_STATUS'];

    if (mfaStatus === 'ACTIVE') return true;

    throw new Error('MFA is not activated.');
  } catch (error) {
    console.error('Company with MFA deactivated.', JSON.stringify(error));
    context.end();

    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 401,
      body: JSON.stringify({
        httpCode: 401,
        name: 'mfa-not-allowed',
        message: 'Ativar múltiplo fator de autenticacão!',
        messages: ['Ativar múltiplo fator de autenticacão!'],
      }),
    };
  }
};
