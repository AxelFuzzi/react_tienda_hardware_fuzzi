import { Navbar } from "./components/Nav/Navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import Counter from "./components/counter/Counter";

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

    const onAdd = alert("Gracias por su compra!");
    return (
        <>
            <Navbar/>
            <ItemListContainer saludo={saludo}/>
            <Counter stock={10} initial={1} onAdd={onAdd}/>  
        </>
    );
};

//export default App;