import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryService } from './category.service';
import {
  CreateCategoryDto,
  DeleteCategoryDto,
  GetSingleCategoryDto,
  UpdateCategoryDto,
} from './dto';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern('createCategory')
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern('getAllCategories')
  async findAll() {
    return await this.categoryService.findAll();
  }

  @MessagePattern('getSingleCategory')
  findOne(@Payload() payload: GetSingleCategoryDto) {
    return this.categoryService.findOne(payload.id);
  }

  @MessagePattern('updateCategory')
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto.id, updateCategoryDto);
  }

  @MessagePattern('deleteCategory')
  remove(@Payload() payload: DeleteCategoryDto) {
    return this.categoryService.remove(payload.id);
  }
}
