import * as React from 'react';
import { Cart, BWrapper, IWrapper, LWrapper, RWrapper, Wrapper } from '@md-ui/headers/products/views';
import { menuItems } from '@md-ui/headers/main/constants';
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/product';
import { ShowCartContext } from '@md-modules/shared/layouts/market';
import { CartBLContext } from '@md-modules/shared/layouts/market/layers/business';

const Header: React.FC = () => {
  const setShowCart = React.useContext(ShowCartContext);
  const {cart:products} = React.useContext(CartBLContext);

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
          <Logo/>
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l}/>
          ))}
        </RWrapper>
        <BWrapper onClick={() => {
          setShowCart(true);
        }}>
          <Cart src={'/static/images/UI/basket2.png'}/>
          {sizeOrder}
        </BWrapper>
      </IWrapper>
    </Wrapper>
  );
};
export { Header };