import { Module } from "@nestjs/common";
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from "./prisma.service";
import { SignupModule } from './signup/signup.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
    imports:[EmailModule, ThemesModule, SignupModule, SignInModule, AuthModule, TaskModule],
    providers:[PrismaService],
    exports:[PrismaService]
})

export class MainModule{}