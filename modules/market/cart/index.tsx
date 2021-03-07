import * as React from 'react';
import { CartPresentation } from '@md-market/cart/layers/presentation';
import { useState } from 'react';


const CartContainer: React.FC = () => {
  const [show, setShow] = useState(true);
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
