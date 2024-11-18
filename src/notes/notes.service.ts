// Nest
import { Injectable } from '@nestjs/common';

// Repository
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
    // Constructor
    constructor(private NotesRepository:NotesRepository){}

    // Get all notes
    async getAllNotes(userId:string){
        return await this.NotesRepository.getAllNotes(userId)
    }

    // Create note
    async createNote(name:string, userId:string){
        return await this.NotesRepository.createNote(name, userId)
    }

    // Update note
    async updateNote(name?:string, noteId?:string){
        return await this.NotesRepository.updateNote(name, noteId)
    }

    // Delete note
    async deleteNote(noteId:string){
        return await this.NotesRepository.deleteNote(noteId)
    }
}
