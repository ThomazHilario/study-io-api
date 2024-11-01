import { Injectable } from '@nestjs/common'

// Prisma
import { PrismaService } from 'src/prisma.service'

@Injectable()

export class ThemesRepository{
    constructor(private prisma:PrismaService){}

    // Return all themes
    async findThemes(){
        return await this.prisma.themes.findMany()
    }

    // Insert themes
    async insertTheme(image_url:string, video_url:string){
        try {
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

        } catch (error) {
            return{
                message:'Error! Not is possible create theme'
            }
        }
            
    }
}