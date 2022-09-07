import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../counter/ItemCount'
import Item from '../ItemList/Item';

export const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidadItemCount)=> {
    setCantidad(cantidadItemCount);
  };

  return (
    <div>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>{item.price}</h4>

        {cantidad === 0 
        ? 
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> 
        : 
        <Link to="/cart">Ir al carrito</Link>}

    </div>
  )
}
