import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Nav extends Component{
  render (){
    return(
      <div className="nav-bar">
        <header className="nav-bar-header">
        <ul>
          <li><Link to="#"><img src="./mf-logo-white.svg" /></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/terms">Terms & Conditions </Link></li>
          <li className="null">|</li>
          <li><Link to="/all-products"> All </Link></li>
          <li><Link className="sub" to="/categories/seating">Seating</Link></li>
          <li><Link className="sub" to="/categories/tables">Tables</Link></li>
          <li><Link className="sub" to="/categories/desks">Desks</Link></li>
          <li><Link className="sub" to="/categories/storage">Storage</Link></li>
          <li><Link className="sub" to="/categories/bedroom">Bedroom</Link></li>
          <li><Link className="sub" to="/categories/miscellaneous">Misc</Link></li>
          <li className="null">|</li>
          <li className="cart"><i className="fas fa-shopping-cart"></i></li>
        </ul>
        </header>
      </div>
    );
  }
}
export default Nav;
