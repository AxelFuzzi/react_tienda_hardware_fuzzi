import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link className="link-carrito" to="/cart">
            <button className="boton-carrito"><i class='fas fa-shopping-cart'></i>
            <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span></button>
        </Link>
        

    )
}