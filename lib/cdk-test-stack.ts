import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloFunction = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_20_X, // 修正されたランタイム
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: helloFunction
    });
  }
}
