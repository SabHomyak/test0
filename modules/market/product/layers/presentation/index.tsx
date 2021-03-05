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
//types
import { ID } from '@md-modules/shared/mock/market/cart';

interface Props {
  buttonHandler: (id: ID) => void;
}

const ProductPresentation: React.FC<Props> = ({ buttonHandler }) => {
  const { isLoading } = React.useContext(ProductAPIContext);
  const { productInfo } = React.useContext(ProductBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <ProductImgContainer>
            <img src='/static/images/market/download.jpg' alt='product' />
            <Button
              text={'Add to cart'}
              callback={() => {
                buttonHandler(productInfo.id);
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
