import React, { Component } from 'react'
import Product from './Prodact';
import Title from './Title'
import {ProdactConsumer} from '../context'

export default class ProdactList extends Component {
  render() {
    
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">

          <Title name="our" title="products"/>

          <div className="row">
          <ProdactConsumer>
            {(value)=>{
              return value.products.map( product =>{
                return  <Product key={product.id} 
                product={product} />

              })
            }}
          </ProdactConsumer>
          </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
