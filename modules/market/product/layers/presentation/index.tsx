import * as React from 'react';
// context
import { ProductAPIContext } from '@md-m-product/layers/api/product';
import { ProductBLContext } from '@md-m-product/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import {
  ContentWrapper,
  ProductDetailsContainer,
  ProductImgContainer,
  ProductInfoContainer,
  ProductName,
  Wrapper
} from './views';
//UI
import { Button } from '@md-ui/buttons/button-cart';

import { CartContext } from '@md-modules/shared/contexts/CartContext';


const ProductPresentation: React.FC = () => {
  const { isLoading } = React.useContext(ProductAPIContext);
  const { productInfo } = React.useContext(ProductBLContext);
  const { cart } = React.useContext(CartContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <ProductImgContainer>
            <img src='/static/images/market/download.jpg' alt='product'/>
            <Button
              text={'Add to cart'}
              callback={() => {
                cart.addProduct(productInfo.id);
              }}
            />
          </ProductImgContainer>
          <ProductDetailsContainer>
            <ProductName>{productInfo.name}</ProductName>
            <ProductInfoContainer>{productInfo.description}</ProductInfoContainer>
          </ProductDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { ProductPresentation };
