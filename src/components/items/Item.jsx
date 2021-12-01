import "./Item.css"

const Item = ({ prod }) => {
    return (
        <div className="myCard">
            <h3>{prod.name}</h3>
            <p>Precio: $ {prod.price}</p>
            <p>Categoría: {prod.category}</p>
            <button style={{margin: "0.5rem"}} className="btn btn-primary">Ver detalle</button>
            <button style={{margin: "0.5rem"}} className="btn btn-primary">Agregar</button>
        </div> 
    )
}

export default Item;