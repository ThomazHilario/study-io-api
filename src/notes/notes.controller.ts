import { Body, Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';

// Service
import { NotesService } from './notes.service';

// Express
import { Request } from 'express';
import { NotesDto } from './dto/notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getAllNotes(@Req() req:Request){
    // Get id from userId
    const userId = req.cookies['user']

    // Return all notes
    if(userId){
      return await this.notesService.getAllNotes(userId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @Post()
  async createNote(@Req() req:Request, @Body() values:NotesDto){
    // Get id from userId
    const userId = req.cookies['user']

    // Return all notes
    if(userId){
      return await this.notesService.createNote(values.name, userId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @Patch()
  async updateNote(@Req() req:Request, @Body() values:NotesDto){
    // Get id from userId
    const userId = req.cookies['user']

    // Return all notes
    if(userId){
      return await this.notesService.updateNote(values.name, values.noteId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @Delete()
  async deleteNote(@Req() req:Request, @Body() values:NotesDto){
    // Get id from userId
    const userId = req.cookies['user']

    // Return all notes
    if(userId){
      return await this.notesService.deleteNote(values.noteId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }
}
