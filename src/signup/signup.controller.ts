// Nestjs
import { Controller, Post, Body, Res } from '@nestjs/common';

// Express
import { Response } from 'express';

// Providers
import { SignupService } from './signup.service';
import { SignupDto } from "./dto/signup.dto";

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  async createUser(@Res() response:Response, @Body() values:SignupDto){
    try {

      // Create user and retur id
      const user = await this.signupService.createUser(values.email, values.username, values.password)

      if(user){

        // Return
        return response.send(user)
      }
    } catch (error) {
      return response.send(error)
    }
  }
}
