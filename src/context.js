import React, { Component } from 'react'
import {storeProducts, detilProduct} from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state= {
        products:storeProducts,
        detilProduct:detilProduct
    }

    handleDetail = () => {
        console.log('hi from detail');
        
    }
    addToCart = () => {
        console.log('hi from add to cart');
        
    }
  render() {
    return (
      <ProductContext.Provider value={{
       ...this.state,
       handleDetail:this.handleDetail,
       addToCart:this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProdactConsumer = ProductContext.Consumer;

export {ProductProvider, ProdactConsumer};