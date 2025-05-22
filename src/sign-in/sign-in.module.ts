import { Module } from '@nestjs/common';
// Controller
import { SignInController } from './sign-in.controller';

// Repository
import { SignInRepository } from './sign-in.repository';

// Service
import { SignInService } from './sign-in.service';

// Prisma Service
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SignInController],
  providers: [SignInRepository, SignInService, PrismaService],
  exports:[SignInService]
})
export class SignInModule {}
