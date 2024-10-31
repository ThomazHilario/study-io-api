import { Controller, Get } from '@nestjs/common';
import { ThemesService } from './themes.service';

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Get()
  async findThemes(){
    return await this.themesService.findThemes()
  }
}
