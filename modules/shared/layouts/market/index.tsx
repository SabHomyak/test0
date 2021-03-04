import { Wrapper } from './views';
import * as React from 'react';
import { Header } from '@md-ui/headers/products';
import CartContainer from '@md-modules/market/cart';
import { useEffect, useReducer } from 'react';
import {
  ContextApp,
  initialState,
  reducer, State
} from '../../../../redux/reducer';

export let dispatch: any;
export let state: State;


const ProductsLayout: React.FC = ({ children }) => {
  [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.cart) {
      localStorage.setItem('cartState', JSON.stringify(Array.from(state.cart)));
    }
  }, [state]);
  return (
    <Wrapper>
      <ContextApp.Provider value={{ state, dispatch }}>
        <Header/>
        {children}
        <CartContainer/>
      </ContextApp.Provider>
    </Wrapper>
  );
};

export { ProductsLayout };