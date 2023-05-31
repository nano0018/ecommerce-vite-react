import { XMarkIcon } from '@heroicons/react/24/solid';
import '../../styles/ProductDetail.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductDetailOpened ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-gray-400 rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={context.closeProductDetail}>
          <XMarkIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      <figure className='px-6'>
      <img
          className="w-full h-full object-cover rounded-lg"
          src={context.productData?.images}
          alt={context.productData?.title}
        />
        <p className='flex flex-col py-4'>
          <span className='font-bold text-2xl text-gray-700'>${context.productData?.price}</span>
          <span className='font-semibold text-md text-gray-500'>{context.productData?.title}</span>
          <span className='font-light text-sm text-gray-500'>{context.productData?.description}</span>
        </p>
      </figure>
    </aside>
  );
};
