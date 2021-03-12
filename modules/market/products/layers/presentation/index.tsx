import * as React from 'react';
//context
import { ProductsAPIContext } from '@md-m-products/layers/api/products';
import { ProductBLContext } from '@md-m-products/layers/business';
//UI
import { ContentLoader } from '@md-ui/loaders/content-loader';
//styles
import { Wrapper } from './views';
//components
import { Card } from '../../components/card';
import { CartContext } from '@md-modules/shared/contexts/CartContext';

const ProductsPresentation = () => {
  const { isLoading } = React.useContext(ProductsAPIContext);
  const { productList } = React.useContext(ProductBLContext);
  const { cart } = React.useContext(CartContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {productList.map((product) => (
          <Card key={product.id} product={product} addProductHandler={cart.addProduct} />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};
export { ProductsPresentation };
