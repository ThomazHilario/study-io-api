// Nest
import { Injectable } from "@nestjs/common";

// Prisma
import { PrismaService } from "src/prisma.service";

@Injectable()
export class NotesRepository{
    // Constructor
    constructor(private readonly prisma:PrismaService){}

    // Get all notes
    async getAllNotes(userId:string){
        try {
            // Get all notes
            const notes = await this.prisma.note.findMany({
                where:{ userId }
            })  
            
            // Return notes
            return notes
        } catch (error) {
            console.log(error)
        }
    }

    // Create notes
    async createNote(name:string, userId:string){
        try {
            // Create note
            await this.prisma.note.create({
                data:{
                    id:crypto.randomUUID(),
                    name,
                    date: new Date(),
                    userId:userId
                }
            })

            // Return message
            return {
                message:'Created note'
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Update note
    async updateNote(name?:string, noteId?:string){
        try {
            // Update note
            await this.prisma.note.update({
                where:{
                    id:noteId
                },

                data:{
                    name:name,
                    date:new Date()
                }
            })

            // Return sucess message
            return {
                message:'Note updated!'
            }
        } catch (error) {
            if(error){
                return{
                    message:'This task not exist!'
                }
            }
        }
    }

    // Delete note
    async deleteNote(noteId:string){
        try {
            // Delete note
            await this.prisma.note.delete({
                where:{
                    id:noteId
                }
            })

            // Return message
            return {
                message:'Note deleted!'
            }
        } catch (error) {
            if(error){
                return{
                    message:'This task not exist!'
                }
            }
        }
    }
}