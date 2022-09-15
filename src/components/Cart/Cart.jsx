import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clear, removeItem, totalPrice} = useContext(CartContext)
  return (
    <>
    {cart.length === 0 
    ? 
    <h3>carrito vacio, diríjase a este <Link to="/">link</Link> para agregar un producto al carrito!</h3>
    : 
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
      <button>Terminar compra</button>   
    </div>}
    </>
  )
}

export default Cart

