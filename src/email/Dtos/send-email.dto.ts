import { IsString } from 'class-validator'

export class SendEmailDto{
    @IsString()
    emailForVerification:string

    @IsString()
    emailForOrganization:string

    @IsString()
    subject:string

    @IsString()
    html:string
}