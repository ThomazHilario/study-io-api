// NestJs
import { Controller, Get, Req, Res, Param } from '@nestjs/common';

// Service
import { SignInService } from './sign-in.service';

// Express
import {Request, Response} from 'express'

// Dto
import { SignInDto } from './Dto/signIn.dto';

@Controller('signIn')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Get()
  async verifyUser(@Req() request:Request){

    // Return user
    if (request.cookies['user']){
      // Id for user in cookie storage
      return await this.signInService.verifyUser(request.cookies['user'])
    }

    // Return message
    return{
      message:'Log in to your account'
    }
  }

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
