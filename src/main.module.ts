import { Module } from "@nestjs/common";
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from "./prisma.service";

@Module({
    imports:[EmailModule, ThemesModule],
    providers:[PrismaService],
    exports:[PrismaService]
})

export class MainModule{}