import { PRODUCT_REPOSITORY } from './../../core/constants/index';
import { Product } from './models/product.model';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
