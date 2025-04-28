import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
  });

  app.setGlobalPrefix("api")

  await app.listen(config.getOrThrow<string>('PORT') ?? 3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
