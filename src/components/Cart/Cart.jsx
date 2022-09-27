import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Form } from '../Form/Form'

export const Cart = () => {
  const [idCompra, setIdCompra] = useState('');

  const {cart, clear, removeItem, totalPrice} = useContext(CartContext)

  const handleId = (id) => {
    setIdCompra(id);
  };

  if (idCompra) {
    return <h1>Gracias por tu compra, tu ID es: {idCompra}</h1>
  }

  if (cart.length === 0){
    return(
      <h3>carrito vacio, diríjase a este <Link to="/">link</Link> para agregar un producto al carrito!</h3>
    );
  }
  
  return (
      <div>
      {cart.map((prod) => 
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <h3>{prod.cantidad}</h3>
          <button className="boton-agregar" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
        </div>
      )}
      <button className="boton-agregar" onClick={clear}>Clear cart</button>
      <h3>Total: ${totalPrice()}</h3>
      <Form cart={cart} totalPrice={totalPrice()} clear={clear} handleId={handleId}/>   
    </div>
    )   
}