import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item-detail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  
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
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;














