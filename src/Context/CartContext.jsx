import { createContext, useState } from "react";

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
                    cantidad: cantidad,
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

    //indica el total de items en el cart widget
    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product?.cantidad;
        //optional changing
    }

    //indica el total del precio en el cart.
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.price * prod.cantidad;
        });
        return acumulador;
    };

    //indica el total de cantidad de items en cart.
    const totalQuantity = () => {
        let acumulador = 0
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        return acumulador;
    }
        
    return (
        <CartContext.Provider value={{cart, addItems, clear, removeItem, getProductQuantity, totalPrice, totalQuantity}}>
            {props.children}
        </CartContext.Provider>
    );
};