import * as React from 'react';
import { ProductsContainer } from '@md-modules/market/products';
import { ProductsLayout } from '@md-modules/shared/layouts/market';


const ProductsPage = () => {
  return (
    <ProductsLayout>
      <ProductsContainer/>
    </ProductsLayout>
  );
};


export default ProductsPage;