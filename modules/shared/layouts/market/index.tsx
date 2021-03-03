import { Wrapper } from './views';
import * as React from 'react';
import { Header } from '@md-ui/headers/products';
import CartContainer from '@md-modules/market/cart';
import { useState } from 'react';
import { CartAPIContextProvider } from './layers/api/cart';
import { CartBlContextProvider } from './layers/business';

let ShowCartContext: React.Context<React.Dispatch<React.SetStateAction<boolean>>>;

const ProductsLayout: React.FC = ({ children }) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  ShowCartContext = React.createContext(setShowCart);
  return (
    <Wrapper>
      <CartAPIContextProvider>
        <CartBlContextProvider>
          <Header/>
          {children}
          {showCart && <CartContainer/>}
        </CartBlContextProvider>
      </CartAPIContextProvider>
    </Wrapper>
  );
};

export { ProductsLayout, ShowCartContext };