import React from "react";
import "./styles.css";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Shop from "./component/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-browser-router";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}
