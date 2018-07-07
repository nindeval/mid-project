import React, { Component } from 'react';
import {Link} from "react-router-dom"


class ProductCard extends Component {
  render (){

    return (
      <div className="product-card element a">
        <Link to={`/products/${this.props.pid}`}>
          <img className="expand" src={this.props.imgURL} />
          <h4>{this.props.title}</h4>
          <p className="price">{this.props.amount}</p>
        </Link>
      </div>
    );
  }
}
export default ProductCard;
