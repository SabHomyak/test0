import * as React from 'react';
//styles
import { Wrapper } from './views';
//components
import { Header } from '@md-ui/headers/products';
import { CartContainer } from '@md-modules/market/cart';
import { CartContextProvider } from '@md-modules/shared/contexts/CartContext';


const ProductsLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <CartContextProvider>
        <Header />
        {children}
        <CartContainer />
      </CartContextProvider>
    </Wrapper>
  );
};

export { ProductsLayout };
