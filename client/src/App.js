import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Home from "./pages/home";
import Saved from "./pages/saved";



function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Switch>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
