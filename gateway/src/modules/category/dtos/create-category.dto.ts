import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    type: 'string',
    example: 'Kitoblar',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
