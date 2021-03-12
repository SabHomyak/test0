import * as React from 'react';

//types
import { Product } from '@md-modules/shared/mock/market/products';

//context
import { ProductsAPIContext } from '@md-modules/market/products/layers/api/products';

export type ProductInfo = Pick<Product, 'id' | 'name' | 'price'>;

interface Context {
  productList: ProductInfo[];
}

const ProductBLContext = React.createContext<Context>({
  productList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const { products } = React.useContext(ProductsAPIContext);

  const productList = React.useMemo<ProductInfo[]>(() => {
    if (!products) {
      return [];
    }

    return products.map(({ id, price, name }) => ({ id, price, name }));
  }, [typeof products === 'undefined']);
  return (
    <ProductBLContext.Provider
      value={{
        productList
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};
export { ProductsBLContextProvider, ProductBLContext };
