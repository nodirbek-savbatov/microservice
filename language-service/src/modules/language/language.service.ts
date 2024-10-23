import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from '@prisma';

@Injectable()
export class LanguageService {
  constructor(private prisma: PrismaService) {}

  async create(createLanguageDto: CreateLanguageDto) {
    return await this.prisma.language.create({
      data: {
        code: createLanguageDto.code,
        name: createLanguageDto.name,
        image: createLanguageDto?.image,
      },
    });
  }

  async findAll() {
    return await this.prisma.language.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.language.findFirst({ where: { id } });
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto) {
    return await this.prisma.language.update({
      where: { id },
      data: {
        code: updateLanguageDto?.code,
        name: updateLanguageDto?.name,
        image: updateLanguageDto?.image,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.language.delete({ where: { id } });
  }
}
