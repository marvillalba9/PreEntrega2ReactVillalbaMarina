import React from 'react'
import ItemCard from '../item-card'

const ItemList = ( {productos} ) => {

  return (
    <div style={containerStyle}>
    {productos.map((producto) => (
    <ItemCard key={producto.id} producto={producto} />
))}
</div>
  )
}

export default ItemList


const containerStyle = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px'
 }

