import React from 'react';
import "./form.css";

const Form = () => {
    return (
        <div>
            <h3>Formulario de compra</h3>
            <h6>Llena el siguiente formulario para generar el link de pago</h6>
            <form className='divForm'>
                <input className='myInput form-control' type="text" placeholder='nombre' /><br />
                <input className='myInput form-control' type="text" placeholder='apellido'/><br />
                <input className='myInput form-control' type="text" placeholder='edad' /><br />
                <input className='myInput form-control' type="email" placeholder='email'/><br />
                <button style={{margin: "0.5rem"}} className='btn btn-primary'>Refresh</button><br />
                <button style={{margin: "0.5rem"}} className='btn btn-success'>Enviar Formulario</button>
            </form>
        </div>
    )
}

export default Form
