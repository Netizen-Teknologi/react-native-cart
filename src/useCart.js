import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  };
};
