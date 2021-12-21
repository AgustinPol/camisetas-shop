import React , {useState} from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

const [cart, setCart] = useState([]);
const [totalQuantity, setTotalQuantity] = useState(0);

const addItem = (newProduct, newQuantity) => {   
    const repeatedProduct = cart.find(e => e.item.id === newProduct.id)
    const auxCart = [...cart]; 
    (repeatedProduct !== undefined) ? 
        changeQuantity(auxCart, repeatedProduct, newQuantity)
        :
        pushItem(newProduct, newQuantity, auxCart)
}

const removeItem = (itemId) => {
    const choosenItem = cart.filter(element => element.item.id === itemId);
    const newCart = cart.filter(element => element.item.id !== itemId);
    const auxQuantity = totalQuantity - choosenItem[0].quantity;
    setCart(newCart);
    setTotalQuantity(auxQuantity);
}

const pushItem = (newProduct, newQuantity, auxCart) => {
    auxCart.push({item: newProduct, quantity: newQuantity})
    setTotalQuantity(newQuantity + totalQuantity);
    setCart(auxCart)
}

const changeQuantity = (auxCart, currentElement, newQuantity) => {
    const index = cart.indexOf(currentElement);
    auxCart[index].quantity += newQuantity;
    setTotalQuantity(newQuantity + totalQuantity);
    setCart(auxCart);
}

const isInCart = (id) => {
    const currentItem = cart.find(element => element.item.id === id)

    return currentItem ? true : false
}

const clearCart = () => { 
    setCart([]);
    setTotalQuantity(0);
}

const getTotal = () => {
    let total = 0;
    cart.forEach(product => {
        total += product.item.price * product.quantity;
    })
    return total;
}

  return <CartContext.Provider value={{cart, addItem, removeItem, getTotal, clearCart, isInCart, totalQuantity}}>{children}</CartContext.Provider>
}

