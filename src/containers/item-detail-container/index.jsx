import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item-detail';
import { getProduct } from '../../helpers/productos';
import { CartContext } from '../../context/index';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const { carrito, setCarrito } = useContext(CartContext); 

  useEffect(() => {
    getProduct(id)
      .then((res) => res.json())
      .then((res) => setProducto(res))
      .catch((error) => {
        console.error('Error al obtener el item:', error);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;




