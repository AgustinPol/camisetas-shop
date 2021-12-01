import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../item-count/ItemCount";
import ItemList from "../items/ItemList";
import "./style-cont.css";
import { getProducts } from "../../products";

const styleTitle = {
    display:"inline-block",
    color: "black",
    padding: "2rem",
    borderRadius:"3px",
    margin: "3rem 4rem 5rem 6rem",
    border: "solid"
}

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const list = getProducts()
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
        })
    }, [])

    return (
        <div className="itemListContainer">
            <h1 style={styleTitle}>¡Bienvenidos a nuestra tienda online!</h1>
            <ItemList products={products} />
            <ItemCount stock={13} initial={1} />
            <ItemCount stock={10} initial={1} />
            <ItemCount stock={15} initial={1} />
        </div>

    )
}

export default ItemListContainer;