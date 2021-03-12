import * as React from 'react';
import { Table, Thead } from './views';
import { CartContext } from '@md-modules/shared/contexts/CartContext';


const CartTable: React.FC = () => {
  const { cart } = React.useContext(CartContext);

  const body: JSX.Element[] = cart.products!
    .map((product) => {
      return (
        <tr key={product.id}>
          <th>{product.name}</th>
          <th>{product.count}</th>
          <th>{product.price * product.count}</th>
          <th>
            <button
              onClick={() => {
                cart.removeProduct(product.id);
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
          {['name', 'quantity', 'price'].map((thead, i) => (<th key={i}>{thead}</th>))}
        </tr>
      </Thead>
      <tbody>{body}</tbody>
    </Table>
  );
};
export { CartTable };