import { IsBoolean, IsOptional, IsString } from "class-validator";

export class TaskUpdateDto{

    @IsString()
    taskId:string

    @IsString()
    @IsOptional()
    name?:string

    @IsBoolean()
    @IsOptional()
    isChecked?:boolean
}