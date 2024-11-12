// Nest common
import { Injectable } from "@nestjs/common";

// Interfaces
import { TaskUpdateProps } from "./interfaces/task.update.type";

// Prisma Service
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TaskRepository{
    // Constructor
    constructor(private prisma:PrismaService){}

    // Create task
    async createTask(name:string, userId:string){
        try {
            const createTask = await this.prisma.task.create({
                data:{
                    id: crypto.randomUUID(),
                    name,
                    userId,
                    isChecked:false
                }
            })

            if(createTask){
                return {
                    message:'Created task in database'
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Get all tasks for user
    async getAllTasksForUser(userId:string){
        try {
            const allTasks = await this.prisma.task.findMany({
                where:{userId}
            })

            if(allTasks){
                return allTasks
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Update task
    async updateTask(taskValues:TaskUpdateProps){
        try {
            // Updating task
            await this.prisma.task.update({
                where:{
                    id:taskValues.taskId
                },
                data:{
                    name:taskValues.name,
                    isChecked:taskValues.isChecked
                }
            })

            // Message
            return{
                message:'Task updated!'
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Delete task
    async deleteTask(taskId:string){
        try {
            await this.prisma.task.delete({
                where:{id: taskId}
            })

            return {
                message:'Task deleted'
            }
        } catch (error) {
            console.log(error)
        }
    }
}