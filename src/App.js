import React, { Component } from 'react';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import HeaderImg from './components/HeaderImg.js'
import About from './components/About.js'
import ProductSingle from './components/ProductSingle.js'
import MultiProducts from './components/MultiProducts.js'
import Terms from './components/Terms.js'
import NotMatch from './components/NotMatch.js'
import Footer from './components/Footer.js'
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div id="App-container">
        <Nav />
        <div className="container">
          <HeaderImg />
          <Switch>
            <Route exact path="/category/:catName" component={MultiProducts} />
            <Route exact path="/products/:pid" component={ProductSingle} />
            <Route exact path="/all" component={MultiProducts} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route component={NotMatch}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
