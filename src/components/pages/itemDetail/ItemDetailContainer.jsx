import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { Grid } from "@mui/material";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  let {id}=useParams();

  
  useEffect( ()=>{
    let promesa = new Promise ((resolve, reject)=>{
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
    console.log(data);
  }

  return (
    <div>
      <Grid container >
        <Grid    item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>

      </Grid>
    </div>
  )
}

export default ItemDetailContainer