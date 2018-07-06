import React, {Component} from 'react';
import ProductCard from './ProductCard.js'
import request from 'superagent';

class AllProducts extends Component{
  constructor(args){
    super(args)

    this.state = {
      dataList : []
    }
  }

  componentWillMount(){
    request
    .get('https://mallory-furniture-admin.now.sh/api/v1/products')
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

  _renderCards(dataList){
    let allFornitureComponentList =  this.state.dataList.map((cardObj, i)=>{
      return <ProductCard
              imgURL={cardObj.imageLink}
              title={cardObj.item}
              amount={cardObj.price}
              key={i}
               />
    })
    return allFornitureComponentList
  }

  render (){
    console.log('------')
    console.log(this.state.dataList)
    return(
      <div id="all-products">
        <h2>All products</h2>
          <div className="product-page flex row structure">
           <div className="productlist flex row structure-weight">
              {this._renderCards(this.state.userDataList) }
           </div>
         </div>
      </div>
    );
  }
}
export default AllProducts;
