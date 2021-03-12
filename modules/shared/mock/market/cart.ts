import { Product, products } from '@md-modules/shared/mock/market/products';

export type Count = number;
export type ID = string;

export interface ProductCart extends Omit<Product, 'description'> {
  count: Count
}


export const cartProducts: Array<ProductCart> = new Array<ProductCart>();
cartProducts.push({ ...products[0], count: 2 });
