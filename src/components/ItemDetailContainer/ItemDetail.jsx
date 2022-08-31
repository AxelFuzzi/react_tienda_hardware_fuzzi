import React from 'react'


export const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>{item.price}</h4>
    </div>
  )
}
