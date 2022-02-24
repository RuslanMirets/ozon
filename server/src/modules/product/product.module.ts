import { FileService } from './../file/file.service';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
  providers: [ProductService, ...productProviders, FileService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
