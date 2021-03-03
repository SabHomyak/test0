import * as React from 'react';
import { ProductsAPIContext } from '@md-m-products/layers/api/products';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { ProductBLContext } from '@md-m-products/layers/business';
import { Wrapper } from './views';
import { Card } from '../../components/card';
import { addProduct } from '@md-modules/shared/layouts/market/layers/business';


const ProductsPresentation = () => {
  const { isLoading } = React.useContext(ProductsAPIContext);
  const { productList } = React.useContext(ProductBLContext);
  return <Wrapper>
    <ContentLoader isLoading={isLoading}>
      {
        productList.map((product) => (<Card key={product.id} product={product} addProductHandler={addProduct}/>))
      }
    </ContentLoader>
  </Wrapper>;
};
export { ProductsPresentation };