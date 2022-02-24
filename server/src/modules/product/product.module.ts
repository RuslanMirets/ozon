import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
  providers: [ProductService, ...productProviders],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
