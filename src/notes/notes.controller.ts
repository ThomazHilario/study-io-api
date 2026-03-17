import { Body, Controller, Delete, Get, Headers, Patch, Post, Req, UseGuards } from '@nestjs/common';

// Service
import { NotesService } from './notes.service';

import { NotesDto } from './dto/notes.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService, private readonly AuthService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAllNotes(@Headers() headers: any){
    const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

    const userId = data.id

    // Return all notes
    if(userId){
      return await this.notesService.getAllNotes(userId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async createNote(@Headers() headers: any, @Body() values:NotesDto){
    const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

    const userId = data.id

    // Return all notes
    if(userId){
      return await this.notesService.createNote(values.name, userId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @UseGuards(AuthGuard)
  @Patch()
  async updateNote(@Headers() headers: any, @Body() values:NotesDto){
    const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

    const userId = data.id

    // Return all notes
    if(userId){
      return await this.notesService.updateNote(values.name, values.noteId)
    }

    // Message section expire
    return{
      message:'Your section expired!'
    }
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteNote(@Headers() headers: any, @Body() values:NotesDto){
    const data = await this.AuthService.getData(headers.authorization.split(' ')[1])

    const userId = data.id

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
