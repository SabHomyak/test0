import * as React from 'react';
import { ProductAPIContextProvider } from '@md-m-product/layers/api/product';
import { ProductBLContextProvider } from '@md-m-product/layers/business';
import { ProductPresentation } from '@md-m-product/layers/presentation';
import { addProduct } from '../../../redux/actionCreators';

const Container = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation buttonHandler={addProduct} />
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);
const ProductContainer = React.memo(Container);
export { ProductContainer };
