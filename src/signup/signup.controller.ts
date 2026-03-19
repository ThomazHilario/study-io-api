// Nestjs
import { Controller, Post, Body, Res } from '@nestjs/common';

// Express
import { Response } from 'express';

// Providers
import { SignupService } from './signup.service';
import { SignupDto } from './dto/signup.dto';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  async createUser(@Body() values: SignupDto) {
    const user = await this.signupService.createUser(
        values.email,
        values.username,
        values.password,
      );

    return user;
  }
}
