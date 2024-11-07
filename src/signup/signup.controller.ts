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
      const userId = await this.signupService.createUser(values.email, values.username, values.password)

      if(userId){

        // Time cookies variables
        const days = 360 // 15 days
        const minutes = 60
        const seconds = 60
        const miliseconds = 1000

        // Save id user in cookies
        response.cookie('user', userId, {
          maxAge: days * minutes * seconds * miliseconds
        })

        // Return
        return response.send({
          message:'Created user in database'
        })
      }
    } catch (error) {
      return response.send(error)
    }
  }
}
