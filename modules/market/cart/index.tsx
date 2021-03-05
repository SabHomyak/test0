import * as React from 'react';
import { CartPresentation } from '@md-market/cart/layers/presentation';
import { CartAPIContextProvider } from '@md-market/cart/layers/api/cart';
import { useState } from 'react';
import { decreaseCountProduct } from '../../../redux/actionCreators';

let showSetter: (show: boolean) => void;
export const showCart = (show: boolean): void => {
  showSetter(show);
};

const CartContainer: React.FC = () => {
  const [show, setShow] = useState(false);
  showSetter = setShow;

  return (
    <CartAPIContextProvider>
      {show && (
        <CartPresentation itemDecreaseButtonHandler={decreaseCountProduct} closeHandler={() => setShow(false)} />
      )}
    </CartAPIContextProvider>
  );
};

export default CartContainer;
