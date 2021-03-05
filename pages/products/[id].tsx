import { ProductContainer } from '@md-market/product';
import * as React from 'react';
import { ProductsLayout } from '@md-modules/shared/layouts/market';

const ProductPage = () => {
  return (
    <ProductsLayout>
      <ProductContainer />
    </ProductsLayout>
  );
};
export default ProductPage;
