import './App.css';
import NavBs from "./components/nav-bs/NavBs.jsx";
import ItemListContainer from "./components/item-list-conteiner/ItemListContainer.jsx";
import ItemDetailContainer from './components/details/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBs/>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
