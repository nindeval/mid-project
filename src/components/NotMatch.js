
import React, { Component } from 'react';
import {Link} from "react-router-dom"

class NoMatch404 extends Component {
  render() {
    return (
        <div id="products" className="not-found">
          <div className="container center">
            <i className="far fa-sad-tear big-icon"></i>
            <p><b>Sorry!</b> <br /> This page does not exist</p>
          </div>
          <center>
            <Link to="/home">
              <button>
                <i className="fas fa-chevron-left button-icon"></i> I want to go back to the catalog
              </button>
            </Link>
          </center>
        </div>
    );
  }
}

export default NoMatch404;
