// NestJs
import { Controller, Post, Res, Body } from '@nestjs/common';

// Service
import { SignInService } from './sign-in.service';

// Express
import { Response } from 'express';

// Dto
import { SignInDto } from './Dto/signIn.dto';

@Controller('signIn')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async signIn(@Body() credentials: SignInDto, @Res() response: Response) {
    try {
      const result = await this.signInService.signIn(
        credentials.email,
        credentials.password,
      );

      return response.status(200).send(result);
    } catch (error) {
      return response.status(error.status || 500).send({
        message: error.message || 'Unexpected error',
      });
    }
  }
}
