import React, { Component } from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {ProdactConsumer} from '../context'


export default class Prodact extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
      <ProductWrap className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={()       => console.log('y click me img cont')}>

            <Link to="/details">

              <img src={img} alt="product" className="card-img-top" />
            </Link>
          </div>
        </div>
      </ProductWrap>
    )
  }
}

const ProductWrap = styled.div`

`