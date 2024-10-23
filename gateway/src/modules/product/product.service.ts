import { Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductClient } from './product.client';
import { CategoryClient } from '../category';

@Injectable()
export class ProductService {
  constructor(
    private productClient: ProductClient,
    private categoryClient: CategoryClient,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const category = await firstValueFrom(
      this.categoryClient.getSingleCategory(createProductDto.categoryId),
    );

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.productClient.createProduct(createProductDto);
  }

  findAll() {
    return this.productClient.getAllProducts();
  }

  findOne(id: number) {
    return this.productClient.getSingleProduct(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
