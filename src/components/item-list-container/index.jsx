import React, { useState, useEffect } from 'react';
import ItemCard from '../item-card'

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <ItemCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;

  





