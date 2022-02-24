import { FileService, FileType } from './../file/file.service';
import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from './../../core/constants/index';
import { Product } from './models/product.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product,
    private fileService: FileService,
  ) {}

  async create(dto: ProductDto, image: any): Promise<Product> {
    // const imagePath = this.fileService.createFile(FileType.IMAGE, image);
    return await this.productRepository.create<Product>({...dto, image} );
  }

  async findAll() {
    return await this.productRepository.findAll({ include: { all: true } });
  }
}
