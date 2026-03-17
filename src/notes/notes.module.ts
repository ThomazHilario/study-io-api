import { Module } from '@nestjs/common';

// Controller
import { NotesController } from './notes.controller';

// Repository
import { NotesRepository } from './notes.repository';

// Service
import { NotesService } from './notes.service';

// Prisma
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [AuthModule],
  controllers: [NotesController],
  providers: [NotesRepository, NotesService, PrismaService],
  exports:[NotesService]
})
export class NotesModule {}
