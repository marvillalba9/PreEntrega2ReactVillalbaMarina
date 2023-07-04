import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCounter from '../item-counter';

const ItemDetail = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={producto.image}
          alt={producto.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {producto.price}
          </Typography>
        </CardContent>
        <ItemCounter initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;


