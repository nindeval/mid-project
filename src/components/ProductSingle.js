import React, { Component } from 'react';

class ProductSingle extends Component {
  render() {
    console.log(this.props.match);
    console.log(this.props.match.params);
    console.log(this.props.match.params.pid);
    //*  formatear la ruta de acuerdo a los parametros

    return (
      <div id="products">
        <div className="container">
          <div className="product-page flex row structure">
            <div className="productlist flex row structure-weight">
              <div className="product-single-image"></div>
              <div>
                <div className="product-single-info">Product Single data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSingle;
