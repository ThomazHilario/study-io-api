// NestJs
import { Controller, Get, Res, Param } from '@nestjs/common';

// Service
import { SignInService } from './sign-in.service';

// Express
import {Response} from 'express'

// Dto
import { SignInDto } from './Dto/signIn.dto';

@Controller('signIn')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Get('/:email/:password')
  async signIn(@Param() credentials:SignInDto, @Res() response:Response){
    const result = await this.signInService.signIn(credentials.email, credentials.password)

    // Return id
    if(result){

      // Save id in cookie storage
      response.cookie('user', result.id)

      // Return result
      return response.send(result)
    }

    // return message error
    return result
  }
}
