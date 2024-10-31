import { Injectable } from '@nestjs/common';

// Repository
import { ThemesRepository } from './themes.repository';

@Injectable()
export class ThemesService {
    constructor(private ThemesRepository:ThemesRepository){}

    async findThemes(){
        // Find all themes in database
        const allThemes = await this.ThemesRepository.findThemes()

        return allThemes.length > 0 ? allThemes : {message:'Not have Themes.'}
    }
}
