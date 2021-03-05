import * as React from 'react';
import { ProductAPIContext } from '@md-m-product/layers/api/product';
import { ID } from '@md-modules/shared/mock/market/cart';

interface ProductInfo {
  name: string;
  description: string;
  id: ID;
}

interface Context {
  productInfo: ProductInfo;
}

const ProductBLContext = React.createContext<Context>({
  productInfo: { name: '', description: '', id: '' }
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { product } = React.useContext(ProductAPIContext);

  const productInfo = React.useMemo<ProductInfo>(() => {
    if (!product) {
      return { name: '', description: '', id: '' };
    }

    return { name: product.name, description: product.description, id: product.id };
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
