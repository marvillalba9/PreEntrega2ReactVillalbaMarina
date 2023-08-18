import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CartContext } from '../../context/index';
import ItemCounter from '../item-counter';
import { Link } from 'react-router-dom';

const ItemCard = ({ data }) => {
console.log('ItemCard data:', data);

  const {id, title, imageURL, stock, price, description} = data;

  const { addToCarrito } = React.useContext(CartContext);

  const addProductToCarrito = (quantity) => {
    addToCarrito({
      id: id,
      title: title,
      pricePerUnit: price,
      quantity: quantity,
      imageURL: imageURL,
      description: description
   })
  };

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
        <hr></hr>
          <ItemCounter stock={stock} addToCarrito={addProductToCarrito} />
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;



