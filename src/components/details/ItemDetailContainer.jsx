import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getProductById } from "../../products";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
    const {paramId} = useParams();
    console.log(paramId)
    useEffect(() => {
        getProductById(paramId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })
    }, [paramId])

    return (
        <div className="itemDetailContainer container-lg">
           {products ? <ItemDetail item={products} /> : <div><p>Cargando...</p></div>}
        </div>

    )
}


export default ItemDetailContainer;
