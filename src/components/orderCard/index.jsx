import { XMarkIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
export const OrderCard = (props) => {
  const { title, imageUrl, price, id, deleteProduct } = props;
  let renderDeleteIcon;
  if (deleteProduct) {
    renderDeleteIcon = <XMarkIcon className="h-6 w-6 text-gray-600 cursor-pointer" onClick={() => deleteProduct(id)}/>
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-md object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light text-gray-600">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold"> ${price} </p>
        {renderDeleteIcon}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.any.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
