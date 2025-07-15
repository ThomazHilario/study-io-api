import { Injectable } from "@nestjs/common";
import { StudyBffService } from "./study-bff-service";
import { TaskService } from "src/task/task.service";
import { NotesService } from "src/notes/notes.service";

@Injectable()
export class StudyBffRepository {
    constructor(
        private TaskService: TaskService,
        private NotesService: NotesService
    ){}

    async RequestStudyBff(userId: string) {
        const [tasks, notes] = await Promise.all([
            this.TaskService.getAllTasksForUser(userId), 
            this.NotesService.getAllNotes(userId)
        ]);

        return { tasks, notes };
    }
}