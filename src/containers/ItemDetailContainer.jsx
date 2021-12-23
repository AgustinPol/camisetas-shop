import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from '../components/details/ItemDetail';
// import { getProductById } from "../services/products";
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../services/firebase/firebase';
 
const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const {paramId} = useParams();

    useEffect(() => {
        setLoading(true)
            getDoc(doc(db, "items", paramId)).then((querySnapshot) => {
                const product = { id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product)
        }).catch((error) => {
            console.log("error searching items", error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
    }, [paramId])

    if(loading) {
        return <Spinner/>
    }

    return (
        <div className="itemDetailContainer container-lg">
           <ItemDetail item={product} />
        </div>

    )
}

export default ItemDetailContainer;
