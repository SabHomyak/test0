import * as React from 'react';


import { Product } from '@md-modules/shared/mock';
import { ProductsAPIContext } from '@md-modules/market/products/layers/api/products';

interface Context {
  productList: Pick<Product, 'id' | 'name'>[]
}

const ProductBLContext = React.createContext<Context>({
  productList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const { products } = React.useContext(ProductsAPIContext);

  const productList = React.useMemo<Pick<Product, 'id' | 'name'>[]>(() => {
    if (!products) {
      return [];
    }

    return products.map(({ id, name }) => ({
      name, id
    }));
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