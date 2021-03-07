import * as React from 'react';
import { Table, Thead } from './views';
import { Cart } from '@md-modules/shared/mock/market/cart';

interface Props {
  th: Array<string>
  products: Cart
}

const CartTable: React.FC<Props> = ({ th, products }) => {
  const body: JSX.Element[] = Array.from(products)
    .map(([product, count]) => {
      return (
        <tr key={product.id}>
          <th>{product.name}</th>
          <th>{count}</th>
          <th>{product.price}</th>
          <th>
            <button
              onClick={() => {
                // itemDecreaseButtonHandler(product.id);
              }}
            >
              -
            </button>
          </th>
        </tr>
      );
    });
  return (
    <Table>
      <Thead>
        <tr>
          {th.map((thead, i) => (<th key={i}>{thead}</th>))}
        </tr>
      </Thead>
      <tbody>{body}</tbody>
    </Table>
  );
};
export { CartTable };