import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc} from "firebase/firestore"; 
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  let {id}=useParams();
  
  const {addToCart,getCantidadPorId} = useContext(CartContext)
  
  let cantidadEnCarrito=getCantidadPorId(id);

  useEffect( ()=>{
    let refCollection = collection(db,"products")
    let refDoc= doc(refCollection, id)
    getDoc(refDoc).then(res => setProduct({...res.data(), id:res.id}))
  },[id])
  
  const agregarCarrito=(cantidad)=>{
    let data={
      ...product,
       cantidad:cantidad
      }
    addToCart(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: true,
      timer: 1500
    })
  }

  return (
    <div>
      <Grid container >
        <Grid    item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} cantidadEnCarrito={cantidadEnCarrito}/>
        </Grid>

      </Grid>
    </div>
  )
}

export default ItemDetailContainer