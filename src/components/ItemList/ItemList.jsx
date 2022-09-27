import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {
    
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 row-cols-sm-2">
        {items.map((item) => {
          return <Item key={item.id} item={item}/>;
          })}
    </div>
  )
}
