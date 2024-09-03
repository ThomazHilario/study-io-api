import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { SendEmailRepository } from './email.repository';
import { SendEmailServices } from './email.service';
import { ResendModule } from 'nestjs-resend';

@Module({
  imports:[
    ResendModule.forAsyncRoot({
      useFactory: async () => ({
        apiKey:'re_QbTHjbu7_3Loo8YjdvqEa5sJLNDXYJ7gn'
      }),
    })
  ],
  controllers: [EmailController],
  providers:[SendEmailServices, SendEmailRepository]
})
export class EmailModule {}
