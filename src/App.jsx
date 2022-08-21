import { Navbar } from "./components/Nav/Navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";

export const App = () => {
    const saludo = "Bienvenidos"
    return (
        <>
            <Navbar/>
            <ItemListContainer saludo={saludo}/>
        </>
    );
};

//export default App;