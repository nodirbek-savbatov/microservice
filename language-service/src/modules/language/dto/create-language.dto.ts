import { IsOptional, IsString, MaxLength } from "class-validator";

export class CreateLanguageDto {
    @IsString()
    @MaxLength(64)
    name: string;

    @IsString()
    @MaxLength(2)
    code: string;

    @IsOptional()
    @IsString()
    image?: string;
}
