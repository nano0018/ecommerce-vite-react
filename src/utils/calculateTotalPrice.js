
/**
 * This function calculate total price of a cart order
 * @param {Array} cart cartProducts: Array of Objects
 * @returns {Number} Total cart price
 */
export const totalPrice = (cart) => {
  return cart.reduce((total, currentProduct) => total + currentProduct.price, 0);
};
