import { Product, products } from '@md-modules/shared/mock/market/products';

export type Count = number
export type CartProduct = Pick<Product, 'id' | 'name' | 'price'>
export type ID = string

export type Cart = Map<CartProduct, Count>

export const cartProducts: Cart = new Map<CartProduct, Count>();
// cartProducts.set(products[0], 2);
// cartProducts.set(products[1], 4);