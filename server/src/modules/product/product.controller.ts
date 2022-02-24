import { ProductDto } from './dto/product.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/core/utils/file-upload.utils';
import { diskStorage } from 'multer';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 11 }]))
  // @Post()
  // create(@UploadedFiles() files, @Body() dto: ProductDto) {
  //   const { image } = files;
  //   return this.productService.create(dto, image[0]);
  // }

  @Post()
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './dist/static/image',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(@UploadedFiles() files, @Body() dto: ProductDto) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    // return response;
    console.log(response);
    return this.productService.create(dto, response);
  }

  @Get()
  getAll() {
    return this.productService.findAll();
  }
}
