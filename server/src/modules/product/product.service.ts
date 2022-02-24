import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from './../../core/constants/index';
import { Product } from './models/product.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product) {}

  async findAll() {
    return await this.productRepository.findAll({ include: { all: true } });
  }
}
