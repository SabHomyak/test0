import * as React from 'react';
//styles
import { Cart, BWrapper, IWrapper, LWrapper, RWrapper, Wrapper, Orders } from '@md-ui/headers/products/views';
//UI
import { menuItems } from '@md-ui/headers/main/constants';
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/product';
//redux
import { ContextApp } from '../../../../../../redux/reducer';
//functions
import { showCart } from '@md-market/cart';

const Header: React.FC = () => {
  const { state } = React.useContext(ContextApp);
  const products = state.cart;

  let sizeOrder = 0;
  if (products) {
    for (const count of products.values()) {
      sizeOrder += count;
    }
  }
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
            showCart(true);
          }}
        >
          <Cart src={'/static/images/UI/basket2.png'} />
        </BWrapper>
        {!!sizeOrder && <Orders>{sizeOrder}</Orders>}
      </IWrapper>
    </Wrapper>
  );
};
export { Header };
