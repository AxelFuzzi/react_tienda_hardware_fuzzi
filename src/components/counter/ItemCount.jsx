import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0)

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
        <button disabled={count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount