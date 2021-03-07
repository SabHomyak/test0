import * as React from 'react';
import { CartPresentation } from '@md-market/cart/layers/presentation';
import { useState } from 'react';

let showSetter: (show: boolean) => void;
export const showCart = (show: boolean): void => {
  showSetter(show);
};

const CartContainer: React.FC = () => {
  const [show, setShow] = useState(false);
  showSetter = setShow;

  return (
    <>
      {show && (
        <CartPresentation itemDecreaseButtonHandler={() => {
        }} closeHandler={() => setShow(false)}/>
      )}
    </>
  );
};

export default CartContainer;
