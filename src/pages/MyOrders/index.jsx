import { useContext } from 'react';
import { Layout } from '../../components/layout';
import { OrdersCard } from '../../components/ordersCard';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <h1>My Orders</h1>
      {context.order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
          ;
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
