import * as  React from 'react';
import { CardWrapper,CardFooter, CardFooterTitle, CardImg, CardImgWrapper, ViewButton  } from '@md-m-products/components/card/views';
import { ProductLink } from '@md-m-products/components/product-link';

interface Props {
  id: string
  name: string
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/market/download.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <ProductLink prodId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </ProductLink>
      <ProductLink prodId={id}>
        <ViewButton>Details</ViewButton>
      </ProductLink>
    </CardFooter>
  </CardWrapper>
);
export { Card };