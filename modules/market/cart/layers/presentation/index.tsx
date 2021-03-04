import * as React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  OrderPrice, Table, Tbody, Thead
} from '@md-market/cart/layers/presentation/views';
import { useContext, useEffect } from 'react';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { CartAPIContext } from '@md-modules/market/cart/layers/api/cart';
import { ContextApp } from '../../../../../redux/reducer';
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
      return <tr
        key={product.id}>
        <th>{product.name}</th>
        <th>{count}</th>
        <th>{product.price}</th>
        <th>
          <button onClick={() => {
            itemDecreaseButtonHandler(product.id);
          }}>-
          </button>
        </th>
      </tr>;
    });
  }

  return (
    <ContentLoader isLoading={isLoading}>
      <Modal
        onClick={(event: React.SyntheticEvent) => {
          if (event.target === event.currentTarget) {
            closeHandler();
          }
        }}>
        <ModalContent>
          <ModalHeader>
            <span className="close" onClick={() => {
              closeHandler();
            }}>&times;</span>
            <h2>Cart</h2>
          </ModalHeader>
          <ModalBody>
            <Table >
              <Thead>
              <tr>
                <th>name</th>
                <th>quantity</th>
                <th>price</th>
              </tr>
              </Thead>
              <tbody>
              {viewProducts}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <OrderPrice>{totalCount}$</OrderPrice>
          </ModalFooter>
        </ModalContent>
        <style jsx>
          {`
            /* Add Animation */
            @-webkit-keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
            }

            @keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
            }

            /* The Close Button */
            .close {
            color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
            }

            .close:hover,
            .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
            }
            `}
        </style>
      </Modal>;
    </ContentLoader>
  );
};

export { CartPresentation };