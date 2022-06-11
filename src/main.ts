import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('API AUTH')
      .setDescription('Description')
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          name: 'Authorization',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'authorization',
      )
      .build(),
  );
  SwaggerModule.setup('/docs', app, document);
  await app.listen(8888);
}
bootstrap();
 