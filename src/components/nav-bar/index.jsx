import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './7.svg';
import CustomizedBadges from '../cart-widget';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navbar'>
          <Logo to='/'/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>Todos los productos</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          <Link to='/category/:id'>Hombres</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/category/:id'>Mujeres</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/contacto'>Contacto</Link>
          </Typography>
          <CustomizedBadges />
        </Toolbar>
      </AppBar>
    </Box>
  );
}