import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto extends OmitType(PartialType(CreateProductDto), ['categoryId']) {
  @IsNumber()
  @IsPositive()
  id: number;
}
