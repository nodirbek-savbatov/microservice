import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LocalizationService } from './localization.service';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Localization service")
@Controller('localizaton')
export class LocalizationController {
  constructor(private service: LocalizationService) {}

  @Get('/languages')
  getAllLanguages() {
    return this.service.getAllLanguages();
  }

  @Get('/languages/:languageId')
  getSingleLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.service.getSingleLanguage(id);
  }

  @Patch('/languages/edit/:languageId')
  updateLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() payload: UpdateLanguageDto,
  ) {
    return this.service.updateLanguage({ id, ...payload });
  }

  @Post('/languages/add')
  createLanguage(@Body() payload: CreateLanguageDto) {
    return this.service.createLanguage(payload);
  }

  @Delete('/languages/:languageId')
  removeLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.service.removeLanguage(id);
  }
}
