import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class NotesDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    noteId?:string
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?:string
}