import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Cart, CartProduct, cartProducts, Count } from '@md-modules/shared/mock/market/cart';
import { useEffect, useState } from 'react';

interface Context {
  products: Cart | undefined;
  isLoading: boolean;
}

const CartAPIContext = React.createContext<Context>({
  products: undefined,
  isLoading: false
});

const CartAPIContextProvider: React.FC = (props) => {
  // make api call here
  // const { data, loading } = useQuery(cartProducts);
  const [data, setData] = useState<Cart | undefined>(undefined);
  const loading = false;
  useEffect(() => {
    const dataFromStorage = localStorage.getItem('cartState');
    if (dataFromStorage) {
      const newData: Cart = new Map<CartProduct, Count>(JSON.parse(dataFromStorage));
      setData(newData);
    } else {
      setData(cartProducts);
    }
  }, []);
  return (
    <CartAPIContext.Provider
      value={{
        products: data,
        isLoading: loading
      }}
    >
      {props.children}
    </CartAPIContext.Provider>
  );
};


export { CartAPIContextProvider, CartAPIContext };
