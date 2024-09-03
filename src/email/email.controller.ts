import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendEmailDto } from './Dtos/send-email.dto'
import { SendEmailServices } from './email.service';

@Controller('email')
export class EmailController {

    // Propriedade sendEmailServices
    sendEmailServices:SendEmailServices

    // Constructor
    constructor(sendEmailServices:SendEmailServices){
        this.sendEmailServices = sendEmailServices
    }

    // Request get
    @Get()
    initialPage(){
        return JSON.stringify({
            message:'Study-io APi for send email'
        })
    }

    // Request Post
    @Post()
    async sendEmail(@Body() userEmail:SendEmailDto){
        try {
            this.sendEmailServices.sendEmail(userEmail)
            return 'email enviado'
        } catch (error) {
            return 'Algo deu errado!'
        }
    }
}
