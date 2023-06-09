import { useContext } from 'react';
import { ShoppingCartContext } from './../../context/ShoppingCartContext';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductData(productDetail);
  };
  const addProductoToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  const checkItem = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id);
    const classElement = 'h-6 w-6 text-black';
    if (!isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-gray-400 w-6 h-6 rounded-full m-1.5 p-1.5 text-lg"
          onClick={(event) => addProductoToCart(event, data.data)}
        >
          <PlusIcon className={classElement} />
        </div>
      );
    }
    return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-400 w-6 h-6 rounded-full m-1.5 p-1.5 text-lg">
        <CheckIcon className={classElement} />
      </div>
    );
  };

  // Render

  return (
    <div
      onClick={() => showProduct(data.data)}
      className="bg-white cursor-pointer w-56 h-60"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs px-3 py-0.5 m-2">
          {data.data?.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.images[0]}
          alt={data.data?.title}
        />
        {checkItem(data.data?.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data?.title}</span>
        <span className="text-lg font-medium">${data.data?.price}</span>
      </p>
    </div>
  );
};

export { Card };
