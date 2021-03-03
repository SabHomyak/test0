import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { products, Product } from '@md-modules/shared/mock/market/products';

interface Context {
  product: Product | undefined;
  isLoading: boolean;
}

const ProductAPIContext = React.createContext<Context>({
  product: undefined,
  isLoading: false
});

const ProductAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(products.find(({ id }) => id === query.id));

  return (
    <ProductAPIContext.Provider
      value={{
        product: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductAPIContext.Provider>
  );
};

export { ProductAPIContextProvider, ProductAPIContext };
