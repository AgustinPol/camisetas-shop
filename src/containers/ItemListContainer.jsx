import React from "react";
import { useState, useEffect } from "react";
// import { getProducts } from "../services/products";
// import { getProductsByCategory } from "../services/products";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import ItemList from "../components/items/ItemList";
import { collection,getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebase"; 
import "../containers/style-cont.css";


const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        if(!categoryId) {
            setLoading(true)
            getDocs(collection(db, "items")).then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}                
                })
                setProducts(products)
            }).catch((error) =>{
                console.log("error searching items", error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getDocs(query(collection(db, "items"), where("category", "==", categoryId))).then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}                
                })
                setProducts(products)
            }).catch((error) =>{
                console.log("error searching items", error)
            }).finally(() => {
                setLoading(false)
            })
        }
        return (() => {
            setProducts([]);
        })
     
    }, [categoryId])

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="itemListContainer container">
            <h1 className="styleTitle">¡Bienvenidos a nuestra tienda online!</h1>
            <ItemList products={products} />
        </div>

    )
}

export default ItemListContainer;