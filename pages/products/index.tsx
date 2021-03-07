import * as React from 'react';
import { ProductsContainer } from '@md-modules/market/products';
import { ProductsLayout } from '@md-modules/shared/layouts/market';
import { CartContext, CartContextProvider } from '@md-modules/shared/contexts/CartContext';
import { CartProduct, Count } from '@md-modules/shared/mock/market/cart';
import { ContentLoader } from '@md-ui/loaders/content-loader';

const InnerCart = () => {
  const { isLoading, cart } = React.useContext(CartContext);
  const products: JSX.Element[] = Array.from(cart || new Map<CartProduct, Count>())
    .map(([product, count]) => {
      return <div key={product.id}>{`${product.id} | ${product.name} | ${product.name} | ${count}`}</div>;
    });
  return <ContentLoader isLoading={isLoading}>
    <div>
      <div>{isLoading + 'inner'}</div>
      {products}
    </div>
  </ContentLoader>;
};

const ProductsPage = () => {
  return (
    <ProductsLayout>
      <ProductsContainer/>
    </ProductsLayout>
  );
};


export default ProductsPage;
