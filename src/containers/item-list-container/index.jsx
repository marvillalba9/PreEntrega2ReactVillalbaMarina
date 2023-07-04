import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TabMenu from '../../components/tabs';
import { getProducts } from '../../helpers/productos';
import ItemList from '../../components/item-list';

const CATEGORIES = [{id:'all', title:'Todos los productos'}, {id: 'electro', title:'Electronics'}, {id:'jewelry', title:'Jewelry'}]

const searchCategory = (id) => {
  switch (id) {
    case 'electro':
      return 'electronics';
    case 'jewelry':
      return 'jewelery';
    default:
      return 'all'
  }
}

const ItemListContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const {category} = useParams ();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';

  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])

  React.useEffect(() => {
    setLoading(true);
    if (category === 'all') {
      getProducts('all')
        .then((res) => res.json())
        .then((res) => {
          const data = res.map((elemento) => ({
            id: elemento.id,
            title: elemento.title,
            price: elemento.price,
            image: elemento.image
          }));
          setItems(data);
        })
        .finally(() => setLoading(false));
    } else {
      getProducts(searchCategory(category))
        .then((res) => res.json())
        .then((res) => {
          const data = res.map((elemento) => ({
            id: elemento.id,
            title: elemento.title,
            price: elemento.price,
            image: elemento.image
          }));
          setItems(data);
        })
        .finally(() => setLoading(false));
    }
  }, [category]);
  

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






