import ItemList from './ItemList'
import {products} from "../../../productsMock"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import FadeLoader from "react-spinners/FadeLoader";


const ItemListContainer = () => {
    const  [items, setItems]=useState([]);
    let {categoryName} = useParams();
    useEffect(()=>{
        let productosFiltrados=products.filter((elemento)=>elemento.category===categoryName);
        const tarea= new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(categoryName ? productosFiltrados : products);
            },4000)
        })
        tarea
        .then((res)=>{setItems(res)})
        .catch((err)=>{console.log(err)});
    },[categoryName])

    // if (items.length === 0)
    //     {return <h1>Cargando...</h1>}

    return <>
    {
        // items.length===0? <FadeLoader color="#36d7b7" />:<ItemList items={items}/>
      
        <ItemList items={items}/>

    }
    </>

}

export default ItemListContainer