import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import { ThemesRepository } from './themes.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ThemesController],
  providers: [ThemesRepository, ThemesService, PrismaService],
})
export class ThemesModule {}
