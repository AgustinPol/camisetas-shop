import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";
import { getProductsByCategory } from "../services/products";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import ItemList from "../components/items/ItemList";
import "../containers/style-cont.css";


const ItemListContainer = () => {
    const {categoryId} = useParams()
    const [products, setProducts] = useState([])

    useEffect( ()=> {
        
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
            {products.length !== 0 ? <ItemList products={products} /> : <Spinner/>}
        </div>

    )
}

export default ItemListContainer;