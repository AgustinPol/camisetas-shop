import React, { useState } from 'react';

const ItemCount = (props) =>{
        
        const [count, setCount] = useState(parseInt(props.initial));

        const addHandler = () => {
            props.onAdd(count)
        }

        const decrement = () =>{
            if (count >= 1)
                setCount(count - 1 );
        };

        const increment = () => {
            if (count < props.stock){
                setCount (count + 1);
            }
        };

        return(
            <div>
                <div>
                    <span className="btn btn-outline-secondary">{count}</span><br />
                    <button 
                    style={{margin:4}} 
                    onClick={decrement} 
                    className="btn btn-outline-dark">
                        -
                    </button>

                    <button 
                    style={{margin:4}} 
                    onClick={increment} 
                    className="btn btn-outline-dark">
                        +
                    </button><br />
                </div>

                {   count > 0 ? 
                    <button style={{marginTop:15}} onClick={addHandler} className="btn btn-success">
                    Agregar al Carrito
                    </button> : 
                    null
                }
                
            </div>    
        )
    }

export default ItemCount;