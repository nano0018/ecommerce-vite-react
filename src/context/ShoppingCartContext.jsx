import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart count
  const [count, setCount] = useState(0);

  // Product detail modal state
  const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);
  const openProductDetail = () => setIsProductDetailOpened(true);
  const closeProductDetail = () => setIsProductDetailOpened(false);

  // Product detail show data
  const [productData, setProductData] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpened,
        openProductDetail,
        closeProductDetail,
        productData,
        setProductData
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
