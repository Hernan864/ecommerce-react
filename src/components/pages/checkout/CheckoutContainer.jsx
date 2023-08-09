import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {addDoc,collection, serverTimestamp,updateDoc, doc} from "firebase/firestore"
const CheckoutContainer = () => {
  const [orderId , setOrderId ] = useState("");
  const [userData, setUserData]=useState({
    name:"",
    phone:"",
    email:""
  })
  const {cart, getTotalPrice}=useContext(CartContext);
  let total=getTotalPrice();
  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order={
      buyer:userData,
      items:cart,
      total,
      date: serverTimestamp()
    }
    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then(res=>setOrderId(res.id))

    cart.forEach(element => {
      updateDoc(doc(db, "products", element.id),{stock: element.stock - element.cantidad});
      
    });
  }
  const handleChange=(evento)=>{
    setUserData({...userData, [evento.target.name]:evento.target.value})
  }
  return (
    <div>
      <h1>Checkout</h1>
      {
        !orderId? (<form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingrese su nombre" name="name" onChange={handleChange} />
          <input type="text" placeholder="Ingrese su telefono" name="phone" onChange={handleChange} />
          <input type="text" placeholder="email" name="email" onChange={handleChange} />
          <button type="submit">Comprar</button>
          <button type="button">Cancelar</button>
        </form>
        ):<h1>Su numero de compra es: {orderId}</h1> 
      }
      
    </div>
  )
}

export default CheckoutContainer