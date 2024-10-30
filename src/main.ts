import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MainModule } from './main.module';
import { initializeFirebase } from './firebase.config';
import * as dotenv from 'dotenv'

// Iniciando o dotenv
dotenv.config()

// Iniciando firebase
initializeFirebase()

async function bootstrap() {
  const app = await NestFactory.create(MainModule, {cors:true});
  
  // Active cors
  app.enableCors()

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe()
  )

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
