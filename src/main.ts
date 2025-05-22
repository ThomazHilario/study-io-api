// Cookie
import cookieParser from 'cookie-parser'
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MainModule } from './main.module';
import * as dotenv from 'dotenv'

// Iniciando o dotenv
dotenv.config()


async function bootstrap() {
  const app = await NestFactory.create(MainModule, {cors:true});
  
  // Active cors
  app.enableCors()

  // Enable cookies
  app.use(cookieParser())

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe()
  )

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
