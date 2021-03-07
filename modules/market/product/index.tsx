import * as React from 'react';
import { ProductAPIContextProvider } from '@md-m-product/layers/api/product';
import { ProductBLContextProvider } from '@md-m-product/layers/business';
import { ProductPresentation } from '@md-m-product/layers/presentation';

const Container = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation buttonHandler={() => {
      }}/>
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);
const ProductContainer = React.memo(Container);
export { ProductContainer };
