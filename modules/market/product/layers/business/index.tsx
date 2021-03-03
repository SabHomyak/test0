import * as React from 'react';
import { ProductAPIContext } from '@md-m-product/layers/api/product';

interface ProductInfo {
  name: string;
  description: string;
}

interface Context {
  productInfo: ProductInfo;
}

const ProductBLContext = React.createContext<Context>({
  productInfo: { name: '', description: '' }
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { product } = React.useContext(ProductAPIContext);

  const productInfo = React.useMemo<ProductInfo>(() => {
    if (!product) {
      return { name: '', description: '' };
    }

    return { name: product.name, description: product.description };
  }, [typeof product === 'undefined']);

  return (
    <ProductBLContext.Provider
      value={{
        productInfo
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
