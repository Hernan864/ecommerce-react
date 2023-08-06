import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const {cart,clearCart,deleteById,getTotalPrice} = useContext(CartContext);
  let total=getTotalPrice();
  return (
    <div>
      <h1>Estamos en el carrito</h1>
      {
        cart.map((elemento)=>{ return <div key={elemento.id}>
            <h3>{elemento.title}</h3>
            <h3>{elemento.price} </h3>
            <h3>cantidad: {elemento.cantidad} </h3>
            
            <button onClick={()=>deleteById(elemento.id)}>Eliminar</button>
          </div>
})
      }  
      <button onClick={clearCart}>Limpiar Carrito</button>
      <h2>El total del carrito es: {total}</h2>
      <button>Terminar Compra</button>
    </div>
  )
}

export default CartContainer