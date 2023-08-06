import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail"
import { Grid } from "@mui/material";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  let {id}=useParams();
  
  const {addToCart,getCantidadPorId} = useContext(CartContext)
  
  let cantidadEnCarrito=getCantidadPorId(id);

  useEffect( ()=>{
    let promesa = new Promise ((resolve)=>{
      let productSelected=products.find((product)=> product.id=== +id)
      resolve(productSelected)
    });
    promesa.then((res)=>setProduct(res)).catch(err=>{console.log(err)})
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