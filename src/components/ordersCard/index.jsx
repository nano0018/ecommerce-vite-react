import PropTypes from 'prop-types';
import {
  CalendarDaysIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
export const OrdersCard = (props) => {
  const centerIcon = 'flex flex-row justify-items-start items-center';
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-2 border border-black rounded-md w-96 m-2">
      <div className="flex m-4 flex-col">
        <p className="flex flex-row justify-between items-center">
          <CalendarDaysIcon className="w-5 h-5 mr-2"></CalendarDaysIcon>
          <span className="text-sm font-light text-gray-500">28/05/2023</span>
        </p>
        <p className={centerIcon}>
          <ShoppingBagIcon className="w-5 h-5 mr-2"></ShoppingBagIcon>
          <span className="text-sm font-semibold">
            Articles: {totalProducts}
          </span>
        </p>
      </div>
      <div className={centerIcon}>
        <p className="mr-2 text-md">
          Order price: <span className="font-bold">${totalPrice}</span>
        </p>
        <ChevronRightIcon className="w-6 h-6 mr-2" />
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
