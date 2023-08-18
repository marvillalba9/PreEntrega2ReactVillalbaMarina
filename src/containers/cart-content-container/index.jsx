import React from 'react';
import { CartContext } from '../../context/index';
import UserInfo from '../../components/user-info';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const CartContentContainer = () => {
  const { carrito, createNewOrder, lastOrder, removeProductFromCarrito } = React.useContext(CartContext);
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
                <h3>{`$${producto.price * producto.quantity} ($${producto.price} x ${producto.quantity})`}</h3>
                <IconButton
                    onClick={() => removeProductFromCarrito(index)}
                    aria-label="Eliminar"
                    color="secondary"
                  >
                    <DeleteIcon />
                </IconButton>
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
