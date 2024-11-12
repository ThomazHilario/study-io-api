import { Controller, Post, Get, Patch, Delete, Body, Req, Param} from '@nestjs/common';

// Express
import { Request } from 'express';

// Dto
import { TaskDto } from './dto/task.dto';
import { TaskUpdateDto } from './dto/task.update.dto';

// Service
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Req() req:Request, @Body() task:TaskDto){

    // Get id user in cookie storage
    const userId = req.cookies['user']

    // Create task
    if(userId){
      return await this.taskService.createTask(task.name, userId)
    }

    // Message for error
    return {
      message: 'You not have permission!!'
    }
  }

  @Get()
  async getAllTasksForUser(@Req() req:Request){
    // Get id user in cookie storage
    const userId = req.cookies['user']

    // Find all tasks for user
    if(userId){
      return await this.taskService.getAllTasksForUser(userId)
    }

    // Message for error
    return{
      message:'You not have permission!!'
    }
  }

  @Patch()
  async updateTask(@Req() req:Request, @Body() taskValues:TaskUpdateDto){
    // Get id user in cookie storage
    const userId = req.cookies['user'] 

    // Update task
    if(userId){
      return await this.taskService.updateTask(taskValues)
    }

    // Message for error
    return{
      message:'You not have permission!!'
    }
  }

  @Delete('/:taskId')
  async deleteTask(@Req() req:Request, @Param('taskId') taskId:string){
    // Get id user in cookie storage
    const userId = req.cookies['user']

    // Delete task
    if(userId){
      return await this.taskService.deleteTask(taskId)
    }

    // Message for error
    return{
      message:'You not have permission!!'
    }
  }
  
}
