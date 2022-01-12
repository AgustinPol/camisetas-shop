import React from 'react';
import "./footer.css";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react/cjs/react.development';

const Footer = () => {

    const {orderGenerated} = useContext(CartContext)
    return (
        <>
        {(orderGenerated === "") && 
        <div className='footerDiv bg-gradient'>
            <h3>Contacto:</h3><br />
            <p>camisetas-shop-caba@gmail.com</p><br />
            <p>Whatsapp: 1132453298</p>
        </div>}
        </>
    )
}

export default Footer;
