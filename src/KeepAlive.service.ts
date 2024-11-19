import { Injectable, Logger } from '@nestjs/common'

// Nestjs schedule
import { Cron } from '@nestjs/schedule'

// Prisma
import { PrismaService } from './prisma.service'

@Injectable()
export class KeepAliveService{
    private readonly logger = new Logger(KeepAliveService.name)

    // Constructor
    constructor(private prisma:PrismaService){}

    @Cron('0 */8 * * *')
    async handleCron(){
        try {
            // Request in database
            await this.prisma.$queryRaw`SELECT 1`  

            // Log message
            this.logger.log('Conection pool is stable')          
        } catch (error) {
            // Log message
            this.logger.error('Connection poll not is stable', error)
        }
    }
}
