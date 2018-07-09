import React, {Component} from 'react';
import {Link} from "react-router-dom"

class BrowseByCategories extends Component{
  render (){
    return(
      <div>
        <h2 className="header-text">Browse by Categories</h2>
        <span className="description">Explore by furniture type.</span>
        <div  className="browser-button">
          <Link to="/category/seating">
            <button> Seating </button>
          </Link>
          <Link to="/category/tables">
            <button> Tables </button>
          </Link>
          <Link to="/category/desk">
            <button className="browser-button"> Desk </button>
          </Link>
          <Link to="/category/bedroom">
            <button className="browser-button"> Bedroom </button>
          </Link>
          <Link to="/category/storage">
            <button className="browser-button"> Storage </button>
          </Link>
          <Link to="/category/misc">
            <button className="browser-button"> Misc </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default BrowseByCategories;
