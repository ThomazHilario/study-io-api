import { Module } from "@nestjs/common";

// Nestjs Schedule
import { ScheduleModule } from "@nestjs/schedule";

// Modules
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { SignupModule } from './signup/signup.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { NotesModule } from './notes/notes.module';

// Service 
import { PrismaService } from "./prisma.service";
import { KeepAliveService } from "./KeepAlive.service";

@Module({
    imports:[EmailModule, ThemesModule, AuthModule, TaskModule, NotesModule, ScheduleModule.forRoot()],
    providers:[PrismaService, KeepAliveService],
    exports:[PrismaService]
})

export class MainModule{}