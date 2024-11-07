import { Module } from '@nestjs/common';

// Controller
import { AuthController } from './auth.controller';

// Repository
import { AuthRepository } from './auth.repository';

// Service
import { AuthService } from './auth.service';

// Prisma
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthRepository, AuthService, PrismaService],
})
export class AuthModule {}
