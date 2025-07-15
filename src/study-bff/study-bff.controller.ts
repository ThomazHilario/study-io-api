import { Controller, Get, Param } from "@nestjs/common";
import { StudyBffService } from "./study-bff-service";

@Controller('study-bff')
export class StudyBffController {
    constructor(private StudyBffService: StudyBffService){}

    @Get('/:userId')
    async RequestStudyBff(@Param('userId') userId: string) {
        try {
            return this.StudyBffService.RequestStudyBff(userId);
        } catch (error) {
            return error
        }
    }
}