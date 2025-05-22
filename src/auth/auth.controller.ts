import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

// Express
import { Response } from 'express';

// Dto
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async registerUser(@Body() data: AuthRegisterDto, res:Response){
    return this.authService.registerUser(data)
  }

  @Post('login')
  async loginUser(@Body() data:AuthLoginDto){
    return this.authService.loginUser(data)
  }
}
