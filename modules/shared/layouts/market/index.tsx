import * as React from 'react';
//styles
import { Wrapper } from './views';
//components
import { Header } from '@md-ui/headers/products';
import CartContainer from '@md-modules/market/cart';

export let dispatch: any;

const ProductsLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header/>
      {children}
      <CartContainer/>
    </Wrapper>
  );
};

export { ProductsLayout };
