import { Injectable } from '@nestjs/common';

// Repository
import { ThemesRepository } from './themes.repository';

@Injectable()
export class ThemesService {
    constructor(private readonly ThemesRepository:ThemesRepository){}

    async findThemes(){
        return await this.ThemesRepository.findThemes()
    }
}
