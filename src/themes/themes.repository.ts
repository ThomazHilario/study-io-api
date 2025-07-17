import { Injectable } from '@nestjs/common'

// Prisma
import { PrismaService } from 'src/prisma.service'

@Injectable()

export class ThemesRepository{

    // Constructor
    constructor(private readonly prisma:PrismaService){}

    // Return all themes
    async findThemes(){
        return await this.prisma.themes.findMany()
    }

    // Insert themes
    async insertTheme(image_url:string, video_url:string){
        try {

            // allUsers
            let allUsers = await this.prisma.user.findMany()

            // Get admin verification
            const verifiedUser = allUsers.find(user => user.email === process.env.TOKEN)

            // Logic case is verified admin
            if(verifiedUser){
                // Create new theme
                await this.prisma.themes.create({
                    data:{
                        image_url,
                        video_url,
                    }
                })

                // Return message
                return {
                    message: 'Created theme in database'
                }
            }

            // Erro message
            return {
                message:'You not is verified',
            }

        } catch (error) {
            return{
                message:'Error! Not is possible create theme',
            }
        }
            
    }
}