import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateLanguageDto {
    @ApiProperty({
        type: "string",
        example: "English",
        maxLength: 64,
        required: false
    })
    @IsOptional()
    @IsString()
    @MaxLength(64)
    name?: string;

    @ApiProperty({
        type: "string",
        example: "en",
        maxLength: 2,
        required: false
    })
    @IsOptional()
    @IsString()
    @MaxLength(2)
    code?: string;

    @ApiProperty({
        type: "string",
        example: "image.png",
        required: false
    })
    @IsOptional()
    @IsString()
    image?: string;
}