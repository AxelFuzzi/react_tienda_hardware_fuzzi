import { useState } from "react";
import { useEffect } from "react";
import { Products } from "../Mock/Products";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = (props)=>{
    const [items, setItems] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        const getProducts = new Promise((res, rej)=>{

            const prodFiltrados = Products.filter((prod) => prod.category === id)

            setTimeout(() => {res (id ? prodFiltrados : Products);}, 1000);
            
        });
    
        getProducts
            .then((data)=>{
                setItems(data);
        })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                console.log(`finally`);
            });
  
    }, [id]);

    return(
        <>
            <h2>{props.saludo}</h2>

            <ItemList items={items}/>  
        </>
    );
};

