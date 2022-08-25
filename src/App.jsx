import { Navbar } from "./components/Nav/Navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import ItemCount from "./components/counter/ItemCount";

export const App = () => {
    const saludo = "Bienvenidos"

    const stock = (param) =>{
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
    }
    return (
        <>
            <Navbar/>
            <ItemListContainer saludo={saludo}/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>  
        </>
    );
};

//export default App;