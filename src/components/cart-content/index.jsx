// import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';

// const CartContent = ({ carrito, handleRemoveFromCart, totalPrice }) => {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
//         <h2>Carrito de compras</h2>
//         {carrito.length === 0 ? (
//           <p>El carrito está vacío.</p>
//         ) : (
//           <div>
//             {carrito.map((producto) => (
//               <div key={producto.id} style={{ display: 'flex', alignItems: 'center' }}>
//                 <img src={producto.image} alt={producto.title} style={{ width: '100px', marginRight: '10px' }} />
//                 <div>
//                   <p>{producto.title}</p>
//                   <p>Cantidad: {producto.quantity}</p>
//                   <p>Precio unitario: $ {producto.price}</p>
//                   <button onClick={() => handleRemoveFromCart(producto.id)}>
//                     <DeleteIcon />
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <p>Total: $ {totalPrice}</p>
//           </div>
//         )}
//       </div>
//     );
//   };
  

// export default CartContent;


