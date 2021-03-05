import * as React from 'react';
//types
import { Cart, CartProduct, Count, ID } from '@md-modules/shared/mock/market/cart';
//mock
import { products } from '@md-modules/shared/mock/market/products';
//actions
import { Action, Actions } from './actions';

//utils
const findProduct = (id: ID): CartProduct | undefined => {
  return products.find((product) => product.id === id);
};

export interface State {
  cart: Cart | undefined;
}

interface Context {
  state: State;
  dispatch: React.Dispatch<any>;
}

export const initialState: State = {
  cart: undefined
};

export const ContextApp = React.createContext<Context>({
  state: initialState,
  dispatch: () => {}
});

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.SET_CART: {
      return { ...state, cart: action.cart };
    }
    case Actions.ADD_PRODUCT: {
      const newCart: Cart = new Map<CartProduct, Count>(state.cart ?? new Map<CartProduct, Count>());
      const product = findProduct(action.id);
      if (product) {
        const count = newCart.get(product) ?? 0;
        newCart.set(product, count + 1);
      }
      return { ...state, cart: newCart };
    }
    case Actions.DECREASE_COUNT_PRODUCT: {
      let newCart = new Map<CartProduct, Count>();
      let product;
      if (state.cart) {
        newCart = new Map<CartProduct, Count>(state.cart);
        product = findProduct(action.id);
      }

      if (product) {
        const count = newCart.get(product);
        if (count && count > 1) {
          newCart.set(product, count - 1);
        } else {
          newCart.delete(product);
        }
      }
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};
