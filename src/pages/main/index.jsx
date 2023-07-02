import React from 'react';
import ButtonAppBar from '../../components/nav-bar';
import ItemList from '../../components/item-list-container';

const Main = () => {
    return (
        <div className='contenedor'>
            <ButtonAppBar />          
            <ItemList />
        </div>
    )
}

export default Main;