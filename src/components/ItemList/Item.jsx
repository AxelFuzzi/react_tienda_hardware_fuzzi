import React from 'react'

const Item = ({item}) => {
  return (
    <div key={item.id}>
        <p>{item.id}</p>
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <img src={item.img} alt="." />
    </div>
  )
}

export default Item