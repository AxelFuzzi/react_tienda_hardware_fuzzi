import { useState } from "react";
import { useEffect } from "react";
import { Products } from "../Mock/Products";
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = (props)=>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const getProducts = new Promise((res, rej)=>{
            setTimeout(()=>{res(Products);}, 2000);
            
        });
    
        getProducts.then((data)=>{
            setItems(data);
        })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                console.log(`finally`);
            });
    },[]);

    return(
        <>
            <h2>{props.saludo}</h2>

            <ItemList items={items}/>  
        </>
    );
};
//este bloque va dentro del componente Item,hay que crear ItemList que recibe el estado y mapea el array usando el componente Item para renderizar los datos en e DOM.
//export default itemListContainer