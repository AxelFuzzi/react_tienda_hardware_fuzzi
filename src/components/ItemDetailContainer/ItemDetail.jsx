import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../counter/ItemCount'

export const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0);
  const {addItems, getProductQuantity} = useContext(CartContext);

  const onAdd = (cantidadItemCount) => {
    setCantidad(cantidadItemCount);
    addItems(item, cantidadItemCount);
  };

  return (
    <div>
        <img src={item.img} alt={item.title} className="card-img-top product-photo"/>
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>{item.price}</h4>

        {cantidad === 0 
        ? 
        <ItemCount stock={item.stock} initial={getProductQuantity(item.id)} onAdd={onAdd}/> 
        : 
        <Link to="/cart">Ir al carrito</Link>}

    </div>
  )
}
