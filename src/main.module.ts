import { Module } from "@nestjs/common";
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from "./prisma.service";
import { SignupModule } from './signup/signup.module';
import { SignInModule } from './sign-in/sign-in.module';

@Module({
    imports:[EmailModule, ThemesModule, SignupModule, SignInModule],
    providers:[PrismaService],
    exports:[PrismaService]
})

export class MainModule{}