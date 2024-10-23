import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: "string",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: "string",
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: "number",
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    type: "number",
  })
  @IsNumber()
  @IsPositive()
  count: number;

  @ApiProperty({
    type: "number",
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    type: "number",
  })
  @IsNumber()
  @IsPositive()
  categoryId: number;
}
