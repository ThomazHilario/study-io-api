import { Controller, Post, Body } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from "./dto/signup.dto";

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  async createUser(@Body() values:SignupDto){
    try {
      return await this.signupService.createUser(values.email, values.username, values.password)
    } catch (error) {
      console.log(error)
    }
  }
}
