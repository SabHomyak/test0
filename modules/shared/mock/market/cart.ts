import { Product, products } from '@md-modules/shared/mock/market/products';

export type Count = number;
export type CartProduct = Pick<Product, 'id' | 'name' | 'price'>;
export type ID = string;
export type Cart = Map<CartProduct, Count>;

export const cartProducts: Cart = new Map<CartProduct, Count>();
cartProducts.set(products[0], 1);
cartProducts.set(products[1], 3);
cartProducts.set(products[2], 3);
cartProducts.set(products[3], 5);
