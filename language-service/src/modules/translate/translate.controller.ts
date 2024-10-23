import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TranslateService } from './translate.service';
import { CreateTranslateDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';

@Controller()
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @MessagePattern('createTranslate')
  create(@Payload() createTranslateDto: CreateTranslateDto) {
    return this.translateService.create(createTranslateDto);
  }

  @MessagePattern('findAllTranslate')
  findAll() {
    return this.translateService.findAll();
  }

  @MessagePattern('findOneTranslate')
  findOne(@Payload() id: number) {
    return this.translateService.findOne(id);
  }

  @MessagePattern('updateTranslate')
  update(@Payload() updateTranslateDto: UpdateTranslateDto) {
    return this.translateService.update(updateTranslateDto.id, updateTranslateDto);
  }

  @MessagePattern('removeTranslate')
  remove(@Payload() id: number) {
    return this.translateService.remove(id);
  }
}
