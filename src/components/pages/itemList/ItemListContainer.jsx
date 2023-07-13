import ItemList from './ItemList'
import {products} from "../../../productsMock"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const  [items, setItems]=useState([]);
    let {categoryName} = useParams();
    useEffect(()=>{
        let productosFiltrados=products.filter((elemento)=>elemento.category===categoryName);
        const tarea= new Promise((resolve)=>{
            resolve(categoryName ? productosFiltrados : products);
        })
        tarea
        .then((res)=>{setItems(res)})
        .catch((err)=>{console.log(err)});
    },[categoryName])
    return <ItemList items={items}/>

}

export default ItemListContainer