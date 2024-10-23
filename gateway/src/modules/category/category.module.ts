import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryClient } from './category.client';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService, CategoryClient],
  controllers: [CategoryController],
})
export class CategoryModule {}
