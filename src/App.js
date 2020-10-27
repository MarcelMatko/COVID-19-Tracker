import React from 'react';
import './App.css';
import NavBar from './Components/Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Symptoms from './Pages/Symptoms';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import Privacy from './Pages/Privacy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar></NavBar>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/symptoms" component={Symptoms}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/privacy-policy" component={Privacy}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
