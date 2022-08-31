import { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"
import { Products } from "../Mock/Products"

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})
    useEffect(()=>{
        const getProduct = ()=> new Promise((res, rej)=>{

            const Producto = Products.find((prod)=> prod.id === 1);

            setTimeout(()=>{
                res(Producto)
            }, 2000);
        })
        getProduct()
        .then((data)=>{
            setItem(data);
        })
        .catch((error)=>{
            console.log(error);   
        })
    }, [])
    return(
        <ItemDetail item={item}/>
    )
}