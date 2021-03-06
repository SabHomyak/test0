import * as React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { cartProducts, ID, ProductCart } from '@md-modules/shared/mock/market/cart';
import { useEffect, useRef, useState } from 'react';
import { locStorage } from '@md-utils/localStorage';
import { changeProductCount } from '@md-modules/shared/contexts/CartContext/functions';

interface Context {
  isLoading: boolean;
  cart: {
    products: Array<ProductCart> | undefined;
    setProducts: React.Dispatch<React.SetStateAction<ProductCart[] | undefined>>;
    addProduct: (id: ID) => void;
    removeProduct: (id: ID) => void;
  };
  modal: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> };
}

const CartContext = React.createContext<Context>({
  isLoading: false,
  cart: {
    products: undefined,
    setProducts: () => undefined,
    addProduct: () => undefined,
    removeProduct: () => undefined
  },
  modal: { show: false, setShow: () => undefined }
});

const CartContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(cartProducts);
  const [show, setShow] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<ProductCart> | undefined>(data);
  const currentStateProducts = useRef(products);
  currentStateProducts.current = products;
  useEffect(() => {
    setProducts(locStorage('cart') || data);
  }, [data]);

  useEffect(() => {
    window.onbeforeunload = () => {
      locStorage('cart', currentStateProducts.current);
    };
    return () => {
      window.onbeforeunload = null;
      if (typeof currentStateProducts.current !== 'undefined') {
        locStorage('cart', currentStateProducts.current);
      }
    };
  }, []);
  const addProduct = (id: ID) => {
    if (products) {
      setProducts(changeProductCount(products, id, 'increase'));
    }
  };
  const removeProduct = (id: ID) => {
    if (products) {
      setProducts(changeProductCount(products, id, 'decrease'));
    }
  };

  return (
    <CartContext.Provider
      value={{
        isLoading: loading,
        cart: {
          products,
          setProducts,
          addProduct,
          removeProduct
        },
        modal: {
          show,
          setShow
        }
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
