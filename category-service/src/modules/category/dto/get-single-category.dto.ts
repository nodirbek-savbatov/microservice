import { IsNumber, IsPositive } from "class-validator";

export class GetSingleCategoryDto {
    @IsNumber()
    @IsPositive()
    id: number
}