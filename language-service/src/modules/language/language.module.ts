import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { PrismaService } from '@prisma';

@Module({
  controllers: [LanguageController],
  providers: [PrismaService,LanguageService],
})
export class LanguageModule {}
