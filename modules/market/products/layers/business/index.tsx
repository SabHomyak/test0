import * as React from 'react';


import { Product } from '@md-modules/shared/mock/market/products';
import { ProductsAPIContext } from '@md-modules/market/products/layers/api/products';

interface Context {
  productList: Pick<Product, 'id' | 'name' | 'price'>[]
}

const ProductBLContext = React.createContext<Context>({
  productList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const { products } = React.useContext(ProductsAPIContext);

  const productList = React.useMemo<Pick<Product, 'id' | 'name' | 'price'>[]>(() => {
    if (!products) {
      return [];
    }

    return products
  }, [typeof products === 'undefined']);

  return <ProductBLContext.Provider
    value={{
      productList
    }}
  >
    {children}
  </ProductBLContext.Provider>;
};
export { ProductsBLContextProvider, ProductBLContext };