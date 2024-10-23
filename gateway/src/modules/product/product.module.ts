import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductClient } from './product.client';
import { CategoryClient } from '../category';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductClient, CategoryClient],
})
export class ProductModule {}
