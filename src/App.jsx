import { Navbar } from "./components/Nav/Navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { Cart } from "./components/Cart/Cart";

export const App = () => {
    const saludo = "Bienvenidos"

    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer saludo={saludo}/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>   
                </Routes>      
            </BrowserRouter>
        </CartProvider>
    );
};