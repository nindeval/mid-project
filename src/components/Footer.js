import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Footer extends Component{
  render (){
    return(
      <div className="footer">
        <footer>
          <div className  ="wrap">
              <div className="row">
                <section>
                  <div className="container">
                    <center>
                      <Link to="/home">
                        <img src="/mf-logo-black.svg" />
                      </Link>
                    </center>
                    <div className="flex row structure">
                      <div className="flex row structure-weight">
                        <div className="flex element a">
                          <div className="content">
                            <p className="footer-title">Company</p>
                            <li><Link to="/about"> About </Link></li>
                            <li><Link to="#"> Press </Link></li>
                            <li><Link to="/terms"> Terms + Conditions </Link></li>
                          </div>
                        </div>
                        <div className="flex element a">
                          <div className="content">
                            <p className="footer-title">Categories</p>
                            <li><Link to="/category/seating">Seating</Link></li>
                            <li><Link to="/category/tables">Tables</Link></li>
                            <li><Link to="/category/miscellaneous">Misc</Link></li>
                          </div>
                        </div>
                        <div className="flex element a">
                          <div className="content footer-social">
                            <p className="footer-title">Social</p>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-pinterest"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
           </div>
         </footer>
      </div>
    );
  }
}
export default Footer;
