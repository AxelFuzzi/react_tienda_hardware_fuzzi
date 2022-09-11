import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext)
  return (
    <div>
        {cart.map((prod) => 
          <div key={prod.id}>
            <h2>{prod.title}</h2>
            <button className="boton-agregar" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
          </div>
        )}
        <button className="boton-agregar" onClick={clear}>Clear cart</button>
    </div>
  )
}

export default Cart