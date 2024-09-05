import { Injectable } from "@nestjs/common";
import { ResendService } from "nestjs-resend";
import { SendEmailDto } from "./Dtos/send-email.dto";
import { SendEmailRepository } from "./email.repository";

@Injectable()
export class SendEmailServices{
    
    service:SendEmailRepository

    constructor(repo: SendEmailRepository){
        this.service = repo
    }

    async verifyUser(email:string){
        return await this.service.verifyUser(email)
    }

    async sendEmail(data:SendEmailDto){
        try {
            await this.service.sendEmail(data)

        } catch (error) {
            console.log(error)
        }
    }
}