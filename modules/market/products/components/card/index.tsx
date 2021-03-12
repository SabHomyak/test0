import * as React from 'react';
//styles
import {
  CardWrapper,
  CardFooter,
  CardImg,
  CardImgWrapper,
  ViewButton,
  CardHeader,
  CardHeaderTitle,
  Price
} from '@md-m-products/components/card/views';
//components
import { ProductLink } from '@md-m-products/components/product-link';
//UI
import { Button } from '@md-ui/buttons/button-cart';
//types
import { ID } from '@md-modules/shared/mock/market/cart';
import { ProductInfo } from '@md-m-products/layers/business';

interface Props {
  product: ProductInfo;
  addProductHandler: (id: ID) => void;
}

const Card: React.FC<Props> = ({ product, addProductHandler }) => {
  return (
    <CardWrapper key={product.id}>
      <CardHeader>
        <CardHeaderTitle>{product.name}</CardHeaderTitle>
      </CardHeader>
      <CardImgWrapper>
        <CardImg src={'/static/images/market/download.jpg'} alt={`${product.name}-${product.id}`} />
      </CardImgWrapper>
      <CardFooter>
        <Button
          text={'Add to cart'}
          callback={() => {
            addProductHandler(product.id);
          }}
        />
        <Price>{product.price}$</Price>
        <ProductLink prodId={product.id}>
          <ViewButton>Details</ViewButton>
        </ProductLink>
      </CardFooter>
    </CardWrapper>
  );
};
export { Card };
