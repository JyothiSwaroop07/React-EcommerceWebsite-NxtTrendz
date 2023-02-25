import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            className="products-image"
            alt="cart"
          />
        </div>
      </>
    )
  }
}

export default Cart
