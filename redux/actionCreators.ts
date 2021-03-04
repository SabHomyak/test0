import { Cart, ID } from '@md-modules/shared/mock/market/cart';
import { dispatch } from '@md-modules/shared/layouts/market';
import { Action, Actions } from './actions';

export const setCartAC = (cart: Cart): Action => ({ type: Actions.SET_CART, cart });
export const addProductAC = (id: ID): Action => ({ type: Actions.ADD_PRODUCT, id });
export const decreaseCountProductAC = (id: ID): Action => ({
  type: Actions.DECREASE_COUNT_PRODUCT,
  id
});

export const setCart = (cart: Cart): void => {
  dispatch(setCartAC(cart));
};
export const addProduct = (id: ID): void => {
  dispatch(addProductAC(id));
};
export const decreaseCountProduct = (id: ID): void => {
  dispatch(decreaseCountProductAC(id));
};