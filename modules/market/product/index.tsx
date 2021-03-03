import * as React from 'react';
import { ProductAPIContextProvider } from '@md-m-product/layers/api/product';
import { ProductBLContextProvider } from '@md-m-product/layers/business';
import { ProductPresentation } from '@md-m-product/layers/presentation';

const ProductContainer = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation/>
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);
export { ProductContainer };