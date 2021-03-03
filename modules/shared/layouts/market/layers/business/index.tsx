import * as React from 'react';
import { Cart, CartProduct, Count } from '@md-modules/shared/mock/market/cart';

import { useEffect, useReducer } from 'react';
import { CartAPIContext } from '@md-modules/shared/layouts/market/layers/api/cart';

interface Context {
  cart: Cart | undefined,

  [key: string]: any
}

const CartBLContext = React.createContext<Context>({
  cart: undefined,
  setCart: () => undefined
});

let dispatch: React.Dispatch<Action>;

interface State {
  cart: Cart | undefined
}

enum Actions {
  SET_CART,
  ADD_PRODUCT
}

// interface Action {
//   type: Actions
//
//   [key: string]: any
// }
type Action =
  { type: Actions.SET_CART, cart: Cart } |
  { type: Actions.ADD_PRODUCT, product: CartProduct }

const setCartAC = (cart: Cart): Action => ({ type: Actions.SET_CART, cart });
const addProductAC = (product: CartProduct): Action => ({ type: Actions.ADD_PRODUCT, product });

export const setCart = (cart: Cart): void => {
  dispatch(setCartAC(cart));
};
export const addProduct = (product: CartProduct): void => {
  dispatch(addProductAC(product));
};


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.SET_CART: {
      return { ...state, cart: action.cart };
    }
    case Actions.ADD_PRODUCT: {
      const newCart: Cart = new Map<CartProduct, Count>(state.cart ?? new Map<CartProduct, Count>());
      const product = action.product;
      const count = newCart.get(product) ?? 0;
      newCart.set(product, count + 1);
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

const CartBlContextProvider: React.FC = ({ children }) => {
    //add business logic here
    const { products: data } = React.useContext(CartAPIContext);
    const [state, dispatchFunction] = useReducer(reducer, {
      cart: data
    });
    dispatch = dispatchFunction;
    useEffect(() => {
      if (data) {
        setCart(data);
      }
    }, [data]);
    useEffect(() => {
      if (state.cart) {
        localStorage.setItem('cartState', JSON.stringify(Array.from(state.cart)));
      }
    }, [state.cart]);
    return (
      <CartBLContext.Provider value={{
        cart: state.cart
      }}>
        {children}
      </CartBLContext.Provider>
    );
  }
;

export { CartBlContextProvider, CartBLContext };