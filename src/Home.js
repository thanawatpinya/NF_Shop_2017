import React, {Component} from 'react';
import './Csshome.css'
import { Glyphicon, Button } from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="sidebar-col" id="sidebar">
          <div>
            <div id="cart-div">
              <label id="cartfont" className="set-text-white">Cart</label>
            </div>
            <hr className="hrwidth"/>
            <div id="cartlist">
              <div id="in-cartlist">
                <label id="name-item">Product Name</label>
                <label>Amount</label>
                <label>Price</label>
              </div>
            </div>
          </div>
          <div className="checkoutset">
            <div id="button">
              <button className="button button-hover">Checkout</button>
            </div>
            <div id="total-content">
              <label>Total Price : </label><label>0 </label>
            </div>
          </div>
        </div>
        <div className="flex-wrap">
          <div className="flex-item">
            <div className="flex-img">
              img
            </div>
            <div>
              product content
            </div>
            <div className="align-butt">
              <button className="but-cart" value="Purchase">
                <Glyphicon glyph="shopping-cart" />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-item">
            <div className="flex-img">
              img
            </div>
            <div>
              product content
            </div>
            <div className="align-butt">
              <button className="btn but-cart" value="Purchase">
                <Glyphicon glyph="shopping-cart" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
