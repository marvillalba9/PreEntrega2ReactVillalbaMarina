import React from 'react';
import ItemCounter from '../item-counter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ data, addToCarrito }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto', marginTop: 5 }}>
      <CardMedia component="img" height="500" image={data?.imageURL} alt={data?.title} />
      <CardContent>
        <Typography variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${data?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {data?.stock}
        </Typography>
        <ItemCounter stock={data?.stock || 0} addToCarrito={addToCarrito} />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;






