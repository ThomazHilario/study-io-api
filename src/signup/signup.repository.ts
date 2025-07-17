import { Injectable, HttpStatus, BadRequestException  } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

// Bcrypt
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupRepository{
    // Constructor
    constructor(private readonly prisma:PrismaService){}

    // Create user in database
    async createUser(email:string, username:string, password:string){
        try {

            const user = await this.prisma.user.findUnique({ where:{
                email:email
            } })

            // User exist in database
            if(user){
                throw new Error('This user exist in database!')
            }

            // Generate hash
            const hashPassword = await bcrypt.hash(password, 10)

            // Create user
            const newUser = await this.prisma.user.create({
                data:{
                    email,
                    username,
                    password: hashPassword
                }
            })
            
            // Return user
            return newUser
        } catch (error) { 
            throw new BadRequestException ({
                statusCode: HttpStatus.CONFLICT,
                typeError: 'not is possible user create in database!',
                message: error.message
            })      
        }
    }
}