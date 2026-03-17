import { Controller, Get, Post, Body, UseGuards, Headers } from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

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
    return { message: 'Hello, raquest login in /login or /register' }
  }

  @UseGuards(AuthGuard)
  @Get('onAuth')
  async onAuth(@Headers() headers:any){
    try {
      return this.authService.verifyToken(headers.authorization.split(' ')[1])
    } catch (error) {
      return error
    }
  }

  @UseGuards(AuthGuard)
  @Get('getData')
  async getDataUser(@Headers() headers:any){
    try {
      const token = headers.authorization.split(' ')[1]
      return await this.authService.getData(token)
    } catch (error) {
      return error
    }
  }

  @Post('register')
  async registerUser(@Body() data: AuthRegisterDto){
    try {
      return await this.authService.registerUser(data)
    } catch (error) {
      return error
    }
  }

  @Post('login')
  async loginUser(@Body() data:AuthLoginDto){
    try {
      return await this.authService.loginUser(data)
    } catch (error) {
      return error
    }
  }
}
