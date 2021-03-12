import * as React from 'react';
//styles
import { Cart, BWrapper, IWrapper, LWrapper, RWrapper, Wrapper, Orders } from '@md-ui/headers/products/views';
//UI
import { menuItems } from '@md-ui/headers/main/constants';
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/product';
import { CartContext } from '@md-modules/shared/contexts/CartContext';

const Header: React.FC = () => {
  const { cart, modal } = React.useContext(CartContext);
  const orders: number = cart.products?.reduce((acc, product) => acc + product.count, 0) ?? 0;
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
        </RWrapper>
        <BWrapper
          onClick={() => {
            if (orders != 0) {
              modal.setShow(true);
            }
          }}
        >
          <Cart src={'/static/images/UI/basket2.png'} />
        </BWrapper>
        {orders !== 0 && <Orders>{orders}</Orders>}
      </IWrapper>
    </Wrapper>
  );
};
export { Header };
