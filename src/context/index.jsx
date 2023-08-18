import React, { createContext, useState } from 'react'; // Importa useState
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [orderId, setOrderId] = useState('');

  const addProductToCarrito = (product) => {
    console.log("Agregando producto al carrito:", product);
    setCarrito([...carrito, product]);
  }

  const createNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, 'orders');

    addDoc(orders, order)
    .then((snapshot) => {
      setOrderId(snapshot.id);
      setCarrito([]);
      Swal.fire(
        'Felicitaciones!',
        `Su orden #${snapshot.id} ingreso correctamente!`,
        'success'
      );

      const orderDoc = doc(db, 'orders', snapshot.id);
      updateDoc(orderDoc, { orderId: snapshot.id });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CartContext.Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length, createNewOrder, lastOrder: orderId }}>
      {children}
    </CartContext.Provider>
  );
};

