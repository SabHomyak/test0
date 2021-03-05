import * as React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { Product, products } from '@md-modules/shared/mock/market/products';

interface Context {
  products: Product[] | undefined;
  isLoading: boolean;
}

const ProductsAPIContext = React.createContext<Context>({
  products: [],
  isLoading: false
});

const ProductsAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(products);
  return (
    <ProductsAPIContext.Provider
      value={{
        products: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductsAPIContext.Provider>
  );
};

export { ProductsAPIContextProvider, ProductsAPIContext };
