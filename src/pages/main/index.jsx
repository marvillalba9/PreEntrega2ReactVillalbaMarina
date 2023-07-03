import React from 'react';
import ButtonAppBar from '../../components/nav-bar';
import ItemListContainer from '../../containers/item-list-container';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../../containers/item-detail-container';
import Contacto from '../contacto';




const Main = () => {
    return (
        <BrowserRouter>
            <ButtonAppBar />    

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemDetailContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />}/>
                <Route path='/contacto' element={<Contacto />} />
            </Routes>



 
        </BrowserRouter>
    )
}

export default Main;