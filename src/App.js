import './App.css';
import NavBs from "./components/nav-bs/NavBs.jsx";
import ItemListContainer from "./components/item-list-conteiner/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBs/>
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda online!"/>
    </div>
  );
}

export default App;
