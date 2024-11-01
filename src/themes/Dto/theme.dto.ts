import { IsString, IsNotEmpty } from 'class-validator'

export class ThemesDto{
    @IsString()
    @IsNotEmpty()
    image_url:string;

    @IsString()
    @IsNotEmpty()
    video_url:string;
}