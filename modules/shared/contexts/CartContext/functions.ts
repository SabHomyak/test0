import { ID, ProductCart } from '@md-modules/shared/mock/market/cart';
import { products } from '@md-modules/shared/mock/market/products';

export type TypeAction = 'increase' | 'decrease';
export const changeProductCount = (productCart: Array<ProductCart>, id: ID, action: TypeAction): Array<ProductCart> => {
  const newProducts = [...productCart];
  const index = newProducts.findIndex((product) => product.id === id);
  const newProduct =
    index === -1 ? { ...products.find((product) => product.id === id), count: 0 } : { ...productCart[index] };
  action === 'increase' ? newProduct.count++ : newProduct.count--;
  // @ts-ignore
  index === -1 ? newProducts.push(newProduct) : (newProducts[index] = newProduct);
  return newProducts.filter((product) => product.count !== 0);
};
