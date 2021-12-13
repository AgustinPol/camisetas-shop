import React from "react";
import Item from "../items/Item";
import "./ItemList.css"


const ItemList = ({products}) => {
    return (
        <div className="containerItem">
            {products.map(prod => <Item key={prod.id} prod={prod}/>)}
        </div>
        
    )
}
 
export default ItemList;