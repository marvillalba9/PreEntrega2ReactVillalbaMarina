import React from 'react';
import NavBar from '../../components/nav-bar';
import ItemListContainer from '../../containers/item-list-container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../../containers/item-detail-container';
import Contacto from '../contacto';
import { CartContext } from '../../context';

const Main = () => {
  
  const [carrito, setCarrito] = useState ([]);
  
  return (
    <CartContext.Provider value={ {carrito, setCarrito} }>
      <BrowserRouter>
        
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<p>cart</p>} />
          <Route path='/contacto' element={<Contacto />} />

        </Routes>

      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Main;
