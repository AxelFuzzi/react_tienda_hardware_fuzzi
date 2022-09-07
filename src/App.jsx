import { Navbar } from "./components/Nav/Navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import ItemCount from "./components/counter/ItemCount";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export const App = () => {
    const saludo = "Bienvenidos"

    /*const stock = (param) =>{
        return(
            param
        )
    };

    const initial = (param) =>{
        return(
            param
        )
    };

    const onAdd = (param) =>{
        alert(`compraste ${param} productos`);
    }*/
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer saludo={saludo}/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>   
            </Routes>
              
        </BrowserRouter>
    );
};
