
import React, {Component} from 'react';
import ProductCard from './ProductCard.js'
import request from 'superagent';

class MultiProducts extends Component{
  constructor(args){
    super(args)

    this.state = {
      dataList : [],
      showOnsaleList : false
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
      dataList : serverResJson,
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

  _renderCards(products){
    let listToRender = products
  //  console.log(dataList[0]);
  //  console.log("+++++++++");
    let filteredList;
    if(this.state.showOnsaleList === true){
      filteredList = products.filter((product) => {
        return product.onSale === this.state.showOnsaleList
       })
    } else {
      filteredList = products
    }

    //console.log(filteredList.map)

    let allFornitureComponentList =  filteredList.map((cardObj, i)=>{
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

  _setFilteronClick(){
    this.setState({
      showOnsaleList : !this.state.showOnsaleList
    })
  }


  render (){
    //console.log('------')
    //console.log(this.state.dataList)
    console.log(this.state.showOnsaleList);
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
          <button onClick={ ()=> { this._setFilteronClick() }}>On Sale</button>
          <button className="select" onClick={ ()=> { this._setFilteronClick() }}>All items</button>
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
