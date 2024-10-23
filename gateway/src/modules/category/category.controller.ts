import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@ApiTags('Category Service')
@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @Get()
  getCategories() {
    return this.service.getCategoryList();
  }

  @ApiOperation({ summary: 'Get single category' })
  @Get('/:categoryId')
  getSingleCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.service.getSingleCategory(categoryId);
  }

  @ApiOperation({ summary: 'Create category' })
  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.service.createCategory(payload.name);
  }

  @ApiOperation({ summary: 'Update category' })
  @Patch('/:categoryId')
  updateCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.service.updateCategory({ ...payload, id: categoryId });
  }

  @ApiOperation({ summary: 'Delete category' })
  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteCategory(id);
  }
}
