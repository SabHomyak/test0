import * as React from 'react';
import { ProductsAPIContextProvider } from '@md-modules/market/products/layers/api/products';
import { ProductsBLContextProvider } from '@md-modules/market/products/layers/business';
import { ProductsPresentation } from '@md-modules/market/products/layers/presentation';


const Container = () => (
  <ProductsAPIContextProvider>
    <ProductsBLContextProvider>
      <ProductsPresentation/>
    </ProductsBLContextProvider>
  </ProductsAPIContextProvider>
);
const ProductsContainer = React.memo(Container);

export { ProductsContainer };