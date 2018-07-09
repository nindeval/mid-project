import React, {Component} from 'react';
import BrowseByCategories from './BrowseByCategories.js'


class Homepage extends Component{
  render (){
    return(
      <div id="products">
        <div className="container">
          <h2 className="header-text">Featured Products</h2>
          <span className="description">Check out some of our favorite listings</span>
          <p> FeaturedProducts  </p>
          <BrowseByCategories />
        </div>
      </div>
    );
  }
}
export default Homepage;
