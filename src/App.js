import './App.css';
import NavBs from "./components/nav-bs/NavBs.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from './containers/ItemDetailContainer.jsx';
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
          <Route path ="/item/:paramId">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
