import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Home from "./pages/home";
import Jumbotron from "./components/Jumbotron/index";


function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
      <Jumbotron />

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
