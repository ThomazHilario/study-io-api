import { Module } from '@nestjs/common';

// Prisma Service
import { PrismaService } from 'src/prisma.service';

// Repository
import { TaskRepository } from './task.repository';

// Service
import { TaskService } from './task.service';

// Constroller
import { TaskController } from './task.controller';

@Module({
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, TaskService],
})
export class TaskModule {}
