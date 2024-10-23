import { IsNumber, IsPositive } from 'class-validator';

export class DeleteCategoryDto {
  @IsNumber()
  @IsPositive()
  id: number;
}
