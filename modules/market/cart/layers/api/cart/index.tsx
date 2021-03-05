import * as React from 'react';
import { useEffect, useState } from 'react';
// mock
import { Cart, CartProduct, cartProducts, Count } from '@md-modules/shared/mock/market/cart';
import { Product, products } from '@md-modules/shared/mock/market/products';
//context
import { ContextApp } from '../../../../../../redux/reducer';
//redux
import { setCart } from '../../../../../../redux/actionCreators';

interface Context {
  products: Cart | undefined;
  isLoading: boolean;
}

const CartAPIContext = React.createContext<Context>({
  products: undefined,
  isLoading: false
});

const CartAPIContextProvider: React.FC = (props) => {
  const { state } = React.useContext(ContextApp);
  const [data] = useState<Cart | undefined>(state.cart);

  useEffect(() => {
    const dataFromStorage = localStorage.getItem('cartState');
    if (dataFromStorage) {
      const newData: Cart = new Map<CartProduct, Count>();
      const localStorageData: Array<[CartProduct, Count]> = JSON.parse(dataFromStorage);
      localStorageData.forEach(([{ id }, count]) => {
        const product: Product | undefined = products.find((productFromDB) => productFromDB.id === id);
        if (product) {
          newData.set(product, count);
        }
      });
      setCart(newData);
    } else {
      setCart(cartProducts);
    }
  }, []);
  return (
    <CartAPIContext.Provider
      value={{
        products: data,
        isLoading: !!data
      }}
    >
      {props.children}
    </CartAPIContext.Provider>
  );
};

export { CartAPIContextProvider, CartAPIContext };
