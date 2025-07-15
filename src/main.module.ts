import { Module } from "@nestjs/common";

// Nestjs Schedule
import { ScheduleModule } from "@nestjs/schedule";

// Modules
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { NotesModule } from './notes/notes.module';

// Service 
import { PrismaService } from "./prisma.service";
import { KeepAliveService } from "./KeepAlive.service";
import { StudyBffModule } from "./study-bff/study-bff.module";

@Module({
    imports:[AuthModule, TaskModule, NotesModule, ScheduleModule.forRoot(), StudyBffModule],
    providers:[PrismaService, KeepAliveService],
    exports:[PrismaService]
})

export class MainModule{}