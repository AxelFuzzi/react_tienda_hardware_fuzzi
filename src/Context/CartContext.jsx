import { createContext, useState } from "react";
import { Products } from "../components/Mock/Products";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    //agregar cierta cantidad de un item al carrito.
    const addItems = (item, cantidad) =>{
        
        if (isInCart(item.id)) {
            
            sumarCantidad(item, cantidad);
        }else{
            setCart([...cart, {...item, cantidad}]);
        }
    };

    //corraborar si el poducto ya esta en el carrito.
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //sumar cantidad si el item ya esta en cart.
    const sumarCantidad = (item, cantidad) => {
        const carritoActualizado = cart.map ((prod) => {
            if (prod.id === item.id) {
                const productoActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return productoActualizado;
            }else {
                return prod
            } 
        });
        setCart(carritoActualizado);
    };
    
    //remover todos los items de Cart.
    const clear = () => {
        setCart([]);
    };

    console.log(cart);
    
    //eliminar un solo producto pasansole el id 
    const removeItem = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    }
        
    return (
        <CartContext.Provider value={{cart, addItems, clear, removeItem}}>
            {props.children}
        </CartContext.Provider>
    );
};