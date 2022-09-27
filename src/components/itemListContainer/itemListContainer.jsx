import React, { useState, useEffect } from "react";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"; 

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        
        const itemFiltrado = id

        ? query(itemCollection, where("category", "==", id)) 
        : itemCollection;

        getDocs(itemFiltrado)
        .then((resp) => {
            const products = resp.docs.map((prod) => {
                return {
                    id: prod.id, ...prod.data(), 
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("finally");
        })
    }, [id]);
    return(
        <>
            <h2>{props.saludo}</h2>

            <ItemList items={items}/>  
        </>
    );
};

