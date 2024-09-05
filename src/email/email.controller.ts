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

            // Iniciando a verificação do email
            const isEmailFromStudy = await this.sendEmailServices.verifyUser(userEmail.emailForVerification)
            
            // Caso o email seja um email cadastrado no app Study-io
            if(isEmailFromStudy){
                this.sendEmailServices.sendEmail(userEmail)
                return JSON.stringify({
                    message:'O seu email foi enviado para a equipe da Study-io'
                })
            }

            // Caso o email não seja verficado
            return JSON.stringify({
                message:'Email não está cadastrado no app Study-io'
            })
            
        } catch (error) {
            return 'Algo deu errado!'
        }
    }
}
