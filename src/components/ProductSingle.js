import React, { Component } from 'react';
import request from 'superagent';

class ProductSingle extends Component {
  constructor(argus){
    super(argus)

    this.state = {
      productDataSample : {}
    }
  }

  _fetchSingleProductData(compProps){
    let baseurl = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    let simpleProd = this.props.match.params.pid

    let apiReURL = `https://mallory-furniture-admin.now.sh/api/v1/products/${simpleProd}`

    request
    .get(apiReURL)
    .then((serverRes)=> {
      const serverResJson = serverRes.body
      console.log(serverResJson);
      this.setState({
        productDataSample : serverResJson
      })
    })
    .catch((err)=> {
      console.log('a nuu maaaa-product!!!')
    })
  }

  componentWillMount(){
    this._fetchSingleProductData(this.props)
  }

  componentWillReceiveProps(newProductProps){
    this._fetchSingleProductData(newProductProps)
  }

  render() {
    console.log("in ProductSingle.js render()");
    console.log(this.props.match.params.pid);
    console.log(this.state.productDataSample);
    console.log("----------------------");
    return (
      <div id="products">
        <div className="container">
          <div className="product-page flex row structure">
            <div className="productlist flex row structure-weight">
              <div className="product-single-image flex b">
                <img src={this.state.productDataSample.imageLink}/>
              </div>
              <div className="product-single-info c">
                <h3>{this.state.productDataSample.item}</h3>
                <p className="price">$ {this.state.productDataSample.price}</p>
                <hr />
                <div className="api-info">
                  <small>Condition:</small> <br />
                  <p>{this.state.productDataSample.condition}</p>
                </div>
                <div className="api-info">
                  <small>Measurements:</small> <br />
                  <p><b>W:</b>{this.state.productDataSample.width}</p>
                  <p><b>H:</b>{this.state.productDataSample.height}</p>
                  <p><b>L:</b>{this.state.productDataSample.height}</p>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSingle;
