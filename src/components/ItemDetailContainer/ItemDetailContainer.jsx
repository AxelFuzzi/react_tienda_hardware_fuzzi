import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});

    const {id} = useParams();

    const idProd = (id);

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const ref = doc(itemCollection, idProd);
        getDoc(ref)
        .then((resp) => {
            setItem({id: resp.id, ...resp.data()
            })
        })
    }, [idProd])
    return(
        <ItemDetail item={item}/>
    )
}
