import * as React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { Cart, cartProducts } from '@md-modules/shared/mock/market/cart';

interface Context {
  cart: Cart | undefined
  isLoading: boolean
}

const CartContext = React.createContext<Context>({
  cart: undefined,
  isLoading: false
});
const CartContextProvider: React.FC = ({ children }) => {
  const { loading, data } = useQuery(cartProducts);
  return (
    <CartContext.Provider value={{
      cart: data,
      isLoading: loading
    }
    }>
      {children}
    </CartContext.Provider>
  );
};
export { CartContextProvider, CartContext };