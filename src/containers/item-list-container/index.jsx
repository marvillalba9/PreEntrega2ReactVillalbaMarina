import React, { useState, useEffect } from 'react';
import ItemList from '../../components/item-list';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;






