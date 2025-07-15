import { Injectable } from "@nestjs/common";
import { StudyBffRepository } from "./study-bff-repository";

@Injectable()
export class StudyBffService{
    constructor(private studyBffRepository: StudyBffRepository){}


    async RequestStudyBff(userId: string) {
        return this.studyBffRepository.RequestStudyBff(userId);
    }
}