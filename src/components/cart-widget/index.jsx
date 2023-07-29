import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useContext } from 'react';
// import { CartContext } from '../../context/index';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Cart = ({ cartQuantity }) => {
  // const { carrito } = useContext(CartContext);

  //  const totalProductos = carrito.reduce((total, producto) => total + producto.quantity, 0);

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartQuantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

export default Cart;