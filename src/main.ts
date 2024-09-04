import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { EmailModule } from './email/email.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailModule, {cors:true});
  
  // Active cors
  app.enableCors()

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe()
  )

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
