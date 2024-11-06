import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class SignupRepository{
    // Constructor
    constructor(private prisma:PrismaService){}

    async createUser(email:string, username:string, password:string){
        try {
            await this.prisma.user.create({
                data:{
                    email,
                    username,
                    password
                }
            })

            return{
                message: 'User create in database'
            }
        } catch (error) {
            if(error){
                return {
                    message: 'not is possible user create in database'
                }
            }
        }
    }
}