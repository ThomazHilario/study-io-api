import { Injectable } from '@nestjs/common'

// Prisma
import { PrismaService } from 'src/prisma.service'

@Injectable()

export class ThemesRepository{
    constructor(private prisma:PrismaService){}

    async findThemes(){
        return await this.prisma.themes.findMany()
    }
}