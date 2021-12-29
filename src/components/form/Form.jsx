import React from 'react';
import "./form.css";

const Form = () => {
    return (
        <div>
            <h3>Formulario de compra</h3>
            <h6>Llena el siguiente formulario para generar el link de pago</h6>
            <form className='divForm'>
                <input id='name' className='myInput form-control' type="text" placeholder='nombre' /><br />
                <input id='lastname' className='myInput form-control' type="text" placeholder='apellido'/><br />
                <input id='phone' className='myInput form-control' type="text" placeholder='teléfono'/><br />
                <input id='age' className='myInput form-control' type="text" placeholder='edad' /><br />
                <input id='email' className='myInput form-control' type="email" placeholder='email'/><br />
                <button style={{margin: "0.5rem"}} className='btn btn-primary'>Refresh</button><br />
                <button type='button' onClick={createOrder} style={{margin: "0.5rem"}} className='btn btn-success'>Generar pédido</button>
            </form>
        </div>
    )
}

const createOrder = () => {
    let buyerName = document.getElementById("name").value
    let buyerLastname = document.getElementById("lastname").value;
    let buyerPhone = document.getElementById("phone").value;
    let buyerAge = document.getElementById("age").value;
    let buyerEmail = document.getElementById("email").value;

    let buyerInfo = {
        buyername: buyerName,
        buyerLastname: buyerLastname,
        buyerPhone: buyerPhone,
        buyerAge: buyerAge,
        buyerEmail: buyerEmail
    }
    console.log(buyerInfo)

}

export default Form;