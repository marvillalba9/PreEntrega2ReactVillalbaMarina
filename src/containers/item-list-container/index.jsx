import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TabMenu from '../../components/tabs';
//import { getProducts } from '../../helpers/productos';
import ItemList from '../../components/item-list';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';


const CATEGORIES = [
  {id:'all', title:'Todos los productos'}, 
  {id: 'ropa hombre', title:'Ropa Hombre'}, 
  {id:'ropa mujer', title:'Ropa Mujer'}
];

const ItemListContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams ();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';


  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])

 
  React.useEffect (() => {
      setLoading(true);

    const db =getFirestore();
    const getCollection = collection(db, 'productos');
    

    if(category === 'all') {
      getDocs(getCollection)
      .then((snapshot) => {
        setLoading(false);
        setItems(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
      })
    } else if (CATEGORIES.some(cat => cat.id === category) ) {
      const q = query(getCollection, where("categoryId", '==', category))

      getDocs(q)
      .then((snapshot) => {
        setLoading(false);
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })
    }
    
  }, [category])


  return (
    <div>
      <TabMenu current={current} items={CATEGORIES} />
      <div>
        <ItemList  items={items} loading={loading} />
      </div>
    </div>
  );
}

export default ItemListContainer;






