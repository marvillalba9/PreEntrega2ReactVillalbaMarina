import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item-detail';
import { CartContext } from '../../context/index';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  
  const { addProductToCarrito } = useContext(CartContext); 

  React.useEffect(() => {
    const db = getFirestore();
    const getProduct = doc(db, 'productos', id);

    getDoc(getProduct)
    .then((snapshot) => {
      setData({id: snapshot.id, ...snapshot.data()});
    })
  }, [id])

  return (
    <div>
      <ItemDetail data={data} addToCarrito={addProductToCarrito} />
    </div>
  );
}

export default ItemDetailContainer;














