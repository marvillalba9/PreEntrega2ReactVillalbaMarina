import React from 'react';
import { CartContext } from '../../context/index';
import UserInfo from '../../components/user-info';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const CartContentContainer = () => {
  const { carrito, createNewOrder, lastOrder } = React.useContext(CartContext);
  console.log(carrito);

  return (
    <div>
      <h1>Carrito de Compras</h1>
     { 
     !carrito.length ?
     <>
     <p>No hay elementos en el carrito</p>
     <Button sx={{ backgroundColor: 'purple' }}><Link to="/">Ir a comprar</Link></Button>
     </>
     :
     <>
     <div>
        <ul>
        {
          carrito.map((producto, index) => (
            <li key={producto.id + index} style={{ listStyleType: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
                <img src={producto.imageURL} alt={producto.title} style={{ width: 40}} />
                <h2>{producto.title}</h2>
                <h3>{`$${producto.pricePerUnit * producto.quantity} ($${producto.pricePerUnit} x ${producto.quantity})`}</h3>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
      <UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />
      </>
      }
    </div>
  )
}

export default CartContentContainer;
