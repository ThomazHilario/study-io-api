// imports NestJs commom
import { Controller, Get, Post, Body } from '@nestjs/common';

// Themes service
import { ThemesService } from './themes.service';

// Dto Theme
import { ThemesDto } from './Dto/theme.dto';

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Get()
  async findThemes(){
    return await this.themesService.findThemes()
  }

  @Post()
  async insertTheme(@Body() params:ThemesDto){
    return await this.themesService.insertTheme(params.image_url, params.video_url)
  }
}
