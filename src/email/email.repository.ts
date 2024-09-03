import { Injectable } from "@nestjs/common";
import { ResendService } from "nestjs-resend";
import { SendEmailDto } from "./Dtos/send-email.dto";


@Injectable()
export class SendEmailRepository{

    repository:ResendService

    constructor(resend: ResendService){
        this.repository = resend
    }

    async sendEmail(data:SendEmailDto){
        try {
            await this.repository.send({
                from:data.email,
                to:'thomazhilario5@gmail.com',
                subject:data.subject,
                html:data.html
            })           
        } catch (error) {
            console.log(error)
        }
    }
}