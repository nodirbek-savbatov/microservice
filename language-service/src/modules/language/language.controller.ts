import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LanguageService } from './language.service';
import { CreateLanguageDto, UpdateLanguageDto } from './dto';

@Controller()
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @MessagePattern('createLanguage')
  create(@Payload() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @MessagePattern('findAllLanguage')
  findAll() {
    return this.languageService.findAll();
  }

  @MessagePattern('findOneLanguage')
  findOne(@Payload() id: string) {
    return this.languageService.findOne(id);
  }

  @MessagePattern('updateLanguage')
  update(@Payload() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(updateLanguageDto.id, updateLanguageDto);
  }

  @MessagePattern('removeLanguage')
  remove(@Payload() id: string) {
    return this.languageService.remove(id);
  }
}
