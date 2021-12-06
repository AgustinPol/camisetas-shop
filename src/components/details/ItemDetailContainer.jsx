import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getItem} from "../../products";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const list = getItem()
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
        })
    }, [])

    return (
        <div className="itemDetailContainer container-lg">
           {products ? <ItemDetail item={products} /> : <div><p>Cargando...</p></div>}
        </div>

    )
}


export default ItemDetailContainer;
