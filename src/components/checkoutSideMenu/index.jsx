import { XMarkIcon } from '@heroicons/react/24/solid';
import '../../styles/CheckoutSideMenu.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { OrderCard } from '../orderCard';
import { totalPrice } from '../../utils/calculateTotalPrice';
import { Link } from 'react-router-dom';
export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const deleteProduct = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const checkoutOrder = () => {
    const orderToAdd = {
      date: '28/05/2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutSideMenu();
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpened ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center border-t-2 mb-2'>
          <span className='font-medium text-gray-600'>Total:</span>
          <span className='font-bold text-gray-600'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className='w-full bg-gray-700 py-3 mt-2 text-white rounded-md' onClick={() => checkoutOrder()}>Checkout order</button>
        </Link>
      </div>
    </aside>
  );
};
