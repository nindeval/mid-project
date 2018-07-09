import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Nav extends Component{
  render (){
    return(
      <div className="nav-bar">
        <header className="nav-bar-header">
          <ul>
            <li><Link to="/home"><img src="/mf-logo-white.svg" /></Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/terms">Terms & Conditions </Link></li>
            <li className="null">|</li>
            <li><Link to="/all"> All </Link></li>
            <li><Link className="sub" to="/category/seating">Seating</Link></li>
            <li><Link className="sub" to="/category/tables">Tables</Link></li>
            <li><Link className="sub" to="/category/desks">Desks</Link></li>
            <li><Link className="sub" to="/category/storage">Storage</Link></li>
            <li><Link className="sub" to="/category/bedroom">Bedroom</Link></li>
            <li><Link className="sub" to="/category/miscellaneous">Misc</Link></li>
            <li className="null">|</li>
            <li className="cart"><i className="fas fa-shopping-cart"></i></li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Nav;
