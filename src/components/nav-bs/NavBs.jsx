import React, { useState, useContext, useEffect } from "react";
import CartWidget from "../cart-widget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebase"; 
import { getDocs, collection } from "firebase/firestore"

const NavBs = () => {
  const { cart, orderGenerated } = useContext(CartContext);
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"))
        const categories = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data() }
        })
        setCategories(categories)
      } catch (error) {
        console.log("error searching categories", error)
      }

      })()
   
  },[])
   
    return (

  <header>
  {(orderGenerated === "") && 
  <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
    <div className="container-fluid">
      <Link className="navbar-brand btn btn-outline-light" to={"/"}>Camisetas-Shop</Link>
        <button 
          className="navbar-toggler bg-light navbar-dark" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
           <span className="navbar-toggler-icon bg-dark"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {
            categories.map((category) => 
              <li key={category.id} className="nav-item col-lg-5" style={{margin: "0.5rem"}}>
             <Link 
               key={category.id}  
               to={`/category/${category.id}`} 
               className="nav-link active btn btn-outline-light" 
               aria-current="page" 
               href="divFooter">
               {category.description} 
             </Link>
            </li>
            )}
            
           
        </ul>
      </div>
    </div>
  <>
  { cart.length !== 0 ? <CartWidget/> : null }
  </>  
  </nav>}
</header>

    )
}
export default NavBs;
