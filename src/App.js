// import logo from './logo.svg';
import './App.css';
// import Nav from "./components/nav/Nav.jsx";
import NavBs from "./components/nav-bs/NavBs.jsx";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es mi app - Agustín Pol
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ir a React.Org
         </a>
      </header> */}
      {/* <Nav/> */}
      <NavBs/>
    </div>
  );
}

export default App;
