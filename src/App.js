import './App.css';
import NavBs from "./components/nav-bs/NavBs.jsx";
import ItemListContainer from "./components/item-list-conteiner/ItemListContainer.jsx";
import ItemDetailContainer from './components/details/ItemDetailContainer';
import Footer from './components/footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBs/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
          <Route path ="/detail/:paramId">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
