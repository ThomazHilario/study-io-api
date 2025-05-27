// Modules
import { Module } from '@nestjs/common';
import { SignInModule } from '../sign-in/sign-in.module';
import { SignupModule } from '../signup/signup.module';
import { JwtModule } from '@nestjs/jwt';

// Controller
import { AuthController } from './auth.controller';

// Repository
import { AuthRepository } from './auth.repository';

// Service
import { AuthService } from './auth.service';

// Prisma
import { PrismaService } from '../prisma.service';

// env
import 'dotenv/config'

@Module({
  imports:[
    SignInModule, 
    SignupModule, 
    JwtModule.register({
      global:true,
      secret: String(process.env.SECRET_KEY),
      signOptions: { expiresIn: '5min' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthRepository, AuthService, PrismaService],
})
export class AuthModule {}
