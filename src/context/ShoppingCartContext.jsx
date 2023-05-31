import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchData from '../utils/FetchData';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Get Products
  const [items, setItems] = useState(null);

  useEffect(() => {
    const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=100';
    try {
      FetchData(URL).then((data) => setItems(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Get Products by name
  const [searchedName, setSearchedName] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);

  // Filter products by searchedName
  const filterItemsByName = (items, searchedName) => {
    let filteredItems;
    if (searchedName.length) {
      filteredItems = items?.filter((item) => {
        const itemName = item.title.toLowerCase();
        const searchName = searchedName.toLowerCase();
        return itemName.includes(searchName);
      });
    }
    return filteredItems;
  };

  // Changing product array by filter
  useEffect(() => {
    if (searchedName.length) {
      console.log("filterItemsByName", filterItemsByName(items, searchedName))
      setFilteredItem(filterItemsByName(items, searchedName));
    }
  }, [items, searchedName]);

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
        items,
        setItems,
        searchedName,
        setSearchedName,
        count,
        setCount,
        filteredItem,
        setFilteredItem,
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
