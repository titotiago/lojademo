import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Product from './components/Product';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>    
    </div>
  );
}

export default App;
