import CounterContainer from "../../common/counter/CounterContainer"

const ItemDetail = ({product, agregarAlCarrito}) => {
  return (
    <div>
      <img src={`${product.img}`} width= "300px" alt={`${product.title}`} />
      <h1>{product.title}</h1>
      <h2>${ product.price}</h2>
      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito}/>
  
    </div>
  )
}

export default ItemDetail