import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/index';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart() {
  const { carrito } = useContext(CartContext);

   const totalProductos = carrito.reduce((total, producto) => total + producto.quantity, 0);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalProductos} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}