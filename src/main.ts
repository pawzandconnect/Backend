import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { env } from '@configs';
import { ResponseInterceptor } from '@common/interceptors';
import { VersioningType } from '@nestjs/common';
import { GlobalExceptionFilter } from '@common/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.use(
    ['/docs'],
    basicAuth({
      challenge: true,
      users: { client: 'heyoo!' },
      unauthorizedResponse: () => {
        return {
          success: false,
          status: 'error',
          message: 'Unauthorized, please login to continue',
        };
      },
    }),
  );

  const swaggerDocsConfig = new DocumentBuilder()
    .setTitle(`${env.APP_NAME} API backend documentation`)
    .setDescription(`${env.APP_DESC}`)
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Postman Collection', '/swagger/json')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, swaggerDocsConfig);
  SwaggerModule.setup('docs', app, documentFactory, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      persistAuthorization: true,
    },
    jsonDocumentUrl: 'swagger/json',
    explorer: true,
  });

  const port = env.PORT;
  await app.listen(port);

  console.info(`
    ------
    API server listening on port: :${port}
    Access documentation :${port}/docs
    ------
    `);
}
bootstrap();
