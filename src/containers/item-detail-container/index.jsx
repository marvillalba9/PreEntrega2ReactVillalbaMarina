
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { pedirItemPorId } from '../../helpers/pedir-item.js';
// import ItemDetail from '../../components/item-detail';

// const ItemDetailContainer = () => {
//   const [item, setItem] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     pedirItemPorId(id)
//       .then((res) => setItem(res))
//       .catch((error) => {
//         console.error('Error al obtener el item:', error);
//       });
//   }, [id]);

//   return (
//     <div>
//       <ItemDetail item={item} />
//     </div>
//   );
// };

// export default ItemDetailContainer;





