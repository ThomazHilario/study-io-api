import { IsString, IsNotEmpty } from 'class-validator'

export class TaskDto{
    @IsString()
    @IsNotEmpty()    
    name:string
}