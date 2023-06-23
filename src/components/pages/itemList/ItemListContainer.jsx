import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const saludo = "En esta seccion iran los proximos item"
    return (
        <div>
            <ItemList greeting={saludo} />

        </div>
    )
}

export default ItemListContainer