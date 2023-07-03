import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { Grid } from "@mui/material";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    id:1,
    name: "panton Jean",
    price: 7000,
    stock:5
  });
  const [carrito, setCarrito] = useState([]);
   
  const agregarCarrito=(cantidad)=>{
    let data={
      ...product,
       cantidad:cantidad
      }
    carrito.push(data);
    console.log(carrito);
  }
  useEffect( ()=>{
    
        
  },[])

  return (
    <div>
      <Grid container >
        <Grid    item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>
        <Grid item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>
        <Grid item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>
        <Grid item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>
        <Grid item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>
        <Grid item xs={6} md={3} lg={2}> 
        < ItemDetail product={product} agregarAlCarrito={agregarCarrito} />
        </Grid>

      </Grid>
    </div>
  )
}

export default ItemDetailContainer