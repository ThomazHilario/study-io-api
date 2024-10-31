import { Module } from "@nestjs/common";
import { EmailModule } from "./email/email.module";
import { ThemesModule } from './themes/themes.module';

@Module({
    imports:[EmailModule, ThemesModule],
})

export class MainModule{}