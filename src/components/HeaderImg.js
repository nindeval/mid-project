import React, {Component} from 'react';


class HeaderImg extends Component{
  render (){
    return(
      <div>
        <div className="bg">
          <h1>Main Title</h1>
          <span>Main description<br /> and more description</span>
        </div>
        <div className="container">
          <h2 className="header-text">HeaderImg</h2>
          <span className="description">Description text</span>
        </div>
      </div>
    );
  }
}
export default HeaderImg;
