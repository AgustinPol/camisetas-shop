import React , {useState, useEffect} from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

const [cart, setCart] = useState([]);
const [totalQuantity, setTotalQuantity] = useState(0);
const [orderGenerated, setOrderGenerated] = useState("");
const [processingOrder, setProcessingOrder] = useState(false);
const [cartTotal, setCartTotal] = useState("")

useEffect(() => {
    if (!localStorage.getItem("cartLS")) {
      localStorage.setItem("cartLS", JSON.stringify([]));
    } else {
      setCart(JSON.parse(localStorage.getItem("cartLS")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartLS", JSON.stringify(cart));
    const cartLS = JSON.parse(localStorage.getItem("cartLS"));
    const quantityLS = cartLS.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(JSON.stringify(quantityLS));
  }, [cart]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cartLS"));
    const totalLS = cartLS.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setCartTotal(JSON.stringify(totalLS));
  }, [cart]);


const addItem = (newProduct, newQuantity) => {   
    const repeatedProduct = cart.find(e => e.item.id === newProduct.id)
    const auxCart = [...cart]; 
    (repeatedProduct) ? 
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
    return cart.some(element => element.item.id === id)
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

  return <CartContext.Provider value={{cart, cartTotal, addItem, removeItem, getTotal, clearCart, isInCart, processingOrder, setProcessingOrder, orderGenerated, setOrderGenerated, totalQuantity}}>{children}</CartContext.Provider>
}

