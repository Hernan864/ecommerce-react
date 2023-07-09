import ItemList from './ItemList'
import {products} from "../../../productsMock"
import { useEffect, useState } from 'react'

const ItemListContainer = () => {
    const  [items, setItems]=useState([]);
    useEffect(()=>{

        const tarea= new Promise((resolve)=>{
            resolve(products)
        })
        tarea
        .then((res)=>{setItems(res)})
        .catch((err)=>{console.log(err)});
    },[])
    return <ItemList items={items}/>

}

export default ItemListContainer