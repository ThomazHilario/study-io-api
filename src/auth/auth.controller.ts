import { Controller, Get, Req, Param, Post, Body, UseGuards, Headers } from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

// Express
import { Response } from 'express';

// Dto
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

// Guard
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async welcome(){
    return 'Hello, raquest login in /login or /register'
  }

  @UseGuards(AuthGuard)
  @Get('onAuth')
  async onAuth(@Headers() headers:any){
    return this.authService.verifyToken(headers.authorization.split(' ')[1])
  }

  @UseGuards(AuthGuard)
  @Get('getData')
  async getDataUser(@Headers() headers:any){
    const token = headers.authorization.split(' ')[1]
    return await this.authService.getData(token)
  }

  @Post('register')
  async registerUser(@Body() data: AuthRegisterDto, res:Response){
    return await this.authService.registerUser(data)
  }

  @Post('login')
  async loginUser(@Body() data:AuthLoginDto){
    return await this.authService.loginUser(data)
  }
}
