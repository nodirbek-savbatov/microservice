import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepo.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      count: createProductDto.count,
      rating: createProductDto.rating,
      categoryId: createProductDto.categoryId,
    });

    await this.productRepo.save(newProduct);

    return newProduct;
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepo.findOne({ where: { id } });
  }

  async update(updateProductDto: UpdateProductDto) {
    const foundedProduct = await this.productRepo.findOne({
      where: { id: updateProductDto.id },
    });

    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepo.update(
      { id: updateProductDto.id },
      {
        name: updateProductDto?.name,
        description: updateProductDto?.description,
        price: updateProductDto?.price,
        count: updateProductDto?.count,
        rating: updateProductDto?.rating,
      },
    );
  }

  async remove(id: number) {
    return await this.productRepo.delete({ id });
  }
}
