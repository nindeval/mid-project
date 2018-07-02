import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Footer extends Component{
  render (){
    return(
      <div className="footer-bar">
        <div className  ="container">
            <center>
              <Link to="#">
                <img src="./mf-logo-black.svg" />
              </Link>
            </center>
            <div class="row">
              <div>
                <ul>
                  <h4>Title</h4>
                  <li>subtitle</li>
                </ul>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
export default Footer;
