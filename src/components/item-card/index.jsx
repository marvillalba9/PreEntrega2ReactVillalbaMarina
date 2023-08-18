import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCard = ({ data }) => {

  const {id, title, imageURL, stock, price} = data;



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imageURL}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock:{stock}
          </Typography>
          <hr></hr>
          <Link className='button' to={`/product/${id}`}>Ver Mas</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;



