import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { initializeFirebase } from './firebase.config';
import * as dotenv from 'dotenv'

// Iniciando o dotenv
dotenv.config()

// Iniciando firebase
initializeFirebase()

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
