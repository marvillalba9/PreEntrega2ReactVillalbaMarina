import { createContext, useState } from 'react';
import { addDoc,collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const CartContext = createContext();
const { Provider } = CartContext

export const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [orderId, setOrderId] = useState('');

  const addProductToCarrito = (product) => {
    
    setCarrito([...carrito, product]);
  }

  const createNewOrder = (order) => {
    const db =getFirestore();
    const orders = collection(db, 'orders');

    addDoc(orders, order)
    .then((snapshot) => {
        setOrderId(snapshot.id)
        setCarrito([]);
        Swal.fire(
            'Felicitaciones!',
            `Su orden #${snapshot.id} ingreso correctamente!`,
            'success'
          )

          const getDoc = doc(db, 'orders', snapshot.id);

          updateDoc(getDoc, {orderId: snapshot.id})
    })
    .catch((err) => {
        console.log(err);
    })
  }

  return (
    <Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length, createNewOrder, lastOrder: orderId }}>
      {children}
    </Provider>
  );
};

