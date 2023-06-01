import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchData from '../utils/FetchData';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Get Products
  const [items, setItems] = useState([]);

  useEffect(() => {
    const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=150';
    try {
      FetchData(URL).then((data) => setItems(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Get Products by name
  const [searchedName, setSearchedName] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);
  const [searchItemByCategory, setSearchItemByCategory] = useState('');
  console.log('searchItemByCategory', searchItemByCategory);

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

// Filter products by category
  const filterItemsByCategory = (items, searchedCategory) => {
    let filteredItems;
    filteredItems = items?.filter((item) => {
      const category = item.category?.name.toLowerCase();
      const searchCategory = searchedCategory.toLowerCase();
      return category.includes(searchCategory);
    });
    return filteredItems;
  };

  // Changing product array by filter
  useEffect(() => {
    if (searchItemByCategory) {
      setFilteredItem(filterItemsByCategory(items, searchItemByCategory));
    }
    if (searchedName) {
      setFilteredItem(filterItemsByName(filterItemsByCategory(items, searchItemByCategory), searchedName));
    }
    return () => {
      setFilteredItem([...items]);
    }
  }, [items, searchedName, searchItemByCategory]);
  console.log("filteredItem", filteredItem);

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
        filterItemsByCategory,
        searchItemByCategory,
        setSearchItemByCategory,
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
