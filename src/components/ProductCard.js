import React, { Component } from 'react';

class ProductCard extends Component {
  render (){
    return (
      <div className="product-card element a">
        <img className="expand" src={this.props.imgURL} />
        <h4>{this.props.title}</h4>
        <p className="price">{this.props.amount}</p>
      </div>
    );
  }
}
export default ProductCard;
console.log('hola')
