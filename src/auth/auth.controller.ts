import { Controller, Get, Req } from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

// Express
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async verifyUserInCookieStorage(@Req() request:Request){
    // Get id in cookie storage
    const id = request.cookies['user']

    // Return result
    return await this.authService.verifyUserInCookieStorage(id)
  }
}
