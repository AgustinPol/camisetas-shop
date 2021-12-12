import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../items/ItemList";
import "./style-cont.css";
import { getProducts } from "../../products";
import { getProductsByCategory } from "../../products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {categoryId} = useParams()
    const [products, setProducts] = useState([])

    useEffect( ()=> {
        
        //Funcion IIFE (autoejecutada) de manera asincrónica utilizando async await.
        ( async () => {

            if (categoryId !== undefined){

                const products = await getProductsByCategory(categoryId);
                setProducts(products);

            } else {

                const products = await getProducts()
                setProducts(products);

            }
        })()

    }, [categoryId])

    return (
        <div className="itemListContainer container-lg">
            <h1 className="styleTitle">¡Bienvenidos a nuestra tienda online!</h1>
            <ItemList products={products} />
        </div>

    )
}

export default ItemListContainer;