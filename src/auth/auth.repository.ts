import { Injectable } from "@nestjs/common";

// Prisma
import { PrismaService } from "src/prisma.service";

@Injectable()
export class AuthRepository{
    // Constructor
    constructor(private prisma:PrismaService){}

    // Verify user
    async verifyUserInCookieStorage(id:string){
        try {
            if(id){
                // Find user
                const user = await this.prisma.user.findUnique({
                    where:{id}
                })

                // if have user
                if(user){
                    return {id: user.id}
                }
            }

            return {
                message:"Session Expired!"
            }
        } catch (error) {
            console.log(error)
        }
    }

    // get Data user
    async getDataUser(id:string){
        try {
            // Find user
            const user = await this.prisma.user.findUnique({
                where:{id}
            })

            // Case have user
            if(user) return user
        } catch (error) {
            console.log(error)
        }
    }
}