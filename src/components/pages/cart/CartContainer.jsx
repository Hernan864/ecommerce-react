
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const {cart,clearCart,deleteById,getTotalPrice} = useContext(CartContext);

  let total=getTotalPrice();
  let limpiar=()=>{
    Swal.fire({
      title: 'Seguro quieres eliminar todo el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Limpiar',
      denyButtonText: `No limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('Carrito eliminado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Carrito no eliminado', '', 'info')
      }
    })
  }
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
      {
        cart.length>0 && <button onClick={limpiar}>Limpiar Carrito</button>
      }
      
      <h2>El total del carrito es: {total}</h2>
      <Link to="/checkout">
        <button>Terminar Compra</button>
      </Link>
    </div>
  )
}

export default CartContainer