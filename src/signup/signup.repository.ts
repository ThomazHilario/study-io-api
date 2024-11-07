import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

// Bcrypt
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupRepository{
    // Constructor
    constructor(private prisma:PrismaService){}

    // Create user in database
    async createUser(email:string, username:string, password:string){
        try {

            // Generate hash
            const hashPassword = await bcrypt.hash(password, 10)

            // Create user
            const user = await this.prisma.user.create({
                data:{
                    email,
                    username,
                    password: hashPassword
                }
            })
            
            // Return user
            return user.id
        } catch (error) { 
            throw {
                message: 'not is possible user create in database',
                error:error
            }      
        }
    }

    // Find user in database
    async getUser(id:string){
        try {
            // Find user
            const user = await this.prisma.user.findUnique({
                where:{id}
            })

            // Return user
            if(user) return { id: user.id }
            
        } catch (error) {
            console.log(error)
        }
    }
}