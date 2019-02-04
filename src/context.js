import React, { Component } from 'react'
import {storeProducts, detilProduct} from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state= {
        products:[],
        detilProduct:detilProduct,
        cart:[]
    }

    componentDidMount() {
      this.setProduct();
    }

    setProduct = ()=> {
      let tempProducts = [];
      storeProducts.forEach(item =>{
        const singleitem = {...item};
        tempProducts = [...tempProducts,singleitem]
      })
      this.setState(()=>{
        return{products:tempProducts}
      })
    }

    getItem = (id) =>{
      const product = this.state.products.find(item => item.id === id);
      return product;
    }

    handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
        return {detilProduct:product}
      })
        
    }
    addToCart = (id) => {
     let tempProducts = [...this.state.products]
     const index = tempProducts.indexOf(this.getItem(id))
     const product = tempProducts[index]
     product.inCart = true
     product.count = 1
     const price = product.price
     product.total = price

     this.setState(()=> {
       return {products:tempProducts,cart:[...this.state.cart,product]}
     },() =>{
      console.log(this.state);
      
    }
     )
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