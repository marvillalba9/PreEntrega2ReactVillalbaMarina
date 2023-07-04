import React from 'react';
// import ItemList from '../../components/item-list';
import { useParams, useNavigate } from 'react-router-dom';
import TabMenu from '../../components/tabs';

const CATEGORIES = [{id:'all', title:'Todos los productos'}, {id: 'electro', title:'Electronics'}, {id:'jewelry', title:'Jewelry'}]

const ItemListContainer = () => {
  const {category} = useParams ();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';

  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])



  return (
    <div>
      <TabMenu current={current} items={CATEGORIES} />

    </div>
  );
};

export default ItemListContainer;


//       <ItemList productos={productos}/>

// const [productos, setProductos] = useState([]);

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => setProductos(json));
// }, []);





