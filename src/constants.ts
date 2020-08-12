const xApiGatewayUri = {
  'Fn::Sub':
    'arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/' +
    'arn:aws:lambda:${AWS::Region}:${AWS::AccountId}:function:${FailsaveApiLambda}/invocations',
};

export const xApiGatewayParameters = {
  type: 'aws_proxy',
  httpMethod: 'POST',
  uri: xApiGatewayUri,
};
