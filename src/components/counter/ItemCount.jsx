import React, {useState} from 'react'
import { useEffect } from 'react';

export const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        setCount(initial)}, [initial]
    )

    const sumar = () =>{
        if (count < stock){
            setCount(count + 1);
        }else{
            alert("maximo stock");
        }    
    };

    const restar = () =>{
        if (count >= initial){
            setCount(count - 1);
        }else{
            setCount(count + 0);
        }
    };
  return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p>Count: {count}</p>
        <button className="boton-agregar" disabled={count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}