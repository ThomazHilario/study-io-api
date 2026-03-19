import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

// Service
import { NotesService } from './notes.service';

import { NotesDto } from './dto/notes.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly AuthService: AuthService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAllNotes(@Headers() headers: any) {
    const data = await this.AuthService.getData(
      headers.authorization.split(' ')[1],
    );

    const userId = data.id;

    if (userId) {
      return await this.notesService.getAllNotes(userId);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async createNote(@Headers() headers: any, @Body() values: NotesDto) {
    const data = await this.AuthService.getData(
      headers.authorization.split(' ')[1],
    );

    const userId = data.id;

    if (userId) {
      return await this.notesService.createNote(values.name, userId);
    }
  }

  @UseGuards(AuthGuard)
  @Patch()
  async updateNote(@Headers() headers: any, @Body() values: NotesDto) {
    const data = await this.AuthService.getData(
      headers.authorization.split(' ')[1],
    );

    const userId = data.id;

    if (userId) {
      return await this.notesService.updateNote(values.name, values.noteId);
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':/noteId')
  async deleteNote(@Headers() headers: any, @Param('noteId') noteId: string) {
    const data = await this.AuthService.getData(
      headers.authorization.split(' ')[1],
    );

    const userId = data.id;

    if (userId) {
      return await this.notesService.deleteNote(noteId);
    }
  }
}
