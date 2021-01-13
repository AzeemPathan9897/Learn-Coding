import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    const Team = () => <h1>Our Team</h1>;
    return (
      <div className="text-center">
        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
