import PropTypes from 'prop-types';
export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-sm">
      <p>
        <span>28/05/2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
