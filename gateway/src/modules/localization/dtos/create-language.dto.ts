import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({
        type: "string",
        example: "English",
        maxLength: 64
    })
    @IsString()
    @MaxLength(64)
    name: string;

    @ApiProperty({
        type: "string",
        example: "en",
        maxLength: 2
    })
    @IsString()
    @MaxLength(2)
    code: string;

    @ApiProperty({
        type: "string",
        example: "image.png",
        required: false
    })
    @IsOptional()
    @IsString()
    image?: string;
}