import * as React from 'react';
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
import { CartProduct, Count, ID } from '@md-modules/shared/mock/market/cart';
import { CartContext } from '@md-modules/shared/contexts/CartContext';
import { CartTable } from '@md-market/cart/components/table';

interface Props {
  itemDecreaseButtonHandler: (id: ID) => void;
  closeHandler: () => void;
}

const CartPresentation: React.FC<Props> = ({ itemDecreaseButtonHandler, closeHandler }) => {
  const { isLoading, cart } = React.useContext(CartContext);

  const totalCount = Array.from(cart || new Map<CartProduct, Count>())
    .reduce((acc, [product, count]) => (acc + (product.price * count)), 0);

  return (
    <ContentLoader isLoading={isLoading}>
      <Modal
        onClick={(event: React.SyntheticEvent) => {
          if (event.target === event.currentTarget) {
            closeHandler();
          }
        }}
      >
        <ModalContent>
          <ModalHeader>
            <Close
              onClick={() => {
                closeHandler();
              }}
            >
              &times;
            </Close>
            <h2>Cart</h2>
          </ModalHeader>
          <ModalBody>
            <CartTable th={['name', 'count', 'price']} products={cart ?? new Map<CartProduct, Count>()}/>
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
