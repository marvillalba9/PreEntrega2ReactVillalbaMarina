import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './7.svg';
import { Link } from 'react-router-dom';
import Cart from '../cart-widget';
import { CartContext } from '../../context';


export default function NavBar() {

  const { quantityCart } = React.useContext(CartContext);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navbar'>
          <Link to='/'> <Logo /> </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>Productos</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/contacto'>Contacto</Link>
          </Typography>
          <Link to="/cart"> <Cart cartQuantity={quantityCart}/> </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}