import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./CartWidget.css"
const CartWidget = () => {
    return (
        <div className='cart-container'>
            <AiOutlineShoppingCart color={"white"} size={"2rem"} />
            <div className='contador'>1</div>
        </div>
    )
}

export default CartWidget