import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/index';

const ItemCounter = ({ stock, initial, onAdd, producto }) => {
  const [quantity, setQuantity] = useState(initial);
  const { carrito, setCarrito } = useContext(CartContext);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const addItem = { ...producto, quantity };
    setCarrito([...carrito, addItem]); 
    onAdd(addItem);
  };

  return (
    <div className='counter'>
      <div className='controls'>
        <button className='button' onClick={decrement}>
          -
        </button>
        <h4 className='number'>{quantity}</h4>
        <button className='button' onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className='button agregar-al-carrito'
          onClick={handleAddToCart}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;






