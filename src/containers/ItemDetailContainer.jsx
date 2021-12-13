import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from '../components/details/ItemDetail';
import { getProductById } from "../services/products";
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';



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
           {products ? <ItemDetail item={products} /> : <Spinner/>}
        </div>

    )
}


export default ItemDetailContainer;
