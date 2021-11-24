import React from "react";

const style = {
    display:"inline-block",
    color: "black",
    padding: "2rem",
    borderRadius:"3px",
    margin: "3rem",
    border: "solid"
}

const ItemListContainer = ({greeting}) => {
    return (
<h1 style={style} className="myTitle">{greeting}</h1>
    )
}

export default ItemListContainer;