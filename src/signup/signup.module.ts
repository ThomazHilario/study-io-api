import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { SignupRepository } from './signup.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SignupController],
  providers: [SignupService, SignupRepository, PrismaService],
  exports:[SignupService]
})
export class SignupModule {}
