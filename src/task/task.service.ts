import { Injectable } from '@nestjs/common';

// Interface
import { TaskUpdateProps } from './interfaces/task.update.type';

// Repository
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    // Constructor
    constructor(private TaskRepository:TaskRepository){}

    // Create task
    async createTask(name:string, userId:string){
        return await this.TaskRepository.createTask(name, userId)
    }

    // Get all tasks for user
    async getAllTasksForUser(userId:string){
        return await this.TaskRepository.getAllTasksForUser(userId)
    }

    // Update Task
    async updateTask(taskValues:TaskUpdateProps){
        return await this.TaskRepository.updateTask(taskValues)
    }

    // Delete Task
    async deleteTask(taskId:string){
        return this.TaskRepository.deleteTask(taskId)
    }
}
