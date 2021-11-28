import React from "react";
import ItemCount from "../item-count/ItemCount";

const styleTitle = {
    display:"inline-block",
    color: "black",
    padding: "2rem",
    borderRadius:"3px",
    margin: "3rem",
    border: "solid"
}

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 style={styleTitle}>{greeting}</h1>
            <ItemCount stock={13} initial={1}/>
        </div>

    )
}

export default ItemListContainer;