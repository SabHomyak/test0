import * as React from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@md-market/cart/layers/presentation/views';
import { useContext, useEffect, useRef, useState } from 'react';
import { ShowCartContext } from '@md-modules/shared/layouts/market';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Cart, CartProduct, Count } from '@md-modules/shared/mock/market/cart';
import { CartAPIContext } from '@md-modules/shared/layouts/market/layers/api/cart';
import { CartBLContext, setCart } from '@md-modules/shared/layouts/market/layers/business';


const CartPresentation: React.FC = () => {
  const setShowCart = React.useContext(ShowCartContext);
  const { isLoading } = useContext(CartAPIContext);
  const { cart: productsFromBL } = useContext(CartBLContext);

  const [products, setProducts] = useState<Cart | undefined>(productsFromBL);
  const savedState = useRef<Cart>();
  savedState.current = products;
  useEffect(() => {
    if (productsFromBL !== undefined && typeof products === 'undefined') {
      setProducts(productsFromBL);
    }
    return () => {
      if (productsFromBL && savedState.current) {
        setCart(savedState.current);
      }
    };
  }, [productsFromBL]);
  let viewProducts: JSX.Element[] = [];
  let totalCount = 0;
  if (products) {
    viewProducts = Array
      .from(products)
      .map(([product, count]) => {
        totalCount += product.price * count;
        return <div
          key={product.id}>
          <span>{product.name} - {count} </span>
          <button onClick={() => {
            setProducts((prevState) => {
              if (prevState) {
                const newCart = new Map<CartProduct, Count>(prevState);
                const count = newCart.get(product);
                if (count && count > 1) {
                  newCart.set(product, count - 1);
                } else {
                  newCart.delete(product);
                }
                return newCart;
              }
              return new Map<CartProduct, Count>();
            });
          }}>-
          </button>
        </div>;
      });
  }
  if (productsFromBL && products?.size === 0) {
    setShowCart(false);
  }
  return (
    <ContentLoader isLoading={isLoading}>
      <Modal onClick={(event: React.SyntheticEvent) => {
        if (event.target === event.currentTarget) {
          setShowCart(false);
        }
      }}>
        <ModalContent>
          <ModalHeader>
            <span className="close" onClick={() => {
              setShowCart(false);
            }}>&times;</span>
            <h2>Cart</h2>
          </ModalHeader>
          <ModalBody>
            {viewProducts}
          </ModalBody>
          <ModalFooter>
            <h3>{totalCount}$</h3>
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