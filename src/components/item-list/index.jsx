import React from 'react'
import ItemCard from '../item-card'

const ItemList = ({ items, loading }) => {
  return (
    <div style={containerStyle}>
        {
            Boolean(loading)        ?
                <p>cargando...</p>
            :
                items.map((item, index) => <ItemCard key={item.title + index} data={item}  />)
        }
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
