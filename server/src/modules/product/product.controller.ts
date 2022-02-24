import { ProductDto } from './dto/product.dto';
import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 11 }]))
  @Post()
  create(@UploadedFiles() files, @Body() dto: ProductDto) {
    const { image } = files;
    return this.productService.create(dto, image[0]);
  }

  @Get()
  getAll() {
    return this.productService.findAll();
  }
}
