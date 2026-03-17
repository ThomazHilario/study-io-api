import { Module } from '@nestjs/common';

// Prisma Service
import { PrismaService } from 'src/prisma.service';

// Repository
import { TaskRepository } from './task.repository';

// Service
import { TaskService } from './task.service';

// Constroller
import { TaskController } from './task.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, TaskService],
  exports: [TaskService],
})
export class TaskModule {}
