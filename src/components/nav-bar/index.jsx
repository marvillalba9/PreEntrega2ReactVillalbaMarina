import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './7.svg';
import CustomizedBadges from '../cart-widget';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navbar'>
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todos los productos
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Hombres
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mujeres
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
          <CustomizedBadges />
        </Toolbar>
      </AppBar>
    </Box>
  );
}