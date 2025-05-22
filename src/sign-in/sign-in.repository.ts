// NestJS
import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";

// Bcrypt
import * as bcrypt from 'bcrypt'

// Prisma service
import { PrismaService } from "src/prisma.service";

@Injectable()
export class SignInRepository{
    // Constructor
    constructor(private prisma:PrismaService){}

    // SignIN user
    async signIn(email:string, password:string){
        try {

            // Get all users
            const user = await this.prisma.user.findUnique({
                where:{
                    email
                }
            })

            // Case have user
            if(user){
                // Compare hash in databse with hash digited
                const passwordIsEqualForHash = await bcrypt.compare(password, user.password)

                if(passwordIsEqualForHash) return user
               
                throw new Error('Password invalid!')
            }

            //  message for user
            throw new Error('Email not is exist in database!')
            
        } catch (error) {
            throw new BadRequestException ({
                statusCode: HttpStatus.CONFLICT,
                typeError: 'Login',
                message: error.message
            })      
        }
    }
}