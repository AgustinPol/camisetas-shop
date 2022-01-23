import React from 'react';
import './App.css';
import NavBs from "./components/nav-bs/NavBs.js";
import ItemListContainer from "./containers/ItemListContainer.js";
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import Cart from "./components/cart/Cart.js"
import Footer from './components/footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
       <NavBs/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
          <Route path ="/item/:paramId">
            <ItemDetailContainer />
          </Route>
          <Route path ="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

export default App;
