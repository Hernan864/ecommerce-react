import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./CartWidget.css"
const CartWidget = () => {
    return (
        <div className='cart-container'>
            <Link to="/cart">
                <AiOutlineShoppingCart color={"white"} size={"2rem"} />
                <div className='contador'>1</div>
            </Link>
        </div>
    )
}

export default CartWidget