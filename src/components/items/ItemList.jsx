import React from "react";
import Item from "../items/Item";

const ItemList = ({products}) => {
    return (
        <ul>
             {products.map(prod => <Item key={prod.id} prod={prod}/>)}
        </ul>
    )
}
 
export default ItemList;