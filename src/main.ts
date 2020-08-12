import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiGatewayOpenApi } from '@aws-serverless-tools/nest';

async function bootstrap() {
  process.env.CREATE_INDEX = "FALSE";
  process.env.QLDB_LEDGER = "failsave-ledger-dev"
  const app = await NestFactory.create(AppModule);

  const openApi = await app
    .get(ApiGatewayOpenApi)
    .setNestAppContext(app)
    .enableDocumentationWebServer();
  await openApi.generateOpenApiFile();
  await openApi.generateAngularClient();

  await app.listen(3000);
}
bootstrap();
