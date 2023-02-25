import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Products extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
            className="products-image"
            alt="products"
          />
        </div>
      </>
    )
  }
}

export default Products
