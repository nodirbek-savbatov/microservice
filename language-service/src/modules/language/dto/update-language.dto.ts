import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateLanguageDto } from './create-language.dto';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
  @IsOptional()
  code?: string;

  @IsOptional()
  image?: string;

  @IsOptional()
  name?: string;

  @IsUUID(4)
  id: string
}
