import { Module } from '@nestjs/common';
import { LocalizationClient } from './localization.client';
import { LocalizationService } from './localization.service';
import { LocalizationController } from './localization.controller';

@Module({
  providers: [LocalizationClient, LocalizationService],
  controllers: [LocalizationController],
})
export class LocalizationModule {}
