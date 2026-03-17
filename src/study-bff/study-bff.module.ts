import { Module } from "@nestjs/common";
import { StudyBffController } from "./study-bff.controller";
import { StudyBffService } from "./study-bff-service";
import { StudyBffRepository } from "./study-bff-repository";
import { TaskModule } from "src/task/task.module";
import { NotesModule } from "src/notes/notes.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [TaskModule, NotesModule, AuthModule],
    controllers: [StudyBffController],
    providers: [StudyBffService, StudyBffRepository],
})

export class StudyBffModule {}