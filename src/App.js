import React, { Component } from 'react';
import Nav from './components/Nav.js'
import Homepage from './components/HomePage.js'
import HeaderImg from './components/HeaderImg.js'
import About from './components/About.js'
import AllProducts from './components/AllProducts.js'
import Terms from './components/Terms.js'
import Footer from './components/Footer.js'
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="App-container">
        <Nav />
        <HeaderImg />
        <div className="container">
          <Switch>
            <Route exact path="/All" component={AllProducts} />
            <Route exact path="/products/:category-type" component={AllProducts} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/about" component={About} />
            <Route exact path="/#" component={Homepage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
