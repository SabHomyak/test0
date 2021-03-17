import * as React from 'react';
import { CartPresentation } from '@md-market/cart/layers/presentation';
import { CartContext } from '@md-modules/shared/contexts/CartContext';

const CartContainer: React.FC = () => {
  const { modal } = React.useContext(CartContext);
  return <>{modal.show && <CartPresentation />}</>;
};
export { CartContainer };
