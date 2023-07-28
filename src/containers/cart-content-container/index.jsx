import React, { useContext } from 'react';
import { CartContext } from '../../context';
import CartContent from '../../components/cart-content';

const CartContentContainer = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    const updatedCart = carrito.filter((producto) => producto.id !== id);
    setCarrito(updatedCart);
  };

  const totalPrice = carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);

  return <CartContent carrito={carrito} handleRemoveFromCart={handleRemoveFromCart} totalPrice={totalPrice} />;
};

export default CartContentContainer;
