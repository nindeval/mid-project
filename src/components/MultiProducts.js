import React, {Component} from 'react';
import ProductCard from './ProductCard.js'
import ProductSingle from './ProductSingle.js'
import request from 'superagent';

class MultiProducts extends Component{
  constructor(args){
    super(args)

    this.state = {
      dataList : []
    }
  }

_fetchFurnitureData(componentProps){
  let apiReURL = 'https://mallory-furniture-admin.now.sh/api/v1/products'
  let catInRoute = componentProps.match.params.catName

  console.log(catInRoute)

  if(typeof catInRoute !== 'undefined'){
    apiReURL = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${catInRoute}`
  }

  request
  .get(apiReURL)
  .then((serverRes)=> {
    const serverResJson = serverRes.body
    this.setState({
      dataList : serverResJson
    })
  })
  .catch((err)=> {
    console.log('a nuu maaaa!!!')
  })
}

  componentWillMount(){
    this._fetchFurnitureData(this.props)
  }

  componentWillReceiveProps(newProps){
    this._fetchFurnitureData(newProps)
  }

  _renderCards(dataList){
    let allFornitureComponentList =  this.state.dataList.map((cardObj, i)=>{
      return <ProductCard
              imgURL={cardObj.imageLink}
              title={cardObj.item}
              amount={cardObj.price}
              pid={cardObj._id}
              key={i}
               />
    })
    return allFornitureComponentList
  }

  render (){
    console.log('------')
    console.log(this.state.dataList)

    let titleText = 'All Products'
    let titleTextLower = 'All Product'

    let catInRoute = this.props.match.params.catName

    if(typeof catInRoute !== 'undefined'){
      titleText = `${catInRoute[0].toUpperCase()}${catInRoute.slice(1)}`
    }
    if(typeof catInRoute !== 'undefined'){
      titleTextLower = `${catInRoute}`
    }

    return(
      <div id="products">
        <div className="container">
          <h2 className="header-text">{titleText}</h2>
          <span className="description">All {titleTextLower} products</span>
        </div>
        <div className="row top-product-label a">
          <button>On Sale</button>
          <button>All items</button>
          <div className="clear"></div>
          <div className="top-product-label">
            <span className="showing-label">{this.state.dataList.length}</span> items showing
          </div>
        </div>
        <div className="product-page flex row structure">
          <div className="productlist flex row structure-weight">
            {this._renderCards(this.state.dataList)}
          </div>
        </div>
      </div>
    );
  }
}
export default MultiProducts;
