import { Controller, Post, Get, Patch, Delete, Body, Req, Param, Headers, UseGuards} from '@nestjs/common';

// Dto
import { TaskDto } from './dto/task.dto';
import { TaskUpdateDto } from './dto/task.update.dto';

// Service
import { TaskService } from './task.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService, private readonly AuthService: AuthService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createTask(@Headers() headers: any, @Body() task:TaskDto){
      const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

      const userId = data.id

      if(userId){
        return await this.taskService.createTask(task.name, userId)
      }
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllTasksForUser(@Headers() headers: any){
      const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

      const userId = data.id

      if(userId){
        return await this.taskService.getAllTasksForUser(userId)
      }
  }

  @UseGuards(AuthGuard)
  @Patch()
  async updateTask(@Headers() headers: any, @Body() taskValues:TaskUpdateDto){
      const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

      const userId = data.id

      if(userId){
        return await this.taskService.updateTask(taskValues)
      }
  }

  @UseGuards(AuthGuard)
  @Delete('/:taskId')
  async deleteTask(@Headers() headers: any, @Param('taskId') taskId:string){
     const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

      const userId = data.id

      if(userId){
        return await this.taskService.deleteTask(taskId)
      }
  }

}
