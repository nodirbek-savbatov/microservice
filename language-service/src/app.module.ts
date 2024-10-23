import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma';
import { LanguageModule, TranslateModule } from '@modules';

@Module({
  imports: [PrismaModule, LanguageModule, TranslateModule],
})
export class AppModule {}
