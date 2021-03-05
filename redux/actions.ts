//types
import { Cart, ID } from '@md-modules/shared/mock/market/cart';

export enum Actions {
  SET_CART,
  ADD_PRODUCT,
  DECREASE_COUNT_PRODUCT
}

export type Action =
  | { type: Actions.SET_CART; cart: Cart }
  | { type: Actions.ADD_PRODUCT; id: ID }
  | { type: Actions.DECREASE_COUNT_PRODUCT; id: ID };
