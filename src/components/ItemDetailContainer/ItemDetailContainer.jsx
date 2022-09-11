import { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"
import { Products } from "../Mock/Products"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    const {id} = useParams();

    const idProdNumerico = Number(id);

    useEffect(() => {
        const getProduct = () => new Promise((res, rej) => {

            const prodEncontrado = Products.find((prod) => prod.id === idProdNumerico);

            setTimeout(() => {res (prodEncontrado)}, 1000);
                
        });
        getProduct()
        .then((data) => {
            setItem(data);
        })
        .catch((error) => {
            console.log(error);   
        })

    }, [idProdNumerico])
    return(
        <ItemDetail item={item}/>
    )
}
