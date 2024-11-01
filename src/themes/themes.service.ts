import { Injectable } from '@nestjs/common';

// Repository
import { ThemesRepository } from './themes.repository';

@Injectable()
export class ThemesService {
    constructor(private ThemesRepository:ThemesRepository){}

    // Find all themes
    async findThemes(){
        // Find all themes in database
        const allThemes = await this.ThemesRepository.findThemes()

        // Return all themes
        return allThemes.length > 0 ? allThemes : {message:'Not have Themes.'}
    }

    // Insert Theme
    async insertTheme(image_url:string, video_url:string){
        return await this.ThemesRepository.insertTheme(image_url, video_url)
    }
}
