import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div key={item.id}>
        <p>{item.id}</p>
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <img src={item.img} alt="." />
        <Link to={`/item/${item.id}`}>
          <button>Ver detalles</button>
        </Link>
    </div>
  )
}

export default Item