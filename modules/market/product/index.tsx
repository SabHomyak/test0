import * as React from 'react';
import { ProductAPIContextProvider } from '@md-m-product/layers/api/product';
import { ProductBLContextProvider } from '@md-m-product/layers/business';
import { ProductPresentation } from '@md-m-product/layers/presentation';
import { addProduct } from '../../../redux/actionCreators';


const ProductContainer = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation buttonHandler={addProduct}/>
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);
export { ProductContainer };