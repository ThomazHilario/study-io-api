import { Injectable } from "@nestjs/common";
import { ResendService } from "nestjs-resend";
import { SendEmailDto } from "./Dtos/send-email.dto";
import * as firebase from 'firebase-admin'


@Injectable()
export class SendEmailRepository{

    repository:ResendService
    firebase: FirebaseFirestore.CollectionReference = firebase.firestore().collection('users')

    constructor(resend: ResendService){
        this.repository = resend
    }

    async verifyUser(email:string){
        try {

            // Array para armazenar todos os usuários
            let usersArray = []

            // Buscando usuários do banco de dados
            const users = await this.firebase.get()

            // Percorrendo cada snap e adicionando usuário ao array
            users.forEach(snap => {
                usersArray.push(snap.data())
            })

            // Buscando o usuário que está enviando o feedback
            const emailIsVerifiedOrNo = usersArray.filter(user => user.dataUser.email === email)

            // Retornando true caso o usuário seja client do app study-io
            return emailIsVerifiedOrNo.length === 1 ? true : false

        } catch (error) {
            console.log(error)
        }
    }

    async sendEmail(data:SendEmailDto){
        try {
            await this.repository.send({
                from:data.emailForOrganization,
                to:'thomazhilario5@gmail.com',
                subject:data.subject,
                html:data.html
            })           
        } catch (error) {
            console.log(error)
        }
    }
}