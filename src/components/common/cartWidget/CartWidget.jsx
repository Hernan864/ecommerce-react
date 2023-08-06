import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./CartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
const CartWidget = () => {
    const {getTotalCantidad} = useContext(CartContext)
    let total=getTotalCantidad();
    return (
        <div className='cart-container'>
            <Link to="/cart">
                <AiOutlineShoppingCart color={"white"} size={"2rem"} />
                <div className='contador'>{total}</div>
            </Link>
        </div>
    )
}

export default CartWidget