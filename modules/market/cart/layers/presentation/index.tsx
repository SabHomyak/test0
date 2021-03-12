import * as React from 'react';
import { useEffect } from 'react';
//styles
import {
  Close,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  OrderPrice
} from '@md-market/cart/layers/presentation/views';
//utils
import { ContentLoader } from '@md-ui/loaders/content-loader';

//mock
import { ProductCart } from '@md-modules/shared/mock/market/cart';
//context
import { CartContext } from '@md-modules/shared/contexts/CartContext';
//components
import { CartTable } from '@md-market/cart/components/table';

const CartPresentation: React.FC = () => {
  const { isLoading, cart, modal } = React.useContext(CartContext);

  const totalCount = cart.products?.reduce((acc, product: ProductCart) => {
    return acc + product.count * product.price;
  }, 0);

  useEffect(() => {
    if (cart.products?.length === 0) {
      modal.setShow(false);
    }
  }, [cart.products]);

  return (
    <ContentLoader isLoading={isLoading}>
      <Modal
        onClick={(event: React.SyntheticEvent) => {
          if (event.target === event.currentTarget) {
            modal.setShow(false);
          }
        }}
      >
        <ModalContent>
          <ModalHeader>
            <Close
              onClick={() => {
                modal.setShow(false);
              }}
            >
              &times;
            </Close>
            <h2>Cart</h2>
          </ModalHeader>
          <ModalBody>
            <CartTable />
          </ModalBody>
          <ModalFooter>
            <OrderPrice>{totalCount}$</OrderPrice>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ContentLoader>
  );
};

export { CartPresentation };
