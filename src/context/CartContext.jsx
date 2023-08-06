import { createContext, useState } from "react"

export const CartContext= createContext();

const CartContextComponet = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart=(product)=>{
    let existe = cart.some((elemento)=>elemento.id === product.id);
    if (existe){
      let newArr = cart.map(elemento=>{
        if (product.id === elemento.id)
        {
          return{...elemento, cantidad: product.cantidad}
        }else{
          return elemento
        }
      })
      setCart(newArr)
    }else{
      setCart([...cart, product])
    }

  }

  const clearCart=()=>{
    setCart([]);
  }

  const deleteById=(id)=>{
    let newArr=cart.filter(elemento=>elemento.id !==id);
    setCart(newArr)
  }

  const getTotalCantidad=()=>{
    let total = cart.reduce((acc, elemento)=>{
      return acc + elemento.cantidad;
    },0)
    return total
  }
  const getTotalPrice=()=>{
    let total=cart.reduce((acc, elemento)=>{
      return acc + (elemento.price * elemento.cantidad)
    },0)
    return total
  }

  const getCantidadPorId = (id)=>{
    let producto=cart.find((elemento)=>elemento.id === +id)
    // return producto? producto.cantidad : producto
    return producto?.cantidad
  }

  let data={
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalCantidad,
    getTotalPrice,
    getCantidadPorId
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>

  )
}

export default CartContextComponet