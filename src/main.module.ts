import { Module } from "@nestjs/common";

// Nestjs Schedule
import { ScheduleModule } from "@nestjs/schedule";

// Modules
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { AuthModule } from './auth/auth.module';

// Service 
import { PrismaService } from "./prisma.service";
import { KeepAliveService } from "./KeepAlive.service";
import { StudyBffModule } from "./study-bff/study-bff.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[AuthModule, ThemesModule, ScheduleModule.forRoot(), ConfigModule.forRoot(), StudyBffModule],
    providers:[PrismaService, KeepAliveService],
    exports:[PrismaService]
})

export class MainModule{}