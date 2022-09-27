import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
  return (
    <div className="col">
      <div className="card h-100 product-container">
        <img src={item.img} alt="." className="card-img-top product-photo"/>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
        <Link to={`/item/${item.id}`}>
          <button className="boton-agregar">Ver detalles</button>
        </Link>
      </div>
    </div> 
  )
}



