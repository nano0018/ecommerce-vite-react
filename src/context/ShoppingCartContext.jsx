import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart count
  const [count, setCount] = useState(0);

  // Product detail modal state
  const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpened(true);
    setIsCheckoutSideMenuOpened(false);
  };
  const closeProductDetail = () => setIsProductDetailOpened(false);

  // Checkout side menu modal state
  const [isCheckoutSideMenuOpened, setIsCheckoutSideMenuOpened] =
    useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpened(true);
    setIsProductDetailOpened(false);
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpened(false);
  const toggleCheckoutSideMenu = () => {
    isCheckoutSideMenuOpened ? closeCheckoutSideMenu() : openCheckoutSideMenu();
  };

  // Product detail show data
  const [productData, setProductData] = useState({});

  // Add products to the cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart orders
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpened,
        openProductDetail,
        closeProductDetail,
        productData,
        setProductData,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpened,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        toggleCheckoutSideMenu,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
