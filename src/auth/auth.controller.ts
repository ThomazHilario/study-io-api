import { Controller, Get, Req, Param, Post, Body, UseGuards, Headers } from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

// Express
import { Response } from 'express';

// Dto
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

// Guard
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('onAuth')
  async onAuth(@Headers() headers){
    return this.authService.verifyToken(headers.authorization.split(' ')[1])
  }

  @Post('register')
  async registerUser(@Body() data: AuthRegisterDto, res:Response){
    return this.authService.registerUser(data)
  }

  @Post('login')
  async loginUser(@Body() data:AuthLoginDto){
    return this.authService.loginUser(data)
  }
}
