import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import ItemCounter from '../item-counter';


const ItemDetail = ({data, addToCarrito}) => {
    return (
      <div style={{ padding: '10px 40px' }}>      
          <img src={data?.imageURL} alt={data?.title} />
          <h2>{data?.title}</h2>
          <h3>{data?.description}</h3>
          <ItemCounter stock={data?.stock || 0} addToCarrito={addToCarrito} />
      </div>
    )
  }
  
export default ItemDetail



