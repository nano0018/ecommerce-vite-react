import { useContext } from 'react';
import { Layout } from '../../components/layout';
import { OrderCard } from './../../components/orderCard/index';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-96 mb-6">
        <Link to="/my-orders" className='absolute left-0'>
          <ArrowUturnLeftIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-96">
        {context.order.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
