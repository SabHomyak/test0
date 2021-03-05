import * as React from 'react';
import { useContext, useEffect } from 'react';
//styles
import {
  Close,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  OrderPrice,
  Table,
  Thead
} from '@md-market/cart/layers/presentation/views';
//utils
import { ContentLoader } from '@md-ui/loaders/content-loader';
//context
import { CartAPIContext } from '@md-modules/market/cart/layers/api/cart';
//redux
import { ContextApp } from '../../../../../redux/reducer';
//mock
import { ID } from '@md-modules/shared/mock/market/cart';

interface Props {
  itemDecreaseButtonHandler: (id: ID) => void;
  closeHandler: () => void;
}

const CartPresentation: React.FC<Props> = ({ itemDecreaseButtonHandler, closeHandler }) => {
  const { isLoading } = useContext(CartAPIContext);
  const { state } = useContext(ContextApp);

  const products = state.cart;
  let viewProducts: any[] = [];
  let totalCount = 0;

  useEffect(() => {
    if (products?.size === 0) {
      closeHandler();
    }
  });
  if (products) {
    viewProducts = Array.from(products);
    viewProducts = viewProducts.map(([product, count]) => {
      totalCount += product.price * count;
      return (
        <tr key={product.id}>
          <th>{product.name}</th>
          <th>{count}</th>
          <th>{product.price}</th>
          <th>
            <button
              onClick={() => {
                itemDecreaseButtonHandler(product.id);
              }}
            >
              -
            </button>
          </th>
        </tr>
      );
    });
  }

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
            <Table>
              <Thead>
                <tr>
                  <th>name</th>
                  <th>quantity</th>
                  <th>price</th>
                </tr>
              </Thead>
              <tbody>{viewProducts}</tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <OrderPrice>{totalCount}$</OrderPrice>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </ContentLoader>
  );
};

export { CartPresentation };
