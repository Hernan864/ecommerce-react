import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../../firebaseConfig';

const ItemListContainer = () => {
    const  [items, setItems]=useState([]);
    let {categoryName} = useParams();
    useEffect(() => {
        let consulta;
        let productsCollection = collection(db, "products");


        if (!categoryName) {
            consulta = productsCollection
        } else {
            consulta = query(productsCollection, where("category", "==", categoryName))
        }
        getDocs(consulta).then((res) => {
            let arrayProductos = res.docs.map((product) => {
                return { ...product.data(), id: product.id };
            })
            setItems(arrayProductos)
        });
    }, [categoryName])



    return  <ItemList items={items}/>



}

export default ItemListContainer