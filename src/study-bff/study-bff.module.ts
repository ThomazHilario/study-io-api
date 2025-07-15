import { Module } from "@nestjs/common";
import { StudyBffController } from "./study-bff.controller";
import { StudyBffService } from "./study-bff-service";
import { StudyBffRepository } from "./study-bff-repository";
import { TaskModule } from "src/task/task.module";
import { NotesModule } from "src/notes/notes.module";

@Module({
    imports: [TaskModule, NotesModule],
    controllers: [StudyBffController],
    providers: [StudyBffService, StudyBffRepository],
})

export class StudyBffModule {}